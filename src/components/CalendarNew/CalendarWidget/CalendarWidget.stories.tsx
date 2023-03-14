import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { CalendarWidgetProps } from '#src/components/CalendarNew/CalendarWidget/index';
import { CalendarWidget } from '#src/components/CalendarNew/CalendarWidget/index';
import dayjs from 'dayjs';

//dayjs.locale('ru');

export default {
  title: 'Admiral-2.1/CalendarNew/CalendarWidget',
  decorators: [withDesign],
  component: CalendarWidget,
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
} as ComponentMeta<typeof CalendarWidget>;

const Template2: ComponentStory<typeof CalendarWidget> = (args: CalendarWidgetProps) => {
  console.log(dayjs.locale());
  return (
    <>
      <CalendarWidget {...args} viewDate={dayjs()} />
    </>
  );
};

export const CalendarWidgetSimple = Template2.bind({});
CalendarWidgetSimple.args = {};
CalendarWidgetSimple.storyName = 'Simple.';
