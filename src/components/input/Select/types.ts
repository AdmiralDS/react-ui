import type * as React from 'react';
import type { ComponentDimension } from '#src/components/input/types';
import type { ItemProps } from '#src/components/Menu/MenuItem';

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
  onDropDownOptionMount: (option: ItemProps) => void;
  onDropDownOptionUnMount: (option: ItemProps) => void;
  onOptionClick?: (value: string) => void;
  onActivateItem?: (id: string) => void;
  selectValue?: string | string[];
  activeItem?: string;
  dimension: ComponentDimension;
  multiple: boolean;
  showCheckbox: boolean;
}

export interface IOptionGroupContext {
  disabled?: boolean;
}
