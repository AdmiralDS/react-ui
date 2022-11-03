import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { Range } from '.';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>Двойной слайдер позволяет выбирать диапазон внутри обозначенного диапазона значений.</Desc>
);

export default {
  title: 'Admiral-2.1/RangeRefactor',
  decorators: [withDesign],
  component: Range,
  parameters: {
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
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Range>;

const Template0: ComponentStory<typeof Range> = (args) => {
  const [rangeValue, setRangeValue] = React.useState<[number, number]>([4, 5]);

  return (
    <>
      <Range
        {...args}
        value={rangeValue}
        onChange={(e: any, value: [number, number]) => {
          console.log({ e, value });
          setRangeValue(value);
        }}
      />
    </>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.storyName = 'Playground.';
