import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { SliderInputField } from '@admiral-ds/react-ui';
import type { SliderInputFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const SliderInputFieldPlaygroundTemplate = ({
  defaultValue = '2 000',
  label = 'Введите сумму',
  themeBorderKind,
  ...props
}: SliderInputFieldProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
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
