import * as React from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes';
import { CalendarTry } from '#src/components/CalendarTry/index';
import { DayWrapper } from '#src/components/CalendarTry/Day';

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
    range: {
      control: { type: 'boolean' },
    },
    currentActiveViewImportant: {
      control: { type: 'boolean' },
    },
    currentActiveView: {
      options: ['YEAR', 'MONTH', 'DAY'],
      control: { type: 'radio' },
    },
    validator: {
      control: false,
    },
    tooltipContainer: {
      control: false,
    },
    startDate: {
      control: false,
    },
    selected: {
      control: false,
    },
    endDate: {
      control: false,
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
    highlightWeekend: {
      control: { type: 'boolean' },
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

const StyledDay = styled(DayWrapper)`
  color: ${(p) => (p.disabled ? p.theme.color['Neutral/Neutral 10'] : p.theme.color['Error/Error 60 Main'])};
`;

const Template1: ComponentStory<typeof CalendarTry> = (args) => {
  const [selected, setSelected] = React.useState<Dayjs>(dayjs());
  const [viewDate, setViewDate] = React.useState<Dayjs>(selected);

  const filterDate = (date: Dayjs) => {
    return date.day() === 6;
  };

  const handleDayClick = (date: Dayjs) => {
    console.log(`click on ${date.format('DD MMM')}`);
    setSelected(date);
  };

  const customRenderDay = (date: Dayjs) => {
    return (
      <StyledDay
        key={date.valueOf()}
        today={date.isSame(dayjs(), 'date')}
        selected={date.isSame(selected, 'date')}
        disabled={filterDate(date)}
        outsideMonth={!date.isSame(viewDate, 'month')}
        onClick={() => !filterDate(date) && handleDayClick(date)}
      >
        {date.date()}
      </StyledDay>
    );
  };

  const handlePanelChange = (date: Dayjs) => {
    setViewDate(date);
  };

  return (
    <div style={{ display: 'flex' }}>
      <CalendarTry selected={selected} onSelectDate={handleDayClick} disabledDate={filterDate} />
      <Separator />
      <CalendarTry selected={selected} renderDay={customRenderDay} onPanelChange={handlePanelChange} userLocale="en" />
    </div>
  );
};

export const CalendarWidgetSimple = Template1.bind({});
CalendarWidgetSimple.args = {};
CalendarWidgetSimple.storyName = 'Simple.';
