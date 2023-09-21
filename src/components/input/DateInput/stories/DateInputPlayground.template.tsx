import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { DateInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, DateInputProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const DateInputPlaygroundTemplate = ({
  themeBorderKind,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType }) => {
  const [localValue, setValue] = useState<string>(String(props.value) ?? '');
  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <DateInput
        {...props}
        value={localValue}
        onChange={handleChange}
        placeholder={'Some placeholder'}
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};
