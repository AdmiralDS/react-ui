import { PaginationSimple, PaginationSimpleItem } from '#src/components-ver2/PaginationSimple';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

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
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
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
    </ThemeProvider>
  );
};

export const Playground = Template1.bind({});
Playground.args = {};
