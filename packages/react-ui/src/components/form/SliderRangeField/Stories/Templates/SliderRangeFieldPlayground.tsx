import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { SliderRangeField } from '@admiral-ds/react-ui';
import type { SliderRangeFieldProps, Theme } from '@admiral-ds/react-ui';

export const SliderRangeFieldPlaygroundTemplate = ({ label = 'Введите диапазон', ...props }: SliderRangeFieldProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <SliderRangeField data-container-id="sliderRangeFieldIdOne" {...props} label={label} />
    </ThemeProvider>
  );
};
