import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { SideMenu } from '@admiral-ds/react-ui';

import { SideMenuPlaygroundTemplate } from './SideMenuPlayground.template';

// Imports of text sources
import SideMenuPlaygroundRaw from './SideMenuPlayground.template?raw';

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;
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
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: [
        'light',
        'info',
        'warning',
        'success',
        'error',
        'grey',
        'dark',
        'lightInactive',
        'lightDisable',
        'white',
        'whiteInactive',
        'whiteDisable',
        'whiteBlue',
      ],
      control: { type: 'select' },
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
const PlaygroundStory: StoryFn<typeof SideMenu> = (props) => <SideMenuPlaygroundTemplate {...props} />;

export const PlaygroundExample = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: SideMenuPlaygroundRaw,
      },
    },
  },

  name: 'Playground',
};

//</editor-fold>
