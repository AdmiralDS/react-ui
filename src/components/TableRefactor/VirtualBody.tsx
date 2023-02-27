import * as React from 'react';
import styled from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';

import { ScrollTableBody } from './style';

const Spacer = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

interface VirtualBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  height: number;
  childHeight: number;
  renderAhread?: number;
  // rowList: any[];
  itemCount: number;
  // renderRow: (row: any, index: number) => React.ReactNode;
  renderRow: (index: number) => React.ReactNode;
}

export const VirtualBody = React.forwardRef<HTMLDivElement, VirtualBodyProps>(
  ({ height, childHeight, renderAhread = 20, itemCount, renderRow, ...props }, ref) => {
    const [scrollTop, setScrollTop] = React.useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

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

    // const rowNodes = React.useMemo(
    //   () => rowList.map((row, index) => renderRow(row, index)).filter(Boolean),
    //   [rowList, renderRow],
    // );
    // const itemCount = rowNodes.length;

    let visibleNodeCount = Math.ceil(height / childHeight) + 2 * renderAhread;
    visibleNodeCount = Math.min(itemCount - startNode, visibleNodeCount);

    const topPadding = `${startNode * childHeight}px`;
    const bottomPadding = `${(itemCount - startNode - visibleNodeCount) * childHeight}px`;

    // const visibleChildren = React.useMemo(
    //   () => [...rowNodes].slice(startNode, startNode + visibleNodeCount),
    //   [rowNodes, startNode, visibleNodeCount],
    // );
    const visibleChildren = [];
    for (let i = startNode; i < startNode + visibleNodeCount; i++) {
      visibleChildren.push(renderRow(i));
    }

    return (
      <ScrollTableBody style={{ height }} ref={refSetter(ref, scrollContainerRef)} {...props}>
        <Spacer style={{ minHeight: topPadding }} />
        {visibleChildren}
        <Spacer style={{ minHeight: bottomPadding }} />
      </ScrollTableBody>
    );
  },
);
