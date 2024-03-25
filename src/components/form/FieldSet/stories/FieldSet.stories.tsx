import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';

import { FieldSet, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { FieldSetCheckboxTemplate } from './FieldSetCheckbox.template';
import { FieldSetRadioButtonTemplate } from './FieldSetRadioButton.template';

// Imports of text sources
import FieldSetCheckboxRaw from './FieldSetCheckbox.template?raw';
import FieldSetRadioButtonRaw from './FieldSetRadioButton.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Радиальные кнопки применяются, когда есть список опций, из которых пользователь может выбрать только один вариант
  </Desc>
);

export default {
  title: 'Admiral-2.1/Form Field/FieldSet',
  decorators: undefined,
  component: FieldSet,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    actions: {
      argTypesRegex: 'onChange',
    },
    layout: 'centered',
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    legend: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    extraText: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof FieldSet>;

//<editor-fold desc="Checkbox Fieldset">
const FieldSetCheckboxStory: StoryFn<typeof FieldSet> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <FieldSetCheckboxTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const FieldSetCheckbox = {
  render: FieldSetCheckboxStory,

  parameters: {
    docs: {
      source: {
        code: FieldSetCheckboxRaw,
      },
    },
  },

  name: 'Checkbox Fieldset',
};
//</editor-fold>

//<editor-fold desc="RadioGroup Fieldset">
const FieldSetRadioButtonStory: StoryFn<typeof FieldSet> = (props) => <FieldSetRadioButtonTemplate {...props} />;

export const FieldSetRadioButton = {
  render: FieldSetRadioButtonStory,

  parameters: {
    docs: {
      source: {
        code: FieldSetRadioButtonRaw,
      },
    },
  },

  name: 'RadioGroup Fieldset',
};
//</editor-fold>
