import type { ButtonAppearance, Dimension, StyledButtonProps } from './types';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';
import { Spinner } from '#src/components/Spinner';
import { appearanceMixin } from './appearanceMixin';
import { dimensionMixin } from './dimensionMixin';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';
import { IconContainer } from '#src/components/TextButton/commonMixin';

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

  /** Иконка кнопки */
  icon?: ReactNode;

  /** Распооложение иконки кнопки */
  iconPlace?: IconPlace;

  /** Позволяет добавлять миксин для кнопок, созданный с помощью styled css  */
  buttonCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

const ButtonContent = styled.div<{ dimension?: Dimension; $loading?: boolean }>`
  vertical-align: top;

  display: inline-flex;
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

  > *:not(:first-child) {
    margin-left: 8px;
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      appearance = 'primary',
      dimension = 'xl',
      type = 'button',
      loading = false,
      skeleton = false,
      icon,
      iconPlace = 'left',
      children,
      buttonCssMixin,
      ...props
    },
    ref,
  ) => {
    const spinnerDimension = dimension === 's' ? 'ms' : 'm';
    const spinnerInverse = appearance !== 'secondary' && appearance !== 'ghost';
    const hasIconLeft = !!icon && iconPlace === 'left';
    const hasIconRight = !!icon && iconPlace === 'right';

    return (
      <StyledButton
        ref={ref}
        appearance={appearance}
        dimension={dimension}
        type={type}
        $loading={loading}
        skeleton={skeleton}
        hasIconLeft={hasIconLeft}
        hasIconRight={hasIconRight}
        buttonCssMixin={buttonCssMixin}
        {...props}
      >
        {loading && <StyledSpinner dimension={spinnerDimension} inverse={spinnerInverse} />}
        <ButtonContent>
          {hasIconLeft && <IconContainer>{icon}</IconContainer>}
          {React.Children.toArray(children).map((child, index) =>
            typeof child === 'string' ? <div key={child + index}>{child}</div> : child,
          )}
          {hasIconRight && <IconContainer>{icon}</IconContainer>}
        </ButtonContent>
      </StyledButton>
    );
  },
);

const StyledButton = styled.button.attrs<
  StyledButtonProps,
  { 'data-dimension'?: Dimension; 'data-appearance'?: string }
>((props) => ({
  'data-dimension': props.dimension,
  'data-appearance': [props.appearance, props.displayAsDisabled ? 'disabled' : undefined]
    .filter((val) => val !== undefined)
    .join(' '),
}))<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  border: none;
  border-radius: ${(p) => (p.skeleton ? 0 : mediumGroupBorderRadius(p.theme.shape))};
  appearance: none;
  vertical-align: center;
  pointer-events: ${(p) => (p.$loading || p.disabled || p.skeleton ? 'none' : 'all')};

  ${appearanceMixin};
  ${dimensionMixin};
  ${(p) => p.buttonCssMixin};
  ${({ skeleton }) => skeleton && skeletonAnimationMixin}};

  ${ButtonContent} {
    ${(p) => (p.$loading || p.skeleton ? 'visibility: hidden;' : '')}
  }

  &:hover {
    cursor: pointer;
  }
`;
Button.displayName = 'Button';
