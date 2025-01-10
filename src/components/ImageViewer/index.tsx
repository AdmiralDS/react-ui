import { useMemo, useState } from 'react';
import styled, { type css } from 'styled-components';

import { EmptyMiniature, ImageMiniature } from '#src/components/ImageViewer/ImageMiniature';
import { ImagePreview } from '#src/components/ImageViewer/ImagePreview';
import type { ImageProps, ImageViewerProps } from '#src/components/ImageViewer/types';

import { uid } from '#src/components/common/uid';

export * from './types';

const Wrapper = styled.div<{ $previewGroupMixin?: ReturnType<typeof css> }>`
  box-sizing: border-box;

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
  mobile = false,
  dimension = 'm',
  container,
  minScale,
  maxScale,
  errorMiniature,
  scaleStep,
  showTooltip = true,
  showCounter = true,
  showNavigation = true,
  locale,
  activeImg,
  onActiveChange,
  visible,
  onVisibleChange,
  onTransform,
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
    const itemKey = uid();
    const handleMouseDown = () => {
      handleActiveChange(index);
      setVisibleState(true);
    };
    return <ImageMiniature item={item} dimension={dimension} onMouseDown={handleMouseDown} key={itemKey} />;
  };

  const miniatures = useMemo(() => {
    return appearance === 'single'
      ? renderItem(items[defaultActiveImg], defaultActiveImg)
      : items.map((item, index) => {
          return renderItem(item, index);
        });
  }, [items, appearance, dimension, previewGroupMixin, errorMiniature]);

  return (
    <Wrapper {...props} $previewGroupMixin={previewGroupMixin}>
      {miniatures}
      {visibleInner && (
        <ImagePreview
          item={items[activeImgInner]}
          container={container}
          minScale={minScale}
          maxScale={maxScale}
          errorMiniature={errorMiniature ?? <EmptyMiniature dimension={dimension} />}
          scaleStep={scaleStep}
          showTooltip={showTooltip}
          showCounter={showCounter && items.length > 1}
          showNavigation={showNavigation && !mobile && items.length > 1}
          locale={locale}
          activeImg={activeImgInner}
          totalImg={items.length}
          onVisibleChange={handleVisibleChange}
          onActiveChange={handleActiveChange}
          onTransform={onTransform}
        />
      )}
    </Wrapper>
  );
};
