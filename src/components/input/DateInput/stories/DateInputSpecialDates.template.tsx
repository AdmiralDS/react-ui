import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { css, ThemeProvider } from 'styled-components';

import { DateInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, DateInputProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const weekendMixin = css<{ disabled?: boolean }>`
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Error_Error30, ${p.theme.color['Error/Error 30']})`
      : `var(--admiral-color-Error_Error60Main, ${p.theme.color['Error/Error 60 Main']})`};
`;

export const DateInputSpecialDatesTemplate = ({
  placeholder,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
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

  const highlightWeekend = (date: Date) => {
    const dayNumber = date.getDay();
    if (dayNumber === 0 || dayNumber === 6) {
      return weekendMixin;
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
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
