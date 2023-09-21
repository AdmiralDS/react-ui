import * as React from 'react';
import { SliderInput } from '@admiral-ds/react-ui';
import type { SliderInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const SliderInputCustomMarkTemplate = ({
  themeBorderKind,
  ...props
}: SliderInputProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <SliderInput
        {...props}
        defaultValue="15 000"
        onChange={(full, short, event) => console.log({ full, short, event })}
        renderTickMark={(mark: string) => mark + ' ₽'}
        tickMarks={[5000, 10000, 15000]}
        maxValue={20000}
      />
    </ThemeProvider>
  );
};
