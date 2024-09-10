import type { HTMLAttributes, ReactNode } from 'react';
import { Children, cloneElement, isValidElement, useMemo, useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import type { CarouselButtonAppearance } from '#src/components/Carousel/CarouselButton';
import { CarouselButton } from '#src/components/Carousel/CarouselButton';
import type { CarouselSliderAppearance } from '#src/components/CarouselSlider';
import { CarouselSlider, CarouselSliderItem } from '#src/components/CarouselSlider';

const Content = styled.div<{
  $currentItem: number;
  $contentCssMixin?: ReturnType<typeof css>;
  $showAnimation?: boolean;
  $animationDuration: number;
}>`
  position: relative;
  display: flex;
  transition: ${(p) => (p.$showAnimation ? `all ${p.$animationDuration}ms ease-in-out` : 'none')};
  transform: translateX(-${(p) => p.$currentItem * 100}%);
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
  ${(p) => p.$contentCssMixin};
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
  margin-top: 0;
  margin-bottom: 10px;
  bottom: 0;
`;
const StyledCarouselSlider = styled(CarouselSlider)<{ $sliderPosition: CarouselSliderPosition }>`
  align-self: center;
  margin-top: 10px;
  margin-bottom: 0;
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
  /** Скорость прокрутки в мс */
  animationDuration?: number;
  /** Расположение слайдера внутри или снаружи компонента */
  sliderPosition?: CarouselSliderPosition;
  /** Внешний вид компонента слайдера */
  sliderAppearance?: CarouselSliderAppearance;
  /** Позволяет добавлять миксин, созданный с помощью styled css  */
  contentCssMixin?: ReturnType<typeof css>;
}

export const Carousel = ({
  defaultItem,
  currentItem,
  onCurrentItemChange,
  showButtons = true,
  buttonAppearance = 'default',
  infiniteScroll = false,
  animationDuration = 300,
  sliderPosition = 'inner',
  sliderAppearance = 'default',
  contentCssMixin,
  children,
  ...props
}: CarouselProps) => {
  const getPrevItem = infiniteScroll ? getPrevItemInfinite : getPrevItemFinite;
  const getNextItem = infiniteScroll ? getNextItemInfinite : getNextItemFinite;

  const items = useMemo(() => Children.toArray(children), [children]);

  const [length, setLength] = useState(items.length);
  useEffect(() => {
    setLength(items.length);
  }, [items.length]);

  const itemsToShow = useMemo(() => {
    const slides: ReactNode[] = [];
    const preCloneSlides: ReactNode[] = [];
    const postCloneSlides: ReactNode[] = [];
    Children.forEach(children, (elem, index) => {
      if (index === length - 1 && infiniteScroll) {
        preCloneSlides.push(
          isValidElement(elem)
            ? cloneElement(elem, { ...elem.props, key: 'precloned' + elem.key, 'data-index': -1 })
            : elem,
        );
      }
      slides.push(
        isValidElement(elem)
          ? cloneElement(elem, { ...elem.props, key: 'original' + elem.key, 'data-index': index })
          : elem,
      );
      if (index === 0 && infiniteScroll) {
        postCloneSlides.push(
          isValidElement(elem)
            ? cloneElement(elem, { ...elem.props, key: 'postcloned' + elem.key, 'data-index': length })
            : elem,
        );
      }
    });
    return preCloneSlides.concat(slides, postCloneSlides);
  }, [children, length, items]);

  const [sliderIndex, setSliderIndex] = useState<number>(defaultItem || 0);
  const currenSliderIndexInner = useMemo(() => currentItem || sliderIndex, [currentItem, sliderIndex]);
  const handleCurrentItemChange = (newItem: number) => {
    onCurrentItemChange?.(newItem);
    setSliderIndex(newItem);
  };

  const getNewEdgeContentIndex = (currentContentIndex: number) => {
    let newContentIndex = 0;
    if (currentContentIndex <= 0) {
      newContentIndex = itemsToShow.length - 2;
    } else if (currentContentIndex >= itemsToShow.length - 1) {
      newContentIndex = 1;
    }
    return newContentIndex;
  };
  const updateEdgeContentIndex = () => {
    if (infiniteScroll && (contentIndex >= itemsToShow.length - 1 || contentIndex <= 0)) {
      setShowAnimation(false);
      setContentIndex((prevState) => getNewEdgeContentIndex(prevState));
      setTimeout(() => setShowAnimation(true), 20);
    }
  };

  const [showAnimation, setShowAnimation] = useState<boolean>(true);
  const [contentIndex, setContentIndex] = useState<number>(currenSliderIndexInner + (infiniteScroll ? 1 : 0));
  const handleContentIndexChange = (newIndex: number) => {
    setContentIndex(newIndex);
  };
  useEffect(() => {
    let newContentIndex = 0;
    if (infiniteScroll) {
      if (contentIndex === itemsToShow.length - 2 && currenSliderIndexInner === 0) {
        newContentIndex = itemsToShow.length - 1;
      } else if (contentIndex === 1 && currenSliderIndexInner === length - 1) {
        newContentIndex = 0;
      } else {
        newContentIndex = currenSliderIndexInner + 1;
      }
    } else {
      newContentIndex = currenSliderIndexInner;
    }
    handleContentIndexChange(newContentIndex);
  }, [currenSliderIndexInner]);

  const handlePrevClick = () => {
    handleCurrentItemChange(getPrevItem(currenSliderIndexInner, length));
  };
  const handleNextClick = () => {
    handleCurrentItemChange(getNextItem(currenSliderIndexInner, length));
  };
  const showPrev = showButtons ? (infiniteScroll ? true : currenSliderIndexInner > 0) : false;
  const showNext = showButtons ? (infiniteScroll ? true : currenSliderIndexInner < length - 1) : false;

  const handleCarouselSliderClick = (item: number) => {
    handleCurrentItemChange(item);
  };

  return (
    <Container {...props}>
      <Wrapper>
        <ContentWrapper>
          <Content
            $currentItem={contentIndex}
            $contentCssMixin={contentCssMixin}
            $showAnimation={showAnimation}
            $animationDuration={animationDuration}
            onTransitionEnd={updateEdgeContentIndex}
          >
            {itemsToShow}
          </Content>
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
              isCurrent={item === currenSliderIndexInner}
              onClick={() => handleCarouselSliderClick(item)}
            />
          );
        })}
      </StyledCarouselSlider>
    </Container>
  );
};
