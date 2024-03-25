import * as React from 'react';
import type { ChangeEvent } from 'react';
import { EditModeArea } from '@admiral-ds/react-ui';
import type { EditModeAreaProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const EditModeAreaDisabledTemplate = ({
  value = 'Привет!',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: EditModeAreaProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = React.useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <EditModeArea {...props} value={localValue} onChange={handleChange} disabled />
    </ThemeProvider>
  );
};
