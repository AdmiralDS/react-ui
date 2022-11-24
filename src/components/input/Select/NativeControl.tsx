import type { SelectHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { keyboardKey } from '#src/components/common/keyboardKey';
import type { IConstantOption } from '#src/components/input/Select/types';

interface NativeSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<IConstantOption>;
}

const stopPropagation = (evt: React.BaseSyntheticEvent) => evt.stopPropagation();

const NativeSelect = styled.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  pointer-events: none;
`;

export const NativeControl = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ options, ...props }: NativeSelectProps, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(e);
      if (!code) return;

      const openKeys = [keyboardKey[' '], keyboardKey.ArrowDown, keyboardKey.ArrowUp];
      if (openKeys.includes(code)) {
        // Prevent native select events
        e.preventDefault();
      }
    };

    return (
      <NativeSelect ref={ref} onKeyDown={handleKeyDown} {...props} onClick={stopPropagation}>
        <option value="" />
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </NativeSelect>
    );
  },
);
