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
  onRowClick?: (rowId: RowId | string) => void;
  /** Колбек для двойного клика по строке таблицы */
  onRowDoubleClick?: (rowId: RowId | string) => void;
  /** Ширина таблицы */
  tableWidth: number;
  /** Признак необходимости отображать нижнюю границу */
  underline: boolean;
  /** Признак является ли строка заголовком группы */
  isGroup: boolean;
  /** Id заголовка группы, к которой относится строка */
  groupId: RowId | string | null;
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
  /** Объект с описанием статусов строки */
  rowStatusMap?: TableProps['rowBackgroundColorByStatusMap'];
  /** Ref на тело таблицы */
  bodyRef: React.RefObject<HTMLElement>;
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
  groupId,
  rowWidth,
  verticalScroll,
  scrollbar,
  grey,
  showRowsActions,
  rowStatusMap,
  bodyRef,
  ...props
}: RowWrapperProps) => {
  const rowRef = React.useRef<HTMLDivElement>(null);

  const handleRowClick = (rowId: RowId | string) => {
    onRowClick?.(rowId);
  };

  const handleRowDoubleClick = (rowId: RowId | string) => {
    onRowDoubleClick?.(rowId);
  };

  const handleOverflowMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по меню не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  return (
    <Row
      {...props}
      ref={rowRef}
      onClick={row.disabled ? undefined : () => handleRowClick(row.id)}
      onDoubleClick={row.disabled ? undefined : () => handleRowDoubleClick(row.id)}
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
          bodyRef={bodyRef}
        />
      )}
      {row.expandedRowRender && <ExpandedRow row={row} rowRef={rowRef} />}
    </Row>
  );
};
