import * as React from 'react';

export interface DropdownOptionProps {
  value: string;
  disabled: boolean;
  ref?: React.RefObject<HTMLDivElement> | null;
}
