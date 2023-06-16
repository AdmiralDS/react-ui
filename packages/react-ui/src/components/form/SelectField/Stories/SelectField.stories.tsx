import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { SelectField, INPUT_DIMENSIONS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  CustomOptionsTemplate,
  SimpleTemplate,
  CustomOptionMultiSearchSelectTemplate,
  ExpandedHeightMultiSearchSelectTemplate,
  SimpleMultiSearchSelectTemplate,
  AsyncSearchSelectTemplate,
  OptionGroupSearchSelectTemplate,
  RenderPropsSearchSelectTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import SimpleRaw from '!!raw-loader!./Templates/Simple';
import CustomOptionsRaw from '!!raw-loader!./Templates/CustomOptions';
import AsyncSearchSelectRaw from '!!raw-loader!./Templates/AsyncSearchSelect';
import CustomOptionMultiSearchSelectRaw from '!!raw-loader!./Templates/CustomOptionMultiSearchSelect';
import ExpandedHeightMultiSearchSelectRaw from '!!raw-loader!./Templates/ExpandedHeightMultiSearchSelect';
import OptionGroupSearchSelectRaw from '!!raw-loader!./Templates/OptionGroupSearchSelect';
import RenderPropsSearchSelectRaw from '!!raw-loader!./Templates/RenderPropsSearchSelect';
import SimpleMultiSearchSelectRaw from '!!raw-loader!./Templates/SimpleMultiSearchSelect';

export default {
  title: 'Admiral-2.1/Form Field/SelectField',
  component: SelectField,
  decorators: [withDesign],
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
} as ComponentMeta<typeof SelectField>;

//<editor-fold desc="Простой SearchSelect">
const SimpleStory: ComponentStory<typeof SelectField> = (props) => {
  return <SimpleTemplate {...cleanUpProps(props)} />;
};
export const SimpleSearchSelectStory = SimpleStory.bind({});
SimpleSearchSelectStory.parameters = {
  docs: {
    source: {
      code: SimpleRaw,
    },
    description: {
      story:
        'Селект с возможностью контекстного поиска среди вариантов.\n' +
        'Используется при большом количестве элементов в списке.\n' +
        '\n' +
        'При клике на любом месте поля (кроме иконки крестика) открывается меню выбора и активируется поле ввода текста. ' +
        'Меню закрывается при повторном клике в поле, либо при клике вне компонента, либо при выборе опции в меню.',
    },
  },
};
SimpleSearchSelectStory.storyName = 'Простой SearchSelect';
//</editor-fold>

//<editor-fold desc="SearchSelect с кастомными опциями">
const CustomOptionStory: ComponentStory<typeof SelectField> = (props) => {
  return <CustomOptionsTemplate {...cleanUpProps(props)} />;
};

export const CustomOptionSearchSelectStory = CustomOptionStory.bind({});
CustomOptionSearchSelectStory.parameters = {
  docs: {
    source: {
      code: CustomOptionsRaw,
    },
    description: {
      story: 'Пример отображения кастомных опций с использованием компонента Option',
    },
  },
};
CustomOptionSearchSelectStory.storyName = 'SearchSelect с кастомными опциями';
//</editor-fold>

//<editor-fold desc="SearchSelect с кастомными опциями через renderProps">
const RenderPropsSearchSelectStory: ComponentStory<typeof SelectField> = (props) => (
  <RenderPropsSearchSelectTemplate {...cleanUpProps(props)} />
);

export const RenderPropsSearchSelect = RenderPropsSearchSelectStory.bind({});
RenderPropsSearchSelect.parameters = {
  docs: {
    source: {
      code: RenderPropsSearchSelectRaw,
    },
  },
};
RenderPropsSearchSelect.storyName = 'SearchSelect с кастомными опциями через renderProps';
//</editor-fold>

//<editor-fold desc="SearchSelect с группами">
const OptionGroupSearchSelectStory: ComponentStory<typeof SelectField> = () => <OptionGroupSearchSelectTemplate />;

export const OptionGroupSearchSelect = OptionGroupSearchSelectStory.bind({});
OptionGroupSearchSelect.parameters = {
  docs: {
    source: {
      code: OptionGroupSearchSelectRaw,
    },
  },
};
OptionGroupSearchSelect.storyName = 'SearchSelect с группами';
//</editor-fold>

//<editor-fold desc="Асинхронный SearchSelect">
const AsyncSearchSelectStory: ComponentStory<typeof SelectField> = (props) => (
  <AsyncSearchSelectTemplate {...cleanUpProps(props)} />
);

export const AsyncSearchSelect = AsyncSearchSelectStory.bind({});
AsyncSearchSelect.parameters = {
  docs: {
    source: {
      code: AsyncSearchSelectRaw,
    },
  },
};
AsyncSearchSelect.storyName = 'Асинхронный SearchSelect';
//</editor-fold>

//<editor-fold desc="Простой MultiSearchSelect">
const SimpleMultiSearchSelectStory: ComponentStory<typeof SelectField> = (props) => (
  <SimpleMultiSearchSelectTemplate {...cleanUpProps(props)} />
);

export const SimpleMultiSearchSelect = SimpleMultiSearchSelectStory.bind({});
SimpleMultiSearchSelect.parameters = {
  docs: {
    source: {
      code: SimpleMultiSearchSelectRaw,
    },
  },
};
SimpleMultiSearchSelect.storyName = 'Простой MultiSearchSelect';
//</editor-fold>

//<editor-fold desc="MultiSearchSelect с увеличенной по умолчанию высотой">
const ExpandedHeightMultiSearchSelectStory: ComponentStory<typeof SelectField> = (props) => (
  <ExpandedHeightMultiSearchSelectTemplate {...cleanUpProps(props)} />
);

export const ExpandedHeightMultiSearchSelect = ExpandedHeightMultiSearchSelectStory.bind({});
ExpandedHeightMultiSearchSelect.parameters = {
  docs: {
    source: {
      code: ExpandedHeightMultiSearchSelectRaw,
    },
  },
};
ExpandedHeightMultiSearchSelect.storyName = 'MultiSearchSelect с увеличенной по умолчанию высотой';
//</editor-fold>

//<editor-fold desc="MultiSearchSelect с кастомными опциями">
const CustomOptionMultiSearchSelectStory: ComponentStory<typeof SelectField> = () => (
  <CustomOptionMultiSearchSelectTemplate />
);

export const CustomOptionMultiSearchSelect = CustomOptionMultiSearchSelectStory.bind({});
CustomOptionMultiSearchSelect.parameters = {
  docs: {
    source: {
      code: CustomOptionMultiSearchSelectRaw,
    },
  },
};
CustomOptionMultiSearchSelect.storyName = 'MultiSearchSelect с кастомными опциями';
//</editor-fold>
