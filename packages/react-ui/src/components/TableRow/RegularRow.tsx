import * as React from 'react';
import {
  CheckboxCell,
  ExpandCell,
  ExpandIcon,
  ExpandIconPlacement,
  Filler,
  StickyWrapper,
  Cell,
} from '#src/components/TableRefactor/style';
import { Checkbox } from '#src/components/Checkbox';
import type { TableRow, RowId, Column, Dimension } from '#src/components/Table';
import { useTableContext } from '#src/components/TableRefactor/TableContext';

type RowData = Record<RowId, React.ReactNode>;
export interface RegularRowProps {
  rowData: RowData;
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
  rowData,
  id,
  disabled = false,
  checkboxDisabled = false,
  selected = false,
  onRowSelectionChange,
}: RegularRowProps) => {
  const { dimension, columns, hiddenHeaderRef, displayRowSelectionColumn } = useTableContext();
  const checkboxDimension = dimension === 's' || dimension === 'm' ? 's' : 'm';

  const handleCheckboxClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по чекбоксу не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  const renderBodyCell = (row: RowData, col: any) => {
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
        {row[col.name]}
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
      {columns.map((col) => renderBodyCell(rowData, col))}
      <Filler />
    </>
  );
};
