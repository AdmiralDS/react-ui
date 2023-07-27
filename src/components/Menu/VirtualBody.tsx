import * as React from 'react';
import styled from 'styled-components';
import { MenuItem, type MenuModelItemProps } from '#src/components/Menu/MenuItem';

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
  /** Обработчик активации (hover) item в меню */
  onActivateItem: (id?: string) => void;
  /** Обработчик выбора item в меню */
  onSelectItem: (id: string) => void;
  /** Модель данных, с рендер-пропсами*/
  model: Array<MenuModelItemProps>;
  /** Id активного элемента */
  activeId?: string;
  /** Id выбранного элемента */
  selectedId?: string;
  /** Клик по меню не преводит к перемещению фокуса */
  preventFocusSteal?: boolean;
}

interface PreviousValues {
  activeId?: string;
}
function usePrevious(value: PreviousValues) {
  const ref = React.useRef<PreviousValues>();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

interface Partition {
  startIndex: number;
  endIndex: number;
  topPadding: string;
  bottomPadding: string;
}

interface PartitionExt extends Partition {
  needAddListener: boolean;
}

export const VirtualBody = ({
  scrollContainerRef,
  itemHeight,
  rowCount = 6,
  aheadItemsCount = 3,
  model,
  activeId,
  selectedId,
  onActivateItem,
  onSelectItem,
  preventFocusSteal,
}: VirtualBodyProps) => {
  const [scrollTop, setScrollTop] = React.useState(0);
  const [partition, setPartition] = React.useState<PartitionExt>({
    startIndex: 0,
    endIndex: rowCount,
    topPadding: '',
    bottomPadding: '',
    needAddListener: false,
  });
  const prevValue = usePrevious({ activeId });

  const handleScroll = React.useCallback(
    (e: Event) => {
      requestAnimationFrame(() => {
        if (e.target) setScrollTop((e.target as HTMLDivElement).scrollTop);
      });
    },
    [scrollContainerRef],
  );

  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    setScrollTop(scrollContainer?.scrollTop || 0);

    scrollContainer?.addEventListener('scroll', handleScroll);
    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  React.useEffect(() => {
    if (partition.needAddListener) {
      setTimeout(() => scrollContainerRef?.current?.addEventListener('scroll', handleScroll));
      setPartition({ ...partition, needAddListener: false });
    }
  }, [partition, scrollContainerRef]);

  const calcPartition = React.useCallback(
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
    [itemHeight, aheadItemsCount, model, rowCount],
  );

  React.useEffect(() => {
    const start = Math.floor(scrollTop / itemHeight - aheadItemsCount);
    const partition: PartitionExt = { ...calcPartition(start), needAddListener: false };
    setPartition(partition);
  }, [scrollTop, calcPartition]);

  React.useEffect(() => {
    if (!activeId || !prevValue) return;
    const prevActiveId = prevValue.activeId;

    if (prevActiveId === activeId) return;

    const index = model.findIndex((item) => item.id === activeId);

    if (index === -1) return;

    if (index < partition.startIndex || index > partition.endIndex) {
      scrollContainerRef?.current?.removeEventListener('scroll', handleScroll);
      setPartition({ ...calcPartition(index), needAddListener: true });
    }
  }, [activeId, partition, calcPartition, scrollContainerRef]);

  const visibleChildren = React.useMemo(() => {
    const visibleItems = [...model].slice(partition.startIndex, partition.endIndex);

    return visibleItems.map(({ id, render, ...itemProps }, index) => {
      const renderProps = {
        hovered: activeId === id,
        selected: selectedId === id,
        onHover: () => {
          onActivateItem(itemProps.disabled ? undefined : id);
        },
        onClick: () => onSelectItem(id),
        onMouseDown: preventFocusSteal ? (e: React.MouseEvent<HTMLElement>) => e.preventDefault() : undefined,
        containerRef: scrollContainerRef,
        ...itemProps,
      };
      if (typeof render === 'function') return render(renderProps);
      return (
        <MenuItem key={`${id}-${index}`} {...renderProps}>
          {render}
        </MenuItem>
      );
    });
  }, [model, activeId, onActivateItem, selectedId, onSelectItem, scrollContainerRef, partition]);

  return (
    <>
      <Spacer style={{ minHeight: partition.topPadding }} />
      {visibleChildren}
      <Spacer style={{ minHeight: partition.bottomPadding }} />
    </>
  );
};
