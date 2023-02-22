import * as React from 'react';
import styled from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';

import { ScrollTableBody } from './style';

const Spacer = styled.div`
  display: flex;
  flex: 0 0 auto;
  position: relative;
`;

interface VirtualBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  height: number;
  childHeight: number;
  renderRow: (index: number) => React.ReactNode;
  onItemsRendered?: (params: { visibleStartIndex: number; visibleStopIndex: number }) => void;
  itemCount: number;
  threshold?: number;
}

export const VirtualBody = React.forwardRef<HTMLDivElement, VirtualBodyProps>(
  ({ height, childHeight, threshold = 15, renderRow, onItemsRendered, itemCount, ...props }, ref) => {
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

    let startNode = Math.floor(scrollTop / childHeight) - threshold;
    startNode = Math.max(0, startNode);

    let visibleNodeCount = Math.ceil(height / childHeight) + 2 * threshold;
    visibleNodeCount = Math.min(itemCount - startNode, visibleNodeCount);

    const topPadding = `${startNode * childHeight}px`;
    const bottomPadding = `${(itemCount - startNode - visibleNodeCount) * childHeight}px`;

    React.useEffect(() => {
      onItemsRendered?.({ visibleStartIndex: startNode, visibleStopIndex: startNode + visibleNodeCount });
    }, [onItemsRendered, startNode, visibleNodeCount]);

    const nodes = [];
    for (let i = startNode; i < startNode + visibleNodeCount + 1; i++) {
      nodes.push(renderRow(i));
    }

    return (
      <ScrollTableBody style={{ height }} ref={refSetter(ref, scrollContainerRef)} {...props}>
        <Spacer style={{ minHeight: topPadding }} />
        {/* {visibleChildren} */}
        {nodes}
        <Spacer style={{ minHeight: bottomPadding }} />
      </ScrollTableBody>
    );
  },
);
