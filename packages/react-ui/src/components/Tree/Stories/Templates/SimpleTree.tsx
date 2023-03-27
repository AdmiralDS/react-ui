import React, { useState } from 'react';
import { T } from '#src/components/T';
import { Tree, TreeNode } from '#src/components/Tree';
import type { TreeItemProps, TreeNodeRenderOptionProps, TreeProps } from '#src/components/Tree';
import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';

const demo2_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: TreeNodeRenderOptionProps) => (
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
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode key={'1-1'} icon={FolderSolid} label={'Второй уровень 1'} {...options} />
        ),
        id: '1-1',
        checked: false,
        children: [
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'1-1-1'} icon={FolderSolid} label={'Третий уровень 1'} {...options} />
            ),
            id: '1-1-1',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'1-1-2'} icon={FolderSolid} label={'Третий уровень 2'} {...options} />
            ),
            id: '1-1-2',
          },
        ],
      },
    ],
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode key={'4'} icon={FolderSolid} label={'Первый уровень 2'} {...options} />
    ),
    id: '4',
  },
];
export const SimpleTreeTemplate = (props: TreeProps) => {
  const [activeItem, setActiveItem] = useState<string | null>('1');

  const handleMouseLeave = () => {
    // eslint-disable-next-line no-console
    console.log('Mouse leave tree');
  };

  return (
    <Tree
      {...props}
      defaultSelected={'1-1'}
      withCheckbox={false}
      model={demo2_TreeModel}
      active={activeItem}
      onActivateItem={setActiveItem}
      onMouseLeave={handleMouseLeave}
    />
  );
};
