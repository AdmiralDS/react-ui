import type { HTMLAttributes } from 'react';
import { forwardRef, Fragment, useEffect, useMemo, useState } from 'react';
import type { Dimension, TreeItemProps, TreeNodeRenderOptionProps } from './TreeNode';
import styled from 'styled-components';

// todo: Разделить контролируемое и неконтролируемое состояние в версии 7
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
  model?: Array<TreeItemProps>;
  /** Модель данных, с рендер-пропсами по-умолчанию для неконтролируемого состояния*/
  defaultModel?: Array<TreeItemProps>;
  /** Признак того, что дерево содержит checkbox-ы */
  withCheckbox?: boolean;
  /** Обработчик изменения состояния выбранных элементов */
  onCheckedChange?: (ids: Array<string>) => void;
  /** Обработчик открытия/закрытия узла дерева */
  onExpandedChange?: (ids: Array<string>) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
`;

type NodesMapItem = {
  parent?: string;
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
  parent?: string,
): NodesMap => {
  const levelHasChildren = tree.some((item) => itemHasChildren(item));

  return tree.reduce((acc: NodesMap, item) => {
    const key = item.id.toString();
    const selfIndent = levelHasChildren && itemHasChildren(item) ? indent : indent + 1;
    acc[key] = { level, indent: selfIndent, node: item, parent };

    if (dependencies) {
      dependencies.forEach((dependency) => dependency.push(key));
    }
    if (item.children && itemHasChildren(item)) {
      const allDependencies = dependencies ? [...dependencies] : [];
      const itemDependencies: Array<string> = [];
      acc[key].dependencies = itemDependencies;
      allDependencies.push(itemDependencies);
      const map = treeToMap(item.children, level + 1, indent + 1, allDependencies, key);
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
      defaultModel,
      withCheckbox = true,
      selected,
      defaultSelected,
      active,
      onActivateItem,
      onSelectItem,
      onChange,
      onMouseLeave,
      onCheckedChange,
      onExpandedChange,
      ...props
    },
    ref,
  ) => {
    const [internalModel, setInternalModel] = useState<Array<TreeItemProps>>([...(defaultModel ?? [])]);
    const [selectedState, setSelectedState] = useState<string | undefined>(defaultSelected);

    const modelObject = model === undefined ? internalModel : model;
    const selectedId = selected === undefined ? selectedState : selected;

    const selectItem = (id: string) => {
      if (withCheckbox) {
        if (id) toggleCheck(id);
      }
      if (selectedId !== id) setSelectedState(id);

      onSelectItem?.(id);
    };

    useEffect(() => {
      if (model) setInternalModel([...model]);
    }, [model]);

    const map = useMemo(() => {
      return treeToMap(model ?? internalModel);
    }, [modelObject]);

    const toggleExpand = (id: string) => {
      map[id].node.expanded = !map[id].node.expanded;

      if (onExpandedChange) {
        const expandedItems = Object.entries(map)
          .map(([key, item]) => item.node.expanded && key)
          .filter((value): value is string => !!value && typeof value === 'string');

        onExpandedChange(expandedItems);
      }

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

    const calculateParentNodeState = (node: NodesMapItem) => {
      if (node.parent) {
        const id = node.parent;
        map[id].node.checked = map[id].dependencies?.every((depId: number | string) => map[depId].node.checked);
        calculateParentNodeState(map[id]);
      }
    };

    const toggleCheck = (id: string | number) => {
      const hasChildren = itemHasChildren(map[id].node);

      // При расчете indeterminate учитывается только не disabled опции, это связано с тем, что при переключении
      // родительского узла невозможно сбросить состояние checked
      const indeterminate =
        map[id].dependencies?.some((depId: number | string) => !map[depId].node.disabled && map[depId].node.checked) &&
        map[id].dependencies?.some((depId: number | string) => !map[depId].node.checked);

      const checked = hasChildren
        ? indeterminate
          ? true
          : map[id].dependencies?.every((depId: number | string) => map[depId].node.checked)
        : map[id].node.checked;

      setChecked(id, !checked);

      calculateParentNodeState(map[id]);

      if (onCheckedChange) {
        const checkedItems = Object.entries(map)
          .map(([key, item]) => !!item.node.checked && key)
          .filter((value): value is string => !!value && typeof value === 'string');

        onCheckedChange(checkedItems);
      }

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
          ? node.dependencies && node.dependencies?.every((depId: number | string) => map[depId].node.checked)
          : !!item.checked;

        return (
          <Fragment key={item.id}>
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
              hovered: active !== undefined ? active === item.id : undefined,
              selected: selectedId === item.id,
              onHover: () => {
                onActivateItem?.(item.disabled ? null : item.id);
              },
              onClick: () => selectItem(item.id),
              onToggleExpand: () => toggleExpand(item.id),
            } as TreeNodeRenderOptionProps)}
            {item.children && hasChildren && item.expanded && renderChildren(item.children)}
          </Fragment>
        );
      });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      onActivateItem?.(null);
      onMouseLeave?.(e);
    };

    return (
      <Wrapper ref={ref} {...props} onMouseLeave={handleMouseLeave}>
        {renderChildren(modelObject)}
      </Wrapper>
    );
  },
);

export { TreeNode } from './TreeNode';
export type { TreeNodeRenderOptionProps, TreeItemProps } from './TreeNode';
