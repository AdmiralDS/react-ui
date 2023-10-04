import * as React from 'react';
import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { DateInput } from '@admiral-ds/react-ui';
import type { DateInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const DateInputPickMonthTemplate = ({
  placeholder,
  themeBorderKind,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType }) => {
  const [placeholderValue, setPlaceholderValue] = useState<string>(placeholder || 'Some placeholder');
  const [localValue, setValue] = useState<string>(props.value ? String(props.value) : '');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  React.useEffect(() => {
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

  const handleVisibilityChange = (newIsVisible: boolean) => {
    setIsVisible(newIsVisible);
  };

  const handleMonthClick = (date: any) => {
    console.log(`click on month ${date.toLocaleDateString()}`);
    setValue(date.toLocaleDateString());
    handleVisibilityChange(false);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <DateInput
        {...props}
        isVisible={isVisible}
        onVisibilityChange={handleVisibilityChange}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholderValue}
        style={{ maxWidth: 300 }}
        onMonthSelect={handleMonthClick}
        currentActiveViewImportant
        currentActiveView="MONTH"
      />
    </ThemeProvider>
  );
};
