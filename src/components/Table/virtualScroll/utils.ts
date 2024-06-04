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

export const getEstimatedTotalSize = (
  itemCount: number,
  { itemMetadataMap, estimatedItemSize, lastMeasuredIndex }: InstanceProps,
) => {
  let totalSizeOfMeasuredItems = 0;

  // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138
  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }

  if (lastMeasuredIndex >= 0) {
    const itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }

  const numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  const totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;

  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};

const findNearestItem = (itemSize: itemSizeGetter, instanceProps: InstanceProps, offset: number, itemCount: number) => {
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
};

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

export const getRangeToRender = (
  itemCount: number,
  renderAhead: number,
  height: number,
  itemSize: itemSizeGetter,
  rowInstance: InstanceProps,
  scrollTop: number,
): [number, number] => {
  if (itemCount === 0) {
    return [0, 0];
  }

  const overscan = Math.max(1, renderAhead);

  let startIndex = findNearestItem(itemSize, rowInstance, scrollTop, itemCount);
  startIndex = Math.max(0, startIndex - overscan);

  let stopIndex = getStopIndexForStartIndex(itemSize, startIndex, scrollTop, rowInstance, height, itemCount);
  stopIndex = Math.max(0, Math.min(itemCount - 1, stopIndex + overscan));

  // вычисляю размер строк с учетом overscan
  getItemMetadata(itemSize, stopIndex, rowInstance);

  return [startIndex, stopIndex];
};
