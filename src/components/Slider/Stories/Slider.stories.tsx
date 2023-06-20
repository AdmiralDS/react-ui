import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { Slider } from '@admiral-ds/react-ui';

import { SliderPlaygroundTemplate, SliderSimpleTemplate, SliderRangeTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from '!!raw-loader!./Templates/SliderPlayground';
import SimpleRaw from '!!raw-loader!./Templates/SliderSimple';
import RangeRaw from '!!raw-loader!./Templates/SliderRange';

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
  decorators: [withDesign],
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
} as ComponentMeta<typeof Slider>;

//<editor-fold desc="Playground">
const PlaygroundStory: ComponentStory<typeof Slider> = ({ value, onChange, ...props }) => (
  <SliderPlaygroundTemplate value={value} onChange={onChange} {...cleanUpProps(props)} />
);
export const Playground = PlaygroundStory.bind({});
Playground.parameters = {
  docs: {
    source: {
      code: PlaygroundRaw,
    },
  },
};
Playground.storyName = 'Slider. Playground.';
//</editor-fold>

//<editor-fold desc="Simple">
const SimpleStory: ComponentStory<typeof Slider> = () => <SliderSimpleTemplate />;
export const SimpleExample = SimpleStory.bind({});
SimpleExample.parameters = {
  docs: {
    source: {
      code: SimpleRaw,
    },
  },
};
SimpleExample.storyName = 'Slider с настройками minValue, maxValue.';
//</editor-fold>

//<editor-fold desc="Range">
const RangeStory: ComponentStory<typeof Slider> = () => <SliderRangeTemplate />;
export const RangeExample = RangeStory.bind({});
RangeExample.parameters = {
  docs: {
    source: {
      code: RangeRaw,
    },
  },
};
RangeExample.storyName = 'Slider с отметками и кастомизированными подписями к ним.';
//</editor-fold>
