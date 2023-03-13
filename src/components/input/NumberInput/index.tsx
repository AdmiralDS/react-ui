import * as React from 'react';
import styled, { css } from 'styled-components';
import type { TextInputProps } from '#src/components/input/TextInput';
import type { ComponentDimension, ExtraProps } from '#src/components/input/types';
import { typography } from '#src/components/Typography';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ReactComponent as MinusOutline } from '@admiral-ds/icons/build/service/MinusOutline.svg';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import { InputIconButton } from '#src/components/InputIconButton';
import { keyboardKey } from '#src/components/common/keyboardKey';

import { HeightLimitedContainer } from '../Container';

import { AutoSizeInput, BorderedDiv, horizontalPaddingValue } from './AutoSizeInput';
import { clearValue, fitToCurrency, validateThousand } from './utils';

export { fitToCurrency, clearValue } from './utils';

const extraPadding = css<ExtraProps>`
  padding-right: ${(props) => horizontalPaddingValue(props) + (iconSizeValue(props) + 8) * (props.iconCount ?? 0)}px;
`;
const preventDefault = (e: React.MouseEvent) => e.preventDefault();

const PlusMinusIcon = styled(InputIconButton)<{ disabled?: boolean }>`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${({ disabled, theme }) =>
    disabled
      ? css`
          pointer-events: none;

          & *[fill^='#'] {
            fill: ${theme.color['Neutral/Neutral 30']};
          }
        `
      : ''}
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

const IconPanel = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  margin-right: ${horizontalPaddingValue}px;

  & > svg {
    display: block;
    width: ${iconSizeValue}px;
  }

  & > * {
    margin-left: 8px;
  }
`;

const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  padding: 0 ${horizontalPaddingValue}px;
  ${extraPadding};
  border-radius: inherit;

  &[data-align='right'] {
    justify-content: flex-end;
  }
`;

const Wrapper = styled(HeightLimitedContainer)<{
  disabled?: boolean;
  dimension?: ComponentDimension;
  readOnly?: boolean;
  skeleton?: boolean;
  status?: TextInputProps['status'];
}>`
  background-color: ${(props) => {
    if (props.disabled || props.readOnly) return props.theme.color['Neutral/Neutral 10'];
    return props.theme.color['Neutral/Neutral 00'];
  }};
  color: ${(props) =>
    props.disabled ? props.theme.color['Neutral/Neutral 30'] : props.theme.color['Neutral/Neutral 90']};
  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  overflow: hidden;

  &:hover:not(:focus-within) ${BorderedDiv} {
    border: 1px solid
      ${(props) => {
        if (props.disabled || props.readOnly) return 'transparent';
        if (props.status === 'error') return props.theme.color['Error/Error 70'];
        if (props.status === 'success') return props.theme.color['Success/Success 60'];
        return props.theme.color['Neutral/Neutral 60'];
      }};
  }
  &:hover:not(:focus-within) input:invalid + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 70']};
  }
