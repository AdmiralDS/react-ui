import * as React from 'react';
import styled from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';
import observeRect from '../../common/observeRect';

import { ScrollTableBody } from '../style';

const Spacer = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

interface RowMeasurerProps extends React.HTMLAttributes<HTMLDivElement> {
  onHeightChange: (height: number) => void;
}

const RowMeasurer = ({ children, onHeightChange }: RowMeasurerProps) => {
  const [node, setNode] = React.useState<HTMLDivElement | null>(null);
  const nodeHeight = React.useRef(0);

  React.useEffect(() => {
    if (node) {
      const observer = observeRect(node, (rect) => {
        if (rect) {
          const { height } = rect;
          if (nodeHeight.current !== height) {
            nodeHeight.current = height;
            onHeightChange(height);
          }
        }
      });
      observer.observe();
      return () => {
        observer.unobserve();
      };
    }
  }, [node]);

  return <div ref={(node) => setNode(node)}>{children}</div>;
};

interface VariableSizeBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  height: number;
  childHeight: (index: number) => number;
  renderAhead?: number;
  rowList: any[];
  renderRow: (row: any, index: number) => React.ReactNode;
  renderEmptyMessage?: () => React.ReactNode;
}

export const VariableSizeBody = React.forwardRef<HTMLDivElement, VariableSizeBodyProps>(
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

    const childPositions =
      typeof childHeight === 'number'
        ? []
        : React.useMemo(() => {
            let results = [0];
            for (let i = 1; i < itemCount; i++) {
              results.push(results[i - 1] + childHeight(i - 1));
            }
            return results;
          }, [childHeight, itemCount]);

    const firstVisibleNode = React.useMemo(
      () => findStartNode(scrollTop, childPositions, itemCount),
      [scrollTop, childPositions, itemCount],
    );

    let startNode = firstVisibleNode;
    startNode = Math.max(0, startNode - renderAhead);

    const lastVisibleNode = React.useMemo(
      () => findEndNode(childPositions, firstVisibleNode, itemCount, height),
      [childPositions, firstVisibleNode, itemCount, height],
    );
    const endNode = Math.min(itemCount - 1, lastVisibleNode + renderAhead);

    let visibleNodeCount = endNode - startNode + 1;

    const topPadding = childPositions[startNode];
    const bottomPadding = childPositions[itemCount - startNode - visibleNodeCount];

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

/* inspired by https://dev.to/adamklein/build-your-own-virtual-scroll-part-ii-3j86 */

function findStartNode(scrollTop: number, nodePositions: number[], itemCount: number) {
  /* Так как nodePositions - это отсортированный по возрастанию массив, 
  для поиска startNode можно применить алгоритм двоичного поиска. https://www.geeksforgeeks.org/binary-search/ */
  let startRange = 0;
  let endRange = itemCount - 1;
  while (endRange !== startRange) {
    const middle = Math.floor((endRange - startRange) / 2 + startRange);

    if (nodePositions[middle] <= scrollTop && nodePositions[middle + 1] > scrollTop) {
      return middle;
    }

    if (middle === startRange) {
      // кейс когда start и end range идут друг за другом
      return endRange;
    } else {
      if (nodePositions[middle] <= scrollTop) {
        startRange = middle;
      } else {
        endRange = middle;
      }
    }
  }
  return itemCount;
}

function findEndNode(nodePositions: number[], startNode: number, itemCount: number, height: number) {
  let endNode;
  for (endNode = startNode; endNode < itemCount; endNode++) {
    if (nodePositions[endNode] > nodePositions[startNode] + height) {
      return endNode;
    }
  }
  return endNode;
}
