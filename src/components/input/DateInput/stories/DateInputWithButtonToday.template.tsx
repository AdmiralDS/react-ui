import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { ActionsPanel, DateInput, T, TextButton } from '@admiral-ds/react-ui';
import type { BorderRadiusType, DateInputProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const DateInputWithButtonTodayTemplate = ({
  placeholder,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [placeholderValue, setPlaceholderValue] = useState<string>(placeholder || 'Some placeholder');
  const [localValue, setValue] = useState<string>(props.value ? String(props.value) : '01.01.2025');

  const [viewDateLocal, setViewDateLocal] = useState<Date | null>(
    props.value ? new Date(String(props.value)) : new Date(2025, 0, 1),
  );
  const handleViewDateLocalChange = (newDate: Date) => {
    setViewDateLocal(newDate);
  };

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);

  const renderPanelToday = () => {
    const handleTodayButtonMouseDown: React.MouseEventHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const today = new Date();
      handleViewDateLocalChange(today);
    };
    return (
      <ActionsPanel>
        <TextButton dimension="s" text="Сегодня" onMouseDown={handleTodayButtonMouseDown} />
      </ActionsPanel>
    );
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
      <>
        <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
          В нижнюю панель календаря можно добавлять пользовательские кнопки. В данном примере кнопка «Сегодня»
          показывает в календаре текущий месяц и не выбирает дату.
        </T>
        <DateInput
          {...props}
          viewDate={viewDateLocal}
          onViewDateChange={handleViewDateLocalChange}
          value={localValue}
          onChange={handleChange}
          placeholder={placeholderValue}
          style={{ maxWidth: 300 }}
          dropContainerClassName="dropContainerClass"
          renderBottomPanel={renderPanelToday}
        />
      </>
    </ThemeProvider>
  );
};
