import * as React from 'react';
import { HTMLAttributes } from 'react';
// import { Dimension } from '#src/components/input/PhoneNumberInput/utils';
import { ItemDimension } from '#src/components/MenuItem/mixins';

export interface FlagProps extends HTMLAttributes<HTMLDivElement> {
  Component: React.ElementType;
  dimension?: ItemDimension;
}

export const Flag = ({ Component, dimension, ...props }: FlagProps) => {
  const width = dimension === 's' ? '18' : '22';

  return <Component {...props} width={width} />;
};
