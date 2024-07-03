import type { RowId } from '../types';

type DynamicSizeItem = {
  key: RowId | string;
  index: number;
  offsetTop: number;
  height: number;
};

export const findStartIndex = (scrollTop: number, allItems: DynamicSizeItem[], itemsCount: number): number => {
  /* Так как allItems - это отсортированный по возрастанию массив (по параметру offsetTop),
  для поиска startIndex можно применить алгоритм двоичного поиска https://www.geeksforgeeks.org/binary-search/ */
  let low = 0;
  let high = itemsCount - 1;
  while (low <= high) {
    const middle = low + Math.floor((high - low) / 2);
    const currentOffset = allItems[middle].offsetTop;

    if (currentOffset === scrollTop) {
      return middle;
    } else if (currentOffset < scrollTop) {
      low = middle + 1;
    } else if (currentOffset > scrollTop) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

export function findEndIndex(
  allItems: DynamicSizeItem[],
  startIndex: number,
  maxOffset: number,
  itemsCount: number,
): number {
  let stopIndex = startIndex;
  const itemMetadata = allItems[startIndex];
  let offset = itemMetadata.offsetTop + itemMetadata.height;

  while (stopIndex < itemsCount - 1 && offset < maxOffset) {
    stopIndex++;
    offset += allItems[stopIndex].height;
  }

  return stopIndex;
}
