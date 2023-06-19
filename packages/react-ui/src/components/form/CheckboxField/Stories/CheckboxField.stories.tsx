import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { CheckboxField, ALL_DIMENSIONS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { CheckboxFieldBaseTemplate } from '#src/components/form/CheckboxField/Stories/Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import CheckboxFieldBaseRaw from '!!raw-loader!./Templates/CheckboxFieldBase';

export default {
  title: 'Admiral-2.1/Form Field/CheckboxField',
  decorators: [withDesign],
  component: CheckboxField,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21143',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ALL_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    hovered: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    children: {
      control: false,
    },
  },
} as ComponentMeta<typeof CheckboxField>;

//<editor-fold desc="CheckboxField example">
const CheckboxFieldBaseStory: ComponentStory<typeof CheckboxField> = (props) => (
  <CheckboxFieldBaseTemplate {...cleanUpProps(props)} />
);

export const CheckboxFieldBase = CheckboxFieldBaseStory.bind({});
CheckboxFieldBase.parameters = {
  docs: {
    source: {
      code: CheckboxFieldBaseRaw,
    },
  },
};
CheckboxFieldBase.storyName = 'CheckboxField example';
//</editor-fold>
