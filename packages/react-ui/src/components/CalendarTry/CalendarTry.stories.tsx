import * as React from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled, { css, ThemeProvider } from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes';
import { CalendarTry } from '#src/components/CalendarTry/index';
import type { CalendarViewMode } from '#src/components/CalendarTry/constants';
import { DayCellWrapper } from '#src/components/CalendarTry/CalendarContent/DayCell';

export default {
  title: 'Admiral-2.1/CalendarTry',
  decorators: [withDesign],
  component: CalendarTry,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407',
    },
  },
  argTypes: {
    viewMode: {
      options: ['DATES', 'MONTHS', 'YEARS'],
      control: { type: 'radio' },
    },
    pickerType: {
      options: ['DATE_MONTH_YEAR', 'MONTH_YEAR', 'YEAR'],
      control: { type: 'radio' },
    },
    rangePicker: {
      control: { type: 'boolean' },
    },
    validator: {
      control: false,
    },
    selected: {
      control: false,
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof CalendarTry>;

const Separator = styled.div`
  height: 20px;
  width: 20px;
`;

const StyledDay = styled(DayCellWrapper)`
  color: ${(p) => (p.disabled ? p.theme.color['Neutral/Neutral 10'] : p.theme.color['Error/Error 60 Main'])};
`;

const weekendMixin = css<{ disabled?: boolean }>`
  color: ${(p) => (p.disabled ? p.theme.color['Error/Error 30'] : p.theme.color['Error/Error 60 Main'])};
`;

const highlightSundays = (date: Dayjs) => {
  if (date.day() === 0) {
    return weekendMixin;
  }
  return undefined;
};

const Template1: ComponentStory<typeof CalendarTry> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [viewMode1, setViewMode1] = React.useState<CalendarViewMode>('DATES');
  const [viewMode2, setViewMode2] = React.useState<CalendarViewMode>('DATES');
  const [selected1, setSelected1] = React.useState<Dayjs>(dayjs());
  const [startDate1, setStartDate1] = React.useState<Dayjs | undefined>(undefined);
  const [endDate1, setEndDate1] = React.useState<Dayjs | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<Dayjs>(dayjs());
  const [viewDate2, setViewDate2] = React.useState<Dayjs>(selected2);
  const [activeDate2, setActiveDate2] = React.useState<Dayjs | undefined>(undefined);

  React.useEffect(() => {
    switch (args.pickerType) {
      case 'DATE_MONTH_YEAR':
        setViewMode1('DATES');
        setViewMode2('DATES');
        break;
      case 'MONTH_YEAR':
        setViewMode1('MONTHS');
        setViewMode2('MONTHS');
        break;
      case 'YEAR':
        setViewMode1('YEARS');
        setViewMode2('YEARS');
        break;
    }
  }, [args.pickerType]);

  const filterDate = (date: Dayjs) => {
    return date.date() < 7;
    //return date.isSame(dayjs(), 'date');
  };

  const handleDayClick1 = (date: Dayjs) => {
    console.log(`click on ${date.format('DD MMM YYYY')}`);
    if (args.rangePicker) {
      if (!startDate1) {
        setStartDate1(date);
      } else {
        if (!endDate1) {
          if (date.isAfter(startDate1)) {
            setEndDate1(date);
          }
        } else {
          setStartDate1(date);
          setEndDate1(undefined);
        }
      }
    } else {
      setSelected1(date);
    }
  };

  const handleMonthClick1 = (date: Dayjs) => {
    if (args.pickerType === 'MONTH_YEAR') {
      setSelected1(date);
    }
  };

  const handleYearClick1 = (date: Dayjs) => {
    if (args.pickerType === 'YEAR') {
      setSelected1(date);
    }
  };

  const handleViewModeChange1 = (viewMode: CalendarViewMode) => setViewMode1(viewMode);

  //<editor-fold desc="custom variant">
  const handleDayClick2 = (date: Dayjs) => {
    console.log(`click on ${date.format('DD MMM YYYY')}`);
    setSelected2(date);
    setViewDate2(date);
  };

  const handleMonthClick2 = (date: Dayjs) => {
    if (args.pickerType === 'MONTH_YEAR') {
      setSelected2(date);
      setViewDate2(date);
    }
  };

  const handleYearClick2 = (date: Dayjs) => {
    if (args.pickerType === 'YEAR') {
      setSelected2(date);
      setViewDate2(date);
    }
  };

  const handleDayMouseEnter2 = (date: Dayjs, _: any) => {
    setActiveDate2(date);
  };
  const handleDayMouseLeave2 = (date: Dayjs, _: any) => {
    setActiveDate2(undefined);
  };

  const customRenderDay = (date: Dayjs) => {
    const disabled = filterDate(date);
    /*// ранее выбранный диапазон
    const inRange = !!startDate && !!endDate && date.isBetween(startDate, endDate, 'date', '[]');
    const rangeStart = !!startDate && date.isSame(startDate, 'date');
    const rangeEnd = !!startDate && !!endDate && date.isSame(endDate, 'date');
    // диапазон в процессе выбора
    const inSelectingRange = isInSelectingRange(date, disabled, startDate, endDate, activeDate);
    const rangeSelectingStart = inSelectingRange && date.isSame(startDate, 'date');
    const rangeSelectingEnd = inSelectingRange && date.isSame(activeDate, 'date');

    const weekStart = date.isSame(date.startOf('week'), 'date');
    const weekEnd = date.isSame(date.endOf('week'), 'date');
    const start = rangeStart || rangeSelectingStart;
    const end = rangeEnd || rangeSelectingEnd;*/
    return (
      <StyledDay
        key={date.valueOf()}
        today={date.isSame(dayjs(), 'date')}
        selected={date.isSame(selected2, 'date')}
        disabled={disabled}
        outsideMonth={!date.isSame(viewDate2, 'month')}
        onClick={() => !filterDate(date) && handleDayClick2(date)}
        isActiveDate={!!activeDate2 && date.isSame(activeDate2, 'date')}
        isRangeStart={false}
        isRangeEnd={false}
        isWeekStart={false}
        isWeekEnd={false}
        onMouseEnter={(e) => !disabled && handleDayMouseEnter2(date, e)}
        onMouseLeave={(e) => !disabled && handleDayMouseLeave2(date, e)}
      >
        {date.date()}
      </StyledDay>
    );
  };

  const handleViewDateChange2 = (date: Dayjs) => {
    setViewDate2(date);
  };

  const handleViewModeChange2 = (viewMode: CalendarViewMode) => setViewMode2(viewMode);
  //</editor-fold>

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <CalendarTry
          pickerType={args.pickerType}
          viewMode={viewMode1}
          onViewModeChange={handleViewModeChange1}
          //selected={selected1}
          startDate={startDate1}
          endDate={endDate1}
          onSelectDate={handleDayClick1}
          onSelectMonth={handleMonthClick1}
          onSelectYear={handleYearClick1}
          disabledDate={filterDate}
          highlightSpecialDay={highlightSundays}
        />
        <Separator />
        <CalendarTry
          pickerType={args.pickerType}
          viewMode={viewMode2}
          onViewModeChange={handleViewModeChange2}
          selected={selected2}
          onSelectMonth={handleMonthClick2}
          onSelectYear={handleYearClick2}
          renderDateCell={customRenderDay}
          onViewDateChange={handleViewDateChange2}
          userLocale="en"
        />
      </div>
    </ThemeProvider>
  );
};

export const CalendarWidgetSimple = Template1.bind({});
CalendarWidgetSimple.args = {
  rangePicker: true,
};
CalendarWidgetSimple.storyName = 'Simple.';
