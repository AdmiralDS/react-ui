import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Menu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import { withDesign } from 'storybook-addon-designs';
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
import LargeNumberOfItemsRaw from '!!raw-loader!./Templates/LargeNumberOfItems';
import MenuWithLockCycleScrollRaw from '!!raw-loader!./Templates/MenuWithLockCycleScroll';
import VirtualScrollRaw from '!!raw-loader!./Templates/VirtualScroll';
import CardGroupsRaw from '!!raw-loader!./Templates/CardGroups';
import SimpleRaw from '!!raw-loader!./Templates/Simple';
import MultiLevelRaw from '!!raw-loader!./Templates/MultiLevel';
import IconsAndAdditionalTextRaw from '!!raw-loader!./Templates/IconsAndAdditionalText';
import CheckboxMenuRaw from '!!raw-loader!./Templates/CheckboxMenu';
import RadioButtonMenuRaw from '!!raw-loader!./Templates/RadioButtonMenu';
import MenuWithCustomItemsRaw from '!!raw-loader!./Templates/MenuWithCustomItems';
import TooltipMenuRaw from '!!raw-loader!./Templates/TooltipMenu';
import MultiLineMenuRaw from '!!raw-loader!./Templates/MultiLineMenu';
import MenuActionsTwoButtonsRaw from '!!raw-loader!./Templates/MenuActionsTwoButtons';
import MenuActionsAddUserValueRaw from '!!raw-loader!./Templates/MenuActionsAddUserValue';
import MenuCheckboxGroupRaw from '!!raw-loader!./Templates/MenuCheckboxGroup';

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
  decorators: [withDesign],
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
} as ComponentMeta<typeof Menu>;

//<editor-fold desc="Базовый пример">
const SimpleStory: ComponentStory<typeof Menu> = (props) => <SimpleTemplate model={[]} {...cleanUpProps(props)} />;

export const SimpleExample = SimpleStory.bind({});
SimpleExample.parameters = {
  docs: {
    source: {
      code: SimpleRaw,
    },
    description: {
      story: 'Базовый пример построения Menu.',
    },
  },
};
SimpleExample.storyName = 'Базовый пример';
//</editor-fold>

//<editor-fold desc="Пример с иконками и дополнительным текстом">
const IconsStory: ComponentStory<typeof Menu> = (props) => (
  <IconsAndAdditionalTextTemplate model={[]} {...cleanUpProps(props)} />
);

export const IconsExample = IconsStory.bind({});
IconsExample.parameters = {
  docs: {
    source: {
      code: IconsAndAdditionalTextRaw,
    },
    description: {
      story: 'Пример меню с иконками и дополнительным текстом',
    },
  },
};
IconsExample.storyName = 'Пример с иконками и дополнительным текстом';
//</editor-fold>

//<editor-fold desc="Пример с группами карт">
const CardGroupsStory: ComponentStory<typeof Menu> = (props) => (
  <CardGroupsTemplate model={[]} {...cleanUpProps(props)} />
);
export const CardGroupsExample = CardGroupsStory.bind({});
CardGroupsExample.parameters = {
  docs: {
    source: {
      code: CardGroupsRaw,
    },
    description: {
      story: 'Пример построения меню с группированием пунктов',
    },
  },
};
CardGroupsExample.storyName = 'Пример с группами карт';
//</editor-fold>

//<editor-fold desc="Пример с кастомными пунктами меню">
const MenuWithCustomItemsStory: ComponentStory<typeof Menu> = (props) => (
  <MenuWithCustomItemsTemplate model={[]} {...cleanUpProps(props)} />
);
export const MenuWithCustomItemsExample = MenuWithCustomItemsStory.bind({});
MenuWithCustomItemsExample.parameters = {
  docs: {
    source: {
      code: MenuWithCustomItemsRaw,
    },
    description: {
      story: 'Пример меню с использованием собственных пунктов',
    },
  },
};
MenuWithCustomItemsExample.storyName = 'Пример с кастомными пунктами меню';
//</editor-fold>

//<editor-fold desc="Меню с checkbox">
const CheckboxMenuStory: ComponentStory<typeof Menu> = (props) => (
  <CheckboxMenuTemplate model={[]} {...cleanUpProps(props)} />
);
export const CheckboxMenuExample = CheckboxMenuStory.bind({});
CheckboxMenuExample.parameters = {
  docs: {
    source: {
      code: CheckboxMenuRaw,
    },
    description: {
      story: 'Пример меню с пунктами, содержащими Checkbox.',
    },
  },
};
CheckboxMenuExample.storyName = 'Меню с checkbox';
//</editor-fold>

//<editor-fold desc="Меню с radioButton">
const RadioButtonMenuStory: ComponentStory<typeof Menu> = (props) => (
  <RadioButtonMenuTemplate model={[]} {...cleanUpProps(props)} />
);
export const RadioButtonMenuExample = RadioButtonMenuStory.bind({});
RadioButtonMenuExample.parameters = {
  docs: {
    source: {
      code: RadioButtonMenuRaw,
    },
    description: {
      story: 'Пример меню с пунктами, содержащими RadioButton.',
    },
  },
};
RadioButtonMenuExample.storyName = 'Меню с RadioButton';
//</editor-fold>

