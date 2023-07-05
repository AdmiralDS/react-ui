import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { NumberInputField } from '@admiral-ds/react-ui';
import type { NumberInputFieldProps, Theme } from '@admiral-ds/react-ui';

export const NumberInputFieldPlaygroundTemplate = ({
  defaultValue = '2000 ₽',
  label = 'Введите сумму',
  precision = 0,
  ...props
}: NumberInputFieldProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <NumberInputField
        data-container-id="numberInputFieldIdOne"
        {...props}
        minValue={1000}
        maxValue={10000}
        defaultValue={defaultValue}
        label={label}
        precision={precision}
      />
    </ThemeProvider>
  );
};
