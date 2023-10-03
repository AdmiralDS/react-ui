import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { DateInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, DateInputProps, Theme } from '@admiral-ds/react-ui';

export const DateInputPlaygroundTemplate = ({
  placeholder,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType }) => {
  const [placeholderValue, setPlaceholderValue] = useState<string>(placeholder || 'Some placeholder');
  const [localValue, setValue] = useState<string>(props.value ? String(props.value) : '');

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

  useEffect(() => {
    if (placeholder) {
      setPlaceholderValue(placeholder);
    }
  }, [placeholder]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <DateInput
        {...props}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholderValue}
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};
