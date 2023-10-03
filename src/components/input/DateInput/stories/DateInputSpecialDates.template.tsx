import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { css, ThemeProvider } from 'styled-components';

import { DateInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, DateInputProps, Theme } from '@admiral-ds/react-ui';

const weekendMixin = css<{ disabled?: boolean }>`
  color: ${(p) => (p.disabled ? p.theme.color['Error/Error 30'] : p.theme.color['Error/Error 60 Main'])};
`;

export const DateInputSpecialDatesTemplate = ({
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

  const highlightWeekend = (date: Date) => {
    const dayNumber = date.getDay();
    if (dayNumber === 0 || dayNumber === 6) {
      return weekendMixin;
    }
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <DateInput
        {...props}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholderValue}
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
        highlightSpecialDay={highlightWeekend}
      />
    </ThemeProvider>
  );
};
