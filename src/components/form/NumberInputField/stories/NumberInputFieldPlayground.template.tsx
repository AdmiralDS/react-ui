import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { NumberInputField, clearValue } from '@admiral-ds/react-ui';
import type { NumberInputFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

function convertStrToNum(str: string, precision: number, decimal: string) {
  return Number(clearValue(str, precision, decimal).replace(decimal, '.'));
}

export const NumberInputFieldPlaygroundTemplate = ({
  defaultValue = '2 000',
  label = 'Введите сумму',
  precision = 0,
  maxValue = 10000,
  decimal = ',',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: NumberInputFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [status, setStatus] = React.useState<NumberInputFieldProps['status'] | undefined>(undefined);
  const [extraText, setExtraText] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = convertStrToNum(event.target.value, precision, decimal);
    if (event.target.value && numValue > maxValue) {
      setStatus('error');
      setExtraText('Достигнуто максимальное значение');
    } else {
      setStatus(undefined);
      setExtraText('');
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <NumberInputField
        data-container-id="numberInputFieldIdOne"
        {...props}
        maxValue={maxValue}
        defaultValue={defaultValue}
        onChange={handleChange}
        label={label}
        precision={precision}
        decimal={decimal}
        status={status}
        extraText={extraText}
      />
    </ThemeProvider>
  );
};
