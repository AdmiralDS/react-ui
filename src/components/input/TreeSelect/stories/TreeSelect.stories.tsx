import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import {
  TreeSelect,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import { PlaygroundTemplate } from './Playground.template';
import { PanesRenderTemplate } from './PanesRender.template';
import { ShowChildStrategyTemplate } from './ShowChildStrategy.template';
import { ShowParentStrategyTemplate } from './ShowParentStrategy.template';
import { RowCountLimitsTemplate } from './RowCountLimits.template';

// Imports of text sources
import PlaygroundRaw from './Playground.template?raw';
import PanesRenderRaw from './PanesRender.template?raw';
import ShowChildStrategyRaw from './ShowChildStrategy.template?raw';
import ShowParentStrategyRaw from './ShowParentStrategy.template?raw';
import RowCountLimitsRaw from './RowCountLimits.template?raw';

export default {
  title: 'Admiral-2.1/Input/TreeSelect',
  component: TreeSelect,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      description: 'Делает высоту компонента больше или меньше обычной. \n\nПо умолчанию "m"',
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      description: 'Статус поля',
      options: INPUT_STATUS_VALUES,
      table: {
        type: { summary: '"success" | "error"' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Отображать статус загрузки данных',
    },
    disableCopying: {
      control: { type: 'boolean' },
      description: 'Наличие этого атрибута отключает возможность выделения и копирования значения поля',
      table: {
        type: { summary: 'boolean' },
      },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
      description: 'Отображать иконку очистки поля',
    },
    placeholder: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
    },
    iconsBefore: {
      control: false,
      description: 'Иконки для отображения в начале поля',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    containerRef: {
      control: false,
      description: 'Ref контейнера компонента',
      table: {
        type: { summary: 'RefObject<HTMLDivElement>' },
      },
    },
    theme: {
      control: false,
    },
    ref: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
      description: 'Состояние skeleton',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta<typeof TreeSelect>;

//<editor-fold desc="Базовый пример компонента TreeSelect">
const PlaygroundStory: StoryFn<typeof TreeSelect> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <PlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TextInputPlayground = {
  render: PlaygroundStory,

  parameters: {
    args: {
      displayClearIcon: true,
    },
    docs: {
      source: {
        code: PlaygroundRaw,
      },
    },
  },

  name: 'Базовый пример компонент',
};
//</editor-fold>

//<editor-fold desc="Стратегия SHOW_CHILD">
const ShowChildStrategyStory: StoryFn<typeof TreeSelect> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ShowChildStrategyTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ShowChildStrategy = {
  render: ShowChildStrategyStory,
  parameters: {
    args: {
      displayClearIcon: true,
    },
    docs: {
      source: {
        code: ShowChildStrategyRaw,
      },
    },
  },
  name: 'showCheckedStrategy: SHOW_CHILD',
};
//</editor-fold>

//<editor-fold desc="Стратегия SHOW_PARENT">
const ShowParentStrategyStory: StoryFn<typeof TreeSelect> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ShowParentStrategyTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ShowParentStrategy = {
  render: ShowParentStrategyStory,
  parameters: {
    args: {
      displayClearIcon: true,
    },
    docs: {
      source: {
        code: ShowParentStrategyRaw,
      },
    },
  },
  name: 'showCheckedStrategy: SHOW_PARENT',
};
//</editor-fold>

//<editor-fold desc="Пример с рендером панелей">
const PanesRenderStory: StoryFn<typeof TreeSelect> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <PanesRenderTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TextInputWithIcon = {
  render: PanesRenderStory,

  parameters: {
    docs: {
      source: {
        code: PanesRenderRaw,
      },
    },
  },

  name: 'Кастомные панели в списке',
};
//</editor-fold>

const RowCountStory: StoryFn<typeof TreeSelect> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <RowCountLimitsTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const RowCountLimits = {
  render: RowCountStory,
  name: 'min/maxRowCount',
  parameters: {
    docs: {
      source: {
        code: RowCountLimitsRaw,
      },
    },
  },
};
