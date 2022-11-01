import * as React from 'react';
import { useOptionGroupContext } from '#src/components/input/Select/useSelectContext';
import { ComponentDimension, Highlight } from '#src/components/input';
import type { OptionProps } from '#src/components/input/Select/Option/types';
import { CustomOption, StyledCheckbox } from './styled';
import { ItemProps, MenuItem, MenuItemProps, RenderOptionProps } from '#src/components/MenuItem';
import { useDropDownContext } from '#src/components/input/Select/Dropdown/Context';
import type { ItemDimension } from '#src/components/MenuItem/mixins';
import { ReactNode, ReactPortal, useMemo } from 'react';

const convertDimension = (selectDimension?: ComponentDimension): ItemDimension | undefined => {
  return selectDimension === 'xl' ? 'l' : selectDimension;
};

export const DropDownOption = ({ id, disabled = false, value, children, renderOption, ...htmlProps }: OptionProps) => {
  const dropDownContext = useDropDownContext();
  const optionGroupContext = useOptionGroupContext();

  const optionIsDisabled = optionGroupContext?.disabled || disabled;

  const highlightedChildrenRender = useMemo(
    () =>
      typeof children === 'string' && dropDownContext?.defaultHighlighted ? (
        <Highlight>{children}</Highlight>
      ) : (
        children
      ),
    [dropDownContext?.searchValue, dropDownContext?.defaultHighlighted, children],
  );

  const multipleOptionRender = () => (
    <>
      {dropDownContext?.showCheckbox && (
        <StyledCheckbox
          checked={dropDownContext?.selectValue?.includes(value)}
          dimension={dropDownContext?.dimension === 's' ? 's' : 'm'}
          disabled={disabled}
          readOnly
        />
      )}
      {highlightedChildrenRender}
    </>
  );

  const ref = React.useRef<HTMLDivElement>(null);

  const defaultOptionRender = dropDownContext?.multiple ? multipleOptionRender() : highlightedChildrenRender;

  const handleClick = () => {
    dropDownContext?.onOptionClick?.(value);
  };

  const handleHover = (id: string) => {
    if (dropDownContext?.activeItem !== id) {
      dropDownContext?.onActivateItem?.(id);
    }
  };

  React.useEffect(() => {
    const searchValue = dropDownContext?.searchValue;
    const selectValue = dropDownContext?.selectValue;
    const itemId = id ?? value;
    const isHovered = dropDownContext?.activeItem === itemId;

    const item: ItemProps = {
      id: itemId,
      render: (options: RenderOptionProps) => {
        if (renderOption) {
          return renderOption({ disabled: optionIsDisabled, searchValue, isHovered });
        }

        return (
          <MenuItem {...options} dimension={convertDimension(dropDownContext?.dimension)} key={itemId}>
            {defaultOptionRender}
          </MenuItem>
        );
      },
      disabled: optionIsDisabled,
    };

    dropDownContext?.onDropDownOptionMount?.(item);
    return () => dropDownContext?.onDropDownOptionUnMount?.(item);
  }, [
    dropDownContext?.onDropDownOptionMount,
    dropDownContext?.onDropDownOptionUnMount,
    dropDownContext?.activeItem,
    dropDownContext?.searchValue,
  ]);

  return null;
};
