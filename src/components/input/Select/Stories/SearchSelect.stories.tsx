import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Select, INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  CustomOptionTemplate,
  LoadOnScrollTemplate,
  RenderPropsTemplate,
  RenderValueTemplate,
  SearchSelectWithFilterTemplate,
  SelectWithAsyncLoading,
  WithAddButtonTemplate,
  SearchSelectOptionGroupTemplate,
  UncontrolledSearchSelectTemplate,
  MultipleWithAddOptionTemplate,
  MultipleWithApplyTemplate,
  ExpandedHeightMultiSearchSelectTemplate,
  CustomOptionMultiSearchSelectTemplate,
  CustomChipMultiSearchSelectTemplate,
} from './Templates/SearchSelect';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import RenderPropsRaw from '!!raw-loader!./Templates/SearchSelect/RenderProps';
import LoadOnScrollRaw from '!!raw-loader!./Templates/SearchSelect/LoadingOnScroll';
import SelectWithAsyncLoadingRaw from '!!raw-loader!./Templates/SearchSelect/SelectWithAsyncLoading';
import SearchSelectWithFilterRaw from '!!raw-loader!./Templates/SearchSelect/SearchSelectWithFilter';
import CustomOptionRaw from '!!raw-loader!./Templates/SearchSelect/CustomOption';
import RenderValueRaw from '!!raw-loader!./Templates/SearchSelect/RenderValue';
import WithAddButtonRaw from '!!raw-loader!./Templates/SearchSelect/WithAddButton';
import SearchSelectOptionGroupRaw from '!!raw-loader!./Templates/SearchSelect/SearchSelectOptionGroup';
import UncontrolledSearchSelectRaw from '!!raw-loader!./Templates/SearchSelect/UncontrolledSearchSelect';
import MultipleWithAddOptionRaw from '!!raw-loader!./Templates/SearchSelect/MultipleWithAddOption';
import MultipleWithApplyRaw from '!!raw-loader!./Templates/SearchSelect/MultipleWithApply';
import ExpandedHeightMultiSearchSelectRaw from '!!raw-loader!./Templates/SearchSelect/ExpandedHeightMultiSearchSelect';
import CustomOptionMultiSearchSelectRaw from '!!raw-loader!./Templates/SearchSelect/CustomOptionMultiSearchSelect';
import CustomChipMultiSearchSelectRaw from '!!raw-loader!./Templates/SearchSelect/CustomChipMultiSearchSelect';

const queryClient = new QueryClient();

export default {
  title: 'Admiral-2.1/Input/Select/режим "searchSelect"',
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

//<editor-fold desc="Фильтрация опций">
const SearchSelectWithFilterStory: StoryFn<typeof Select> = (props) => (
  <SearchSelectWithFilterTemplate {...cleanUpProps(props)} />
);

export const SearchSelectWithFilter = {
  render: SearchSelectWithFilterStory,
  name: 'Фильтрация опций',

  parameters: {
    docs: {
      source: {
        code: SearchSelectWithFilterRaw,
      },
      description: {
        story: `Фильтрация списка опций осуществляется вызывающим кодом.\n\n В данном примере показан один из возможных способов`,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Кастомные опции с кастомной фильтрацией">
const CustomOptionStory: StoryFn<typeof Select> = (props) => <CustomOptionTemplate {...cleanUpProps(props)} />;

export const CustomOption = {
  render: CustomOptionStory,

  parameters: {
    docs: {
      source: {
        code: CustomOptionRaw,
      },
    },
  },

  name: 'Кастомные опции с кастомной фильтрацией',
};

//</editor-fold>

//<editor-fold desc="Кастомные опции через renderProps">
const RenderPropsStory: StoryFn<typeof Select> = (props) => {
  return <RenderPropsTemplate {...cleanUpProps(props)} />;
};

export const RenderProps = {
  render: RenderPropsStory,

  parameters: {
    docs: {
      source: {
        code: RenderPropsRaw,
      },
      description: {
        story: 'Пример кастомизации select через renderProps',
      },
    },
  },

  name: 'Кастомные опции через renderProps',
};

//</editor-fold>

//<editor-fold desc="Подгрузка данных при scroll">
const LoadOnScrollStory: StoryFn<typeof Select> = (props) => {
  return <LoadOnScrollTemplate {...cleanUpProps(props)} />;
};

export const LoadOnScroll = {
  render: LoadOnScrollStory,

  parameters: {
    docs: {
      source: {
        code: LoadOnScrollRaw,
      },
      description: {
        story:
          'Последним элементом списка опций select добавляется скрытый MenuItem, ' +
          'который отслеживает прокрутку списка до конца, и сообщает об этом ' +
          'вызывающему коду. По этому событию происходит изменение списка опций',
      },
    },
  },

  name: 'Подгрузка данных при scroll',
};

//</editor-fold>

//<editor-fold desc="Кастомное отображение значения">
const RenderValueStory: StoryFn<typeof Select> = (props) => <RenderValueTemplate {...cleanUpProps(props)} />;

export const RenderValue = {
  render: RenderValueStory,

  parameters: {
    docs: {
      source: {
        code: RenderValueRaw,
      },
    },
  },

  args: {
    defaultValue: 'Фидель',
  },

  name: 'Кастомное отображение значения',
};

//</editor-fold>

//<editor-fold desc="Нижняя панель с кнопкой "Добавить"">
const WithAddButtonStory: StoryFn<typeof Select> = (props) => <WithAddButtonTemplate {...cleanUpProps(props)} />;

export const WithAddButton = {
  render: WithAddButtonStory,

  parameters: {
    docs: {
      source: {
        code: WithAddButtonRaw,
      },
    },
  },

  name: 'Нижняя панель с кнопкой "Добавить"',
};

//</editor-fold>

//<editor-fold desc="Использование групп">
const SearchSelectOptionGroupStory: StoryFn<typeof Select> = (props) => (
  <SearchSelectOptionGroupTemplate {...cleanUpProps(props)} />
);

export const SearchSelectOptionGroup = {
  render: SearchSelectOptionGroupStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectOptionGroupRaw,
      },
    },
  },

  name: 'Использование групп',
};

//</editor-fold>

//<editor-fold desc="SearchSelect. Асинхронный">
const AsyncSearchSelectStory: StoryFn<typeof Select> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SelectWithAsyncLoading {...cleanUpProps(props)} />
    </QueryClientProvider>
  );
};

