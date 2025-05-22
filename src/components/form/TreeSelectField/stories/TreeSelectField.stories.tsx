import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import {
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
  TreeSelectField,
} from '@admiral-ds/react-ui';

import { TreeSelectFieldPlaygroundTemplate } from './TreeSelectFieldPlayground.template';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import TreeSelectFieldPlaygroundTemplateRaw from './TreeSelectFieldPlayground.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/TreeSelectField',
  component: TreeSelectField,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <DataAttributesDescription />,
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
    extraText: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
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
} as Meta<typeof TreeSelectField>;

//#region "Базовый пример компонент"
const TreeSelectFieldInputStory: StoryFn<typeof TreeSelectField> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TreeSelectFieldPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TreeSelectFieldPlayground = {
  render: TreeSelectFieldInputStory,

  parameters: {
    docs: {
      source: {
        code: TreeSelectFieldPlaygroundTemplateRaw,
      },
    },
  },

  name: 'TreeSelectField Базовый пример компонента',
};
//#endregion
