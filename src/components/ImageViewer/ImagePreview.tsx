import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

import type { ImagePreviewProps, ImageProps, TransformType } from './types';
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
const StyledImage = styled.img<{ $scale: number }>`
  max-width: 100%;
  max-height: 70%;
  transform: ${(p) => `scale(${p.$scale}, ${p.$scale})`};
`;
const defaultTransform: TransformType = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  flipX: false,
  flipY: false,
};
const emptyHandler = () => {
  return;
};

export const ImagePreview = ({
  item,
  container,
  minScale = 0,
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

  useEffect(() => {
    const loadEventListener = (e: any) => {
      const { naturalWidth, naturalHeight, width, height } = e.target;
      console.log(
        `Natural size: ${naturalWidth} x ${naturalHeight} pixels\nDisplayed size: ${width} x ${height} pixels`,
      );
    };
    const imgNode = imgRef.current;
    if (imgNode) {
      imgNode.addEventListener('load', loadEventListener);
      return () => imgNode.removeEventListener('error', loadEventListener);
    }
  }, []);

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
    handleScaleChange(newScale < minScale ? minScale : newScale);
  };

  const renderItem = (item: string | ImageProps) => {
    return typeof item === 'string' ? (
      <StyledImage src={item} ref={imgRef} $scale={scale} />
    ) : (
      <StyledImage {...item} ref={imgRef} $scale={scale} />
    );
  };

  return createPortal(
    <Overlay ref={overlayRef} tabIndex={-1} onMouseDown={handleMouseDown} onKeyDown={handleKeyDown}>
      {renderItem(item)}
      <CloseButton onClick={handleCloseBtnClick} />
      <Toolbar
        activeImg={activeImg}
        totalImg={totalImg}
        showTooltip={showTooltip}
        showCounter={showCounter}
        showNavigation={showNavigation}
        actions={{
          onActiveImgChange: onActiveChange,
          onFlipX: emptyHandler,
          onFlipY: emptyHandler,
          onRotateLeft: emptyHandler,
          onRotateRight: emptyHandler,
          onZoomOut: handleZoomOut,
          onZoomIn: handleZoomIn,
          onClose: handleClose,
        }}
        minScale={minScale}
        maxScale={maxScale}
        transform={{ ...defaultTransform, scale }}
        locale={locale}
      />
    </Overlay>,
    container || document.body,
  );
};
