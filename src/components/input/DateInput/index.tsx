import { Children, forwardRef, useRef, useState, type KeyboardEvent } from 'react';
import styled from 'styled-components';

import { ReactComponent as CalendarOutlineSVG } from '@admiral-ds/icons/build/system/CalendarOutline.svg';
import type { TextInputProps } from '#src/components/input/TextInput';
import { TextInput } from '#src/components/input/TextInput';
import type { CalendarPropType } from '#src/components/Calendar';
import { Calendar } from '#src/components/Calendar';
import { refSetter } from '#src/components/common/utils/refSetter';
import { defaultDateInputHandle } from '#src/components/input/DateInput/defaultDateInputHandle';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { isValidDate } from './isValidDate';
import { defaultParser } from './defaultParser';
import { defaultDateRangeInputHandle } from '#src/components/input/DateInput/defaultDateRangeInputHandle';
import { InputIconButton } from '#src/components/InputIconButton';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import type { DropMenuComponentProps } from '#src/components/DropMenu';
import type { DropContainerStyles } from '#src/components/DropdownContainer';
import { keyboardKey } from '../../common/keyboardKey';

export * from './ActionsPanel';

const Input = styled(TextInput)`
  min-width: 150px;
`;

function toUTCDateIsoString(date: Date): string {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())).toISOString();
}

// IE11 fix toLocaleDateString('ru') extra invisible characters by using .replace(/[^ -~]/g,'')
function defaultFormatter(isoValues: string[], joinString = ' - '): string {
  return isoValues
    .map((iso) => new Date(iso))
    .map((date) =>
      isValidDate(date) ? date.toLocaleDateString('ru', { timeZone: 'UTC' }).replace(/[^ -~]/g, '') : '__.__.____',
    )
    .join(joinString);
}

function preventUseUnsupportedCharacters(e: React.InputEvent<HTMLInputElement>) {
  const typedChar = e.data;
  if (typedChar && typedChar.replace(/[^\d_.]/g, '').length === 0) {
    e.preventDefault();
    e.stopPropagation();
  }
}

