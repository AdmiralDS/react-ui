import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { IconButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import { IconButtonAppearanceTemplate, IconButtonDimensionTemplate, IconButtonStateTemplate } from './Templates';

// Imports of text sources
import IconButtonDimensionRaw from '!!raw-loader!./Templates/IconButtonDimension';
import IconButtonStateRaw from '!!raw-loader!./Templates/IconButtonState';
import IconButtonAppearanceRaw from '!!raw-loader!./Templates/IconButtonAppearance';

export default {
  title: 'Admiral-2.1/IconButton',
  decorators: [withDesign],
  component: IconButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17787',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18110',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18298',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18322',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18345',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof IconButton>;

const IconButtonDimensionStory: ComponentStory<typeof IconButton> = (props) => (
  <IconButtonDimensionTemplate {...cleanUpProps(props)} />
);

//<editor-fold desc="IconButton. Размеры">
export const IconButtonDimension = IconButtonDimensionStory.bind({});
IconButtonDimension.parameters = {
  docs: {
    source: {
      code: IconButtonDimensionRaw,
    },
  },
};
IconButtonDimension.storyName = 'IconButton. Размеры';
//</editor-fold>

//<editor-fold desc="IconButton. Состояния">
const IconButtonStateStory: ComponentStory<typeof IconButton> = (props) => (
  <IconButtonStateTemplate {...cleanUpProps(props)} />
);

export const IconButtonState = IconButtonStateStory.bind({});
IconButtonState.parameters = {
  docs: {
    source: {
      code: IconButtonStateRaw,
    },
  },
};
IconButtonState.storyName = 'IconButton. Состояния';
//</editor-fold>

//<editor-fold desc="IconButton. Appearance">
const IconButtonAppearanceStory: ComponentStory<typeof IconButton> = (props) => (
  <IconButtonAppearanceTemplate {...cleanUpProps(props)} />
);

export const IconButtonAppearance = IconButtonAppearanceStory.bind({});
IconButtonAppearance.parameters = {
  docs: {
    source: {
      code: IconButtonAppearanceRaw,
    },
  },
};
IconButtonAppearance.storyName = 'IconButton. Appearance';
//</editor-fold>