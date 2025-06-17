import type { Meta, StoryFn } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Select, INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SearchSelectRenderPropsTemplate } from './searchSelect/SearchSelectRenderProps.template';
import { LoadOnScrollTemplate } from './searchSelect/SearchSelectLoadingOnScroll.template';
import { AsyncDataLoadingTemplate } from './searchSelect/AsyncLoading.template';
import { SearchSelectWithFilterTemplate } from './searchSelect/SearchSelectWithFilter.template';
import { SearchSelectCustomOptionTemplate } from './searchSelect/SearchSelectCustomOption.template';
import { SearchSelectRenderValueTemplate } from './searchSelect/SearchSelectRenderValue.template';
import { SearchSelectWithAddButtonTemplate } from './searchSelect/SearchSelectWithAddButton.template';
import { SearchSelectOptionGroupTemplate } from './searchSelect/SearchSelectOptionGroup.template';
import { SearchSelectUncontrolledTemplate } from './searchSelect/SearchSelectUncontrolled.template';
import { SearchSelectMultipleWithAddOptionTemplate } from './searchSelect/SearchSelectMultipleWithAddOption.template';
import { SearchSelectMultipleWithApplyTemplate } from './searchSelect/SearchSelectMultipleWithApply.template';
import { SearchSelectExpandedHeightMultiTemplate } from './searchSelect/SearchSelectExpandedHeightMulti.template';
import { SearchSelectCustomOptionMultiTemplate } from './searchSelect/SearchSelectCustomOptionMulti.template';
import { SearchSelectCustomChipMultiTemplate } from './searchSelect/SearchSelectCustomChipMulti.template';
import { SearchSelectExternalFilterTemplate } from './searchSelect/SearchSelectExternalFilter.template';
import { SearchSelectVirtualScrollTemplate } from './searchSelect/SearchSelectVirtualScroll.template';
import { SearchSelectWithOnChangeHandlerTemplate } from './searchSelect/SearchSelectWithOnChangeHandler.template';
import { SearchSelectWithSelectedOnTopTemplate } from './searchSelect/SearchSelectWithSelectedOnTop.template';
import { SearchSelectWithClearInputTemplate } from './searchSelect/SearchSelectWithClearInput.template';
import { SearchSelectWithChooseAllButtonTemplate } from './searchSelect/SearchSelectWithChooseAllButton.template';

// Imports of text sources
import SearchSelectRenderPropsRaw from './searchSelect/SearchSelectRenderProps.template?raw';
import SearchSelectLoadOnScrollRaw from './searchSelect/SearchSelectLoadingOnScroll.template?raw';
import AsyncDataLoadingTemplateRaw from './searchSelect/AsyncLoading.template?raw';
import SearchSelectWithFilterRaw from './searchSelect/SearchSelectWithFilter.template?raw';
import SearchSelectCustomOptionRaw from './searchSelect/SearchSelectCustomOption.template?raw';
import SearchSelectRenderValueRaw from './searchSelect/SearchSelectRenderValue.template?raw';
import SearchSelectWithAddButtonRaw from './searchSelect/SearchSelectWithAddButton.template?raw';
import SearchSelectWithChooseAllButtonRaw from './searchSelect/SearchSelectWithChooseAllButton.template?raw';
import SearchSelectOptionGroupRaw from './searchSelect/SearchSelectOptionGroup.template?raw';
import SearchSelectUncontrolledRaw from './searchSelect/SearchSelectUncontrolled.template?raw';
import SearchSelectMultipleWithAddOptionRaw from './searchSelect/SearchSelectMultipleWithAddOption.template?raw';
import SearchSelectMultipleWithApplyRaw from './searchSelect/SearchSelectMultipleWithApply.template?raw';
import SearchSelectExpandedHeightMultiRaw from './searchSelect/SearchSelectExpandedHeightMulti.template?raw';
import SearchSelectCustomOptionMultiRaw from './searchSelect/SearchSelectCustomOptionMulti.template?raw';
import SearchSelectCustomChipMultiRaw from './searchSelect/SearchSelectCustomChipMulti.template?raw';
import SearchSelectExternalFilterRaw from './searchSelect/SearchSelectExternalFilter.template?raw';
import SearchSelectVirtualScrollRaw from './searchSelect/SearchSelectVirtualScroll.template?raw';
import SearchSelectWithOnClickHandlerTemplateRaw from './searchSelect/SearchSelectWithOnChangeHandler.template?raw';
import SearchSelectWithSelectedOnTopTemplateRaw from './searchSelect/SearchSelectWithSelectedOnTop.template?raw';
import SearchSelectWithClearInputTemplateRaw from './searchSelect/SearchSelectWithClearInput.template?raw';

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

