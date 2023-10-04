import * as React from 'react';
import type { ChangeEvent } from 'react';
import { EditMode } from '@admiral-ds/react-ui';
import type { EditModeProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { css, ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const cssMixin = css`
  width: 300px;
`;

export const EditModeCssMixinTemplate = ({
  value = 'Привет!',
  themeBorderKind,
  ...props
}: EditModeProps & { themeBorderKind?: BorderRadiusType }) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <EditMode {...props} value={localValue} onChange={handleChange} containerCssMixin={cssMixin} />
    </ThemeProvider>
  );
};
