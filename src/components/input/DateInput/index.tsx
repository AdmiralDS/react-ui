import * as React from 'react';
import { useRef, useState } from 'react';
import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { ReactComponent as CalendarOutlineSVG } from '@admiral-ds/icons/build/system/CalendarOutline.svg';
import { TextInput, TextInputProps } from '#src/components/input/TextInput';
import { Calendar, CalendarPropType } from '#src/components/Calendar';
import { refSetter } from '#src/components/common/utils/refSetter';
import { defaultDateInputHandle } from '#src/components/input/DateInput/defaultDateInputHandle';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { isValidDate } from './isValidDate';
import { defaultParser } from './defaultParser';
import { defaultDateRangeInputHandle } from '#src/components/input/DateInput/defaultDateRangeInputHandle';
import { InputIconButton } from '#src/components/InputIconButton';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';

const Input = styled(TextInput)`
  min-width: 150px;
`;

// IE11 fix toLocaleDateString('ru') extra invisible characters by using .replace(/[^ -~]/g,'')
function defaultFormatter(isoValues: string[], joinString = ' - '): string {
  return isoValues
    .map((iso) => new Date(iso))
    .map((date) => (isValidDate(date) ? date.toLocaleDateString('ru').replace(/[^ -~]/g, '') : '__.__.____'))
    .join(joinString);
}

export interface DateInputProps extends TextInputProps, Omit<CalendarPropType, 'onChange'> {
  /** Устанавливает тип ввода даты или интервала даты*/
  type?: 'date' | 'date-range';

  /** Устанавливает начальное состояние видимости календаря */
  defaultIsCalendarOpen?: boolean;

  formatter?: (isoValues: string[], joinString?: string) => string;
  parser?: (stringValue?: string, isDateRangeValue?: boolean) => Date[];

  /** Принудительно выравнивает контейнер календаря относительно компонента, значение по умолчанию 'flex-end' */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Ref для календаря */
  calendarRef?: React.RefObject<HTMLDivElement>;

  /**
   * Компонент для отображения альтернативной иконки
   */
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      type = 'date',
      defaultIsCalendarOpen = false,
      formatter = defaultFormatter,
      parser = defaultParser,
      minDate,
      maxDate,
      validator,
      filterDate,
      alignDropdown = 'flex-end',
      currentActiveView,
      currentActiveViewImportant,
      onMonthSelect,
      onYearSelect,
      onViewEnter,
      onViewLeave,
      onViewMonthSelect,
      onViewYearSelect,
      selected,
      calendarRef,
      icon = CalendarOutlineSVG,
      icons,
      skeleton = false,
      dropContainerCssMixin,
      ...props
    },
    ref,
  ) => {
    const calendarProps = {
      minDate,
      maxDate,
      validator,
      filterDate,
      currentActiveView,
      currentActiveViewImportant,
      onMonthSelect,
      onYearSelect,
      onViewEnter,
      onViewLeave,
      onViewMonthSelect,
      onViewYearSelect,
      selected,
    };
    const isDateRange = type === 'date-range';
    const handleInput = props.handleInput || (isDateRange ? defaultDateRangeInputHandle : defaultDateInputHandle);
    const [calendarValue, setCalendarValue] = useState<Date | (Date | null)[] | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputContainerRef = useRef<HTMLDivElement>(null);
    const [isCalendarOpen, setCalendarOpen] = useState<boolean>(defaultIsCalendarOpen);

    const [startDate, endDate, selectedCalendarValue] = Array.isArray(calendarValue)
      ? calendarValue
      : [undefined, undefined, calendarValue];

    const handleCalendarChange = (maybeDate: Date | (Date | null)[] | null) => {
      setCalendarValue(maybeDate);
      if (inputRef.current) {
        if (!maybeDate) {
          changeInputData(inputRef.current, { value: '' });
          return;
        }

        const values = Array.isArray(maybeDate) ? maybeDate : [maybeDate];
        const toFormatValues = values
          .map((date) => (date ? new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) : date))
          .map((date) => (date ? date.toISOString().substring(0, 10) : ''));
        const value = formatter(toFormatValues);
        changeInputData(inputRef.current, { value });

        if (isDateRange) {
          if (!values.includes(null)) {
            setCalendarOpen(false);
          }
        } else {
          setCalendarOpen(false);
        }
      }
    };

    const handleBlurCalendarContainer = () => {
      setCalendarOpen(false);
    };

    const handleButtonClick = () => {
      const calValue = parser(inputRef.current?.value, isDateRange);
      setCalendarValue(calValue);
      setCalendarOpen(!isCalendarOpen);
    };

    const iconArray = React.Children.toArray(icons);
    if (!props.readOnly) {
      iconArray.push(<InputIconButton icon={icon} onClick={handleButtonClick} tabIndex={0} />);
    }

    return (
      <Input
        {...props}
        ref={refSetter(ref, inputRef)}
        handleInput={handleInput}
        icons={iconArray}
        containerRef={inputContainerRef}
        skeleton={skeleton}
      >
        {isCalendarOpen && !skeleton && (
          <StyledDropdownContainer
            targetRef={inputRef}
            alignSelf={alignDropdown}
            onClickOutside={handleBlurCalendarContainer}
            dropContainerCssMixin={dropContainerCssMixin}
          >
            <Calendar
              {...calendarProps}
              ref={calendarRef}
              selected={selectedCalendarValue}
              startDate={startDate}
              endDate={endDate}
              onChange={handleCalendarChange}
              range={isDateRange}
            />
          </StyledDropdownContainer>
        )}
      </Input>
    );
  },
);

DateInput.defaultProps = { dimension: 'm' };
DateInput.displayName = 'DateInput';
