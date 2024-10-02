import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

import type { ImagePreviewProps, ImageProps } from './types';
import { ImageViewerCloseButton } from '#src/components/ImageViewer/ImageViewerCloseButton';
import { ImageViewerToolbar } from '#src/components/ImageViewer/ImageViewerToolbar';

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
const StyledImage = styled.img<{ $scale: number; $flipX: boolean; $flipY: boolean; $rotate: number }>`
  outline: none;
  max-width: 100%;
  max-height: 70%;
  transition: all 0.3s ease-in-out;
  transform: ${(p) =>
    `scale(${p.$scale * (p.$flipX ? -1 : 1)}, ${p.$scale * (p.$flipY ? -1 : 1)}) rotate(${p.$rotate}deg)`};
`;

interface ImageViewProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  item: string | ImageProps;
  scale: number;
  flipX: boolean;
  flipY: boolean;
  rotate: number;
}
const ImageView = forwardRef<HTMLImageElement, ImageViewProps>(
  ({ item, scale, flipX, flipY, rotate, ...props }, ref) => {
    const itemSrc = typeof item === 'string' ? item : item.src;
    const itemProps = typeof item === 'string' ? undefined : item;
    return (
      <StyledImage
        {...itemProps}
        {...props}
        src={itemSrc}
        draggable="true"
        tabIndex={-1}
        ref={ref}
        $scale={scale}
        $flipX={flipX}
        $flipY={flipY}
        $rotate={rotate}
        //onDoubleClick={handleDoubleClick}
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

  return createPortal(
    <Overlay ref={overlayRef} tabIndex={-1} onMouseDown={handleMouseDown} onKeyDown={handleKeyDown}>
      <ImageView
        item={item}
        ref={imgRef}
        scale={scale}
        flipX={flipX}
        flipY={flipY}
        rotate={rotate}
        onDoubleClick={handleDoubleClick}
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
        transform={{ x: 0, y: 0, rotate, scale, flipX, flipY }}
        locale={locale}
      />
    </Overlay>,
    container || document.body,
  );
};
