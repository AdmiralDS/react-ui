import type { HTMLAttributes } from 'react';
import * as React from 'react';

import type { TagVisualProps, TagSizeProps } from '#src/components/Tag';
import { Tag } from '#src/components/Tag';
import type { DropMenuComponentProps, DropMenuStyleProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import type { RenderOptionProps, MenuModelItemProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import { refSetter } from '../common/utils/refSetter';

export interface TagOptionProps extends HTMLAttributes<HTMLButtonElement>, TagVisualProps {
  id: string;
  tagText: string;
}

export interface TagMenuProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'>,
    TagSizeProps,
    Omit<DropMenuComponentProps, 'targetElement'>,
    DropMenuStyleProps {
  /** Опции выпадающего списка */
  items?: Array<MenuModelItemProps>;
  /**
   * @deprecated Помечено как deprecated в версии 3.4.0, будет удалено в версии 9.х.х.
   * Взамен используйте параметр items
   *
   * Опции выпадающего списка */
  options?: Array<TagOptionProps>;
  /** Выбранная опция */
  selected?: TagOptionProps;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
   * Взамен используйте параметр onSelectItem
   *
   * Колбек на изменение выбранной опции */
  onSelectOption?: (id: string) => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
   * Взамен используйте параметры isVisible и onVisibilityChange
   *
   * Колбек на открытие меню */
  onOpen?: () => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
   * Взамен используйте параметры isVisible и onVisibilityChange
   *
   * Колбек на закрытие меню */
  onClose?: () => void;
}

export const TagMenu = React.forwardRef<HTMLButtonElement, TagMenuProps>(
  (
    {
      dimension = 'm',
      width,
      onSelectOption,
      onOpen,
      onClose,
      items,
      options,
      disableSelectedOptionHighlight,
      selected,
      onSelectItem = () => undefined,
      active,
      onActivateItem,
      isVisible,
      onVisibilityChange,
      onClickOutside,
      renderTopPanel,
      renderBottomPanel,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      as,
      className = '',
      alignSelf = 'flex-end',
      menuWidth,
      menuMaxHeight,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      ...props
    },
    ref,
  ) => {
    const model =
      items ||
      React.useMemo(() => {
        if (options) {
          return options.map((item) => ({
            id: item.id,
            render: (options: RenderOptionProps) => (
              <MenuItem dimension="m" {...options} key={item.id}>
                {item.tagText}
              </MenuItem>
            ),
          }));
        } else {
          return [];
        }
      }, [options, dimension]);

    const dropMenuProps = {
      ...passDropdownDataAttributes(props),
      isVisible,
      onVisibilityChange,
      active,
      onActivateItem,
      onOpen,
      onClose,
      disableSelectedOptionHighlight,
      renderTopPanel,
      renderBottomPanel,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      onClickOutside,
      menuWidth,
      menuMaxHeight,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      alignSelf,
    };

    return (
      <DropMenu
        {...dropMenuProps}
        dimension="m"
        items={model}
        selected={selected?.id}
        onSelectItem={onSelectOption || onSelectItem}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <Tag
              {...props}
              ref={refSetter(ref, buttonRef as React.Ref<HTMLButtonElement>)}
              kind={selected?.kind}
              icon={selected?.icon}
              dimension={dimension}
              width={width}
              statusViaBackground={selected?.statusViaBackground}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
              aria-expanded={menuState}
              statusIcon={statusIcon}
              as={as}
              className={className + ' tag-menu-with-dropdown'}
            >
              {selected?.tagText}
            </Tag>
          );
        }}
      />
    );
  },
);

TagMenu.displayName = 'TagMenu';
