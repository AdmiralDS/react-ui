import * as React from 'react';
import styled, { css } from 'styled-components';
import type { TextInputProps } from '#src/components/input/TextInput';
import type { ComponentDimension } from '#src/components/input/types';
import { typography } from '#src/components/Typography';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ReactComponent as EyeCloseOutlineSvg } from '@admiral-ds/icons/build/service/EyeCloseOutline.svg';
import { ReactComponent as EyeOutlineSvg } from '@admiral-ds/icons/build/service/EyeOutline.svg';
import { ReactComponent as MinusOutline } from '@admiral-ds/icons/build/service/MinusOutline.svg';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';

import { Container } from '../Container';
import { StatusIcon } from '../StatusIcon';

import { AutoSizeInput } from './AutoSizeInput';
import { fitToCurrency2, clearValue, validateThousand } from './utils';

const Icon = css`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }
  &:hover {
    cursor: pointer;
  }
  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color['Primary/Primary 70']};
  }
`;

const IconDisabled = css`
  cursor: default;
  pointer-events: none;
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }
`;

const Minus = styled(MinusOutline)<{ disabled?: boolean }>`
  ${Icon}
  ${({ disabled }) => disabled && IconDisabled}
`;
const Plus = styled(PlusOutline)<{ disabled?: boolean }>`
  ${Icon}
  ${({ disabled }) => disabled && IconDisabled}
`;
const ClearIcon = styled(CloseOutlineSvg)`
  ${Icon}
`;
const EyeIcon = styled(EyeOutlineSvg)`
  ${Icon}
`;
const EyeCloseIcon = styled(EyeCloseOutlineSvg)`
  ${Icon}
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
  display: flex;
  align-items: center;
  ${({ disabled }) => disabled && IconDisabled}

  & > svg {
    display: block;
    width: ${iconSizeValue}px;
  }

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`;

const BorderedDiv = styled.div`
  position: absolute;
  inset: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid ${(props) => props.theme.color['Neutral/Neutral 40']};
  border-radius: inherit;

  [data-status='error'] & {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] & {
    border: 1px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  [data-read-only] & {
    border-color: transparent;
  }
`;

const disabledColors = css`
  background-color: ${(props) => props.theme.color['Neutral/Neutral 10']};
  border-color: transparent;
`;

const Wrapper = styled(Container)`
  background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};
  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}

  [data-status='error'] &:hover + ${BorderedDiv}, [data-status='error'] &:focus + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] &:hover + ${BorderedDiv}, [data-status='success'] &:focus + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  [data-read-only] &:hover + ${BorderedDiv}, [data-read-only] &:focus + ${BorderedDiv} {
    border-color: transparent;
  }

  &:disabled {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  & > input:focus {
    &: ${BorderedDiv} {
      border: 2px solid red;
    }
  }

  & > div > input:focus + ${BorderedDiv} {
    border: 2px solid red;
  }
`;

const Prefix = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flexwrap: wrap;
  overflow: hidden;
  maxheight: 100%;
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
  /** Шаг инпута */
  step?: number;
  /** Минимальное значение слайдера */
  minValue?: number;
  /** Максимальное значение слайдера */
  maxValue?: number;
  /** Отображать иконки плюса минуса */
  displayPlusMinusIcons?: boolean;
  /** Колбек на изменение значения компонента
   * 1) event - событие ChangeEvent или FocusEvent (колбек onChange может быть вызван не только при изменении значения инпута,
   * но и при потере фокуса инпутом, если значение в инпуте выходит за границы minValue/maxValue и требует корректировки.
   * 2) fullStr - строка вместе с префиксом/суффиксом/разделителями;
   * 3) shortStr - строка только с числом;
   * Примечание: в качестве value компонента необходимо использовать fullStr (строку вместе с префиксом/суффиксом/разделителями).
   */
  //   onChange?: (
  //     event: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>,
  //     fullStr?: string,
  //     shortStr?: string,
  //   ) => void;
}

