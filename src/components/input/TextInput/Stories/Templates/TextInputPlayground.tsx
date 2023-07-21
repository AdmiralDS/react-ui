import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { TextInput } from '@admiral-ds/react-ui';
import type { TextInputProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

export const TextInputPlaygroundTemplate = ({
  value = 'Привет!',
  placeholder = 'Placeholder',
  ...props
}: TextInputProps & { themeBorderKind?: BorderRadiusType }) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TextInput {...props} value={localValue} placeholder={placeholder} onChange={handleChange} />
    </ThemeProvider>
  );
};
