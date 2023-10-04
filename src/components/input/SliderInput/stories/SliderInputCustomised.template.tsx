import * as React from 'react';
import { SliderInput } from '@admiral-ds/react-ui';
import type { SliderInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const SliderInputCustomisedTemplate = ({
  themeBorderKind,
  ...props
}: SliderInputProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
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
