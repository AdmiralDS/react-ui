import { forwardRef, useState, useRef, useLayoutEffect, useEffect, useMemo, useCallback } from 'react';

import { Body, Spacer } from '../style';
import type { RowId } from '../types';

import { findStartIndex, findEndIndex } from './utils';
import { VirtualRowWrapper } from './VirtualRowWrapper';

type DynamicSizeItem = {
  key: RowId | string;
  index: number;
  offsetTop: number;
  height: number;
};

type Cache = {
  [key: RowId | string]: number;
};

interface DynamicSizeBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  tableHeight: number;
  headerHeight: number;
  renderAhead?: number;
  rowList: Array<{ id: RowId | string }>;
  renderRow: (row: { id: RowId | string }, index: number) => React.ReactNode;
  renderEmptyMessage?: () => React.ReactNode;
  estimatedRowHeight?: (index: number) => number;
  tableRef: React.RefObject<HTMLElement>;
}

export const DynamicSizeBody = forwardRef<HTMLDivElement, DynamicSizeBodyProps>(
  (
    {
      rowList,
      tableHeight,
      headerHeight,
      renderAhead = 20,
      renderRow,
      renderEmptyMessage,
      estimatedRowHeight = () => 40,
      tableRef,
    },
    ref,
  ) => {
    const [measurementCache, setMeasurementCache] = useState<Cache>({});
    const [scrollTop, setScrollTop] = useState(0);
    const [height, setHeight] = useState(tableHeight - headerHeight);

    const measurementCacheRef = useRef<Cache>(measurementCache);

    useEffect(() => {
      setHeight(tableHeight - headerHeight);
    }, [tableHeight, headerHeight]);

    useLayoutEffect(() => {
      measurementCacheRef.current = measurementCache;
    });

    // проверка filter(Boolean), чтобы отсеять невидимые/скрытые групповые строки
    const rowNodes = useMemo(
      () => rowList.filter((row, index) => Boolean(renderRow(row, index))),
      [rowList, renderRow],
    );
    const itemsCount = useMemo(() => rowNodes.length, [rowNodes]);
    const getItemKey = useCallback((index: number) => rowNodes[index].id, [rowNodes]);

    useEffect(() => {
      function handleScroll(event: Event) {
        const target = event.target as HTMLElement | null;
        if (!target) return;
        requestAnimationFrame(() => {
          setScrollTop(target.scrollTop);
        });
      }

      const scrollContainer = tableRef.current;
      setScrollTop(scrollContainer?.scrollTop || 0);

      scrollContainer?.addEventListener('scroll', handleScroll);
      return () => scrollContainer?.removeEventListener('scroll', handleScroll);
    }, [tableRef]);

    const { allItems, totalHeight } = useMemo(() => {
      let totalHeight = 0;
      const allRows: DynamicSizeItem[] = Array(itemsCount);

      for (let index = 0; index < itemsCount; index++) {
        const key = getItemKey(index);
        const row = {
          key,
          index,
          height: measurementCache[key] ?? estimatedRowHeight(index),
          offsetTop: totalHeight,
        };

        totalHeight += row.height;
        allRows[index] = row;
      }

      return { allItems: allRows, totalHeight };
    }, [getItemKey, estimatedRowHeight, measurementCache, itemsCount, rowNodes]);

    const startIndex = useMemo(() => {
      const start = itemsCount ? findStartIndex(scrollTop, allItems, itemsCount) : 0;
      return Math.max(0, start - renderAhead);
    }, [scrollTop, allItems, itemsCount, renderAhead]);

    const endIndex = useMemo(() => {
      const end = itemsCount ? findEndIndex(allItems, startIndex, scrollTop + height, itemsCount) : 0;
      return Math.min(itemsCount - 1, end + renderAhead);
    }, [allItems, startIndex, scrollTop, height, itemsCount, renderAhead]);

    const topPadding = allItems[startIndex]?.offsetTop;
    const bottomPadding = totalHeight - (allItems[endIndex]?.offsetTop + allItems[endIndex]?.height);

    const virtualItems = useMemo(() => allItems.slice(startIndex, endIndex + 1), [allItems, startIndex, endIndex]);

    const renderContent = () => {
      return (
        <>
          <Spacer style={{ minHeight: topPadding }} />
          {virtualItems.map((virtualItem) => {
            const item = rowNodes[virtualItem.index];

            return (
              <VirtualRowWrapper
                key={item.id}
                id={item.id}
                cacheRef={measurementCacheRef}
                setCache={setMeasurementCache}
              >
                {renderRow(item, virtualItem.index)}
              </VirtualRowWrapper>
            );
          })}
          <Spacer style={{ minHeight: bottomPadding }} />
        </>
      );
    };

    return (
      <Body ref={ref} style={{ height }}>
        {renderEmptyMessage ? renderEmptyMessage() : renderContent()}
      </Body>
    );
  },
);
