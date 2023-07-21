import type { HTMLAttributes } from 'react';
import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import type { Dimension, TreeItemProps } from './TreeNode';
import styled from 'styled-components';

export interface TreeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Активная секция Tree */
  active?: string | null;
  /** выбранная секция Tree */
  selected?: string | null;
  /** выбранная по умолчанию секция Tree */
  defaultSelected?: string;
  /** Обработчик выбора элемента дерева */
  onActivateItem?: (id: string | null) => void;
  /** Обработчик выбора элемента дерева */
  onSelectItem?: (id: string | null) => void;
  /** Обработчик изменения данных дерева */
  onChange?: (model: Array<TreeItemProps>) => void;
  /** Модель данных, с рендер-пропсами*/
  model: Array<TreeItemProps>;
  /** Признак того, что дерево содержит checkbox-ы */
  withCheckbox?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
`;

type NodesMapItem = {
  dependencies?: Array<string>;
  level: number;
  node: TreeItemProps;
  indent: number;
};

type NodesMap = { [key: string]: NodesMapItem };

const itemHasChildren = (item: TreeItemProps) =>
  !!item.children && Array.isArray(item.children) && item.children.length > 0;

const treeToMap = (
  tree: Array<TreeItemProps>,
  level = 0,
  indent = 0,
  dependencies?: Array<Array<string>>,
): NodesMap => {
  const levelHasChildren = tree.some((item) => itemHasChildren(item));

  return tree.reduce((acc: NodesMap, item) => {
    const key = item.id.toString();
    const selfIndent = levelHasChildren && itemHasChildren(item) ? indent : indent + 1;
    acc[key] = { level, indent: selfIndent, node: item };

    if (dependencies && !itemHasChildren(item)) {
      dependencies.forEach((dependency) => dependency.push(key));
    }
    if (item.children && itemHasChildren(item)) {
      const allDependencies = dependencies ? [...dependencies] : [];
      const itemDependencies: Array<string> = [];
      acc[key].dependencies = itemDependencies;
      allDependencies.push(itemDependencies);
      const map = treeToMap(item.children, level + 1, indent + 1, allDependencies);
      return { ...acc, ...map };
    }

    return acc;
  }, {}) as NodesMap;
};

export const Tree = forwardRef<HTMLDivElement, TreeProps>(
  (
    {
      dimension = 'm',
      model,
      withCheckbox = true,
      selected,
      defaultSelected,
      active,
      onActivateItem,
      onSelectItem,
      onChange,
      onMouseLeave,
      ...props
    },
    ref,
  ) => {
    const [internalModel, setInternalModel] = useState<Array<TreeItemProps>>([...model]);
    const [selectedState, setSelectedState] = useState<string | undefined>(defaultSelected);
    const [activeState, setActiveState] = useState<string | undefined>(undefined);

    const selectedId = selected === undefined ? selectedState : selected;
    const activeId = active === undefined ? activeState : active;

    const activateItem = (id?: string) => {
      if (activeId !== id) setActiveState(id);
      onActivateItem?.(id || null);
    };

    const selectItem = (id: string) => {
      if (withCheckbox) {
        if (id) toggleCheck(id);
      }
      if (selectedId !== id) setSelectedState(id);

      onSelectItem?.(id);
    };

    useEffect(() => {
      setInternalModel([...model]);
    }, [model]);

    const map = useMemo(() => {
      return treeToMap(model);
    }, [model]);

    const toggleExpand = (id: string) => {
      map[id].node.expanded = !map[id].node.expanded;

      if (onChange) {
        onChange([...internalModel]);
      } else {
        setInternalModel([...internalModel]);
      }
      if (selectedId !== id) setSelectedState(id);
    };

    const setChecked = (id: number | string, value: boolean) => {
      if (map[id].node.disabled) return;
      map[id].node.checked = value;

      if (map[id].dependencies?.length) {
        map[id].dependencies?.forEach((depId: number | string) => setChecked(depId, value));
      }
    };

    const toggleCheck = (id: string | number) => {
      const hasChildren = itemHasChildren(map[id].node);

      const indeterminate =
        map[id].dependencies?.some((depId: number | string) => map[depId].node.checked) &&
        map[id].dependencies?.some((depId: number | string) => !map[depId].node.checked);

      const checked = hasChildren
        ? indeterminate
          ? true
          : map[id].dependencies?.every((depId: number | string) => map[depId].node.checked)
        : map[id].node.checked;

      setChecked(id, !checked);

      if (onChange) {
        onChange([...internalModel]);
      } else {
        setInternalModel([...internalModel]);
      }
    };

    const renderChildren = (items: Array<TreeItemProps>): React.ReactNode => {
      return items.map((item) => {
        const node = map[item.id];
        const hasChildren = itemHasChildren(item);
        const indeterminate =
          node.dependencies?.some((depId: number | string) => map[depId].node.checked) &&
          node.dependencies?.some((depId: number | string) => !map[depId].node.checked);
        const checked = hasChildren
          ? node.dependencies?.every((depId: number | string) => map[depId].node.checked)
          : !!item.checked;

        return (
          <React.Fragment key={item.id}>
            {item.render({
              checked,
              indeterminate,
              hasChildren,
              level: node.level,
              indent: node.indent,
              disabled: item.disabled,
              dimension: dimension,
              expanded: item.expanded,
              checkboxVisible: withCheckbox,
              hovered: activeId === item.id,
              selected: selectedId === item.id,
              onHover: () => {
                activateItem(item.disabled ? undefined : item.id);
              },
              onClickItem: () => selectItem(item.id),
              onToggleExpand: () => toggleExpand(item.id),
            })}
            {item.children && hasChildren && item.expanded && renderChildren(item.children)}
          </React.Fragment>
        );
      });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      setActiveState(undefined);
      onActivateItem?.(null);
      onMouseLeave?.(e);
    };

    return (
      <Wrapper ref={ref} {...props} onMouseLeave={handleMouseLeave}>
        {renderChildren(model)}
      </Wrapper>
    );
  },
);

export { TreeNode } from './TreeNode';
export type { TreeNodeRenderOptionProps, TreeItemProps } from './TreeNode';
