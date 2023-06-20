import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
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

//<editor-fold desc="Фильтрация опций">
const SearchSelectWithFilterStory: ComponentStory<typeof Select> = (props) => (
  <SearchSelectWithFilterTemplate {...cleanUpProps(props)} />
);

export const SearchSelectWithFilter = SearchSelectWithFilterStory.bind({});
SearchSelectWithFilter.storyName = 'Фильтрация опций';
SearchSelectWithFilter.parameters = {
  docs: {
    source: {
      code: SearchSelectWithFilterRaw,
    },
    description: {
      story: `Фильтрация списка опций осуществляется вызывающим кодом.\n\n В данном примере показан один из возможных способов`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Кастомные опции с кастомной фильтрацией">
const CustomOptionStory: ComponentStory<typeof Select> = (props) => <CustomOptionTemplate {...cleanUpProps(props)} />;

export const CustomOption = CustomOptionStory.bind({});
CustomOption.parameters = {
  docs: {
    source: {
      code: CustomOptionRaw,
    },
  },
};
CustomOption.storyName = 'Кастомные опции с кастомной фильтрацией';
//</editor-fold>

//<editor-fold desc="Кастомные опции через renderProps">
const RenderPropsStory: ComponentStory<typeof Select> = (props) => {
  return <RenderPropsTemplate {...cleanUpProps(props)} />;
};
export const RenderProps = RenderPropsStory.bind({});
RenderProps.parameters = {
  docs: {
    source: {
      code: RenderPropsRaw,
    },
    description: {
      story: 'Пример кастомизации select через renderProps',
    },
  },
};
RenderProps.storyName = 'Кастомные опции через renderProps';
//</editor-fold>

//<editor-fold desc="Подгрузка данных при scroll">
const LoadOnScrollStory: ComponentStory<typeof Select> = (props) => {
  return <LoadOnScrollTemplate {...cleanUpProps(props)} />;
};
export const LoadOnScroll = LoadOnScrollStory.bind({});
LoadOnScroll.parameters = {
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
};
LoadOnScroll.storyName = 'Подгрузка данных при scroll';
//</editor-fold>

//<editor-fold desc="Кастомное отображение значения">
const RenderValueStory: ComponentStory<typeof Select> = (props) => <RenderValueTemplate {...cleanUpProps(props)} />;

export const RenderValue = RenderValueStory.bind({});
RenderValue.parameters = {
  docs: {
    source: {
      code: RenderValueRaw,
    },
  },
};
RenderValue.args = {
  defaultValue: 'Фидель',
};
RenderValue.storyName = 'Кастомное отображение значения';
//</editor-fold>

//<editor-fold desc="Нижняя панель с кнопкой "Добавить"">
const WithAddButtonStory: ComponentStory<typeof Select> = (props) => <WithAddButtonTemplate {...cleanUpProps(props)} />;

export const WithAddButton = WithAddButtonStory.bind({});
WithAddButton.parameters = {
  docs: {
    source: {
      code: WithAddButtonRaw,
    },
  },
};
WithAddButton.storyName = 'Нижняя панель с кнопкой "Добавить"';
//</editor-fold>

//<editor-fold desc="Использование групп">
const SearchSelectOptionGroupStory: ComponentStory<typeof Select> = (props) => (
  <SearchSelectOptionGroupTemplate {...cleanUpProps(props)} />
);

export const SearchSelectOptionGroup = SearchSelectOptionGroupStory.bind({});
SearchSelectOptionGroup.parameters = {
  docs: {
    source: {
      code: SearchSelectOptionGroupRaw,
    },
  },
};
SearchSelectOptionGroup.storyName = 'Использование групп';
//</editor-fold>

//<editor-fold desc="SearchSelect. Асинхронный">
const AsyncSearchSelectStory: ComponentStory<typeof Select> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SelectWithAsyncLoading {...cleanUpProps(props)} />
    </QueryClientProvider>
  );
};
export const AsyncSearchSelect = AsyncSearchSelectStory.bind({});
AsyncSearchSelect.parameters = {
  docs: {
    source: {
      code: SelectWithAsyncLoadingRaw,
      source: { language: 'tsx' },
    },
    description: {
      story: 'Пример демонстрирует подгрузку данных для селекта с фильтром по имени',
    },
  },
};
AsyncSearchSelect.storyName = 'SearchSelect. Асинхронный';
//</editor-fold>

//<editor-fold desc="SearchSelect. Неконтролируемый">
const UncontrolledSearchSelectStory: ComponentStory<typeof Select> = (props) => (
  <UncontrolledSearchSelectTemplate {...cleanUpProps(props)} />
);

export const UncontrolledSearchSelect = UncontrolledSearchSelectStory.bind({});
UncontrolledSearchSelect.parameters = {
  docs: {
    source: {
      code: UncontrolledSearchSelectRaw,
    },
  },
};
UncontrolledSearchSelect.storyName = 'SearchSelect. Неконтролируемый';
//</editor-fold>

//<editor-fold desc="Multiple с добавлением опций">
const MultipleWithAddOptionStory: ComponentStory<typeof Select> = (props) => (
  <MultipleWithAddOptionTemplate {...cleanUpProps(props)} />
);

export const MultipleWithAddOption = MultipleWithAddOptionStory.bind({});
MultipleWithAddOption.parameters = {
  docs: {
    source: {
      code: MultipleWithAddOptionRaw,
    },
  },
};
MultipleWithAddOption.storyName = 'Multiple с добавлением опций';
//</editor-fold>

//<editor-fold desc="Multiple с кнопкой "Применить"">
const MultipleWithApplyStory: ComponentStory<typeof Select> = (props) => (
  <MultipleWithApplyTemplate {...cleanUpProps(props)} />
);

export const MultipleWithApply = MultipleWithApplyStory.bind({});
MultipleWithApply.parameters = {
  docs: {
    source: {
      code: MultipleWithApplyRaw,
    },
  },
};
MultipleWithApply.storyName = 'Multiple с кнопкой "Применить"';
//</editor-fold>

//<editor-fold desc="Multiple с увеличенной по умолчанию высотой">
const ExpandedHeightMultiSearchSelectStory: ComponentStory<typeof Select> = (props) => (
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
ExpandedHeightMultiSearchSelect.storyName = 'Multiple с увеличенной по умолчанию высотой';
//</editor-fold>

//<editor-fold desc="Multiple с кастомными опциями">
const CustomOptionMultiSearchSelectStory: ComponentStory<typeof Select> = (props) => (
  <CustomOptionMultiSearchSelectTemplate {...cleanUpProps(props)} />
);

export const CustomOptionMultiSearchSelect = CustomOptionMultiSearchSelectStory.bind({});
CustomOptionMultiSearchSelect.parameters = {
  docs: {
    source: {
      code: CustomOptionMultiSearchSelectRaw,
    },
  },
};
CustomOptionMultiSearchSelect.storyName = 'Multiple с кастомными опциями';
//</editor-fold>

//<editor-fold desc="Multiple с кастомным обработчиком удаления чипса">
const CustomChipMultiSearchSelectStory: ComponentStory<typeof Select> = (props) => (
  <CustomChipMultiSearchSelectTemplate {...cleanUpProps(props)} />
);

export const CustomChipMultiSearchSelect = CustomChipMultiSearchSelectStory.bind({});
CustomChipMultiSearchSelect.parameters = {
  docs: {
    source: {
      code: CustomChipMultiSearchSelectRaw,
    },
  },
};
CustomChipMultiSearchSelect.storyName = 'Multiple с кастомным обработчиком удаления чипса';
//</editor-fold>
