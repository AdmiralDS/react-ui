import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { DropDownTree } from './DropDownTree';
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
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onSelect'>,
    Pick<DropMenuComponentProps, 'renderTopPanel' | 'renderBottomPanel'> {
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
      onOpenChange,
      onSelect,
      onDeselect,
      onChange,
      onClearIconClick,
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputContainerRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [stateItems, setStateItems] = useState<Array<TreeSelectItemProps>>([...items]);
    const [selectedChips, setSelectedChips] = useState<Array<CheckboxGroupItemProps>>([]);

    useEffect(() => {
      const array = defaultValue ?? value ?? [];

      const selected: CheckboxGroupItemProps[] = array
        .map((item) => flatMap.get(item)?.node)
        .filter((item): item is CheckboxGroupItemProps => !!item); // https://www.benmvp.com/blog/filtering-undefined-elements-from-array-typescript/
      selected.forEach((item) => (item.checked = true));

      setSelectedChips(selected);
    }, [defaultValue, value]);

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
      return { ...config, onClickOutside: handleClickOutside, targetElement: inputContainerRef?.current };
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

    const selectItem = (items: Array<CheckboxGroupItemProps>, item: CheckboxNodesMapItem) => {
      item.node.checked = true;
      if (item.dependencies && item.dependencies.length > 0) {
        item.dependencies?.forEach((depId) => {
          const depItem = flatMap.get(depId);
          if (depItem) {
            selectItem(items, depItem);
          }
        });
      } else {
        const index = selectedChips.findIndex((chip) => chip.id === item.node.id);
        if (index === -1) {
          items.push(item.node);
        }
      }
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
        item.node.checked = false;

        if (item.dependencies && item.dependencies.length > 0) {
          const newSelectedChips = selectedChips.filter((chip) => !item.dependencies?.includes(chip.id));
          setSelectedChips(newSelectedChips);
        } else {
          const index = selectedChips.findIndex((chip) => chip.id === item.node.id);
          if (index > -1) {
            const newSelectedChips = [...selectedChips];
            newSelectedChips.splice(index, 1);
            setSelectedChips(newSelectedChips);
          }
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

    return (
      <>
        <StyledMultiInput
          ref={refSetter(ref, inputRef)}
          placeholder={placeholder}
          containerPropsConfig={getInputContainerProps}
          displayClearIcon={displayClearIcon && selectedChips.length > 0}
          iconsAfter={iconsAfter}
          clearButtonPropsConfig={clearButtonPropsConfig}
          onClearOptions={handleClearOptions}
          dimension={dimension}
          $hidden={selectedChips.length > 0}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onDrop={handleDrop}
        >
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
