import * as React from 'react';
import { NumberInput, T, clearValue } from '@admiral-ds/react-ui';
import type { NumberInputProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const NumberInputMinMaxTemplate = ({
  minValue = -1000,
  maxValue = 2000,
  precision = 2,
  decimal,
  ...args
}: NumberInputProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [status, setStatus] = React.useState<NumberInputProps['status'] | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = Number(clearValue(event.target.value, precision, decimal));
    if (event.target.value && (numValue < minValue || numValue > maxValue)) {
      setStatus('error');
    } else {
      setStatus(undefined);
    }
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <T font="Body/Body 2 Long" as="div" style={{ marginBottom: '24px' }}>
        В данном примере, если введенное значение выходит за границы диапазона minValue-maxValue, компонент переходит в
        состояние ошибки.
      </T>
      <NumberInput
        {...args}
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
