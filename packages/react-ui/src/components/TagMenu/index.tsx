import type { CSSProperties, HTMLAttributes } from 'react';
import * as React from 'react';
import type { TagVisualProps, TagSizeProps } from '#src/components/Tag';
import { Tag } from '#src/components/Tag';
import type { DropMenuComponentProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import type { ItemProps, RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export interface TagOptionProps extends HTMLAttributes<HTMLButtonElement>, TagVisualProps {
  id: string;
  tagText: string;
}

export interface TagMenuProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'>,
    TagSizeProps,
    DropMenuComponentProps {
  /** Опции выпадающего списка */
  items?: Array<ItemProps>;
  /** @deprecated use items instead
   * Опции выпадающего списка */
  options?: Array<TagOptionProps>;
  /** Выбранная опция */
  selected?: TagOptionProps;
  /** @deprecated use onSelectItem instead
   * Колбек на изменение выбранной опции */
  onSelectOption?: (id: string) => void;
  /** @deprecated use isVisible and onVisibilityChange instead
   * Колбек на открытие меню */
  onOpen?: () => void;
  /** @deprecated use isVisible and onVisibilityChange instead
   * Колбек на закрытие меню */
  onClose?: () => void;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /**  Ширина меню */
  menuWidth?: string;
  /** Задает максимальную высоту меню */
  menuMaxHeight?: string | number;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;
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
      onSelectItem = (id: string) => undefined,
      active,
      onActivateItem,
      isVisible,
      onVisibilityChange,
      onClickOutside,
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

    const dropMenuProps = passDropdownDataAttributes(props);

    return (
      <DropMenu
        ref={ref}
        dimension="m"
        menuWidth={menuWidth}
        menuMaxHeight={menuMaxHeight}
        items={model}
        selected={selected?.id}
        onSelectItem={onSelectOption || onSelectItem}
        active={active}
        onActivateItem={onActivateItem}
        disableSelectedOptionHighlight={disableSelectedOptionHighlight}
        onOpen={onOpen}
        onClose={onClose}
        isVisible={isVisible}
        onVisibilityChange={onVisibilityChange}
        onClickOutside={onClickOutside}
        alignSelf={alignSelf}
        dropContainerCssMixin={dropContainerCssMixin}
        dropContainerClassName={dropContainerClassName}
        dropContainerStyle={dropContainerStyle}
        {...dropMenuProps}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <Tag
              {...props}
              ref={buttonRef as React.Ref<HTMLButtonElement>}
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
