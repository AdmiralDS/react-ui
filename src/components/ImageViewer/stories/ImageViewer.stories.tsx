import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { ImageViewer } from '@admiral-ds/react-ui';

import { ImageViewerPlaygroundTemplate } from './ImageViewerPlayground.template';
import { ImageViewerMobileTemplate } from './ImageViewerMobile.template';
import { ImageViewerControlledStateTemplate } from '#src/components/ImageViewer/stories/ImageViewerControlledState.template';

// Imports of text sources
import ImageViewerPlaygroundRaw from './ImageViewerPlayground.template?raw';
import ImageViewerMobileRaw from './ImageViewerMobile.template?raw';
import ImageViewerControlledStateRaw from './ImageViewerControlledState.template?raw';

export default {
  title: 'Admiral-2.1/ImageViewer',
  decorators: undefined,
  component: ImageViewer,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    items: {
      control: false,
    },
    previewGroupMixin: {
      control: false,
    },
    locale: {
      control: false,
    },
    container: {
      control: false,
    },
    errorMiniature: {
      control: false,
    },
    dimension: {
      options: ['xxs', 'xs', 's', 'm', 'l', 'xl'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof ImageViewer>;

//<editor-fold desc="ImageViewer. Playground">
const ImageViewerPlaygroundStory: StoryFn<typeof ImageViewer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ImageViewerPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ImageViewerPlayground = {
  render: ImageViewerPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: ImageViewerPlaygroundRaw,
      },
    },
  },

  name: 'ImageViewer. Playground',
};

//</editor-fold>

//<editor-fold desc="ImageViewer. Mobile">
const ImageViewerMobileStory: StoryFn<typeof ImageViewer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ImageViewerMobileTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ImageViewerMobile = {
  render: ImageViewerMobileStory,

  parameters: {
    docs: {
      source: {
        code: ImageViewerMobileRaw,
      },
    },
  },

  name: 'ImageViewer. Mobile',
};

//</editor-fold>

//<editor-fold desc="ImageViewer. Controlled state">
const ImageViewerControlledStateStory: StoryFn<typeof ImageViewer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ImageViewerControlledStateTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ImageViewerControlledState = {
  render: ImageViewerControlledStateStory,

  parameters: {
    docs: {
      source: {
        code: ImageViewerControlledStateRaw,
      },
    },
  },

  name: 'ImageViewer. ControlledState',
};

//</editor-fold>
