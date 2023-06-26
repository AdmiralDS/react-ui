import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
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
import SimpleRaw from './Templates/Simple?raw';
import CustomOptionsRaw from './Templates/CustomOptions?raw';
import AsyncSearchSelectRaw from './Templates/AsyncSearchSelect?raw';
import CustomOptionMultiSearchSelectRaw from './Templates/CustomOptionMultiSearchSelect?raw';
import ExpandedHeightMultiSearchSelectRaw from './Templates/ExpandedHeightMultiSearchSelect?raw';
import OptionGroupSearchSelectRaw from './Templates/OptionGroupSearchSelect?raw';
import RenderPropsSearchSelectRaw from './Templates/RenderPropsSearchSelect?raw';
import SimpleMultiSearchSelectRaw from './Templates/SimpleMultiSearchSelect?raw';

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
  return <SimpleTemplate {...cleanUpProps(props)} />;
};

export const SimpleSearchSelectStory = {
  render: SimpleStory,

  parameters: {
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
  },

  name: 'Простой SearchSelect',
};

//</editor-fold>

//<editor-fold desc="SearchSelect с кастомными опциями">
const CustomOptionStory: StoryFn<typeof SelectField> = (props) => {
  return <CustomOptionsTemplate {...cleanUpProps(props)} />;
};

export const CustomOptionSearchSelectStory = {
  render: CustomOptionStory,

  parameters: {
    docs: {
      source: {
        code: CustomOptionsRaw,
      },
      description: {
        story: 'Пример отображения кастомных опций с использованием компонента Option',
      },
    },
  },

  name: 'SearchSelect с кастомными опциями',
};

//</editor-fold>

//<editor-fold desc="SearchSelect с кастомными опциями через renderProps">
const RenderPropsSearchSelectStory: StoryFn<typeof SelectField> = (props) => (
  <RenderPropsSearchSelectTemplate {...cleanUpProps(props)} />
);

export const RenderPropsSearchSelect = {
  render: RenderPropsSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: RenderPropsSearchSelectRaw,
      },
    },
  },

  name: 'SearchSelect с кастомными опциями через renderProps',
};

//</editor-fold>

//<editor-fold desc="SearchSelect с группами">
const OptionGroupSearchSelectStory: StoryFn<typeof SelectField> = () => <OptionGroupSearchSelectTemplate />;

export const OptionGroupSearchSelect = {
  render: OptionGroupSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: OptionGroupSearchSelectRaw,
      },
    },
  },

  name: 'SearchSelect с группами',
};

//</editor-fold>

//<editor-fold desc="Асинхронный SearchSelect">
const AsyncSearchSelectStory: StoryFn<typeof SelectField> = (props) => (
  <AsyncSearchSelectTemplate {...cleanUpProps(props)} />
);

export const AsyncSearchSelect = {
  render: AsyncSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: AsyncSearchSelectRaw,
      },
    },
  },

  name: 'Асинхронный SearchSelect',
};

//</editor-fold>

//<editor-fold desc="Простой MultiSearchSelect">
const SimpleMultiSearchSelectStory: StoryFn<typeof SelectField> = (props) => (
  <SimpleMultiSearchSelectTemplate {...cleanUpProps(props)} />
);

export const SimpleMultiSearchSelect = {
  render: SimpleMultiSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SimpleMultiSearchSelectRaw,
      },
    },
  },

  name: 'Простой MultiSearchSelect',
};

//</editor-fold>

//<editor-fold desc="MultiSearchSelect с увеличенной по умолчанию высотой">
const ExpandedHeightMultiSearchSelectStory: StoryFn<typeof SelectField> = (props) => (
  <ExpandedHeightMultiSearchSelectTemplate {...cleanUpProps(props)} />
);

export const ExpandedHeightMultiSearchSelect = {
  render: ExpandedHeightMultiSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: ExpandedHeightMultiSearchSelectRaw,
      },
    },
  },

  name: 'MultiSearchSelect с увеличенной по умолчанию высотой',
};

//</editor-fold>

//<editor-fold desc="MultiSearchSelect с кастомными опциями">
const CustomOptionMultiSearchSelectStory: StoryFn<typeof SelectField> = () => <CustomOptionMultiSearchSelectTemplate />;

export const CustomOptionMultiSearchSelect = {
  render: CustomOptionMultiSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: CustomOptionMultiSearchSelectRaw,
      },
    },
  },

  name: 'MultiSearchSelect с кастомными опциями',
};
