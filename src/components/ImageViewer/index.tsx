import { useState } from 'react';
import styled, { type css } from 'styled-components';

import { ImageMiniature } from '#src/components/ImageViewer/ImageMiniature';
import { ImagePreview } from '#src/components/ImageViewer/ImagePreview';
import type { ImageProps, ImageViewerProps } from '#src/components/ImageViewer/types';

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

export const ImageViewer = ({
  items,
  dimension = 'm',
  appearance = 'single',
  previewGroupMixin,
  ...props
}: ImageViewerProps) => {
  const [current, setCurrent] = useState(0);
  const [opened, setOpened] = useState(false);

  const renderItem = (item: string | ImageProps, index: number) => {
    const handleMouseDown = () => {
      setCurrent(index);
      setOpened(true);
    };
    return typeof item === 'string' ? (
      <ImageMiniature src={item} dimension={dimension} onMouseDown={handleMouseDown} />
    ) : (
      <ImageMiniature {...item} dimension={dimension} onMouseDown={handleMouseDown} />
    );
  };

  const miniatures =
    appearance === 'single'
      ? renderItem(items[0], 0)
      : items.map((item, index) => {
          return renderItem(item, index);
        });
  return (
    <Wrapper {...props}>
      {miniatures}
      {opened && (
        <ImagePreview
          item={items[current]}
          showCounter
          showTooltip
          showNavigation={items.length > 1}
          total={items.length}
          current={current}
          onClose={() => {
            setOpened(false);
          }}
          onNavButtonClick={(newIndex) => setCurrent(newIndex)}
        />
      )}
    </Wrapper>
  );
};
