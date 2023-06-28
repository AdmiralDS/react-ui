import * as React from 'react';
import { SliderInput } from '@admiral-ds/react-ui';
import type { SliderInputProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const SliderInputControlledTemplate = (args: SliderInputProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const [slider1, setSlider1] = React.useState(String(args.value) ?? '');

  return (
    <ThemeProvider theme={swapBorder}>
      <SliderInput
        {...args}
        value={slider1}
        onChange={(full: string, short: string, event: any) => {
          console.log({ full, short, event });
          setSlider1(event.target.value);
        }}
      />
    </ThemeProvider>
  );
};
