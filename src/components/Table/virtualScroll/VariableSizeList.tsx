import * as React from 'react';
import styled from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';

import { ScrollTableBody } from '../style';
import { getRangeToRender, getEstimatedTotalSize } from './utils';

const Spacer = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

const Row = ({ data, index, setSize, estimatedItemSize }: any) => {
  const rowRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setSize(index, rowRef.current?.getBoundingClientRect().height || estimatedItemSize);
  }, [setSize, index]);

  return <div ref={rowRef}>{data}</div>;
};

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
  estimatedRowHeight?: number;
  itemSize: itemSizeGetter;
}
// логика взята из VariableSizeList react-window
export const VariableSizeList = React.forwardRef<HTMLDivElement, Props>(
  (
    { height, renderAhead = 20, rowList, estimatedRowHeight = 150, itemSize, renderRow, renderEmptyMessage, ...props },
    ref,
  ) => {
    const [scrollTop, setScrollTop] = React.useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const rowInstance = React.useRef<InstanceProps>({
      itemMetadataMap: {},
      estimatedItemSize: estimatedRowHeight,
      lastMeasuredIndex: -1,
    });
    // const [update, forceUpdate] = React.useState({});
    // const sizeMap = React.useRef<any>({});
    // const setSize = React.useCallback((index: number, size: number) => {
    //   sizeMap.current = { ...sizeMap.current, [index]: size };
    //   resetAfterIndex(0);
    // }, []);
    // const itemSize = (index: number) => sizeMap.current?.[index] || rowInstance.current.estimatedItemSize;

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
    // filter(Boolean) removes all empty items from an array
    const rowNodes = React.useMemo(
      () => rowList.map((row, index) => renderRow(row, index)).filter(Boolean),
      //   .map((row, index) => (
      //     <Row index={index} data={row} setSize={setSize} estimatedItemSize={rowInstance.current.estimatedItemSize} />
      //   )
      [rowList, renderRow],
    );
    const itemCount = rowNodes.length;

    /****************************** */
    // const resetAfterIndex = (index: number, shouldForceUpdate: boolean = true) => {
    //   rowInstance.current.lastMeasuredIndex = Math.min(rowInstance.current.lastMeasuredIndex, index - 1);

    //   if (shouldForceUpdate) {
    //     forceUpdate({});
    //   }
    // };

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

    // Read this value AFTER items have been created,
    // So their actual sizes (if variable) are taken into consideration.
    const estimatedTotalSize = getEstimatedTotalSize(itemCount, rowInstance.current);

    const topPadding = rowInstance.current.itemMetadataMap[startIndex]?.offset || 0;
    const bottomPadding =
      estimatedTotalSize -
        (rowInstance.current.itemMetadataMap[stopIndex]?.offset +
          rowInstance.current.itemMetadataMap[stopIndex]?.size) || 0;

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
