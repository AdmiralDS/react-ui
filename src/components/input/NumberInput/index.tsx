import type { ChangeEvent, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import { useState, useRef, useEffect, forwardRef, Children, useMemo } from 'react';
import styled, { css, useTheme, type DataAttributes } from 'styled-components';

import { LIGHT_THEME } from '#src/components/themes';
import type { TextInputProps } from '#src/components/input/TextInput';
import type { ComponentDimension, ExtraProps } from '#src/components/input/types';
import { typography } from '#src/components/Typography';
import type { CustomInputHandler } from '#src/components/common/dom/changeInputData';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ReactComponent as MinusOutline } from '@admiral-ds/icons/build/service/MinusOutline.svg';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import { InputIconButton } from '#src/components/InputIconButton';
import { keyboardKey } from '../../common/keyboardKey';

import { HeightLimitedContainer } from '../Container';

import { AutoSizeInput, BorderedDiv, horizontalPaddingValue, iconSizeValue } from './AutoSizeInput';
import { clearValue, fitToCurrency, validateThousand, getDecimalSeparator, getThousandSeparator } from './utils';
import type { NumberInputHandlerCreatorParams } from './createNumberInputHandler';
import { createNumberInputHandler } from './createNumberInputHandler';

const extraPadding = css<ExtraProps>`
  padding-right: ${(props) =>
    horizontalPaddingValue(props) + (iconSizeValue(props) + 8) * (props.$iconsAfterCount ?? 0)}px;
`;
const preventDefault = (e: MouseEvent) => e.preventDefault();

const PlusMinusIcon = styled(InputIconButton)<{ disabled?: boolean }>`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${({ disabled, theme }) =>
    disabled
      ? css`
          cursor: not-allowed;

          & *[fill^='#'],
          &:hover *[fill^='#'] {
            fill: var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']});
          }
        `
      : ''}
`;

const IconPanel = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  margin-right: ${horizontalPaddingValue}px;

  & svg {
    display: block;
    width: ${iconSizeValue}px;
  }

  & > * {
    margin-left: 8px;
  }
`;

const Content = styled.div<ExtraProps>`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  padding: 0 ${horizontalPaddingValue}px;
  ${extraPadding};
  border-radius: inherit;
