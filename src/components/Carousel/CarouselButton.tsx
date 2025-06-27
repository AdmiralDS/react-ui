import styled from 'styled-components';

import { ReactComponent as ChevronLeft } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRight } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

const CAROUSEL_BUTTON_WIDTH = 56;
const CAROUSEL_BUTTON_CONTENT_SIZE = 40;
const CAROUSEL_BUTTON_ICON_SIZE = 24;

export type CarouselButtonAppearance = 'default' | 'primary';
export type CarouselButtonDirection = 'left' | 'right';

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

const StyledButton = styled.button<{ $direction: CarouselButtonDirection; $appearance?: CarouselButtonAppearance }>`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  ${(p) => (p.$direction === 'left' ? 'left: 0;' : 'right: 0;')}
  width: ${CAROUSEL_BUTTON_WIDTH}px;
  height: 100%;

  background-color: transparent;

  &:hover,
  &:active {
    & > ${IconWrapper} {
      background-color: ${(p) =>
        p.$appearance === 'primary'
          ? `var(--admiral-color-Opacity_Hover, ${p.theme.color['Opacity/Hover']})`
          : `var(--admiral-color-Opacity_Modal, ${p.theme.color['Opacity/Modal']})`};
    }
  }
`;

export interface CarouselButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид компонента */
  appearance?: CarouselButtonAppearance;
  /** Назначение кнопки - назад/вперед */
  direction: CarouselButtonDirection;
}

export const CarouselButton = ({ appearance, direction, ...props }: CarouselButtonProps) => {
  return (
    <StyledButton {...props} $direction={direction} $appearance={appearance}>
      <IconWrapper $appearance={appearance}>{direction === 'left' ? <ChevronLeft /> : <ChevronRight />}</IconWrapper>
    </StyledButton>
  );
};
