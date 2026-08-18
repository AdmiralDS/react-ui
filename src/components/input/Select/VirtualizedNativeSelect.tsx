import { refSetter } from '#src/components/common/utils/refSetter';
import type { IConstantOption } from '#src/components/input/Select/types';
import { forwardRef, useMemo, useRef } from 'react';
import styled from 'styled-components';

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

interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<IConstantOption>;
  active?: string;
}

// Создаем отдельный компонент для нативного select с виртуализацией
export const VirtualizedNativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ value, multiple, options, active, disabled, ...props }: NativeSelectProps, ref) => {
    const selectRef = useRef<HTMLSelectElement>(null);

    // Синхронизируем только ВЫБРАННЫЕ опции + несколько ближайших
    const syncedOptions = useMemo(() => {
      const selectedValues = Array.isArray(value) ? value : [value];

      // Ключевая идея: храним в нативном select ТОЛЬКО выбранные опции
      // и несколько "якорных" для правильной работы нативного поведения
      const optionIndexesToRender = new Map<string, number>();

      // 1. Всегда добавляем выбранные опции
      selectedValues.forEach((val) => {
        const optionIndex = options.findIndex((option) => option.value === val);
        if (optionIndex !== -1) optionIndexesToRender.set(val, optionIndex);
      });

      // 2. Добавляем опции, ближайшие к выбранным (для навигации)
      if ((options.length > 0 && selectedValues.length > 0) || active !== undefined) {
        const lastSelectedIndex = options.findIndex(
          (o) => o.value === (active ?? selectedValues[selectedValues.length - 1]),
        );

        // Добавляем ±5 опций вокруг последней выбранной
        for (
          let i = Math.max(0, lastSelectedIndex - 5);
          i <= Math.min(options.length - 1, lastSelectedIndex + 5);
          i++
        ) {
          const opt = options[i];
          if (opt && !optionIndexesToRender.has(opt.value)) {
            optionIndexesToRender.set(opt.value, i);
          }
        }
      }

      // 3. Добавляем первую опцию как fallback (если нет выбранных)
      if (optionIndexesToRender.size === 0 && options.length > 0) {
        optionIndexesToRender.set(options[0].value, 0);
      }

      return new Map(
        Array.from(optionIndexesToRender.entries())
          .sort(([, leftIndex], [, rightIndex]) => leftIndex - rightIndex)
          .map(([optionValue, optionIndex]) => [optionValue, options[optionIndex]]),
      );
    }, [value, active, options]);

    return (
      <NativeSelect
        ref={refSetter(ref, selectRef)}
        value={value}
        multiple={multiple}
        disabled={disabled}
        className={'native-select'}
        {...props}
      >
        {!syncedOptions.has('') && <option value="" />}
        {Array.from(syncedOptions.values()).map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.children}
          </option>
        ))}
      </NativeSelect>
    );
  },
);
