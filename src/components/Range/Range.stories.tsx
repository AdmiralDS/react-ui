import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Range } from '.';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Поле ввода с двойным слайдером позволяет выбирать диапазон внутри обозначенного диапазона значений. Так же возможен
    ввод вручную.
  </Desc>
);

export default {
  title: ' Internal components/Range',
  decorators: [withDesign],
  component: Range,
  parameters: {
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A61377',
    },
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
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
  },
} as ComponentMeta<typeof Range>;

const Template0: ComponentStory<typeof Range> = (args) => {
  const [rangeValue, setRangeValue] = React.useState<[number, number]>([0, 5]);
  return (
    <>
      <Range
        {...args}
        value={rangeValue}
        onChange={(e: any, value: [number, number]) => {
          if (e.type !== 'mousemove') setRangeValue(value);
        }}
      />
    </>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.storyName = 'Playground.';
