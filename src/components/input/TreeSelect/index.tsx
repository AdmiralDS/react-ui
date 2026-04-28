import { forwardRef, useLayoutEffect, useMemo, useRef, useState } from 'react';
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

    const cloneItems = (src: Array<TreeSelectItemProps>): Array<TreeSelectItemProps> => {
      return src.map((item) => ({
        ...item,
        children: item.children ? cloneItems(item.children) : undefined,
      }));
    };

    const [open, setOpen] = useState<boolean>(false);
    const [stateItems, setStateItems] = useState<Array<TreeSelectItemProps>>(() => cloneItems(items));
    const [selectedChips, setSelectedChips] = useState<Array<CheckboxGroupItemProps>>([]);
    const [visibleChipCount, setVisibleChipCount] = useState<number | null>(null);

    const normalizeGroupChecked = (map: FlatMapItems) => {
      map.forEach((mapItem) => {
        if (mapItem.dependencies?.length) {
          mapItem.node.checked = mapItem.dependencies.every((depId) => !!map.get(depId)?.node.checked);
        }
      });
    };

    const getSelectedChipsFromTree = (tree: Array<TreeSelectItemProps>): CheckboxGroupItemProps[] => {
      const res: CheckboxGroupItemProps[] = [];

      const walk = (nodes: Array<TreeSelectItemProps>) => {
        nodes.forEach((node) => {
          if (node.checked) {
            res.push(node as unknown as CheckboxGroupItemProps);
          }

          const children = node.children;
          if (Array.isArray(children) && children.length > 0) {
            walk(children);
          }
        });
      };

      walk(tree);
      return res;
    };

    useLayoutEffect(() => {
      const array = value ?? defaultValue ?? [];
      const nextItems = cloneItems(items);
      const map = checkboxTreeToMap(nextItems as unknown as Array<CheckboxGroupItemProps>);

      map.forEach((mapItem) => {
        mapItem.node.checked = false;
      });

      array.forEach((id) => {
        const item = map.get(id);
        if (!item) return;
        item.node.checked = true;
        item.dependencies?.forEach((depId) => {
          const dep = map.get(depId);
          if (dep) dep.node.checked = true;
        });
      });

      normalizeGroupChecked(map);
      setStateItems(nextItems);
      setSelectedChips(getSelectedChipsFromTree(nextItems));
    }, [items, defaultValue, value]);

    const maxRowCountValue = maxRowCount !== 'none' ? maxRowCount : undefined;
    const minRowCountValue = minRowCount !== 'none' ? minRowCount : undefined;

    const isCollapsed = !open && !!maxRowCountValue;

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

        // Если контент переполнен, но мы "видим" все отрисованные чипы,
        // значит нужно принудительно показать +N (освободив под него место).
        const next = hasOverflow
          ? Math.max(0, Math.min(count, chipEls.length - 1))
          : count >= chipEls.length
            ? null
            : count;
        setVisibleChipCount((prev) => (prev === next ? prev : next));

        // Второй проход: если +N отрисован, но не помещается — уменьшаем кол-во видимых чипов.
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

      // первичный расчёт + подписка на resize контейнера
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

    const handleDeleteChip = (id?: string) => {
      if (id) {
        handleDeselectItem(id);
        const newValue = selectedChips.filter((chip) => !!chip.checked).map((chip) => chip.id);
        onChange?.(newValue);
      }
    };

    const handleSelectItem = (id: string) => {
      const item = flatMap.get(id);
      if (item) {
        item.node.checked = true;
        item.dependencies?.forEach((depId) => {
          const depItem = flatMap.get(depId);
          if (depItem) depItem.node.checked = true;
        });

        normalizeGroupChecked(flatMap);
        const nextStateItems = [...stateItems];
        setStateItems(nextStateItems);
        setSelectedChips(getSelectedChipsFromTree(nextStateItems));
        onSelect?.(id);
      }
    };

    const handleDeselectItem = (id: string) => {
      const item = flatMap.get(id);
      if (item) {
        item.node.checked = false;

        item.dependencies?.forEach((depId) => {
          const depItem = flatMap.get(depId);
          if (depItem) depItem.node.checked = false;
        });

        normalizeGroupChecked(flatMap);
        onDeselect?.(id);
      }

      const nextStateItems = [...stateItems];
      setStateItems(nextStateItems);
      setSelectedChips(getSelectedChipsFromTree(nextStateItems));
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
