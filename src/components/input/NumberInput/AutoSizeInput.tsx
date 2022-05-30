import * as React from 'react';
import { changeInputData, isInputDataDifferent, InputData } from '#src/components/common/dom/changeInputData';
import type { ExtraProps, ComponentDimension } from '#src/components/input/types';
import { typography } from '#src/components/Typography';
import styled, { css } from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';

import { fitToCurrency2 } from './utils';

const Container = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: fit-content;
  max-width: 100%;

  ${typography['Body/Body 2 Long']}
`;

const iconSizeValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};
const horizontalPaddingValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 16;
    case 's':
      return 12;
    default:
      return 16;
  }
};

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

const disabledColors = css`
  background-color: ${(props) => props.theme.color['Neutral/Neutral 10']};
`;

const Input = styled.input<ExtraProps>`
  outline: none;
  appearance: none;
  border: none;
  padding: 0;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
  (
    { placeholder, type, precision = 2, prefix = '', suffix = '₽', thousand = ' ', decimal = '.', onChange, ...props },
    ref,
  ) => {
    const containerRef = React.useRef<any>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleInput = (inputData: InputData | null): InputData => {
      const { value, selectionStart } = inputData || {};
      const cursor = selectionStart || 0;
      const init_value = value || '';
      const newValue = fitToCurrency2(init_value, precision, decimal, thousand);

      if (containerRef.current && inputRef.current) {
        containerRef.current.innerHTML = newValue || placeholder;
      }

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

    // React.useEffect(() => {
    //   inputRef.current?.addEventListener('invalid', onInvalid);
    //   return () => {
    //     inputRef.current?.removeEventListener('invalid', onInvalid);
    //   };
    // });

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

    return (
      <Container id="test">
        <span ref={containerRef} style={{ height: '40px' }} />
        <Input ref={refSetter(ref, inputRef)} placeholder={placeholder} type={type} {...props} />
      </Container>
    );
  },
);
