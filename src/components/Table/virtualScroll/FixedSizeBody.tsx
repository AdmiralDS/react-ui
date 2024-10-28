import * as React from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';

import { ScrollTableBody, Spacer } from '../style';

interface FixedSizeBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  height: number;
  childHeight: number;
  renderAhead?: number;
  rowList: any[];
  renderRow: (row: any, index: number) => React.ReactNode;
  renderEmptyMessage?: () => React.ReactNode;
}

export const FixedSizeBody = React.forwardRef<HTMLDivElement, FixedSizeBodyProps>(
  ({ height, childHeight, renderAhead = 20, rowList, renderRow, renderEmptyMessage, ...props }, ref) => {
    const [scrollTop, setScrollTop] = React.useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

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
      <ScrollTableBody style={{ height }} ref={refSetter(ref, scrollContainerRef)} {...props}>
        {renderEmptyMessage ? renderEmptyMessage() : renderContent()}
      </ScrollTableBody>
    );
  },
);
