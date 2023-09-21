import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { SliderRangeField } from '@admiral-ds/react-ui';
import type { SliderRangeFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const SliderRangeFieldPlaygroundTemplate = ({
  label = 'Введите диапазон',
  themeBorderKind,
  ...props
}: SliderRangeFieldProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <SliderRangeField data-container-id="sliderRangeFieldIdOne" {...props} label={label} />
    </ThemeProvider>
  );
};
