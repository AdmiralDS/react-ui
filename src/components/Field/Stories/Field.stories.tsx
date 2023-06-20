import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Field, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { FieldWithTextInputTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import FieldWithTextInputRaw from '!!raw-loader!./Templates/FieldWithTextInput';

export default {
  title: 'Admiral-2.1/Atoms/Field',
  component: Field,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  decorators: [withDesign],
  argTypes: {
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    theme: {
      control: false,
    },
    as: {
      control: false,
    },
    forwardedAs: {
      control: false,
    },
    ref: {
      control: false,
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Field>;

//<editor-fold desc="Пример обертывания компонента TextInput">
const FieldWithTextInputStory: ComponentStory<typeof Field> = (props) => (
  <FieldWithTextInputTemplate {...cleanUpProps(props)} />
);

export const FieldWithTextInput = FieldWithTextInputStory.bind({});
FieldWithTextInput.parameters = {
  docs: {
    source: {
      code: FieldWithTextInputRaw,
    },
  },
};
FieldWithTextInput.storyName = 'Пример обертывания компонента TextInput';
//</editor-fold>
