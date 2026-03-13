import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, SideMenu } from '@admiral-ds/react-ui';

import { SideMenuPlaygroundTemplate } from './SideMenuPlayground.template';
import { SideMenuWithMediaQueryTemplate } from './SideMenuWithMediaQuery.template';
import { SideMenuTopBottomPanelTemplate } from './SideMenuTopBottomPanel.template';

import SideMenuPlaygroundTemplateRaw from './SideMenuPlayground.template?raw';
import SideMenuWithMediaQueryTemplateRaw from './SideMenuWithMediaQuery.template?raw';
import SideMenuTopBottomPanelTemplateRaw from './SideMenuTopBottomPanel.template?raw';

export default {
  title: 'Admiral-2.1/SideMenu',
  component: SideMenu,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof SideMenu>;

//<editor-fold desc="SideMenu. Playground">
const SideMenuPlaygroundStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SideMenuPlayground = {
  render: SideMenuPlaygroundStory,

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

//<editor-fold desc="SideMenu. WithMediaQuery">
const SideMenuWithMediaQueryStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuWithMediaQueryTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SideMenuWithMediaQuery = {
  render: SideMenuWithMediaQueryStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuWithMediaQueryTemplateRaw,
      },
    },
  },

  name: 'SideMenu. с closeMediaQuery',
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

  name: 'SideMenu. TopBottomPanelContent',
};

//</editor-fold>
