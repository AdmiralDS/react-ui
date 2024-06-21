import { forwardRef, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import { ScrollTableBody } from '../style';

/*
Фичи:
- размер контейнера [done]
- разный размер элементов списка [done]
- динамический замер элементов списка [done] 
- отслеживание элементов через resizeObserver
- корректировка скролла (станет ясно в конце)
*/

type Key = string | number;

interface UseDynamicSizeListProps {
  itemsCount: number;
  listHeight: number;
  itemHeight?: (index: number) => number;
  estimateItemHeight?: (index: number) => number;
  getItemKey: (index: number) => Key;
  overscan?: number;
  scrollingDelay?: number;
  getScrollElement: () => HTMLElement | null;
}

interface DynamicSizeListItem {
  key: Key;
  index: number;
  offsetTop: number;
  height: number;
}

const DEFAULT_OVERSCAN = 3;
const DEFAULT_SCROLLING_DELAY = 150;

function validateProps(props: UseDynamicSizeListProps) {
  const { itemHeight, estimateItemHeight } = props;

  if (!itemHeight && !estimateItemHeight) {
    throw new Error(`you must pass either "itemHeight" or "estimateItemHeight" prop`);
  }
}

function useDynamicSizeList(props: UseDynamicSizeListProps) {
  validateProps(props);

  const {
    itemHeight,
    estimateItemHeight,
    getItemKey,
    itemsCount,
    listHeight,
    scrollingDelay = DEFAULT_SCROLLING_DELAY,
    overscan = DEFAULT_OVERSCAN,
    getScrollElement,
  } = props;

  const [measurementCache, setMeasurementCache] = useState<Record<Key, number>>({});
  const [scrollTop, setScrollTop] = useState(0);

  // именно useLayoutEffect, чтобы не было видно скачков от 0 до кокнретной величины scrollTop
  useLayoutEffect(() => {
    const scrollElement = getScrollElement();

    if (!scrollElement) {
      return;
    }

    const handleScroll = () => {
      const scrollTop = scrollElement.scrollTop;

      setScrollTop(scrollTop);
    };
    // вызываем вначале, чтобы при первом рендере (до начала скроллирования) значение было корректным
    handleScroll();

    scrollElement.addEventListener('scroll', handleScroll);

    return () => scrollElement.removeEventListener('scroll', handleScroll);
  }, [getScrollElement]);

  const { virtualItems, startIndex, endIndex, totalHeight, allItems } = useMemo(() => {
    const getItemHeight = (index: number) => {
      if (itemHeight) {
        return itemHeight(index);
      }

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
  }, [scrollTop, overscan, listHeight, itemHeight, getItemKey, estimateItemHeight, measurementCache, itemsCount]);

  const measureElement = useCallback(
    (element: Element | null) => {
      if (!element) {
        return;
      }

      const indexAttribute = element.getAttribute('data-index') || '';
      const index = parseInt(indexAttribute, 10);

      if (Number.isNaN(index)) {
        console.error('dynamic elements must have a valid `data-index` attribute');
        return;
      }

      const size = element.getBoundingClientRect();
      const key = getItemKey(index);

      setMeasurementCache((cache) => ({ ...cache, [key]: size.height }));
    },
    [getItemKey],
  );

  return {
    virtualItems,
    totalHeight,
    startIndex,
    endIndex,
    allItems,
    measureElement,
  };
}

export const DynamicHeight = forwardRef<HTMLDivElement, any>(({ listHeight, rowList, renderRow }, ref) => {
  const [listItems, setListItems] = useState(rowList);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const { virtualItems, totalHeight, measureElement } = useDynamicSizeList({
    listHeight,
    estimateItemHeight: useCallback(() => 1000, []),
    itemsCount: listItems.length,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
    getItemKey: useCallback((index) => listItems[index]!.id, [listItems]),
  });

  return (
    // <div style={{ padding: "0 12px" }}>
    //   <h1>List</h1>
    //   <div style={{ marginBottom: 12 }}>
    //     <button
    //       onClick={() => setListItems((items) => items.slice().reverse())}
    //     >
    //       reverse
    //     </button>
    //   </div>
    <ScrollTableBody
      ref={refSetter(ref, scrollElementRef)}
      style={{
        height: containerHeight + 'px',
        position: 'relative',
        display: 'block',
      }}
    >
      <div style={{ height: totalHeight }}>
        {virtualItems.map((virtualItem) => {
          const item = listItems[virtualItem.index]!;

          return (
            <div
              key={item.id}
              data-index={virtualItem.index}
              ref={measureElement}
              style={{
                position: 'absolute',
                top: 0,
                transform: `translateY(${virtualItem.offsetTop}px)`,
                padding: '6px 12px',
              }}
            >
              {renderRow(item, virtualItem.index)}
            </div>
          );
        })}
      </div>
    </ScrollTableBody>
    // </div>
  );
});
