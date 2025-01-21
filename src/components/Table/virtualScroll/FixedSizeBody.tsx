import * as React from 'react';

import { ScrollTableBody, Spacer } from '../style';

interface FixedSizeBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  // height: number;
  childHeight: number;
  renderAhead?: number;
  rowList: any[];
  renderRow: (row: any, index: number) => React.ReactNode;
  renderEmptyMessage?: () => React.ReactNode;
  tableRef: any;
  headerHeight: number;
  tableHeight: number;
}

export const FixedSizeBody = React.forwardRef<HTMLDivElement, FixedSizeBodyProps>(
  (
    {
      tableHeight,
      childHeight,
      renderAhead = 20,
      rowList,
      renderRow,
      renderEmptyMessage,
      tableRef,
      headerHeight,
      ...props
    },
    ref,
  ) => {
    const [scrollTop, setScrollTop] = React.useState(headerHeight);
    const [height, setHeight] = React.useState(tableHeight - headerHeight);

    React.useEffect(() => {
      setHeight(tableHeight - headerHeight);
    }, [tableHeight, headerHeight]);

    React.useEffect(() => {
      function handleScroll(e: any) {
        requestAnimationFrame(() => {
          setScrollTop(e.target.scrollTop + headerHeight);
        });
      }

      const scrollContainer = tableRef.current;
      setScrollTop((scrollContainer?.scrollTop || 0) + headerHeight);

      scrollContainer?.addEventListener('scroll', handleScroll);
      return () => scrollContainer?.removeEventListener('scroll', handleScroll);
    }, [tableRef, headerHeight]);

    // проверка filter(Boolean), чтобы отсеять невидимые/скрытые групповые строки
    const rowNodes = React.useMemo(
      () => rowList.map((row, index) => renderRow(row, index)).filter(Boolean),
      [rowList, renderRow],
    );
    const itemCount = rowNodes.length;

    let startNode = Math.floor(scrollTop / childHeight);
    startNode = Math.max(0, startNode - renderAhead);

    let visibleNodeCount = Math.ceil(height / childHeight) + 2 * renderAhead;
    visibleNodeCount = Math.min(itemCount - startNode, visibleNodeCount);

    const topPadding = `${startNode * childHeight}px`;
    const bottomPadding = `${(itemCount - startNode - visibleNodeCount) * childHeight}px`;
    const visibleChildren = React.useMemo(
      () => [...rowNodes].slice(startNode, startNode + visibleNodeCount),
      [rowNodes, startNode, visibleNodeCount],
    );

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
      <ScrollTableBody style={{ height }} ref={ref} {...props}>
        {renderEmptyMessage ? renderEmptyMessage() : renderContent()}
      </ScrollTableBody>
    );
  },
);
