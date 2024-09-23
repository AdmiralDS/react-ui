import type { ImageViewerControlsProps } from '#src/components/ImageViewer/ImageViewerControls';
import { ImageViewerControls } from '#src/components/ImageViewer/ImageViewerControls';
import styled from 'styled-components';

export interface ImageViewerProps extends ImageViewerControlsProps {}

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 300px;
  width: 500px;
  background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageViewer = ({ renderPanel, children, ...props }: ImageViewerProps) => {
  return (
    <Wrapper {...props}>
      <ImageViewerControls />
    </Wrapper>
  );
};
