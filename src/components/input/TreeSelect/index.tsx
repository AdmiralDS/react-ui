import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DropDownTree, type DropDownTreeProps } from './DropDownTree';
import { refSetter } from '#src/components/common/utils/refSetter';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { StyledMultiInput, StyledChip } from './styled';
import type { ContainerProps } from '#src/components/input/MultiInput';
import type { InputIconButton } from '#src/components/InputIconButton';
import type { DataAttributes } from 'styled-components';
import type { DropdownContainerProps, TreeSelectItemProps } from './types';
import {
  checkboxTreeToMap,
  type FlatMapItems,
  type CheckboxNodesMapItem,
  type CheckboxGroupItemProps,
} from '#src/components/Menu/MenuItemWithCheckbox';
import type { DropMenuComponentProps } from '#src/components/DropMenu';
import type { ComponentDimension } from '#src/components/input/types';

export interface TreeSelectProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onSelect'>,
    Pick<DropMenuComponentProps, 'renderTopPanel' | 'renderBottomPanel'>,
    Pick<DropDownTreeProps, 'dropdownConfig'> {
  value?: string[];
  /** Отображать статус загрузки данных */
  isLoading?: boolean;

  /** Значение по умолчанию для некотролируемого селекта */
  defaultValue?: string[];

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений */
  onClearIconClick?: () => void;

  /** Состояние skeleton */
  skeleton?: boolean;

  /**
   * Список опций дерева
   */
  items: Array<TreeSelectItemProps>;

  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  openButtonPropsConfig?: (
    props: React.ComponentProps<typeof OpenStatusButton>,
  ) => Partial<React.ComponentProps<typeof OpenStatusButton> & DataAttributes>;
  /** Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  clearButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton> & DataAttributes>;
  /** Конфиг функция пропсов для внутреннего input. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  inputPropsConfig?: (
    props: React.ComponentProps<typeof StyledMultiInput>,
  ) => Partial<React.ComponentProps<typeof StyledMultiInput> & DataAttributes>;

  /** Срабатывает при изменении значения */
  onChange?: (value: string[]) => void;

  /** Срабатывает при выборе отдельного item */
  onSelect?: (id: string) => void;

  /** Срабатывает при отмене выбора отдельного item */
  onDeselect?: (id: string) => void;

  /** Срабатывает при открытии/закрытии DropDownMenu */
  onOpenChange?: (open: boolean) => void;
}

