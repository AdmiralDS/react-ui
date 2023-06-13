import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { TextButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import {
  TextButtonDimensionTemplate,
  TextButtonPlaygroundTemplate,
  TextButtonStatusTemplate,
} from '#src/components/TextButton/Stories/Templates';

// Imports of text sources
import TextButtonPlaygroundRaw from '!!raw-loader!./Templates/TextButtonPlayground';
import TextButtonDimensionRaw from '!!raw-loader!./Templates/TextButtonDimension';
import TextButtonStatusRaw from '!!raw-loader!./Templates/TextButtonStatus';

export default {
  title: 'Admiral-2.1/Text Button',
  decorators: [withDesign],
  component: TextButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17830',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18134',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18216',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18175',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18257',
      },
    ],
  },
  argTypes: {
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    text: {
      control: { type: 'text' },
    },
    displayRight: {
      control: false,
    },
    iconStart: {
      control: false,
    },
    iconEnd: {
      control: false,
    },
    icon: {
      control: false,
    },
  },
} as ComponentMeta<typeof TextButton>;

//<editor-fold desc="TextButton. Playground">
const TextButtonPlaygroundStory: ComponentStory<typeof TextButton> = (props) => (
  <TextButtonPlaygroundTemplate {...cleanUpProps(props)} />
);

export const TextButtonPlayground = TextButtonPlaygroundStory.bind({});
TextButtonPlayground.parameters = {
  docs: {
    source: {
      code: TextButtonPlaygroundRaw,
    },
  },
};
TextButtonPlayground.storyName = 'TextButton. Playground';
//</editor-fold>

//<editor-fold desc="TextButton. Размеры'">
const TextButtonDimensionStory: ComponentStory<typeof TextButton> = (props) => (
  <TextButtonDimensionTemplate {...cleanUpProps(props)} />
);

export const TextButtonDimension = TextButtonDimensionStory.bind({});
TextButtonDimension.parameters = {
  docs: {
    source: {
      code: TextButtonDimensionRaw,
    },
  },
};
TextButtonDimension.storyName = 'TextButton. Размеры';
//</editor-fold>

//<editor-fold desc="TextButton. Скелетон, загрузка">
const TextButtonStatusStory: ComponentStory<typeof TextButton> = (props) => (
  <TextButtonStatusTemplate {...cleanUpProps(props)} />
);

export const TextButtonStatus = TextButtonStatusStory.bind({});
TextButtonStatus.parameters = {
  docs: {
    source: {
      code: TextButtonStatusRaw,
    },
  },
};
TextButtonStatus.storyName = 'TextButton. Скелетон, загрузка';
//</editor-fold>
