import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { ReactComponent as ChevronLeft } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRight } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

const CAROUSEL_BUTTON_WIDTH = 56;
const CAROUSEL_BUTTON_CONTENT_SIZE = 40;
const CAROUSEL_BUTTON_ICON_SIZE = 24;

export type CarouselButtonAppearance = 'default' | 'primary';

const IconWrapper = styled.div<{ $appearance?: CarouselButtonAppearance }>`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  width: ${CAROUSEL_BUTTON_CONTENT_SIZE}px;
  height: ${CAROUSEL_BUTTON_CONTENT_SIZE}px;
  border-radius: 50%;

  background-color: transparent;

  & > svg {
    width: ${CAROUSEL_BUTTON_ICON_SIZE}px;
    height: ${CAROUSEL_BUTTON_ICON_SIZE}px;
  }
  & *[fill^='#'] {
    fill: ${(p) =>
      p.$appearance === 'default'
        ? `var(--admiral-color-Special_StaticWhite, ${p.theme.color['Special/Static White']})`
        : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
  }
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${CAROUSEL_BUTTON_WIDTH}px;
  height: 100%;

  background-color: transparent;

  &:hover,
  &:active {
    & > ${IconWrapper} {
      background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});
    }
  }
`;

export interface CarouselButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Внешний вид компонента */
  appearance?: CarouselButtonAppearance;
  direction: 'left' | 'right';
}

export const CarouselButton = ({ appearance, direction, ...props }: CarouselButtonProps) => {
  return (
    <StyledButton {...props}>
      <IconWrapper $appearance={appearance}>{direction === 'left' ? <ChevronLeft /> : <ChevronRight />}</IconWrapper>
    </StyledButton>
  );
};
