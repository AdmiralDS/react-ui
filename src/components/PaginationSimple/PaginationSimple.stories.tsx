import { PaginationSimple, PaginationSimpleItem } from '#src/components/PaginationSimple';
import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

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
    Простой вариант компонента, например для “перелистывания” банеров или карточек.
    <Separator />
    Перелистывание происходит по заданному вручную таймингу, либо по клику на нужную секцию.
  </Desc>
);

export default {
  title: 'Admiral-2.1/PaginationSimple',
  decorators: [withDesign],
  component: PaginationSimple,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A41560',
    },
  },
  argTypes: {
    totalItems: {
      control: { type: 'number' },
    },
    currentItem: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof PaginationSimple>;

const Template1: ComponentStory<typeof PaginationSimple> = ({ totalItems, currentItem, ...args }) => {
  const [current, setCurrent] = React.useState(1);
  const items = ['first item', 'second item', 'third item', 'forth item', 'fifth item', 'sixth item'];
  return (
    <>
      <PaginationSimple
        {...args}
        totalItems={totalItems || 5}
        currentItem={currentItem || current}
        onChange={(_, item) => setCurrent(item)}
      >
        {items.map((item) => (
          <PaginationSimpleItem aria-label={item} key={item} />
        ))}
      </PaginationSimple>
    </>
  );
};

export const Playground = Template1.bind({});
Playground.args = {};
