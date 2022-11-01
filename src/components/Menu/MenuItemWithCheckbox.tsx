import React from 'react';
import styled, { css } from 'styled-components';
import { ItemDimension } from '#src/components/Menu/menuItemMixins';
import { MenuItem, MenuItemProps } from '#src/components/Menu/MenuItem';
import { Checkbox } from '#src/components/Checkbox';

export interface ItemWithCheckbox {
  id: string;
  label: string;
  checked?: boolean;
}

export interface CheckboxGroupItemProps {
  id: string;
  label: React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  children?: Array<CheckboxGroupItemProps>;
}
export type CheckboxNodesMapItem = {
  dependencies?: Array<string>;
  level: number;
  node: CheckboxGroupItemProps;
};

export const checkboxTreeToMap = (
  checkboxTree: Array<CheckboxGroupItemProps>,
  level = 0,
  dependencies?: Array<Array<string>>,
): Map<string, CheckboxNodesMapItem> => {
  return checkboxTree.reduce((acc: Map<string, CheckboxNodesMapItem>, item) => {
    const key = item.id;
    const currentNode: CheckboxNodesMapItem = { level, node: item };
    acc.set(key, currentNode);

    if (dependencies && !item.children) {
      dependencies.forEach((dependency) => dependency.push(key));
    }
    if (item.children) {
      const allDependencies = dependencies ? [...dependencies] : [];
      const itemDependencies: Array<string> = [];
      currentNode.dependencies = itemDependencies;
      acc.set(key, currentNode);
      allDependencies.push(itemDependencies);
      const map = checkboxTreeToMap(item.children, level + 1, allDependencies);
      return new Map([...acc, ...map]);
    }

    return acc;
  }, new Map<string, CheckboxNodesMapItem>());
};

const paddingLeft = css<{ level?: number; dimension?: ItemDimension }>`
  padding-left: ${({ dimension, level = 0 }) => {
    switch (dimension) {
      case 's':
        return 12 + 28 * level;
      case 'm':
      case 'l':
      default:
        return 16 + 32 * level;
    }
  }}px;
`;
const CheckboxGroupMenuItem = styled(MenuItem)<{ level?: number; dimension?: ItemDimension }>`
  ${paddingLeft}
`;
const OptionContent = styled.div<{ dimension?: ItemDimension }>`
  position: relative;
  padding: 0 0 0 ${(props) => (props.dimension === 's' ? 28 : 32)}px;
`;
const PositionedCheckbox = styled(Checkbox)`
  position: absolute;
  top: 2px;
  left: 2px;
`;

export interface MenuItemWithCheckboxProps extends MenuItemProps {
  id: string;
  /** Значение Checkbox */
  checked?: boolean;
  /** Неопределенное состояние Checkbox */
  indeterminate?: boolean;
  /** Состояние hovered для Checkbox */
  checkboxIsHovered?: boolean;
  /** Ref на Checkbox */
  checkboxRef?: React.RefObject<HTMLInputElement>;
  /** Сдвиг внутри MenuItem при наличии нескольких уровней (например при использовании составной группы чекбоксов внутри Menu) */
  level?: number;
  /** Текст для Checkbox */
  children?: React.ReactNode;
}

export const MenuItemWithCheckbox = React.forwardRef<HTMLDivElement, MenuItemWithCheckboxProps>(
  (
    {
      id,
      checked = false,
      indeterminate = false,
      checkboxIsHovered,
      checkboxRef,
      level = 0,
      children,
      disabled = false,
      dimension = 'l',
      ...props
    },
    ref,
  ) => {
    return (
      <CheckboxGroupMenuItem
        dimension={dimension || 'l'}
        level={level}
        key={id}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        <OptionContent dimension={dimension || 'l'}>
          <PositionedCheckbox
            dimension={dimension === 's' ? 's' : 'm'}
            checked={checked}
            indeterminate={indeterminate}
            hovered={checkboxIsHovered}
            ref={checkboxRef}
            onChange={(e) => (e.target.checked = !checked)}
          />
          {children}
        </OptionContent>
      </CheckboxGroupMenuItem>
    );
  },
);
