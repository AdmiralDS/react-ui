import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { CalendarWidgetProps } from '#src/components/CalendarNew/CalendarWidget/index';
import { CalendarWidget } from '#src/components/CalendarNew/CalendarWidget/index';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import styled from 'styled-components';

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

const Separator = styled.div`
  height: 20px;
  width: 20px;
`;

const Template2: ComponentStory<typeof CalendarWidget> = (args: CalendarWidgetProps) => {
  const [selected, setSelected] = React.useState(dayjs());

  const handleOnChange = (date: Dayjs) => {
    setSelected(date);
  };

  return (
    <>
      <CalendarWidget {...args} viewDate={dayjs()} selected={selected} onChange={handleOnChange} />
      <Separator />
      <CalendarWidget {...args} viewDate={dayjs()} selected={selected} onChange={handleOnChange} userLocale="en" />
    </>
  );
};

export const CalendarWidgetSimple = Template2.bind({});
CalendarWidgetSimple.args = {};
CalendarWidgetSimple.storyName = 'Simple.';
