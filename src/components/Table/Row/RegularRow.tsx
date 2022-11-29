import * as React from 'react';
import {
  CheckboxCell,
  ExpandCell,
  ExpandIcon,
  ExpandIconPlacement,
  Filler,
  StickyWrapper,
} from '#src/components/Table/style';
import { Checkbox } from '#src/components/Checkbox';
import type { TableRow, RowId, Column, Dimension } from '#src/components/Table';
import type { CheckboxDimension } from '#src/components/Checkbox/CheckboxDimension';

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
  /** Отображение столбца с чекбоксами, позволяющими выбрать необходимые строки */
  displayRowSelectionColumn: boolean;
  /** Отображение столбца со стрелками для детализации (раскрытия) строк */
  displayRowExpansionColumn: boolean;
  /** Рендер функция для отрисовки контента ячейки. Входные параметры - объект строки и название столбца */
  /** Колбек на раскрытие/свертывание строки (на нажатие по стрелке слева). */
  onRowExpansionChange?: (rowId: RowId) => void;
  /** Колбек на выбор/снятие выбора со строки (на нажатие по чекбоксу строки). */
  onRowSelectionChange?: (rowId: RowId) => void;
  /** Функция рендера ячейки */
  renderBodyCell: (row: TableRow, column: Column) => React.ReactNode;
}

export const RegularRow = ({
  row,
  dimension,
  checkboxDimension,
  columns,
  stickyColumns,
  displayRowSelectionColumn,
  displayRowExpansionColumn,
  onRowExpansionChange,
  onRowSelectionChange,
  renderBodyCell,
}: RegularRowProps) => {
  const handleCheckboxClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по чекбоксу не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  return (
    <>
      {(displayRowSelectionColumn || displayRowExpansionColumn || stickyColumns.length > 0) && (
        <StickyWrapper>
          {displayRowExpansionColumn && (
            <ExpandCell dimension={dimension}>
              {row.expandedRowRender && (
                <ExpandIconPlacement
                  style={{ margin: 0, flexShrink: 0 }}
                  dimension={dimension === 's' || dimension === 'm' ? 'mBig' : 'lBig'}
                  disabled={row.disabled ? true : undefined}
                  data-disabled={row.disabled ? true : undefined}
                  highlightFocus={false}
                  onClick={() => onRowExpansionChange?.(row.id)}
                >
                  <ExpandIcon $isOpened={row.expanded} aria-hidden />
                </ExpandIconPlacement>
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
  );
};
