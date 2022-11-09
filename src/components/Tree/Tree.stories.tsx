import React, { useState } from 'react';
import styled from 'styled-components';
import { Tree } from '#src/components/Tree';
import { RenderOptionProps, TreeItemProps, TreeNode } from '#src/components/Tree/TreeNode';
import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { T } from '#src/components/T';
import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';

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
  decorators: [withDesign],
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
  },
} as ComponentMeta<typeof Tree>;

const demo1_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: RenderOptionProps) => (
      <TreeNode
        key={'1'}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 1'}
        {...options}
      />
    ),
    id: '1',
    checked: false,
    children: [
      {
        render: (options: RenderOptionProps) => (
          <TreeNode
            key={'1-3'}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 3'}
            {...options}
          />
        ),
        id: '1-3',
        checked: false,
        children: [
          {
            render: (options: RenderOptionProps) => (
              <TreeNode
                key={'2-2'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 2'}
                {...options}
              />
            ),
            id: '2-2',
          },
          {
            render: (options: RenderOptionProps) => (
              <TreeNode
                key={'2-3'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 3'}
                {...options}
              />
            ),
            id: '2-3',
          },
          {
            render: (options: RenderOptionProps) => (
              <TreeNode
                key={'2-4'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 4'}
                {...options}
              />
            ),
            id: '2-4',
          },
          {
            render: (options: RenderOptionProps) => (
              <TreeNode
                key={'2-5'}
                icon={FolderSolid}
                label={'Текст  строки с чекбоксом, третий уровень компонента 5'}
                {...options}
              />
            ),
            id: '2-5',
            checked: false,
            children: [
              {
                render: (options: RenderOptionProps) => (
                  <TreeNode
                    key={'3-1'}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 1'}
                    {...options}
                  />
                ),
                id: '3-1',
                checked: false,
              },
              {
                render: (options: RenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 2'}
                    key={'3-2'}
                  />
                ),
                id: '3-2',
                checked: false,
              },
              {
                render: (options: RenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={
                      'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                      '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n' +
                      '    вложенности.'
                    }
                    key={'3-3'}
                  />
                ),
                id: '3-3',
                checked: false,
              },
              {
                render: (options: RenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 4'}
                    key={'3-4'}
                  />
                ),
                id: '3-4',
                checked: false,
                children: [
                  {
                    render: (options: RenderOptionProps) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 1'}
                        key={'4-1'}
                      />
                    ),
                    id: '4-1',
                    checked: false,
                  },
                  {
                    render: (options: RenderOptionProps) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 2'}
                        key={'4-2'}
                      />
                    ),
                    id: '4-2',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1-1',
        checked: false,
        render: (options: RenderOptionProps) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 1'}
            key={'1-1'}
          />
        ),
      },
      {
        id: '1-2',
        checked: false,
        render: (options: RenderOptionProps) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 2'}
            key={'1-2'}
          />
        ),
      },
    ],
  },
  {
    render: (options: RenderOptionProps) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 2'}
        key={'2'}
      />
    ),
    id: '2',
    checked: false,
  },
  {
    render: (options: RenderOptionProps) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 3'}
        key={'3'}
      />
    ),
    id: '3',
  },
  {
    render: (options: RenderOptionProps) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 4'}
        key={'4'}
      />
    ),
    id: '4',
    disabled: true,
  },
];

const Demo1: ComponentStory<typeof Tree> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);
  const [dataList, setDataList] = useState<TreeItemProps[]>(demo1_TreeModel);

  return (
    <>
      <Tree {...cleanProps} model={dataList} onChange={(dataList) => setDataList(dataList)} />
    </>
  );
};

const demo2_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: RenderOptionProps) => (
      <TreeNode key={'1'} {...options}>
        <T as="div" style={{ paddingTop: 2 }} font="Subtitle/Subtitle 2">
          Элемент дерева с кастомным заголовком
        </T>
      </TreeNode>
    ),
    id: '1',
    expanded: true,
    children: [
      {
        render: (options: RenderOptionProps) => (
          <TreeNode key={'1-1'} icon={FolderSolid} label={'Второй уровень 1'} {...options} />
        ),
        id: '1-1',
        checked: false,
        children: [
          {
            render: (options: RenderOptionProps) => (
              <TreeNode key={'1-1-1'} icon={FolderSolid} label={'Третий уровень 1'} {...options} />
            ),
            id: '1-1-1',
          },
          {
            render: (options: RenderOptionProps) => (
              <TreeNode key={'1-1-2'} icon={FolderSolid} label={'Третий уровень 2'} {...options} />
            ),
            id: '1-1-2',
          },
        ],
      },
    ],
  },
  {
    render: (options: RenderOptionProps) => (
      <TreeNode key={'4'} icon={FolderSolid} label={'Первый уровень 2'} {...options} />
    ),
    id: '4',
  },
];

const Demo2: ComponentStory<typeof Tree> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);
  const [activeItem, setActiveItem] = useState<string | undefined>('1');

  return (
    <>
      <Tree
        {...cleanProps}
        defaultSelected={'1-1'}
        withCheckbox={false}
        model={demo2_TreeModel}
        active={activeItem}
        onActivateItem={setActiveItem}
      />
    </>
  );
};

export const Demo1_Tree = Demo1.bind({});
Demo1_Tree.args = {};
Demo1_Tree.storyName = 'Контроллируемое дерево с checkbox';

export const Demo2_Tree = Demo2.bind({});
Demo2_Tree.args = {};
Demo2_Tree.storyName = 'Дерево без checkbox';
