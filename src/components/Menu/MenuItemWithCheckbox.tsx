import { MenuItem, MenuItemProps } from '#src/components/Menu/MenuItem';
import React from 'react';
import styled, { css } from 'styled-components';
import { ItemDimension } from '#src/components/Menu/menuItemMixins';
import { MenuDimension } from '#src/components/GroupActionsPane/ColumnsButton';
import { Checkbox } from '#src/components/Checkbox';

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
  source: Array<CheckboxGroupItemProps>,
  level = 0,
  dependencies?: Array<Array<string>>,
): Map<string, CheckboxNodesMapItem> => {
  return source.reduce((acc: Map<string, CheckboxNodesMapItem>, item) => {
    const key = item.id;
    const currentNode: CheckboxNodesMapItem = { level, node: item };
    acc.set(key, currentNode);

    if (dependencies) {
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
  padding-left: ${({ dimension, level }) => {
    switch (dimension) {
      case 's':
        return 12 + 28 * (level ? level : 0);
      case 'm':
      case 'l':
      default:
        return 16 + 32 * (level ? level : 0);
    }
  }}px;
`;
const CheckboxGroupMenuItem = styled(MenuItem)<{ level?: number; dimension?: ItemDimension }>`
  ${paddingLeft}
`;
const OptionWithCheckbox = styled.div<{
  dimension?: MenuDimension;
  disabled?: boolean;
}>`
  position: relative;
  padding: 0;
  display: flex;

  padding-left: ${(props) => (props.dimension === 's' ? 28 : 32)}px;
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
  /** Сдвиг внутри MenuItem при наличии нескольких уровней (например при использовании составной группы чекбоксов внутри Menu */
  level?: number;
  /** Подпись для Checkbox */
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
        <OptionWithCheckbox dimension={dimension || 'l'}>
          <PositionedCheckbox
            dimension={dimension !== 's' ? 'm' : dimension}
            checked={checked}
            indeterminate={indeterminate}
            hovered={checkboxIsHovered}
            ref={checkboxRef}
            onChange={(e) => (e.target.checked = !checked)}
          />
          {children}
        </OptionWithCheckbox>
      </CheckboxGroupMenuItem>
    );
  },
);
