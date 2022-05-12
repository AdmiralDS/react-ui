import * as React from 'react';
import styled from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';

import { ScrollTableBody } from './style';

const Spacer = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

interface VirtualBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  height: number;
  childHeight: number;
  renderAhread?: number;
  rowList: any[];
  renderRow: (row: any, index: number) => void;
}

export const VirtualBody = React.forwardRef<HTMLDivElement, VirtualBodyProps>(
  ({ height, childHeight, renderAhread = 20, rowList, renderRow, ...props }, ref) => {
    const [scrollTop, setScrollTop] = React.useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const itemCount = rowList.length;

    const handleScroll = (e: any) => {
      requestAnimationFrame(() => {
        setScrollTop(e.target.scrollTop);
      });
    };

    React.useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      setScrollTop(scrollContainer?.scrollTop || 0);

      scrollContainer?.addEventListener('scroll', handleScroll);
      return () => scrollContainer?.removeEventListener('scroll', handleScroll);
    }, []);

    let startNode = Math.floor(scrollTop / childHeight) - renderAhread;
    startNode = Math.max(0, startNode);

    let visibleNodeCount = Math.ceil(height / childHeight) + 2 * renderAhread;
    visibleNodeCount = Math.min(itemCount - startNode, visibleNodeCount);

    const topPadding = `${startNode * childHeight}px`;
    const bottomPadding = `${(itemCount - startNode - visibleNodeCount) * childHeight}px`;

    const visibleChildren = React.useMemo(
      () => [...rowList].slice(startNode, startNode + visibleNodeCount).map((row, index) => renderRow(row, index)),
      [startNode, visibleNodeCount, renderRow],
    );

    return (
      <ScrollTableBody style={{ height }} ref={refSetter(ref, scrollContainerRef)} {...props}>
        <Spacer style={{ minHeight: topPadding }} />
        {visibleChildren}
        <Spacer style={{ minHeight: bottomPadding }} />
      </ScrollTableBody>
    );
  },
);
