// Разбираюсь в скрипте из пакета react-window-infinite-loader

// Ranges is array of pairs: [start0, stop0, start1, stop1, ..., startN, stopN]
export type Ranges = Array<number>;

export const scanForUnloadedRanges = ({
  isItemLoaded,
  itemCount,
  minimumBatchSize,
  startIndex,
  stopIndex,
}: {
  isItemLoaded: (index: number) => boolean;
  itemCount: number;
  minimumBatchSize: number;
  startIndex: number;
  stopIndex: number;
}): any => {
  // Ranges is array of pairs: [start0, stop0, start1, stop1, ..., startN, stopN]
  const unloadedRanges: any = [];

  let rangeStartIndex = null;
  let rangeStopIndex = null;

  /** Просматриваю список строк от startIndex до stopIndex, проверяю загружены ли они.
   * Если все строки загружены, то никакой код не выполнится
   * Если строка не загружена, то её индекс заносится в rangeStopIndex и в rangeStartIndex (если это значение было null).
   * Если ещё одна строка не загружена, её индекс заносится в rangeStopIndex, тем самым расширяя диапазон.
   * Если затем встречается загруженная строка, то диапазн rangeStartIndex - rangeStopIndex заносится в unloadedRanges,
   * затем rangeStartIndex, rangeStopIndex обнуляются,
   * */
  for (let index = startIndex; index <= stopIndex; index++) {
    let loaded = isItemLoaded(index);

    if (!loaded) {
      rangeStopIndex = index;
      if (rangeStartIndex === null) {
        rangeStartIndex = index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push(rangeStartIndex, rangeStopIndex);

      rangeStartIndex = rangeStopIndex = null;
    }
  }

  // Если rangeStopIndex не равен null, значит диапазон закончился незагруженной строкой и нужно найти конец этого диапазона
  // ( it means we haven't ran out of unloaded rows.)
  // просканируем следующие строки, если они не загружены занесем их также в диапазон. Не превышаем minimumBatchSize
  // Scan forward to try filling our :minimumBatchSize.
  // может быть случай, когда rangeStartIndex + minimumBatchSize - 1 меньше, чем rangeStopIndex
  if (rangeStopIndex !== null) {
    const potentialStopIndex = Math.min(
      Math.max(rangeStopIndex, (rangeStartIndex || 0) + minimumBatchSize - 1),
      itemCount - 1,
    );

    for (let index = rangeStopIndex + 1; index <= potentialStopIndex; index++) {
      if (!isItemLoaded(index)) {
        rangeStopIndex = index;
      } else {
        break;
      }
    }

    unloadedRanges.push(rangeStartIndex, rangeStopIndex);
  }

  // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.
  if (unloadedRanges.length) {
    while (unloadedRanges[1] - unloadedRanges[0] + 1 < minimumBatchSize && unloadedRanges[0] > 0) {
      let index = unloadedRanges[0] - 1;

      if (!isItemLoaded(index)) {
        unloadedRanges[0] = index;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
};
