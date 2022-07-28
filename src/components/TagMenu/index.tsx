import React, { HTMLAttributes } from 'react';
import { Tag, TagProps } from '#src/components/Tag';
import { DropMenu } from '#src/components/DropMenu';
import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';

export interface TagOptionProps extends Omit<TagProps, 'dimension'> {
  id: string;
  display: string;
}

export interface TagMenuProps extends HTMLAttributes<HTMLButtonElement>, TagProps {
  /** Опции выпадающего списка */
  options: Array<TagOptionProps>;
  /** Выбранная опция */
  selected?: string;
  /** Колбек на изменение выбранной опции */
  onSelectOption: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Отключение компонента */
  disabled?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /**
   * Позволяет рендерить компонент, используя другой тег HTML (https://styled-components.com/docs/api#as-polymorphic-prop).
   * В storybook в качестве примера приведены несколько возможных вариантов этого параметра (кроме них можно использовать любой другой HTML тег).
   */
  as?: React.ElementType;
}

export const TagMenu = React.forwardRef<HTMLButtonElement, TagMenuProps>(
  (
    {
      children,
      kind = 'neutral',
      dimension = 'm',
      width,
      statusViaBackground = false,
      icon,
      onSelectOption,
      options,
      selected,
      as,
      ...props
    },
    ref,
  ) => {
    const model = React.useMemo(() => {
      return options.map((item) => ({
        id: item.display,
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
        selected={selected}
        onChange={onSelectOption}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <Tag
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              kind={kind}
              icon={icon}
              dimension={dimension}
              width={width}
              statusViaBackground={statusViaBackground}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
              aria-expanded={menuState}
              statusIcon={statusIcon}
              as={as}
            >
              {selected}
            </Tag>
          );
        }}
      />
    );
  },
);

TagMenu.displayName = 'TagMenu';
