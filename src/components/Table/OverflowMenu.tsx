import * as React from 'react';

import { OverflowMenuWrapper } from './style';

interface OverflowMenuProps {
  tableWidth: number;
  row: any;
}

export const OverflowMenu: React.FC<OverflowMenuProps> = ({ tableWidth, row }) => {
  const oveflowMenuRef = React.useRef<HTMLDivElement>(null);
  const handleMenuOpen = () => {
    if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'true';
  };
  const handleMenuClose = () => {
    if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'false';
  };

  return (
    <OverflowMenuWrapper ref={oveflowMenuRef} data-opened={false} $offset={tableWidth}>
      {row.overflowMenuRender?.(row, handleMenuOpen, handleMenuClose)}
    </OverflowMenuWrapper>
  );
};
