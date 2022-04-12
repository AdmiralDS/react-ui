import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Calendar, CalendarPropType } from './index';

export default {
  title: 'Example/Calendar',
  decorators: [withDesign],
  component: Calendar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A53407',
    },
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    localeName: {
      options: ['ru', 'enUS', 'de'],
      control: { type: 'radio' },
    },
    range: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Calendar>;

const Template1: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return range ? (
    <Calendar
      {...args}
      range
      startDate={selected}
      endDate={endDate}
      onChange={(value: any) => {
        setSelected(value[0]);
        setEndDate(value[1]);
      }}
    />
  ) : (
    <Calendar
      {...args}
      selected={selected}
      onChange={(value: any) => {
        setSelected(value);
      }}
    />
  );
};

const Template2: ComponentStory<typeof Calendar> = (args: CalendarPropType) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <Calendar
      {...args}
      range
      startDate={startDate}
      endDate={endDate}
      onChange={(value: any) => {
        setStartDate(value[0]);
        setEndDate(value[1]);
      }}
    />
  );
};

const Template3: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return range ? (
    <Calendar
      {...args}
      range
      startDate={selected}
      endDate={endDate}
      maxDate={tomorrow}
      onChange={(value: any) => {
        setSelected(value[0]);
        setEndDate(value[1]);
      }}
    />
  ) : (
    <Calendar
      {...args}
      maxDate={tomorrow}
      selected={selected}
      onChange={(value: any) => {
        setSelected(value);
      }}
    />
  );
};

const Template4: ComponentStory<typeof Calendar> = ({ range, ...args }: CalendarPropType) => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  return range ? (
    <Calendar
      {...args}
      range
      startDate={selected}
      endDate={endDate}
      filterDate={isWeekday}
      onChange={(value: any) => {
        setSelected(value[0]);
        setEndDate(value[1]);
      }}
    />
  ) : (
    <Calendar
      {...args}
      filterDate={isWeekday}
      selected={selected}
      onChange={(value: any) => {
        setSelected(value);
      }}
    />
  );
};

export const CalendarSimple = Template1.bind({});
CalendarSimple.args = {};
CalendarSimple.storyName = 'Calendar. Simple.';

export const Range = Template2.bind({});
Range.args = {};
Range.storyName = 'Calendar. Range.';

export const SimpleWithMaxDate = Template3.bind({});
SimpleWithMaxDate.args = {};
SimpleWithMaxDate.storyName = 'Calendar. Simple with maxDate.';

export const SimpleWithFilterDate = Template4.bind({});
SimpleWithFilterDate.args = {};
SimpleWithFilterDate.storyName = 'Calendar. Simple with filterDate.';
