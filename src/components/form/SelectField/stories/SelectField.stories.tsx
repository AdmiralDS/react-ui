import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { SelectField, INPUT_DIMENSIONS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SelectFieldSimpleTemplate } from './SelectFieldSimple.template';
import { SelectFieldCustomOptionsTemplate } from './SelectFieldCustomOptions.template';
import { SelectFieldAsyncSearchSelectTemplate } from './SelectFieldAsyncSearchSelect.template';
import { SelectFieldCustomOptionMultiSearchSelectTemplate } from './SelectFieldCustomOptionMultiSearchSelect.template';
import { SelectFieldExpandedHeightMultiSearchSelectTemplate } from './SelectFieldExpandedHeightMultiSearchSelect.template';
import { SelectFieldOptionGroupSearchSelectTemplate } from './SelectFieldOptionGroupSearchSelect.template';
import { SelectFieldRenderPropsSearchSelectTemplate } from './SelectFieldRenderPropsSearchSelect.template';
import { SelectFieldSimpleMultiSearchSelectTemplate } from './SelectFieldSimpleMultiSearchSelect.template';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import SelectFieldSimpleRaw from './SelectFieldSimple.template?raw';
import SelectFieldCustomOptionsRaw from './SelectFieldCustomOptions.template?raw';
import SelectFieldAsyncSearchSelectRaw from './SelectFieldAsyncSearchSelect.template?raw';
import SelectFieldCustomOptionMultiSearchSelectRaw from './SelectFieldCustomOptionMultiSearchSelect.template?raw';
import SelectFieldExpandedHeightMultiSearchSelectRaw from './SelectFieldExpandedHeightMultiSearchSelect.template?raw';
import SelectFieldOptionGroupSearchSelectRaw from './SelectFieldOptionGroupSearchSelect.template?raw';
import SelectFieldRenderPropsSearchSelectRaw from './SelectFieldRenderPropsSearchSelect.template?raw';
import SelectFieldSimpleMultiSearchSelectRaw from './SelectFieldSimpleMultiSearchSelect.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/SelectField',
  component: SelectField,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <DataAttributesDescription />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A72429',
    },
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },

    disabled: {
      control: { type: 'boolean' },
    },

    isLoading: {
      control: { type: 'boolean' },
    },

    multiple: {
      control: false,
    },

    mode: {
      control: false,
    },

    readOnly: {
      control: { type: 'boolean' },
    },

    disableCopying: {
      control: { type: 'boolean' },
    },

    placeholder: {
      control: { type: 'text' },
    },

    onChange: {
      action: 'onChange',
    },

    defaultHighlighted: {
      control: { type: 'boolean' },
    },

    showCheckbox: {
      control: { type: 'boolean' },
    },

    forceHideOverflowTooltip: {
      control: { type: 'boolean' },
    },

    displayClearIcon: {
      control: { type: 'boolean' },
    },

    displayInline: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    forcedOpen: {
      control: { type: 'boolean' },
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
    portalTargetRef: {
      control: false,
    },
    targetElement: {
      control: false,
    },
    inputTargetRef: {
      control: false,
    },
    icons: {
      control: false,
    },
    onInputChange: {
      control: false,
    },
    onInputKeyDown: {
      control: false,
    },
    onInputKeyUp: {
      control: false,
    },
    onInputKeyDownCapture: {
      control: false,
    },
    onInputKeyUpCapture: {
      control: false,
    },
    locale: {
      control: false,
    },
    virtualScroll: {
      control: false,
    },
    value: {
      control: false,
    },
    inputValue: {
      control: false,
    },
    defaultValue: {
      control: false,
    },
    defaultInputValue: {
      control: false,
    },
    label: {
      control: { type: 'text' },
    },
    extraText: {
      control: { type: 'text' },
    },
    minRowCount: {
      control: { type: 'number' },
    },
    maxRowCount: {
      control: { type: 'number' },
    },
  },
} as Meta<typeof SelectField>;

//<editor-fold desc="Простой SearchSelect">
const SimpleStory: StoryFn<typeof SelectField> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SelectFieldSimpleTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SimpleSearchSelectStory = {
  render: SimpleStory,

  parameters: {
    docs: {
      source: {
        code: SelectFieldSimpleRaw,
      },
    },
  },

  name: 'Простой SearchSelect',
};

//</editor-fold>

//<editor-fold desc="SearchSelect с кастомными опциями">
const CustomOptionStory: StoryFn<typeof SelectField> = (props) => {
  return <SelectFieldCustomOptionsTemplate {...props} />;
};

export const CustomOptionSearchSelectStory = {
  render: CustomOptionStory,

  parameters: {
    docs: {
      source: {
        code: SelectFieldCustomOptionsRaw,
      },
    },
  },

  name: 'SearchSelect с кастомными опциями',
};

//</editor-fold>

//<editor-fold desc="SearchSelect с кастомными опциями через renderProps">
const RenderPropsSearchSelectStory: StoryFn<typeof SelectField> = (props) => (
  <SelectFieldRenderPropsSearchSelectTemplate {...props} />
);

export const RenderPropsSearchSelect = {
  render: RenderPropsSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SelectFieldRenderPropsSearchSelectRaw,
      },
    },
  },

  name: 'SearchSelect с кастомными опциями через renderProps',
};

//</editor-fold>

//<editor-fold desc="SearchSelect с группами">
const OptionGroupSearchSelectStory: StoryFn<typeof SelectField> = () => <SelectFieldOptionGroupSearchSelectTemplate />;

export const OptionGroupSearchSelect = {
  render: OptionGroupSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SelectFieldOptionGroupSearchSelectRaw,
      },
    },
  },

  name: 'SearchSelect с группами',
};

//</editor-fold>

//<editor-fold desc="Асинхронный SearchSelect">
const AsyncSearchSelectStory: StoryFn<typeof SelectField> = (props) => (
  <SelectFieldAsyncSearchSelectTemplate {...props} />
);

export const AsyncSearchSelect = {
  render: AsyncSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SelectFieldAsyncSearchSelectRaw,
      },
    },
  },

  name: 'Асинхронный SearchSelect',
};

//</editor-fold>

//<editor-fold desc="Простой MultiSearchSelect">
const SimpleMultiSearchSelectStory: StoryFn<typeof SelectField> = (props) => (
  <SelectFieldSimpleMultiSearchSelectTemplate {...props} />
);

export const SimpleMultiSearchSelect = {
  render: SimpleMultiSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SelectFieldSimpleMultiSearchSelectRaw,
      },
    },
  },

  name: 'Простой MultiSearchSelect',
};

//</editor-fold>

//<editor-fold desc="MultiSearchSelect с увеличенной по умолчанию высотой">
const ExpandedHeightMultiSearchSelectStory: StoryFn<typeof SelectField> = (props) => (
  <SelectFieldExpandedHeightMultiSearchSelectTemplate {...props} />
);

export const ExpandedHeightMultiSearchSelect = {
  render: ExpandedHeightMultiSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SelectFieldExpandedHeightMultiSearchSelectRaw,
      },
    },
  },

  name: 'MultiSearchSelect с увеличенной по умолчанию высотой',
};

//</editor-fold>

//<editor-fold desc="MultiSearchSelect с кастомными опциями">
const CustomOptionMultiSearchSelectStory: StoryFn<typeof SelectField> = () => (
  <SelectFieldCustomOptionMultiSearchSelectTemplate />
);

export const CustomOptionMultiSearchSelect = {
  render: CustomOptionMultiSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SelectFieldCustomOptionMultiSearchSelectRaw,
      },
    },
  },

  name: 'MultiSearchSelect с кастомными опциями',
};
