import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';
import { SliderRange, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SliderRangePlaygroundTemplate } from './SliderRangePlayground.template';
import { SliderRangeCustomTemplate } from './SliderRangeCustom.template';
import { SliderRangeControlledTemplate } from './SliderRangeControlled.template';

// Imports of text sources
import SliderRangePlaygroundRaw from './SliderRangePlayground.template?raw';
import SliderRangeCustomRaw from './SliderRangeCustom.template?raw';
import SliderRangeControlledRaw from './SliderRangeControlled.template?raw';

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
    decimal: {
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
const PlaygroundStory: StoryFn<typeof SliderRange> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SliderRangePlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};
export const PlaygroundExample = PlaygroundStory.bind({});
PlaygroundExample.parameters = {
  docs: {
    source: {
      code: SliderRangePlaygroundRaw,
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
      code: SliderRangeCustomRaw,
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
      code: SliderRangeControlledRaw,
    },
  },
};
ControlledExample.storyName = 'SliderRange. Пример контролируемого компонента.';

//</editor-fold>
