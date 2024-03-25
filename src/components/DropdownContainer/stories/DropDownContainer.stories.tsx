import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { DropdownContainer, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SimpleContainerTemplate } from './SimpleContainer.template';
import { MenuContainerTemplate } from './MenuContainer.template';

// Imports of text sources
import SimpleContainerRaw from './SimpleContainer.template?raw';
import MenuContainerRaw from './MenuContainer.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент Dropdown Menu имеет три размера и может быть с иконкой или без. Высота строки : xl - 48px, m - 40px, s -
    32px
  </Desc>
);
export default {
  title: 'Admiral-2.1/DropDownContainer',
  decorators: undefined,
  component: DropdownContainer,
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
  argTypes: {
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    dropContainerCssMixin: {
      control: false,
    },
    targetRef: {
      control: false,
    },
    targetElement: {
      control: false,
    },
  },
} as Meta<typeof DropdownContainer>;

//<editor-fold desc="Простой контейнер">
const SimpleContainerStory: StoryFn<typeof DropdownContainer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SimpleContainerTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SimpleContainer = {
  render: SimpleContainerStory,

  parameters: {
    docs: {
      source: {
        code: SimpleContainerRaw,
      },
    },
  },

  name: 'Простой контейнер',
};

//</editor-fold>

//<editor-fold desc="Контейнер с меню">
const MenuContainerStory: StoryFn<typeof DropdownContainer> = (props) => <MenuContainerTemplate {...props} />;

export const MenuContainer = {
  render: MenuContainerStory,

  parameters: {
    docs: {
      source: {
        code: MenuContainerRaw,
      },
    },
  },

  name: 'Контейнер с меню',
};
