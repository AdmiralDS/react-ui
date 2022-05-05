import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { SelectTree } from '#src/components/SelectTree';
import { SelectTreeNodeProps } from '#src/components/SelectTree/SelectTreeNode';
import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';
import RNBLogoLight from './RNBLogoLight.svg';
import { T } from '#src/components/T';

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
  title: 'Admiral-2.1/SelectTree',
  decorators: [withDesign],
  component: SelectTree,
  parameters: {
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
  argTypes: {
    dimension: {
      options: ['m', 's'],
    },
    expandAll: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof SelectTree>;

const selectTreeListM = [
  {
    label: (
      <T as="div" style={{ marginTop: -2 }} font="Subtitle/Subtitle 2">
        Текст заголовка, первый уровень компонента, размер M 40 1
      </T>
    ),
    id: '1',
    status: 'unchecked',
    children: [
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 1',
        id: '1-1',
        status: 'unchecked',
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 2',
        id: '1-2',
        status: 'unchecked',
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 3',
        id: '1-3',
        status: 'unchecked',
        children: [
          {
            label: <img src={RNBLogoLight} alt={''} />,
            id: '2-1',
            status: 'unchecked',
          },
          { label: 'Текст  строки, третий уровень компонента 2', id: '2-2' },
          { label: 'Текст  строки, третий уровень компонента 3', id: '2-3' },
          { label: 'Текст  строки, третий уровень компонента 4', id: '2-4' },
          {
            label: 'Текст  строки с чекбоксом, третий уровень компонента 5',
            id: '2-5',
            status: 'unchecked',
            children: [
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 1', id: '3-1', status: 'unchecked' },
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 2', id: '3-2', status: 'unchecked' },
              {
                label:
                  'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                  '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n' +
                  '    вложенности.',
                id: '3-3',
                status: 'unchecked',
              },
              {
                label: 'Текст  строки с чекбоксом, четвертый уровень компонента 4',
                id: '3-4',
                status: 'unchecked',
                children: [
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 1', id: '4-1', status: 'unchecked' },
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 2', id: '4-2', status: 'unchecked' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 2', id: '2', status: 'unchecked' },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 3', id: '3' },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 4', id: '4' },
];

const selectTreeListS = [
  {
    label: 'Текст заголовка, первый уровень компонента, размер S 32 1',
    id: '1',
    status: 'unchecked',
    children: [
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 1',
        id: '1-1',
        status: 'unchecked',
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 2',
        id: '1-2',
        status: 'unchecked',
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 3',
        id: '1-3',
        status: 'unchecked',
        children: [
          {
            label: <img src={RNBLogoLight} alt={''} />,
            id: '2-1',
            status: 'unchecked',
          },
          { label: 'Текст  строки, третий уровень компонента 2', id: '2-2' },
          {
            label: 'Текст  строки с чекбоксом, третий уровень компонента 3',
            id: '2-3',
            status: 'unchecked',
            children: [
              {
                label:
                  'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                  '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n' +
                  '    вложенности.',
                id: '3-1',
                status: 'unchecked',
              },
              {
                label: 'Текст  строки с чекбоксом, четвертый уровень компонента 2',
                id: '3-2',
                status: 'unchecked',
                children: [
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 1', id: '4-1', status: 'unchecked' },
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 2', id: '4-2', status: 'unchecked' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { label: 'Текст заголовка, первый уровень компонента, размер S 32 2', id: '2', status: 'unchecked' },
];

const treeViewList = [
  {
    label: 'Текст заголовка, первый уровень компонента, размер M 40 1',
    id: '1',
    icon: <FolderSolid />,
    children: [
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 1',
        id: '1-1',
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 2',
        id: '1-2',
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 3',
        id: '1-3',
        icon: <FolderSolid />,
        children: [
          {
            label: <img src={RNBLogoLight} alt={''} />,
            id: '2-1',
            icon: <FolderSolid />,
          },
          { label: 'Текст  строки, третий уровень компонента 2', id: '2-2', icon: <FolderSolid /> },
          { label: 'Текст  строки, третий уровень компонента 3', id: '2-3', icon: <FolderSolid /> },
          { label: 'Текст  строки, третий уровень компонента 4', id: '2-4', icon: <FolderSolid /> },
          {
            label: 'Текст  строки с чекбоксом, третий уровень компонента 5',
            id: '2-5',
            icon: <FolderSolid />,
            children: [
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 1', id: '3-1', icon: <FolderSolid /> },
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 2', id: '3-2', icon: <FolderSolid /> },
              {
                label:
                  'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                  '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n' +
                  '    вложенности.',
                id: '3-3',
                icon: <FolderSolid />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Текст заголовка, первый уровень компонента, размер M 40 2',
    id: '2',
    icon: <FolderSolid />,
  },
];

const SelectTreeDemoM: ComponentStory<typeof SelectTree> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);
  const [dataList, setDataList] = React.useState<SelectTreeNodeProps[]>(selectTreeListM);

  return (
    <>
      <SelectTree
        {...cleanProps}
        style={{ maxWidth: '768px' }}
        list={dataList}
        dimension="m"
        onChange={(dataList) => setDataList(dataList)}
      />
    </>
  );
};

const SelectTreeDemoS: ComponentStory<typeof SelectTree> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);
  const [dataList, setDataList] = React.useState<SelectTreeNodeProps[]>(selectTreeListS);

  return (
    <>
      <SelectTree
        {...cleanProps}
        style={{ maxWidth: '768px' }}
        list={dataList}
        dimension="s"
        onChange={(dataList) => setDataList(dataList)}
      />
    </>
  );
};

const SelectTreeDemoNoCheckbox: ComponentStory<typeof SelectTree> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);
  const [dataList, setDataList] = React.useState<SelectTreeNodeProps[]>(treeViewList);

  return (
    <>
      <SelectTree
        {...cleanProps}
        style={{ maxWidth: '768px' }}
        list={dataList}
        dimension="m"
        onChange={(dataList) => setDataList(dataList)}
        expandAll
      />
    </>
  );
};

export const SelectTreeM = SelectTreeDemoM.bind({});
SelectTreeM.args = {};
SelectTreeM.storyName = 'Select Tree, размер М';

export const SelectTreeS = SelectTreeDemoS.bind({});
SelectTreeS.args = {};
SelectTreeS.storyName = 'Select Tree, размер S';

export const SelectTreeNoCheckbox = SelectTreeDemoNoCheckbox.bind({});
SelectTreeNoCheckbox.args = {};
SelectTreeNoCheckbox.storyName = 'Развернутый список без опции выбора';
