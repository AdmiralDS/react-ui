import * as React from 'react';
import type { ChangeEvent } from 'react';
import { EditModeArea } from '@admiral-ds/react-ui';
import type { EditModeAreaProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { css, ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const cssMixin = css`
  width: 300px;
`;

export const EditModeAreaCssMixinTemplate = ({
  value = 'Привет!',
  themeBorderKind,
  ...props
}: EditModeAreaProps & { themeBorderKind?: BorderRadiusType }) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <EditModeArea {...props} value={localValue} onChange={handleChange} containerCssMixin={cssMixin} />
    </ThemeProvider>
  );
};
