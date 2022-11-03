import * as React from 'react';
import type { OptionProps } from './types';
import { ConstantOptionWrapper } from '#src/components/input/Select/Option/ConstantOption';
import { DropDownOption } from '#src/components/input/Select/Option/NewDropDownOption';

export const Option = (props: OptionProps) => (
  <>
    <ConstantOptionWrapper {...props} />
    <DropDownOption {...props} />
  </>
);
