import * as React from 'react';
import styled from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';

import { ScrollTableBody } from '../style';

const Spacer = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

type itemSizeGetter = (index: number) => number;

type ItemMetadata = {
  offset: number;
  size: number;
};
type InstanceProps = {
  itemMetadataMap: { [index: number]: ItemMetadata };
  estimatedItemSize: number;
  lastMeasuredIndex: number;
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  height: number;
  renderAhead?: number;
  rowList: any[];
  renderRow: (row: any, index: number) => React.ReactNode;
  renderEmptyMessage?: () => React.ReactNode;
  itemSize: itemSizeGetter;
}
// логика взята из VariableSizeList react-window
export const VariableSizeList = React.forwardRef<HTMLDivElement, Props>(
  ({ height, renderAhead = 20, rowList, renderRow, renderEmptyMessage, itemSize, ...props }, ref) => {
    const [scrollTop, setScrollTop] = React.useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const rowInstance = React.useRef<InstanceProps>({
      itemMetadataMap: {},
      estimatedItemSize: 50,
      lastMeasuredIndex: -1,
    });

    React.useEffect(() => {
      function handleScroll(e: any) {
        requestAnimationFrame(() => {
          setScrollTop(e.target.scrollTop);
        });
      }

      const scrollContainer = scrollContainerRef.current;
      setScrollTop(scrollContainer?.scrollTop || 0);

      scrollContainer?.addEventListener('scroll', handleScroll);
      return () => scrollContainer?.removeEventListener('scroll', handleScroll);
    }, []);

    // проверка filter(Boolean), чтобы отсеять невидимые/скрытые групповые строки
    const rowNodes = React.useMemo(
      () => rowList.map((row, index) => renderRow(row, index)).filter(Boolean),
      [rowList, renderRow],
    );
    const itemCount = rowNodes.length;

    /****************************** */
    const [startIndex, stopIndex] = getRangeToRender(
      itemCount,
      renderAhead,
      height,
      itemSize,
      rowInstance.current,
      scrollTop,
    );
    /******************************** */

    let visibleNodeCount = stopIndex - startIndex + 1;
    const visibleChildren = React.useMemo(
      () => [...rowNodes].slice(startIndex, startIndex + visibleNodeCount),
      [rowNodes, startIndex, visibleNodeCount],
    );

    const topPadding = rowInstance.current.itemMetadataMap[startIndex]?.offset || 0;
    const bottomPadding = rowInstance.current.itemMetadataMap[itemCount - startIndex - visibleNodeCount]?.offset || 0;

    const renderContent = () => {
      return (
        <>
          <Spacer style={{ minHeight: topPadding }} />
          {visibleChildren}
          <Spacer style={{ minHeight: bottomPadding }} />
        </>
      );
    };

    return (
      <ScrollTableBody style={{ height }} ref={refSetter(ref, scrollContainerRef)} {...props}>
        {renderEmptyMessage ? renderEmptyMessage() : renderContent()}
      </ScrollTableBody>
    );
  },
);

function findNearestItem(itemSize: itemSizeGetter, instanceProps: InstanceProps, offset: number, itemCount: number) {
  const { itemMetadataMap, lastMeasuredIndex } = instanceProps;

  const lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch(itemSize, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch(itemSize, instanceProps, Math.max(0, lastMeasuredIndex), offset, itemCount);
  }
}

const findNearestItemBinarySearch = (
  itemSize: itemSizeGetter,
  instanceProps: InstanceProps,
  high: number,
  low: number,
  offset: number,
): number => {
  while (low <= high) {
    const middle = low + Math.floor((high - low) / 2);
    const currentOffset = getItemMetadata(itemSize, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

const findNearestItemExponentialSearch = (
  itemSize: itemSizeGetter,
  instanceProps: InstanceProps,
  index: number,
  offset: number,
  itemCount: number,
): number => {
  let interval = 1;

  while (index < itemCount && getItemMetadata(itemSize, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch(
    itemSize,
    instanceProps,
    Math.min(index, itemCount - 1),
    Math.floor(index / 2),
    offset,
  );
};

function getStopIndexForStartIndex(
  itemSize: itemSizeGetter,
  startIndex: number,
  scrollOffset: number,
  instanceProps: InstanceProps,
  height: number,
  itemCount: number,
): number {
  const size = height;
  const itemMetadata = getItemMetadata(itemSize, startIndex, instanceProps);
  const maxOffset = scrollOffset + size;

  let offset = itemMetadata.offset + itemMetadata.size;
  let stopIndex = startIndex;

  while (stopIndex < itemCount - 1 && offset < maxOffset) {
    stopIndex++;
    offset += getItemMetadata(itemSize, stopIndex, instanceProps).size;
  }

  return stopIndex;
}

const getItemMetadata = (itemSize: itemSizeGetter, index: number, instanceProps: InstanceProps): any => {
  const { itemMetadataMap, lastMeasuredIndex } = instanceProps;

  if (index > lastMeasuredIndex) {
    let offset = 0;
    if (lastMeasuredIndex >= 0) {
      const itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (let i = lastMeasuredIndex + 1; i <= index; i++) {
      let size = itemSize(i);

      itemMetadataMap[i] = {
        offset,
        size,
      };

      offset += size;
    }

    instanceProps.lastMeasuredIndex = index;
  }

  return itemMetadataMap[index];
};

function getRangeToRender(
  itemCount: number,
  renderAhead: number,
  height: number,
  itemSize: itemSizeGetter,
  rowInstance: InstanceProps,
  scrollTop: number,
): [number, number] {
  if (itemCount === 0) {
    return [0, 0];
  }

  const startIndex = findNearestItem(itemSize, rowInstance, scrollTop, itemCount);
  const stopIndex = getStopIndexForStartIndex(itemSize, startIndex, scrollTop, rowInstance, height, itemCount);

  const overscanBackward = Math.max(1, renderAhead);
  const overscanForward = Math.max(1, renderAhead);

  return [
    Math.max(0, startIndex - overscanBackward),
    Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)),
  ];
}
