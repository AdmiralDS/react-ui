import * as React from 'react';
import type { TableProps } from '#src/components/Table';

import { OverflowMenuWrapper } from './style';

interface OverflowMenuProps {
  dimension: TableProps['dimension'];
  tableWidth: number;
  row: any;
}

export const OverflowMenu: React.FC<OverflowMenuProps> = ({ tableWidth, row, dimension }) => {
  const oveflowMenuRef = React.useRef<HTMLDivElement>(null);
  const handleMenuOpen = () => {
    if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'true';
  };
  const handleMenuClose = () => {
    if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'false';
  };

  return (
    <OverflowMenuWrapper ref={oveflowMenuRef} data-opened={false} $offset={tableWidth} dimension={dimension}>
      {row.singleActionRedner
        ? row.singleActionRedner(row)
        : row.overflowMenuRender?.(row, handleMenuOpen, handleMenuClose)}
    </OverflowMenuWrapper>
  );
};