const stopEvent = (e: React.MouseEvent) => e.preventDefault();

export const InputNumberWrapper: React.FC<NumberInputProps> = ({
  className,
  style,
  containerRef,
  dimension,
  disabled,
  readOnly,
  disableCopying,
  status,
  icons,
  type,
  displayClearIcon,
  displayStatusIcon,
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
  onChange,
  onBlur,
  ...props
}) => {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
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
    const newValueStr = fitToCurrency2(String(newValue), precision, decimal, thousand, true);
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
    const newValueStr = fitToCurrency2(String(newValue), precision, decimal, thousand, true);
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

  if (type === 'password') {
    const Icon = isPasswordVisible ? EyeIcon : EyeCloseIcon;
    iconArray.push(
      <Icon
        key="eye-icon"
        aria-hidden
        onClick={() => {
          setPasswordVisible(!isPasswordVisible);
        }}
      />,
    );
  }

  if (displayStatusIcon) {
    iconArray.push(<StatusIcon key="status-icon" status={status} aria-hidden />);
  }

  if (displayClearIcon) {
    iconArray.unshift(
      <ClearIcon
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

  if (displayPlusMinusIcons) {
    iconArray.push(<Minus key="minus-icon" onClick={handleMinus} disabled={disabled || minusDisabled} />);
    iconArray.push(<Plus key="plus-icon" onClick={handlePlus} disabled={disabled || plusDisabled} />);
  }

  const iconCount = iconArray.length;

  /**
   * При потере фокуса:
   * если precision > 0, количество цифр после разделителя decimal должно быть равно precision.
   * Если условие выше несоблюдено, должна быть произведена корректировка значения. Например: '70.' => '70.00' при precision={2}
   */
  // убедиться, что в onChange event.target.value лежит обновленное значение
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const newValue = fitToCurrency2(event.currentTarget.value, precision, decimal, thousand, true);
    if (inputRef.current) {
      // если введеное значение меньше minValue
      if (typeof minValue === 'number' && Number(clearValue(newValue, precision, decimal)) < minValue) {
        const fullValue = fitToCurrency2(String(minValue), precision, decimal, thousand, true);
        const shortValue = clearValue(fullValue, precision, decimal);

        onChange?.(event);
        inputRef.current.value = fullValue;
      }
      // если введеное значение меньше maxValue
      else if (typeof maxValue === 'number' && Number(clearValue(newValue, precision, decimal)) > maxValue) {
        const fullValue = fitToCurrency2(String(maxValue), precision, decimal, thousand, true);
        const shortValue = clearValue(fullValue, precision, decimal);

        onChange?.(event);
        inputRef.current.value = fullValue;
      }
      // если значение в инпуте неполностью отформатировано, например, не все разряды после запятой проставлены
      else if (newValue !== event.currentTarget.value) {
        const fullValue = newValue;
        const shortValue = clearValue(fullValue, precision, decimal);

        onChange?.(event);
        inputRef.current.value = fullValue;
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

  return (
    <Wrapper
      className={className}
      style={style}
      disabled={disabled}
      dimension={dimension}
      ref={containerRef}
      data-read-only={readOnly ? true : undefined}
      data-status={status}
      {...(disableCopying && {
        onMouseDown: stopEvent,
      })}
    >
      {prefix && <Prefix>{prefix}&nbsp;</Prefix>}
      <InputWrapper>
        <AutoSizeInput
          ref={inputRef}
          onChange={handleChange}
          placeholder={placeholder}
          onBlur={handleBlur}
          {...props}
        />
        <BorderedDiv />
        {suffix && <Prefix>&nbsp;{suffix}</Prefix>}
      </InputWrapper>
      {iconCount > 0 && (
        <IconPanel disabled={disabled} dimension={dimension}>
          {iconArray}
        </IconPanel>
      )}
    </Wrapper>
  );
};
