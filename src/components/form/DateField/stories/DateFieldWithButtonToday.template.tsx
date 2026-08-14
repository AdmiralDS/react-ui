import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ActionsPanel, DateField, T, TextButton } from '@admiral-ds/react-ui';
import type { BorderRadiusType, DateFieldProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const DateFieldWithButtonTodayTemplate = ({
  label = 'Label',
  placeholder,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = useState<string>(props.value ? String(props.value) : '01.01.2025');

  const [viewDateLocal, setViewDateLocal] = useState<Date | null>(
    props.value ? new Date(String(props.value)) : new Date(2025, 0, 1),
  );

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
      <>
        <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
          В нижнюю панель календаря можно добавлять пользовательские кнопки. В данном примере кнопка «Сегодня»
          показывает в календаре текущий месяц и не выбирает дату.
        </T>
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
      </>
    </ThemeProvider>
  );
};
