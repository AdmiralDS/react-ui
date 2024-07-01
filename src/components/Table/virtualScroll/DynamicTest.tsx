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

    // проверка filter(Boolean), чтобы отсеять невидимые/скрытые групповые строки
    const rowNodes = useMemo(
      () => rowList.filter((row, index) => Boolean(renderRow(row, index))),
      [rowList, renderRow],
    );
    const itemsCount = useMemo(() => rowNodes.length, [rowNodes]);

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
    }, [scrollTop, renderAhead, height, getItemKey, estimatedRowHeight, measurementCache, itemsCount, rowNodes]);

    const firstVisibleNode = useMemo(
      () => findStartNode(scrollTop, allItems, itemsCount),
      [scrollTop, allItems, itemsCount],
    );

    let startNode = firstVisibleNode;
    startNode = Math.max(0, startNode - renderAhead);

    const lastVisibleNode = useMemo(
      () => findEndNode(allItems, firstVisibleNode, itemsCount, height),
      [allItems, firstVisibleNode, itemsCount, height],
    );
    const endNode = Math.min(itemsCount - 1, lastVisibleNode + renderAhead);

    let visibleNodeCount = endNode - startNode + 1;

    const virtualItems = allItems.slice(startNode, startNode + visibleNodeCount);

    const latestData = useLatest({ measurementCache });

    const lastIndex = virtualItems.length - 1;
    const topPadding = `${virtualItems[0]?.offsetTop || 0}px`;
    const bottomPadding = `${totalHeight - (virtualItems[lastIndex].offsetTop + virtualItems[lastIndex].height)}px`;

    const renderContent = () => {
      return (
        <>
          <Spacer style={{ minHeight: topPadding }} />
          {virtualItems.map((virtualItem) => {
            // const item = rowList[virtualItem.index]!;
            const item = rowNodes[virtualItem.index]!;

            return (
              <RowWrapper key={item.id} id={item.id} latestData={latestData} setMeasurementCache={setMeasurementCache}>
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

const RowWrapper = memo(({ children, latestData, id, setMeasurementCache, ...props }: any) => {
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  const { measurementCache } = latestData.current;

  useLayoutEffect(() => {
    if (node) {
      const resizeObserver = new ResizeObserver(() => {
        const height = node.getBoundingClientRect().height || 0;

        if (measurementCache[id] === height) {
          return;
        }
        setMeasurementCache((cache: any) => ({ ...cache, [id]: height }));
      });
      resizeObserver.observe(node);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [node]);

  return (
    <div ref={(node) => setNode(node)} style={{ display: 'flex' }} {...props}>
      {children}
    </div>
  );
});

/* inspired by https://dev.to/adamklein/build-your-own-virtual-scroll-part-ii-3j86 */

function findStartNode(scrollTop: number, nodePositions: DynamicSizeItem[], itemsCount: number) {
  /* Так как nodePositions - это отсортированный по возрастанию массив, 
  для поиска startNode можно применить алгоритм двоичного поиска. https://www.geeksforgeeks.org/binary-search/ */
  let startRange = 0;
  let endRange = itemsCount - 1;
  while (endRange !== startRange) {
    const middle = Math.floor((endRange - startRange) / 2 + startRange);

    if (nodePositions[middle].offsetTop <= scrollTop && nodePositions[middle + 1].offsetTop > scrollTop) {
      return middle;
    }

    if (middle === startRange) {
      // кейс когда start и end range идут друг за другом
      return endRange;
    } else {
      if (nodePositions[middle].offsetTop <= scrollTop) {
        startRange = middle;
      } else {
        endRange = middle;
      }
    }
  }
  return itemsCount;
}

function findEndNode(nodePositions: DynamicSizeItem[], startNode: number, itemsCount: number, height: number) {
  let endNode;
  for (endNode = startNode; endNode < itemsCount; endNode++) {
    if (nodePositions[endNode].offsetTop > nodePositions[startNode].offsetTop + height) {
      return endNode;
    }
  }
  return endNode;
}
