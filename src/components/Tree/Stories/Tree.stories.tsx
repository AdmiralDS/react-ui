import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { Tree } from '@admiral-ds/react-ui';
import { TreeWithCheckboxesTemplate, SimpleTreeTemplate } from './Templates';
import TreeWithCheckboxesRaw from './Templates/TreeWithCheckboxes?raw';
import SimpleTreeRaw from './Templates/SimpleTree?raw';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов. Ширина
    строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней вложенности.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Tree',
  decorators: undefined,
  component: Tree,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=12178%3A70930',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=12236%3A71124',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A12752',
      },
    ],
  },
  args: {
    withCheckbox: true,
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
    },
    withCheckbox: {
      options: [true, false],
      control: { type: 'radio' },
    },
    width: { control: 'number' },
    defaultSelected: { control: 'text' },
    selected: { control: 'text' },
    active: { control: 'text' },
    model: {
      control: false,
    },
  },
} as Meta<typeof Tree>;

const TreeWithCheckboxesStory: StoryFn<typeof Tree> = (props) => (
  <TreeWithCheckboxesTemplate model={[]} {...cleanUpProps(props)} />
);

export const Demo1_Tree = {
  render: TreeWithCheckboxesStory,

  parameters: {
    docs: {
      source: {
        code: TreeWithCheckboxesRaw,
      },
      description: {
        story: 'Контроллируемое дерево с checkbox',
      },
    },
  },

  name: 'Контроллируемое дерево с checkbox',
};

const SimpleTreeStory: StoryFn<typeof Tree> = (props) => <SimpleTreeTemplate model={[]} {...cleanUpProps({...props, onChange: undefined})} />;

export const Demo2_Tree = {
  render: SimpleTreeStory,

  parameters: {
    docs: {
      source: {
        code: SimpleTreeRaw,
      },
      description: {
        story: 'Дерево без checkbox',
      },
    },
  },

  name: 'Дерево без checkbox',
};
