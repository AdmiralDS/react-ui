import React, { HTMLAttributes } from 'react';
import { Tag, TagProps } from '#src/components/Tag';
import { DropMenu } from '#src/components/DropMenu';
import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';

export interface TagOptionProps extends Omit<TagProps, 'dimension' | 'as'> {
  id: string;
  display: string;
}

export interface TagMenuProps extends HTMLAttributes<HTMLButtonElement>, TagProps {
  /** Опции выпадающего списка */
  options: Array<TagOptionProps>;
  /** Выбранная опция */
  selected?: TagOptionProps;
  /** Колбек на изменение выбранной опции */
  onSelectOption: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /**
   * Позволяет рендерить компонент, используя другой тег HTML (https://styled-components.com/docs/api#as-polymorphic-prop).
   * В storybook в качестве примера приведены несколько возможных вариантов этого параметра (кроме них можно использовать любой другой HTML тег).
   */
  as?: React.ElementType;
}

export const TagMenu = React.forwardRef<HTMLButtonElement, TagMenuProps>(
  ({ dimension = 'm', width, onSelectOption, options, selected, as, ...props }, ref) => {
    const model = React.useMemo(() => {
      return options.map((item) => ({
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MenuItem dimension={dimension} {...options} key={item.id}>
            {item.display}
          </MenuItem>
        ),
      }));
    }, [options, dimension]);

    return (
      <DropMenu
        {...props}
        ref={ref}
        dimension="m"
        items={model}
        selected={selected?.display}
        onChange={onSelectOption}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <Tag
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
            >
              {selected?.display}
            </Tag>
          );
        }}
      />
    );
  },
);

TagMenu.displayName = 'TagMenu';
