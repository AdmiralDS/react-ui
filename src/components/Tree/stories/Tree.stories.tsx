import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';

import { Tree } from '@admiral-ds/react-ui';

import { TreeWithCheckboxesTemplate } from './TreeWithCheckboxes.template';
import { TreeSimpleTemplate } from './TreeSimple.template';
import { TreeUncontrolledTemplate } from './TreeUncontrolled.template';
import { TreeWithControlCheckCountTemplate } from './TreeWithControlCheckCount.template';
import { TreeWithOnChangeHandlerTemplate } from './TreeWithOnChangeHandler.template';

// Imports of text sources
import TreeWithCheckboxesRaw from './TreeWithCheckboxes.template?raw';
import TreeSimpleRaw from './TreeSimple.template?raw';
import TreeUncontrolledRaw from './TreeUncontrolled.template?raw';
import TreeWithControlCheckCountRaw from './TreeWithControlCheckCount.template?raw';
import TreeWithOnChangeHandlerRaw from './TreeWithOnChangeHandler.template?raw';

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

const TreeWithCheckboxesStory: StoryFn<typeof Tree> = (props) => <TreeWithCheckboxesTemplate {...props} />;

export const Demo1_Tree = {
  render: TreeWithCheckboxesStory,

  parameters: {
    docs: {
      source: {
        code: TreeWithCheckboxesRaw,
      },
    },
  },

  name: 'Контролируемое дерево с checkbox',
};

const SimpleTreeStory: StoryFn<typeof Tree> = (props) => <TreeSimpleTemplate {...props} />;

export const Demo2_Tree = {
  render: SimpleTreeStory,

  parameters: {
    docs: {
      source: {
        code: TreeSimpleRaw,
      },
    },
  },

  name: 'Дерево без checkbox c кастомизацией размеров',
};

const TreeUncontrolledStory: StoryFn<typeof Tree> = (props) => <TreeUncontrolledTemplate {...props} />;

export const TreeUncontrolledExample = {
  render: TreeUncontrolledStory,

  parameters: {
    docs: {
      source: {
        code: TreeUncontrolledRaw,
      },
    },
  },

  name: 'Неконтролируемое дерево',
};

const TreeWithControlCheckCountStory: StoryFn<typeof Tree> = (props) => (
  <TreeWithControlCheckCountTemplate {...props} />
);

export const TreeWithControlCheckCountExample = {
  render: TreeWithControlCheckCountStory,

  parameters: {
    docs: {
      source: {
        code: TreeWithControlCheckCountRaw,
      },
    },
  },

  name: 'С контролем количества выбранных',
};

const TreeWithOnChangeHandlerStory: StoryFn<typeof Tree> = (props) => <TreeWithOnChangeHandlerTemplate {...props} />;

export const TreeWithOnChangeHandlerExample = {
  render: TreeWithOnChangeHandlerStory,

  parameters: {
    docs: {
      source: {
        code: TreeWithOnChangeHandlerRaw,
      },
    },
  },

  name: 'Обработка событий onExpandChange и onCheckedChange',
};
