import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { ImageViewer } from '@admiral-ds/react-ui';

import { ImageViewerPlaygroundTemplate } from './ImageViewerPlayground.template';
import { ImageViewerMobileTemplate } from './ImageViewerMobile.template';
//import { ImageViewerVariantsTemplate } from './ImageViewerVariants.template';
//import { ImageViewerAppearanceTemplate } from './ImageViewerAppearance.template';

// Imports of text sources
import ImageViewerPlaygroundRaw from './ImageViewerPlayground.template?raw';
import ImageViewerMobileRaw from './ImageViewerMobile.template?raw';
//import ImageViewerVariantsRaw from './ImageViewerVariants.template?raw';
//import ImageViewerAppearanceRaw from './ImageViewerAppearance.template?raw';

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

//<editor-fold desc="ImageViewer. Размеры">
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

/*//<editor-fold desc="ImageViewer. Appearance">
const ImageViewerAppearanceStory: StoryFn<typeof ImageViewer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ImageViewerAppearanceTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ImageViewerAppearance = {
  render: ImageViewerAppearanceStory,

  parameters: {
    docs: {
      source: {
        code: ImageViewerAppearanceRaw,
      },
    },
  },

  name: 'ImageViewer. Appearance',
};

//</editor-fold>*/

/*//<editor-fold desc="ImageViewer. Варианты использования">
const ImageViewerVariantsStory: StoryFn<typeof ImageViewer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ImageViewerVariantsTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ImageViewerVariants = {
  render: ImageViewerVariantsStory,

  parameters: {
    docs: {
      source: {
        code: ImageViewerVariantsRaw,
      },
    },
  },

  name: 'ImageViewer. Варианты использования',
};

//</editor-fold>*/
