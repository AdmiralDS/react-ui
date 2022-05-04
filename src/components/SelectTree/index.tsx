import type { FC, HTMLAttributes } from 'react';
import React, { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import { SelectTreeNode, SelectTreeNodeProps } from '#src/components/SelectTree/SelectTreeNode';
import { keyboardKey } from '#src/components/common/keyboardKey';

type Dimension = 'm' | 's';

const TreeItem = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export interface SelectTreeProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onChange'> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Данные для отображения вложенного списка */
  list: SelectTreeNodeProps[];
  /** Раскрытие всех веток */
  expandAll?: boolean;
  /** Колбек на изменение списка компонента (dataList - измененный вложенный список) */
  onChange?: (dataList: SelectTreeNodeProps[]) => void;
}

export const SelectTree: FC<SelectTreeProps> = ({ list, dimension = 'm', expandAll = false, onChange, ...props }) => {
  const handleExpandAll = (node: SelectTreeNodeProps) => {
    if (node.expanded === undefined && node.children) {
      node.expanded = expandAll;
      if (node.children) {
        node.children.forEach(handleExpandAll);
      }
    }
  };

  const handleChangeList = (type: string, e: any) => {
    const checked = e.target.checked;
    const key = (e.target as HTMLElement).getAttribute('data-key');

    const checkParent = (root: SelectTreeNodeProps[], node: SelectTreeNodeProps) => {
      let parentChecked = false;
      root.forEach((branch) => {
        if (branch.children) {
          const parentNode = branch.children.find((child) => child.id === node.id);
          if (parentNode) {
            branch.checked = true;
            parentChecked = true;
          } else {
            if (checkParent(branch.children, node)) {
              branch.checked = true;
              parentChecked = true;
            }
          }
        }
      });
      return parentChecked;
    };

    const updateParent = (root: SelectTreeNodeProps[]) => {
      const checkedBranches: boolean[] = [];
      root.forEach((branch) => {
        if ('checked' in branch) {
          let isChecked: boolean;
          if (branch.children) {
            isChecked = updateParent(branch.children);
            branch.checked = isChecked;
          } else {
            isChecked = Boolean(branch.checked);
          }
          checkedBranches.push(isChecked);
        }
      });
      return checkedBranches.some((check) => check === true);
    };

    const traverseNodes = (node: SelectTreeNodeProps) => {
      if (node.id === key) {
        if (type === 'buttonclick') {
          const expanded = node.expanded;
          node.expanded = !expanded;
        }
        if (type === 'inputchange') {
          node.checked = checked;
          if (checked) {
            checkParent(list, node);
          }
          if (node.children) {
            node.children.forEach(checkAllNodes);
          }
          updateParent(list);
        }
        if (type === 'keydown') {
          const code = keyboardKey.getCode(e);
          if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
            node.expanded = true;
          } else if (code === keyboardKey.Escape) {
            node.expanded = false;
          }
        }
      }
      if (node.children) {
        node.children.forEach(traverseNodes);
      }
    };

    const checkAllNodes = (node: SelectTreeNodeProps) => {
      if ('checked' in node) {
        node.checked = checked;
        if (node.children) {
          node.children.forEach(checkAllNodes);
        }
      }
    };

    list.forEach(traverseNodes);
    onChange?.([...list]);
  };

  const handleButtonClick = React.useCallback((e: MouseEvent<HTMLDivElement>) => {
    handleChangeList('buttonclick', e);
  }, []);

  const handleChange = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
    handleChangeList('inputchange', e);
  }, []);

  const handleKeyDown = React.useCallback((e: KeyboardEvent<HTMLLIElement>) => {
    handleChangeList('keydown', e);
  }, []);

  React.useEffect(() => {
    if (expandAll) {
      list.forEach(handleExpandAll);
      onChange?.([...list]);
    }
  }, [expandAll]);

  return (
    <TreeItem {...props}>
      {list.map((node) => {
        return (
          <SelectTreeNode
            key={node.id}
            node={node}
            onChange={handleChange}
            dimension={dimension}
            expandAll={expandAll}
            onButtonClick={handleButtonClick}
            onKeyDown={handleKeyDown}
            level={0}
          />
        );
      })}
    </TreeItem>
  );
};

SelectTree.defaultProps = { dimension: 'm' };
SelectTree.displayName = 'SelectTree';
