import { useRef } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

import type { ImagePreviewProps, ImageProps } from './types';
import { ImageViewerCloseButton } from '#src/components/ImageViewer/ImageViewerCloseButton';
import { ImageViewerControls } from '#src/components/ImageViewer/ImageViewerControls';

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
const Controls = styled(ImageViewerControls)`
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

export const ImagePreview = ({
  item,
  container,
  minScale,
  maxScale,
  scaleStep,
  showTooltip,
  showCounter,
  showNavigation,
  actions,
  transform,
  locale,
  activeImg,
  totalImg,
  ...props
}: ImagePreviewProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      // prevent browser-specific escape key behavior (Safari exits fullscreen)
      event.preventDefault();
      // prevent other overlays from closing
      event.stopPropagation();
      actions.onClose?.();
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.target === overlayRef.current && actions.onClose?.();
  };

  const handleCloseBtnClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    actions.onClose?.();
  };

  const renderItem = (item: string | ImageProps) => {
    return typeof item === 'string' ? (
      <StyledImage src={item} $scale={transform.scale} />
    ) : (
      <StyledImage {...item} $scale={transform.scale} />
    );
  };

  return createPortal(
    <Overlay ref={overlayRef} tabIndex={-1} onMouseDown={handleMouseDown} onKeyDown={handleKeyDown}>
      {renderItem(item)}
      <CloseButton onClick={handleCloseBtnClick} />
      <Controls
        activeImg={activeImg}
        totalImg={totalImg}
        showTooltip={showTooltip}
        showCounter={showCounter}
        showNavigation={showNavigation}
        actions={actions}
        minScale={minScale}
        maxScale={maxScale}
        transform={transform}
        locale={locale}
      />
    </Overlay>,
    container || document.body,
  );
};
