import type * as React from 'react';
import type { TRenderChip } from '#src/components/input/Select/types';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';

export interface OptionProps extends React.InputHTMLAttributes<HTMLDivElement> {
  id?: string;
  disabled?: boolean;
  value: string;
  children?: React.ReactNode;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
  renderChip?: TRenderChip;
}
