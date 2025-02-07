import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { DateInput, PanelWithTodayButton } from '@admiral-ds/react-ui';
import type { BorderRadiusType, DateInputProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const DateInputWithButtonTodayTemplate = ({
  placeholder,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [placeholderValue, setPlaceholderValue] = useState<string>(placeholder || 'Some placeholder');
  const [localValue, setValue] = useState<string>(props.value ? String(props.value) : '');
  //const [localSelected, setLocalSelected] = useState<Date | null>(localValue !== '' ? new Date(localValue) : null);
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const handleCalendarVisibilityChange = (newState: boolean) => {
    setCalendarIsOpen(newState);
  };

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);

  const onTodayButtonMouseDownHandler: React.MouseEventHandler = (e) => {
    const today = new Date();
    const todayStr = today.toLocaleDateString('ru', { timeZone: 'UTC' }).replace(/[^ -~]/g, '');

    setValue(todayStr);
    //setLocalSelected(today);
    handleCalendarVisibilityChange(false);
  };
  const renderPanelToday = () => {
    return <PanelWithTodayButton onTodayButtonMouseDown={onTodayButtonMouseDownHandler} />;
  };

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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DateInput
        {...props}
        isVisible={calendarIsOpen}
        onVisibilityChange={handleCalendarVisibilityChange}
        //selected={localSelected}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholderValue}
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
        renderBottomPanel={renderPanelToday}
      />
    </ThemeProvider>
  );
};
