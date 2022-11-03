import * as React from 'react';
import { useOptionGroupContext } from '#src/components/input/Select/useSelectContext';
import { ComponentDimension, Highlight } from '#src/components/input';
import type { OptionProps } from '#src/components/input/Select/Option/types';
import { StyledCheckbox } from './styled';
import type { ItemProps, RenderOptionProps } from '#src/components/Menu/MenuItem';
import { useDropDownContext } from '#src/components/input/Select/DropDownContext';
import type { ItemDimension } from '#src/components/Menu/menuItemMixins';
import { useMemo } from 'react';
import { CustomOptionWrapper } from '#src/components/input/Select/styled';

const convertDimension = (selectDimension?: ComponentDimension): ItemDimension | undefined => {
  return selectDimension === 'xl' ? 'l' : selectDimension;
};

export const DropDownOption = ({
  id,
  disabled = false,
  readOnly = false,
  value,
  children,
  renderOption,
  ...htmlProps
}: OptionProps) => {
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

  const defaultOptionRender = dropDownContext?.multiple ? multipleOptionRender() : highlightedChildrenRender;

  React.useEffect(() => {
    const itemId = id ?? value;

    const item: ItemProps = {
      id: itemId,
      render: (options: RenderOptionProps) => {
        if (renderOption) {
          return renderOption(options);
        }

        return (
          <CustomOptionWrapper
            {...options}
            dimension={convertDimension(dropDownContext?.dimension)}
            key={itemId}
            {...htmlProps}
          >
            {defaultOptionRender}
          </CustomOptionWrapper>
        );
      },
      disabled: optionIsDisabled,
      readOnly,
    };

    dropDownContext?.onDropDownOptionMount?.(item);
    return () => dropDownContext?.onDropDownOptionUnMount?.(item);
  }, [
    dropDownContext?.onDropDownOptionMount,
    dropDownContext?.onDropDownOptionUnMount,
    dropDownContext?.activeItem,
    dropDownContext?.searchValue,
    dropDownContext?.selectValue,
  ]);

  return null;
};
