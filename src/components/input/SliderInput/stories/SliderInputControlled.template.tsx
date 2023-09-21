import * as React from 'react';
import { SliderInput } from '@admiral-ds/react-ui';
import type { SliderInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const SliderInputControlledTemplate = ({
  themeBorderKind,
  ...props
}: SliderInputProps & { themeBorderKind?: BorderRadiusType }) => {
  const [slider1, setSlider1] = React.useState(String(props.value ?? ''));

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
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
