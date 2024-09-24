import styled from 'styled-components';

//import { ImageViewerControls } from '#src/components/ImageViewer/ImageViewerControls';
import { ImageMiniature } from '#src/components/ImageViewer/ImageMiniature';
import type { ImageViewerProps } from '#src/components/ImageViewer/types';

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 300px;
  width: 500px;
  background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ImageViewer = ({
  dimension = 'm',
  appearance = 'single',
  renderPanel,
  children,
  ...props
}: ImageViewerProps) => {
  return (
    <Wrapper {...props}>
      <ImageMiniature
        src="https://avatars.mds.yandex.net/i?id=5b90edeb3a4635e999b9331f3e5b34df_l-4551895-images-thumbs&n=13"
        alt="Cute corgie"
        dimension={dimension}
      />
      <ImageMiniature
        src="ndex.net/i?id=5b90edeb3a4635e999b9331f3e5b34df_l-4551895-images-thumbs&n=13"
        alt="Cute corgie"
        dimension={dimension}
      />
    </Wrapper>
  );
};
