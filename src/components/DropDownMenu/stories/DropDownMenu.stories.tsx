import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';

import { DropDownMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { CategoryTemplate } from './Category.template';
import { BaseDropDownTemplate } from './BaseDropDown.template';

// Imports of text sources
import CategoryRaw from './Category.template?raw';
import BaseDropDownRaw from './BaseDropDown.template?raw';

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
  decorators: undefined,
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
    targetRef: {
      control: false,
    },
    setMenuFocus: {
      control: false,
    },
    dropContainerCssMixin: {
      control: false,
    },
    disableAutoAlign: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof DropDownMenu>;

//<editor-fold desc="Базовый пример">
const BaseDropDownStory: StoryFn<typeof DropDownMenu> = ({ targetRef, ...props }) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <BaseDropDownTemplate targetRef={targetRef} CSSCustomProps={CSSCustomProps} {...props} />;
};

export const BaseDropDown = {
  render: BaseDropDownStory,

  parameters: {
    docs: {
      source: {
        code: BaseDropDownRaw,
      },
    },
  },

  name: 'Базовый пример',
};

//</editor-fold>

//<editor-fold desc="Категории">
const CategoryStory: StoryFn<typeof DropDownMenu> = ({ targetRef, ...props }) => (
  <CategoryTemplate targetRef={targetRef} {...props} />
);

export const Category = {
  render: CategoryStory,

  parameters: {
    docs: {
      source: {
        code: CategoryRaw,
      },
    },
  },

  name: 'Категории',
};
