import { forwardRef, useEffect, useMemo, useState } from 'react';
import { Body, Spacer } from '../style';

interface FixedSizeBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  childHeight: number;
  renderAhead?: number;
  rowList: unknown[];
  renderRow: (row: unknown, index: number) => React.ReactNode;
  renderEmptyMessage?: () => React.ReactNode;
  tableRef: React.RefObject<HTMLElement>;
  headerHeight: number;
  tableHeight: number;
}

export const FixedSizeBody = forwardRef<HTMLDivElement, FixedSizeBodyProps>(
  (
    {
      childHeight,
      renderAhead = 20,
      rowList,
      renderRow,
      renderEmptyMessage,
      tableRef,
      tableHeight,
      headerHeight,
      ...props
    },
    ref,
  ) => {
    const [scrollTop, setScrollTop] = useState(0);
    const [height, setHeight] = useState(tableHeight - headerHeight);

    useEffect(() => {
      setHeight(tableHeight - headerHeight);
    }, [tableHeight, headerHeight]);

    useEffect(() => {
      function handleScroll(event: Event) {
        const target = event.target as HTMLElement | null;
        if (!target) return;
        requestAnimationFrame(() => {
          setScrollTop(target.scrollTop);
        });
      }

      const scrollContainer = tableRef.current;
      setScrollTop(scrollContainer?.scrollTop || 0);

      scrollContainer?.addEventListener('scroll', handleScroll);
      return () => scrollContainer?.removeEventListener('scroll', handleScroll);
    }, [tableRef]);

    // проверка filter(Boolean), чтобы отсеять невидимые/скрытые групповые строки
    const rowNodes = useMemo(
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
    const visibleChildren = useMemo(
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
      <Body style={{ height }} ref={ref} {...props}>
        {renderEmptyMessage ? renderEmptyMessage() : renderContent()}
      </Body>
    );
  },
);
