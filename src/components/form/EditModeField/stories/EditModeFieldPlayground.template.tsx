import * as React from 'react';

import { EditModeField } from '@admiral-ds/react-ui';
import type { EditModeFieldProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const EditModeFieldPlaygroundTemplate = ({
  value = 'Admin',
  ...props
}: EditModeFieldProps & { themeBorderKind?: BorderRadiusType }) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <EditModeField
        data-container-id="editModeFieldIdOne"
        {...props}
        value={localValue}
        onChange={handleChange}
        label="Label"
      />
    </ThemeProvider>
  );
};
