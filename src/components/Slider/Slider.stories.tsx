import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { Slider } from './';

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
    tickMarks: {
      control: { type: 'array' },
    },
  },
} as ComponentMeta<typeof Slider>;

const Template0: ComponentStory<typeof Slider> = (args) => {
  const [rangeValue, setRangeValue] = React.useState(args.value);
  React.useEffect(() => {
    setRangeValue(args.value);
  }, [args.value]);
  return (
    <>
      <Slider
        {...args}
        value={rangeValue}
        onChange={(e: any, value: number) => {
          console.log({ event: e.type, value });
          setRangeValue(value);
        }}
      />
    </>
  );
};

const Template1: ComponentStory<typeof Slider> = () => {
  const [rangeValue, setRangeValue] = React.useState(0);
  return (
    <>
      <Slider
        value={rangeValue}
        onChange={(e: any, value: number) => {
          console.log({ event: e.type, value });
          setRangeValue(value);
        }}
        minValue={10}
        maxValue={100}
      />
    </>
  );
};

const Template2: ComponentStory<typeof Slider> = () => {
  const [rangeValue, setRangeValue] = React.useState(50);
  return (
    <>
      <Slider
        tickMarks={[25, 50, 75]}
        value={rangeValue}
        maxValue={100}
        onChange={(e: any, value: number) => {
          console.log({ event: e.type, value });
          setRangeValue(value);
        }}
        renderTickMark={(mark: string) => mark + ' ₽'}
      />
    </>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.storyName = 'Slider. Playground.';

export const SliderSimple = Template1.bind({});
SliderSimple.args = {};
SliderSimple.storyName = 'Slider с настройками minValue, maxValue.';

export const SliderRange = Template2.bind({});
SliderRange.args = {};
SliderRange.storyName = 'Slider с отметками и кастомизированными подписями к ним.';
