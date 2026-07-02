import styled from 'styled-components';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';
import { usePrevious } from '#src/components/common/hooks/usePrevious';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const Spacer = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

interface VirtualBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** ссылка на контейнер, в котором находится Menu*/
  scrollContainerRef: React.RefObject<HTMLElement>;
  /** Высота 1 элемента меню*/
  itemHeight: number;
  /** Максимальное количество строк в меню */
  rowCount?: number;
  /** Количество отображаемых строк в начале и в конце виртуального списка */
  aheadItemsCount?: number;
  /** Модель данных, с рендер-пропсами*/
  model: Array<MenuModelItemProps>;
  /** Id активного элемента */
  activeId?: string | null;
  /** Id активного элемента */
  preselectedId?: string | null;
  /** Id выбранных элементов */
  selected: Array<string>;
  /** render-метод для отрисовки пункта меню */
  onRenderItem?: (item: MenuModelItemProps, index: number) => React.ReactNode;
}

interface PreviousValues {
  activeId?: string | null;
  preselectedId?: string | null;
}

interface Partition {
  startIndex: number;
  endIndex: number;
  topPadding: string;
  bottomPadding: string;
}

export const VirtualBody = ({
  scrollContainerRef,
  itemHeight,
  rowCount = 6,
  aheadItemsCount = 3,
  model,
  activeId,
  preselectedId,
  selected,
  onRenderItem,
}: VirtualBodyProps) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [partition, setPartition] = useState<Partition>({
    startIndex: 0,
    endIndex: rowCount,
    topPadding: '',
    bottomPadding: '',
  });
  const prevValue = usePrevious<PreviousValues>({ activeId, preselectedId });

  // Флаг для предотвращения множественных обновлений
  const isScrollingRef = useRef(false);
  const rafIdRef = useRef<number>();

  const handleScroll = useCallback((e: Event) => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      if (e.target) {
        setScrollTop((e.target as HTMLDivElement).scrollTop);
        isScrollingRef.current = false;
      }
    });
  }, []);

  // Очистка raf при размонтировании
  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    setScrollTop(scrollContainer?.scrollTop || 0);

    scrollContainer?.addEventListener('scroll', handleScroll);
    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, [handleScroll, scrollContainerRef]);

  const calcPartition = useCallback(
    (start: number) => {
      const itemCount = model.length;
      const startIndex = Math.max(0, start);
      let visibleNodeCount = rowCount + 2 * aheadItemsCount;
      visibleNodeCount = Math.min(itemCount - startIndex, visibleNodeCount);
      const endIndex = startIndex + visibleNodeCount;
      const topPadding = `${startIndex * itemHeight}px`;
      const bottomPadding = `${(itemCount - startIndex - visibleNodeCount) * itemHeight}px`;

      return { startIndex, endIndex, topPadding, bottomPadding };
    },
    [itemHeight, aheadItemsCount, model.length, rowCount],
  );

  // Эффект для scrollTop
  useEffect(() => {
    if (isScrollingRef.current) return;

    const start = Math.floor(scrollTop / itemHeight - aheadItemsCount);
    const newPartition = calcPartition(start);

    setPartition((prev) => {
      // Обновляем только если действительно изменилось
      if (prev.startIndex === newPartition.startIndex && prev.endIndex === newPartition.endIndex) {
        return prev;
      }
      return { ...newPartition };
    });
  }, [scrollTop, calcPartition, itemHeight, aheadItemsCount]);

  // Эффект для активного элемента
  useEffect(() => {
    if (!activeId && !preselectedId) return;

    const prevActiveId = prevValue?.activeId;
    const prevPreselectedId = prevValue?.preselectedId;
    const activeChanged = prevActiveId !== activeId;
    const preselectedChanged = prevPreselectedId !== preselectedId;

    if (!activeChanged && !preselectedChanged) return;

    const index = activeChanged
      ? model.findIndex((item) => item.id === activeId)
      : model.findIndex((item) => item.id === preselectedId);

    if (index === -1) return;

    const isOutsidePartition = index < partition.startIndex || index >= partition.endIndex;

    if (isOutsidePartition) {
      const scrollContainer = scrollContainerRef.current;
      scrollContainer?.removeEventListener('scroll', handleScroll);

      const partitionStart = Math.max(0, index - aheadItemsCount);
      const newPartition = calcPartition(partitionStart);
      const nextScrollTop = partitionStart * itemHeight;

      if (scrollContainer) {
        scrollContainer.scrollTop = nextScrollTop;
        setScrollTop(nextScrollTop);
      }

      setPartition({ ...newPartition });

      setTimeout(() => {
        scrollContainer?.addEventListener('scroll', handleScroll);
      }, 0);
    }
  }, [
    activeId,
    preselectedId,
    partition.startIndex,
    partition.endIndex,
    calcPartition,
    scrollContainerRef,
    model,
    itemHeight,
    prevValue,
  ]);

  // Мемоизация видимых детей
  const visibleChildren = useMemo(() => {
    const visibleItems = model.slice(partition.startIndex, partition.endIndex);
    return visibleItems.map((item, idx) => onRenderItem?.(item, partition.startIndex + idx));
  }, [model, partition.startIndex, partition.endIndex, onRenderItem, activeId, preselectedId, selected]);

  return (
    <>
      <Spacer style={{ minHeight: partition.topPadding }} />
      {visibleChildren}
      <Spacer style={{ minHeight: partition.bottomPadding }} />
    </>
  );
};
