import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { MenuButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import {
  MenuButtonBaseTemplate,
  MenuButtonIconTemplate,
  MenuButtonOptionsTemplate,
  MenuButtonVariantsTemplate,
  MenuButtonWithPanelTemplate,
} from './Templates';

// Imports of text sources
import MenuButtonIconRaw from '!!raw-loader!./Templates/MenuButtonIcon';
import MenuButtonBaseRaw from '!!raw-loader!./Templates/MenuButtonBase';
import MenuButtonOptionsRaw from '!!raw-loader!./Templates/MenuButtonOptions';
import MenuButtonVariantsRaw from '!!raw-loader!./Templates/MenuButtonVariants';
import MenuButtonWithPanelRaw from '!!raw-loader!./Templates/MenuButtonWithPanel';

export default {
  title: 'Admiral-2.1/MenuButton',
  decorators: [withDesign],
  component: MenuButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24517',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24648',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24734',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24784',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24834',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24673',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24759',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24809',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24859',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71085',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71109',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71133',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71157',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71490',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71514',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11005%3A69548',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11047%3A69703',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11047%3A69794',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11047%3A69881',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['primary', 'secondary', 'ghost', 'white'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    alignSelf: {
      options: [undefined, 'auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      control: { type: 'select' },
    },
    items: {
      control: false,
    },
    selected: {
      control: false,
    },
    active: {
      control: false,
    },
    menuWidth: {
      control: { type: 'text' },
    },
    menuMaxHeight: {
      control: false,
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
  },
} as ComponentMeta<typeof MenuButton>;

//<editor-fold desc="MenuButton. Базовый пример.">
const MenuButtonBaseStory: ComponentStory<typeof MenuButton> = (props) => (
  <MenuButtonBaseTemplate items={[]} {...cleanUpProps(props)} />
);

export const MenuButtonBase = MenuButtonBaseStory.bind({});
MenuButtonBase.parameters = {
  docs: {
    source: {
      code: MenuButtonBaseRaw,
    },
  },
};
MenuButtonBase.storyName = 'MenuButton. Базовый пример.';
//</editor-fold>

//<editor-fold desc="MenuButton. Задизейбленные и кастомизированные опции и панель с кнопками">
const MenuButtonOptionsStory: ComponentStory<typeof MenuButton> = (props) => (
  <MenuButtonOptionsTemplate items={[]} {...cleanUpProps(props)} />
);

export const MenuButtonOptions = MenuButtonOptionsStory.bind({});
MenuButtonOptions.parameters = {
  docs: {
    source: {
      code: MenuButtonOptionsRaw,
    },
  },
};
MenuButtonOptions.storyName = 'MenuButton. Задизейбленные и кастомизированные опции и панель с кнопками';
//</editor-fold>

//<editor-fold desc="MenuButton. Размеры и стили.">
const MenuButtonVariantsStory: ComponentStory<typeof MenuButton> = (props) => (
  <MenuButtonVariantsTemplate items={[]} {...cleanUpProps(props)} />
);

export const MenuButtonVariants = MenuButtonVariantsStory.bind({});
MenuButtonVariants.parameters = {
  docs: {
    source: {
      code: MenuButtonVariantsRaw,
    },
  },
};
MenuButtonVariants.storyName = 'MenuButton. Размеры и стили.';
//</editor-fold>

//<editor-fold desc="MenuButton с иконкой">
const MenuButtonIconStory: ComponentStory<typeof MenuButton> = (props) => (
  <MenuButtonIconTemplate items={[]} {...cleanUpProps(props)} />
);

export const MenuButtonIcon = MenuButtonIconStory.bind({});
MenuButtonIcon.parameters = {
  docs: {
    source: {
      code: MenuButtonIconRaw,
    },
  },
};
MenuButtonIcon.storyName = 'MenuButton с иконкой';
//</editor-fold>

//<editor-fold desc="MenuButton с чекбоксами и нижней панелью в выпадающем меню">
const MenuButtonWithPanelStory: ComponentStory<typeof MenuButton> = (props) => (
  <MenuButtonWithPanelTemplate items={[]} {...cleanUpProps(props)} />
);

export const MenuButtonWithPanel = MenuButtonWithPanelStory.bind({});
MenuButtonWithPanel.parameters = {
  docs: {
    source: {
      code: MenuButtonWithPanelRaw,
    },
  },
};
MenuButtonWithPanel.storyName = 'MenuButton с чекбоксами и нижней панелью в выпадающем меню';
//</editor-fold>
