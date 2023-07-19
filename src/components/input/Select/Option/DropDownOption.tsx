import * as React from 'react';
import { useOptionGroupContext } from '#src/components/input/Select/useSelectContext';
import type { ComponentDimension } from '#src/components/input/types';
import type { OptionProps } from '#src/components/input/Select/Option/types';
import { StyledCheckbox } from './styled';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { useDropDownContext } from '#src/components/input/Select/DropDownContext';
import type { ItemDimension } from '#src/components/Menu/menuItemMixins';
import { CustomOptionWrapper } from '#src/components/input/Select/styled';
import type { SelectItemProps } from '#src/components/input/Select/types';

interface OptionRenderProps {
  selected?: boolean;
}

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

  const multipleOptionRender = ({ selected = false }: OptionRenderProps) => (
    <>
      {dropDownContext?.showCheckbox && (
        <StyledCheckbox
          checked={selected}
          dimension={dropDownContext?.dimension === 's' ? 's' : 'm'}
          disabled={disabled}
          // Состояние контролируется через Item, по сути контролируемый readOnly
          onChange={() => false}
        />
      )}
      {children}
    </>
  );

  const defaultOptionRender = (props: OptionRenderProps) =>
    dropDownContext?.multiple ? multipleOptionRender(props) : children;

  React.useEffect(() => {
    const itemId = id ?? value;

    const item: SelectItemProps = {
      id: itemId,
      value,
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
            {defaultOptionRender({ selected: options.selected })}
          </CustomOptionWrapper>
        );
      },
      disabled: optionIsDisabled,
      readOnly,
    };

    dropDownContext?.onDropDownOptionMount?.(item);
    return () => dropDownContext?.onDropDownOptionUnMount?.(item);
  }, [dropDownContext?.onDropDownOptionMount, dropDownContext?.onDropDownOptionUnMount, dropDownContext?.dimension]);

  return null;
};
