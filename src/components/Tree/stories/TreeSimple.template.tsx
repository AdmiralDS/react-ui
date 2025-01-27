import { Tree, TreeNode, T } from '@admiral-ds/react-ui';
import { useState } from 'react';
import type { TreeItemProps, TreeNodeRenderOptionProps, TreeProps } from '@admiral-ds/react-ui';
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
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode key={'5'} icon={FolderSolid} label={'Первый уровень с пустым массивом children'} {...options} />
    ),
    children: [],
    id: '5',
  },
];

// Можно и так
// const StyledTree = styled(Tree)`
//   width: 500px;
//   gap: 8px;
// `;

export const TreeSimpleTemplate = (props: TreeProps) => {
  const [activeItem, setActiveItem] = useState<string | null>('1');

  const handleMouseLeave = () => {
    // eslint-disable-next-line no-console
    console.log('Mouse leave tree');
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Дерево без checkbox c заданной кастомной шириной в 500px и расстоянием между строками 8px.
      </T>
      <Tree
        {...props}
        style={{ width: 500, gap: 8 }}
        defaultSelected={'1-1'}
        withCheckbox={false}
        model={demo2_TreeModel}
        active={activeItem}
        onActivateItem={setActiveItem}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
};