export interface DateInputProps
  extends Omit<TextInputProps, 'iconsBefore'>,
    Omit<CalendarPropType, 'onChange' | 'range'>,
    Pick<DropMenuComponentProps, 'isVisible' | 'onVisibilityChange'>,
    DropContainerStyles {
  /** Устанавливает тип ввода даты или интервала даты*/
  type?: 'date' | 'date-range';

  /** Устанавливает начальное состояние видимости календаря */
  defaultIsCalendarOpen?: boolean;

  formatter?: (isoValues: string[], joinString?: string) => string;
  parser?: (stringValue?: string, isDateRangeValue?: boolean) => Date[];

  /**
   * @deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
   * Взамен используйте alignSelf
   *
   * Принудительно выравнивает контейнер календаря относительно компонента
   **/
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Ref для календаря */
  calendarRef?: React.RefObject<HTMLDivElement>;

  /** Компонент для отображения альтернативной иконки */
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  /** Позволяет добавить панель внизу под календарем */
  renderBottomPanel?: () => React.ReactNode;
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
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
      alignDropdown = 'auto',
      alignSelf = 'auto',
      currentActiveView,
      currentActiveViewImportant,
      onMonthSelect,
      onYearSelect,
      onViewEnter,
      onViewLeave,
      onViewMonthSelect,
      onViewYearSelect,
      selected,
      viewDate,
      onViewDateChange,
      calendarRef,
      icon = CalendarOutlineSVG,
      icons,
      iconsAfter,
      skeleton = false,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      isVisible,
      onVisibilityChange = () => undefined,
      highlightSpecialDay,
      locale,
      onDateIncreaseDecrease,
      dimension = 'm',
      onBeforeInput = preventUseUnsupportedCharacters,
      renderBottomPanel,
      onKeyDown,
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
      viewDate,
      onViewDateChange,
      highlightSpecialDay,
      locale,
      onDateIncreaseDecrease,
    };
    const isDateRange = type === 'date-range';
    const handleInput = props.handleInput || (isDateRange ? defaultDateRangeInputHandle : defaultDateInputHandle);
    const [calendarValue, setCalendarValue] = useState<Date | (Date | null)[] | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputContainerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isCalendarOpenState, setCalendarOpenState] = useState<boolean>(defaultIsCalendarOpen);

    const isCalendarOpen = isVisible ?? isCalendarOpenState;
    const setCalendarOpen = (newCalendarOpenState: boolean) => {
      setCalendarOpenState(newCalendarOpenState);
      onVisibilityChange(newCalendarOpenState);
    };

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
        const toFormatValues = values.map((date) => (date ? toUTCDateIsoString(date) : ''));
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

    const handleBlurCalendarContainer = (e: Event) => {
      if (e.target && inputContainerRef.current?.contains(e.target as Node)) {
        return;
      }
      setCalendarOpen(false);
    };

    const handleButtonClick = () => {
      const calValue = parser(inputRef.current?.value, isDateRange);
      setCalendarValue(calValue);
      if (!isCalendarOpen) {
        inputRef.current?.focus();
      }
      if (isCalendarOpen && isDateRange && calValue && Array.isArray(calValue) && calValue.includes(null)) {
        return;
      }
      setCalendarOpen(!isCalendarOpen);
    };

    const handleContainerMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      if (props.disabled || skeleton || !isCalendarOpen) {
        return;
      }

      const clickedElement = e.target as HTMLElement;

      if (dropdownRef.current && dropdownRef.current.contains(clickedElement)) {
        return;
      }
      const dropdownElement = clickedElement.closest('.dropdown-container, [class*="dropContainer"]');
      if (dropdownElement) {
        return;
      }

      if (clickedElement.closest('button, svg, [role="button"]') !== null) {
        return;
      }

      if (
        inputRef.current &&
        (clickedElement === inputRef.current ||
          clickedElement.closest('.text-input-native-input') === inputRef.current) &&
        !props.readOnly
      ) {
        return;
      }

      // Все остальные клики в контейнере (слева от инпута, вокруг иконки) - закрываем дропдаун
      handleButtonClick();
    };

    const iconArray = Children.toArray(iconsAfter || icons);
    if (!props.readOnly) {
      iconArray.push(<InputIconButton icon={icon} onClick={handleButtonClick} tabIndex={0} />);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      const code = keyboardKey.getCode(event);
      if ((event.ctrlKey || event.metaKey) && (code === keyboardKey.z || code === keyboardKey.Z)) {
        event.preventDefault();
      }
      onKeyDown?.(event);
    };

    return (
      <Input
        {...{ dimension, ...props }}
        ref={refSetter(ref, inputRef)}
        handleInput={handleInput}
        onBeforeInput={onBeforeInput}
        onKeyDown={handleKeyDown}
        iconsAfter={iconArray}
        containerRef={inputContainerRef}
        skeleton={skeleton}
        containerPropsConfig={(containerProps) => ({
          ...containerProps,
          onMouseDown: handleContainerMouseDown,
        })}
      >
        {isCalendarOpen && !skeleton && (
          <StyledDropdownContainer
            ref={dropdownRef}
            targetElement={inputRef.current}
            alignSelf={alignDropdown || alignSelf}
            onClickOutside={handleBlurCalendarContainer}
            dropContainerCssMixin={dropContainerCssMixin}
            className={dropContainerClassName}
            style={dropContainerStyle}
          >
            <StyledCalendar
              {...calendarProps}
              ref={calendarRef}
              selected={selectedCalendarValue}
              startDate={startDate}
              endDate={endDate}
              onChange={handleCalendarChange}
              range={isDateRange}
            />
            {renderBottomPanel && renderBottomPanel()}
          </StyledDropdownContainer>
        )}
      </Input>
    );
  },
);

export const StyledCalendar = styled(Calendar)`
  box-shadow: none;
  border-radius: 0;
`;

DateInput.displayName = 'DateInput';
