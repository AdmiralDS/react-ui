import { uid } from '#src/components/common/uid';
import type { Appearance, Dimension } from './types';
import type { ButtonHTMLAttributes } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { appearanceMixin } from './appearanceMixin';
import { dimensionMixin } from './dimensionMixin';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: Appearance;

  /** Размер кнопки */
  dimension?: Dimension;

  /** Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле */
  displayAsDisabled?: boolean;

  /** Отображать кнопку квадратной*/
  displayAsSquare?: boolean;
}

const StyledButton = styled.button.attrs<ButtonProps, { 'data-dimension'?: Dimension; 'data-appearance'?: string }>(
  (props) => ({
    'data-dimension': props.dimension,
    'data-appearance': [props.appearance, props.displayAsDisabled ? 'disabled' : undefined]
      .filter((val) => val !== undefined)
      .join(' '),
  }),
)<ButtonProps>`
  box-sizing: border-box;
  display: inline-block;
  border: none;
  border-radius: 4px;
  appearance: none;
  vertical-align: center;

  ${appearanceMixin};

  ${dimensionMixin}
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ButtonContent = styled.span<{ dimension?: Dimension }>`
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ appearance = 'primary', dimension = 'xl', type = 'button', children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} appearance={appearance} dimension={dimension} type={type} {...props}>
        <ButtonContent>
          {React.Children.toArray(children).map((child) =>
            typeof child === 'string' ? <span key={uid()}>{child}</span> : child,
          )}
        </ButtonContent>
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
