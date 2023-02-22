import React from 'react';
import { scanForUnloadedRanges } from './scan';

type onItemsRenderedParams = {
  visibleStartIndex: number;
  visibleStopIndex: number;
};
type onItemsRendered = (params: onItemsRenderedParams) => void;
type setRef = (ref: any) => void;

type Props = {
  // Render prop.
  children: ({ onItemsRendered, ref }: { onItemsRendered: onItemsRendered; ref: setRef }) => any;

  // Function responsible for tracking the loaded state of each item.
  isItemLoaded: (index: number) => boolean;

  // Number of rows in list; can be arbitrary high number if actual number is unknown.
  itemCount: number;

  // Callback to be invoked when more rows must be loaded.
  // It should return a Promise that is resolved once all data has finished loading.
  loadMoreItems?: (startIndex: number, stopIndex: number) => Promise<void>;

  // Minimum number of rows to be loaded at a time; defaults to 10.
  // This property can be used to batch requests to reduce HTTP requests.
  minimumBatchSize?: number;

  // Threshold at which to pre-fetch data; defaults to 15.
  // A threshold of 15 means that data will start loading when a user scrolls within 15 rows.
  // threshold?: number;
};

function isRangeVisible({
  lastRenderedStartIndex,
  lastRenderedStopIndex,
  startIndex,
  stopIndex,
}: {
  lastRenderedStartIndex: number;
  lastRenderedStopIndex: number;
  startIndex: number;
  stopIndex: number;
}): boolean {
  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}

export const InfiniteLoader = ({
  isItemLoaded,
  itemCount,
  minimumBatchSize = 10,
  // threshold = 15,
  loadMoreItems,
  children,
}: Props) => {
  const [lastRenderedStartIndex, setLastRenderedStartIndex] = React.useState<number>(-1);
  const [lastRenderedStopIndex, setLastRenderedStopIndex] = React.useState<number>(-1);
  const [memoizedUnloadedRanges, setMemoizedUnloadedRanges] = React.useState<Array<number>>([]);
  const [update, forceUpdate] = React.useState({});
  const [listRef, setListRef] = React.useState<any>(null);

  const setRef = (listRef: any) => {
    setListRef(listRef);
  };
  const onItemsRendered: onItemsRendered = ({ visibleStartIndex, visibleStopIndex }: onItemsRenderedParams) => {
    setLastRenderedStartIndex(visibleStartIndex);
    setLastRenderedStopIndex(visibleStopIndex);

    ensureRowsLoaded(visibleStartIndex, visibleStopIndex);
  };

  const ensureRowsLoaded = (startIndex: number, stopIndex: number) => {
    const unloadedRanges = scanForUnloadedRanges({
      isItemLoaded,
      itemCount,
      minimumBatchSize,
      // startIndex: Math.max(0, startIndex - threshold),
      startIndex: Math.max(0, startIndex),
      // stopIndex: Math.min(itemCount - 1, stopIndex + threshold),
      stopIndex: Math.min(itemCount - 1, stopIndex),
    });

    // Avoid calling load-rows unless range has changed.
    // This shouldn't be strictly necessary, but is maybe nice to do.
    if (
      memoizedUnloadedRanges.length !== unloadedRanges.length ||
      memoizedUnloadedRanges.some((startOrStop, index) => unloadedRanges[index] !== startOrStop)
    ) {
      setMemoizedUnloadedRanges(unloadedRanges);
      loadUnloadedRanges(unloadedRanges);
    }
  };

  const content = React.useCallback(() => children({ onItemsRendered, ref: setRef }), [update, children]);

  const loadUnloadedRanges = (unloadedRanges: Array<number>) => {
    for (let i = 0; i < unloadedRanges.length; i += 2) {
      const startIndex = unloadedRanges[i];
      const stopIndex = unloadedRanges[i + 1];
      const promise = loadMoreItems?.(startIndex, stopIndex);
      if (promise != null) {
        promise.then(() => {
          // Refresh the visible rows if any of them have just been loaded.
          // Otherwise they will remain in their unloaded visual state.
          if (
            isRangeVisible({
              lastRenderedStartIndex,
              lastRenderedStopIndex,
              startIndex,
              stopIndex,
            })
          ) {
            // Handle an unmount while promises are still in flight.
            if (listRef == null) {
              return;
            } else {
              forceUpdate({});
            }
            // // Resize cached row sizes for VariableSizeList,
            // // otherwise just re-render the list.
            // if (typeof this._listRef.resetAfterIndex === 'function') {
            //   this._listRef.resetAfterIndex(startIndex, true);
            // } else {
            //   // HACK reset temporarily cached item styles to force PureComponent to re-render.
            //   // This is pretty gross, but I'm okay with it for now.
            //   // Don't judge me.
            //   if (typeof this._listRef._getItemStyleCache === 'function') {
            //     this._listRef._getItemStyleCache(-1);
            //   }
            //   this._listRef.forceUpdate();
          }
        });
      }
    }
  };
  return content();
};
