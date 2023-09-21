import * as React from 'react';

import { EditModeField } from '@admiral-ds/react-ui';
import type { EditModeFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const EditModeFieldPlaygroundTemplate = ({
  value = 'Admin',
  themeBorderKind,
  ...props
}: EditModeFieldProps & { themeBorderKind?: BorderRadiusType }) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
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
