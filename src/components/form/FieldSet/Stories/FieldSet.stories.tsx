import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { FieldSet, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { PropsType as FieldSetPropsType } from '@admiral-ds/react-ui';

import { FieldSetCheckboxTemplate, FieldSetRadioButtonTemplate } from '#src/components/form/FieldSet/Stories/Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import FieldSetCheckboxRaw from '!!raw-loader!./Templates/FieldSetCheckbox';
import FieldSetRadioButtonRaw from '!!raw-loader!./Templates/FieldSetRadioButton';

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

//<editor-fold desc="">
const FieldSetCheckboxStory: StoryFn<typeof FieldSet> = (props: FieldSetPropsType) => (
  <FieldSetCheckboxTemplate {...cleanUpProps(props)} />
);

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

//<editor-fold desc="">
const FieldSetRadioButtonStory: StoryFn<typeof FieldSet> = (props) => (
  <FieldSetRadioButtonTemplate {...cleanUpProps(props)} />
);

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
