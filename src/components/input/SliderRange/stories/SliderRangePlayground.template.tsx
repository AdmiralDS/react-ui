import * as React from 'react';
import { SliderRange } from '@admiral-ds/react-ui';
import type { SliderRangeProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const SliderRangePlaygroundTemplate = ({
  defaultValue,
  onChange,
  themeBorderKind,
  ...props
}: SliderRangeProps & { themeBorderKind?: BorderRadiusType }) => {
  const handleChange = (value: any) => console.log(value);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <SliderRange defaultValue={defaultValue || ['2', '6']} onChange={onChange || handleChange} {...props} />
    </ThemeProvider>
  );
};
