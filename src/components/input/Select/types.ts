import * as React from 'react';
import type { ComponentDimension } from '#src/components/input/types';
import type { ItemProps } from '#src/components/Menu/MenuItem';

export type HighlightFormat = 'word' | 'wholly';

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

export interface IDropdownOption {
  value: string;
  disabled: boolean;
  ref?: React.RefObject<HTMLDivElement> | null;
}

export interface IConstantSelectContext {
  onConstantOptionMount: (option: IConstantOption) => void;
  onConstantOptionUnMount: (option: IConstantOption) => void;
  searchValue: string;
}

export interface IDropDownSelectContext {
  onDropDownOptionMount: (option: IDropdownOption) => void;
  onDropDownOptionUnMount: (option: IDropdownOption) => void;
  onOptionClick: (value: string) => void;
  onMouseEnter: (value: string) => void;
  selectValue?: string | string[];
  hoverValue: string;
  searchValue: string;
  dimension: ComponentDimension;
  highlightFormat: HighlightFormat;
  multiple: boolean;
  defaultHighlighted: boolean;
  showCheckbox: boolean;
}

export interface DropDownContextProps {
  onDropDownOptionMount: (option: ItemProps) => void;
  onDropDownOptionUnMount: (option: ItemProps) => void;
  onOptionClick?: (value: string) => void;
  onActivateItem?: (id: string) => void;
  selectValue?: string | string[];
  activeItem?: string;
  searchValue: string;
  dimension: ComponentDimension;
  highlightFormat: HighlightFormat;
  multiple: boolean;
  defaultHighlighted: boolean;
  showCheckbox: boolean;
}

export interface HighlightContextProps {
  onAddTextToHighlight?: (text: string) => void;
  searchValue?: string;
  highlightFormat?: HighlightFormat;
}

export interface IOptionGroupContext {
  disabled?: boolean;
  // label: string;
}
