import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

export type DividerDimension = 'm' | 's';
export type DividerAppearance = 'default' | 'subtle' | 'strong' | 'primary' | 'staticWhite';
export type DividerOrientation = 'horizontal' | 'vertical';

const getBackground = css<{ $appearance: DividerAppearance | string }>`
  ${({ theme, $appearance }) => {
    switch ($appearance) {
      case 'subtle':
        return `var(--admiral-color-Neutral_Neutral10, ${theme.color['Neutral/Neutral 10']})`;
      case 'strong':
        return `var(--admiral-color-Neutral_Neutral40, ${theme.color['Neutral/Neutral 40']})`;
      case 'primary':
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
      case 'staticWhite':
        return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      case 'default':
        return `var(--admiral-color-Neutral_Neutral20, ${theme.color['Neutral/Neutral 20']})`;
      default:
        return $appearance;
    }
  }}
`;

function getThicknessSize(dimension: DividerDimension) {
  switch (dimension) {
    case 's':
      return '1px';
    case 'm':
    default:
      return '2px';
  }
}

const getThickness = css<{ $dimension: DividerDimension; $orientation: DividerOrientation }>`
  ${({ $dimension, $orientation }) => {
    switch ($orientation) {
      case 'horizontal':
        return `height: ${getThicknessSize($dimension)}`;
      case 'vertical':
      default:
        return `width: ${getThicknessSize($dimension)}`;
    }
  }}
`;

const getLength = css<{ $length: string | number; $orientation: DividerOrientation }>`
  ${({ $length, $orientation }) => {
    switch ($orientation) {
      case 'horizontal':
        return `width: ${$length}`;
      case 'vertical':
      default:
        return `height: ${$length}`;
    }
  }}
`;

const StyledDiv = styled.div<{
  $dimension: DividerDimension;
  $appearance: DividerAppearance | string;
  $orientation: DividerOrientation;
  $length: string | number;
}>`
  box-sizing: border-box;
  background: ${getBackground};
  ${getThickness};
  ${getLength};
`;

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер компонента, определяет толщину разделителя */
  dimension?: DividerDimension;
  /** Внешний вид компонента */
  appearance?: DividerAppearance | string;
  /** Ориентация компонента, по умолчанию горизонтальная */
  orientation?: DividerOrientation;
  /** Длина компонента */
  length?: string | number;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    { dimension = 'm', appearance = 'default', orientation = 'horizontal', length = '100%', ...props }: DividerProps,
    ref,
  ) => {
    return (
      <StyledDiv
        {...props}
        ref={ref}
        $dimension={dimension}
        $appearance={appearance}
        $orientation={orientation}
        $length={length}
      />
    );
  },
);

Divider.displayName = 'Divider';
