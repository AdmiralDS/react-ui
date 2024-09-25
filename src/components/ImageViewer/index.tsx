import styled, { type css } from 'styled-components';

import { ImageMiniature } from '#src/components/ImageViewer/ImageMiniature';
import type { ImageMiniatureDimension, ImageProps, ImageViewerProps } from '#src/components/ImageViewer/types';

export * from './types';

const Wrapper = styled.div<{ $cssMixin?: ReturnType<typeof css> }>`
  box-sizing: border-box;
  height: 300px;
  width: 500px;
  background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  ${(p) => p.$cssMixin}
`;

const renderItem = (item: string | ImageProps, dimension: ImageMiniatureDimension) => {
  return typeof item === 'string' ? (
    <ImageMiniature src={item} dimension={dimension} />
  ) : (
    <ImageMiniature dimension={dimension} {...item} />
  );
};

export const ImageViewer = ({
  items,
  dimension = 'm',
  appearance = 'single',
  previewGroupMixin,
  ...props
}: ImageViewerProps) => {
  const miniatures =
    appearance === 'single'
      ? renderItem(items[0], dimension)
      : items.map((item) => {
          return renderItem(item, dimension);
        });
  return <Wrapper {...props}>{miniatures}</Wrapper>;
};
