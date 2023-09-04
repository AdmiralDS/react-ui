import { Children, forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';

import type { ButtonAppearance, Dimension, StyledButtonProps } from './types';
import { Spinner } from '#src/components/Spinner';
import { appearanceMixin } from './appearanceMixin';
import { ButtonIconContainer, dimensionMixin } from './dimensionMixin';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

export type { ButtonAppearance } from './types';
export * from './dimensionMixin';

type IconPlace = 'left' | 'right';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: ButtonAppearance;

  /** Размер кнопки */
  dimension?: Dimension;

  /** Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле */
  displayAsDisabled?: boolean;

  /** Отображать кнопку квадратной*/
  displayAsSquare?: boolean;

  /** Состояние загрузки */
  loading?: boolean;

  /** Состояние скелетона */
  skeleton?: boolean;

  /**
   * @deprecated Используйте iconStart или iconEnd
   * Иконка кнопки
   */
  icon?: ReactNode;

  /** Иконка перед текстом кнопки */
  iconStart?: ReactNode;

  /** Иконка после текста кнопки */
  iconEnd?: ReactNode;

  /**
   * @deprecated Используйте iconStart или iconEnd
   * Расположение иконки кнопки
   */
  iconPlace?: IconPlace;

  /** Позволяет добавлять миксин для кнопок, созданный с помощью styled css  */
  buttonCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

const ButtonContent = styled.div<{ $dimension?: Dimension; $loading?: boolean }>`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 24px;

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }

  & > svg {
    width: 24px;
    height: 24px;
  }

  [data-dimension='s'] & {
    height: 20px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const StyledSpinner = styled(Spinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const AdditionalPadding = styled.div`
  display: inline-block;
  width: 2px;
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      appearance = 'primary',
      dimension = 'xl',
      type = 'button',
      loading = false,
      skeleton = false,
      iconStart,
      iconEnd,
      icon,
      iconPlace = 'left',
      children,
      buttonCssMixin,
      displayAsDisabled,
      displayAsSquare,
      ...props
    },
    ref,
  ) => {
    const spinnerDimension = dimension === 's' ? 'ms' : 'm';
    const spinnerInverse = appearance !== 'secondary' && appearance !== 'ghost';
    const hasIconStart = !!iconStart || (!!icon && iconPlace === 'left');
    const hasIconEnd = !!iconEnd || (!!icon && iconPlace === 'right');

    return (
      <StyledButton
        ref={ref}
        $appearance={appearance}
        $dimension={dimension}
        type={type}
        $loading={loading}
        $skeleton={skeleton}
        $buttonCssMixin={buttonCssMixin}
        $displayAsSquare={displayAsSquare}
        $displayAsDisabled={displayAsDisabled}
        {...props}
      >
        {loading && <StyledSpinner dimension={spinnerDimension} inverse={spinnerInverse} />}
        {!displayAsSquare && !hasIconStart && <AdditionalPadding />}
        <ButtonContent>
          {hasIconStart ? <ButtonIconContainer>{iconStart || icon}</ButtonIconContainer> : null}
          {Children.toArray(children).map((child, index) =>
            typeof child === 'string' ? <div key={child + index}>{child}</div> : child,
          )}
          {hasIconEnd ? <ButtonIconContainer>{iconEnd || icon}</ButtonIconContainer> : null}
        </ButtonContent>
        {!displayAsSquare && !hasIconEnd && <AdditionalPadding />}
      </StyledButton>
    );
  },
);

const StyledButton = styled.button.attrs<
  StyledButtonProps,
  { 'data-dimension'?: Dimension; 'data-appearance'?: string }
>((props) => ({
  'data-dimension': props.$dimension,
  'data-appearance': [props.$appearance, props.$displayAsDisabled ? 'disabled' : undefined]
    .filter((val) => val !== undefined)
    .join(' '),
}))<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: ${(p) => (p.$skeleton ? 0 : mediumGroupBorderRadius(p.theme.shape))};
  appearance: none;
  vertical-align: middle;
  pointer-events: ${(p) => (p.$loading || p.disabled || p.$skeleton ? 'none' : 'all')};

  ${appearanceMixin};
  ${dimensionMixin};
  ${(p) => p.$buttonCssMixin};
  ${({ $skeleton }) => $skeleton && skeletonAnimationMixin}};

  ${ButtonContent} {
    ${(p) => (p.$loading || p.$skeleton ? 'visibility: hidden;' : '')}
  }

  &:hover {
    cursor: pointer;
  }
`;
Button.displayName = 'Button';
