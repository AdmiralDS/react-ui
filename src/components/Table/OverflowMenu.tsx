import * as React from 'react';
import type { TableProps } from '#src/components/Table';
import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';

import { OverflowMenuWrapper } from './style';

interface OverflowMenuProps {
  dimension: TableProps['dimension'];
  tableWidth: number;
  row: any;
  verticalScroll: boolean;
}

export const OverflowMenu: React.FC<OverflowMenuProps> = ({ tableWidth, row, dimension, verticalScroll }) => {
  const oveflowMenuRef = React.useRef<HTMLDivElement>(null);
  const [scrollbar, setScrollbarSize] = React.useState(16);

  React.useEffect(() => {
    const size = getScrollbarSize();
    setScrollbarSize(size);
  }, []);

  const handleMenuOpen = () => {
    if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'true';
  };
  const handleMenuClose = () => {
    if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'false';
  };

  return (
    <OverflowMenuWrapper
      ref={oveflowMenuRef}
      data-opened={false}
      $offset={tableWidth - (verticalScroll ? scrollbar : 0)}
      dimension={dimension}
    >
      {row.actionRender ? row.actionRender(row) : row.overflowMenuRender?.(row, handleMenuOpen, handleMenuClose)}
    </OverflowMenuWrapper>
  );
};
