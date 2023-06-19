import * as React from 'react';
import { SliderRange } from '@admiral-ds/react-ui';
import type { SliderRangeProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const SliderRangePlaygroundTemplate = ({ defaultValue, onChange, ...args }: SliderRangeProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const handleChange = (value: any) => console.log(value);

  return (
    <ThemeProvider theme={swapBorder}>
      <SliderRange defaultValue={defaultValue || ['2', '6']} onChange={onChange || handleChange} {...args} />
    </ThemeProvider>
  );
};
