import { useState } from 'react';
import { NumberInput, T, clearValue } from '@admiral-ds/react-ui';
import type { BorderRadiusType, NumberInputProps } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

function convertStrToNum(str: string, precision: number, decimal: string) {
  return Number(clearValue(str, precision, decimal).replace(decimal, '.'));
}

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
      />
    </ThemeProvider>
  );
};
