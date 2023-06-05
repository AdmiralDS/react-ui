import * as React from 'react';
import styled from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import {
  SimpleTemplate,
  CategoryTemplate,
  DropMenuTooltipTemplate,
  DropMenuCheckboxTemplate,
  DropMenuRadiobuttonTemplate,
} from '#src/components/DropMenu/Stories/Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import SimpleRaw from '!!raw-loader!./Templates/Simple';
import CategoryRaw from '!!raw-loader!./Templates/Category';
import DropMenuTooltipRaw from '!!raw-loader!./Templates/DropMenuTooltip';
import DropMenuCheckboxRaw from '!!raw-loader!./Templates/DropMenuCheckbox';
import DropMenuRadiobuttonRaw from '!!raw-loader!./Templates/DropMenuRadiobutton';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент Dropdown Menu имеет три размера и может быть с иконкой или без. Высота строки : l - 48px, m - 40px, s -
    32px
  </Desc>
);

export default {
  title: 'Admiral-2.1/DropMenu',
  decorators: [withDesign],
  component: DropMenu,
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
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    multiSelection: {
      control: { type: 'boolean' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    menuWidth: {
      control: { type: 'text' },
    },
    menuMaxHeight: {
      control: { type: 'text' },
    },
    selected: {
      control: { type: 'text' },
    },
    active: {
      control: { type: 'text' },
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
    items: {
      control: false,
    },
    alignMenuRef: {
      control: false,
    },
  },
} as ComponentMeta<typeof DropMenu>;

//<editor-fold desc="Базовый пример">
const SimpleStory: ComponentStory<typeof DropMenu> = (props) => (
  <SimpleTemplate items={[]} renderContentProp={() => false} {...cleanUpProps(props)} />
);

export const SimpleExample = SimpleStory.bind({});
SimpleExample.parameters = {
  docs: {
    source: {
      code: SimpleRaw,
    },
    description: {
      story: 'Базовый пример использования DropMenu',
    },
  },
};
SimpleExample.storyName = 'Базовый пример';
//</editor-fold>

// <editor-fold desc="Пример с группами">
const CategoryStory: ComponentStory<typeof DropMenu> = (props) => (
  <CategoryTemplate items={[]} renderContentProp={() => false} {...cleanUpProps(props)} />
);

export const CategoryExample = CategoryStory.bind({});
CategoryExample.parameters = {
  docs: {
    source: {
      code: CategoryRaw,
    },
    description: {
      story: 'Пример с группировкой опций по категориям',
    },
  },
};
CategoryExample.storyName = 'Пример с группами';
//</editor-fold>

//<editor-fold desc="Пример с Tooltip">
const DropMenuTooltipStory: ComponentStory<typeof DropMenu> = (props) => (
  <DropMenuTooltipTemplate items={[]} renderContentProp={() => false} {...cleanUpProps(props)} />
);

export const DropMenuTooltipExample = DropMenuTooltipStory.bind({});
DropMenuTooltipExample.parameters = {
  docs: {
    source: {
      code: DropMenuTooltipRaw,
    },
    description: {
      story: 'Для того чтобы добавить tooltip к пункту меню, его необходимо обернуть TooltipHoc',
    },
  },
};
DropMenuTooltipExample.storyName = 'Пример с Tooltip';
//</editor-fold>

//<editor-fold desc="Пример с Checkbox">
const DropMenuCheckboxStory: ComponentStory<typeof DropMenu> = (props) => (
  <DropMenuCheckboxTemplate items={[]} renderContentProp={() => false} {...cleanUpProps(props)} />
);

export const DropMenuCheckboxExample = DropMenuCheckboxStory.bind({});
DropMenuCheckboxExample.parameters = {
  docs: {
    source: {
      code: DropMenuCheckboxRaw,
    },
    description: {
      story: 'Пример меню с пунктами, содержащими Checkbox',
    },
  },
};
DropMenuCheckboxExample.storyName = 'Пример с Checkbox';
//</editor-fold>

//<editor-fold desc="Меню с checkbox">
const DropMenuRadiobuttonStory: ComponentStory<typeof DropMenu> = (props) => (
  <DropMenuRadiobuttonTemplate items={[]} renderContentProp={() => false} {...cleanUpProps(props)} />
);

export const DropMenuRadiobuttonExample = DropMenuRadiobuttonStory.bind({});
DropMenuRadiobuttonExample.parameters = {
  docs: {
    source: {
      code: DropMenuRadiobuttonRaw,
    },
    description: {
      story: 'Пример меню с пунктами, содержащими RadioButton',
    },
  },
};
DropMenuRadiobuttonExample.storyName = 'Пример с Radiobutton';
//</editor-fold>
