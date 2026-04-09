import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { ALL_BORDER_RADIUS_VALUES, SideMenu } from '@admiral-ds/react-ui';

import { SideMenuPlaygroundTemplate } from './SideMenuPlayground.template';
import { SideMenuAppearTemplate } from './SideMenuAppear.template';
import { SideMenuTopBottomPanelTemplate } from './SideMenuTopBottomPanel.template';
import { SideMenuItemStateTemplate } from './SideMenuItemState.template';
import { SideMenuWithTooltipTemplate } from './SideMenuWithTooltip.template';
import { SideMenuWithMultilineTemplate } from './SideMenuWithMultiline.template';

// Imports of text sources
import SideMenuPlaygroundTemplateRaw from './SideMenuPlayground.template?raw';
import SideMenuAppearTemplateRaw from './SideMenuAppear.template?raw';
import SideMenuTopBottomPanelTemplateRaw from './SideMenuTopBottomPanel.template?raw';
import SideMenuItemStateTemplateRaw from './SideMenuItemState.template?raw';
import SideMenuWithTooltipTemplateRaw from './SideMenuWithTooltip.template?raw';
import SideMenuWithMultilineTemplateRaw from './SideMenuWithMultiline.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => <Desc>SideMenu</Desc>;

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
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18581',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18684',
      },
    ],
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

//<editor-fold desc="Appear">
const AppearStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuAppearTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const AppearExample = {
  render: AppearStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuAppearTemplateRaw,
      },
    },
  },

  name: 'SideMenu. Сценарии появления',
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

//<editor-fold desc="SideMenu. Состояния items">
const SideMenuItemStateStory: StoryFn<typeof SideMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SideMenuItemStateTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SideMenuItemStatePanel = {
  render: SideMenuItemStateStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuItemStateTemplateRaw,
      },
    },
  },

  name: 'SideMenu. Состояния items',
};

//</editor-fold>

//<editor-fold desc="SideMenu. с Tooltip">
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

  name: 'SideMenu. С Tooltip',
};

//</editor-fold>

//<editor-fold desc="SideMenu. с многострочностью">
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

  name: 'SideMenu. С многострочностью',
};

//</editor-fold>
