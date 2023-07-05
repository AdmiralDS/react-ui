import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { Menu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import {
  CardGroupsTemplate,
  LargeNumberOfItemsTemplate,
  MenuWithLockCycleScrollTemplate,
  IconsAndAdditionalTextTemplate,
  SimpleTemplate,
  VirtualScrollTemplate,
  MultiLevelTemplate,
  CheckboxMenuTemplate,
  RadioButtonMenuTemplate,
  MenuWithCustomItemsTemplate,
  TooltipMenuTemplate,
  MultiLineMenuTemplate,
  MenuActionsTwoButtonsTemplate,
  MenuActionsAddUserValueTemplate,
  MenuCheckboxGroupTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import LargeNumberOfItemsRaw from './Templates/LargeNumberOfItems?raw';
import MenuWithLockCycleScrollRaw from './Templates/MenuWithLockCycleScroll?raw';
import VirtualScrollRaw from './Templates/VirtualScroll?raw';
import CardGroupsRaw from './Templates/CardGroups?raw';
import SimpleRaw from './Templates/Simple?raw';
import MultiLevelRaw from './Templates/MultiLevel?raw';
import IconsAndAdditionalTextRaw from './Templates/IconsAndAdditionalText?raw';
import CheckboxMenuRaw from './Templates/CheckboxMenu?raw';
import RadioButtonMenuRaw from './Templates/RadioButtonMenu?raw';
import MenuWithCustomItemsRaw from './Templates/MenuWithCustomItems?raw';
import TooltipMenuRaw from './Templates/TooltipMenu?raw';
import MultiLineMenuRaw from './Templates/MultiLineMenu?raw';
import MenuActionsTwoButtonsRaw from './Templates/MenuActionsTwoButtons?raw';
import MenuActionsAddUserValueRaw from './Templates/MenuActionsAddUserValue?raw';
import MenuCheckboxGroupRaw from './Templates/MenuCheckboxGroup?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент Menu имеет три размера и может быть с иконкой или без. Высота строки : l - 48px, m - 40px, s - 32px
  </Desc>
);
export default {
  title: 'Admiral-2.1/Menu',
  component: Menu,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68931',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68967',
      },
    ],
  },
  args: {
    dimension: 'l',
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    active: {
      control: { type: 'text' },
    },
    selected: {
      control: { type: 'text' },
    },
    defaultSelected: {
      control: { type: 'text' },
    },
    maxHeight: {
      control: { type: 'text' },
    },
    multiSelection: {
      control: { type: 'boolean' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
    rowCount: {
      control: { type: 'number' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Menu>;

//<editor-fold desc="Базовый пример">
const SimpleStory: StoryFn<typeof Menu> = (props) => <SimpleTemplate model={[]} {...cleanUpProps(props)} />;

export const SimpleExample = {
  render: SimpleStory,
  parameters: {
    docs: {
      source: {
        code: SimpleRaw,
      },
      description: {
        story: 'Базовый пример построения Menu.',
      },
    },
  },
  name: 'Базовый пример',
};
//</editor-fold>

//<editor-fold desc="Пример с иконками и дополнительным текстом">
const IconsStory: StoryFn<typeof Menu> = (props) => (
  <IconsAndAdditionalTextTemplate model={[]} {...cleanUpProps(props)} />
);

export const IconsExample = {
  render: IconsStory,
  parameters: {
    docs: {
      source: {
        code: IconsAndAdditionalTextRaw,
      },
      description: {
        story: 'Пример меню с иконками и дополнительным текстом',
      },
    },
  },
  name: 'Пример с иконками и дополнительным текстом',
};
//</editor-fold>

//<editor-fold desc="Пример с группами карт">
const CardGroupsStory: StoryFn<typeof Menu> = (props) => <CardGroupsTemplate model={[]} {...cleanUpProps(props)} />;
export const CardGroupsExample = {
  render: CardGroupsStory,
  parameters: {
    docs: {
      source: {
        code: CardGroupsRaw,
      },
      description: {
        story: 'Пример построения меню с группированием пунктов',
      },
    },
  },
  name: 'Пример с группами карт',
};
//</editor-fold>

//<editor-fold desc="Пример с кастомными пунктами меню">
const MenuWithCustomItemsStory: StoryFn<typeof Menu> = (props) => (
  <MenuWithCustomItemsTemplate model={[]} {...cleanUpProps(props)} />
);
export const MenuWithCustomItemsExample = {
  render: MenuWithCustomItemsStory,
  parameters: {
    docs: {
      source: {
        code: MenuWithCustomItemsRaw,
      },
      description: {
        story: 'Пример меню с использованием собственных пунктов',
      },
    },
  },
  name: 'Пример с кастомными пунктами меню',
};
//</editor-fold>

//<editor-fold desc="Меню с checkbox">
const CheckboxMenuStory: StoryFn<typeof Menu> = (props) => <CheckboxMenuTemplate model={[]} {...cleanUpProps(props)} />;
export const CheckboxMenuExample = {
  render: CheckboxMenuStory,
  parameters: {
    docs: {
      source: {
        code: CheckboxMenuRaw,
      },
      description: {
        story: 'Пример меню с пунктами, содержащими Checkbox.',
      },
    },
  },
  name: 'Меню с checkbox',
};
//</editor-fold>

//<editor-fold desc="Меню с radioButton">
const RadioButtonMenuStory: StoryFn<typeof Menu> = (props) => (
  <RadioButtonMenuTemplate model={[]} {...cleanUpProps(props)} />
);
export const RadioButtonMenuExample = {
  render: RadioButtonMenuStory,
  parameters: {
    docs: {
      source: {
        code: RadioButtonMenuRaw,
      },
      description: {
        story: 'Пример меню с пунктами, содержащими RadioButton.',
      },
    },
  },
  name: 'Меню с RadioButton',
};
//</editor-fold>

//<editor-fold desc="Пример с Tooltip">
const TooltipMenuStory: StoryFn<typeof Menu> = (props) => <TooltipMenuTemplate model={[]} {...cleanUpProps(props)} />;
export const TooltipMenuExample = {
  render: TooltipMenuStory,
  parameters: {
    docs: {
      source: {
        code: TooltipMenuRaw,
      },
      description: {
        story: 'Пример меню с пунктами, имеющими tooltip',
      },
    },
  },
  name: 'Пример с Tooltip',
};
//</editor-fold>

//<editor-fold desc="Пример с многострочными пунктами">
const MultiLineMenuStory: StoryFn<typeof Menu> = (props) => (
  <MultiLineMenuTemplate model={[]} {...cleanUpProps(props)} />
);
export const MultiLineMenuExample = {
  render: MultiLineMenuStory,
  parameters: {
    docs: {
      source: {
        code: MultiLineMenuRaw,
      },
      description: {
        story: 'Пример с многострочными пунктами',
      },
    },
  },
  name: 'Пример с многострочными пунктами',
};
//</editor-fold>

//<editor-fold desc="Пример с Actions с двумя кнопками">
const MenuActionsTwoButtonsStory: StoryFn<typeof Menu> = (props) => (
  <MenuActionsTwoButtonsTemplate model={[]} {...cleanUpProps(props)} />
);
export const MenuActionsTwoButtonsExample = {
  render: MenuActionsTwoButtonsStory,
  parameters: {
    docs: {
      source: {
        code: MenuActionsTwoButtonsRaw,
      },
      description: {
        story: 'Пример с Actions с двумя кнопками',
      },
    },
  },
  name: 'Пример с Actions с двумя кнопками',
};
//</editor-fold>

//<editor-fold desc="Пример с Actions и Search">
const MenuActionsAddUserValueStory: StoryFn<typeof Menu> = (props) => (
  <MenuActionsAddUserValueTemplate model={[]} {...cleanUpProps(props)} />
);
export const MenuActionsAddUserValueExample = {
  render: MenuActionsAddUserValueStory,
  parameters: {
    docs: {
      source: {
        code: MenuActionsAddUserValueRaw,
      },
      description: {
        story: 'Пример с Actions и Search',
      },
    },
  },
  name: 'Пример с Actions и Search',
};
//</editor-fold>

//<editor-fold desc="Пример с CheckboxGroup">
const MenuCheckboxGroupStory: StoryFn<typeof Menu> = (props) => (
  <MenuCheckboxGroupTemplate model={[]} {...cleanUpProps(props)} />
);
export const MenuCheckboxGroupExample = {
  render: MenuCheckboxGroupStory,
  parameters: {
    docs: {
      source: {
        code: MenuCheckboxGroupRaw,
      },
      description: {
        story: 'Пример с CheckboxGroup',
      },
    },
  },
  name: 'Пример с CheckboxGroup',
};
//</editor-fold>

//<editor-fold desc="Пример с большим количеством item">
const LargeNumberOfItemsStory: StoryFn<typeof Menu> = (props) => (
  <LargeNumberOfItemsTemplate model={[]} {...cleanUpProps(props)} />
);
export const LargeNumberOfItemsExample = {
  render: LargeNumberOfItemsStory,
  parameters: {
    docs: {
      source: {
        code: LargeNumberOfItemsRaw,
      },
      description: {
        story: 'Пример с большим количеством item. Для проверки прокрутки меню при быстрой смене активного элемента.',
      },
    },
  },
  name: 'Пример с большим количеством item',
};
//</editor-fold>

//<editor-fold desc="Пример без цикла обхода пунктов">
const MenuWithLockCycleScrollStory: StoryFn<typeof Menu> = (props) => (
  <MenuWithLockCycleScrollTemplate model={[]} {...cleanUpProps(props)} />
);

export const MenuWithLockCycleScrollExample = {
  render: MenuWithLockCycleScrollStory,
  parameters: {
    docs: {
      source: {
        code: MenuWithLockCycleScrollRaw,
      },
      description: {
        story:
          'Для блокировки цикличного обхода пунктов меню можно использовать onForwardCycleApprove и onBackwardCycleApprove.',
      },
    },
  },
  name: 'Пример без цикла обхода пунктов',
};
//</editor-fold>

//<editor-fold desc="Виртуальный скролл">
const VirtualScrollStory: StoryFn<typeof Menu> = (props) => (
  <VirtualScrollTemplate model={[]} {...cleanUpProps(props)} />
);
export const VirtualScrollExample = {
  render: VirtualScrollStory,
  parameters: {
    docs: {
      source: {
        code: VirtualScrollRaw,
      },
      description: {
        story:
          'Для включения виртуального скролла, необходимо передать в параметр virtualScroll объект, ' +
          'содержаний размер 1 элемента меню, для расчета максимальной высоты контейнера меню. ' +
          'Или установить значение "auto". В этом случае максимальная высота будет рассчитана исходя из свойства "dimension"',
      },
    },
  },
  name: 'Виртуальный скролл',
};
//</editor-fold>

//<editor-fold desc="Многоуровневое меню">
const MultiLevelStory: StoryFn<typeof Menu> = (props) => <MultiLevelTemplate model={[]} {...cleanUpProps(props)} />;
export const MultiLevelExample = {
  render: MultiLevelStory,
  parameters: {
    docs: {
      source: {
        code: MultiLevelRaw,
      },
      description: {
        story:
          'Для включения виртуального скролла, необходимо передать в параметр virtualScroll объект, ' +
          'содержаний размер 1 элемента меню, для расчета максимальной высоты контейнера меню. ' +
          'Или установить значение "auto". В этом случае максимальная высота будет рассчитана исходя из свойства "dimension"',
      },
    },
  },
  name: 'Многоуровневое меню',
};
//</editor-fold>
