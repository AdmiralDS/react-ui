import * as React from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
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

const Template1: ComponentStory<typeof CalendarTry> = (args) => {
  const [viewMode, setViewMode] = React.useState<CalendarViewMode>(args.viewMode || 'DATES');
  const [selected1, setSelected1] = React.useState<Dayjs>(dayjs());
  const [selected2, setSelected2] = React.useState<Dayjs>(dayjs());
  const [viewDate2, setViewDate2] = React.useState<Dayjs>(selected2);

  const filterDate = (date: Dayjs) => {
    return date.day() === 6;
  };

  const handleDayClick1 = (date: Dayjs) => {
    console.log(`click on ${date.format('DD MMM YYYY')}`);
    setSelected1(date);
  };

  const handleMonthClick1 = (date: Dayjs) => {
    console.log(`click on ${date.format('DD MMM YYYY')}`);
    setSelected1((selected) => selected.month(date.month()));
  };

  const handleYearClick1 = (date: Dayjs) => {
    console.log(`click on ${date.format('DD MMM YYYY')}`);
    setSelected1((selected) => selected.year(date.year()));
  };

  const handleDayClick2 = (date: Dayjs) => {
    console.log(`click on ${date.format('DD MMM YYYY')}`);
    setSelected2(date);
  };

  const customRenderDay = (date: Dayjs) => {
    return (
      <StyledDay
        key={date.valueOf()}
        today={date.isSame(dayjs(), 'date')}
        selected={date.isSame(selected2, 'date')}
        disabled={filterDate(date)}
        outsideMonth={!date.isSame(viewDate2, 'month')}
        onClick={() => !filterDate(date) && handleDayClick2(date)}
      >
        {date.date()}
      </StyledDay>
    );
  };

  const handleViewDateChange = (date: Dayjs) => {
    setViewDate2(date);
  };

  const handleViewModeChange = (viewMode: CalendarViewMode) => setViewMode(viewMode);

  return (
    <div style={{ display: 'flex' }}>
      <CalendarTry
        pickerType={args.pickerType}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
        selected={selected1}
        onSelectDate={handleDayClick1}
        /*onSelectMonth={handleMonthClick1}
        onSelectYear={handleYearClick1}*/
        disabledDate={filterDate}
      />
      <Separator />
      <CalendarTry
        selected={selected1}
        renderDateCell={customRenderDay}
        onViewDateChange={handleViewDateChange}
        userLocale="en"
      />
    </div>
  );
};

export const CalendarWidgetSimple = Template1.bind({});
CalendarWidgetSimple.args = {};
CalendarWidgetSimple.storyName = 'Simple.';
