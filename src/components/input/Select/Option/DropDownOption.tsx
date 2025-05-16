import { useOptionGroupContext } from '#src/components/input/Select/useSelectContext';
import type { ComponentDimension } from '#src/components/input/types';
import type { OptionProps } from '#src/components/input/Select/Option/types';
import { StyledCheckbox } from './styled';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { useDropDownContext } from '#src/components/input/Select/DropDownContext';
import type { ItemDimension } from '#src/components/Menu/menuItemMixins';
import { CustomOptionWrapper } from '#src/components/input/Select/styled';
import type { SelectItemProps } from '#src/components/input/Select/types';
import { useEffect } from 'react';

interface OptionRenderProps {
  selected?: boolean;
  hovered?: boolean;
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
  renderChip: _,
  ...htmlProps
}: OptionProps) => {
  const dropDownContext = useDropDownContext();
  const optionGroupContext = useOptionGroupContext();

  const optionIsDisabled = optionGroupContext?.disabled || disabled;

  const multipleOptionRender = ({ selected = false, hovered = false }: OptionRenderProps) => (
    <>
      {dropDownContext?.showCheckbox && (
        <StyledCheckbox
          checked={selected}
          hovered={hovered}
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

  useEffect(() => {
    const itemId = id || value;

    const item: SelectItemProps = {
      id: value,
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
            $selected={options.selected}
            $hovered={options.hovered}
            $preselected={options.preselected}
            $multiple={dropDownContext?.multiple}
          >
            {defaultOptionRender({ selected: options.selected, hovered: options.hovered })}
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
    dropDownContext?.dimension,
    dropDownContext?.multiple,
  ]);

  return null;
};
