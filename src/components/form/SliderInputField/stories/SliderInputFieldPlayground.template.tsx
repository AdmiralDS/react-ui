import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { SliderInputField } from '@admiral-ds/react-ui';
import type { SliderInputFieldProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

export const SliderInputFieldPlaygroundTemplate = ({
  defaultValue = '2 000',
  label = 'Введите сумму',
  themeBorderKind,
  ...props
}: SliderInputFieldProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <SliderInputField
        data-container-id="sliderInputFieldIdOne"
        {...props}
        minValue={1000}
        maxValue={10000}
        defaultValue={defaultValue}
        label={label}
      />
    </ThemeProvider>
  );
};
