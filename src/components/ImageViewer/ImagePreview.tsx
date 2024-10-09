import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

import type { ImagePreviewProps, ImageProps } from './types';
import { ImageViewerCloseButton } from '#src/components/ImageViewer/ImageViewerCloseButton';
import { ImageViewerToolbar } from '#src/components/ImageViewer/ImageViewerToolbar';
import { getClientSize } from '#src/components/ImageViewer/getFixScaleEleTransPosition';

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

const StyledImage = styled.img<{ $transitionEnabled: boolean }>`
  outline: none;
  max-width: 100%;
  max-height: 70%;
  transition: ${({ $transitionEnabled }) => ($transitionEnabled ? 'all 0.3s ease-in-out' : 'none')};
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
}
const ImageView = forwardRef<HTMLImageElement, ImageViewProps>(
  ({ item, scale, flipX, flipY, rotate, x, y, transitionEnabled, ...props }, ref) => {
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
  minScale,
  maxScale = 10,
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

  const handleClose = () => {
    onVisibleChange?.(false);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      // prevent browser-specific escape key behavior (Safari exits fullscreen)
      event.preventDefault();
      // prevent other overlays from closing
      event.stopPropagation();
      handleClose();
    }
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
    const newScale = scale + scaleStep;
    handleScaleChange(newScale > maxScale ? maxScale : newScale);
  };
  const handleZoomOut = () => {
    const newScale = scale - scaleStep;
    handleScaleChange(newScale < minScaleInner ? minScaleInner : newScale);
  };

  const [minScaleState, setMinScaleState] = useState(1.0);
  const minScaleInner = minScale ?? minScaleState;
  const [realScaleState, setRealScaleState] = useState(1.0);
  const handleDoubleClick = () => {
    setScale((prevState) => (prevState === realScaleState ? 1 : realScaleState));
  };
  useLayoutEffect(() => {
    const loadEventListener = (e: any) => {
      const { naturalWidth, naturalHeight, width, height } = e.target;
      e.target.focus();
      setMinScaleState(+(height / naturalHeight).toFixed(1));
      setRealScaleState(+(naturalHeight / height).toFixed(1));
      console.log(
        `Natural size: ${naturalWidth} x ${naturalHeight} pixels\nDisplayed size: ${width} x ${height} pixels`,
      );
    };

    const imgNode = imgRef.current;
    if (imgNode) {
      imgNode.addEventListener('load', loadEventListener);
      return () => {
        imgNode.removeEventListener('load', loadEventListener);
      };
    }
  }, []);

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
  };
  const handleRotateRight = () => {
    setRotate((prevState) => prevState + 90);
  };

  const [isMoving, setMoving] = useState(false);
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const startPositionInfo = useRef({
    diffX: 0,
    diffY: 0,
    transformX: 0,
    transformY: 0,
  });

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
    console.log('startPositionInfo', startPositionInfo);
    console.log(imgRef.current.getBoundingClientRect());
    setMoving(true);
  };
  const handleImgMouseMove: React.MouseEventHandler<HTMLImageElement> = (event) => {
    if (isMoving && imgRef.current) {
      requestAnimationFrame(() => {
        setCoordinates({
          x: event.pageX - startPositionInfo.current.diffX,
          y: event.pageY - startPositionInfo.current.diffY,
        });
      });
    }
  };

  const handleImgMouseUp: React.MouseEventHandler<HTMLImageElement> = () => {
    if (isMoving && imgRef.current) {
      setMoving(false);

      /** No need to restore the position when the picture is not moved, So as not to interfere with the click */
      const { transformX, transformY } = startPositionInfo.current;
      const hasChangedPosition = coordinates.x !== transformX && coordinates.y !== transformY;
      if (!hasChangedPosition) return;

      console.log('coordinates', coordinates);
      const width = imgRef.current.offsetWidth * scale;
      const height = imgRef.current.offsetHeight * scale;
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { left, right, top, bottom } = imgRef.current.getBoundingClientRect();
      console.log(imgRef.current.getBoundingClientRect());
      const isRotate = rotate % 180 !== 0;
      const { width: clientWidth, height: clientHeight } = getClientSize();

      let x: number, y: number;
      const ww = isRotate ? height : width;
      const hh = isRotate ? width : height;
      if (width <= clientWidth && height <= clientHeight) {
        x = 0;
        y = 0;
      } else {
        x = coordinates.x;
        y = coordinates.y;
        if (bottom < clientHeight || right < clientWidth || left > 0 || top > 0) {
          console.log('bottom/right/left/top');
          if (bottom < clientHeight) {
            y += (clientHeight - bottom) / scale;
          } else if (top > 0) {
            y -= top / scale;
          }
          if (right < clientWidth) {
            x += (clientWidth - right) / scale;
          } else if (left > 0) {
            x -= left / scale;
          }
        }
      }

      setCoordinates({ x, y });
    }
  };

  return createPortal(
    <Overlay ref={overlayRef} tabIndex={-1} onMouseDown={handleMouseDown} onKeyDown={handleKeyDown}>
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
        onMouseMove={handleImgMouseMove}
        onMouseUp={handleImgMouseUp}
        transitionEnabled={!isMoving}
      />
      <CloseButton onClick={handleCloseBtnClick} />
      <Toolbar
        activeImg={activeImg}
        totalImg={totalImg}
        showTooltip={showTooltip}
        showCounter={showCounter}
        showNavigation={showNavigation}
        actions={{
          onActiveImgChange: onActiveChange,
          onFlipX: handleFlipXChange,
          onFlipY: handleFlipYChange,
          onRotateLeft: handleRotateLeft,
          onRotateRight: handleRotateRight,
          onZoomOut: handleZoomOut,
          onZoomIn: handleZoomIn,
          onClose: handleClose,
        }}
        minScale={minScaleInner}
        maxScale={maxScale}
        transform={{ x: coordinates.x, y: coordinates.y, rotate, scale, flipX, flipY }}
        locale={locale}
      />
    </Overlay>,
    container || document.body,
  );
};