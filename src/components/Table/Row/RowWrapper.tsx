import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { Row, SimpleRow } from '#src/components/Table/style';
import type { Dimension, RowId, TableRow, TableProps } from '#src/components/Table';
import { OverflowMenu } from '#src/components/Table/OverflowMenu';
import { ExpandedRow } from '#src/components/Table/Row/ExpandedRow';

export interface RowWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер таблицы */
  dimension: Dimension;
  /** Отображаемая строка */
  row: TableRow;
  /** Колбек для клика по строке таблицы */
  onRowClick?: (rowId: RowId | string, event: React.MouseEvent<HTMLDivElement>) => void;
  /** Колбек для двойного клика по строке таблицы */
  onRowDoubleClick?: (rowId: RowId | string, event: React.MouseEvent<HTMLDivElement>) => void;
  /** Признак необходимости отображать нижнюю границу */
  underline: boolean;
  /** Признак является ли строка заголовком группы */
  isGroup: boolean;
  /** Id заголовка группы, к которой относится строка */
  groupId: RowId | string | null;
  /** Ширина строки */
  rowWidth?: string;
  /** Окрашивание строки в серый цвет при greyZebraRows */
  grey?: boolean;
  /** Включение постоянной видимости иконок действий над строками */
  showRowsActions: boolean;
  /** Объект с описанием статусов строки */
  rowStatusMap?: TableProps['rowBackgroundColorByStatusMap'];
  /** Ref на элемент таблицы */
  tableRef: React.RefObject<HTMLElement>;
  /** Высота хедера таблицы */
  headerHeight: number;
}

export const RowWrapper = ({
  row,
  dimension,
  underline,
  onRowClick,
  onRowDoubleClick,
  children,
  isGroup,
  groupId,
  rowWidth,
  grey,
  showRowsActions,
  rowStatusMap,
  tableRef,
  headerHeight,
  ...props
}: RowWrapperProps) => {
  const rowRef = React.useRef<HTMLDivElement>(null);

  const handleRowClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onRowClick?.(row.id, event);
  };

  const handleRowDoubleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onRowDoubleClick?.(row.id, event);
  };

  const handleOverflowMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по меню не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  return (
    <Row
      {...props}
      ref={rowRef}
      onClick={row.disabled ? undefined : handleRowClick}
      onDoubleClick={row.disabled ? undefined : handleRowDoubleClick}
      $underline={underline}
      disabled={!!row.disabled}
      $dimension={dimension}
      className={`tr ${row.className || ''} hoverable`}
      $isGroup={isGroup}
      $rowWidth={rowWidth}
      $hover={!!row.hover}
      data-row={row.id}
      data-group={isGroup}
      data-ingroup={groupId}
      data-first-row-in-group={row?.groupRows?.[0] ?? null}
    >
      <SimpleRow
        className="tr-simple"
        $showRowsActions={showRowsActions}
        selected={!!row.selected}
        disabled={!!row.disabled}
        $status={row.status}
        $rowStatusMap={rowStatusMap}
        $grey={!!grey}
      >
        {children}
        {(showRowsActions || row.overflowMenuRender || row.actionRender) && (
          <OverflowMenu
            dimension={dimension}
            row={row}
            onClick={handleOverflowMenuClick}
            showRowsActions={showRowsActions}
            tableRef={tableRef}
            headerHeight={headerHeight}
          />
        )}
      </SimpleRow>
      {row.expandedRowRender && <ExpandedRow row={row} rowRef={rowRef} />}
    </Row>
  );
};
