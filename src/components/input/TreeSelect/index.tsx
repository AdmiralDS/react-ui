import { forwardRef, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { DropDownTree, type DropDownTreeProps } from './DropDownTree';
import { refSetter } from '#src/components/common/utils/refSetter';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { StyledMultiInput, StyledChip } from './styled';
import type { ContainerProps } from '#src/components/input/MultiInput';
import type { InputIconButton } from '#src/components/InputIconButton';
import type { DataAttributes } from 'styled-components';
import type { DropdownContainerProps, TreeSelectItemProps, ShowCheckedStrategyProps } from './types';
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

  /** Минимальное количество строк поля */
  minRowCount?: number | 'none';

  /** Максимальное количество строк поля */
  maxRowCount?: number | 'none';

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

  /** Стратегия отображения выбранных чипсов */
  showCheckedStrategy?: ShowCheckedStrategyProps;
}

export const TreeSelect = forwardRef<HTMLInputElement, TreeSelectProps>(
  (
    {
      value,
      defaultValue,
      items,
      showCheckedStrategy = 'SHOW_ALL',
      displayClearIcon,
      disabled,
      isLoading,
      readOnly,
      placeholder,
      dimension = 'm',
      minRowCount = 'none',
      maxRowCount = 'none',
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
    const optionsWrapperRef = useRef<HTMLDivElement>(null);

    const [open, setOpen] = useState<boolean>(false);
    const cloneTree = (src: Array<TreeSelectItemProps>, selected: Set<string>) => {
      const cloneNode = (node: TreeSelectItemProps): TreeSelectItemProps => ({
        ...node,
        checked: selected.has(node.id),
        children: node.children?.length ? node.children.map(cloneNode) : undefined,
      });
      return src.map(cloneNode);
    };

    const [stateItems, setStateItems] = useState<Array<TreeSelectItemProps>>(() => cloneTree(items, new Set()));
    const [selectedChips, setSelectedChips] = useState<Array<CheckboxGroupItemProps>>([]);
    const [visibleChipCount, setVisibleChipCount] = useState<number | null>(null);

    const maxRowCountValue = maxRowCount !== 'none' ? maxRowCount : undefined;
    const minRowCountValue = minRowCount !== 'none' ? minRowCount : undefined;
    const isCollapsed = !open && !!maxRowCountValue;

    const normalizeGroupChecked = (map: FlatMapItems) => {
      map.forEach((mapItem) => {
        if (mapItem.dependencies?.length) {
          mapItem.node.checked = mapItem.dependencies.every((depId) => !!map.get(depId)?.node.checked);
        }
      });
    };

    const collectSubtreeIds = (node?: CheckboxGroupItemProps): string[] => {
      if (!node) return [];
      const ids: string[] = [node.id];
      if (node.children?.length) {
        node.children.forEach((child) => ids.push(...collectSubtreeIds(child)));
      }
      return ids;
    };

    const buildSelectedChips = useCallback(
      (nextItems: Array<TreeSelectItemProps>): Array<CheckboxGroupItemProps> => {
        const map = checkboxTreeToMap(nextItems);

        if (showCheckedStrategy === 'SHOW_ALL') {
          const chips: CheckboxGroupItemProps[] = [];
          map.forEach((item) => {
            if (item.node.checked) chips.push(item.node);
          });
          return chips;
        }

        if (showCheckedStrategy === 'SHOW_CHILD') {
          const chips: CheckboxGroupItemProps[] = [];
          map.forEach((item) => {
            if (item.node.checked && !item.node.children?.length) chips.push(item.node);
          });
          return chips;
        }

        const collect = (nodes: Array<TreeSelectItemProps>): [CheckboxGroupItemProps[], boolean] => {
          const chips: CheckboxGroupItemProps[] = [];
          let allChecked = true;

          nodes.forEach((node) => {
            if (node.children?.length) {
              const [childChips, childrenAllChecked] = collect(node.children);
              if (childrenAllChecked) {
                chips.push(node as unknown as CheckboxGroupItemProps);
              } else {
                chips.push(...childChips);
              }
              allChecked = allChecked && childrenAllChecked;
            } else {
              if (node.checked) chips.push(node as unknown as CheckboxGroupItemProps);
              allChecked = allChecked && !!node.checked;
            }
          });

          return [chips, allChecked];
        };

        return collect(nextItems)[0];
      },
      [showCheckedStrategy],
    );

    useLayoutEffect(() => {
      const ids = value ?? defaultValue ?? [];
      const selectedSet = new Set(ids);
      const nextItems = cloneTree(items, selectedSet);

      const map = checkboxTreeToMap(nextItems);
      ids.forEach((id) => {
        const item = map.get(id);
        if (!item) return;
        const subtree = item.node.children?.length ? collectSubtreeIds(item.node) : [item.node.id];
        subtree.forEach((sid) => {
          const entry = map.get(sid);
          if (entry) entry.node.checked = true;
        });
      });
      normalizeGroupChecked(map);

      setStateItems(nextItems);
      setSelectedChips(buildSelectedChips(nextItems));
    }, [buildSelectedChips, items, defaultValue, value]);

    useLayoutEffect(() => {
      if (!isCollapsed) {
        setVisibleChipCount(null);
        return;
      }

      const wrapper = optionsWrapperRef.current;
      if (!wrapper) return;

      let raf = 0;
      let postRaf = 0;
      let ro: ResizeObserver | null = null;

      const eps = 1;

      const isFullyVisible = (el: HTMLElement, containerRect: DOMRect) => {
        const r = el.getBoundingClientRect();
        return (
          r.top >= containerRect.top - eps &&
          r.left >= containerRect.left - eps &&
          r.bottom <= containerRect.bottom + eps &&
          r.right <= containerRect.right + eps
        );
      };

      const schedule = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(recompute);
      };

      const recompute = () => {
        const chipEls = Array.from(wrapper.querySelectorAll<HTMLElement>('[data-tree-select-chip="true"]'));
        if (chipEls.length === 0) {
          setVisibleChipCount(null);
          return;
        }

        const wrapperRect = wrapper.getBoundingClientRect();
        let count = 0;
        for (const el of chipEls) {
          if (!isFullyVisible(el, wrapperRect)) break;
          count += 1;
        }

        const hasOverflow =
          wrapper.scrollWidth > wrapper.clientWidth + eps || wrapper.scrollHeight > wrapper.clientHeight + eps;

        const next = hasOverflow
          ? Math.max(0, Math.min(count, chipEls.length - 1))
          : count >= chipEls.length
            ? null
            : count;
        setVisibleChipCount((prev) => (prev === next ? prev : next));

        cancelAnimationFrame(postRaf);
        postRaf = requestAnimationFrame(() => {
          const overflowEl = wrapper.querySelector<HTMLElement>('[data-testid="tree-select-overflow-chip"]');
          if (!overflowEl) return;
          const wr = wrapper.getBoundingClientRect();
          if (isFullyVisible(overflowEl, wr)) return;
          setVisibleChipCount((prev) => {
            if (prev === null) return prev;
            const decreased = Math.max(0, prev - 1);
            return prev === decreased ? prev : decreased;
          });
        });
      };

      schedule();
      ro = new ResizeObserver(schedule);
      ro.observe(wrapper);

      return () => {
        cancelAnimationFrame(raf);
        cancelAnimationFrame(postRaf);
        ro?.disconnect();
        ro = null;
      };
    }, [isCollapsed, selectedChips.length, maxRowCountValue]);

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

    const childToParentMap = useMemo(() => {
      const map = new Map<string, string>();

      const processNode = (node: TreeSelectItemProps, parentId?: string) => {
        if (parentId) map.set(node.id, parentId);
        node.children?.forEach((child) => processNode(child, node.id));
      };

      stateItems.forEach((node) => processNode(node));
      return map;
    }, [stateItems]);

    const hasCheckedDescendantExcept = (rootId: string, rootNode: CheckboxGroupItemProps) => {
      const ids = collectSubtreeIds(rootNode);
      return ids.some((sid) => sid !== rootId && flatMap.get(sid)?.node.checked);
    };

    const bubbleUncheckParentsAfterLeafDeselect = (leafId: string) => {
      let parentId = childToParentMap.get(leafId);
      while (parentId) {
        const parentEntry = flatMap.get(parentId);
        if (!parentEntry) break;
        if (!hasCheckedDescendantExcept(parentId, parentEntry.node)) {
          parentEntry.node.checked = false;
        }
        parentId = childToParentMap.get(parentId);
      }
    };

    const handleDeleteChip = (id?: string) => {
      if (id) {
        handleDeselectItem(id);
        const newValue = [...flatMap.values()].filter((item) => !!item.node.checked).map((item) => item.node.id);
        onChange?.(newValue);
      }
    };

    const handleSelectItem = (id: string) => {
      const item = flatMap.get(id);
      if (item) {
        const idsToSelect = item.node.children?.length ? collectSubtreeIds(item.node) : [item.node.id];
        idsToSelect.forEach((nextId) => {
          const nextItem = flatMap.get(nextId);
          if (!nextItem) return;
          nextItem.node.checked = true;
        });

        normalizeGroupChecked(flatMap);
        const nextStateItems = [...stateItems];
        setStateItems(nextStateItems);
        setSelectedChips(buildSelectedChips(nextStateItems));
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
        } else if (item.dependencies && item.dependencies.length > 0) {
          item.node.checked = false;
          item.dependencies.forEach((depId) => {
            const depItem = flatMap.get(depId);
            if (depItem) depItem.node.checked = false;
          });
        } else {
          item.node.checked = false;
          bubbleUncheckParentsAfterLeafDeselect(id);
        }
        normalizeGroupChecked(flatMap);
        onDeselect?.(id);
      }

      const nextStateItems = [...stateItems];
      setStateItems(nextStateItems);
      setSelectedChips(buildSelectedChips(nextStateItems));
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
      const chipsToRender =
        isCollapsed && visibleChipCount !== null ? selectedChips.slice(0, visibleChipCount) : selectedChips;
      const hiddenCount = isCollapsed && visibleChipCount !== null ? selectedChips.length - chipsToRender.length : 0;

      return (
        <>
          {chipsToRender.map((item) => {
            return (
              <StyledChip
                id={item.id}
                key={item.id}
                data-tree-select-chip="true"
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
          })}
          {hiddenCount > 0 && (
            <StyledChip
              key="tree-select-overflow-chip"
              data-testid="tree-select-overflow-chip"
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
              dimension="s"
              appearance="filled"
              readOnly
              disabled={disabled}
            >
              {`+${hiddenCount}`}
            </StyledChip>
          )}
        </>
      );
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
      optionsWrapperRef,
      $opened: open,
      $minRowCount: minRowCountValue,
      $maxRowCount: maxRowCountValue,
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
