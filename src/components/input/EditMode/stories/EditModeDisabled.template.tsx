import * as React from 'react';
import type { ChangeEvent } from 'react';
import { EditMode } from '@admiral-ds/react-ui';
import type { EditModeProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const EditModeDisabledTemplate = ({
  value = 'Привет!',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: EditModeProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <EditMode {...props} value={localValue} onChange={handleChange} disabled />
    </ThemeProvider>
  );
};
