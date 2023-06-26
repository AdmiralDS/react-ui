import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
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
import SimpleRaw from './Templates/Simple?raw';
import CategoryRaw from './Templates/Category?raw';
import DropMenuTooltipRaw from './Templates/DropMenuTooltip?raw';
import DropMenuCheckboxRaw from './Templates/DropMenuCheckbox?raw';
import DropMenuRadiobuttonRaw from './Templates/DropMenuRadiobutton?raw';

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
  decorators: undefined,
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
    targetElement: {
      control: false,
    },
  },
} as Meta<typeof DropMenu>;

//<editor-fold desc="Базовый пример">
const SimpleStory: StoryFn<typeof DropMenu> = (props) => (
  <SimpleTemplate items={[]} renderContentProp={() => false} {...cleanUpProps(props)} />
);

export const SimpleExample = {
  render: SimpleStory,

  parameters: {
    docs: {
      source: {
        code: SimpleRaw,
      },
      description: {
        story: 'Базовый пример использования DropMenu',
      },
    },
  },

  name: 'Базовый пример',
};

//</editor-fold>

// <editor-fold desc="Пример с группами">
const CategoryStory: StoryFn<typeof DropMenu> = (props) => (
  <CategoryTemplate items={[]} renderContentProp={() => false} {...cleanUpProps(props)} />
);

export const CategoryExample = {
  render: CategoryStory,

  parameters: {
    docs: {
      source: {
        code: CategoryRaw,
      },
      description: {
        story: 'Пример с группировкой опций по категориям',
      },
    },
  },

  name: 'Пример с группами',
};

//</editor-fold>

//<editor-fold desc="Пример с Tooltip">
const DropMenuTooltipStory: StoryFn<typeof DropMenu> = (props) => (
  <DropMenuTooltipTemplate items={[]} renderContentProp={() => false} {...cleanUpProps(props)} />
);

export const DropMenuTooltipExample = {
  render: DropMenuTooltipStory,

  parameters: {
    docs: {
      source: {
        code: DropMenuTooltipRaw,
      },
      description: {
        story: 'Для того чтобы добавить tooltip к пункту меню, его необходимо обернуть TooltipHoc',
      },
    },
  },

  name: 'Пример с Tooltip',
};

//</editor-fold>

//<editor-fold desc="Пример с Checkbox">
const DropMenuCheckboxStory: StoryFn<typeof DropMenu> = (props) => (
  <DropMenuCheckboxTemplate items={[]} renderContentProp={() => false} {...cleanUpProps(props)} />
);

export const DropMenuCheckboxExample = {
  render: DropMenuCheckboxStory,

  parameters: {
    docs: {
      source: {
        code: DropMenuCheckboxRaw,
      },
      description: {
        story: 'Пример меню с пунктами, содержащими Checkbox',
      },
    },
  },

  name: 'Пример с Checkbox',
};

//</editor-fold>

//<editor-fold desc="Меню с checkbox">
const DropMenuRadiobuttonStory: StoryFn<typeof DropMenu> = (props) => (
  <DropMenuRadiobuttonTemplate items={[]} renderContentProp={() => false} {...cleanUpProps(props)} />
);

export const DropMenuRadiobuttonExample = {
  render: DropMenuRadiobuttonStory,

  parameters: {
    docs: {
      source: {
        code: DropMenuRadiobuttonRaw,
      },
      description: {
        story: 'Пример меню с пунктами, содержащими RadioButton',
      },
    },
  },

  name: 'Пример с Radiobutton',
};