//<editor-fold desc="Фильтрация опций">
const SearchSelectWithFilterStory: StoryFn<typeof Select> = (props) => <SearchSelectWithFilterTemplate {...props} />;

export const SearchSelectWithFilter = {
  render: SearchSelectWithFilterStory,
  name: 'Фильтрация опций',

  parameters: {
    docs: {
      source: {
        code: SearchSelectWithFilterRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Кастомные опции с кастомной фильтрацией">
const CustomOptionStory: StoryFn<typeof Select> = (props) => <SearchSelectCustomOptionTemplate {...props} />;

export const CustomOption = {
  render: CustomOptionStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectCustomOptionRaw,
      },
    },
  },

  name: 'Кастомные опции с кастомной фильтрацией',
};

//</editor-fold>

//<editor-fold desc="Кастомные опции через renderProps">
const RenderPropsStory: StoryFn<typeof Select> = (props) => {
  return <SearchSelectRenderPropsTemplate {...props} />;
};

export const RenderProps = {
  render: RenderPropsStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectRenderPropsRaw,
      },
    },
  },

  name: 'Кастомные опции через renderProps',
};

//</editor-fold>

//<editor-fold desc="Подгрузка данных при scroll">
const LoadOnScrollStory: StoryFn<typeof Select> = (props) => {
  return <LoadOnScrollTemplate {...props} />;
};

export const LoadOnScroll = {
  render: LoadOnScrollStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectLoadOnScrollRaw,
      },
    },
  },

  name: 'Подгрузка данных при scroll',
};

//</editor-fold>

//<editor-fold desc="Кастомное отображение значения">
const RenderValueStory: StoryFn<typeof Select> = (props) => <SearchSelectRenderValueTemplate {...props} />;

export const RenderValue = {
  render: RenderValueStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectRenderValueRaw,
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
const WithAddButtonStory: StoryFn<typeof Select> = (props) => <SearchSelectWithAddButtonTemplate {...props} />;

export const WithAddButton = {
  render: WithAddButtonStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectWithAddButtonRaw,
      },
    },
  },

  name: 'Нижняя панель с кнопкой "Добавить"',
};

//</editor-fold>

//<editor-fold desc="Нижняя панель с кнопкой "Выбрать все"">
const WithChooseAllButtonStory: StoryFn<typeof Select> = (props) => (
  <SearchSelectWithChooseAllButtonTemplate {...props} />
);

export const WithChooseAllButton = {
  render: WithChooseAllButtonStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectWithChooseAllButtonRaw,
      },
    },
  },

  name: 'Нижняя панель с кнопкой "Выбрать все"',
};

// </editor-fold>

//<editor-fold desc="Использование групп">
const SearchSelectOptionGroupStory: StoryFn<typeof Select> = (props) => <SearchSelectOptionGroupTemplate {...props} />;

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
      <AsyncDataLoadingTemplate {...props} />
    </QueryClientProvider>
  );
};

export const AsyncSearchSelect = {
  render: AsyncSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: AsyncDataLoadingTemplateRaw,
        source: { language: 'tsx' },
      },
    },
  },

  name: 'С запросом данных и фильтрацией на сервере',
};

//</editor-fold>

//<editor-fold desc="SearchSelect. Неконтролируемый">
const UncontrolledSearchSelectStory: StoryFn<typeof Select> = (props) => (
  <SearchSelectUncontrolledTemplate {...props} />
);

export const UncontrolledSearchSelect = {
  render: UncontrolledSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectUncontrolledRaw,
      },
    },
  },

  name: 'SearchSelect. Неконтролируемый',
};

//</editor-fold>

//<editor-fold desc="Multiple с добавлением опций">
const MultipleWithAddOptionStory: StoryFn<typeof Select> = (props) => (
  <SearchSelectMultipleWithAddOptionTemplate {...props} />
);

