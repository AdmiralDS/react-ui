import { forwardRef, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import { ScrollTableBody } from '../style';

type Key = string | number;

interface DynamicSizeListItem {
  key: Key;
  index: number;
  offsetTop: number;
  height: number;
}

function useLatest<T>(value: T) {
  const valueRef = useRef(value);
  useLayoutEffect(() => {
    valueRef.current = value;
  });
  return valueRef;
}

export const DynamicHeight = forwardRef<HTMLDivElement, any>(({ listItems, listHeight, renderRow }, ref) => {
  const scrollElementRef = useRef<HTMLDivElement>(null);
  const [measurementCache, setMeasurementCache] = useState<Record<Key, number>>({});
  const [scrollTop, setScrollTop] = useState(0);

  const getItemKey = useCallback((index: number) => listItems[index]!.id, [listItems]);
  const estimateItemHeight = useCallback((index: number) => 40, []);
  const itemsCount = listItems.length;
  const overscan = 10;

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

  const { virtualItems, startIndex, endIndex, totalHeight, allItems } = useMemo(() => {
    const getItemHeight = (index: number) => {
      const key = getItemKey(index);
      if (typeof measurementCache[key] === 'number') {
        return measurementCache[key]!;
      }

      return estimateItemHeight!(index);
    };

    const rangeStart = scrollTop;
    const rangeEnd = scrollTop + listHeight;

    let totalHeight = 0;
    let startIndex = -1;
    let endIndex = -1;
    const allRows: DynamicSizeListItem[] = Array(itemsCount);

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
        startIndex = Math.max(0, index - overscan);
      }

      if (endIndex === -1 && row.offsetTop + row.height >= rangeEnd) {
        endIndex = Math.min(itemsCount - 1, index + overscan);
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
  }, [scrollTop, overscan, listHeight, getItemKey, estimateItemHeight, measurementCache, itemsCount]);

  const latestData = useLatest({
    measurementCache,
    getItemKey,
    allItems,
    scrollTop,
  });

  //   const measureElementInner = useCallback(
  //     (element: Element | null, resizeObserver: ResizeObserver, entry?: ResizeObserverEntry) => {
  //       if (!element) {
  //         return;
  //       }

  //       if (!element.isConnected) {
  //         resizeObserver.unobserve(element);
  //         return;
  //       }

  //       const indexAttribute = element.getAttribute('data-index') || '';
  //       const index = parseInt(indexAttribute, 10);

  //       const { measurementCache, getItemKey, allItems, scrollTop } = latestData.current;

  //       const key = getItemKey(index);
  //       const isResize = Boolean(entry);

  //       resizeObserver.observe(element);

  //       if (!isResize && typeof measurementCache[key] === 'number') {
  //         return;
  //       }

  //       const height = entry?.borderBoxSize[0]?.blockSize ?? element.getBoundingClientRect().height;

  //       if (measurementCache[key] === height) {
  //         return;
  //       }

  //       const item = allItems[index]!;
  //       const delta = height - item.height;

  //       if (delta !== 0 && scrollTop > item.offsetTop) {
  //         const element = scrollElementRef.current;
  //         if (element) {
  //           element.scrollBy(0, delta);
  //         }
  //       }

  //       setMeasurementCache((cache) => ({ ...cache, [key]: height }));
  //     },
  //     [],
  //   );

  //   const itemsResizeObserver = useMemo(() => {
  //     const ro = new ResizeObserver((entries) => {
  //       entries.forEach((entry) => {
  //         measureElementInner(entry.target, ro, entry);
  //       });
  //     });
  //     return ro;
  //   }, [latestData]);

  //   const measureElement = useCallback(
  //     (element: Element | null) => {
  //       measureElementInner(element, itemsResizeObserver);
  //     },
  //     [itemsResizeObserver],
  //   );

  console.log(virtualItems);

  return (
    <ScrollTableBody
      ref={refSetter(ref, scrollElementRef)}
      style={{
        height: listHeight,
        position: 'relative',
        display: 'block',
      }}
    >
      <div style={{ height: totalHeight }}>
        <div style={{ position: 'absolute', top: '0', transform: `translateY(${virtualItems[0].offsetTop}px)` }}>
          {virtualItems.map((virtualItem) => {
            const item = listItems[virtualItem.index]!;

            return (
              <RowWrapper
                key={item.id}
                id={item.id}
                data-index={virtualItem.index}
                //   style={{
                //     position: 'absolute',
                //     top: 0,
                //     // left: 0,
                //     // right: 0,
                //     transform: `translateY(${virtualItem.offsetTop}px)`,
                //   }}
                latestData={latestData}
                scrollElementRef={scrollElementRef}
                setMeasurementCache={setMeasurementCache}
              >
                {/* <div
                key={item.id}
                data-index={virtualItem.index}
                ref={measureElement}
                style={{
                  position: 'absolute',
                  top: 0,
                  // left: 0,
                  // right: 0,
                  transform: `translateY(${virtualItem.offsetTop}px)`,
                }}
              > */}
                {renderRow(item, virtualItem.index)}
                {/* </div> */}
              </RowWrapper>
            );
          })}
        </div>
      </div>
    </ScrollTableBody>
  );
});

const RowWrapper = ({ children, latestData, id, scrollElementRef, setMeasurementCache, ...props }: any) => {
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  const { measurementCache, allItems, scrollTop } = latestData.current;

  useLayoutEffect(() => {
    if (node) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const height = entry.contentRect.height || 0;
          const indexAttribute = node.getAttribute('data-index') || '';
          const index = parseInt(indexAttribute, 10);

          if (measurementCache[id] === height) {
            return;
          }

          const item = allItems[index]!;
          const delta = height - item.height;

          if (delta !== 0 && scrollTop > item.offsetTop) {
            const element = scrollElementRef.current;
            if (element) {
              element.scrollBy(0, delta);
            }
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
};
