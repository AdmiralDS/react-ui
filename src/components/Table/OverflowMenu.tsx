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

  // впоследствии будет удалено
  const handleMenuOpen = () => {
    if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'true';
  };
  // впоследствии будет удалено
  const handleMenuClose = () => {
    if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'false';
  };

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
      {row.actionRender
        ? row.actionRender(row)
        : row.overflowMenuRender?.(row, handleMenuOpen, handleMenuClose, handleVisibilityChange)}
    </OverflowMenuWrapper>
  );
};
