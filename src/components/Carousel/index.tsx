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
const CarouselSliderWrapper = styled.div<{ $sliderPosition: CarouselSliderPosition }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(p) => p.$sliderPosition === 'inner' && innerSliderPositionMixin};
`;

type CarouselSliderPosition = 'inner' | 'outer';
export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  showButtons?: boolean;
  buttonAppearance?: CarouselButtonAppearance;
  sliderPosition?: CarouselSliderPosition;
  sliderAppearance?: CarouselSliderAppearance;
}

export const Carousel = ({
  showButtons = true,
  buttonAppearance = 'default',
  sliderPosition = 'inner',
  sliderAppearance = 'default',
  children,
  ...props
}: CarouselProps) => {
  const items = useMemo(() => Children.toArray(children), [children]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(items.length);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  const showPrev = showButtons && currentIndex > 0;
  const showNext = showButtons && currentIndex < length - 1;

  // Set the length to match current children from props
  useEffect(() => {
    setLength(items.length);
  }, [items.length]);

  return (
    <Container {...props}>
      <Wrapper>
        <ContentWrapper>
          <Content style={{ transform: `translateX(-${currentIndex * 100}%)` }}>{children}</Content>
        </ContentWrapper>
        {showPrev && <CarouselButton appearance={buttonAppearance} direction="left" onClick={handlePrevClick} />}
        {showNext && <CarouselButton appearance={buttonAppearance} direction="right" onClick={handleNextClick} />}
      </Wrapper>
      <CarouselSliderWrapper $sliderPosition={sliderPosition}>
        <CarouselSlider>
          {[...Array(length).keys()].map((item) => {
            return (
              <CarouselSliderItem
                aria-label={`Item ${item}`}
                key={item}
                appearance={sliderAppearance}
                isCurrent={item === currentIndex}
                onClick={() => setCurrentIndex(item)}
              />
            );
          })}
        </CarouselSlider>
      </CarouselSliderWrapper>
    </Container>
  );
};
