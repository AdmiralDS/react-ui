import * as React from 'react';
import { NumberInput } from '@admiral-ds/react-ui';
import type { NumberInputProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const NumberInputMinMaxTemplate = (args: NumberInputProps) => {
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
        minValue={0}
        maxValue={2000}
      />
    </ThemeProvider>
  );
};
