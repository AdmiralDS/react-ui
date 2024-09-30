import { useState } from 'react';
import styled, { type css } from 'styled-components';

import { ImageMiniature } from '#src/components/ImageViewer/ImageMiniature';
import { ImagePreview } from '#src/components/ImageViewer/ImagePreview';
import type { ImageProps, ImageViewerProps, TransformType } from '#src/components/ImageViewer/types';

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
const defaultTransform: TransformType = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  flipX: false,
  flipY: false,
};

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
  actions,
  transform = defaultTransform,
  locale,
  activeImg,
  ...props
}: ImageViewerProps) => {
  const [activeImgState, setActiveImgState] = useState(defaultActiveImg);
  const activeImgInner = activeImg ?? activeImgState;
  const handleActiveChange = (newIndex: number) => {
    setActiveImgState(newIndex);
    actions.onActiveImgChange?.(newIndex);
  };
  const [scaleState, setScaleState] = useState(1);
  const scaleInner = scaleState;
  //const scaleInner = transform.scale ?? scaleState;
  const handleScaleChange = (newScale: number) => {
    setScaleState(newScale);
  };
  const handleZoomIn = () => {
    const newScale = scaleInner + scaleStep;
    handleScaleChange(newScale > maxScale ? maxScale : newScale);
  };
  const handleZoomOut = () => {
    const newScale = scaleInner - scaleStep;
    handleScaleChange(newScale < minScale ? minScale : newScale);
  };

  const [opened, setOpened] = useState(false);
  const handleClose = () => {
    setOpened(false);
    actions.onClose?.();
  };

  const renderItem = (item: string | ImageProps, index: number) => {
    const handleMouseDown = () => {
      setActiveImgState(index);
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
      ? renderItem(items[defaultActiveImg], defaultActiveImg)
      : items.map((item, index) => {
          return renderItem(item, index);
        });

  return (
    <Wrapper {...props} $previewGroupMixin={previewGroupMixin}>
      {miniatures}
      {opened && (
        <ImagePreview
          item={items[activeImgInner]}
          container={container}
          minScale={minScale}
          maxScale={maxScale}
          scaleStep={scaleStep}
          showTooltip={showTooltip}
          showCounter={showCounter && items.length > 1}
          showNavigation={showNavigation && items.length > 1}
          actions={{
            ...actions,
            onActiveImgChange: handleActiveChange,
            onZoomIn: handleZoomIn,
            onZoomOut: handleZoomOut,
            onClose: handleClose,
          }}
          transform={{
            ...transform,
            scale: scaleInner,
          }}
          locale={locale}
          activeImg={activeImgInner}
          totalImg={items.length}
        />
      )}
    </Wrapper>
  );
};
