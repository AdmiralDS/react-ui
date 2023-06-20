import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

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
import CustomRenderValueRaw from '!!raw-loader!./Templates/Select/CustomRenderValue';
import CustomRenderMultipleValuesRaw from '!!raw-loader!./Templates/Select/CustomRenderMultipleValues';
import SelectWithTitleRaw from '!!raw-loader!./Templates/Select/SelectWithTitle';
import SelectSimpleRaw from '!!raw-loader!./Templates/Select/SelectSimple';
import MultiSelectRaw from '!!raw-loader!./Templates/Select/MultiSelect';

export default {
  title: 'Admiral-2.1/Input/Select/режим "select"',
  component: Select,
  decorators: [withDesign],
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
} as ComponentMeta<typeof Select>;

//<editor-fold desc="Select. Простой Select">
const SelectSimpleStory: ComponentStory<typeof Select> = (props) => <SelectSimpleTemplate {...cleanUpProps(props)} />;

export const SelectSimple = SelectSimpleStory.bind({});
SelectSimple.parameters = {
  docs: {
    source: {
      code: SelectSimpleRaw,
    },
  },
};
SelectSimple.storyName = 'Select. Простой Select';
//</editor-fold>

//<editor-fold desc="Отображается Title, tooltip скрыт">
const SelectWithTitleStory: ComponentStory<typeof Select> = (props) => {
  return <SelectWithTitleTemplate {...cleanUpProps(props)} />;
};
export const SelectWithTitleExample = SelectWithTitleStory.bind({});
SelectWithTitleExample.parameters = {
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
};
SelectWithTitleExample.storyName = 'Отображается Title, tooltip скрыт';
//</editor-fold>

//<editor-fold desc="Кастомное отображение значения">
const CustomRenderValueStory: ComponentStory<typeof Select> = (props) => {
  return <CustomRenderValueTemplate {...cleanUpProps(props)} />;
};

export const CustomRenderValueExample = CustomRenderValueStory.bind({});
CustomRenderValueExample.args = {
  defaultValue: 'Фидель',
};
CustomRenderValueExample.parameters = {
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
};
CustomRenderValueExample.storyName = 'Кастомное отображение значения';
//</editor-fold>

//<editor-fold desc="Кастомное отображение значения с множественным выбором">
const CustomRenderMultipleValuesStory: ComponentStory<typeof Select> = (props) => {
  return <CustomRenderMultipleValuesTemplate {...cleanUpProps(props)} />;
};

export const CustomRenderMultipleValuesExample = CustomRenderMultipleValuesStory.bind({});
CustomRenderMultipleValuesExample.args = {
  defaultValue: ['Фидель', 'Саша Даль'],
};
CustomRenderMultipleValuesExample.parameters = {
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
};
CustomRenderMultipleValuesExample.storyName = 'Кастомное отображение значения с множественным выбором';
//</editor-fold>

//<editor-fold desc="Select. Простой MultiSelect">
const MultiSelectStory: ComponentStory<typeof Select> = (props) => <MultiSelectTemplate {...cleanUpProps(props)} />;

export const MultiSelect = MultiSelectStory.bind({});
MultiSelect.parameters = {
  docs: {
    source: {
      code: MultiSelectRaw,
    },
  },
};
MultiSelect.storyName = 'Select. Простой MultiSelect';
//</editor-fold>
