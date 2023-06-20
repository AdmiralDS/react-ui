import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ContentSwitcher } from '@admiral-ds/react-ui';

import {
  ContentSwitcherExampleTemplate,
  ContentSwitcherIconOnlyTemplate,
  ContentSwitcherPlaygroundTemplate,
  ContentSwitcherWithBadgeTemplate,
  ContentSwitcherWithIconTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ContentSwitcherPlaygroundRaw from '!!raw-loader!./Templates/ContentSwitcherPlayground';
import ContentSwitcherExampleRaw from '!!raw-loader!./Templates/ContentSwitcherExample';
import ContentSwitcherWithIconRaw from '!!raw-loader!./Templates/ContentSwitcherWithIcon';
import ContentSwitcherIconOnlyRaw from '!!raw-loader!./Templates/ContentSwitcherIconOnly';
import ContentSwitcherWithBadgeRaw from '!!raw-loader!./Templates/ContentSwitcherWithBadge';

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
    children: {
      control: false,
    },
  },
} as Meta<typeof ContentSwitcher>;

//<editor-fold desc="ContentSwitcher. Playground">
const ContentSwitcherPlaygroundStory: StoryFn<typeof ContentSwitcher> = (props) => (
  <ContentSwitcherPlaygroundTemplate {...cleanUpProps(props)} />
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
