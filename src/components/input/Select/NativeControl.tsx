import { forwardRef, useEffect, useRef } from 'react';

import styled from 'styled-components';
import { keyboardKey } from '../../common/keyboardKey';
import type { IConstantOption } from '#src/components/input/Select/types';
import { refSetter } from '#src/components/common/utils/refSetter';

interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
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
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
        const code = keyboardKey.getCode(e);
        if (!code) return;

        const openKeys = [keyboardKey[' '], keyboardKey.Enter, keyboardKey.ArrowDown, keyboardKey.ArrowUp];
        if (openKeys.includes(code)) {
          // Prevent native select events
          e.preventDefault();
        }
      }

      selectRef.current?.addEventListener('keydown', handleKeyDown);
      return () => selectRef.current?.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
      <NativeSelect ref={refSetter(ref, selectRef)} {...props} onClick={stopPropagation}>
        <option value="" />
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.value}
          </option>
        ))}
      </NativeSelect>
    );
  },
);
