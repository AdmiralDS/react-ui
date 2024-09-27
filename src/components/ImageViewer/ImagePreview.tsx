import { useRef } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

import type { ImagePreviewProps, ImageProps } from './types';
import { ImageViewerCloseButton } from '#src/components/ImageViewer/ImageViewerCloseButton';
import { ImageViewerControls } from '#src/components/ImageViewer/ImageViewerControls';
import * as React from 'react';
import { getKeyboardFocusableElements } from '#src/components/common/utils/getKeyboardFocusableElements';
import { ImageMiniature } from '#src/components/ImageViewer/ImageMiniature';

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
const StyledImage = styled.img`
  max-width: 100%;
  max-height: 70%;
`;

export const ImagePreview = ({
  item,
  current,
  total,
  container,
  onClose,
  showCounter,
  showTooltip,
  showNavigation,
  ...props
}: ImagePreviewProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      // prevent browser-specific escape key behavior (Safari exits fullscreen)
      event.preventDefault();
      // prevent other overlays from closing
      event.stopPropagation();
      onClose?.();
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.target === overlayRef.current && onClose?.();
  };

  const handleCloseBtnClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClose?.();
  };

  const renderItem = (item: string | ImageProps) => {
    return typeof item === 'string' ? <StyledImage src={item} /> : <StyledImage {...item} />;
  };

  return createPortal(
    <Overlay ref={overlayRef} tabIndex={-1} onMouseDown={handleMouseDown} onKeyDown={handleKeyDown}>
      <CloseButton onClick={handleCloseBtnClick} />
      <Controls
        current={current}
        total={total}
        showCounter={showCounter}
        showTooltip={showTooltip}
        showNavigation={showNavigation}
      />
      {renderItem(item)}
    </Overlay>,
    container || document.body,
  );
};