//<editor-fold desc="Пример с Tooltip">
const TooltipMenuStory: ComponentStory<typeof Menu> = (props) => (
  <TooltipMenuTemplate model={[]} {...cleanUpProps(props)} />
);
export const TooltipMenuExample = TooltipMenuStory.bind({});
TooltipMenuExample.parameters = {
  docs: {
    source: {
      code: TooltipMenuRaw,
    },
    description: {
      story: 'Пример меню с пунктами, имеющими tooltip',
    },
  },
};
TooltipMenuExample.storyName = 'Пример с Tooltip';
//</editor-fold>

//<editor-fold desc="Пример с многострочными пунктами">
const MultiLineMenuStory: ComponentStory<typeof Menu> = (props) => (
  <MultiLineMenuTemplate model={[]} {...cleanUpProps(props)} />
);
export const MultiLineMenuExample = MultiLineMenuStory.bind({});
MultiLineMenuExample.parameters = {
  docs: {
    source: {
      code: MultiLineMenuRaw,
    },
    description: {
      story: 'Пример с многострочными пунктами',
    },
  },
};
MultiLineMenuExample.storyName = 'Пример с многострочными пунктами';
//</editor-fold>

//<editor-fold desc="Пример с Actions с двумя кнопками">
const MenuActionsTwoButtonsStory: ComponentStory<typeof Menu> = (props) => (
  <MenuActionsTwoButtonsTemplate model={[]} {...cleanUpProps(props)} />
);
export const MenuActionsTwoButtonsExample = MenuActionsTwoButtonsStory.bind({});
MenuActionsTwoButtonsExample.parameters = {
  docs: {
    source: {
      code: MenuActionsTwoButtonsRaw,
    },
    description: {
      story: 'Пример с Actions с двумя кнопками',
    },
  },
};
MenuActionsTwoButtonsExample.storyName = 'Пример с Actions с двумя кнопками';
//</editor-fold>

//<editor-fold desc="Пример с Actions и Search">
const MenuActionsAddUserValueStory: ComponentStory<typeof Menu> = (props) => (
  <MenuActionsAddUserValueTemplate model={[]} {...cleanUpProps(props)} />
);
export const MenuActionsAddUserValueExample = MenuActionsAddUserValueStory.bind({});
MenuActionsAddUserValueExample.parameters = {
  docs: {
    source: {
      code: MenuActionsAddUserValueRaw,
    },
    description: {
      story: 'Пример с Actions и Search',
    },
  },
};
MenuActionsAddUserValueExample.storyName = 'Пример с Actions и Search';
//</editor-fold>

//<editor-fold desc="Пример с CheckboxGroup">
const MenuCheckboxGroupStory: ComponentStory<typeof Menu> = (props) => (
  <MenuCheckboxGroupTemplate model={[]} {...cleanUpProps(props)} />
);
export const MenuCheckboxGroupExample = MenuCheckboxGroupStory.bind({});
MenuCheckboxGroupExample.parameters = {
  docs: {
    source: {
      code: MenuCheckboxGroupRaw,
    },
    description: {
      story: 'Пример с CheckboxGroup',
    },
  },
};
MenuCheckboxGroupExample.storyName = 'Пример с CheckboxGroup';
//</editor-fold>

//<editor-fold desc="Пример с большим количеством item">
const LargeNumberOfItemsStory: ComponentStory<typeof Menu> = (props) => (
  <LargeNumberOfItemsTemplate model={[]} {...cleanUpProps(props)} />
);
export const LargeNumberOfItemsExample = LargeNumberOfItemsStory.bind({});
LargeNumberOfItemsExample.parameters = {
  docs: {
    source: {
      code: LargeNumberOfItemsRaw,
    },
    description: {
      story: 'Пример с большим количеством item. Для проверки прокрутки меню при быстрой смене активного элемента.',
    },
  },
};
LargeNumberOfItemsExample.storyName = 'Пример с большим количеством item';
//</editor-fold>

//<editor-fold desc="Пример без цикла обхода пунктов">
const MenuWithLockCycleScrollStory: ComponentStory<typeof Menu> = (props) => (
  <MenuWithLockCycleScrollTemplate model={[]} {...cleanUpProps(props)} />
);

export const MenuWithLockCycleScrollExample = MenuWithLockCycleScrollStory.bind({});
MenuWithLockCycleScrollExample.parameters = {
  docs: {
    source: {
      code: MenuWithLockCycleScrollRaw,
    },
    description: {
      story:
        'Для блокировки цикличного обхода пунктов меню можно использовать onForwardCycleApprove и onBackwardCycleApprove.',
    },
  },
};
MenuWithLockCycleScrollExample.storyName = 'Пример без цикла обхода пунктов';
//</editor-fold>

//<editor-fold desc="Виртуальный скролл">
const VirtualScrollStory: ComponentStory<typeof Menu> = (props) => (
  <VirtualScrollTemplate model={[]} {...cleanUpProps(props)} />
);
export const VirtualScrollExample = VirtualScrollStory.bind({});
VirtualScrollExample.parameters = {
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
};
VirtualScrollExample.storyName = 'Виртуальный скролл';
//</editor-fold>

//<editor-fold desc="Многоуровневое меню">
const MultiLevelStory: ComponentStory<typeof Menu> = (props) => (
  <MultiLevelTemplate model={[]} {...cleanUpProps(props)} />
);
export const MultiLevelExample = MultiLevelStory.bind({});
MultiLevelExample.parameters = {
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
};
MultiLevelExample.storyName = 'Многоуровневое меню';
//</editor-fold>
