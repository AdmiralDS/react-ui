import { Children, forwardRef, cloneElement, isValidElement, useMemo, useEffect, useState, useRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import type { DataAttributes } from 'styled-components';

import type { CarouselButtonAppearance } from '#src/components/Carousel/CarouselButton';
import { CarouselButton } from '#src/components/Carousel/CarouselButton';
import type { CarouselSliderAppearance } from '#src/components/CarouselSlider';
import { CarouselSlider, CarouselSliderItem } from '#src/components/CarouselSlider';
import type { TouchPointInfoType } from '#src/components/common/utils/touchUtils';
import { getSwipeType } from '#src/components/common/utils/touchUtils';

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
const getPrevItemFinite = (currentItem: number, _maxItems: number) => {
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
const nothing = () => {};
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
  /** Конфиг функция пропсов для кнопки переключения на предыдущий элемент. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  prevButtonPropsConfig?: (
    props: React.ComponentProps<typeof CarouselButton>,
  ) => Partial<React.ComponentProps<typeof CarouselButton> & DataAttributes>;
  /** Конфиг функция пропсов для кнопки переключения на следующий элемент. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  nextButtonPropsConfig?: (
    props: React.ComponentProps<typeof CarouselButton>,
  ) => Partial<React.ComponentProps<typeof CarouselButton> & DataAttributes>;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
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
      prevButtonPropsConfig = nothing,
      nextButtonPropsConfig = nothing,
      children,
      ...props
    },
    ref,
  ) => {
    const getPrevItem = infiniteScroll ? getPrevItemInfinite : getPrevItemFinite;
    const getNextItem = infiniteScroll ? getNextItemInfinite : getNextItemFinite;

    //<editor-fold desc="Создание элементов для отрисовки в Content, при infiniteScroll отличается от количества children на 2 из-за дополнительных слайдов в начале и конце">
    const items = Children.toArray(children);
    const length = items.length;

    const contentItems = useMemo(() => {
      const slides: ReactNode[] = [];
      const preCloneSlides: ReactNode[] = [];
      const postCloneSlides: ReactNode[] = [];
      Children.forEach(children, (elem, index) => {
        // При бесконечной прокрутке для "непрерывности" анимации в начало добавляется последний элемент
        if (infiniteScroll && index === length - 1) {
          preCloneSlides.push(
            isValidElement(elem)
              ? cloneElement(elem, {
                  ...elem.props,
                  key: 'precloned' + elem.key,
                  'data-index': -1,
                  'aria-label': 'precloned' + elem.key,
                })
              : elem,
          );
        }
        // При бесконечной прокрутке для "непрерывности" анимации в конец добавляется первый элемент
        if (infiniteScroll && index === 0) {
          postCloneSlides.push(
            isValidElement(elem)
              ? cloneElement(elem, {
                  ...elem.props,
                  key: 'postcloned' + elem.key,
                  'data-index': length,
                  'aria-label': 'postcloned' + elem.key,
                })
              : elem,
          );
        }
        slides.push(
          isValidElement(elem)
            ? cloneElement(elem, { ...elem.props, key: 'original' + elem.key, 'data-index': index })
            : elem,
        );
      });
      return preCloneSlides.concat(slides, postCloneSlides);
    }, [children, length, items, infiniteScroll]);
    //</editor-fold>

    //<editor-fold desc="Индекс для слайдера и кнопок вперед/назад, также позволяет использовать компонент в контроллируемом варианте">
    const [sliderIndex, setSliderIndex] = useState<number>(defaultItem || 0);
    // Используем либо пропс (контроллируемый режим), либо внутренний стейт (неконтроллируемый режим)
    const currenSliderIndexInner = currentItem ?? sliderIndex;
    const handleCurrentItemChange = (newItem: number) => {
      onCurrentItemChange?.(newItem);
      setSliderIndex(newItem);
    };
    //</editor-fold>

    //<editor-fold desc="Индекс для Content, при infiniteScroll отличается от индекса слайдера на +1 из-за дополнительного слайда в начале">
    const [contentIndex, setContentIndex] = useState<number>(currenSliderIndexInner + (infiniteScroll ? 1 : 0));
    const handleContentIndexChange = (newIndex: number) => {
      setContentIndex(newIndex);
    };
    // В случае infiniteScroll при достижении крайних значений после окончания transition необходимо пересчитать новый индекс, отключить анимацию, обновить индекс, а затем заново включить анимацию
    const [showAnimation, setShowAnimation] = useState<boolean>(true);
    const getNewEdgeContentIndex = (currentContentIndex: number) => {
      let newContentIndex = 0;
      if (currentContentIndex <= 0) {
        // При переключении с первого элемента на последний необходимо после окончания анимации подменить индекс контента на последний
        newContentIndex = contentItems.length - 2;
      } else if (currentContentIndex >= contentItems.length - 1) {
        // При переключении с последнего элемента на первый необходимо после окончания анимации подменить индекс контента на первый
        newContentIndex = 1;
      }
      return newContentIndex;
    };
    // Обработчик, который срабатывает после окончания отработки transition на Content
    const updateEdgeContentIndex = () => {
      // Рассматриваем только крайние случаи и только при бесконечной прокрутке
      if (infiniteScroll && (contentIndex >= contentItems.length - 1 || contentIndex <= 0)) {
        // отключаем анимацию, чтобы не было ненужной прокрутки при смене индекса, которая происходит вследствие изменения "transform: translateX" на Content
        setShowAnimation(false);
        // меняем индекс контента
        setContentIndex((prevState) => getNewEdgeContentIndex(prevState));
        // включаем анимацию обратно через timeout, т.к.сеттеры в React выполняются асинхронно
        setTimeout(() => setShowAnimation(true), 20);
      }
    };
    // Отслеживание изменения индекса слайдера и расчет индекса контента
    useEffect(() => {
      let newContentIndex = 0;
      if (infiniteScroll) {
        if (contentIndex === contentItems.length - 2 && currenSliderIndexInner === 0) {
          // При бесконечном скролле, когда нужно переключить с последнего элемента на первый, устанавливаем индекс контента на склонированный в конец первый элемент (postClones)
          newContentIndex = contentItems.length - 1;
        } else if (contentIndex === 1 && currenSliderIndexInner === length - 1) {
          // При бесконечном скролле, когда нужно переключить с первого элемента на последний, устанавливаем индекс контента на склонированный в начало последний элемент (preClones)
          newContentIndex = 0;
        } else {
          // При бесконечном скролле не в крайних значениях индекс контента на 1 больше индекса слайдера
          newContentIndex = currenSliderIndexInner + 1;
        }
      } else {
        // Без бесконечного скролла индексы слайдера и контента совпадают
        newContentIndex = currenSliderIndexInner;
      }
      handleContentIndexChange(newContentIndex);
    }, [currentItem, sliderIndex, infiniteScroll]);
    //</editor-fold>

    //<editor-fold desc="Обработчики для конопок вперед/назад и слайдера">
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
    //</editor-fold>

    //<editor-fold desc="Обработчики touch событий">
    const [isTouching, setIsTouching] = useState(false);
    const touchPointInfo = useRef<TouchPointInfoType>({
      point1: { x: 0, y: 0 },
      point2: { x: 0, y: 0 },
      eventType: 'none',
      startEl: undefined,
      timeDown: undefined,
      xDown: undefined,
      yDown: undefined,
      xDiff: undefined,
      yDiff: undefined,
      touchCount: undefined,
    });

    const updateTouchPointInfo = (values: Partial<TouchPointInfoType>) => {
      touchPointInfo.current = {
        ...touchPointInfo.current,
        ...values,
      };
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLImageElement>) => {
      event.stopPropagation();
      setIsTouching(true);

      const { touches = [] } = event;
      if (touches.length === 1) {
        updateTouchPointInfo({
          startEl: event.target,
          timeDown: Date.now(),
          touchCount: touches.length,
          eventType: 'move',
          xDown: touches[0].clientX,
          yDown: touches[0].clientY,
          xDiff: 0,
          yDiff: 0,
        });
      }
    };
    const handleTouchMove = (event: React.TouchEvent<HTMLImageElement>) => {
      const { touches = [] } = event;
      const { eventType, xDown, yDown } = touchPointInfo.current;

      if (eventType === 'move') {
        updateTouchPointInfo({ eventType: 'move' });
        if (xDown && yDown) {
          updateTouchPointInfo({
            xDiff: xDown - touches[0].clientX,
            yDiff: yDown - touches[0].clientY,
          });
        }
      }
    };
    const handleTouchEnd = (event: React.TouchEvent<HTMLImageElement>) => {
      if (isTouching) {
        setIsTouching(false);

        const { eventType, startEl, timeDown, xDiff, yDiff, xDown, yDown } = touchPointInfo.current;

        if (eventType === 'move') {
          const timeUp = Date.now();
          const type = getSwipeType(startEl, event.target, timeDown, timeUp, xDown, yDown, xDiff, yDiff);

          if (type === 'swiped-left') {
            handleNextClick();
          } else if (type === 'swiped-right') {
            handlePrevClick();
          }
        }

        updateTouchPointInfo({
          eventType: 'none',
          startEl: undefined,
          timeDown: undefined,
          xDown: undefined,
          yDown: undefined,
          xDiff: undefined,
          yDiff: undefined,
          touchCount: undefined,
        });
      }
    };
    //</editor-fold>

    const prevButtonProps = {
      appearance: buttonAppearance,
      direction: 'left',
      onClick: handlePrevClick,
    } satisfies React.ComponentProps<typeof CarouselButton>;
    const nextButtonProps = {
      appearance: buttonAppearance,
      direction: 'right',
      onClick: handleNextClick,
    } satisfies React.ComponentProps<typeof CarouselButton>;

    return (
      <Container ref={ref} {...props}>
        <Wrapper>
          <ContentWrapper>
            <Content
              $currentItem={contentIndex}
              $contentCssMixin={contentCssMixin}
              $showAnimation={showAnimation}
              $animationDuration={animationDuration}
              onTransitionEnd={updateEdgeContentIndex}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {contentItems}
            </Content>
          </ContentWrapper>
          {showPrev && <CarouselButton {...prevButtonProps} {...prevButtonPropsConfig(prevButtonProps)} />}
          {showNext && <CarouselButton {...nextButtonProps} {...nextButtonPropsConfig(nextButtonProps)} />}
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
  },
);