export const MultipleWithAddOption = {
  render: MultipleWithAddOptionStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectMultipleWithAddOptionRaw,
      },
    },
  },

  name: 'Multiple с добавлением опций',
};

//</editor-fold>

//<editor-fold desc="Multiple с кнопкой "Применить"">
const MultipleWithApplyStory: StoryFn<typeof Select> = (props) => <SearchSelectMultipleWithApplyTemplate {...props} />;

export const MultipleWithApply = {
  render: MultipleWithApplyStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectMultipleWithApplyRaw,
      },
    },
  },

  name: 'Multiple с кнопкой "Применить"',
};

//</editor-fold>

//<editor-fold desc="Multiple с увеличенной по умолчанию высотой">
const ExpandedHeightMultiSearchSelectStory: StoryFn<typeof Select> = (props) => (
  <SearchSelectExpandedHeightMultiTemplate {...props} />
);

export const ExpandedHeightMultiSearchSelect = {
  render: ExpandedHeightMultiSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectExpandedHeightMultiRaw,
      },
    },
  },

  name: 'Multiple с увеличенной по умолчанию высотой',
};

//</editor-fold>

//<editor-fold desc="Multiple с кастомными опциями">
const CustomOptionMultiSearchSelectStory: StoryFn<typeof Select> = (props) => (
  <SearchSelectCustomOptionMultiTemplate {...props} />
);

export const CustomOptionMultiSearchSelect = {
  render: CustomOptionMultiSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectCustomOptionMultiRaw,
      },
    },
  },

  name: 'Multiple с кастомными опциями',
};

//</editor-fold>

//<editor-fold desc="Multiple с кастомным обработчиком удаления чипса">
const CustomChipMultiSearchSelectStory: StoryFn<typeof Select> = (props) => (
  <SearchSelectCustomChipMultiTemplate {...props} />
);

export const CustomChipMultiSearchSelect = {
  render: CustomChipMultiSearchSelectStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectCustomChipMultiRaw,
      },
    },
  },

  name: 'Multiple с кастомным обработчиком удаления чипса',
};
//</editor-fold>

// <editor-fold desc="Внешняя фильтрация">
const ExternalFilterStory: StoryFn<typeof Select> = (props) => <SearchSelectExternalFilterTemplate {...props} />;

export const ExternalFilter = {
  render: ExternalFilterStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectExternalFilterRaw,
      },
    },
  },

  name: 'Внешняя фильтрация',
};
//</editor-fold>

// <editor-fold desc="Пример с обработчиком OnChange">
const VirtualScrollStory: StoryFn<typeof Select> = (props) => <SearchSelectVirtualScrollTemplate {...props} />;

export const VirtualScroll = {
  render: VirtualScrollStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectVirtualScrollRaw,
      },
    },
  },

  name: 'VirtualScroll',
};
//</editor-fold>

// <editor-fold desc="Внешняя фильтрация">
const WithOnChangeHandlerStory: StoryFn<typeof Select> = (props) => (
  <SearchSelectWithOnChangeHandlerTemplate {...props} />
);

export const WithOnChangeHandler = {
  render: WithOnChangeHandlerStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectWithOnClickHandlerTemplateRaw,
      },
    },
  },

  name: 'Multiple с обработчиком события onChange',
};
//</editor-fold>

// <editor-fold desc="Поднятие выбранных опций вверх списка">
const WithSelectedOnTopStory: StoryFn<typeof Select> = (props) => <SearchSelectWithSelectedOnTopTemplate {...props} />;

export const WithSelectedOnTop = {
  render: WithSelectedOnTopStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectWithSelectedOnTopTemplateRaw,
      },
      args: {
        moveSelectedOnTop: true,
      },
    },
  },

  name: 'Multiple с поднятием выбранных опций вверх списка',
};
//</editor-fold>

// <editor-fold desc="Поднятие выбранных опций вверх списка">
const WithClearInputStory: StoryFn<typeof Select> = (props) => <SearchSelectWithClearInputTemplate {...props} />;

export const WithClearInput = {
  render: WithClearInputStory,

  parameters: {
    docs: {
      source: {
        code: SearchSelectWithClearInputTemplateRaw,
      },
    },
  },

  name: 'Multiple с опцией очистки введенного значения',
};
//</editor-fold>
