import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { ContentSwitcher } from '@admiral-ds/react-ui';

import {
  ContentSwitcherExampleTemplate,
  ContentSwitcherIconOnlyTemplate,
  ContentSwitcherPlaygroundTemplate,
  ContentSwitcherWithBadgeTemplate,
  ContentSwitcherWithIconTemplate,
} from './Templates';

// Imports of text sources
import ContentSwitcherPlaygroundRaw from '!!raw-loader!./Templates/ContentSwitcherPlayground';
import ContentSwitcherExampleRaw from '!!raw-loader!./Templates/ContentSwitcherExample';
import ContentSwitcherWithIconRaw from '!!raw-loader!./Templates/ContentSwitcherWithIcon';
import ContentSwitcherIconOnlyRaw from '!!raw-loader!./Templates/ContentSwitcherIconOnly';
import ContentSwitcherWithBadgeRaw from '!!raw-loader!./Templates/ContentSwitcherWithBadge';

export default {
  title: 'Admiral-2.1/ContentSwitcher',
  decorators: [withDesign],
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
} as ComponentMeta<typeof ContentSwitcher>;

//<editor-fold desc="ContentSwitcher. Playground">
const ContentSwitcherPlaygroundStory: ComponentStory<typeof ContentSwitcher> = (props) => (
  <ContentSwitcherPlaygroundTemplate {...props} />
);

export const ContentSwitcherPlayground = ContentSwitcherPlaygroundStory.bind({});
ContentSwitcherPlayground.parameters = {
  docs: {
    source: {
      code: ContentSwitcherPlaygroundRaw,
    },
  },
};
ContentSwitcherPlayground.storyName = 'ContentSwitcher. Playground';
ContentSwitcherPlayground.args = {};
//</editor-fold>

//<editor-fold desc="Базовый пример">
const ContentSwitcherStory: ComponentStory<typeof ContentSwitcher> = () => <ContentSwitcherExampleTemplate />;

export const ContentSwitcherExample = ContentSwitcherStory.bind({});
ContentSwitcherExample.parameters = {
  docs: {
    source: {
      code: ContentSwitcherExampleRaw,
    },
  },
};
ContentSwitcherExample.storyName = 'Базовый пример';
//</editor-fold>

//<editor-fold desc="ContentSwitcher с иконками">
const ContentSwitcherWithIconStory: ComponentStory<typeof ContentSwitcher> = () => <ContentSwitcherWithIconTemplate />;

export const ContentSwitcherWithIcon = ContentSwitcherWithIconStory.bind({});
ContentSwitcherWithIcon.parameters = {
  docs: {
    source: {
      code: ContentSwitcherWithIconRaw,
    },
  },
};
ContentSwitcherWithIcon.storyName = 'ContentSwitcher с иконками';
//</editor-fold>

//<editor-fold desc="ContentSwitcher только с иконками">
const ContentSwitcherIconOnlyStory: ComponentStory<typeof ContentSwitcher> = () => <ContentSwitcherIconOnlyTemplate />;

export const ContentSwitcherIconOnly = ContentSwitcherIconOnlyStory.bind({});
ContentSwitcherIconOnly.parameters = {
  docs: {
    source: {
      code: ContentSwitcherIconOnlyRaw,
    },
  },
};
ContentSwitcherIconOnly.storyName = 'ContentSwitcher только с иконками';
//</editor-fold>

//<editor-fold desc="ContentSwitcher с Badge">
const ContentSwitcherWithBadgeStory: ComponentStory<typeof ContentSwitcher> = () => (
  <ContentSwitcherWithBadgeTemplate />
);

export const ContentSwitcherWithBadge = ContentSwitcherWithBadgeStory.bind({});
ContentSwitcherWithBadge.parameters = {
  docs: {
    source: {
      code: ContentSwitcherWithBadgeRaw,
    },
  },
};
ContentSwitcherWithBadge.storyName = 'ContentSwitcher с Badge';
//</editor-fold>
