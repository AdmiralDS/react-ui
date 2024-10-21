import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

import type { ImagePreviewProps, ImageProps } from './types';
import { ImageViewerCloseButton } from '#src/components/ImageViewer/ImageViewerCloseButton';
import { ImageViewerToolbar } from '#src/components/ImageViewer/ImageViewerToolbar';
import { getClientSize, getNext, getPrev, updatePosition } from '#src/components/ImageViewer/utils';
import { BASE_SCALE_RATIO, IMAGE_SCALE_PRECISION, WHEEL_MAX_SCALE_RATIO } from '#src/components/ImageViewer/constants';

import { keyboardKey } from '../common/keyboardKey';

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});
  transition: opacity 0.3s ease 0s;
  z-index: var(--admiral-z-index-modal, ${({ theme }) => theme.zIndex.modal});
  outline: none;
`;

const CloseButton = styled(ImageViewerCloseButton)`
  position: absolute;
  right: 22px;
  top: 18px;
`;
const Toolbar = styled(ImageViewerToolbar)`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translate(-50%);
`;

const StyledImage = styled.img<{ $transitionEnabled: boolean; $isVisible?: boolean }>`
  outline: none;
  max-width: 100%;
  max-height: 70%;
  transition: ${({ $transitionEnabled }) => ($transitionEnabled ? 'all 0.3s ease-in-out' : 'none')};
  cursor: grab;
  display: ${(p) => (p.$isVisible ? 'block' : 'none')};

  &:active {
    cursor: grabbing;
  }
