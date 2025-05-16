import { useMemo } from 'react';
import { type FlatMapItems, MenuItemWithCheckbox } from '#src/components/Menu/MenuItemWithCheckbox';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { StyledMenu } from '#src/components/input/TreeSelect/styled';
import type { MenuDimensions, MenuProps } from '#src/components/Menu';
import type { DataAttributes } from 'styled-components';
import type { MenuModelItemProps, RenderOptionProps } from '#src/components/Menu/MenuItem';

export interface DropDownTreeProps extends Omit<MenuProps, 'model' | 'onSelectItem' | 'onDeselectItem'> {
  items: FlatMapItems;
  /** Конфиг функция пропсов для dropdown. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  dropdownConfig?: (
    props: React.ComponentProps<typeof DropdownContainer>,
  ) => Partial<React.ComponentProps<typeof DropdownContainer> & DataAttributes>;

  onChangeSelected?: (value: Array<string>) => void;

  onSelectImem?: (id: string) => void;

  onDeselectItem?: (id: string) => void;
  /** Размер Меню */
  dimension?: MenuDimensions;
}

export const DropDownTree = ({
  items,
  dropdownConfig,
  onChangeSelected,
  onSelectImem,
  onDeselectItem,
  dimension = 'l',
  ...props
}: DropDownTreeProps) => {
  const map = useMemo(() => new Map(items), [items]);

  const setChecked = (id: string, value: boolean) => {
    const mapItem = map.get(id);
    if (mapItem?.node.disabled) return;
    if (mapItem) {
      mapItem.node.checked = value;
    }

    if (mapItem?.dependencies?.length) {
      mapItem?.dependencies?.forEach((depId: string) => setChecked(depId, value));
    }
  };

  const toggleCheck = (id: string) => {
    //
    const item = map.get(id);
    const hasChildren = !!item?.node.children;

    const indeterminate =
      item?.dependencies?.some((depId: string) => map.get(depId)?.node.checked) &&
      item?.dependencies?.some((depId: string) => !map.get(depId)?.node.checked);

    const checked = hasChildren
      ? indeterminate
        ? true
        : item?.dependencies?.every((depId: string) => map.get(depId)?.node.checked)
      : item?.node.checked;

    setChecked(id, !checked);

    onChangeSelected?.([...map.values()].filter((item) => !!item.node.checked).map((item) => item.node.id));

    if (map.get(id)?.node.checked) onSelectImem?.(id);
    else onDeselectItem?.(id);
  };

  const handleSelectItem = (id: string) => {
    // CHECK: Проверить с item.disabled
    toggleCheck(id);
  };

  const model = useMemo<Array<MenuModelItemProps>>(() => {
    const menuModel: MenuModelItemProps[] = [];
    // TODO: переписать на reduce
    map.forEach((item) => {
      const node = item.node;
      const hasChildren = !!node.children;
      const indeterminate =
        item.dependencies?.some((depId: string) => map.get(depId)?.node.checked) &&
        item.dependencies?.some((depId: string) => !map.get(depId)?.node.checked);
      const checked = hasChildren
        ? item.dependencies?.every((depId: string) => map.get(depId)?.node.checked)
        : !!node.checked;
      menuModel.push({
        id: node.id,
        render: (options: RenderOptionProps) => (
          <MenuItemWithCheckbox
            key={node.id}
            id={node.id}
            dimension={dimension}
            disabled={node.disabled}
            checked={checked}
            indeterminate={indeterminate}
            level={item.level}
            {...options}
          >
            {node.label}
          </MenuItemWithCheckbox>
        ),
        disabled: node.disabled,
      });
    });

    return menuModel;
  }, [dimension, map]);

  const dropdownProps = {
    alignSelf: 'stretch',
    targetElement: null,
    onClickOutside: () => null,
    className: 'dropContainerClass',
  } satisfies React.ComponentProps<typeof DropdownContainer>;

  return (
    <DropdownContainer {...dropdownProps} {...dropdownConfig?.(dropdownProps)}>
      <StyledMenu
        {...props}
        // active={active}
        // onActivateItem={setActive}
        defaultIsActive={false}
        preselectedModeActive={false}
        model={model}
        onSelectItem={handleSelectItem}
        disableSelectedOptionHighlight={true}
        dimension={dimension}
      />
    </DropdownContainer>
  );
};
