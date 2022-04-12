import * as React from 'react';
import { HTMLAttributes } from 'react';
import { Dimension } from '#/components/input/PhoneNumberInput/utils';

export interface FlagProps extends HTMLAttributes<HTMLDivElement> {
  Component: React.ElementType;
  dimension?: Dimension;
}

export const Flag = ({ Component, dimension, ...props }: FlagProps) => {
  const width = dimension === 's' ? '18' : '22';

  return <Component {...props} width={width} />;
};
