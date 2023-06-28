import * as React from 'react';
import { SliderInput } from '@admiral-ds/react-ui';
import type { SliderInputProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const SliderInputCustomisedTemplate = (args: SliderInputProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <SliderInput
        {...args}
        defaultValue="5.000"
        onChange={(full, short, event) => console.log({ full, short, event })}
        suffix="$"
        thousand=","
        precision={3}
        placeholder="0.000 $"
      />
    </ThemeProvider>
  );
};
