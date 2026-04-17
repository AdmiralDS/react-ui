import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { ALL_BORDER_RADIUS_VALUES, SideMenu } from '@admiral-ds/react-ui';

import { SideMenuPlaygroundTemplate } from './SideMenuPlayground.template';
import { SideMenuSiderTemplate } from './SideMenuSider.template';
import { SideMenuDrawerTemplate } from './SideMenuDrawer.template';
import { SideMenuTopBottomPanelTemplate } from './SideMenuTopBottomPanel.template';
import { SideMenuOptionsMenuItemsTemplate } from './SideMenuOptionsMenuItems.template';
import { SideMenuSearchTemplate } from './SideMenuSearch.template';
import { SideMenuWithTooltipTemplate } from './SideMenuWithTooltip.template';
import { SideMenuWithMultilineTemplate } from './SideMenuWithMultiline.template';
import { SideMenuRenderItemTemplate } from './SideMenuRenderItem.template';
import { SideMenuControlledUncontrolledTemplate } from './SideMenuControlledUncontrolled.template';

// Imports of text sources
import SideMenuPlaygroundTemplateRaw from './SideMenuPlayground.template?raw';
import SideMenuSiderTemplateRaw from './SideMenuSider.template?raw';
import SideMenuDrawerTemplateRaw from './SideMenuDrawer.template?raw';
import SideMenuTopBottomPanelTemplateRaw from './SideMenuTopBottomPanel.template?raw';
import SideMenuOptionsMenuItemsTemplateRaw from './SideMenuOptionsMenuItems.template?raw';
import SideMenuSearchTemplateRaw from './SideMenuSearch.template?raw';
import SideMenuWithTooltipTemplateRaw from './SideMenuWithTooltip.template?raw';
import SideMenuWithMultilineTemplateRaw from './SideMenuWithMultiline.template?raw';
import SideMenuRenderItemTemplateRaw from './SideMenuRenderItem.template?raw';
import SideMenuControlledUncontrolledRaw from './SideMenuControlledUncontrolled.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент SideMenu (боковое меню) используется в интерфейсах приложений или веб-сайтов для обеспечения удобной
    навигации.
  </Desc>
);

export default {
  title: 'Admiral-2.1/SideMenu',
  decorators: undefined,
  component: SideMenu,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
  },
  argTypes: {
    dimension: {
      options: ['m', 'l'],
      control: { type: 'radio' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    ref: {
      control: false,
    },
  },
} as Meta<typeof SideMenu>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const PlaygroundExample = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuPlaygroundTemplateRaw,
      },
    },
  },

  name: 'SideMenu. Playground',
};

//</editor-fold>

//<editor-fold desc="SideMenu. Контролируемое/неконтролируемое состояние">
const SideMenuControlledUncontrolledStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuControlledUncontrolledTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SideMenuControlledUncontrolledPanel = {
  render: SideMenuControlledUncontrolledStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuControlledUncontrolledRaw,
      },
    },
  },

  name: 'SideMenu. Контролируемое/неконтролируемое состояние',
};

//</editor-fold>

//<editor-fold desc="SideMenu and Sider">
const SiderStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuSiderTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SiderExample = {
  render: SiderStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuSiderTemplateRaw,
      },
    },
  },

  name: 'SideMenu. Использование вместе с Sider',
};

//</editor-fold>

//<editor-fold desc="SideMenu and Drawer">
const DrawerStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuDrawerTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DrawerExample = {
  render: DrawerStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuDrawerTemplateRaw,
      },
    },
  },

  name: 'SideMenu. Использование вместе с Sider и Drawer',
};

//</editor-fold>

//<editor-fold desc="SideMenu. TopBottomPanel">
const SideMenuTopBottomPanelStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuTopBottomPanelTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SideMenuTopBottomPanel = {
  render: SideMenuTopBottomPanelStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuTopBottomPanelTemplateRaw,
      },
    },
  },

  name: 'SideMenu. Кастомный контент сверху и снизу меню',
};

//</editor-fold>

//<editor-fold desc="SideMenu. Опции пунктов меню">
const SideMenuOptionsMenuItemsStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuOptionsMenuItemsTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SideMenuOptionsMenuItemsPanel = {
  render: SideMenuOptionsMenuItemsStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuOptionsMenuItemsTemplateRaw,
      },
    },
  },

  name: 'SideMenu. Опции пунктов меню',
};

//<editor-fold desc="Search">
const SearchStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuSearchTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SearchExample = {
  render: SearchStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuSearchTemplateRaw,
      },
    },
  },

  name: 'SideMenu. Фильтрация',
};

//</editor-fold>

//<editor-fold desc="SideMenu. Tooltip">
const SideMenuWithTooltipStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuWithTooltipTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SideMenuWithTooltipPanel = {
  render: SideMenuWithTooltipStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuWithTooltipTemplateRaw,
      },
    },
  },

  name: 'SideMenu. Отображение пунктов с Tooltip',
};

//</editor-fold>

//<editor-fold desc="SideMenu. Multiline">
const SideMenuWithMultilineStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuWithMultilineTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SideMenuWithMultilinePanel = {
  render: SideMenuWithMultilineStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuWithMultilineTemplateRaw,
      },
    },
  },

  name: 'SideMenu. Написание пунктов в несколько строк',
};

//</editor-fold>

//<editor-fold desc="SideMenu. Пример renderItem">
const SideMenuRenderItemStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuRenderItemTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SideMenuRenderItemPanel = {
  render: SideMenuRenderItemStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuRenderItemTemplateRaw,
      },
    },
  },

  name: 'SideMenu. Пример renderItem',
};

//</editor-fold>
