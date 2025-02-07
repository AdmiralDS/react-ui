import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { Slider } from '@admiral-ds/react-ui';

import { SliderPlaygroundTemplate } from './SliderPlayground.template';
import { SliderSimpleTemplate } from './SliderSimple.template';
import { SliderRangeTemplate } from './SliderRange.template';
import { SliderTooltipTemplate } from './SliderTooltip.template';

// Imports of text sources
import SliderPlaygroundRaw from './SliderPlayground.template?raw';
import SliderSimpleRaw from './SliderSimple.template?raw';
import SliderRangeRaw from './SliderRange.template?raw';
import SliderTooltipRaw from './SliderTooltip.template?raw';

const Separator = styled.div`
  height: 20px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Слайдер с двумя значениями используется для произвольного выбора любого значения из заданного диапазона.
    <Separator />
    Слайдер с тремя и более значениями используется для выбора из набора заданных значений. В компоненте можно выбрать
    от 3 до 5 значений. Слайдер “притягивается” к ближайшему значению. Так же можно кликать на заданные значения.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Slider',
  decorators: undefined,
  component: Slider,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61110',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61184',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61214',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'm'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    step: {
      control: { type: 'number' },
    },
    minValue: {
      control: { type: 'number' },
    },
    maxValue: {
      control: { type: 'number' },
    },
    precision: {
      control: { type: 'number' },
    },
    tickMarks: {
      control: false,
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    decimal: {
      control: { type: 'text' },
    },
    thousand: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Slider>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof Slider> = ({ value, onChange, ...props }) => (
  <SliderPlaygroundTemplate value={value} onChange={onChange} {...props} />
);

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: SliderPlaygroundRaw,
      },
    },
  },

  name: 'Slider. Playground.',
};

//</editor-fold>

//<editor-fold desc="Simple">
const SimpleStory: StoryFn<typeof Slider> = () => <SliderSimpleTemplate />;

export const SimpleExample = {
  render: SimpleStory,

  parameters: {
    docs: {
      source: {
        code: SliderSimpleRaw,
      },
    },
  },

  name: 'Slider с настройками minValue, maxValue.',
};

//</editor-fold>

//<editor-fold desc="Range">
const RangeStory: StoryFn<typeof Slider> = () => <SliderRangeTemplate />;

export const RangeExample = {
  render: RangeStory,

  parameters: {
    docs: {
      source: {
        code: SliderRangeRaw,
      },
    },
  },

  name: 'Slider с отметками и кастомизированными подписями к ним.',
};
//</editor-fold>

//<editor-fold desc="Tooltip">
const TooltipStory: StoryFn<typeof Slider> = () => <SliderTooltipTemplate />;

export const TooltipExample = {
  render: TooltipStory,

  parameters: {
    docs: {
      source: {
        code: SliderTooltipRaw,
      },
    },
  },

  name: 'Slider. Использование с Tooltip.',
};
//</editor-fold>
