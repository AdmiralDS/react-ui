import { forwardRef, useState, useRef, useLayoutEffect, useEffect, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';

import { ScrollTableBody, Spacer } from '../style';
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
  height: number;
  renderAhead?: number;
  rowList: any[];
  renderRow: (row: any, index: number) => ReactNode;
  renderEmptyMessage?: () => ReactNode;
  estimatedRowHeight?: (index: number) => number;
}

export const DynamicSizeBody = forwardRef<HTMLDivElement, DynamicSizeBodyProps>(
  ({ rowList, height, renderAhead = 20, renderRow, renderEmptyMessage, estimatedRowHeight = () => 40 }, ref) => {
    const [measurementCache, setMeasurementCache] = useState<Cache>({});
    const [scrollTop, setScrollTop] = useState(0);

    const scrollElementRef = useRef<HTMLDivElement>(null);
    const measurementCacheRef = useRef<Cache>(measurementCache);

    useLayoutEffect(() => {
      measurementCacheRef.current = measurementCache;
    });

    // проверка filter(Boolean), чтобы отсеять невидимые/скрытые групповые строки
    const rowNodes = useMemo(
      () => rowList.filter((row, index) => Boolean(renderRow(row, index))),
      [rowList, renderRow],
    );
    const itemsCount = useMemo(() => rowNodes.length, [rowNodes]);

    const getItemKey = useCallback((index: number) => rowNodes[index]!.id, [rowNodes]);

    useEffect(() => {
      function handleScroll(e: any) {
        requestAnimationFrame(() => {
          setScrollTop(e.target.scrollTop);
        });
      }

      const scrollContainer = scrollElementRef.current;
      setScrollTop(scrollContainer?.scrollTop || 0);

      scrollContainer?.addEventListener('scroll', handleScroll);
      return () => scrollContainer?.removeEventListener('scroll', handleScroll);
    }, []);

    const { totalHeight, allItems } = useMemo(() => {
      const getItemHeight = (index: number) => {
        const key = getItemKey(index);
        return measurementCache[key] ?? estimatedRowHeight(index);
      };

      let totalHeight = 0;
      const allRows: DynamicSizeItem[] = Array(itemsCount);

      for (let index = 0; index < itemsCount; index++) {
        const key = getItemKey(index);
        const row = {
          key,
          index: index,
          height: getItemHeight(index),
          offsetTop: totalHeight,
        };

        totalHeight += row.height;
        allRows[index] = row;
      }

      return {
        allItems: allRows,
        totalHeight,
      };
    }, [getItemKey, estimatedRowHeight, measurementCache, itemsCount, rowNodes]);

    const startIndex = useMemo(() => {
      let start = findStartIndex(scrollTop, allItems, itemsCount);
      return Math.max(0, start - renderAhead);
    }, [scrollTop, allItems, itemsCount, renderAhead]);

    const endIndex = useMemo(() => {
      let end = findEndIndex(allItems, startIndex, itemsCount, height);
      return Math.min(itemsCount - 1, end + renderAhead);
    }, [allItems, startIndex, itemsCount, height, renderAhead]);

    const visibleNodeCount = endIndex - startIndex + 1;

    const virtualItems = useMemo(() => allItems.slice(startIndex, visibleNodeCount), [allItems, startIndex, endIndex]);

    // const lastIndex = virtualItems.length - 1;
    // const topPadding = `${virtualItems[0]?.offsetTop || 0}px`;
    // const bottomPadding = `${totalHeight - (virtualItems[lastIndex]?.offsetTop || 0 + virtualItems[lastIndex]?.height || 0)}px`;

    // console.log({ allItems, virtualItems, totalHeight, topPadding, bottomPadding });

    const topPadding = allItems[startIndex].offsetTop;
    const bottomPadding = allItems[itemsCount - startIndex - visibleNodeCount].offsetTop;

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
      <ScrollTableBody ref={refSetter(ref, scrollElementRef)} style={{ height }}>
        {renderEmptyMessage ? renderEmptyMessage() : renderContent()}
      </ScrollTableBody>
    );
  },
);
