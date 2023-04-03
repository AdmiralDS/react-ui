import * as React from 'react';
import { CheckboxCell, Filler, StickyWrapper, Cell } from '#src/components/TableRefactor/style';
import { Checkbox } from '#src/components/Checkbox';
import type { RowId } from '#src/components/Table';
import { useTableContext } from '#src/components/TableRefactor/TableContext';

export interface RegularRowProps {
  renderCell: (colName: string) => React.ReactNode;
  id: RowId;
  /** Строка в состоянии selected */
  selected?: boolean;
  /** Строка в состоянии disabled  */
  disabled?: boolean;
  /** Чекбокс строки в состоянии disabled */
  checkboxDisabled?: boolean;
  /** Колбек на выбор/снятие выбора со строки (на нажатие по чекбоксу строки).*/
  onRowSelectionChange?: (id: RowId, selected: boolean) => void;
}

export const RegularRow = ({
  id,
  disabled = false,
  checkboxDisabled = false,
  selected = false,
  onRowSelectionChange,
  renderCell,
}: RegularRowProps) => {
  const { dimension, columns, hiddenHeaderRef, displayRowSelectionColumn } = useTableContext();
  const checkboxDimension = dimension === 's' || dimension === 'm' ? 's' : 'm';

  const handleCheckboxClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по чекбоксу не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  const renderBodyCell = (col: any) => {
    const headerCellWidth = hiddenHeaderRef.current
      ?.querySelector<HTMLElement>(`[data-th-column="${col.name}"]`)
      ?.getBoundingClientRect().width;
    return (
      <Cell
        key={`${id}_${col.name}`}
        dimension={dimension}
        style={{ width: headerCellWidth || '100px' }}
        className="td"
        data-column={col.name}
        data-row={id}
        cellAlign={col.cellAlign}
      >
        {/* {<CellTextContent cellAlign={col.cellAlign}>{row[col.name]}</CellTextContent>} */}
        {renderCell(col.name)}
      </Cell>
    );
  };

  return (
    <>
      {displayRowSelectionColumn && (
        <StickyWrapper>
          {displayRowSelectionColumn && (
            <CheckboxCell dimension={dimension} className="td_checkbox">
              <Checkbox
                disabled={disabled || checkboxDisabled}
                dimension={checkboxDimension}
                checked={selected}
                onChange={() => onRowSelectionChange?.(id, !selected)}
                onClick={handleCheckboxClick}
              />
            </CheckboxCell>
          )}
        </StickyWrapper>
      )}
      {columns.map((col) => renderBodyCell(col))}
      <Filler />
    </>
  );
};
