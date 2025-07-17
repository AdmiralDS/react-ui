import type { InputHTMLAttributes, ReactNode, KeyboardEvent } from 'react';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { typography } from '#src/components/Typography';

import type { Dimension, LabelPosition } from '#src/components/Toggle/mixins';
import { hoverSizes, sizes, SLIDER_SIZE_M, SLIDER_SIZE_S, sliderSizes } from '#src/components/Toggle/mixins';
import { keyboardKey } from '../common/keyboardKey';

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Расположение подписи */
  labelPosition?: LabelPosition;
  /** Размер компонента */
  dimension?: Dimension;
  /** Отключение компонента */
  disabled?: boolean;
  /** Только для чтения */
  readOnly?: boolean;
  /** Ширина компонента. Применяется только в случае labelPosition == 'left'.
   * Рекомендуется использовать в мобильной версии компонента, указывая ширину равную всему экрану */
  width?: number | string;
  /** Дополнительный текст (подсказка), выводится нижней строкой */
  extraText?: ReactNode;
}

const LABEL_MARGIN = '8px';
const BORDER_RADIUS = '10px';
const SLIDER_INDENT = 2;
const HOVER_INDENT_X = '-12px';
const HOVER_INDENT = '-8px';

const hoverInputStyles = css<{ $dimension: Dimension }>`
  & + div > div {
    ${({ $dimension }) =>
      `left: calc(${$dimension === 'm' ? SLIDER_SIZE_M : SLIDER_SIZE_S} + ${HOVER_INDENT_X} + ${SLIDER_INDENT * 2}px);`}
  }
`;

const Input = styled.input<{ $dimension: Dimension; checked?: boolean }>`
  position: absolute;
  cursor: ${({ readOnly }) => (readOnly ? 'default' : 'pointer')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  opacity: 0;

  &:disabled {
    cursor: not-allowed;
  }

  &:checked {
    & + div > span {
      &:before {
        ${({ $dimension }) => `left: calc(${$dimension === 'm' ? SLIDER_SIZE_M : SLIDER_SIZE_S} + ${SLIDER_INDENT}px);`}
      }

      background: ${({ theme, readOnly }) =>
        readOnly
          ? `var(--admiral-color-Primary_Primary30, ${theme.color['Primary/Primary 30']})`
          : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`};
    }

    &:disabled + div > span {
      background: var(--admiral-color-Primary_Primary30, ${(p) => p.theme.color['Primary/Primary 30']});
    }

    ${hoverInputStyles};
  }

  &:not(:disabled) {
    &:focus-visible + div > span {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
    }

    &:hover {
      & + div > div {
        ${({ readOnly }) => !readOnly && `visibility: visible`};
      }
      &:focus-visible + div > span {
        outline: none;
      }
    }
    &:active {
      & + div > div {
        ${({ readOnly }) => !readOnly && `visibility: visible`};
        background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
      }
    }
  }
`;
const Label = styled.div<{
  $dimension: Dimension;
  disabled: boolean;
  $position: LabelPosition;
}>`
  display: flex;
  flex-direction: column;
  ${({ $position }) => ($position === 'right' ? `margin-left: ${LABEL_MARGIN};` : `margin-right: ${LABEL_MARGIN};`)}
  ${({ $dimension }) => ($dimension === 's' ? typography['Body/Body 2 Short'] : typography['Body/Body 1 Short'])}
  color: ${({ disabled, theme }) =>
    disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`};
`;

const Hint = styled.div<{ disabled: boolean }>`
  margin-top: 4px;
  ${typography['Body/Body 2 Short']};
  color: ${({ theme, disabled }) =>
    disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`};
`;

const Slider = styled.span<{
  $dimension: Dimension;
  $faded?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: ${BORDER_RADIUS};
  flex-shrink: 0;
  ${sizes}

  &:before {
    content: '';
    position: absolute;
    top: ${SLIDER_INDENT}px;
    left: ${SLIDER_INDENT}px;
    background: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
    transition: all 0.3s;
    ${sliderSizes}
  }

  background: ${({ theme, $faded }) =>
    $faded
      ? `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`};
`;

const Hover = styled.div<{ $dimension: Dimension }>`
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  top: ${HOVER_INDENT};
  left: ${HOVER_INDENT};
  background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  ${hoverSizes}
`;

const SliderWrapper = styled.div<{ $dimension: Dimension }>`
  pointer-events: none;
  position: relative;
  flex-shrink: 0;
  ${sizes}
`;

const Wrapper = styled.label<{
  width?: number | string;
  disabled?: boolean;
  readOnly?: boolean;
  $labelPosition: LabelPosition;
}>`
  display: flex;
  flex-direction: ${({ $labelPosition }) => ($labelPosition === 'right' ? 'row' : 'row-reverse')};
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  width: ${({ width }) => (width ? (typeof width === 'number' ? `${width}px` : width) : 'fit-content')};
  cursor: ${({ disabled, readOnly }) => (disabled ? 'not-allowed' : readOnly ? 'default' : 'pointer')};
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  ${({ readOnly }) => readOnly && `pointer-events: none`};
`;

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      dimension = 'm',
      labelPosition = 'right',
      disabled = false,
      readOnly = false,
      width,
      extraText,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (readOnly) {
        const code = keyboardKey.getCode(e);
        if (code === keyboardKey[' ']) {
          e.preventDefault();
        }
      }

      props.onKeyDown?.(e);
    };

    return (
      <Wrapper
        className={className}
        width={labelPosition === 'left' ? width : undefined}
        $labelPosition={labelPosition}
        disabled={disabled}
        readOnly={readOnly}
        role="switch"
        aria-checked={props.checked || props['aria-checked']}
      >
        <Input
          ref={ref}
          type="checkbox"
          $dimension={dimension}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
          onKeyDown={handleKeyDown}
        />
        <SliderWrapper $dimension={dimension}>
          <Hover $dimension={dimension} />
          <Slider $dimension={dimension} $faded={disabled || readOnly} aria-hidden />
        </SliderWrapper>
        {children && (
          <Label $dimension={dimension} disabled={disabled} $position={labelPosition}>
            {children}
            {extraText && <Hint disabled={disabled}>{extraText}</Hint>}
          </Label>
        )}
      </Wrapper>
    );
  },
);

Toggle.displayName = 'Toggle';
