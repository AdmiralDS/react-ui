import * as React from 'react';
import type { TableProps } from '#src/components/Table';
import styled, { css } from 'styled-components';

const getActionSize = (dimension: TableProps['dimension']) => {
  switch (dimension) {
    case 's':
      return 32;
    case 'l':
      return 48;
    case 'xl':
      return 56;
    case 'm':
    default:
      return 40;
  }
};

const OverflowMenuWrapper = styled.div<{ $showRowsActions?: boolean }>`
  position: sticky;
  right: 0;
  z-index: 5;

  .table[data-shadow-right='true'] & {
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.12);
  }

  ${({ $showRowsActions }) =>
    !$showRowsActions &&
    css`
      width: 0;
      direction: rtl;
      visibility: hidden;
      &:hover {
        visibility: visible;
      }
    `}
`;

const OverflowMenuContent = styled.div<{
  $dimension: TableProps['dimension'];
}>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  width: ${({ $dimension }) => getActionSize($dimension)}px;
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '0px';
      case 'l':
        return '6px 0 5px';
      case 'xl':
        return '10px 0 9px';
      case 'm':
      default:
        return '4px 0 3px';
    }
  }};
  background-color: inherit;
`;

interface OverflowMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  dimension: TableProps['dimension'];
  row: any;
  showRowsActions: boolean;
  tableRef: React.RefObject<HTMLElement>;
  headerHeight: number;
}

export const OverflowMenu: React.FC<OverflowMenuProps> = ({
  row,
  dimension,
  showRowsActions,
  tableRef,
  headerHeight,
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

  React.useEffect(() => {
    function handleIntersection([entry]: IntersectionObserverEntry[]) {
      if (!entry.isIntersecting) {
        /** Вызываем закрытие OverflowMenu в момент, когда кнопка, открывающая
         * меню, вышла из области видимости тела таблицы, н-р, в ходе вертикального скролла таблицы */
        const overflowMenuBtn = oveflowMenuRef.current?.querySelector(
          `button[aria-haspopup='true'][aria-expanded='true']`,
        ) as HTMLElement;
        overflowMenuBtn?.click();
      }
    }
    const observer = new IntersectionObserver(handleIntersection, {
      root: tableRef.current,
      rootMargin: `-${headerHeight || 0}px 0px 0px 0px`,
      threshold: [0, 1.0],
    });

    if (tableRef.current && oveflowMenuRef.current) {
      observer.observe(oveflowMenuRef.current);
    }

    return () => observer.disconnect();
  }, [headerHeight]);

  return (
    <OverflowMenuWrapper
      ref={oveflowMenuRef}
      data-overflowmenu
      data-opened={showRowsActions}
      $showRowsActions={showRowsActions}
      {...props}
    >
      <OverflowMenuContent $dimension={dimension}>
        {row.actionRender ? row.actionRender(row) : row.overflowMenuRender?.(row, handleVisibilityChange)}
      </OverflowMenuContent>
    </OverflowMenuWrapper>
  );
};
