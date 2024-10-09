import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { MenuButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { MenuButtonIconTemplate } from './MenuButtonIcon.template';
import { MenuButtonBaseTemplate } from './MenuButtonBase.template';
import { MenuButtonOptionsTemplate } from './MenuButtonOptions.template';
import { MenuButtonVariantsTemplate } from './MenuButtonVariants.template';
import { MenuButtonWithBottomPanelTemplate } from './MenuButtonWithBottomPanel.template';
import { MenuButtonWithTopPanelTemplate } from './MenuButtonWithTopPanel.template';
import { MenuButtonMultiLevelTemplate } from './MenuButtonMultiLevel.template';

// Imports of text sources
import MenuButtonIconRaw from './MenuButtonIcon.template?raw';
import MenuButtonBaseRaw from './MenuButtonBase.template?raw';
import MenuButtonOptionsRaw from './MenuButtonOptions.template?raw';
import MenuButtonVariantsRaw from './MenuButtonVariants.template?raw';
import MenuButtonWithBottomPanelRaw from './MenuButtonWithBottomPanel.template?raw';
import MenuButtonWithTopPanelRaw from './MenuButtonWithTopPanel.template?raw';
import MenuButtonMultiLevelRaw from './MenuButtonMultiLevel.template?raw';

export default {
  title: 'Admiral-2.1/MenuButton',
  decorators: undefined,
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
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'white'],
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
    buttonCssMixin: {
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
} as Meta<typeof MenuButton>;

//<editor-fold desc="MenuButton. Базовый пример.">
const MenuButtonBaseStory: StoryFn<typeof MenuButton> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MenuButtonBaseTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MenuButtonBase = {
  render: MenuButtonBaseStory,

  parameters: {
    docs: {
      source: {
        code: MenuButtonBaseRaw,
      },
    },
  },

  name: 'MenuButton. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="MenuButton. Задизейбленные и кастомизированные опции и панель с кнопками">
const MenuButtonOptionsStory: StoryFn<typeof MenuButton> = (props) => <MenuButtonOptionsTemplate {...props} />;

export const MenuButtonOptions = {
  render: MenuButtonOptionsStory,

  parameters: {
    docs: {
      source: {
        code: MenuButtonOptionsRaw,
      },
    },
  },

  name: 'MenuButton. Задизейбленные и кастомизированные опции и панель с кнопками',
};

//</editor-fold>

//<editor-fold desc="MenuButton. Размеры и стили.">
const MenuButtonVariantsStory: StoryFn<typeof MenuButton> = (props) => <MenuButtonVariantsTemplate {...props} />;

export const MenuButtonVariants = {
  render: MenuButtonVariantsStory,

  parameters: {
    docs: {
      source: {
        code: MenuButtonVariantsRaw,
      },
    },
  },

  name: 'MenuButton. Размеры и стили.',
};

//</editor-fold>

//<editor-fold desc="MenuButton с иконкой">
const MenuButtonIconStory: StoryFn<typeof MenuButton> = (props) => <MenuButtonIconTemplate {...props} />;

export const MenuButtonIcon = {
  render: MenuButtonIconStory,

  parameters: {
    docs: {
      source: {
        code: MenuButtonIconRaw,
      },
    },
  },

  name: 'MenuButton с иконкой',
};

//</editor-fold>

//<editor-fold desc="MenuButton с чекбоксами и нижней панелью в выпадающем меню">
const MenuButtonWithBottomPanelStory: StoryFn<typeof MenuButton> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MenuButtonWithBottomPanelTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MenuButtonWithBottomPanel = {
  render: MenuButtonWithBottomPanelStory,

  parameters: {
    docs: {
      source: {
        code: MenuButtonWithBottomPanelRaw,
      },
    },
  },

  name: 'MenuButton с чекбоксами и нижней панелью в выпадающем меню',
};
//</editor-fold>

//<editor-fold desc="MenuButton с чекбоксами и верхней панелью в выпадающем меню">
const MenuButtonWithTopPanelStory: StoryFn<typeof MenuButton> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MenuButtonWithTopPanelTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MenuButtonWithTopPanel = {
  render: MenuButtonWithTopPanelStory,

  parameters: {
    docs: {
      source: {
        code: MenuButtonWithTopPanelRaw,
      },
    },
  },

  name: 'MenuButton с чекбоксами и верхней панелью в выпадающем меню',
};
//</editor-fold>

//<editor-fold desc="MenuButton с многоуровневым меню">
const MenuButtonMultiLevelStory: StoryFn<typeof MenuButton> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MenuButtonMultiLevelTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MenuButtonMultiLevel = {
  render: MenuButtonMultiLevelStory,

  parameters: {
    docs: {
      source: {
        code: MenuButtonMultiLevelRaw,
      },
    },
  },

  name: 'MenuButton с многоуровневым меню',
};
//</editor-fold>
