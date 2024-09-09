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
interface PreviousValues {
  currentItem: number;
}
function usePrevious(value: PreviousValues) {
  const ref = useRef<PreviousValues>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

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

  const [currentIndex, setCurrentIndex] = useState<number>(defaultItem || 0);
  const currenItemInner = currentItem || currentIndex;
  const handleCurrentItemChange = (newItem: number) => {
    setCurrentIndex(newItem);
    onCurrentItemChange?.(newItem);
  };

  const prevValue = usePrevious({ currentItem: currenItemInner });
  const [showAnimation, setShowAnimation] = useState<boolean>(true);
  const [indexToShow, setIndexToShow] = useState<number>(currenItemInner + (infiniteScroll ? 1 : 0));
  const handleIndexToShowChange = (step: number) => {
    let newIndex = 0;
    if (step > 0) {
      if (infiniteScroll) {
        newIndex = indexToShow + 1;
      } else {
        newIndex = getNextItem(prevValue?.currentItem || (infiniteScroll ? 1 : 0), length);
      }
    } else if (step < 0) {
      if (infiniteScroll) {
        newIndex = indexToShow - 1;
      } else {
        newIndex = getPrevItem(prevValue?.currentItem || (infiniteScroll ? 1 : 0), length);
      }
    }
    setIndexToShow(newIndex);
  };
  const handleTransitionEnd = () => {
    const getNewIndexToShow = (newIndex: number) => {
      let debouncedIndex = 0;
      if (newIndex === 0) {
        debouncedIndex = itemsToShow.length - 2;
      } else {
        debouncedIndex = 1;
      }
      return debouncedIndex;
    };

    if (indexToShow === itemsToShow.length - 1 || indexToShow === 0) {
      setShowAnimation(false);
      setIndexToShow((prevState) => getNewIndexToShow(prevState));
      setTimeout(() => setShowAnimation(true), 20);
    }
  };

  const handlePrevClick = () => {
    const newItem = getPrevItem(currenItemInner, length);
    handleCurrentItemChange(newItem);
    handleIndexToShowChange(-1);
  };
  const handleNextClick = () => {
    const newItem = getNextItem(currenItemInner, length);
    handleCurrentItemChange(newItem);
    handleIndexToShowChange(1);
  };
  const showPrev = showButtons ? (infiniteScroll ? true : currenItemInner > 0) : false;
  const showNext = showButtons ? (infiniteScroll ? true : currenItemInner < length - 1) : false;

  const handleCarouselSliderClick = (item: number) => {
    handleCurrentItemChange(item);
    setIndexToShow(infiniteScroll ? item + 1 : item);
  };

  return (
    <Container {...props}>
      <Wrapper>
        <ContentWrapper>
          <Content
            $currentItem={indexToShow}
            $contentCssMixin={contentCssMixin}
            $showAnimation={showAnimation}
            $animationDuration={animationDuration}
            onTransitionEnd={handleTransitionEnd}
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
              isCurrent={item === currenItemInner}
              onClick={() => handleCarouselSliderClick(item)}
            />
          );
        })}
      </StyledCarouselSlider>
    </Container>
  );
};
