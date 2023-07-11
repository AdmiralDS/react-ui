import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { NumberInputField, clearValue } from '@admiral-ds/react-ui';
import type { NumberInputFieldProps, Theme } from '@admiral-ds/react-ui';

export const NumberInputFieldPlaygroundTemplate = ({
  defaultValue = '2 000',
  label = 'Введите сумму',
  precision = 0,
  ...props
}: NumberInputFieldProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [status, setStatus] = React.useState<NumberInputFieldProps['status'] | undefined>(undefined);
  const [extraText, setExtraText] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = Number(clearValue(event.target.value, precision, props.decimal));
    if (event.currentTarget.value && numValue > 10000) {
      setStatus('error');
      setExtraText('Достигнуто максимальное значение');
    } else {
      setStatus(undefined);
      setExtraText('');
    }
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <NumberInputField
        data-container-id="numberInputFieldIdOne"
        {...props}
        maxValue={10000}
        defaultValue={defaultValue}
        onChange={handleChange}
        label={label}
        precision={precision}
        status={status}
        extraText={extraText}
      />
    </ThemeProvider>
  );
};
