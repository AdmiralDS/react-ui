import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { SliderRange, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SliderRangePlaygroundTemplate, SliderRangeCustomTemplate, SliderRangeControlledTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from './Templates/SliderRangePlayground?raw';
import CustomRaw from './Templates/SliderRangeCustom?raw';
import ControlledRaw from './Templates/SliderRangeControlled?raw';

const Separator = styled.div`
  height: 20px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI', serif;
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Поле ввода с двойным слайдером позволяет выбирать диапазон внутри обозначенного диапазона значений. Так же возможен
    ввод вручную.
    <Separator />В диапозон может быть добавлено значение: рубли, доллары и т.п. В таком случае значение подставляется
    только в поле ввода.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Input/SliderRange',
  decorators: undefined,
  component: SliderRange,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61377',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61446',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61513',
      },
    ],
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    thousand: {
      control: { type: 'text' },
    },
    suffix: {
      control: { type: 'text' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
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
    step: {
      control: { type: 'number' },
    },
    value: {
      control: false,
    },
    defaultValue: {
      control: false,
    },
    input1: {
      control: false,
    },
    input2: {
      control: false,
    },
    prefix: {
      control: false,
    },
    placeholder: {
      control: false,
    },
  },
} as Meta<typeof SliderRange>;

//<editor-fold desc="SliderRange. Playground">
const PlaygroundStory: StoryFn<typeof SliderRange> = (props) => (
  <SliderRangePlaygroundTemplate {...cleanUpProps(props)} />
);
export const PlaygroundExample = PlaygroundStory.bind({});
PlaygroundExample.parameters = {
  docs: {
    source: {
      code: PlaygroundRaw,
    },
  },
};
PlaygroundExample.storyName = 'SliderRange. Playground';
//</editor-fold>

//<editor-fold desc="SliderRange. Пример изменения настроек (prefix, suffix, minValue, maxValue)">
const CustomStory: StoryFn<typeof SliderRange> = () => <SliderRangeCustomTemplate />;
export const CustomExample = CustomStory.bind({});
CustomExample.parameters = {
  docs: {
    source: {
      code: CustomRaw,
    },
  },
};
CustomExample.storyName = 'SliderRange. Пример изменения настроек (prefix, suffix, minValue, maxValue)';
//</editor-fold>

//<editor-fold desc="SliderRange. Пример контролируемого компонента.">
const ControlledStory: StoryFn<typeof SliderRange> = () => <SliderRangeControlledTemplate />;
export const ControlledExample = ControlledStory.bind({});
ControlledExample.parameters = {
  docs: {
    source: {
      code: ControlledRaw,
    },
  },
};
ControlledExample.storyName = 'SliderRange. Пример контролируемого компонента.';
//</editor-fold>
