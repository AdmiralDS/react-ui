export type Dimension = 'm' | 's';

export interface TreeNodeProps {
  key?: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;

  disabled?: boolean;
  checkable?: boolean;
  selectable?: boolean;
  checked?: boolean;
  selected?: boolean;

  disableCheckbox?: boolean;

  expanded?: boolean;

  isLeaf?: boolean;
  children?: React.ReactNode;
}
