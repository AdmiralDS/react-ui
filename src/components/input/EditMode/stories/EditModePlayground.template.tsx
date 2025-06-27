import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { EditMode, useId } from '@admiral-ds/react-ui';
import type { EditModeProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const EditModePlaygroundTemplate = ({
  value = 'Привет!',
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: EditModeProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  const confirmButtonProps = { 'data-testid': 'confirmButton' };
  const cancelButtonProps = { 'data-testid': 'cancelButton' };
  const editButtonProps = { 'data-testid': useId() };
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <EditMode
        {...props}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        confirmButtonPropsConfig={() => confirmButtonProps}
        cancelButtonPropsConfig={() => cancelButtonProps}
        editButtonPropsConfig={() => editButtonProps}
      />
    </ThemeProvider>
  );
};
