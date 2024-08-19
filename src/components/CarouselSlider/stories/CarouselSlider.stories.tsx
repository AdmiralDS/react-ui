import type { Meta, StoryFn } from '@storybook/react';

import { CarouselSlider } from '@admiral-ds/react-ui';

import { CarouselSliderPlaygroundTemplate } from './CarouselSliderPlayground.template';
import { CarouselSliderAutoChangeTemplate } from '#src/components/CarouselSlider/stories/CarouselSliderAutoChange.template';

// Imports of text sources
import CarouselSliderPlaygroundRaw from './CarouselSliderPlayground.template?raw';
import CarouselSliderAutoChangeRaw from './CarouselSliderAutoChange.template?raw';

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
} as Meta<typeof CarouselSlider>;

//<editor-fold desc="CarouselSlider. Playground">
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

//<editor-fold desc="CarouselSlider. AutoChange">
const CarouselSliderAutoChangeStory: StoryFn<typeof CarouselSlider> = (props) => {
  return <CarouselSliderAutoChangeTemplate {...props} />;
};

export const CarouselSliderAutoChange = {
  render: CarouselSliderAutoChangeStory,

  parameters: {
    docs: {
      source: {
        code: CarouselSliderAutoChangeRaw,
      },
    },
  },

  name: 'CarouselSlider. Автоматическое переключение',
};

//</editor-fold>