export const AsyncSearchSelect = {
  render: AsyncSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SelectWithAsyncLoadingRaw,
        source: { language: 'tsx' },
      },
      description: {
        story: 'Пример демонстрирует подгрузку данных для селекта с фильтром по имени',
      },
    },
  },

  name: 'SearchSelect. Асинхронный',
};

//</editor-fold>

//<editor-fold desc="SearchSelect. Неконтролируемый">
const UncontrolledSearchSelectStory: StoryFn<typeof Select> = (props) => (
  <UncontrolledSearchSelectTemplate {...cleanUpProps(props)} />
);

export const UncontrolledSearchSelect = {
  render: UncontrolledSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: UncontrolledSearchSelectRaw,
      },
    },
  },

  name: 'SearchSelect. Неконтролируемый',
};

//</editor-fold>

//<editor-fold desc="Multiple с добавлением опций">
const MultipleWithAddOptionStory: StoryFn<typeof Select> = (props) => (
  <MultipleWithAddOptionTemplate {...cleanUpProps(props)} />
);

export const MultipleWithAddOption = {
  render: MultipleWithAddOptionStory,

  parameters: {
    docs: {
      source: {
        code: MultipleWithAddOptionRaw,
      },
    },
  },

  name: 'Multiple с добавлением опций',
};

//</editor-fold>

//<editor-fold desc="Multiple с кнопкой "Применить"">
const MultipleWithApplyStory: StoryFn<typeof Select> = (props) => (
  <MultipleWithApplyTemplate {...cleanUpProps(props)} />
);

export const MultipleWithApply = {
  render: MultipleWithApplyStory,

  parameters: {
    docs: {
      source: {
        code: MultipleWithApplyRaw,
      },
    },
  },

  name: 'Multiple с кнопкой "Применить"',
};

//</editor-fold>

//<editor-fold desc="Multiple с увеличенной по умолчанию высотой">
const ExpandedHeightMultiSearchSelectStory: StoryFn<typeof Select> = (props) => (
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

  name: 'Multiple с увеличенной по умолчанию высотой',
};

//</editor-fold>

//<editor-fold desc="Multiple с кастомными опциями">
const CustomOptionMultiSearchSelectStory: StoryFn<typeof Select> = (props) => (
  <CustomOptionMultiSearchSelectTemplate {...cleanUpProps(props)} />
);

export const CustomOptionMultiSearchSelect = {
  render: CustomOptionMultiSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: CustomOptionMultiSearchSelectRaw,
      },
    },
  },

  name: 'Multiple с кастомными опциями',
};

//</editor-fold>

//<editor-fold desc="Multiple с кастомным обработчиком удаления чипса">
const CustomChipMultiSearchSelectStory: StoryFn<typeof Select> = (props) => (
  <CustomChipMultiSearchSelectTemplate {...cleanUpProps(props)} />
);

export const CustomChipMultiSearchSelect = {
  render: CustomChipMultiSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: CustomChipMultiSearchSelectRaw,
      },
    },
  },

  name: 'Multiple с кастомным обработчиком удаления чипса',
};
