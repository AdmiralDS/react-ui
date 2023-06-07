import * as React from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled, { css, ThemeProvider } from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { Theme } from '@admiral-ds/react-ui';
import { ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import { Calendar5 } from '@admiral-ds/date-picker';
import type { Calendar5ViewMode } from '@admiral-ds/date-picker';
import { DAY_BORDER_RADIUS, DayCellWrapper } from '@admiral-ds/date-picker';

export default {
  title: 'Admiral-2.1/CalendarTry',
  decorators: [withDesign],
  component: Calendar5,
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
    doubleView: {
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
} as ComponentMeta<typeof Calendar5>;

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

const Template1: ComponentStory<typeof Calendar5> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [viewMode1, setViewMode1] = React.useState<Calendar5ViewMode>('DATES');
  const [selected1, setSelected1] = React.useState<Dayjs>(dayjs());
  const [startDate1, setStartDate1] = React.useState<Dayjs | undefined>(undefined);
  const [endDate1, setEndDate1] = React.useState<Dayjs | undefined>(undefined);

  const resetDateStates1 = () => {
    setSelected1(dayjs());
    setStartDate1(undefined);
    setEndDate1(undefined);
  };

  React.useEffect(() => {
    switch (args.pickerType) {
      case 'DATE_MONTH_YEAR':
        setViewMode1('DATES');
        break;
      case 'MONTH_YEAR':
        setViewMode1('MONTHS');
        break;
      case 'YEAR':
        setViewMode1('YEARS');
        break;
    }
    resetDateStates1();
  }, [args.pickerType]);

  React.useEffect(() => {
    resetDateStates1();
  }, [args.rangePicker]);

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
    }
  };

  const handleYearClick1 = (date: Dayjs) => {
    if (args.pickerType === 'YEAR') {
      setSelected1(date);
    }
  };
  const handleYearRangeClick1 = (date: Dayjs) => {
    if (args.pickerType === 'YEAR') {
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
    }
  };

  const handleViewModeChange1 = (viewMode: Calendar5ViewMode) => setViewMode1(viewMode);

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <Calendar5
          doubleView={args.doubleView}
          rangePicker={args.rangePicker}
          pickerType={args.pickerType}
          viewMode={viewMode1}
          onViewModeChange={handleViewModeChange1}
          selected={selected1}
          startDate={startDate1}
          endDate={endDate1}
          onSelectDate={handleDayClick1}
          onSelectMonth={handleMonthClick1}
          onSelectYear={args.rangePicker ? handleYearRangeClick1 : handleYearClick1}
          //disabledDate={filterDate}
          highlightSpecialDay={highlightSundays}
        />
      </div>
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof Calendar5> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [viewMode2, setViewMode2] = React.useState<Calendar5ViewMode>('DATES');
  const [selected2, setSelected2] = React.useState<Dayjs>(dayjs());
  const [viewDate2, setViewDate2] = React.useState<Dayjs>(selected2);
  const [activeDate2, setActiveDate2] = React.useState<Dayjs | undefined>(undefined);

  const resetDateStates2 = () => {
    setSelected2(dayjs());
    //setStartDate2(undefined);
    //setEndDate2(undefined);
  };
  React.useEffect(() => {
    switch (args.pickerType) {
      case 'DATE_MONTH_YEAR':
        setViewMode2('DATES');
        break;
      case 'MONTH_YEAR':
        setViewMode2('MONTHS');
        break;
      case 'YEAR':
        setViewMode2('YEARS');
        break;
    }
    //resetDateStates2();
  }, [args.pickerType]);

  React.useEffect(() => {
    //resetDateStates2();
  }, [args.rangePicker]);

  const filterDate = (date: Dayjs) => {
    return date.date() < 7;
    //return date.isSame(dayjs(), 'date');
  };

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
        isRowStart={false}
        isRowEnd={false}
        onMouseEnter={(e: React.MouseEvent) => !disabled && handleDayMouseEnter2(date, e)}
        onMouseLeave={(e: React.MouseEvent) => !disabled && handleDayMouseLeave2(date, e)}
        borderRadius={DAY_BORDER_RADIUS}
      >
        {date.date()}
      </StyledDay>
    );
  };

  const handleViewDateChange2 = (date: Dayjs) => {
    setViewDate2(date);
  };

  const handleViewModeChange2 = (viewMode: Calendar5ViewMode) => setViewMode2(viewMode);

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <Calendar5
          doubleView={args.doubleView}
          rangePicker={args.rangePicker}
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
  doubleView: true,
};
CalendarWidgetSimple.storyName = 'Simple.';

export const CalendarWidgetCustom = Template2.bind({});
CalendarWidgetCustom.args = {
  //rangePicker: true,
  //doubleView: true,
};
CalendarWidgetCustom.storyName = 'Custom.';
