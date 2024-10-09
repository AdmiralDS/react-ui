import type { Meta, StoryFn } from '@storybook/react';

import { Carousel } from '@admiral-ds/react-ui';

import { CarouselPlaygroundTemplate } from './CarouselPlayground.template';
import { CarouselAutoChangeTemplate } from '#src/components/Carousel/stories/CarouselAutoChange.template';

// Imports of text sources
import CarouselPlaygroundRaw from './CarouselPlayground.template?raw';
import CarouselAutoChangeRaw from './CarouselAutoChange.template?raw';

export default {
  title: 'Admiral-2.1/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    defaultItem: {
      control: false,
    },
    currentItem: {
      control: false,
    },
    contentCssMixin: {
      control: false,
    },
  },
} as Meta<typeof Carousel>;

//<editor-fold desc="Carousel. Playground">
const CarouselPlaygroundStory: StoryFn<typeof Carousel> = (props) => {
  return <CarouselPlaygroundTemplate {...props} />;
};

export const CarouselPlayground = {
  render: CarouselPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: CarouselPlaygroundRaw,
      },
    },
  },

  name: 'Carousel. Playground',
};

//</editor-fold>

//<editor-fold desc="Carousel. AutoChange">
const CarouselAutoChangeStory: StoryFn<typeof Carousel> = (props) => {
  return <CarouselAutoChangeTemplate {...props} />;
};

export const CarouselAutoChange = {
  render: CarouselAutoChangeStory,

  parameters: {
    docs: {
      source: {
        code: CarouselAutoChangeRaw,
      },
    },
  },

  name: 'Carousel. Автоматическое переключение',
};

//</editor-fold>
