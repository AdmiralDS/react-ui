import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ActionsPanel, DateField, TextButton } from '@admiral-ds/react-ui';
import type { BorderRadiusType, DateFieldProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const DateFieldWithButtonTodayTemplate = ({
  label = 'Label',
  placeholder,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = useState<string>(props.value ? String(props.value) : '');

  const [viewDateLocal, setViewDateLocal] = useState<Date | null>(localValue !== '' ? new Date(localValue) : null);

  const renderPanelToday = () => {
    const handleTodayButtonMouseDown: React.MouseEventHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const today = new Date();
      setViewDateLocal(today);
    };

    return (
      <ActionsPanel>
        <TextButton dimension="s" text="Сегодня" onMouseDown={handleTodayButtonMouseDown} />
      </ActionsPanel>
    );
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DateField
        {...props}
        data-container-id="dateFieldWithButtonToday"
        viewDate={viewDateLocal}
        onViewDateChange={setViewDateLocal}
        value={localValue}
        onChange={handleChange}
        label={label}
        id="date field with button today"
        placeholder={placeholder}
        dropContainerClassName="dropContainerClass"
        renderBottomPanel={renderPanelToday}
      />
    </ThemeProvider>
  );
};
