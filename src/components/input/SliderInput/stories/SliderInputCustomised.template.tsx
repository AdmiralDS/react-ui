import * as React from 'react';
import { SliderInput } from '@admiral-ds/react-ui';
import type { SliderInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const SliderInputCustomisedTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SliderInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <SliderInput
        {...props}
        defaultValue="5.000"
        // eslint-disable-next-line no-console
        onChange={(full, short, event) => console.log({ full, short, event })}
        suffix="$"
        thousand=","
        decimal="."
        precision={3}
        placeholder="0.000 $"
      />
    </ThemeProvider>
  );
};
