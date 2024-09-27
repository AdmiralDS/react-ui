import { useRef } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

import type { ImagePreviewProps } from './types';
import { ImageViewerCloseButton } from '#src/components/ImageViewer/ImageViewerCloseButton';
import { ImageViewerControls } from '#src/components/ImageViewer/ImageViewerControls';
import * as React from 'react';

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

export const ImagePreview = ({
  current,
  total,
  container,
  onClose,
  showCounter,
  showTooltip,
  ...props
}: ImagePreviewProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.target === overlayRef.current && onClose?.();
  };

  const handleCloseBtnClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClose?.();
  };

  return createPortal(
    <Overlay ref={overlayRef} tabIndex={-1} onMouseDown={handleMouseDown}>
      <CloseButton onClick={handleCloseBtnClick} />
      <Controls current={current} total={total} showCounter={showCounter} showTooltip={showTooltip} />
    </Overlay>,
    container || document.body,
  );
};
