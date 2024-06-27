import { forwardRef, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, memo } from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import { ScrollTableBody, Spacer } from '../style';

type Key = string | number;

interface DynamicSizeItem {
  key: Key;
  index: number;
  offsetTop: number;
  height: number;
}

interface DynamicSizeBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  height: number;
  renderAhead?: number;
  rowList: any[];
  renderRow: (row: any, index: number) => React.ReactNode;
  renderEmptyMessage?: () => React.ReactNode;
  estimatedRowHeight?: (index: number) => number;
}

function useLatest<T>(value: T) {
  const valueRef = useRef(value);
  useLayoutEffect(() => {
    valueRef.current = value;
  });
  return valueRef;
}

export const DynamicSizeBody = forwardRef<HTMLDivElement, DynamicSizeBodyProps>(
  ({ rowList, height, renderAhead = 20, renderRow, renderEmptyMessage, estimatedRowHeight = () => 40 }, ref) => {
    const scrollElementRef = useRef<HTMLDivElement>(null);
    const [measurementCache, setMeasurementCache] = useState<Record<Key, number>>({});
    const [scrollTop, setScrollTop] = useState(0);

    const getItemKey = useCallback((index: number) => rowList[index]!.id, [rowList]);
    const itemsCount = useMemo(() => rowList.length, [rowList]);

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

    const { virtualItems, totalHeight, allItems } = useMemo(() => {
      const getItemHeight = (index: number) => {
        const key = getItemKey(index);
        if (typeof measurementCache[key] === 'number') {
          return measurementCache[key]!;
        }

        return estimatedRowHeight!(index);
      };

      const rangeStart = scrollTop;
      const rangeEnd = scrollTop + height;

      let totalHeight = 0;
      let startIndex = -1;
      let endIndex = -1;
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

        if (startIndex === -1 && row.offsetTop + row.height > rangeStart) {
          startIndex = Math.max(0, index - renderAhead);
        }

        if (endIndex === -1 && row.offsetTop + row.height >= rangeEnd) {
          endIndex = Math.min(itemsCount - 1, index + renderAhead);
        }
      }

      const virtualRows = allRows.slice(startIndex, endIndex + 1);

      return {
        virtualItems: virtualRows,
        startIndex,
        endIndex,
        allItems: allRows,
        totalHeight,
      };
    }, [scrollTop, renderAhead, height, getItemKey, estimatedRowHeight, measurementCache, itemsCount]);

    const latestData = useLatest({ measurementCache });

    const lastIndex = virtualItems.length - 1;
    const topPadding = `${virtualItems[0].offsetTop}px`;
    const bottomPadding = `${totalHeight - (virtualItems[lastIndex].offsetTop + virtualItems[lastIndex].height)}px`;

    const renderContent = () => {
      return (
        <>
          <Spacer style={{ minHeight: topPadding }} />
          {virtualItems.map((virtualItem) => {
            const item = rowList[virtualItem.index]!;

            return (
              <RowWrapper
                key={item.id}
                id={item.id}
                latestData={latestData}
                scrollElementRef={scrollElementRef}
                setMeasurementCache={setMeasurementCache}
              >
                {renderRow(item, virtualItem.index)}
              </RowWrapper>
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

const RowWrapper = memo(({ children, latestData, id, scrollElementRef, setMeasurementCache, ...props }: any) => {
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  const { measurementCache } = latestData.current;

  useLayoutEffect(() => {
    if (node) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const height = entry.contentRect.height || 0;

          if (measurementCache[id] === height) {
            return;
          }
          setMeasurementCache((cache: any) => ({ ...cache, [id]: height }));
        });
      });
      resizeObserver.observe(node);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [node]);

  return (
    <div ref={(node) => setNode(node)} {...props}>
      {children}
    </div>
  );
});