export const TreeSelect = forwardRef<HTMLInputElement, TreeSelectProps>(
  (
    {
      value,
      defaultValue,
      items,
      displayClearIcon,
      disabled,
      isLoading,
      readOnly,
      placeholder,
      dimension = 'm',
      renderTopPanel,
      renderBottomPanel,
      openButtonPropsConfig,
      clearButtonPropsConfig,
      inputPropsConfig,
      dropdownConfig,
      onOpenChange,
      onSelect,
      onDeselect,
      onChange,
      onClearIconClick,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputContainerRef = useRef<HTMLDivElement>(null);

    const [open, setOpen] = useState<boolean>(false);
    const cloneTree = useCallback((src: Array<TreeSelectItemProps>, selected: Set<string>) => {
      const cloneNode = (n: TreeSelectItemProps): TreeSelectItemProps => ({
        ...n,
        checked: selected.has(n.id),
        children: n.children?.length ? n.children.map(cloneNode) : undefined,
      });
      return src.map(cloneNode);
    }, []);

    const [stateItems, setStateItems] = useState<Array<TreeSelectItemProps>>(() => cloneTree(items, new Set()));
    const [selectedChips, setSelectedChips] = useState<Array<CheckboxGroupItemProps>>([]);

    useEffect(() => {
      const ids = value ?? defaultValue ?? [];
      const selectedSet = new Set(ids);
      const nextItems = cloneTree(items, selectedSet);
      const map = checkboxTreeToMap(nextItems);
      const selected: CheckboxGroupItemProps[] = [];
      map.forEach((v) => {
        if (v.node.checked) selected.push(v.node);
      });
      setStateItems(nextItems);
      setSelectedChips(selected);
    }, [cloneTree, items, defaultValue, value]);

    const handleClickOutside = (e: Event) => {
      if (e.target && inputContainerRef.current?.contains(e.target as Node)) {
        return;
      }
      setOpen(false);
      onOpenChange?.(false);
    };

    const toggleOpen = () => {
      setOpen((prevState) => {
        const newValue = !prevState;
        onOpenChange?.(newValue);
        return newValue;
      });
    };

    const getDropdownConfig = (config: DropdownContainerProps) => {
      return {
        ...config,
        ...dropdownConfig?.(config),
        onClickOutside: handleClickOutside,
        targetElement: inputContainerRef?.current,
      };
    };

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
      const element = (e.target as HTMLElement).closest('[data-role]');
      if (
        element instanceof HTMLElement &&
        (element.dataset.role === 'icon-pane-before' || element.dataset.role === 'icon-pane-after')
      )
        return;

      toggleOpen();
    };

    const getInputContainerProps = (props: ContainerProps) => ({
      ...props,
      ref: inputContainerRef,
      onClick: handleClick,
    });

    const openButtonProps = {
      $isOpen: open,
      'aria-hidden': true,
      onClick: toggleOpen,
    } satisfies React.ComponentProps<typeof OpenStatusButton>;

    const iconsAfter = [];
    if (!readOnly)
      iconsAfter.push(
        <OpenStatusButton
          data-disabled={disabled ? true : undefined}
          data-loading={isLoading ? true : undefined}
          {...openButtonProps}
          {...openButtonPropsConfig?.(openButtonProps)}
        />,
      );

    const flatMap = useMemo<FlatMapItems>(() => checkboxTreeToMap(stateItems), [stateItems]);

    const parentByChildId = useMemo(() => {
      const m = new Map<string, string | undefined>();
      const walk = (nodes: TreeSelectItemProps[], parentId?: string) => {
        for (const n of nodes) {
          m.set(n.id, parentId);
          if (n.children?.length) walk(n.children, n.id);
        }
      };
      walk(stateItems);
      return m;
    }, [stateItems]);

    const collectSubtreeIds = (node?: CheckboxGroupItemProps): string[] => {
      if (!node) return [];
      const ids: string[] = [node.id];
      if (node.children?.length) {
        node.children.forEach((child) => ids.push(...collectSubtreeIds(child)));
      }
      return ids;
    };

    const hasCheckedDescendantExcept = (rootId: string, rootNode: CheckboxGroupItemProps) => {
      const ids = collectSubtreeIds(rootNode);
      return ids.some((sid) => sid !== rootId && flatMap.get(sid)?.node.checked);
    };

    const bubbleUncheckParentsAfterLeafDeselect = (
      leafId: string,
      chips: Array<CheckboxGroupItemProps>,
    ): Array<CheckboxGroupItemProps> => {
      let nextChips = chips;
      let parentId = parentByChildId.get(leafId);
      while (parentId) {
        const parentEntry = flatMap.get(parentId);
        if (!parentEntry) break;
        if (!hasCheckedDescendantExcept(parentId, parentEntry.node)) {
          parentEntry.node.checked = false;
          nextChips = nextChips.filter((c) => c.id !== parentId);
        }
        parentId = parentByChildId.get(parentId);
      }
      return nextChips;
    };

    const handleDeleteChip = (id?: string) => {
      if (id) {
        handleDeselectItem(id);
        const newValue = [...flatMap.values()].filter((item) => !!item.node.checked).map((item) => item.node.id);
        onChange?.(newValue);
      }
    };

    const selectItem = (items: Array<CheckboxGroupItemProps>, item: CheckboxNodesMapItem) => {
      const idsToSelect = item.node.children?.length ? collectSubtreeIds(item.node) : [item.node.id];

      idsToSelect.forEach((nextId) => {
        const nextItem = flatMap.get(nextId);
        if (!nextItem) return;
        nextItem.node.checked = true;
        if (!items.some((chip) => chip.id === nextItem.node.id)) {
          items.push(nextItem.node);
        }
      });
    };

    const handleSelectItem = (id: string) => {
      const item = flatMap.get(id);
      if (item) {
        const newSelectedChips = [...selectedChips];

        selectItem(newSelectedChips, item);

        setSelectedChips(newSelectedChips);
        setStateItems([...stateItems]);
        onSelect?.(id);
      }
    };

    const handleDeselectItem = (id: string) => {
      const item = flatMap.get(id);
      if (item) {
        if (item.node.children?.length) {
          const subtreeIds = collectSubtreeIds(item.node);
          subtreeIds.forEach((subtreeId) => {
            const subtreeItem = flatMap.get(subtreeId);
            if (subtreeItem) subtreeItem.node.checked = false;
          });
          setSelectedChips(selectedChips.filter((chip) => !subtreeIds.includes(chip.id)));
        } else if (item.dependencies && item.dependencies.length > 0) {
          item.node.checked = false;
          item.dependencies.forEach((depId) => {
            const depItem = flatMap.get(depId);
            if (depItem) depItem.node.checked = false;
          });
          const idsToRemove = [item.node.id, ...item.dependencies];
          setSelectedChips(selectedChips.filter((chip) => !idsToRemove.includes(chip.id)));
        } else {
          item.node.checked = false;
          let newSelectedChips = selectedChips.filter((chip) => chip.id !== item.node.id);
          newSelectedChips = bubbleUncheckParentsAfterLeafDeselect(id, newSelectedChips);
          setSelectedChips(newSelectedChips);
        }

        onDeselect?.(id);
      }

      setStateItems([...stateItems]);
    };

    const handleClearOptions = () => {
      setSelectedChips([]);
      flatMap.forEach((item) => (item.node.checked = false));
      setStateItems([...stateItems]);
      onClearIconClick?.();
      onChange?.([]);
    };

    const handleSelectedChange = (value: Array<string>) => {
      onChange?.(value);
    };

    const renderSelectedChips = () => {
      return selectedChips.map((item) => {
        return (
          <StyledChip
            id={item.id}
            key={item.id}
            onClick={(e) => e.stopPropagation()}
            onClose={readOnly ? undefined : handleDeleteChip}
            tabIndex={-1}
            dimension="s"
            appearance="filled"
            readOnly={readOnly}
            disabled={item.disabled || disabled}
          >
            {item.label}
          </StyledChip>
        );
      });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const inputProps = {
      ...props,
      ref: refSetter(ref, inputRef),
      placeholder,
      containerPropsConfig: getInputContainerProps,
      displayClearIcon: displayClearIcon && selectedChips.length > 0,
      iconsAfter,
      clearButtonPropsConfig,
      onClearOptions: handleClearOptions,
      dimension,
      $hidden: selectedChips.length > 0,
      onKeyDown: handleKeyDown,
      onPaste: handlePaste,
      onDrop: handleDrop,
    } satisfies React.ComponentProps<typeof StyledMultiInput>;

    return (
      <>
        <StyledMultiInput {...inputProps} {...inputPropsConfig?.(inputProps)}>
          {renderSelectedChips()}
        </StyledMultiInput>
        {open && (
          <DropDownTree
            dropdownConfig={getDropdownConfig}
            items={flatMap}
            onSelectImem={handleSelectItem}
            onDeselectItem={handleDeselectItem}
            onChangeSelected={handleSelectedChange}
            dimension={dimension === 'xl' ? 'l' : dimension}
            renderTopPanel={renderTopPanel}
            renderBottomPanel={renderBottomPanel}
          />
        )}
      </>
    );
  },
);

TreeSelect.displayName = 'TreeSelect';

export type { TreeSelectItemProps };
