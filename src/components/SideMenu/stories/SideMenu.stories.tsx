import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { SideMenu } from '@admiral-ds/react-ui';

import { SideMenuPlaygroundTemplate } from './SideMenuPlayground.template';
import { SideMenuWithMediaQueryTemplate } from './SideMenuWithMediaQuery.template';
import { SideMenuTopBottomPanelTemplate } from './SideMenuTopBottomPanel.template';

// Imports of text sources
import SideMenuPlaygroundTemplateRaw from './SideMenuPlayground.template?raw';
import SideMenuWithMediaQueryTemplateRaw from './SideMenuWithMediaQuery.template?raw';
import SideMenuTopBottomPanelTemplateRaw from './SideMenuTopBottomPanel.template?raw';

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
    theme: {
      control: false,
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
