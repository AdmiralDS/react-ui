import * as React from 'react';
import { SliderInput } from '@admiral-ds/react-ui';
import type { SliderInputProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const SliderInputCustomisedTemplate = ({ themeBorderKind, ...props }: SliderInputProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <SliderInput
        {...props}
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
