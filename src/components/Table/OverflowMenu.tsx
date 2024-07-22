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
  bodyRef: React.RefObject<HTMLElement>;
}

export const OverflowMenu: React.FC<OverflowMenuProps> = ({
  tableWidth,
  row,
  dimension,
  verticalScroll,
  scrollbar,
  showRowsActions,
  bodyRef,
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

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: any) => {
      if (!entry.isIntersecting) {
        /** Вызываем закрытие OverflowMenu в момент, когда кнопка, открывающая
         * меню, вышла из области видимости тела таблицы, н-р, в ходе вертикального скролла таблицы */
        closeMenu();
      }
    });
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: bodyRef.current,
      threshold: [0, 1.0],
    });

    if (bodyRef.current && oveflowMenuRef.current) {
      observer.observe(oveflowMenuRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    const overflowMenuBtn = oveflowMenuRef.current?.querySelector(
      `button[aria-haspopup='true'][aria-expanded='true']`,
    ) as HTMLElement;
    overflowMenuBtn?.click();
  };

  return (
    <OverflowMenuWrapper
      ref={oveflowMenuRef}
      data-overflowmenu
      data-opened={showRowsActions}
      $offset={tableWidth - (verticalScroll ? scrollbar : 0)}
      $dimension={dimension}
      $showRowsActions={showRowsActions}
      {...props}
    >
      {row.actionRender ? row.actionRender(row) : row.overflowMenuRender?.(row, handleVisibilityChange)}
    </OverflowMenuWrapper>
  );
};
