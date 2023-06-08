import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { DropDownMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { BaseDropDownTemplate, CategoryTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import CategoryRaw from '!!raw-loader!./Templates/Category';
import BaseDropDownRaw from '!!raw-loader!./Templates/BaseDropDown';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Deprecated используйте DropMenu. <br />
    Компонент Dropdown Menu имеет три размера и может быть с иконкой или без. Высота строки : xl - 48px, m - 40px, s -
    32px
  </Desc>
);
export default {
  title: 'Deprecated/DropDownMenu (Deprecated используйте DropMenu)',
  decorators: [withDesign],
  component: DropDownMenu,
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
  },
} as ComponentMeta<typeof DropDownMenu>;

//<editor-fold desc="Базовый пример">
const BaseDropDownStory: ComponentStory<typeof DropDownMenu> = ({ targetRef, ...props }) => (
  <BaseDropDownTemplate targetRef={targetRef} {...cleanUpProps(props)} />
);

export const BaseDropDown = BaseDropDownStory.bind({});
BaseDropDown.parameters = {
  docs: {
    source: {
      code: BaseDropDownRaw,
    },
  },
};
BaseDropDown.storyName = 'Базовый пример';
//</editor-fold>

//<editor-fold desc="Категории">
const CategoryStory: ComponentStory<typeof DropDownMenu> = ({ targetRef, ...props }) => (
  <CategoryTemplate targetRef={targetRef} {...cleanUpProps(props)} />
);

export const Category = CategoryStory.bind({});
Category.parameters = {
  docs: {
    source: {
      code: CategoryRaw,
    },
  },
};
Category.storyName = 'Категории';
//</editor-fold>
