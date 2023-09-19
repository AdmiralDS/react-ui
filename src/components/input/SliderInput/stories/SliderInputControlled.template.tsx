import * as React from 'react';
import { SliderInput } from '@admiral-ds/react-ui';
import type { SliderInputProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const SliderInputControlledTemplate = ({
  themeBorderKind,
  ...props
}: SliderInputProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const [slider1, setSlider1] = React.useState(String(args.value ?? ''));

  return (
    <ThemeProvider theme={swapBorder}>
      <SliderInput
        {...props}
        value={slider1}
        onChange={(full, short, event) => {
          console.log({ full, short, event });
          setSlider1(event.target.value);
        }}
      />
    </ThemeProvider>
  );
};
