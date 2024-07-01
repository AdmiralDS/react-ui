import type { RowId } from '../types';

type DynamicSizeItem = {
  key: RowId | string;
  index: number;
  offsetTop: number;
  height: number;
};

/* inspired by https://dev.to/adamklein/build-your-own-virtual-scroll-part-ii-3j86 */

export function findStartIndex(scrollTop: number, allItems: DynamicSizeItem[], itemsCount: number) {
  /* Так как nodePositions - это отсортированный по возрастанию массив, 
  для поиска startNode можно применить алгоритм двоичного поиска. https://www.geeksforgeeks.org/binary-search/ */
  let startRange = 0;
  let endRange = itemsCount - 1;
  while (endRange !== startRange) {
    const middle = Math.floor((endRange - startRange) / 2 + startRange);

    if (allItems[middle].offsetTop <= scrollTop && allItems[middle + 1].offsetTop > scrollTop) {
      return middle;
    }

    if (middle === startRange) {
      // кейс когда start и end range идут друг за другом
      return endRange;
    } else {
      if (allItems[middle].offsetTop <= scrollTop) {
        startRange = middle;
      } else {
        endRange = middle;
      }
    }
  }
  return itemsCount;
}

export function findEndIndex(allItems: DynamicSizeItem[], startIndex: number, itemsCount: number, height: number) {
  let endNode;
  for (endNode = startIndex; endNode < itemsCount; endNode++) {
    if (allItems[endNode].offsetTop > allItems[startIndex].offsetTop + height) {
      return endNode;
    }
  }
  return endNode;
}
