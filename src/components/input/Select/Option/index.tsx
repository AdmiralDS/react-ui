import * as React from 'react';
import type { OptionProps } from './types';
import { ConstantOptionWrapper } from '#src/components/input/Select/Option/ConstantOption';
import { DropDownOptionWrapper } from '#src/components/input/Select/Option/DropdownOption';
import { DropDownOption } from '#src/components/input/Select/Option/NewDropDownOption';

export const Option = (props: OptionProps) => (
  <>
    <ConstantOptionWrapper {...props} />
    <DropDownOptionWrapper {...props} />
    <DropDownOption {...props} />
  </>
);
