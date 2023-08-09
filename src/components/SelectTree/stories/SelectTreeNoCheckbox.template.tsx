import * as React from 'react';

import { SelectTree } from '@admiral-ds/react-ui';
import type { SelectTreeProps } from '@admiral-ds/react-ui';
import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';

import type { SelectTreeNodeProps } from '#src/components/SelectTree/SelectTreeNode';
import RNBLogoLight from '#src/components/SelectTree/stories/RNBLogoLight.svg';

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

export const SelectTreeNoCheckboxTemplate = (props: SelectTreeProps) => {
  const [dataList, setDataList] = React.useState<SelectTreeNodeProps[]>(treeViewList);

  return (
    <>
      <SelectTree
        {...props}
        style={{ maxWidth: '768px' }}
        list={dataList}
        dimension="m"
        onChange={(dataList) => setDataList(dataList)}
        expandAll
      />
    </>
  );
};
