import * as React from 'react';
import { NumberInput } from '@admiral-ds/react-ui';
import type { NumberInputProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const NumberInputCustomisedTemplate = (args: NumberInputProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <NumberInput
        {...args}
        onChange={(event) => {
          console.log(event.target.value);
        }}
        suffix="$"
        thousand=","
        precision={1}
        placeholder="0.0 $"
      />
    </ThemeProvider>
  );
};
