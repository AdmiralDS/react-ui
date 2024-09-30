import type { Meta, StoryFn } from '@storybook/react';

import { Scrollenabled } from '@admiral-ds/react-ui';

import { ScrollbarTemplate } from './Scrollbar.template';

import ScrollbarTemplateRaw from './Scrollbar.template?raw';

export default {
  title: 'Admiral-2.1/Scrollbar',
  component: Scrollenabled,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    scrollBoxRef: {
      control: false,
    },
    verticalScrollAriaRef: {
      control: false,
    },
  },
} as Meta<typeof Scrollenabled>;

const CarouselPlaygroundStory: StoryFn<typeof Scrollenabled> = (props) => {
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

  name: 'Scrollbar. Playground',
};
