import styled, { css } from 'styled-components';
import { useRef, useEffect, useState, useMemo } from 'react';
import { TooltipHoc, RowAction, OverflowMenu, MenuItem } from '@admiral-ds/react-ui';
import type { RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const TooltipedRowAction = TooltipHoc(RowAction);

const HtmlTable = styled.table`
  // фиксированный заголовок
  overflow: auto;
  width: 100%;
  display: block;
  margin: 0 auto;

  thead {
    position: sticky;
    top: 0;
  }

  // стили
  white-space: nowrap;
  border-spacing: 1px;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};

  thead {
    top: 1px;
  }

  th {
    ${(p) => p.theme.typography['Subtitle/Subtitle 3']}
    padding: 10px 12px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
  }

  td {
    ${(p) => p.theme.typography['Body/Body 2 Short']}
    padding: 12px;
  }

  th,
  td {
    box-shadow: 0 0 0 1px ${(p) => p.theme.color['Neutral/Neutral 20']};
  }

  // последняя колонка растягивается в ширину при необходимости
  th:last-child {
    width: 100%;
  }

  // 1 колонка фиксирована
  th:first-child,
  td:first-child {
    position: sticky;
    left: 1px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
  }

  tr:hover {
    & [data-overflowmenu] {
      visibility: visible;
    }
  }
  [data-overflowmenu][data-opened='true'] {
    visibility: visible;
  }
`;

export type TableBaseHtmlProps = {
  /** количество столбцов */
  colNumber?: number;

  /** количество строк */
  rowNum?: number;
};

export function TableBaseHtmlOverflowTemplate({ colNumber = 12, rowNum = 20 }: TableBaseHtmlProps) {
  const [table, setTable] = useState<HTMLTableElement | null>(null);
  return (
    <HtmlTable ref={(node) => setTable(node)} style={{ maxHeight: 500, maxWidth: 980 }}>
      <tbody>
        {Array(rowNum)
          .fill(1)
          .map((_, rowIndex) => (
            <tr key={`row_${rowIndex}`}>
              {Array(colNumber)
                .fill(1)
                .map((_, colIndex) => (
                  <td key={`cell_${rowIndex}_${colIndex}`}>{`Cell ${rowIndex}_${colIndex + 1}`}</td>
                ))}
              {/* <RowOverflowMenu
                table={table}
                renderContent={() => (
                  <TooltipedRowAction renderContent={() => `Delete`} onClick={() => console.log('row action happens')}>
                    <DeleteOutline />
                  </TooltipedRowAction>
                )}
              /> */}
              <RowOverflowMenu
                table={table}
                renderContent={(onVisibilityChange) => <Menu onVisibilityChange={onVisibilityChange} />}
              />
            </tr>
          ))}
      </tbody>
      <thead>
        <tr>
          {Array(colNumber)
            .fill(1)
            .map((_, index) => (
              <th key={`header_${index}`}>{`Header ${index + 1}`}</th>
            ))}
        </tr>
      </thead>
    </HtmlTable>
  );
}

const OverflowMenuWrapper = styled.div<{
  $showRowsActions?: boolean;
}>`
  position: sticky;
  right: 0;
  width: 0;
  direction: rtl;

  ${({ $showRowsActions }) =>
    !$showRowsActions &&
    css`
      visibility: hidden;
      &:hover {
        visibility: visible;
      }
    `}
`;

const OverflowMenuContent = styled.div<{
  $showRowsActions?: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 4px 0 3px;
  background-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
`;

interface OverflowMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  table: HTMLElement | null;
  renderContent: (onVisibilityChange?: (isVisible: boolean) => void) => React.ReactNode;
  showRowsActions?: boolean;
}

const RowOverflowMenu: React.FC<OverflowMenuProps> = ({ table, renderContent, showRowsActions = false, ...props }) => {
  const oveflowMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: table,
      threshold: [0, 1.0],
    });

    if (table && oveflowMenuRef.current) {
      observer.observe(oveflowMenuRef.current);
    }

    return () => observer.disconnect();
  }, [table]);

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
      $showRowsActions={showRowsActions}
      {...props}
    >
      <OverflowMenuContent>{renderContent(handleVisibilityChange)}</OverflowMenuContent>
    </OverflowMenuWrapper>
  );
};

const items = [
  {
    id: '1',
    display: 'Вывести опцию 1',
  },
  {
    id: '2',
    display: 'Вывести опцию 2',
  },
  {
    id: '3',
    display: 'Вывести опцию 3',
  },
];

const Menu = ({ onVisibilityChange }: { onVisibilityChange?: (isVisible: boolean) => void }) => {
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="m" {...options} key={item.id} role="option">
          {item.display}
        </MenuItem>
      ),
    }));
  }, []);

  return (
    <OverflowMenu
      onSelectItem={(id) => {
        if (id === '1') alert('1');
        if (id === '2') alert('2');
        if (id === '3') alert('3');
      }}
      onVisibilityChange={onVisibilityChange}
      aria-label="Overflow Menu component"
      dimension="m"
      isVertical
      items={model}
    />
  );
};
