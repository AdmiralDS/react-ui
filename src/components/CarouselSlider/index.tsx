import type { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export type CarouselSliderAppearance = 'default' | 'primary';

export interface CarouselSliderItemProps extends HTMLAttributes<HTMLButtonElement> {
  /** Внешний вид компонента */
  appearance?: CarouselSliderAppearance;
  /** Секция является активной */
  isCurrent?: boolean;
}
const primaryAppearanceMixin = css`
  background-color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  border: none;
`;
const primaryAppearanceSelectedMixin = css`
  background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  border: none;
`;
const defaultAppearanceMixin = css`
  background-color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  border: 0.5px solid
    var(--admiral-color-Special_DarkStaticNeutral00, ${(p) => p.theme.color['Special/Dark Static Neutral 80']});
`;
const ItemContent = styled.div<{ $appearance?: CarouselSliderAppearance; $isCurrent?: boolean }>`
  box-sizing: border-box;
  width: ${(p) => (p.$isCurrent ? 28 : 12)}px;
  height: 4px;
  border-radius: 2px;
  ${(p) =>
    p.$appearance === 'default'
      ? defaultAppearanceMixin
      : p.$isCurrent
        ? primaryAppearanceSelectedMixin
        : primaryAppearanceMixin};
`;
const Item = styled.button<{ $isCurrent?: boolean }>`
  all: unset;
  display: block;
  appearance: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  box-sizing: border-box;
  width: ${(p) => (p.$isCurrent ? 34 : 18)}px;
  height: 16px;
  padding: 7px 3px 6px 3px;

  &:focus-visible > ${ItemContent} {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
  }
`;

export const CarouselSliderItem = ({
  appearance = 'default',
  isCurrent = false,
  ...props
}: CarouselSliderItemProps) => {
  return (
    <Item {...props} $isCurrent={isCurrent}>
      <ItemContent $appearance={appearance} $isCurrent={isCurrent} />
    </Item>
  );
};
CarouselSliderItem.displayName = 'CarouselSliderItem';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  width: fit-content;

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & ${Item}, ${ItemContent} {
    transition: width 0.3s ease-in-out;
  }
`;

export interface CarouselSliderProps extends HTMLAttributes<HTMLDivElement> {}

export const CarouselSlider = ({ children, ...props }: CarouselSliderProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
CarouselSlider.displayName = 'CarouselSlider';
