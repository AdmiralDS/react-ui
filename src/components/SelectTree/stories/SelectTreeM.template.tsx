import * as React from 'react';

import { SelectTree, T } from '@admiral-ds/react-ui';
import type { SelectTreeProps } from '@admiral-ds/react-ui';
import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';

import type { SelectTreeNodeProps } from '#src/components/SelectTree/SelectTreeNode';
import RNBLogoLight from '#src/components/SelectTree/stories/RNBLogoLight.svg';

const selectTreeListM = [
  {
    label: (
      <T as="div" style={{ marginTop: -2 }} font="Subtitle/Subtitle 2">
        Текст заголовка, первый уровень компонента, размер M 40 1
      </T>
    ),
    id: '1',
    checked: false,
    children: [
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 1',
        id: '1-1',
        checked: false,
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 2',
        id: '1-2',
        checked: false,
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 3',
        id: '1-3',
        checked: false,
        children: [
          {
            label: <img src={RNBLogoLight} alt={''} />,
            id: '2-1',
            checked: false,
          },
          { label: 'Текст  строки, третий уровень компонента 2', id: '2-2' },
          { label: 'Текст  строки, третий уровень компонента 3', id: '2-3' },
          { label: 'Текст  строки, третий уровень компонента 4', id: '2-4' },
          {
            label: 'Текст  строки с чекбоксом, третий уровень компонента 5',
            id: '2-5',
            checked: false,
            children: [
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 1', id: '3-1', checked: false },
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 2', id: '3-2', checked: false },
              {
                label:
                  'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                  '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n' +
                  '    вложенности.',
                id: '3-3',
                checked: false,
              },
              {
                label: 'Текст  строки с чекбоксом, четвертый уровень компонента 4',
                id: '3-4',
                checked: false,
                children: [
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 1', id: '4-1', checked: false },
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 2', id: '4-2', checked: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 2', id: '2', checked: false },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 3', id: '3' },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 4', id: '4' },
];

export const SelectTreeMTemplate = (props: SelectTreeProps) => {
  const [dataList, setDataList] = React.useState<SelectTreeNodeProps[]>(selectTreeListM);

  return (
    <>
      <SelectTree
        {...props}
        style={{ maxWidth: '768px' }}
        list={dataList}
        dimension="m"
        onChange={(dataList) => setDataList(dataList)}
      />
    </>
  );
};
