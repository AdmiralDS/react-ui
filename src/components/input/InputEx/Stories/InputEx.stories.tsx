import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { InputEx, INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { InputExBaseTemplate, InputExCustomTemplate, InputExPrefixSuffixSelectTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import InputExBaseRaw from '!!raw-loader!./Templates/InputExBase';
import InputExPrefixSuffixSelectRaw from '!!raw-loader!./Templates/InputExPrefixSuffixSelect';
import InputExCustomRaw from '!!raw-loader!./Templates/InputExCustom';

export default {
  title: 'Admiral-2.1/Input/InputEx',
  component: InputEx,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60376',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60982',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61046',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    prefixValue: {
      control: { type: 'text' },
    },
    suffixValue: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
    },
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    prefixValueList: {
      control: false,
    },
    suffixValueList: {
      control: false,
    },
    alignDropRef: {
      control: false,
    },
    dropContainerCssMixin: {
      control: false,
    },
    prefixDropContainerStyle: {
      control: false,
    },
    suffixDropContainerStyle: {
      control: false,
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof InputEx>;

//<editor-fold desc="Базовый InputExtended">
const InputExBaseStory: ComponentStory<typeof InputEx> = (props) => <InputExBaseTemplate {...cleanUpProps(props)} />;

export const InputExBase = InputExBaseStory.bind({});
InputExBase.parameters = {
  docs: {
    source: {
      code: InputExBaseRaw,
    },
  },
};
InputExBase.storyName = 'Базовый InputExtended';
//</editor-fold>

//<editor-fold desc="InputExtended с выбором префикса и суффикса">
const InputExPrefixSuffixSelectStory: ComponentStory<typeof InputEx> = (props) => (
  <InputExPrefixSuffixSelectTemplate {...cleanUpProps(props)} />
);

export const InputExPrefixSuffixSelect = InputExPrefixSuffixSelectStory.bind({});
InputExPrefixSuffixSelect.parameters = {
  docs: {
    source: {
      code: InputExPrefixSuffixSelectRaw,
    },
  },
};
InputExPrefixSuffixSelect.storyName = 'InputExtended с выбором префикса и суффикса';
//</editor-fold>

//<editor-fold desc="InputExtended. Кастомизация">
const InputExCustomStory: ComponentStory<typeof InputEx> = (props) => (
  <InputExCustomTemplate {...cleanUpProps(props)} />
);

export const InputExCustom = InputExCustomStory.bind({});
InputExCustom.parameters = {
  docs: {
    source: {
      code: InputExCustomRaw,
    },
  },
};
InputExCustom.storyName = 'InputExtended. Кастомизация';
//</editor-fold>