`;

const Wrapper = styled(HeightLimitedContainer)<{
  disabled?: boolean;
  $dimension?: ComponentDimension;
  readOnly?: boolean;
  $skeleton?: boolean;
  $status?: TextInputProps['status'];
}>`
  background-color: ${({ disabled, readOnly, theme }) => {
    if (disabled || readOnly) {
      return `var(--admiral-color-Neutral_Neutral10, ${theme.color['Neutral/Neutral 10']})`;
    }
    return `var(--admiral-color-Neutral_Neutral00, ${theme.color['Neutral/Neutral 00']})`;
  }};
  color: ${({ disabled, theme }) =>
    disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`};
  ${({ $dimension }) => ($dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  overflow: hidden;
  ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : '')}

  &:hover:not(:focus-within) ${BorderedDiv} {
    border: 1px solid
      ${({ disabled, readOnly, $status, theme }) => {
        if (disabled || readOnly) return 'transparent';
        if ($status === 'error') {
          return `var(--admiral-color-Error_Error70, ${theme.color['Error/Error 70']})`;
        }
        if ($status === 'success') {
          return `var(--admiral-color-Success_Success60, ${theme.color['Success/Success 60']})`;
        }
        return `var(--admiral-color-Neutral_Neutral60, ${theme.color['Neutral/Neutral 60']})`;
      }};
  }
  &:hover:not(:focus-within) input:user-invalid + ${BorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error70, ${(p) => p.theme.color['Error/Error 70']});
  }
`;

export interface NumberInputProps extends Omit<TextInputProps, 'iconsBefore' | 'isLoading'> {
  /** точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа */
  precision?: number;
  /** префикс (строка, которая выводится перед числовым значением) */
  prefix?: string;
  /** суффикс (строка, которая выводится после числового значения) */
  suffix?: string;
  /** разделитель между тысячами. Если значение не задано,
   * то оно определяется согласно локали, в русской локали thousand - это пробел  */
  thousand?: string;
  /** разделитель между целым и десятичным. Если значение не задано,
   * то оно определяется согласно локали, в русской локали decimal - это запятая */
  decimal?: string;
  /**
   * Данный флаг управляет дозаполнением десятичной части числа нулями при потере инпутом фокуса, либо при нажатии кнопок +/-
   * По умолчанию fillEmptyDecimals установлен в true
   *
   * Подробнее: если строка должна быть отформатирована как десятичное число (т.е. precision > 0 и в строке есть decimal)
   * и fillEmptyDecimals установлен в true, то произойдет проверка того, сколько знаков в числе после разделителя decimal
   * и если таких знаков меньше, чем precision, недостающее количество будет заполнено нулями.
   * Например, при precision={3} строка '3.9' превратится в '3.900'
   */
  fillEmptyDecimals?: boolean;
  /** Шаг инпута. Если шаг - это дробное число, то количество знаков в десятичной части step должно быть равно precision */
  step?: number;
  /** Минимальное значение. При minValue >= 0, ввод знака минус блокируется */
  minValue?: number;
  /** Максимальное значение */
  maxValue?: number;
  /** Отображать иконки плюса и минуса */
  displayPlusMinusIcons?: boolean;
  /** Выравнивание контента. По умолчанию выравнивание происходит по левому краю */
  align?: 'left' | 'right';
  /** Функция высшего порядка для получения функции handleInput */
  createInputHandler?: (params: NumberInputHandlerCreatorParams) => CustomInputHandler;
  /** Скрыть пробел после префикса */
  hideSpaceAfterPrefix?: boolean;
  /** Скрыть пробел перед суффиксом */
  hideSpaceBeforeSuffix?: boolean;

  /** Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  containerPropsConfig?: (
    props: React.ComponentProps<typeof Wrapper>,
  ) => Partial<React.ComponentProps<typeof Wrapper>> & DataAttributes;

  /** Конфиг функция пропсов для кнопки очистки поля. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  clearInputIconButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton>> & DataAttributes;

  /** Конфиг функция пропсов для кнопки показать/скрыть значение при type="password". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  plusInputIconButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton>> & DataAttributes;

  /** Конфиг функция пропсов для кнопки показать/скрыть значение при type="password". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  minusInputIconButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton>> & DataAttributes;
}

const nothing = () => {};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      style,
      containerRef,
      status,
      icons,
      iconsAfter,
      displayClearIcon = false,
      displayPlusMinusIcons = true,
      prefix,
      suffix,
      precision = 2,
      thousand: userThousand,
      decimal: userDecimal,
      fillEmptyDecimals = true,
      step = 1,
      minValue = Number.NEGATIVE_INFINITY,
      maxValue = Number.POSITIVE_INFINITY,
      placeholder,
      align = 'left',
      skeleton = false,
      onChange,
      onBlur,
      createInputHandler = createNumberInputHandler,
      handleInput,
      disableCopying,
      containerPropsConfig = nothing,
      clearInputIconButtonPropsConfig = nothing,
      plusInputIconButtonPropsConfig = nothing,
      minusInputIconButtonPropsConfig = nothing,
      ...props
    },
    ref,
  ) => {
    const [plusDisabled, setPlusDisabled] = useState(false);
    const [minusDisabled, setMinusDisabled] = useState(false);
    const [innerValueState, setInnerValueState] = useState(props.defaultValue);
    const innerValue = props.value ?? innerValueState;

    const inputRef = useRef<HTMLInputElement>(null);

    const theme = useTheme() || LIGHT_THEME;
    // thousand, decimal - не более одного символа
    const thousand =
      typeof userThousand !== 'undefined' && validateThousand(userThousand)
        ? userThousand.slice(0, 1)
        : getThousandSeparator(theme.currentLocale);
    const decimal = userDecimal?.slice(0, 1) ?? getDecimalSeparator(theme.currentLocale);

    useEffect(() => {
      if (innerValue || innerValue === 0) {
        const num = Number(clearValue(String(innerValue), precision, decimal).replace(decimal, '.'));
        setMinusDisabled(num <= minValue);
        setPlusDisabled(num >= maxValue);
      } else {
        setMinusDisabled(false);
        setPlusDisabled(false);
      }
    }, [innerValue]);

    const handleMinus = () => {
      const current = inputRef.current?.value || '0';
      const num = Number(clearValue(current, precision, decimal).replace(decimal, '.')) - step;
      const newValue = Math.min(Math.max(num, minValue), maxValue);
      const newValueStr = fitToCurrency(newValue.toFixed(precision), precision, decimal, thousand, fillEmptyDecimals);
      if (inputRef.current) {
        changeInputData(inputRef.current, { value: newValueStr });
      }
    };

    const handlePlus = () => {
      const current = inputRef.current?.value || '0';
      const num = Number(clearValue(current, precision, decimal).replace(decimal, '.')) + step;
      const newValue = Math.min(Math.max(num, minValue), maxValue);
      const newValueStr = fitToCurrency(newValue.toFixed(precision), precision, decimal, thousand, fillEmptyDecimals);
      if (inputRef.current) {
        changeInputData(inputRef.current, { value: newValueStr });
      }
    };

    const iconArray = Children.toArray(iconsAfter || icons);

    if (!props.readOnly && displayClearIcon && !!innerValue) {
      const clearInputIconButtonProps = {
        icon: CloseOutlineSvg,
        onClick: () => {
          if (inputRef.current) {
            changeInputData(inputRef.current, { value: '' });
          }
        },
      };

      iconArray.unshift(
        <InputIconButton
          key="clear-icon"
          aria-hidden
          {...clearInputIconButtonProps}
          {...clearInputIconButtonPropsConfig(clearInputIconButtonProps)}
        />,
      );
    }

    if (!props.readOnly && displayPlusMinusIcons) {
      const minusInputIconButtonProps = {
        icon: MinusOutline,
        onClick: props.disabled || minusDisabled ? undefined : handleMinus,
        disabled: props.disabled || minusDisabled,
      };

      const plusInputIconButtonProps = {
        icon: PlusOutline,
        onClick: props.disabled || plusDisabled ? undefined : handlePlus,
        disabled: props.disabled || plusDisabled,
      };

      iconArray.push(
        <PlusMinusIcon
          key="minus-icon"
          aria-hidden
          {...minusInputIconButtonProps}
          {...minusInputIconButtonPropsConfig(minusInputIconButtonProps)}
        />,
        <PlusMinusIcon
          key="plus-icon"
          aria-hidden
          {...plusInputIconButtonProps}
          {...plusInputIconButtonPropsConfig(plusInputIconButtonProps)}
        />,
      );
    }

    const iconCount = iconArray.length;

    /**
     * При потере фокуса:
     * если precision > 0, количество цифр после разделителя decimal должно быть равно precision.
     * Если условие выше несоблюдено, должна быть произведена корректировка значения. Например: '70,' => '70,00' при precision={2}
     */
    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      const newValue = fitToCurrency(event.target.value, precision, decimal, thousand, fillEmptyDecimals);
      if (inputRef.current && newValue !== event.target.value) {
        changeInputData(inputRef.current, { value: newValue });
      }
      onBlur?.(event);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInnerValueState(event.currentTarget.value);
      onChange?.(event);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const code = keyboardKey.getCode(e);
      if ((e.ctrlKey || e.metaKey) && (code === keyboardKey.z || code === keyboardKey.Z)) {
        e.preventDefault();
        return;
      }
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

    const handler = useMemo(
      () => (handleInput ? handleInput : createInputHandler({ precision, decimal, thousand, minValue, maxValue })),
      [precision, decimal, thousand, minValue, maxValue, handleInput],
    );

    const containerProps = {
      ref: containerRef,
      className,
      style,
      disabled: props.disabled,
      $dimension: props.dimension,
      readOnly: props.readOnly,
      'data-read-only': props.readOnly ? true : undefined,
      'data-disable-copying': disableCopying ? true : undefined,
      onMouseDown: disableCopying ? preventDefault : undefined,
      $skeleton: skeleton,
      $status: status,
    };

    return (
      <Wrapper {...containerProps} {...containerPropsConfig(containerProps)}>
        <Content $dimension={props.dimension} $iconsAfterCount={iconCount} onKeyDown={handleKeyDown}>
          <AutoSizeInput
            ref={refSetter(ref, inputRef)}
            onChange={handleChange}
            placeholder={placeholder}
            onBlur={handleBlur}
            suffix={suffix}
            prefix={prefix}
            status={status}
            iconCount={iconCount}
            align={align}
            innerValue={innerValue}
            handleInput={handler}
            {...props}
          />
        </Content>
        {iconCount > 0 && (
          <IconPanel disabled={props.disabled} $dimension={props.dimension}>
            {iconArray}
          </IconPanel>
        )}
      </Wrapper>
    );
  },
);

NumberInput.displayName = 'NumberInput';

export { fitToCurrency, clearValue } from './utils';
