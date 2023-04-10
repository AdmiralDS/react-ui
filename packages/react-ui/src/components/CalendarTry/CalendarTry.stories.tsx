import { withDesign } from 'storybook-addon-designs';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes';
import type { ComponentMeta } from '@storybook/react';
import { CalendarTry } from '#src/components/CalendarTry/index';
import styled from 'styled-components';
import type { ComponentStory } from '@storybook/react';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';

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

const Template1: ComponentStory<typeof CalendarTry> = (args) => {
  const selected = dayjs();
  return (
    <div style={{ display: 'flex' }}>
      <CalendarTry date={dayjs()} selected={selected} />
      <Separator />
      <CalendarTry date={dayjs()} selected={selected} userLocale="en" />
    </div>
  );
};

export const CalendarWidgetSimple = Template1.bind({});
CalendarWidgetSimple.args = {};
CalendarWidgetSimple.storyName = 'Simple.';
