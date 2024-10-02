import type { Meta, StoryFn } from '@storybook/react';

import { ScrollContainer } from '@admiral-ds/react-ui';

import { ScrollbarTemplate } from './Scrollbar.template';

import ScrollbarTemplateRaw from './Scrollbar.template?raw';

export default {
  title: 'Admiral-2.1/ScrollContainer',
  component: ScrollContainer,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    contentBlockProps: {
      control: false,
    },
    verticalScrollProps: {
      control: false,
    },
    horizontalScrollProps: {
      control: false,
    },
  },
} as Meta<typeof ScrollContainer>;

const CarouselPlaygroundStory: StoryFn<typeof ScrollContainer> = (props) => {
  return <ScrollbarTemplate {...props} />;
};

export const CarouselPlayground = {
  render: CarouselPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: ScrollbarTemplateRaw,
      },
    },
  },

  name: 'ScrollContainer',
};
