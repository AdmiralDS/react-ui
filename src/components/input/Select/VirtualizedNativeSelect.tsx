import { refSetter } from '#src/components/common/utils/refSetter';
import type { IConstantOption } from '#src/components/input/Select/types';
import { forwardRef, useEffect, useRef, useState } from 'react';
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
    const [syncedOptions, setSyncedOptions] = useState<IConstantOption[]>([]);

    // Синхронизируем только ВЫБРАННЫЕ опции + несколько ближайших
    useEffect(() => {
      if (!selectRef.current) return;

      const selectedValues = Array.isArray(value) ? value : [value];

      // Ключевая идея: храним в нативном select ТОЛЬКО выбранные опции
      // и несколько "якорных" для правильной работы нативного поведения
      const optionsToRender = new Map<string, IConstantOption>();

      // 1. Всегда добавляем выбранные опции
      selectedValues.forEach((val) => {
        const opt = options.find((o) => o.value === val);
        if (opt) optionsToRender.set(val, opt);
      });

      // 2. Добавляем опции, ближайшие к выбранным (для навигации)
      if ((options.length > 0 && selectedValues.length > 0) || !!active) {
        const lastSelectedIndex = options.findIndex(
          (o) => o.value === (active || selectedValues[selectedValues.length - 1]),
        );

        // Добавляем ±5 опций вокруг последней выбранной
        for (
          let i = Math.max(0, lastSelectedIndex - 5);
          i <= Math.min(options.length - 1, lastSelectedIndex + 5);
          i++
        ) {
          const opt = options[i];
          if (opt && !optionsToRender.has(opt.value)) {
            optionsToRender.set(opt.value, opt);
          }
        }
      }

      // 3. Добавляем первую опцию как fallback (если нет выбранных)
      if (optionsToRender.size === 0 && options.length > 0) {
        optionsToRender.set(options[0].value, options[0]);
      }

      setSyncedOptions(Array.from(optionsToRender.values()));
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
        <option value="" />
        {syncedOptions.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.children}
          </option>
        ))}
      </NativeSelect>
    );
  },
);
