import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { PaginationSimple } from '@admiral-ds/react-ui';

import { PaginationSimplePlaygroundTemplate } from './PaginationSimplePlayground.template';

// Imports of text sources
import PaginationSimplePlaygroundRaw from './PaginationSimplePlayground.template?raw';

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
  decorators: undefined,
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
      control: false,
    },
    currentItem: {
      control: { type: 'number' },
    },
  },
} as Meta<typeof PaginationSimple>;

//<editor-fold desc="Playground">
const PaginationPlaygroundStory: StoryFn<typeof PaginationSimple> = ({ currentItem, onChange, ...props }) => (
  <PaginationSimplePlaygroundTemplate currentItem={currentItem} onChange={onChange} {...props} />
);

export const Playground = {
  render: PaginationPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: PaginationSimplePlaygroundRaw,
      },
    },
  },
};
