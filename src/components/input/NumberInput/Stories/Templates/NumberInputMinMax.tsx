import * as React from 'react';
import { NumberInput, clearValue } from '@admiral-ds/react-ui';
import type { NumberInputProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const NumberInputMinMaxTemplate = ({ precision = 2, decimal, ...args }: NumberInputProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [status, setStatus] = React.useState<NumberInputProps['status'] | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = Number(clearValue(event.target.value, precision, decimal));
    if (numValue < -1000 || numValue > 2000) {
      setStatus('error');
    } else {
      setStatus(undefined);
    }
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <NumberInput
        {...args}
        onChange={handleChange}
        minValue={-1000}
        maxValue={2000}
        status={status}
        precision={precision}
        decimal={decimal}
      />
    </ThemeProvider>
  );
};
