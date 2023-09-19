import * as React from 'react';
import type { ChangeEvent } from 'react';
import { EditMode } from '@admiral-ds/react-ui';
import type { EditModeProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import { css, ThemeProvider } from 'styled-components';

const cssMixin = css`
  width: 300px;
`;

export const EditModeCssMixinTemplate = ({
  value = 'Привет!',
  themeBorderKind,
  ...props
}: EditModeProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
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
      <EditMode {...props} value={localValue} onChange={handleChange} containerCssMixin={cssMixin} />
    </ThemeProvider>
  );
};
