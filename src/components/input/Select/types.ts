import type { ComponentDimension } from '#src/components/input/types';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';

export interface SelectItemProps extends MenuModelItemProps {
  value: string;
}

export type SearchFormat = 'word' | 'wholly';

export interface IOnCloseProps {
  value: string;
  disabled?: boolean;
}

export type TRenderChip = () => React.ReactNode | IChipProps;

export interface IChipProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClose?: (props: IOnCloseProps) => void;
}

export interface IConstantOption {
  value: string;
  disabled: boolean;
  children: React.ReactNode;
  renderChip: TRenderChip;
}

export interface SelectContextProps {
  onConstantOptionMount: (option: IConstantOption) => void;
  onConstantOptionUnMount: (option: IConstantOption) => void;
}

export interface DropDownContextProps {
  onDropDownOptionMount: (option: SelectItemProps) => void;
  onDropDownOptionUnMount: (option: SelectItemProps) => void;
  dimension: ComponentDimension;
  multiple: boolean;
  showCheckbox: boolean;
}

export interface IOptionGroupContext {
  disabled?: boolean;
}
