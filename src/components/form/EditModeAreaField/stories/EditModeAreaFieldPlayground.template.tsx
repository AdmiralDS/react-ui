import * as React from 'react';

import { EditModeAreaField } from '@admiral-ds/react-ui';
import type { EditModeAreaFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const EditModeAreaFieldPlaygroundTemplate = ({
  value = 'Admin',
  themeBorderKind,
  ...props
}: EditModeAreaFieldProps & { themeBorderKind?: BorderRadiusType }) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <EditModeAreaField
        data-container-id="editModeFieldIdOne"
        {...props}
        value={localValue}
        onChange={handleChange}
        label="Label"
      />
    </ThemeProvider>
  );
};
