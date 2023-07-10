import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { ExpandedRow, ExpandedRowContent, Row, SimpleRow } from '#src/components/Table/style';
import type { Dimension, RowId, TableRow } from '#src/components/Table';
import { OverflowMenu } from '#src/components/Table/OverflowMenu';

export interface RowWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер таблицы */
  dimension: Dimension;
  /** Отображаемая строка */
  row: TableRow;
  /** Колбек для клика по строке таблицы */
  onRowClick?: (rowId: RowId) => void;
  /** Колбек для двойного клика по строке таблицы */
  onRowDoubleClick?: (rowId: RowId) => void;
  /** Ширина таблицы */
  tableWidth: number;
  /** Признак необходимости отображать нижнюю границу */
  underline: boolean;
  /** Признак является ли сторока групповой */
  isGroup: boolean;
  /** Наличие вертикального скролла в таблице */
  verticalScroll: boolean;
  /** Ширина вертикальной полосы прокрутки */
  scrollbar: number;
  /** Ширина строки */
  rowWidth?: number;
  /** Окрашивание строки в серый цвет при greyZebraRows */
  grey?: boolean;
  /** Включение постоянной видимости иконок действий над строками */
  showRowsActions: boolean;
}

export const RowWrapper = ({
  row,
  dimension,
  underline,
  onRowClick,
  onRowDoubleClick,
  children,
  tableWidth,
  isGroup,
  rowWidth,
  verticalScroll,
  scrollbar,
  grey,
  showRowsActions,
  ...props
}: RowWrapperProps) => {
  const rowRef = React.useRef<HTMLDivElement>(null);

  const handleRowClick = (rowId: RowId) => {
    onRowClick?.(rowId);
  };

  const handleRowDoubleClick = (rowId: RowId) => {
    onRowDoubleClick?.(rowId);
  };

  const handleOverflowMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по меню не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  const handleExpandedMouseEnter = () => {
    rowRef.current?.classList.remove('hoverable');
  };
  const handleExpandedMouseLeave = () => {
    rowRef.current?.classList.add('hoverable');
  };

  return (
    <Row
      {...props}
      ref={rowRef}
      onClick={() => handleRowClick(row.id)}
      onDoubleClick={() => handleRowDoubleClick(row.id)}
      underline={underline}
      disabled={!!row.disabled}
      dimension={dimension}
      className={`tr ${row.className || ''} hoverable`}
      isGroup={isGroup}
      rowWidth={rowWidth}
      hover={!!row.hover}
    >
      <SimpleRow
        className="tr-simple"
        showRowsActions={showRowsActions}
        selected={!!row.selected}
        disabled={!!row.disabled}
        status={row.status}
        error={!!row.error}
        success={!!row.success}
        grey={!!grey}
      >
        {children}
      </SimpleRow>
      {(showRowsActions || row.overflowMenuRender || row.actionRender) && (
        <OverflowMenu
          dimension={dimension}
          tableWidth={tableWidth}
          row={row}
          verticalScroll={verticalScroll}
          scrollbar={scrollbar}
          onClick={handleOverflowMenuClick}
          showRowsActions={showRowsActions}
        />
      )}
      {row.expandedRowRender && (
        <ExpandedRow
          opened={row.expanded}
          contentMaxHeight="90vh"
          className="tr-expanded"
          onMouseEnter={handleExpandedMouseEnter}
          onMouseLeave={handleExpandedMouseLeave}
        >
          <ExpandedRowContent>{row.expandedRowRender(row)}</ExpandedRowContent>
        </ExpandedRow>
      )}
    </Row>
  );
};
