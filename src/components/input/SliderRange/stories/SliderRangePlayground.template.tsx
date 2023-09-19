import * as React from 'react';
import { SliderRange } from '@admiral-ds/react-ui';
import type { SliderRangeProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const SliderRangePlaygroundTemplate = ({
  defaultValue,
  onChange,
  themeBorderKind,
  ...props
}: SliderRangeProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const handleChange = (value: any) => console.log(value);

  return (
    <ThemeProvider theme={swapBorder}>
      <SliderRange defaultValue={defaultValue || ['2', '6']} onChange={onChange || handleChange} {...props} />
    </ThemeProvider>
  );
};
