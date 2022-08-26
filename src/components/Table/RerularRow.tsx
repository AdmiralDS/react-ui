import * as React from 'react';
import {
  CheckboxCell,
  ExpandCell,
  ExpandedRow,
  ExpandedRowContent,
  ExpandIcon,
  ExpandIconWrapper,
  Filler,
  Row,
  SimpleRow,
  StickyWrapper,
} from '#src/components/Table/style';
import { Checkbox } from '#src/components/Checkbox';
import { OverflowMenu } from '#src/components/Table/OverflowMenu';
import type { TableRow, RowId, Column, Dimension } from '#src/components/Table/index';
import { CheckboxDimension } from '#src/components/Checkbox/CheckboxDimension';

export interface RegularRowProps {
  /** Размер таблицы */
  dimension: Dimension;
  /** Размер checkbox-а */
  checkboxDimension: CheckboxDimension;
  /** Массив столбцов */
  columns: Array<Column>;
  /** Массив закрепленных столбцов */
  stickyColumns: Array<Column>;
  /** Отображаемая строка */
  row: TableRow;
  underline: boolean;
  /** Отображение столбца с чекбоксами, позволяющими выбрать необходимые строки */
  displayRowSelectionColumn: boolean;
  /** Отображение столбца со стрелками для детализации (раскрытия) строк */
  displayRowExpansionColumn: boolean;
  /** Колбек для клика по строке таблицы */
  onRowClick?: (rowId: RowId) => void;
  /** Колбек для двойного клика по строке таблицы */
  onRowDoubleClick?: (rowId: RowId) => void;
  /** Рендер функция для отрисовки контента ячейки. Входные параметры - объект строки и название столбца */
  /** Колбек на раскрытие/свертывание строки (на нажатие по стрелке слева). */
  onRowExpansionChange?: (rowId: RowId) => void;
  /** Колбек на выбор/снятие выбора со строки (на нажатие по чекбоксу строки). */
  onRowSelectionChange?: (rowId: RowId) => void;
  tableWidth: number;
  renderBodyCell: (row: TableRow, column: Column) => React.ReactNode;
}

export const RegularRow = ({
  row,
  dimension,
  checkboxDimension,
  underline,
  columns,
  stickyColumns,
  displayRowSelectionColumn,
  displayRowExpansionColumn,
  tableWidth,
  onRowClick,
  onRowDoubleClick,
  onRowExpansionChange,
  onRowSelectionChange,
  renderBodyCell,
}: RegularRowProps) => {
  const handleRowClick = (rowId: RowId) => {
    onRowClick?.(rowId);
  };

  const handleRowDoubleClick = (rowId: RowId) => {
    onRowDoubleClick?.(rowId);
  };

  const handleCheckboxClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по чекбоксу не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  return (
    <Row
      onClick={() => handleRowClick(row.id)}
      onDoubleClick={() => handleRowDoubleClick(row.id)}
      key={`row_${row.id}`}
      underline={underline}
      disabled={!!row.disabled}
      dimension={dimension}
      className={`tr ${row.className}`}
    >
      <SimpleRow
        className="tr-simple"
        selected={!!row.selected}
        disabled={!!row.disabled}
        error={!!row.error}
        success={!!row.success}
      >
        <>
          {(displayRowSelectionColumn || displayRowExpansionColumn || stickyColumns.length > 0) && (
            <StickyWrapper>
              {displayRowExpansionColumn && (
                <ExpandCell dimension={dimension}>
                  {row.expandedRowRender && (
                    <ExpandIconWrapper>
                      <ExpandIcon
                        $isOpen={row.expanded}
                        data-disabled={row.disabled ? true : undefined}
                        onClick={() => onRowExpansionChange?.(row.id)}
                        aria-hidden
                      />
                    </ExpandIconWrapper>
                  )}
                </ExpandCell>
              )}
              {displayRowSelectionColumn && (
                <CheckboxCell dimension={dimension} className="td_checkbox">
                  <Checkbox
                    disabled={row.disabled || row.checkboxDisabled}
                    dimension={checkboxDimension}
                    checked={!!row.selected}
                    onChange={() => onRowSelectionChange?.(row.id)}
                    onClick={handleCheckboxClick}
                  />
                </CheckboxCell>
              )}
              {stickyColumns.length > 0 && stickyColumns.map((col) => renderBodyCell(row, col))}
            </StickyWrapper>
          )}
          {columns.map((col) => (col.sticky ? null : renderBodyCell(row, col)))}
          <Filler />
        </>
      </SimpleRow>
      {(row.overflowMenuRender || row.actionRender) && (
        <OverflowMenu dimension={dimension} tableWidth={tableWidth} row={row} />
      )}
      {row.expandedRowRender && (
        <ExpandedRow opened={row.expanded} contentMaxHeight="90vh" className="tr-expanded">
          <ExpandedRowContent>{row.expandedRowRender(row)}</ExpandedRowContent>
        </ExpandedRow>
      )}
    </Row>
  );
};
