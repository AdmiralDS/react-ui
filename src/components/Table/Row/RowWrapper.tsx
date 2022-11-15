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
  /** Признак входит ли строка в группу */
  rowInGroup: boolean;
  /** Наличие вертикального скролла в таблице */
  verticalScroll: boolean;
  /** Ширина строки */
  rowWidth?: number;
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
  rowInGroup,
  rowWidth,
  verticalScroll,
  ...props
}: RowWrapperProps) => {
  const handleRowClick = (rowId: RowId) => {
    onRowClick?.(rowId);
  };

  const handleRowDoubleClick = (rowId: RowId) => {
    onRowDoubleClick?.(rowId);
  };

  return (
    <Row
      {...props}
      onClick={() => handleRowClick(row.id)}
      onDoubleClick={() => handleRowDoubleClick(row.id)}
      underline={underline}
      disabled={!!row.disabled}
      dimension={dimension}
      className={`tr ${row.className || ''}`}
      isGroup={isGroup}
      rowWidth={rowWidth}
      data-group={isGroup}
      data-ingroup={rowInGroup}
    >
      <SimpleRow
        className="tr-simple"
        selected={!!row.selected}
        disabled={!!row.disabled}
        error={!!row.error}
        success={!!row.success}
      >
        {children}
      </SimpleRow>
      {(row.overflowMenuRender || row.actionRender) && (
        <OverflowMenu dimension={dimension} tableWidth={tableWidth} row={row} verticalScroll={verticalScroll} />
      )}
      {row.expandedRowRender && (
        <ExpandedRow opened={row.expanded} contentMaxHeight="90vh" className="tr-expanded">
          <ExpandedRowContent>{row.expandedRowRender(row)}</ExpandedRowContent>
        </ExpandedRow>
      )}
    </Row>
  );
};