`;

interface ImageViewProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  item: string | ImageProps;
  scale: number;
  flipX: boolean;
  flipY: boolean;
  rotate: number;
  x: number;
  y: number;
  transitionEnabled: boolean;
  isVisible?: boolean;
}
const ImageView = forwardRef<HTMLImageElement, ImageViewProps>(
  ({ item, scale, flipX, flipY, rotate, x, y, transitionEnabled, isVisible = true, ...props }, ref) => {
    const itemSrc = typeof item === 'string' ? item : item.src;
    const itemProps = typeof item === 'string' ? undefined : item;

    return (
      <StyledImage
        {...itemProps}
        {...props}
        src={itemSrc}
        tabIndex={-1}
        ref={ref}
        $transitionEnabled={transitionEnabled}
        $isVisible={isVisible}
        style={{
          transform: `translate(${x}px, ${y}px) scale(${
            flipX ? '-' : ''
          }${scale}, ${flipY ? '-' : ''}${scale}) rotate(${rotate}deg)`,
        }}
      />
    );
  },
);

export const ImagePreview = ({
  item,
  container,
  minScale = 1,
  maxScale = 10,
  errorMiniature,
  scaleStep = 0.5,
  showTooltip,
  showCounter,
  showNavigation,
  locale,
  activeImg,
  totalImg,
  onVisibleChange,
  onActiveChange,
  ...props
}: ImagePreviewProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [needUpdateCoordinates, setNeedUpdateCoordinates] = useState(false);
  const handleNeedUpdateCoordinatesChange = (newState: boolean) => {
    setTimeout(() => setNeedUpdateCoordinates(newState), 250);
  };

  const [imgNaturalHeight, setImgNaturalHeight] = useState(0);
  const [errorOnLoadImg, setErrorOnLoadImg] = useState(false);
  useLayoutEffect(() => {
    const loadEventListener = (e: any) => {
      setImgNaturalHeight(e.target.naturalHeight);
      overlayRef.current?.focus();
    };
    const errorEventListener = () => {
      setErrorOnLoadImg(true);
      overlayRef.current?.focus();
    };

    const imgNode = imgRef.current;
    if (imgNode) {
      imgNode.addEventListener('load', loadEventListener);
      imgNode.addEventListener('error', errorEventListener);
      return () => {
        imgNode.removeEventListener('load', loadEventListener);
        imgNode.removeEventListener('error', errorEventListener);
      };
    }
  }, [activeImg]);

  const [imgRenderedWidth, setImgRenderedWidth] = useState(0);
  const [imgRenderedHeight, setImgRenderedHeight] = useState(0);
  useLayoutEffect(() => {
    function setRenderedImgSize(width: number, height: number) {
      setImgRenderedWidth(width);
      setImgRenderedHeight(height);
    }
    if (imgRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => setRenderedImgSize(entry.contentRect.width || 0, entry.contentRect.height || 0));
      });
      resizeObserver.observe(imgRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  const handleClose = () => {
    onVisibleChange?.(false);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.target === overlayRef.current && handleClose();
  };

  const handleCloseBtnClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleClose();
  };

  const [scale, setScale] = useState(1);
  const handleScaleChange = (newScale: number) => {
    setScale(newScale);
  };
  const handleZoomIn = () => {
    handleZoomChange(BASE_SCALE_RATIO + scaleStep);
  };
  const handleZoomOut = () => {
    handleZoomChange(BASE_SCALE_RATIO / (BASE_SCALE_RATIO + scaleStep));
  };

  const minScaleInner = minScale ?? 1;
  const [realScaleState, setRealScaleState] = useState(1.0);
  const [fullScaleState, setFullScaleState] = useState(1.0);
  const handleDoubleClick = () => {
    setScale((prevState) => (prevState === realScaleState ? 1 : realScaleState));
  };
  const handleFkeyDown = () => {
    setScale((prevState) => (prevState === fullScaleState ? 1 : fullScaleState));
  };

  useLayoutEffect(() => {
    setRealScaleState(+(imgNaturalHeight / imgRenderedHeight).toFixed(IMAGE_SCALE_PRECISION));
    setFullScaleState(() => {
      if (overlayRef.current) {
        const { width: overlayWidth, height: overlayHeight } = overlayRef.current.getBoundingClientRect();

        return Math.min(
          +(overlayWidth / imgRenderedWidth).toFixed(IMAGE_SCALE_PRECISION),
          +(overlayHeight / imgRenderedHeight).toFixed(IMAGE_SCALE_PRECISION),
        );
      }
      return 1;
    });
  }, [imgRenderedHeight, imgNaturalHeight]);

  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);
  const handleFlipXChange = () => {
    setFlipX((prevState) => !prevState);
  };
  const handleFlipYChange = () => {
    setFlipY((prevState) => !prevState);
  };

  const [rotate, setRotate] = useState(0);
  const handleRotateLeft = () => {
    setRotate((prevState) => prevState - 90);
    handleNeedUpdateCoordinatesChange(true);
  };
  const handleRotateRight = () => {
    setRotate((prevState) => prevState + 90);
    handleNeedUpdateCoordinatesChange(true);
  };

  const [isMoving, setMoving] = useState(false);
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const startPositionInfo = useRef({
    diffX: 0,
    diffY: 0,
    transformX: 0,
    transformY: 0,
  });

  const clearImgTransformStates = () => {
    setCoordinates({ x: 0, y: 0 });
    setScale(1);
    setFlipX(false);
    setFlipY(false);
    setRotate(0);
  };
  const handleActiveChange = (index: number) => {
    clearImgTransformStates();
    onActiveChange?.(index);
    setErrorOnLoadImg(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const code = keyboardKey.getCode(event);
    if (code === keyboardKey.Escape) {
      // prevent browser-specific escape key behavior (Safari exits fullscreen)
      event.preventDefault();
      // prevent other overlays from closing
      event.stopPropagation();
      handleClose();
    } else if (code === keyboardKey.ArrowLeft) {
      if (activeImg > 0) {
        handleActiveChange(getPrev(activeImg, totalImg));
      }
    } else if (code === keyboardKey.ArrowRight || code === keyboardKey[' ']) {
      if (activeImg < totalImg - 1) {
        handleActiveChange(getNext(activeImg, totalImg));
      }
    } else if (code === keyboardKey.ArrowUp) {
      handleZoomIn();
    } else if (code === keyboardKey.ArrowDown) {
      handleZoomOut();
    } else if (code === keyboardKey.Enter) {
      handleDoubleClick();
    } else if (code === keyboardKey.F) {
      event.preventDefault();
      event.stopPropagation();
      handleFkeyDown();
    }
  };

  const handleImgMouseDown: React.MouseEventHandler<HTMLImageElement> = (event) => {
    // Only allow main button
    if (event.button !== 0 || !imgRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    startPositionInfo.current = {
      diffX: event.pageX - coordinates.x,
      diffY: event.pageY - coordinates.y,
      transformX: coordinates.x,
      transformY: coordinates.y,
    };
    setMoving(true);
  };

  const handleImgMouseMove = (event: MouseEvent) => {
    if (isMoving && imgRef.current) {
      setCoordinates({
        x: event.pageX - startPositionInfo.current.diffX,
        y: event.pageY - startPositionInfo.current.diffY,
      });
    }
  };

  const handleImgMouseUp = () => {
    if (isMoving && imgRef.current) {
      setMoving(false);

      /** No need to restore the position when the picture is not moved, So as not to interfere with the click */
      const { transformX, transformY } = startPositionInfo.current;
      const hasChangedPosition = coordinates.x !== transformX && coordinates.y !== transformY;
      if (!hasChangedPosition) return;

      const width = imgRef.current.offsetWidth * scale;
      const height = imgRef.current.offsetHeight * scale;
      const { left, top } = imgRef.current.getBoundingClientRect();

      const updated = updatePosition(width, height, left, top, rotate, coordinates);
      requestAnimationFrame(() => {
        setCoordinates(updated);
      });
    }
  };
  /** Scale according to the position of centerX and centerY */
  const handleZoomChange = (ratio: number, centerX?: number, centerY?: number, isTouch?: boolean) => {
    if (imgRef.current) {
      const { width, height, offsetWidth, offsetHeight, offsetLeft, offsetTop } = imgRef.current;

      let newRatio = ratio;
      let newScale = scale * ratio;
      if (newScale > maxScale) {
        newScale = maxScale;
        newRatio = maxScale / scale;
      } else if (newScale < minScale) {
        // For mobile interactions, allow scaling down to the minimum scale.
        newScale = isTouch ? newScale : minScale;
        newRatio = newScale / scale;
      }

      /** Default center point scaling */
      const mergedCenterX = centerX ?? innerWidth / 2;
      const mergedCenterY = centerY ?? innerHeight / 2;

      const diffRatio = newRatio - 1;
      /** Deviation calculated from image size */
      const diffImgX = diffRatio * width * 0.5;
      const diffImgY = diffRatio * height * 0.5;
      /** The difference between the click position and the edge of the document */
      const diffOffsetLeft = diffRatio * (mergedCenterX - coordinates.x - offsetLeft);
      const diffOffsetTop = diffRatio * (mergedCenterY - coordinates.y - offsetTop);
      /** Final positioning */
      let newX = coordinates.x - (diffOffsetLeft - diffImgX);
      let newY = coordinates.y - (diffOffsetTop - diffImgY);

      /**
       * When zooming the image
       * When the image size is smaller than the width and height of the window, the position is initialized
       */
      if (ratio < 1 && newScale === 1) {
        const mergedWidth = offsetWidth * newScale;
        const mergedHeight = offsetHeight * newScale;
        const { width: clientWidth, height: clientHeight } = getClientSize();
        if (mergedWidth <= clientWidth && mergedHeight <= clientHeight) {
          newX = 0;
          newY = 0;
        }
      }

      handleScaleChange(newScale);
      setCoordinates({ x: newX, y: newY });
      handleNeedUpdateCoordinatesChange(true);
    }
  };

  const onWheel = (event: React.WheelEvent<HTMLImageElement>) => {
    if (event.deltaY == 0) return;

    // Scale ratio depends on the deltaY size
    const scaleRatio = Math.abs(event.deltaY / 100);
    // Limit the maximum scale ratio
    const mergedScaleRatio = Math.min(scaleRatio, WHEEL_MAX_SCALE_RATIO);
    // Scale the ratio each time
    let ratio = BASE_SCALE_RATIO + mergedScaleRatio * scaleStep;
    if (event.deltaY > 0) {
      ratio = BASE_SCALE_RATIO / ratio;
    }
    handleZoomChange(ratio, event.clientX, event.clientY);
  };
  useEffect(() => {
    document.addEventListener('mousemove', handleImgMouseMove);
    document.addEventListener('mouseup', handleImgMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleImgMouseMove);
      document.removeEventListener('mouseup', handleImgMouseUp);
    };
  }, [isMoving, coordinates, rotate]);
  useEffect(() => {
    if (needUpdateCoordinates && !isMoving && imgRef.current) {
      const width = imgRef.current.offsetWidth * scale;
      const height = imgRef.current.offsetHeight * scale;
      const imgRect = imgRef.current.getBoundingClientRect();

      const updated = updatePosition(width, height, imgRect.left, imgRect.top, rotate, coordinates);
      setCoordinates(updated);
      setNeedUpdateCoordinates(false);
    }
  }, [needUpdateCoordinates]);

  return createPortal(
    <Overlay ref={overlayRef} tabIndex={-1} onMouseDown={handleMouseDown} onKeyDown={handleKeyDown}>
      {errorOnLoadImg && errorMiniature}
      <ImageView
        item={item}
        ref={imgRef}
        scale={scale}
        flipX={flipX}
        flipY={flipY}
        rotate={rotate}
        x={coordinates.x}
        y={coordinates.y}
        onDoubleClick={handleDoubleClick}
        onMouseDown={handleImgMouseDown}
        transitionEnabled={!isMoving}
        isVisible={!errorOnLoadImg}
        onWheel={onWheel}
      />
      <CloseButton onClick={handleCloseBtnClick} />
      <Toolbar
        activeImg={activeImg}
        totalImg={totalImg}
        showTooltip={showTooltip}
        showCounter={showCounter}
        showNavigation={showNavigation}
        actions={{
          onActiveImgChange: handleActiveChange,
          onFlipX: handleFlipXChange,
          onFlipY: handleFlipYChange,
          onRotateLeft: handleRotateLeft,
          onRotateRight: handleRotateRight,
          onZoomOut: handleZoomOut,
          onZoomIn: handleZoomIn,
          onClose: handleClose,
        }}
        actionsDisabled={errorOnLoadImg}
        minScale={minScaleInner}
        maxScale={maxScale}
        transform={{ x: coordinates.x, y: coordinates.y, rotate, scale, flipX, flipY }}
        locale={locale}
      />
    </Overlay>,
    container || document.body,
  );
};
