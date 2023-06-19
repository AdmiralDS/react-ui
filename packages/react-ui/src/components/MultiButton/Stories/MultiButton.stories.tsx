import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { MultiButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import { MultiButtonAppearanceTemplate, MultiButtonDisabledTemplate, MultiButtonIconTemplate } from './Templates';

// Imports of text sources
import MultiButtonIconRaw from '!!raw-loader!./Templates/MultiButtonIcon';
import MultiButtonDisabledRaw from '!!raw-loader!./Templates/MultiButtonDisabled';
import MultiButtonAppearanceRaw from '!!raw-loader!./Templates/MultiButtonAppearance';

export default {
  title: 'Admiral-2.1/MultiButton',
  decorators: [withDesign],
  component: MultiButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17173',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19496',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19544',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19592',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19640',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19520',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19568',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19616',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19664',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19900',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    alignSelf: {
      options: [undefined, 'auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      control: { type: 'select' },
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
    options: {
      control: false,
    },
    items: {
      control: false,
    },
    selected: {
      control: { type: 'text' },
    },
    active: {
      control: { type: 'text' },
    },
    menuMaxHeight: {
      control: { type: 'text' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof MultiButton>;

//<editor-fold desc="MultiButton. Внешний вид.">
const MultiButtonAppearanceStory: ComponentStory<typeof MultiButton> = (props) => (
  <MultiButtonAppearanceTemplate {...cleanUpProps(props)} />
);

export const MultiButtonAppearance = MultiButtonAppearanceStory.bind({});
MultiButtonAppearance.parameters = {
  docs: {
    source: {
      code: MultiButtonAppearanceRaw,
    },
  },
};
MultiButtonAppearance.storyName = 'MultiButton. Внешний вид.';
//</editor-fold>

//<editor-fold desc="MultiButton. Задизейбленность.">
const MultiButtonDisabledStory: ComponentStory<typeof MultiButton> = (props) => (
  <MultiButtonDisabledTemplate {...cleanUpProps(props)} />
);

export const MultiButtonDisabled = MultiButtonDisabledStory.bind({});
MultiButtonDisabled.parameters = {
  docs: {
    source: {
      code: MultiButtonDisabledRaw,
    },
  },
};
MultiButtonDisabled.storyName = 'MultiButton. Задизейбленность.';
//</editor-fold>

//<editor-fold desc="MultiButton с иконкой.">
const MultiButtonIconStory: ComponentStory<typeof MultiButton> = (props) => (
  <MultiButtonIconTemplate {...cleanUpProps(props)} />
);

export const MultiButtonIcon = MultiButtonIconStory.bind({});
MultiButtonIcon.parameters = {
  docs: {
    source: {
      code: MultiButtonIconRaw,
    },
  },
};
MultiButtonIcon.storyName = 'MultiButton с иконкой.';
//</editor-fold>
