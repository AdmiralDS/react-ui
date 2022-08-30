import * as React from 'react';
import { changeInputData, InputData, isInputDataDifferent } from '#src/components/common/dom/changeInputData';
import type { ExtraProps } from '#src/components/input/types';
import type { TextInputProps } from '#src/components/input/TextInput';
import { typography } from '#src/components/Typography';
import styled, { css } from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';
import observeRect from '#src/components/common/observeRect';

import { fitToCurrency } from './utils';

const Prefix = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const Suffix = styled(Prefix)`
  min-width: 0;
`;

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-height: 100%;
  border-radius: inherit;
`;

const Sizer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  visibility: hidden;
  white-space: pre;
  pointer-events: none;
  box-sizing: border-box;
`;

export const BorderedDiv = styled.div<{ status?: TextInputProps['status'] }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid
    ${({ theme, status }) => {
      if (status === 'error') return theme.color['Error/Error 60 Main'];
      if (status === 'success') return theme.color['Success/Success 50 Main'];
      return theme.color['Neutral/Neutral 40'];
    }};
  border-radius: inherit;

  [data-read-only] & {
    border-color: transparent;
  }
`;

const colorsBorderAndBackground = css<{ disabled?: boolean }>`
  background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};

  &:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Primary/Primary 60 Main']};
  }

  &:disabled + ${BorderedDiv} {
    border-color: transparent;
  }

  &[data-status='error']:focus + ${BorderedDiv}, &:invalid:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  &:invalid + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  &[data-status='success']:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  [data-read-only] &&&,
  &&&:disabled {
    background-color: ${(props) => props.theme.color['Neutral/Neutral 10']};
  }

  &:disabled {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-read-only] &:focus + ${BorderedDiv} {
    border-color: transparent;
  }
`;

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

const Input = styled.input<ExtraProps>`
  outline: none;
  appearance: none;
  border: none;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  min-width: 10px;
  max-width: 100%;

  color: ${(props) => props.theme.color['Neutral/Neutral 90']};

  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:disabled::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-read-only] & {
    user-select: none;
    pointer-events: none;
  }

  ${colorsBorderAndBackground}
  ${ieFixes}
`;

export interface InputProps extends TextInputProps {
  /** точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа */
  precision?: number;
  /** префикс (строка, которая выводится перед числовым значением) */
  prefix?: string;
  /** суффикс (строка, которая выводится после числового значения) */
  suffix?: string;
  /** разделитель между тысячами */
  thousand?: string;
  /** разделитель между целым и десятичным */
  decimal?: string;
}

export const AutoSizeInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type, precision = 2, prefix = '', suffix, thousand = ' ', decimal = '.', status, ...props }, ref) => {
    const [showPrefixSuffix, setPrefixSuffix] = React.useState(false);

    const sizerRef = React.useRef<HTMLDivElement>(null);
    const sizerWidth = React.useRef(0);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const updateInputWidth = (newValue: any) => {
      if (sizerRef.current && inputRef.current) {
        sizerRef.current.innerHTML = newValue || placeholder || '';
        // 2px с расчетом на курсор
        inputRef.current.style.width = `${sizerRef.current.getBoundingClientRect().width + 2}px`;
      }
      if (newValue) {
        setPrefixSuffix?.(true);
      } else {
        setPrefixSuffix?.(false);
      }
    };

    const handleInput = (inputData: InputData | null): InputData => {
      const { value, selectionStart } = inputData || {};
      const cursor = selectionStart || 0;
      const init_value = value || '';
      const newValue = fitToCurrency(init_value, precision, decimal, thousand);

      updateInputWidth(newValue);

      if (thousand && init_value.charAt(cursor - 1) === thousand && newValue.length === init_value.length) {
        // если пытаемся стереть разделитель thousand, то курсор перескакивает через него
        return {
          ...inputData,
          value: newValue,
          selectionStart: cursor - 1,
          selectionEnd: cursor - 1,
        };
      } else {
        return {
          ...inputData,
          value: newValue,
          selectionStart: newValue.length - init_value.length + cursor,
          selectionEnd: newValue.length - init_value.length + cursor,
        };
      }
    };

    React.useLayoutEffect(() => {
      const nullHandledValue = handleInput(null);

      function oninput(this: HTMLInputElement) {
        const { value, selectionStart, selectionEnd } = this;
        const currentInputData = { value, selectionStart, selectionEnd };

        const inputData = handleInput(currentInputData);

        if (placeholder && !isInputDataDifferent(nullHandledValue, inputData)) {
          changeInputData(this, { ...inputData, value: '' });
        } else {
          changeInputData(this, inputData);
        }
      }

      // Чтение selectionStart в Safari при type='date' вызывает ошибку
      if (type !== 'date' && inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', oninput);

        const { value, selectionStart, selectionEnd } = node;
        const currentInputData = { value, selectionStart, selectionEnd };
        const inputData = handleInput(currentInputData);

        if (placeholder && !isInputDataDifferent(nullHandledValue, inputData)) {
          changeInputData(node, { ...inputData, value: '' });
        } else {
          changeInputData(node, inputData);
        }

        return () => {
          node.removeEventListener('input', oninput);
        };
      }
    }, [inputRef.current, placeholder]);

    React.useLayoutEffect(() => {
      if (inputRef.current) {
        updateInputWidth(inputRef.current.value);
      }
    }, [props.value, props.defaultValue, props.dimension, placeholder]);

    // recalculation on resize. For example, it happens after fonts loading
    React.useLayoutEffect(() => {
      if (sizerRef.current) {
        const observer = observeRect(sizerRef.current, (rect) => {
          const width = rect?.width || 0;
          if (sizerWidth.current !== width) {
            sizerWidth.current = width;
            if (inputRef.current) {
              updateInputWidth(inputRef.current.value);
            }
          }
        });
        observer.observe();
        return () => {
          observer.unobserve();
        };
      }
    }, [sizerRef.current, placeholder]);

    const handleMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
      // отменяю всплытие события, чтобы не сработал onMouseDown на Content и фокус не был снова установлен
      e.stopPropagation();
      props.onMouseDown?.(e);
    };

    return (
      <Wrapper>
        {prefix && showPrefixSuffix && <Prefix>{prefix}&nbsp;</Prefix>}
        <Wrapper>
          <Sizer ref={sizerRef} />
          <Input
            {...props}
            ref={refSetter(ref, inputRef)}
            placeholder={placeholder}
            type="text"
            onMouseDown={handleMouseDown}
            data-status={status}
          />
          <BorderedDiv status={status} />
          {suffix && showPrefixSuffix && <Suffix>&nbsp;{suffix}</Suffix>}
        </Wrapper>
      </Wrapper>
    );
  },
);
