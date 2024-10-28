import * as React from 'react';
import { SliderInput } from '@admiral-ds/react-ui';
import type { SliderInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const SliderInputCustomMarkTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SliderInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <SliderInput
        {...props}
        defaultValue="15 000"
        // eslint-disable-next-line no-console
        onChange={(full, short, event) => console.log({ full, short, event })}
        renderTickMark={(mark: string) => mark + ' ₽'}
        tickMarks={[5000, 10000, 15000]}
        maxValue={20000}
      />
    </ThemeProvider>
  );
};
