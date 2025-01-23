import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { Select, INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SelectCustomRenderValueTemplate } from '#src/components/input/Select/stories/select/SelectCustomRenderValue.template';
import { SelectCustomRenderMultipleValuesTemplate } from '#src/components/input/Select/stories/select/SelectCustomRenderMultipleValues.template';
import { SelectWithTitleTemplate } from '#src/components/input/Select/stories/select/SelectWithTitle.template';
import { SelectSimpleTemplate } from '#src/components/input/Select/stories/select/SelectSimple.template';
import { SelectMultiTemplate } from '#src/components/input/Select/stories/select/SelectMulti.template';

// Imports of text sources
import SelectCustomRenderValueRaw from '#src/components/input/Select/stories/select/SelectCustomRenderValue.template?raw';
import SelectCustomRenderMultipleValuesRaw from '#src/components/input/Select/stories/select/SelectCustomRenderMultipleValues.template?raw';
import SelectWithTitleRaw from '#src/components/input/Select/stories/select/SelectWithTitle.template?raw';
import SelectSimpleRaw from '#src/components/input/Select/stories/select/SelectSimple.template?raw';
import SelectMultiRaw from '#src/components/input/Select/stories/select/SelectMulti.template?raw';

export default {
  title: 'Admiral-2.1/Input/Select/режим "select"',
  component: Select,
  decorators: undefined,
  parameters: {
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

    moveSelectedOnTop: {
      control: { type: 'boolean' },
    },

    readOnly: {
      control: { type: 'boolean' },
    },

    showCheckbox: {
      control: { type: 'boolean' },
    },

    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },

    displayClearIcon: {
      control: { type: 'boolean' },
    },

    placeholder: {
      control: { type: 'text' },
    },

    onChange: {
      action: 'onChange',
    },
    themeBorderKind: {
      control: { type: 'radio' },
      options: ALL_BORDER_RADIUS_VALUES,
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    forceHideOverflowTooltip: {
      control: { type: 'boolean' },
    },
    alignDropdown: {
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
    ref: {
      control: false,
    },
    theme: {
      control: false,
    },
  },
} as Meta<typeof Select>;

//<editor-fold desc="Select. Простой Select">
const SelectSimpleStory: StoryFn<typeof Select> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SelectSimpleTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SelectSimple = {
  render: SelectSimpleStory,

  parameters: {
    docs: {
      source: {
        code: SelectSimpleRaw,
      },
    },
  },

  name: 'Select. Простой Select',
};

//</editor-fold>

//<editor-fold desc="Отображается Title, tooltip скрыт">
const SelectWithTitleStory: StoryFn<typeof Select> = (props) => {
  return <SelectWithTitleTemplate {...props} />;
};

export const SelectWithTitleExample = {
  render: SelectWithTitleStory,

  parameters: {
    docs: {
      source: {
        code: SelectWithTitleRaw,
      },
    },
  },

  name: 'Отображается Title, tooltip скрыт',
};

//</editor-fold>

//<editor-fold desc="Кастомное отображение значения">
const CustomRenderValueStory: StoryFn<typeof Select> = (props) => {
  return <SelectCustomRenderValueTemplate {...props} />;
};

export const CustomRenderValueExample = {
  render: CustomRenderValueStory,

  args: {
    defaultValue: 'Фидель',
  },

  parameters: {
    docs: {
      source: {
        code: SelectCustomRenderValueRaw,
      },
    },
  },

  name: 'Кастомное отображение значения',
};

//</editor-fold>

//<editor-fold desc="Кастомное отображение значения с множественным выбором">
const CustomRenderMultipleValuesStory: StoryFn<typeof Select> = (props) => {
  return <SelectCustomRenderMultipleValuesTemplate {...props} />;
};

export const CustomRenderMultipleValuesExample = {
  render: CustomRenderMultipleValuesStory,

  args: {
    defaultValue: ['Фидель', 'Саша Даль'],
  },

  parameters: {
    docs: {
      source: {
        code: SelectCustomRenderMultipleValuesRaw,
      },
    },
  },

  name: 'Кастомное отображение значения с множественным выбором',
};

//</editor-fold>

//<editor-fold desc="Select. Простой MultiSelect">
const MultiSelectStory: StoryFn<typeof Select> = (props) => <SelectMultiTemplate {...props} />;

export const MultiSelect = {
  render: MultiSelectStory,

  parameters: {
    docs: {
      source: {
        code: SelectMultiRaw,
      },
    },
  },

  name: 'Select. Простой MultiSelect',
};
