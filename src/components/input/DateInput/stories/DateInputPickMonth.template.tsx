import * as React from 'react';
import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { DateInput } from '@admiral-ds/react-ui';
import type { DateInputProps, BorderRadiusType, InputData } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import dayjs from 'dayjs';

function splice(oldString: string, start: number, delCount: number, newSubStr: string): string {
  return oldString.slice(0, start) + newSubStr + oldString.slice(start + Math.abs(delCount));
}

const MASK_VALUE = '__.____';

const formatDate = (value: string) => {
  const MM = value.substring(0, 2).replace(/\D/g, '_').padEnd(2, '_');
  const YYYY = value.substring(2, 6).replace(/\D/g, '_').padEnd(4, '_');
  return `${MM}.${YYYY}`;
};

const calcCursorPosition = (inputValue: string, selectionStart: number) => {
  const underlinePos = inputValue.indexOf('_');
  // selectionStart должен быть не менее 1, иначе маска не будет отображаться
  const valueLength = underlinePos === -1 ? inputValue.length : underlinePos || 1;

  if (selectionStart < valueLength) {
    return inputValue.charAt(selectionStart - 1) === '.' ? selectionStart + 1 : selectionStart;
  }

  return valueLength;
};

function dateInputHandle(inputData: InputData | null): InputData {
  if (inputData === null) {
    return { value: MASK_VALUE, selectionStart: 0, selectionEnd: 0 };
  }

  const selectionStart = inputData.selectionStart || 0;
  let inputValue = inputData.value || '';

  const lengthDifference = inputValue.length - MASK_VALUE.length;

  if (inputValue.replace(/\d/g, '_') === MASK_VALUE) return inputData;

  if (lengthDifference < 0) {
    inputValue = splice(inputValue, selectionStart, 0, MASK_VALUE.substr(selectionStart, -lengthDifference));
    return { ...inputData, value: inputValue };
  }

  let addCount = 0;

  if (inputValue.charAt(selectionStart - 1) === '.') {
    addCount = -1;
  }
  if (inputValue.charAt(selectionStart) === '.') {
    if (/\d/.test(inputValue.charAt(selectionStart - 1))) {
      addCount = 1;
    } else {
      addCount = -1;
    }
  }

  const clearValue = splice(inputValue, selectionStart + addCount, lengthDifference, '').replace(/[^\d_]/g, '');
  inputValue = formatDate(clearValue);
  const cursorPos = calcCursorPosition(inputValue, selectionStart);

  return {
    ...inputData,
    value: inputValue,
    selectionStart: cursorPos,
    selectionEnd: cursorPos,
  };
}

function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d.getTime());
}

function format(isoValues: string[]): string {
  return dayjs(isoValues[0]).format('MM.YYYY');
}

function parse(str = ''): Date[] {
  const [mmStr, yyyyStr] = str.split('.');
  const date = new Date(`${yyyyStr}-${mmStr}-01`);
  date.setHours(0, 0, 0, 0);
  return isValidDate(date) ? [date] : [];
}

export const DateInputPickMonthTemplate = ({
  placeholder,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [currentActiveView, setCurrentActiveView] = useState<'YEAR' | 'MONTH'>('MONTH');
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

  const handleMonthClick = (date: Date | Array<Date | null> | null) => {
    if (!Array.isArray(date) && date) {
      setValue(dayjs(date).format('MM.YYYY'));
    }
    handleVisibilityChange(false);
  };

  const handleYearClick = (date: Date | Array<Date | null> | null) => {
    if (!Array.isArray(date) && date) {
      setValue(dayjs(date).format('MM.YYYY'));
    }
    setCurrentActiveView('MONTH');
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DateInput
        {...props}
        handleInput={dateInputHandle}
        formatter={format}
        parser={parse}
        isVisible={isVisible}
        onVisibilityChange={handleVisibilityChange}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholderValue}
        style={{ maxWidth: 300 }}
        onMonthSelect={handleMonthClick}
        onYearSelect={handleYearClick}
        onViewYearSelect={() => setCurrentActiveView('YEAR')}
        onViewMonthSelect={() => setCurrentActiveView('MONTH')}
        currentActiveView={currentActiveView}
        currentActiveViewImportant
      />
    </ThemeProvider>
  );
};
