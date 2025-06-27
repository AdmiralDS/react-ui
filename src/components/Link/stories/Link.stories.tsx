import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { Link, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { LinkPlaygroundTemplate } from './LinkPlayground.template';
import { LinkPrimaryTemplate } from './LinkPrimary.template';
import { LinkSecondaryTemplate } from './LinkSecondary.template';
import { LinkWithIconTemplate } from './LinkWithIcon.template';
import { LinkMixinTemplate } from './LinkMixin.template';
import { LinkAsPropTemplate } from './LinkAsProp.template';

// Imports of text sources
import LinkPlaygroundRaw from './LinkPlayground.template?raw';
import LinkPrimaryRaw from './LinkPrimary.template?raw';
import LinkSecondaryRaw from './LinkSecondary.template?raw';
import LinkWithIconRaw from './LinkWithIcon.template?raw';
import LinkMixinRaw from './LinkMixin.template?raw';
import LinkAsPropRaw from './LinkAsProp.template?raw';

export default {
  title: 'Admiral-2.1/Link',
  decorators: undefined,
  component: Link,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A8489',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A8620',
      },
    ],
  },
  argTypes: {
    target: {
      options: ['_parent', '_self', '_top', '_blank'],
      control: { type: 'select' },
    },
    appearance: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    as: {
      control: false,
    },
    children: {
      control: false,
    },
    ref: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Link>;

//<editor-fold desc="Playground">
const LinkPlaygroundStory: StoryFn<typeof Link> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <LinkPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const Playground = {
  render: LinkPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: LinkPlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Primary">
const LinkPrimaryStory: StoryFn<typeof Link> = () => <LinkPrimaryTemplate />;

export const Primary = {
  render: LinkPrimaryStory,

  parameters: {
    docs: {
      source: {
        code: LinkPrimaryRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Secondary">
const LinkSecondaryStory: StoryFn<typeof Link> = () => <LinkSecondaryTemplate />;

export const Secondary = {
  render: LinkSecondaryStory,

  parameters: {
    docs: {
      source: {
        code: LinkSecondaryRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="With icon">
const LinkWithIconStory: StoryFn<typeof Link> = () => <LinkWithIconTemplate />;

export const IconLink = {
  render: LinkWithIconStory,

  parameters: {
    docs: {
      source: {
        code: LinkWithIconRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Mixin">
const LinkMixinStory: StoryFn<typeof Link> = () => <LinkMixinTemplate />;

export const CssMixin = {
  render: LinkMixinStory,

  parameters: {
    docs: {
      source: {
        code: LinkMixinRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="As prop">
const LinkAsPropStory: StoryFn<typeof Link> = () => <LinkAsPropTemplate />;

export const LinkAsProp = {
  render: LinkAsPropStory,

  parameters: {
    docs: {
      source: {
        code: LinkAsPropRaw,
      },
    },
  },
};
