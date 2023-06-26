import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Select, INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  CustomRenderMultipleValuesTemplate,
  CustomRenderValueTemplate,
  MultiSelectTemplate,
  SelectSimpleTemplate,
  SelectWithTitleTemplate,
} from '#src/components/input/Select/Stories/Templates/Select';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import CustomRenderValueRaw from './Templates/Select/CustomRenderValue?raw';
import CustomRenderMultipleValuesRaw from './Templates/Select/CustomRenderMultipleValues?raw';
import SelectWithTitleRaw from './Templates/Select/SelectWithTitle?raw';
import SelectSimpleRaw from './Templates/Select/SelectSimple?raw';
import MultiSelectRaw from './Templates/Select/MultiSelect?raw';

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

    readOnly: {
      control: { type: 'boolean' },
    },

    disableCopying: {
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
      control: {
        type: 'radio',
        options: ALL_BORDER_RADIUS_VALUES,
      },
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
    as: {
      control: false,
    },
    forwardedAs: {
      control: false,
    },
  },
} as Meta<typeof Select>;

//<editor-fold desc="Select. Простой Select">
const SelectSimpleStory: StoryFn<typeof Select> = (props) => <SelectSimpleTemplate {...cleanUpProps(props)} />;

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
  return <SelectWithTitleTemplate {...cleanUpProps(props)} />;
};

export const SelectWithTitleExample = {
  render: SelectWithTitleStory,

  parameters: {
    docs: {
      source: {
        code: SelectWithTitleRaw,
      },
      description: {
        story:
          'Для того чтобы скрыть tooltip, отображаемый при переполнении, необходимо установить свойство ' +
          'forceHideOverflowTooltip={true}. Title является отображается стандартными средствами браузера, ' +
          'поэтому не кастомизируется.',
      },
    },
  },

  name: 'Отображается Title, tooltip скрыт',
};

//</editor-fold>

//<editor-fold desc="Кастомное отображение значения">
const CustomRenderValueStory: StoryFn<typeof Select> = (props) => {
  return <CustomRenderValueTemplate {...cleanUpProps(props)} />;
};

export const CustomRenderValueExample = {
  render: CustomRenderValueStory,

  args: {
    defaultValue: 'Фидель',
  },

  parameters: {
    docs: {
      source: {
        code: CustomRenderValueRaw,
      },
      description: {
        story:
          'Для кастомного отображения выбранного значения необходимо использовать свойство renderSelectValue.' +
          'Туда передается функция, получающая выбранные значения, и, возвращающая отображаемый ReactNode',
      },
    },
  },

  name: 'Кастомное отображение значения',
};

//</editor-fold>

//<editor-fold desc="Кастомное отображение значения с множественным выбором">
const CustomRenderMultipleValuesStory: StoryFn<typeof Select> = (props) => {
  return <CustomRenderMultipleValuesTemplate {...cleanUpProps(props)} />;
};

export const CustomRenderMultipleValuesExample = {
  render: CustomRenderMultipleValuesStory,

  args: {
    defaultValue: ['Фидель', 'Саша Даль'],
  },

  parameters: {
    docs: {
      source: {
        code: CustomRenderMultipleValuesRaw,
      },
      description: {
        story:
          'Для кастомного отображения выбранного значения необходимо использовать свойство renderSelectValue.' +
          'Туда передается функция, получающая выбранные значения, и, возвращающая массив отображаемых ReactNode',
      },
    },
  },

  name: 'Кастомное отображение значения с множественным выбором',
};

//</editor-fold>

//<editor-fold desc="Select. Простой MultiSelect">
const MultiSelectStory: StoryFn<typeof Select> = (props) => <MultiSelectTemplate {...cleanUpProps(props)} />;

export const MultiSelect = {
  render: MultiSelectStory,

  parameters: {
    docs: {
      source: {
        code: MultiSelectRaw,
      },
    },
  },

  name: 'Select. Простой MultiSelect',
};
