import {
  CheckboxCell,
  ExpandCell,
  ExpandIcon,
  ExpandIconPlacement,
  Filler,
  StickyWrapper,
  DragCell,
  DragIcon,
} from '#src/components/Table/style';
import { CheckboxField } from '#src/components/form';
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
  /** Активен ли drag&drop строк в таблице */
  rowsDraggable?: boolean;
  /** Рендер функция для отрисовки контента ячейки. Входные параметры - объект строки и название столбца */
  /** Колбек на раскрытие/свертывание строки (на нажатие по стрелке слева). */
  onRowExpansionChange?: (rowId: RowId | string) => void;
  /** Колбек на выбор/снятие выбора со строки (на нажатие по чекбоксу строки). */
  onRowSelectionChange?: (rowId: RowId | string) => void;
  /** Функция рендера ячейки */
  renderBodyCell: (row: TableRow, column: Column & { index: number }) => React.ReactNode;
}

export const RegularRow = ({
  row,
  dimension,
  checkboxDimension,
  columns,
  stickyColumns,
  displayRowSelectionColumn,
  displayRowExpansionColumn,
  rowsDraggable,
  onRowExpansionChange,
  onRowSelectionChange,
  renderBodyCell,
}: RegularRowProps) => {
  const iconSize = dimension === 's' || dimension === 'm' ? 20 : 24;

  const handleCheckboxClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по чекбоксу не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  const handleExpandIconClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по иконке стрелки не должен вызывать событие клика по строке
    e.stopPropagation();
    onRowExpansionChange?.(row.id);
  };

  return (
    <>
      {(displayRowSelectionColumn || displayRowExpansionColumn || stickyColumns.length > 0 || rowsDraggable) && (
        <StickyWrapper>
          {rowsDraggable && (
            <DragCell $dimension={dimension}>
              <DragIcon data-dragicon width={iconSize} height={iconSize} $disabled={row.disabled} />
            </DragCell>
          )}
          {displayRowExpansionColumn && (
            <ExpandCell $dimension={dimension} className="td_expand" data-column="expand" data-row={row.id}>
              {row.expandedRowRender && (
                <ExpandIconPlacement
                  style={{ margin: 0, flexShrink: 0 }}
                  dimension={dimension === 's' || dimension === 'm' ? 'mBig' : 'lBig'}
                  disabled={row.disabled ? true : undefined}
                  highlightFocus={false}
                  onClick={handleExpandIconClick}
                >
                  <ExpandIcon $isOpened={row.expanded} aria-hidden />
                </ExpandIconPlacement>
              )}
            </ExpandCell>
          )}
          {displayRowSelectionColumn && (
            <CheckboxCell $dimension={dimension} className="td_checkbox" data-column="checkbox" data-row={row.id}>
              <CheckboxField
                disabled={row.disabled || row.checkboxDisabled}
                dimension={checkboxDimension}
                checked={!!row.selected}
                onChange={() => onRowSelectionChange?.(row.id)}
                onClick={handleCheckboxClick}
              />
            </CheckboxCell>
          )}
          {stickyColumns.length > 0 && stickyColumns.map((col, index) => renderBodyCell(row, { ...col, index }))}
        </StickyWrapper>
      )}
      {columns.map((col, index) => (col.sticky ? null : renderBodyCell(row, { ...col, index })))}
      <Filler />
    </>
  );
};
