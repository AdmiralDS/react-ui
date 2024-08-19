import type { HTMLAttributes, MouseEvent, KeyboardEvent } from 'react';
import { Children, useMemo } from 'react';
import styled, { css } from 'styled-components';

import { uid } from '#src/components/common/uid';

export type CarouselSliderAppearance = 'default' | 'primary';

export interface CarouselSliderItemProps extends HTMLAttributes<HTMLButtonElement> {
  /** Внешний вид компонента */
  appearance?: CarouselSliderAppearance;
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
const ItemContent = styled.div<{ $appearance?: CarouselSliderAppearance }>`
  box-sizing: border-box;
  width: 12px;
  height: 4px;
  border-radius: 2px;

  [aria-selected='true'] & {
    width: 28px;
  }
  .carousel-slider[data-appearance='primary'] li[aria-selected='true'] & {
    ${primaryAppearanceSelectedMixin}
  }
  .carousel-slider[data-appearance='primary'] li[aria-selected='false'] & {
    ${primaryAppearanceMixin}
  }
  .carousel-slider[data-appearance='default'] & {
    ${defaultAppearanceMixin}
  }
`;
const Item = styled.button`
  all: unset;
  appearance: none;
  cursor: pointer;

  box-sizing: border-box;
  width: 18px;
  height: 16px;
  padding: 7px 3px 6px 3px;

  [aria-selected='true'] & {
    width: 34px;
  }

  &:focus-visible > ${ItemContent} {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
  }
`;

const Wrapper = styled.ul`
  list-style: none;
  position: relative;
  display: flex;

  & ${Item}, ${ItemContent} {
    transition: all 0.9s;
  }
`;

export interface CarouselSliderProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onChange'> {
  /** Внешний вид компонента */
  appearance?: CarouselSliderAppearance;
  /** Номер выбранной секции (нумерация с 0) */
  currentItem: number;
  /** Колбек на изменение текущей секции */
  onChange: (event: any, item: number) => void;
}

export const CarouselSlider = ({
  appearance = 'default',
  currentItem,
  onChange,
  className = '',
  children,
  ...props
}: CarouselSliderProps) => {
  const items = useMemo(() => {
    const sliderItems = Children.toArray(children);
    if (sliderItems.length < 2) return [];
    return sliderItems.map((child, index) => {
      const id = uid();
      const handleChange = (event: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>) => onChange(event, index);
      return (
        <li aria-selected={currentItem === index} key={id} onClick={handleChange}>
          {child}
        </li>
      );
    });
  }, [children, currentItem]);
  return (
    <Wrapper {...props} data-appearance={appearance} className={`carousel-slider ` + className}>
      {items}
    </Wrapper>
  );
};
CarouselSlider.displayName = 'CarouselSlider';

export const CarouselSliderItem = ({ appearance }: CarouselSliderItemProps) => {
  return (
    <Item>
      <ItemContent $appearance={appearance} />
    </Item>
  );
};
CarouselSliderItem.displayName = 'CarouselSliderItem';
