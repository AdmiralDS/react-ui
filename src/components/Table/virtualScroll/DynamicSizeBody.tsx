import * as React from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import { ScrollTableBody, Spacer } from '../style';
import type { RowId } from '../types';

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
  renderRow: (row: any, index: number) => React.ReactNode;
  renderEmptyMessage?: () => React.ReactNode;
  estimatedRowHeight?: (index: number) => number;
}

export const DynamicSizeBody = React.forwardRef<HTMLDivElement, DynamicSizeBodyProps>(
  ({ rowList, height, renderAhead = 20, renderRow, renderEmptyMessage, estimatedRowHeight = () => 40 }, ref) => {
    const [measurementCache, setMeasurementCache] = React.useState<Cache>({});
    const [scrollTop, setScrollTop] = React.useState(0);

    const scrollElementRef = React.useRef<HTMLDivElement>(null);
    const measurementCacheRef = React.useRef<Cache>(measurementCache);

    React.useLayoutEffect(() => {
      measurementCacheRef.current = measurementCache;
    });

    const getItemKey = React.useCallback((index: number) => rowList[index]!.id, [rowList]);

    // проверка filter(Boolean), чтобы отсеять невидимые/скрытые групповые строки
    const rowNodes = React.useMemo(
      () => rowList.filter((row, index) => Boolean(renderRow(row, index))),
      [rowList, renderRow],
    );
    // const itemsCount = useMemo(() => rowList.length, [rowList]);
    const itemsCount = React.useMemo(() => rowNodes.length, [rowNodes]);

    React.useEffect(() => {
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

    const { virtualItems, totalHeight, allItems } = React.useMemo(() => {
      const getItemHeight = (index: number) => {
        const key = getItemKey(index);
        return measurementCache[key] ?? estimatedRowHeight(index);
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
      console.log({ rangeStart, rangeEnd, startIndex, endIndex, allRows });
      const virtualRows = allRows.slice(startIndex, endIndex + 1);

      return {
        virtualItems: virtualRows,
        startIndex,
        endIndex,
        allItems: allRows,
        totalHeight,
      };
    }, [scrollTop, renderAhead, height, getItemKey, estimatedRowHeight, measurementCache, itemsCount, rowNodes]);

    const lastIndex = virtualItems.length - 1;
    const topPadding = `${virtualItems[0]?.offsetTop || 0}px`;
    const bottomPadding = `${totalHeight - (virtualItems[lastIndex]?.offsetTop || 0 + virtualItems[lastIndex]?.height || 0)}px`;

    const renderContent = () => {
      return (
        <>
          <Spacer style={{ minHeight: topPadding }} />
          {virtualItems.map((virtualItem) => {
            const item = rowNodes[virtualItem.index];

            return (
              <RowWrapper key={item.id} id={item.id} cacheRef={measurementCacheRef} setCache={setMeasurementCache}>
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

type RowWrapperProps = {
  id: RowId | number;
  children: React.ReactNode;
  cacheRef: React.MutableRefObject<Cache>;
  setCache: any;
};

const RowWrapper: React.FC<RowWrapperProps> = React.memo(({ children, cacheRef, id, setCache }) => {
  const [node, setNode] = React.useState<HTMLDivElement | null>(null);
  const measurementCache = cacheRef.current;

  React.useLayoutEffect(() => {
    if (node) {
      const resizeObserver = new ResizeObserver(() => {
        const height = node.getBoundingClientRect().height || 0;

        if (measurementCache[id] === height) {
          return;
        }
        setCache((cache: Cache) => ({ ...cache, [id]: height }));
      });
      resizeObserver.observe(node);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [node]);

  return <div ref={(node) => setNode(node)}>{children}</div>;
});
