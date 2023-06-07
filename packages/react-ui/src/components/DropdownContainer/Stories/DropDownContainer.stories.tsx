import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { DropdownContainer, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { MenuContainerTemplate, SimpleContainerTemplate } from './Templates';

// Imports of text sources
import SimpleContainerRaw from '!!raw-loader!./Templates/SimpleContainer';
import MenuContainerRaw from '!!raw-loader!./Templates/MenuContainer';

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
  decorators: [withDesign],
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
  },
} as ComponentMeta<typeof DropdownContainer>;

//<editor-fold desc="Простой контейнер">
const SimpleContainerStory: ComponentStory<typeof DropdownContainer> = (args) => <SimpleContainerTemplate {...args} />;

export const SimpleContainer = SimpleContainerStory.bind({});
SimpleContainer.parameters = {
  docs: {
    source: {
      code: SimpleContainerRaw,
    },
  },
};
SimpleContainer.storyName = 'Простой контейнер';
//</editor-fold>

//<editor-fold desc="Контейнер с меню">
const MenuContainerStory: ComponentStory<typeof DropdownContainer> = (args) => <MenuContainerTemplate {...args} />;

export const MenuContainer = MenuContainerStory.bind({});
MenuContainer.parameters = {
  docs: {
    source: {
      code: MenuContainerRaw,
    },
  },
};
MenuContainer.storyName = 'Контейнер с меню';
//</editor-fold>
