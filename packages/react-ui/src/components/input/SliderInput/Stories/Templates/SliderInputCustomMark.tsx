import * as React from 'react';
import { SliderInput } from '@admiral-ds/react-ui';
import type { SliderInputProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const SliderInputCustomMarkTemplate = (args: SliderInputProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <SliderInput
        {...args}
        defaultValue="15 000"
        onChange={(full, short, event) => console.log({ full, short, event })}
        renderTickMark={(mark: string) => mark + ' ₽'}
        tickMarks={[5000, 10000, 15000]}
        maxValue={20000}
      />
    </ThemeProvider>
  );
};
