import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';

import { typography } from '#src/components/Typography';

import type { Dimension, LabelPosition } from '#src/components/Toggle/mixins';
import { hoverSizes, sizes, SLIDER_SIZE_M, SLIDER_SIZE_S, sliderSizes } from '#src/components/Toggle/mixins';

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
const SLIDER_INDENT = 2;
const HOVER_INDENT_X = '-12px';
const HOVER_INDENT = '-8px';

const hoverInputStyles = css<{ dimension: Dimension }>`
  & + div > div {
    ${({ dimension }) =>
      `left: calc(${dimension === 'm' ? SLIDER_SIZE_M : SLIDER_SIZE_S} + ${HOVER_INDENT_X} + ${SLIDER_INDENT * 2}px);`}
  }
`;

const Input = styled.input<{ dimension: Dimension; checked?: boolean }>`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked {
    & + div > span {
      &:before {
        ${({ dimension }) => `left: calc(${dimension === 'm' ? SLIDER_SIZE_M : SLIDER_SIZE_S} + ${SLIDER_INDENT}px);`}
      }

      background: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    }

    ${hoverInputStyles};
  }

  &:not(:disabled) {
    &:focus-visible + div > span {
      outline-offset: 2px;
      outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
    }

    &:hover + div > div {
      visibility: visible;
    }
  }

  &:disabled + div > span {
    background: ${({ theme }) => theme.color['Neutral/Neutral 30']};
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
  ${({ dimension }) => (dimension === 's' ? typography['Body/Body 2 Short'] : typography['Body/Body 1 Short'])}
  color: ${({ disabled, theme }) => (disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 90'])};
`;

const Hint = styled.div<{
  dimension: Dimension;
  disabled: boolean;
}>`
  margin-top: 4px;
  ${({ dimension }) => (dimension === 's' ? typography['Caption/Caption 1'] : typography['Body/Body 2 Short'])}
  color: ${({ theme, disabled }) => (disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 50'])};
`;

const Slider = styled.span<{
  dimension: Dimension;
  disabled: boolean;
  checked?: boolean;
}>`
  position: absolute;
  ${sizes}
  border-radius: ${BORDER_RADIUS};
  flex-shrink: 0;

  &:before {
    content: '';
    position: absolute;
    top: ${SLIDER_INDENT}px;
    left: ${SLIDER_INDENT}px;
    ${sliderSizes}
    background: ${({ theme }) => theme.color['Special/Static White']};
    transition: all 0.3s;
  }

  background: ${({ theme }) => theme.color['Neutral/Neutral 50']};
`;

const Hover = styled.div<{ dimension: Dimension }>`
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  top: ${HOVER_INDENT};
  left: ${HOVER_INDENT};
  ${hoverSizes}
  background: ${({ theme }) => theme.color['Opacity/Hover']};
`;

const SliderWrapper = styled.div<{ dimension: Dimension }>`
  position: relative;
  ${sizes}
  flex-shrink: 0;
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
        <SliderWrapper dimension={dimension}>
          <Hover dimension={dimension} />
          <Slider dimension={dimension} checked={props.checked} disabled={disabled} aria-hidden />
        </SliderWrapper>
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

Toggle.displayName = 'Toggle';
