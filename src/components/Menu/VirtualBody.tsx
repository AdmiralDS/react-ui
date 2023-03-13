import * as React from 'react';
import styled from 'styled-components';
import type { ItemProps } from '#src/components/Menu/MenuItem';

const Spacer = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

interface VirtualBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollContainerRef: React.RefObject<HTMLElement>;
  itemHeight: number;
  renderAhead?: number;
  model: Array<ItemProps>;
  activeId: string | undefined;
  selectedId: string | undefined;
  activateItem: (id: string | undefined) => void;
  selectItem: (id: string) => void;
}

export const VirtualBody = React.forwardRef<HTMLDivElement, VirtualBodyProps>(
  (
    {
      scrollContainerRef,
      itemHeight,
      renderAhead = 20,
      model,
      activeId,
      selectedId,
      activateItem,
      selectItem,
      ...props
    },
    ref,
  ) => {
    const [scrollTop, setScrollTop] = React.useState(0);

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

    let startIndex = Math.floor(scrollTop / itemHeight) - renderAhead;
    startIndex = Math.max(0, startIndex);

    // const rowNodes = React.useMemo(
    //   () => rowList.map((row, index) => renderRow(row, index)).filter(Boolean),
    //   [rowList, renderRow],
    // );
    const itemCount = model.length;

    // let visibleNodeCount = Math.ceil(height / childHeight) + 2 * renderAhead;
    const visibleNodeCount = Math.min(itemCount - startIndex, 6);

    const topPadding = `${startIndex * itemHeight}px`;
    const bottomPadding = `${(itemCount - startIndex - visibleNodeCount) * itemHeight}px`;

    const visibleChildren = React.useMemo(() => {
      const visibleItems = [...model].slice(startIndex, startIndex + visibleNodeCount);

      return visibleItems.map((item) =>
        item.render({
          hovered: activeId === item.id,
          selected: selectedId === item.id,
          onHover: () => {
            activateItem(item.disabled ? undefined : item.id);
          },
          onClickItem: () => selectItem(item.id),
          disabled: item.disabled,
          containerRef: scrollContainerRef,
        }),
      );
    }, [model, startIndex, activeId, activateItem, selectedId, selectItem, visibleNodeCount, scrollContainerRef]);

    return (
      <>
        <Spacer style={{ minHeight: topPadding }} />
        {visibleChildren}
        <Spacer style={{ minHeight: bottomPadding }} />
      </>
    );
  },
);
