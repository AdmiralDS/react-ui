import * as React from 'react';
import { TRenderChip } from '#src/components/input/Select/types';
import { RenderOptionProps } from '#src/components/Menu/MenuItem';

export interface OptionProps extends React.InputHTMLAttributes<HTMLDivElement> {
  id?: string;
  disabled?: boolean;
  value: string;
  children?: React.ReactNode;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
  renderChip?: TRenderChip;
}
