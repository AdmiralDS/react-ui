import type { Meta, StoryFn } from '@storybook/react';

import { CarouselSlider } from '@admiral-ds/react-ui';
import { CarouselSliderPlaygroundTemplate } from './CarouselSliderPlayground.template';

// Imports of text sources
import CarouselSliderPlaygroundRaw from './CarouselSliderPlayground.template?raw';

export default {
  title: 'Admiral-2.1/CarouselSlider',
  component: CarouselSlider,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    appearance: {
      options: ['default', 'primary'],
      control: { type: 'radio' },
    },
    currentItem: {
      control: false,
    },
    onChange: {
      control: false,
    },
  },
} as Meta<typeof CarouselSlider>;

//<editor-fold desc="ButtonGroup. Playground">
const CarouselSliderPlaygroundStory: StoryFn<typeof CarouselSlider> = (props) => {
  return <CarouselSliderPlaygroundTemplate {...props} />;
};

export const CarouselSliderPlayground = {
  render: CarouselSliderPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: CarouselSliderPlaygroundRaw,
      },
    },
  },

  name: 'CarouselSlider. Playground',
};

//</editor-fold>
