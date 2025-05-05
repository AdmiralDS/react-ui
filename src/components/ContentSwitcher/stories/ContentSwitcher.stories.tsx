import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ContentSwitcher } from '@admiral-ds/react-ui';

import { ContentSwitcherPlaygroundTemplate } from './ContentSwitcherPlayground.template';
import { ContentSwitcherExampleTemplate } from './ContentSwitcherExample.template';
import { ContentSwitcherWithIconTemplate } from './ContentSwitcherWithIcon.template';
import { ContentSwitcherIconOnlyTemplate } from './ContentSwitcherIconOnly.template';
import { ContentSwitcherWithBadgeTemplate } from './ContentSwitcherWithBadge.template';
import { ContentSwitcherAdaptiveFillTemplate } from './ContentSwitcherAdaptiveFill.template';

// Imports of text sources
import ContentSwitcherPlaygroundRaw from './ContentSwitcherPlayground.template?raw';
import ContentSwitcherExampleRaw from './ContentSwitcherExample.template?raw';
import ContentSwitcherWithIconRaw from './ContentSwitcherWithIcon.template?raw';
import ContentSwitcherIconOnlyRaw from './ContentSwitcherIconOnly.template?raw';
import ContentSwitcherWithBadgeRaw from './ContentSwitcherWithBadge.template?raw';
import ContentSwitcherAdaptiveFillRaw from './ContentSwitcherAdaptiveFill.template?raw';

export default {
  title: 'Admiral-2.1/ContentSwitcher',
  decorators: undefined,
  component: ContentSwitcher,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70132',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70157',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70180',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70203',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70134',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70226',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70249',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70273',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    adaptive: {
      options: ['fill'],
      control: { type: 'radio' },
    },
    children: {
      control: false,
    },
  },
} as Meta<typeof ContentSwitcher>;

//<editor-fold desc="ContentSwitcher. Playground">
const ContentSwitcherPlaygroundStory: StoryFn<typeof ContentSwitcher> = (props) => (
  <ContentSwitcherPlaygroundTemplate {...props} />
);

export const ContentSwitcherPlayground = {
  render: ContentSwitcherPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: ContentSwitcherPlaygroundRaw,
      },
    },
  },

  name: 'ContentSwitcher. Playground',
};

//</editor-fold>

//<editor-fold desc="Базовый пример">
const ContentSwitcherStory: StoryFn<typeof ContentSwitcher> = () => <ContentSwitcherExampleTemplate />;

export const ContentSwitcherExample = {
  render: ContentSwitcherStory,

  parameters: {
    docs: {
      source: {
        code: ContentSwitcherExampleRaw,
      },
    },
  },

  name: 'Базовый пример',
};

//</editor-fold>

//<editor-fold desc="ContentSwitcher с иконками">
const ContentSwitcherWithIconStory: StoryFn<typeof ContentSwitcher> = () => <ContentSwitcherWithIconTemplate />;

export const ContentSwitcherWithIcon = {
  render: ContentSwitcherWithIconStory,

  parameters: {
    docs: {
      source: {
        code: ContentSwitcherWithIconRaw,
      },
    },
  },

  name: 'ContentSwitcher с иконками',
};

//</editor-fold>

//<editor-fold desc="ContentSwitcher только с иконками">
const ContentSwitcherIconOnlyStory: StoryFn<typeof ContentSwitcher> = () => <ContentSwitcherIconOnlyTemplate />;

export const ContentSwitcherIconOnly = {
  render: ContentSwitcherIconOnlyStory,

  parameters: {
    docs: {
      source: {
        code: ContentSwitcherIconOnlyRaw,
      },
    },
  },

  name: 'ContentSwitcher только с иконками',
};

//</editor-fold>

//<editor-fold desc="ContentSwitcher с Badge">
const ContentSwitcherWithBadgeStory: StoryFn<typeof ContentSwitcher> = () => <ContentSwitcherWithBadgeTemplate />;

export const ContentSwitcherWithBadge = {
  render: ContentSwitcherWithBadgeStory,

  parameters: {
    docs: {
      source: {
        code: ContentSwitcherWithBadgeRaw,
      },
    },
  },

  name: 'ContentSwitcher с Badge',
};

//<editor-fold desc="ContentSwitcher adaptive fill">
const ContentSwitcherAdaptiveFillStory: StoryFn<typeof ContentSwitcher> = () => <ContentSwitcherAdaptiveFillTemplate />;

export const ContentSwitcherAdaptiveFill = {
  render: ContentSwitcherAdaptiveFillStory,

  parameters: {
    docs: {
      source: {
        code: ContentSwitcherAdaptiveFillRaw,
      },
    },
  },

  name: 'ContentSwitcher adaptive fill',
};
