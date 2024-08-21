import type { HTMLAttributes } from 'react';
import { Children, useMemo, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import type { CarouselButtonAppearance } from '#src/components/Carousel/CarouselButton';
import { CarouselButton } from '#src/components/Carousel/CarouselButton';
import type { CarouselSliderAppearance } from '#src/components/CarouselSlider';
import { CarouselSlider, CarouselSliderItem } from '#src/components/CarouselSlider';

const Content = styled.div`
  position: relative;
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;
const ContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;
const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const innerSliderPositionMixin = css`
  position: absolute;
  bottom: 0;
`;
const StyledCarouselSlider = styled(CarouselSlider)<{ $sliderPosition: CarouselSliderPosition }>`
  align-self: center;
  ${(p) => p.$sliderPosition === 'inner' && innerSliderPositionMixin};
`;

const getNextItemFinite = (currentItem: number, maxItems: number) => {
  if (currentItem < maxItems - 1) {
    return currentItem + 1;
  }
  return currentItem;
};
const getPrevItemFinite = (currentItem: number, maxItems: number) => {
  if (currentItem > 0) {
    return currentItem - 1;
  }
  return currentItem;
};
const getNextItemInfinite = (currentItem: number, maxItems: number) => {
  return (currentItem + 1) % maxItems;
};
const getPrevItemInfinite = (currentItem: number, maxItems: number) => {
  if (currentItem > 0) {
    return (currentItem - 1) % maxItems;
  }
  return maxItems - 1;
};

type CarouselSliderPosition = 'inner' | 'outer';
export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  /** Номер выбранной секции по умолчанию (нумерация с 0) */
  defaultItem?: number;
  /** Номер выбранной секции (нумерация с 0) */
  currentItem?: number;
  /** Коллбэк на изменение выбранной секции */
  onCurrentItemChange?: (newItem: number) => void;
  /** Отображение кнопок вперед/назад */
  showButtons?: boolean;
  /** Внешний вид кнопок вперед/назад */
  buttonAppearance?: CarouselButtonAppearance;
  /** Бесконечная прокрутка секций (при showButtons кнопки будут видны всегда) */
  infiniteScroll?: boolean;
  /** Расчет номера предыдущей секции при нажатии на кнопку назад */
  getPrevItem?: (currentItem: number, maxItems: number) => number;
  /** Расчет номера следующей секции при нажатии на кнопку вперед */
  getNextItem?: (currentItem: number, maxItems: number) => number;
  /** Расположение слайдера внутри или снаружи компонента */
  sliderPosition?: CarouselSliderPosition;
  /** Внешний вид компонента слайдера */
  sliderAppearance?: CarouselSliderAppearance;
}

export const Carousel = ({
  defaultItem,
  currentItem,
  onCurrentItemChange,
  showButtons = true,
  buttonAppearance = 'default',
  infiniteScroll = false,
  getPrevItem: getPrevItemCustom,
  getNextItem: getPrevNextCustom,
  sliderPosition = 'inner',
  sliderAppearance = 'default',
  children,
  ...props
}: CarouselProps) => {
  const items = useMemo(() => Children.toArray(children), [children]);

  const [length, setLength] = useState(items.length);
  useEffect(() => {
    setLength(items.length);
  }, [items.length]);

  const [currentIndex, setCurrentIndex] = useState<number>(defaultItem || 0);
  const currenItemInner = currentItem || currentIndex;
  const handleCurrentItemChange = (newItem: number) => {
    setCurrentIndex(newItem);
    onCurrentItemChange?.(newItem);
  };

  const getPrevItem = getPrevItemCustom || (infiniteScroll ? getPrevItemInfinite : getPrevItemFinite);
  const getNextItem = getPrevNextCustom || (infiniteScroll ? getNextItemInfinite : getNextItemFinite);

  const handlePrevClick = () => {
    const newItem = getPrevItem(currenItemInner, length);
    handleCurrentItemChange(newItem);
  };
  const handleNextClick = () => {
    const newItem = getNextItem(currenItemInner, length);
    handleCurrentItemChange(newItem);
  };
  const showPrev = showButtons ? (infiniteScroll ? true : currenItemInner > 0) : false;
  const showNext = showButtons ? (infiniteScroll ? true : currenItemInner < length - 1) : false;

  return (
    <Container {...props}>
      <Wrapper>
        <ContentWrapper>
          <Content style={{ transform: `translateX(-${currenItemInner * 100}%)` }}>{children}</Content>
        </ContentWrapper>
        {showPrev && <CarouselButton appearance={buttonAppearance} direction="left" onClick={handlePrevClick} />}
        {showNext && <CarouselButton appearance={buttonAppearance} direction="right" onClick={handleNextClick} />}
      </Wrapper>
      <StyledCarouselSlider $sliderPosition={sliderPosition}>
        {[...Array(length).keys()].map((item) => {
          return (
            <CarouselSliderItem
              aria-label={`Item ${item}`}
              key={item}
              appearance={sliderAppearance}
              isCurrent={item === currenItemInner}
              onClick={() => handleCurrentItemChange(item)}
            />
          );
        })}
      </StyledCarouselSlider>
    </Container>
  );
};
