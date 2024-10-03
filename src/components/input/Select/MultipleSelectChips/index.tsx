import * as React from 'react';
import type { IConstantOption } from '../types';
import type { CommonChipProps } from './ChipBox';
import { ChipBox } from './ChipBox';
import { useEffect } from 'react';
import { usePrevious } from '#src/components/common/hooks/usePrevious';

interface MultipleChipsProps extends CommonChipProps {
  options: Array<IConstantOption>;
  isOptionsListOpen: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  hasMaxHeight?: boolean;
}

export const MultipleSelectChips = ({
  options,
  isOptionsListOpen,
  containerRef,
  hasMaxHeight,
  ...commonProps
}: MultipleChipsProps) => {
  const prevIsOptionsListOpen = usePrevious(isOptionsListOpen);

  useEffect(() => {
    // Прокрутка "окна" выбранных опций работает только когда есть выбранные опции и есть ограничение высоты поля select
    if (!hasMaxHeight || options.length === 0) return;

    // При закрытии списка опций необходимо прокрутить "окно" выбранных опций вверх на первую выбранную опцию
    if (prevIsOptionsListOpen && !isOptionsListOpen) {
      containerRef.current?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    // При открытии - вниз на последнюю выбранную опцию
    if (!prevIsOptionsListOpen && isOptionsListOpen) {
      // Прокрутка вниз производится через timeout для эффекта smooth
      setTimeout(() => {
        containerRef.current?.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        containerRef.current?.scrollTo({ top: containerRef.current?.scrollHeight, left: 0, behavior: 'smooth' });
      });
    }

    // Если список был открыт и произошло изменение списка опций (кейс выбора опций), то необходимо прокрутить на
    // последнюю опцию, чтобы она стала видимой
    if (isOptionsListOpen && prevIsOptionsListOpen) {
      containerRef.current?.scrollTo({ top: containerRef.current?.scrollHeight, left: 0, behavior: 'smooth' });
    }
  }, [isOptionsListOpen, options, hasMaxHeight]);

  return (
    <>
      {options.map((option, index) => (
        <ChipBox
          option={option}
          childrenOptions={index < options.length - 1 ? options.slice(index + 1) : []}
          key={option.value}
          containerRef={containerRef}
          {...commonProps}
        />
      ))}
    </>
  );
};
