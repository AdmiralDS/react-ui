import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

import { typography } from '../Typography';

import type { Dimension, LabelPosition } from './mixins';
import { sizes, SLIDER_SIZE_M, SLIDER_SIZE_S, sliderSizes } from './mixins';

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Состояние компонента */
  checked?: boolean;
  /** Колбек на изменение состояния компонента */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Расположение подписи */
  labelPosition?: LabelPosition;
  /** Размер компонента */
  dimension?: Dimension;
  /** Отключение компонента */
  disabled?: boolean;
  /** Ширина компонента. Применяется только в случае labelPosition == 'left'.
   * Рекомендуется использовать в мобильной версии компонента, указываю ширину равную всему экрану */
  width?: number | string;
  /** Дополнительный текст (подсказка), выводится нижней строкой */
  extraText?: ReactNode;
}

const LABEL_MARGIN = '8px';
const BORDER_RADIUS = '10px';
const SLIDER_INDENT = '2px';

const Input = styled.input<{ dimension: Dimension }>`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + span {
    &:before {
      ${({ dimension }) =>
        `left: calc(100% - ${SLIDER_INDENT} - ${dimension === 'm' ? SLIDER_SIZE_M : SLIDER_SIZE_S});`}
    }

    background: ${({ theme }) => theme.color.basic.primary};
  }

  &:disabled + span {
    background: ${({ theme }) => theme.color.text.tertiary};
  }

  &:checked:not(:disabled) {
    &:hover + span,
    &:focus + span {
      background: ${({ theme }) => theme.color.basic.hover};
    }
  }

  &:not(:checked):not(:disabled) {
    &:hover + span,
    &:focus + span {
      background: ${({ theme }) => theme.color.text.secondary};
    }
  }
`;
const Label = styled.div<{
  dimension: Dimension;
  disabled: boolean;
  position: LabelPosition;
}>`
  display: flex;
  flex-direction: column;
  ${({ position }) => (position === 'right' ? `margin-left: ${LABEL_MARGIN};` : `margin-right: ${LABEL_MARGIN};`)}
  ${({ dimension }) => (dimension === 's' ? typography['Additional/XS'] : typography['Additional/M'])}
  color: ${({ disabled, theme }) => (disabled ? theme.color.text.tertiary : theme.color.text.primary)};
`;

const Hint = styled.div<{
  dimension: Dimension;
  disabled: boolean;
}>`
  margin-top: 4px;
  ${({ dimension }) => (dimension === 's' ? typography['Caption/XS'] : typography['Additional/XS'])}
  color: ${({ theme, disabled }) => (disabled ? theme.color.text.tertiary : theme.color.text.secondary)};
`;

const Slider = styled.span<{
  dimension: Dimension;
  disabled: boolean;
}>`
  position: relative;
  ${sizes}
  border-radius: ${BORDER_RADIUS};
  flex-shrink: 0;

  &:before {
    content: '';
    position: absolute;
    top: ${SLIDER_INDENT};
    left: ${SLIDER_INDENT};
    ${sliderSizes}
    background: ${({ theme }) => theme.color.background.primary};
    transition: all 0.3s;
  }

  background: ${({ theme }) => theme.color.basic.tertiary};
`;

const Wrapper = styled.label<{ width?: number | string; disabled: boolean; labelPosition: LabelPosition }>`
  display: flex;
  flex-direction: ${({ labelPosition }) => (labelPosition === 'right' ? 'row' : 'row-reverse')};
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  width: ${({ width }) => (width ? (typeof width === 'number' ? `${width}px` : width) : 'fit-content')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    { dimension = 'm', labelPosition = 'right', disabled = false, width, extraText, className, children, ...props },
    ref,
  ) => {
    return (
      <Wrapper
        className={className}
        width={labelPosition === 'left' ? width : undefined}
        labelPosition={labelPosition}
        disabled={disabled}
        role="switch"
        aria-checked={props.checked || props['aria-checked']}
      >
        <Input ref={ref} type="checkbox" dimension={dimension} disabled={disabled} {...props} />
        <Slider dimension={dimension} disabled={disabled} aria-hidden />
        {children && (
          <Label dimension={dimension} disabled={disabled} position={labelPosition}>
            {children}
            {extraText && (
              <Hint dimension={dimension} disabled={disabled}>
                {extraText}
              </Hint>
            )}
          </Label>
        )}
      </Wrapper>
    );
  },
);
