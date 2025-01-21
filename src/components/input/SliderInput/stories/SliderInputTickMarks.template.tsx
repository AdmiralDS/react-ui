import * as React from 'react';
import { SliderInput } from '@admiral-ds/react-ui';
import type { SliderInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const SliderInputTickMarksTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SliderInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <SliderInput
        {...props}
        defaultValue="15"
        // eslint-disable-next-line no-console
        onChange={(full, short, event) => console.log({ full, short, event })}
        tickMarks={[5, 10, 15]}
      />
    </ThemeProvider>
  );
};
