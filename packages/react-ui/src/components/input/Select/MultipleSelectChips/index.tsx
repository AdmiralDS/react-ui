import * as React from 'react';
import type { IConstantOption } from '../types';
import type { CommonChipProps } from './ChipBox';
import { ChipBox } from './ChipBox';

interface MultipleChipsProps extends CommonChipProps {
  options: Array<IConstantOption>;
}

export const MultipleSelectChips = ({ options, ...commonProps }: MultipleChipsProps) => {
  return (
    <>
      {options.map((option, index) => (
        <ChipBox
          option={option}
          childrenOptions={index < options.length - 1 ? options.slice(index + 1) : []}
          key={option.value}
          {...commonProps}
        />
      ))}
    </>
  );
};
