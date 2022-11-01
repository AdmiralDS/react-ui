import { forwardRef, SelectHTMLAttributes } from 'react';
// import { refSetter } from '#src/components/common/utils/refSetter';
import * as React from 'react';
import styled from 'styled-components';
import { keyboardKey } from '#src/components/common/keyboardKey';
import type { IConstantOption } from '#src/components/input/Select/types';

interface NativeSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<IConstantOption>;
  onQueryOpenDropDown?: () => void;
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
  ({ options, onQueryOpenDropDown, ...props }: NativeSelectProps, ref) => {
    const onSelectKeyDown = (e: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(e);
      if (!code) return;

      const openKeys = [keyboardKey[' '], keyboardKey.ArrowDown, keyboardKey.ArrowUp];
      if (openKeys.includes(code)) {
        // Prevent native select events
        onQueryOpenDropDown?.();
        e.preventDefault();
      }
    };

    return (
      <NativeSelect
        // ref={refSetter(ref, selectRef)}
        ref={ref}
        // value={localValue}
        // multiple={multiple}
        // disabled={disabled}
        onKeyDown={onSelectKeyDown}
        {...props}
        // onChange={onChange}
        // onClick срабатывает при клике на связанный с селектом label
        // onClick не срабатывает при клике на сам селект, т.к. у селекта стоит pointer-events: none
        // stopPropagation останавливает всплытие события и предотвращает открытие дропдауна
        onClick={stopPropagation}
      >
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
