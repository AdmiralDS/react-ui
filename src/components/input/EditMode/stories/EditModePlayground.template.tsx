import * as React from 'react';
import type { ChangeEvent } from 'react';
import { EditMode } from '@admiral-ds/react-ui';
import type { EditModeProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const EditModePlaygroundTemplate = ({
  value = 'Привет!',
  placeholder = 'Placeholder',
  ...props
}: EditModeProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <EditMode {...props} value={localValue} onChange={handleChange} placeholder={placeholder} />
    </ThemeProvider>
  );
};
