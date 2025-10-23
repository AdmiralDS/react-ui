import { useState, useRef, useLayoutEffect, forwardRef } from 'react';
import type { InputData } from '#src/components/common/dom/changeInputData';
import { changeInputData, isInputDataDifferent } from '#src/components/common/dom/changeInputData';
import type { ComponentDimension, ExtraProps } from '#src/components/input/types';
import type { TextInputProps } from '#src/components/input/TextInput';
import { typography } from '#src/components/Typography';
import styled, { css } from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';

function defaultHandleInput(newInputData: InputData | null): InputData {
  return newInputData || {};
}

const Prefix = styled.div<{ disabled?: boolean; $align?: 'left' | 'right' }>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  user-select: none;
  color: ${({ theme, disabled }) =>
    disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`};
  ${({ $align }) => $align === 'right' && 'margin-left: auto;'}
`;

const Suffix = styled(Prefix)`
  min-width: 0;
  ${({ $align }) =>
    $align === 'right' &&
    css`
      flex: 0 1 auto;
      margin-left: 0;
    `}
`;

const Sizer = styled.div<{ $hasPrefix?: boolean; $align?: 'left' | 'right' }>`
  display: flex;
  flex-shrink: 0;
  visibility: hidden;
  white-space: pre;
  box-sizing: border-box;
  ${({ $hasPrefix, $align }) => !$hasPrefix && $align === 'right' && 'margin-left: auto;'}
`;

export const BorderedDiv = styled.div<{ $status?: TextInputProps['status'] }>`
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
    ${({ theme, $status }) => {
      if ($status === 'error') {
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      }
      if ($status === 'success') {
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      }
      return `var(--admiral-color-Neutral_Neutral40, ${theme.color['Neutral/Neutral 40']})`;
    }};
  border-radius: inherit;

  [data-read-only] & {
    border-color: transparent;
  }
`;

const colorsBorderAndBackground = css<{ disabled?: boolean }>`
  &:focus + ${BorderedDiv} {
    border: 2px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  }

  &:disabled + ${BorderedDiv} {
    border-color: transparent;
  }

  &[data-status='error']:focus + ${BorderedDiv}, &:user-invalid:focus + ${BorderedDiv} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  &:user-invalid + ${BorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  &[data-status='success']:focus + ${BorderedDiv} {
    border: 2px solid var(--admiral-color-Success_Success50Main, ${(p) => p.theme.color['Success/Success 50 Main']});
  }

  &:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
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

const Input = styled.input<ExtraProps & { $align?: 'left' | 'right' }>`
  outline: none;
  appearance: none;
  border: none;
  padding: 0;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;

  background: transparent;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  text-align: ${({ $align }) => ($align === 'left' ? 'left' : 'right')};

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${colorsBorderAndBackground}
  ${ieFixes}
`;

export const horizontalPaddingValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
    case 'xl':
      return 16;
    case 's':
      return 12;
    default:
      return 16;
  }
};

export const iconSizeValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};

const HiddenContent = styled.div<{ $dimension?: ComponentDimension; $iconCount?: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  left: ${horizontalPaddingValue}px;
  right: ${(props) => horizontalPaddingValue(props) + (iconSizeValue(props) + 8) * (props.$iconCount ?? 0)}px;
`;

export interface InputProps extends TextInputProps {
  /** префикс (строка, которая выводится перед числовым значением) */
  prefix?: string;
  /** суффикс (строка, которая выводится после числового значения) */
  suffix?: string;
  /** Количество иконок */
  iconCount?: number;
  /** Выравнивание контента. По умолчанию выравнивание происходит по левому краю */
  align?: 'left' | 'right';
  /** Внутреннее значение инпута */
  innerValue: TextInputProps['value'];
  /** Скрыть пробел после префикса */
  hideSpaceAfterPrefix?: boolean;
  /** Скрыть пробел перед суффиксом */
  hideSpaceBeforeSuffix?: boolean;
}

export const AutoSizeInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      dimension,
      placeholder,
      className,
      type,
      prefix,
      suffix,
      status,
      iconCount,
      align,
      innerValue,
      hideSpaceAfterPrefix = false,
      hideSpaceBeforeSuffix = false,
      handleInput = defaultHandleInput,
      ...props
    },
    ref,
  ) => {
    const [showPrefixSuffix, setPrefixSuffix] = useState(false);

    const sizerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const prefixRef = useRef<HTMLDivElement>(null);
    const suffixRef = useRef<HTMLDivElement>(null);

    const updateHiddenContent = (newValue: TextInputProps['value']) => {
      if (sizerRef.current) {
        sizerRef.current.innerHTML = newValue || placeholder || '';
      }
    };

    const updatePrefixSuffixState = (newValue: TextInputProps['value']) => {
      if (newValue) {
        setPrefixSuffix(true);
      } else {
        setPrefixSuffix(false);
      }
    };

    const updateInputLeftPadding = () => {
      if (inputRef.current) {
        if (!showPrefixSuffix || !prefix) {
          inputRef.current.style.paddingLeft = '0px';
        } else if (prefixRef.current && showPrefixSuffix) {
          inputRef.current.style.paddingLeft = `${prefixRef.current.getBoundingClientRect().width}px`;
        }
      }
    };

    const updateInputRightPadding = () => {
      if (inputRef.current) {
        if (!showPrefixSuffix || !suffix || align === 'left') {
          inputRef.current.style.paddingRight = '0px';
        } else if (suffixRef.current && showPrefixSuffix && align === 'right') {
          inputRef.current.style.paddingRight = `${suffixRef.current.getBoundingClientRect().width}px`;
        }
      }
    };

    useLayoutEffect(() => {
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
    }, [handleInput, inputRef.current, placeholder]);

    useLayoutEffect(() => {
      updateHiddenContent(innerValue);
      updatePrefixSuffixState(innerValue);
    }, [innerValue, placeholder, inputRef.current, sizerRef.current]);

    useLayoutEffect(
      () => updateInputLeftPadding(),
      [prefix, dimension, prefixRef.current, inputRef.current, showPrefixSuffix],
    );

    useLayoutEffect(
      () => updateInputRightPadding(),
      [suffix, dimension, suffixRef.current, inputRef.current, showPrefixSuffix, align],
    );

    useLayoutEffect(() => {
      if (prefixRef.current) {
        const resizeObserver = new ResizeObserver((entries) => {
          entries.forEach(() => {
            updateInputLeftPadding();
          });
        });
        resizeObserver.observe(prefixRef.current);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [prefixRef.current, inputRef.current, showPrefixSuffix, prefix]);

    useLayoutEffect(() => {
      if (suffixRef.current) {
        const resizeObserver = new ResizeObserver((entries) => {
          entries.forEach(() => {
            updateInputRightPadding();
          });
        });
        resizeObserver.observe(suffixRef.current);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [suffixRef.current, inputRef.current, showPrefixSuffix, suffix, align]);

    return (
      <>
        <HiddenContent $iconCount={iconCount} $dimension={dimension}>
          {prefix && showPrefixSuffix && (
            <Prefix ref={prefixRef} disabled={props.disabled} $align={align}>
              {prefix}
              {!hideSpaceAfterPrefix && <>&nbsp;</>}
            </Prefix>
          )}
          <Sizer ref={sizerRef} $hasPrefix={!!prefix} $align={align} />
          {suffix && showPrefixSuffix && (
            <Suffix ref={suffixRef} disabled={props.disabled} $align={align}>
              {!hideSpaceBeforeSuffix && <>&nbsp;</>}
              {suffix}
            </Suffix>
          )}
        </HiddenContent>
        <Input
          {...props}
          className={className + ' number-input-native-input'}
          $dimension={dimension}
          ref={refSetter(ref, inputRef)}
          placeholder={placeholder}
          type="text"
          data-status={status}
          $align={align}
        />
        <BorderedDiv $status={status} />
      </>
    );
  },
);
