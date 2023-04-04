import * as React from 'react';
import type { HTMLAttributes } from 'react';
import type { ItemDimension } from '#src/components/Menu/menuItemMixins';

export interface FlagProps extends HTMLAttributes<HTMLDivElement> {
  Component: React.ElementType;
  dimension?: ItemDimension;
}

export const Flag = ({ Component, dimension, ...props }: FlagProps) => {
  const width = dimension === 's' ? '18' : '22';

  return <Component {...props} width={width} />;
};