`;

export interface NumberInputProps extends TextInputProps {
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
  /** Шаг инпута. Если шаг - это дробное число, то количество знаков в десятичной части step должно быть равно precision */
  step?: number;
  /** Минимальное значение. При minValue >= 0, ввод знака минус блокируется */
  minValue?: number;
  /** Максимальное значение */
  maxValue?: number;
  /** Отображать иконки плюса минуса */
  displayPlusMinusIcons?: boolean;
  /** Выравнивание контента. По умолчанию выравнивание происходит по левому краю */
  align?: 'left' | 'right';
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      style,
      containerRef,
      status,
      icons,
      displayClearIcon = false,
      displayPlusMinusIcons = true,
      prefix = '',
      suffix = '₽',
      precision = 2,
      thousand: userThousand = ' ',
      decimal: userDecimal = '.',
      step = 1,
      minValue,
      maxValue,
      placeholder = '0 ₽',
      align = 'left',
      skeleton = false,
      onChange,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [plusDisabled, setPlusDisabled] = React.useState(false);
    const [minusDisabled, setMinusDisabled] = React.useState(false);

    const inputRef = React.useRef<HTMLInputElement>(null);

    // thousand, decimal - не более одного символа
    const thousand = validateThousand(userThousand) ? userThousand.slice(0, 1) : ' ';
    const decimal = userDecimal.slice(0, 1);

    React.useEffect(() => {
      // проверка на undefined и пустую строку
      const valueExist = props.value !== undefined && !!String(props.value);
      const defaultValueExist = props.defaultValue !== undefined && !!String(props.defaultValue);
      const value = valueExist ? String(props.value) : String(props.defaultValue);
      if (valueExist || defaultValueExist) {
        if (typeof minValue === 'number') {
          const minusDsb = Number(clearValue(value, precision, decimal)) - step < minValue;
          minusDisabled !== minusDsb && setMinusDisabled(minusDsb);
        }
        if (typeof maxValue === 'number') {
          const plusDsb = Number(clearValue(value, precision, decimal)) + step > maxValue;
          plusDisabled !== plusDsb && setPlusDisabled(plusDsb);
        }
      } else {
        // Если параметры value, defaultValue не заданы или являются пустыми строками, тогда кнопки +/- не могут быть задизейблены
        minusDisabled && setMinusDisabled(false);
        plusDisabled && setPlusDisabled(false);
      }
    }, [props.value, props.defaultValue]);

    const handleMinus = () => {
      const current = inputRef.current?.value || '';
      const newValue = Number(clearValue(current, precision, decimal)) - step;
      const newValueStr = fitToCurrency(newValue.toFixed(precision), precision, decimal, thousand, true);
      if (inputRef.current) {
        if (typeof minValue === 'number') {
          if (newValue >= minValue) {
            changeInputData(inputRef.current, { value: newValueStr });
          }
        } else {
          changeInputData(inputRef.current, { value: newValueStr });
        }
      }
    };
    const handlePlus = () => {
      const current = inputRef.current?.value || '';
      const newValue = Number(clearValue(current, precision, decimal)) + step;
      const newValueStr = fitToCurrency(newValue.toFixed(precision), precision, decimal, thousand, true);
      if (inputRef.current) {
        if (typeof maxValue === 'number') {
          if (newValue <= maxValue) {
            changeInputData(inputRef.current, { value: newValueStr });
          }
        } else {
          changeInputData(inputRef.current, { value: newValueStr });
        }
      }
    };

    const iconArray = React.Children.toArray(icons);

    if (!props.readOnly && displayClearIcon) {
      iconArray.unshift(
        <InputIconButton
          icon={CloseOutlineSvg}
          key="clear-icon"
          onClick={() => {
            if (inputRef.current) {
              changeInputData(inputRef.current, { value: '' });
            }
          }}
          aria-hidden
        />,
      );
    }

    if (!props.readOnly && displayPlusMinusIcons) {
      iconArray.push(
        <PlusMinusIcon
          icon={MinusOutline}
          key="minus-icon"
          onClick={handleMinus}
          disabled={props.disabled || minusDisabled}
          aria-hidden
        />,
        <PlusMinusIcon
          icon={PlusOutline}
          key="plus-icon"
          onClick={handlePlus}
          disabled={props.disabled || plusDisabled}
          aria-hidden
        />,
      );
    }

    const iconCount = iconArray.length;

    /**
     * При потере фокуса:
     * если precision > 0, количество цифр после разделителя decimal должно быть равно precision.
     * Если условие выше несоблюдено, должна быть произведена корректировка значения. Например: '70.' => '70.00' при precision={2}
     */
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const newValue = fitToCurrency(event.currentTarget.value, precision, decimal, thousand, true);
      if (inputRef.current) {
        // если введеное значение меньше minValue
        if (typeof minValue === 'number' && Number(clearValue(newValue, precision, decimal)) < minValue) {
          const fullValue = fitToCurrency(String(minValue), precision, decimal, thousand, true);

          changeInputData(inputRef.current, { value: fullValue });
        }
        // если введеное значение меньше maxValue
        else if (typeof maxValue === 'number' && Number(clearValue(newValue, precision, decimal)) > maxValue) {
          const fullValue = fitToCurrency(String(maxValue), precision, decimal, thousand, true);

          changeInputData(inputRef.current, { value: fullValue });
        }
        // если значение в инпуте неполностью отформатировано, например, не все разряды после запятой проставлены
        else if (newValue !== event.currentTarget.value) {
          changeInputData(inputRef.current, { value: newValue });
        }
      }
      onBlur?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVal = event.currentTarget.value;

      if (typeof minValue === 'number' && newVal) {
        const minusDsb = Number(clearValue(newVal, precision, decimal)) - step < minValue;
        minusDisabled !== minusDsb && setMinusDisabled(minusDsb);
      }
      if (typeof maxValue === 'number' && newVal) {
        const plusDsb = Number(clearValue(newVal, precision, decimal)) + step > maxValue;
        plusDisabled !== plusDsb && setPlusDisabled(plusDsb);
      }
      if (newVal === '') {
        // когда в инпут ничего не введено, кнопки +/- не должны быть задизейблены
        minusDisabled && setMinusDisabled(false);
        plusDisabled && setPlusDisabled(false);
      }

      onChange?.(event);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(e);
      switch (code) {
        case keyboardKey.ArrowUp: {
          handlePlus();
          e.preventDefault();
          break;
        }
        case keyboardKey.ArrowDown: {
          handleMinus();
          e.preventDefault();
          break;
        }
      }
    };

    return (
      <Wrapper
        ref={containerRef}
        className={className}
        style={style}
        disabled={props.disabled}
        dimension={props.dimension}
        readOnly={props.readOnly}
        data-read-only={props.readOnly ? true : undefined}
        data-disable-copying={props.disableCopying ? true : undefined}
        onMouseDown={props.disableCopying ? preventDefault : undefined}
        skeleton={skeleton}
        status={status}
      >
        <Content data-align={align} dimension={props.dimension} iconCount={iconCount} onKeyDown={handleKeyDown}>
          <AutoSizeInput
            ref={refSetter(ref, inputRef)}
            onChange={handleChange}
            placeholder={placeholder}
            onBlur={handleBlur}
            suffix={suffix}
            prefix={prefix}
            thousand={thousand}
            decimal={decimal}
            precision={precision}
            status={status}
            minValue={minValue}
            {...props}
          />
        </Content>
        {iconCount > 0 && (
          <IconPanel disabled={props.disabled} dimension={props.dimension}>
            {iconArray}
          </IconPanel>
        )}
      </Wrapper>
    );
  },
);

NumberInput.displayName = 'NumberInput';
