import { forwardRef, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, memo } from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import { ScrollTableBody, Spacer } from '../style';

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

export const DynamicHeight = forwardRef<HTMLDivElement, any>(({ listItems, renderRow, listHeight }, ref) => {
  const scrollElementRef = useRef<HTMLDivElement>(null);
  const [measurementCache, setMeasurementCache] = useState<Record<Key, number>>({});
  const [scrollTop, setScrollTop] = useState(0);

  const getItemKey = useCallback((index: number) => listItems[index]!.id, [listItems]);
  const estimateItemHeight = useCallback((index: number) => 40, []);
  const itemsCount = listItems.length;
  const overscan = 20;

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

  const lastIndex = virtualItems.length - 1;
  const topPadding = `${virtualItems[0].offsetTop}px`;
  const bottomPadding = `${totalHeight - (virtualItems[lastIndex].offsetTop + virtualItems[lastIndex].height)}px`;

  return (
    <ScrollTableBody ref={refSetter(ref, scrollElementRef)} style={{ height: listHeight }}>
      <Spacer style={{ minHeight: topPadding }} />
      {virtualItems.map((virtualItem) => {
        const item = listItems[virtualItem.index]!;

        return (
          <RowWrapper
            key={item.id}
            id={item.id}
            data-index={virtualItem.index}
            latestData={latestData}
            scrollElementRef={scrollElementRef}
            setMeasurementCache={setMeasurementCache}
          >
            {renderRow(item, virtualItem.index)}
          </RowWrapper>
        );
      })}
      <Spacer style={{ minHeight: bottomPadding }} />
    </ScrollTableBody>
  );

  return (
    <ScrollTableBody
      ref={refSetter(ref, scrollElementRef)}
      style={{
        height: listHeight,
        position: 'relative',
      }}
    >
      <div style={{ height: totalHeight, display: 'flex', flex: '1 0 auto' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: `translateY(${virtualItems[0].offsetTop}px)`,
            willChange: 'auto',
          }}
        >
          {virtualItems.map((virtualItem) => {
            const item = listItems[virtualItem.index]!;

            return (
              <RowWrapper
                key={item.id}
                id={item.id}
                data-index={virtualItem.index}
                latestData={latestData}
                scrollElementRef={scrollElementRef}
                setMeasurementCache={setMeasurementCache}
              >
                {renderRow(item, virtualItem.index)}
              </RowWrapper>
            );
          })}
        </div>
      </div>
    </ScrollTableBody>
  );
});

const RowWrapper = memo(({ children, latestData, id, scrollElementRef, setMeasurementCache, ...props }: any) => {
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
});
