import { useState } from 'react';
import { NumberInput, T, clearValue } from '@admiral-ds/react-ui';
import type { BorderRadiusType, NumberInputProps } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

function convertStrToNum(str: string, precision: number, decimal: string) {
  return Number(clearValue(str, precision, decimal).replace(decimal, '.'));
}

const Separator = styled.div`
  height: 8px;
`;

export const NumberInputMinMaxTemplate = ({
  minValue = -1000,
  maxValue = 2000,
  precision = 2,
  decimal = ',',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: NumberInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [status, setStatus] = useState<NumberInputProps['status'] | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = convertStrToNum(event.target.value, precision, decimal);
    if (event.target.value && (numValue < minValue || numValue > maxValue)) {
      setStatus('error');
    } else {
      setStatus(undefined);
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Параметры максимальное (maxValue) и минимальное (minValue) значение применяются для того, чтобы обозначить
        диапазон допустимых чисел для ввода. При достижении лимита, кнопки “+” или “-” принимают состояние Disabled.
        <Separator />
        Если вручную введенное значение больше или меньше указанного диапазона, то автокоррекции значения при выводе
        фокуса из поля не происходит (в предыдущей реализации, от которой библиотека отказалась, значение автоматически
        корректировалось, принимая наиболее близкое значение из допустимого диапазона). Предполагается, что необходимая
        валидация и корректировка значения будут происходить на стороне пользователя.
        <Separator />
        Также, если minValue {'>'}= 0, то ввод знака минус блокируется.
      </T>
      <T font="Body/Body 2 Long" as="div" style={{ marginBottom: '24px' }}>
        В данном примере, если введенное значение выходит за границы диапазона minValue-maxValue, компонент переходит в
        состояние ошибки.
      </T>
      <NumberInput
        {...props}
        onChange={handleChange}
        minValue={minValue}
        maxValue={maxValue}
        status={status}
        precision={precision}
        decimal={decimal}
        placeholder="Введите число"
      />
    </ThemeProvider>
  );
};
