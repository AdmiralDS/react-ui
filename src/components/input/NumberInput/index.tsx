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

import { Container } from '../Container';
import { StatusIcon } from '../StatusIcon';

import { AutoSizeInput } from './AutoSizeInput';
import { clearValue, fitToCurrency, validateThousand } from './utils';

export { fitToCurrency, clearValue } from './utils';

const extraPadding = css<ExtraProps>`
  padding-right: ${(props) => horizontalPaddingValue(props) + (iconSizeValue(props) + 8) * (props.iconCount ?? 0)}px;
`;

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

  [data-read-only] & {
    cursor: default;
    pointer-events: none;
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
  ${({ disabled }) => disabled && IconDisabled}

  & > svg {
    display: block;
    width: ${iconSizeValue}px;
  }

  & > * {
    margin-left: 8px;
  }
`;

const Wrapper = styled(Container)<{
  disabled?: boolean;
  dimension?: ComponentDimension;
  readOnly?: boolean;
}>`
  background-color: ${(props) => {
    if (props.disabled || props.readOnly) return props.theme.color['Neutral/Neutral 10'];
    return props.theme.color['Neutral/Neutral 00'];
  }};
  color: ${(props) =>
    props.disabled ? props.theme.color['Neutral/Neutral 30'] : props.theme.color['Neutral/Neutral 90']};
  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  overflow: hidden;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  min-width: 0;
`;

const Prefix = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const InputWrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-height: 100%;
  border-radius: inherit;
`;

const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  padding: 0 ${horizontalPaddingValue}px;
  ${extraPadding}
  border-radius: inherit;

  [data-align='right'] & {
    justify-content: flex-end;
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
  /** Минимальное значение слайдера */
  minValue?: number;
  /** Максимальное значение слайдера */
  maxValue?: number;
  /** Отображать иконки плюса минуса */
  displayPlusMinusIcons?: boolean;
  /** Выравнивание контента. По умолчанию выравнивание происходит по левому краю */
  align?: 'left' | 'right';
}

const preventDefault = (e: React.BaseSyntheticEvent) => e.preventDefault();

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      style,
      containerRef,
      status,
      icons,
      displayClearIcon = false,
      displayStatusIcon = false,
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
      onChange,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [plusDisabled, setPlusDisabled] = React.useState(false);
    const [minusDisabled, setMinusDisabled] = React.useState(false);
    const [showPrefixSuffix, setPrefixSuffix] = React.useState(false);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const prefixRef = React.useRef<any>(null);

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
      iconArray.push(<Minus key="minus-icon" onClick={handleMinus} disabled={props.disabled || minusDisabled} />);
      iconArray.push(<Plus key="plus-icon" onClick={handlePlus} disabled={props.disabled || plusDisabled} />);
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
        inputRef.current.style.maxWidth = `calc(100% - ${prefixRef.current?.scrollWidth || 0}px)`;
      }
      onBlur?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVal = event.currentTarget.value;
      if (inputRef.current) {
        inputRef.current.style.maxWidth = `calc(100% - ${prefixRef.current?.scrollWidth || 0}px)`;
      }

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

    const handleContentClick = (e: any) => {
      if (e.target !== inputRef.current) {
        inputRef.current?.focus();
        inputRef.current?.setSelectionRange(inputRef.current?.value.length || 0, inputRef.current?.value.length || 0);
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
        data-status={status}
        data-align={align}
      >
        <Content
          dimension={props.dimension}
          iconCount={iconCount}
          // Запретит перенос фокуса с инпута при клике по всему, что внутри Content
          onMouseDown={preventDefault}
          onClick={handleContentClick}
        >
          <InputWrapper>
            {prefix && showPrefixSuffix && <Prefix ref={prefixRef}>{prefix}&nbsp;</Prefix>}
            <AutoSizeInput
              ref={refSetter(ref, inputRef)}
              onChange={handleChange}
              placeholder={placeholder}
              onBlur={handleBlur}
              setPrefixSuffix={setPrefixSuffix}
              {...props}
            />
            {suffix && showPrefixSuffix && <Text>&nbsp;{suffix}</Text>}
          </InputWrapper>
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
