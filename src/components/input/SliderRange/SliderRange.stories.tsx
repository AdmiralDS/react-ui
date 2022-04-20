import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SliderRange } from './index';
import styled from 'styled-components';

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
    <Separator />В диапозон может быть добавлено значение: рубли, доллары и тп. В таком случае значение подставляется
    только в поле ввода.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Input/SliderRange',
  decorators: [withDesign],
  component: SliderRange,
  parameters: {
    componentSubtitle: <Description />,
    layout: 'centered',
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
    thousand: {
      control: { type: 'text' },
    },
  },
} as unknown as ComponentMeta<typeof SliderRange>;

const Template1: ComponentStory<typeof SliderRange> = ({ defaultValue, onChange, ...args }) => {
  const handleChange = (value: any) => console.log(value);
  return (
    <>
      <SliderRange defaultValue={defaultValue || ['2', '6']} onChange={onChange || handleChange} {...args} />
    </>
  );
};

const Template2: ComponentStory<typeof SliderRange> = () => {
  return (
    <>
      <SliderRange
        onChange={(value: any) => console.log(value)}
        minValue={10}
        maxValue={100}
        prefix={['From', 'To']}
        suffix="$"
      />
    </>
  );
};

export const Playground = Template1.bind({});
Playground.args = {};
Playground.storyName = 'SliderRange. Playground';

export const Custom = Template2.bind({});
Custom.args = {};
Custom.storyName = 'SliderRange. Пример изменения настроек (prefix, suffix, minValue, maxValue)';
