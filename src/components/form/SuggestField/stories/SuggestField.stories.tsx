import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import {
  SuggestField,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import { SuggestFieldExampleTemplate } from './/SuggestFieldExample.template';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import SuggestFieldExampleRaw from './SuggestFieldExample.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/SuggestField',
  component: SuggestField,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <DataAttributesDescription />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60520',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60826',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60855',
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
    isLoading: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    maxLength: {
      control: { type: 'number' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    handleInput: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    options: {
      control: false,
    },
    portalTargetRef: {
      control: false,
    },
    targetElement: {
      control: false,
    },
    onSearchButtonClick: {
      control: false,
    },
    dropMaxHeight: {
      control: { type: 'text' },
    },
    icon: {
      control: false,
    },
    icons: {
      control: false,
    },
    locale: {
      control: false,
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
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof SuggestField>;

//<editor-fold desc="SuggestField example">
const SuggestFieldExampleStory: StoryFn<typeof SuggestField> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SuggestFieldExampleTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SuggestFieldExample = {
  render: SuggestFieldExampleStory,

  parameters: {
    docs: {
      source: {
        code: SuggestFieldExampleRaw,
      },
    },
  },

  name: 'SuggestField example',
};
