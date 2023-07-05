import * as React from 'react';
import type { TableProps } from '#src/components/Table';

import { OverflowMenuWrapper } from './style';

interface OverflowMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  dimension: TableProps['dimension'];
  tableWidth: number;
  row: any;
  verticalScroll: boolean;
  scrollbar: number;
  showRowsActions: boolean;
}

export const OverflowMenu: React.FC<OverflowMenuProps> = ({
  tableWidth,
  row,
  dimension,
  verticalScroll,
  scrollbar,
  showRowsActions,
  ...props
}) => {
  const oveflowMenuRef = React.useRef<HTMLDivElement>(null);

  const handleVisibilityChange = (isVisible: boolean) => {
    if (!showRowsActions) {
      if (isVisible) {
        if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'true';
      } else {
        if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'false';
      }
    }
  };

  return (
    <OverflowMenuWrapper
      ref={oveflowMenuRef}
      data-overflowmenu
      data-opened={showRowsActions}
      $offset={tableWidth - (verticalScroll ? scrollbar : 0)}
      dimension={dimension}
      showRowsActions={showRowsActions}
      {...props}
    >
      {row.actionRender ? row.actionRender(row) : row.overflowMenuRender?.(row, handleVisibilityChange)}
    </OverflowMenuWrapper>
  );
};
