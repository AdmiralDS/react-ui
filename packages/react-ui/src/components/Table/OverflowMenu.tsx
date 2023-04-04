import * as React from 'react';
import type { TableProps } from '#src/components/Table';

import { OverflowMenuWrapper } from './style';

interface OverflowMenuProps {
  dimension: TableProps['dimension'];
  tableWidth: number;
  row: any;
  verticalScroll: boolean;
  scrollbar: number;
}

export const OverflowMenu: React.FC<OverflowMenuProps> = ({
  tableWidth,
  row,
  dimension,
  verticalScroll,
  scrollbar,
}) => {
  const oveflowMenuRef = React.useRef<HTMLDivElement>(null);

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'true';
    } else {
      if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'false';
    }
  };

  return (
    <OverflowMenuWrapper
      ref={oveflowMenuRef}
      data-overflowmenu
      data-opened={false}
      $offset={tableWidth - (verticalScroll ? scrollbar : 0)}
      dimension={dimension}
    >
      {row.actionRender ? row.actionRender(row) : row.overflowMenuRender?.(row, handleVisibilityChange)}
    </OverflowMenuWrapper>
  );
};
