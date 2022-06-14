import React, { forwardRef, HTMLAttributes, useEffect, useMemo, useState } from 'react';
import { Dimension, TreeItemProps } from './TreeNode';
import styled from 'styled-components';

export interface TreeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Активная секция Tree */
  active?: string;
  /** выбранная секция Tree */
  selected?: string;
  /** выбранная по умолчаниию секция Tree */
  defaultSelected?: string;
  /** Обработчик выбора элемента дерева */
  onActivateItem?: (id?: string) => void;
  /** Обработчик выбора элемента дерева */
  onSelectItem?: (id: string) => void;
  /** Обработчик изменения данных дерева */
  onChange?: (model: Array<TreeItemProps>) => void;
  /** Модель данных, с рендер-пропсами*/
  model: Array<TreeItemProps>;
  /** Признак того, что дерево содержит checkbox-ы */
  withCheckbox?: boolean;
  /** Ширина строк дерева */
  width?: number;
}

const Wrapper = styled.div<{ $width?: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => `${$width}px` || '768px'};
`;

type NodesMapItem = {
  dependencies?: Array<string>;
  level: number;
  node: TreeItemProps;
};

type NodesMap = { [key: string]: NodesMapItem };

const treeToMap = (tree: Array<TreeItemProps>, level = 0, dependencies?: Array<Array<string>>): NodesMap => {
  return tree.reduce((acc: NodesMap, item) => {
    const key = item.id.toString();
    acc[key] = { level, node: item };

    if (dependencies) {
      dependencies.forEach((dependency) => dependency.push(key));
    }
    if (item.children) {
      const allDependencies = dependencies ? [...dependencies] : [];
      const itemDependencies: Array<string> = [];
      acc[key].dependencies = itemDependencies;
      allDependencies.push(itemDependencies);
      const map = treeToMap(item.children, level + 1, allDependencies);
      return { ...acc, ...map };
    }

    return acc;
  }, {}) as NodesMap;
};

export const Tree = forwardRef<HTMLDivElement, TreeProps>(
  (
    {
      dimension = 'm',
      width,
      model,
      withCheckbox = true,
      selected,
      defaultSelected,
      active,
      onActivateItem,
      onSelectItem,
      onChange,
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
      onActivateItem?.(id);
    };

    const selectItem = (id: string) => {
      if (withCheckbox) {
        if (id) toggleCheck(id);
      } else {
        if (selectedId !== id) setSelectedState(id);
      }

      onSelectItem?.(id);
    };

    useEffect(() => {
      setInternalModel([...model]);
    }, [model]);

    const map = useMemo(() => {
      return treeToMap(model);
    }, [model]);

    const toggleExpand = (id: string | number) => {
      map[id].node.expanded = !map[id].node.expanded;

      if (onChange) {
        onChange([...internalModel]);
      } else {
        setInternalModel([...internalModel]);
      }
    };

    const setChecked = (id: number | string, value: boolean) => {
      if (map[id].node.disabled) return;
      map[id].node.checked = value;

      if (map[id].dependencies?.length) {
        map[id].dependencies?.forEach((depId: number | string) => setChecked(depId, value));
      }
    };

    const toggleCheck = (id: string | number) => {
      const hasChildren = !!map[id].node.children;
      const checked = hasChildren
        ? map[id].dependencies?.every((depId: number | string) => map[depId].node.checked)
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
        const hasChildren = !!item.children;
        const indeterminate =
          node.dependencies?.some((depId: number | string) => map[depId].node.checked) &&
          node.dependencies?.some((depId: number | string) => !map[depId].node.checked);
        const checked = hasChildren
          ? node.dependencies?.every((depId: number | string) => map[depId].node.checked)
          : item.checked;

        return (
          <React.Fragment key={item.id}>
            {item.render({
              checked,
              indeterminate,
              hasChildren,
              level: node.level,
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
            {item.children && item.expanded && renderChildren(item.children)}
          </React.Fragment>
        );
      });
    };

    const handleMouseLeave = () => {
      setActiveState(undefined);
    };

    return (
      <Wrapper ref={ref} $width={width} onMouseLeave={handleMouseLeave} {...props}>
        {renderChildren(model)}
      </Wrapper>
    );
  },
);
