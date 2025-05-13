import * as React from 'react';
import styled, { css } from 'styled-components';

import type { ItemDimension } from '#src/components/Menu/menuItemMixins';
import type { MenuItemProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { CheckboxField } from '#src/components/form/CheckboxField';

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

export type FlatMapItems = Map<string, CheckboxNodesMapItem>;

export const checkboxTreeToMap = (
  checkboxTree: Array<CheckboxGroupItemProps>,
  level = 0,
  dependencies?: Array<Array<string>>,
): FlatMapItems => {
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

const paddingLeft = css<{ $level?: number; dimension?: ItemDimension }>`
  padding-left: ${({ dimension, $level = 0 }) => {
    switch (dimension) {
      case 's':
        return 12 + 28 * $level;
      case 'm':
      case 'l':
      default:
        return 16 + 32 * $level;
    }
  }}px;
`;
const CheckboxGroupMenuItem = styled(MenuItem)<{ $level?: number }>`
  ${paddingLeft}
`;

export interface MenuItemWithCheckboxProps extends MenuItemProps {
  /** Значение Checkbox */
  checked?: boolean;
  /** Неопределенное состояние Checkbox */
  indeterminate?: boolean;
  /**
   * @deprecated Помечено как deprecated в версии 4.17.0, будет удалено в 10.x.x версии.
   *
   * Состояние hovered для Checkbox
   **/
  checkboxIsHovered?: boolean;
  /** Ref на Checkbox */
  checkboxRef?: React.RefObject<HTMLInputElement>;
  /** Сдвиг внутри MenuItem при наличии нескольких уровней (например при использовании составной группы чекбоксов внутри Menu) */
  level?: number;
}
export const MenuItemWithCheckbox = React.forwardRef<HTMLDivElement, MenuItemWithCheckboxProps>(
  ({ checked, indeterminate, checkboxRef, level = 0, children, dimension = 'l', ...props }, ref) => {
    return (
      <CheckboxGroupMenuItem dimension={dimension} $level={level} ref={ref} {...props}>
        <CheckboxField
          dimension={dimension === 's' ? 's' : 'm'}
          checked={!!checked} // важно
          indeterminate={indeterminate}
          hovered={props.hovered}
          disabled={props.disabled}
          readOnly={props.readOnly}
          ref={checkboxRef}
          onChange={() => false}
        >
          {children}
        </CheckboxField>
      </CheckboxGroupMenuItem>
    );
  },
);
