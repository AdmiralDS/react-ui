import { useState } from 'react';
import styled, { type css } from 'styled-components';

import { ImageMiniature } from '#src/components/ImageViewer/ImageMiniature';
import { ImagePreview } from '#src/components/ImageViewer/ImagePreview';
import type { ImageProps, ImageViewerProps } from '#src/components/ImageViewer/types';

export * from './types';

const Wrapper = styled.div<{ $previewGroupMixin?: ReturnType<typeof css> }>`
  box-sizing: border-box;
  height: 300px;
  width: 500px;
  background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  ${(p) => p.$previewGroupMixin}
`;

export const ImageViewer = ({
  items,
  defaultActiveImg = 0,
  appearance = 'single',
  previewGroupMixin,
  dimension = 'm',
  container,
  minScale = 0,
  maxScale = 10,
  scaleStep = 0.5,
  showTooltip = true,
  showCounter = true,
  showNavigation = true,
  locale,
  activeImg,
  onActiveChange,
  visible,
  onVisibleChange,
  ...props
}: ImageViewerProps) => {
  const [activeImgState, setActiveImgState] = useState(defaultActiveImg);
  const activeImgInner = activeImg ?? activeImgState;
  const handleActiveChange = (newIndex: number) => {
    setActiveImgState(newIndex);
    onActiveChange?.(newIndex);
  };

  const [visibleState, setVisibleState] = useState(false);
  const visibleInner = visible ?? visibleState;
  const handleVisibleChange = (newState: boolean) => {
    setVisibleState(newState);
    onVisibleChange?.(newState);
  };

  const renderItem = (item: string | ImageProps, index: number) => {
    const handleMouseDown = () => {
      setActiveImgState(index);
      setVisibleState(true);
    };
    return typeof item === 'string' ? (
      <ImageMiniature src={item} dimension={dimension} onMouseDown={handleMouseDown} />
    ) : (
      <ImageMiniature {...item} dimension={dimension} onMouseDown={handleMouseDown} />
    );
  };

  const miniatures =
    appearance === 'single'
      ? renderItem(items[defaultActiveImg], defaultActiveImg)
      : items.map((item, index) => {
          return renderItem(item, index);
        });

  return (
    <Wrapper {...props} $previewGroupMixin={previewGroupMixin}>
      {miniatures}
      {visibleInner && (
        <ImagePreview
          item={items[activeImgInner]}
          container={container}
          minScale={minScale}
          maxScale={maxScale}
          scaleStep={scaleStep}
          showTooltip={showTooltip}
          showCounter={showCounter && items.length > 1}
          showNavigation={showNavigation && items.length > 1}
          locale={locale}
          activeImg={activeImgInner}
          totalImg={items.length}
          onVisibleChange={handleVisibleChange}
          onActiveChange={handleActiveChange}
        />
      )}
    </Wrapper>
  );
};
