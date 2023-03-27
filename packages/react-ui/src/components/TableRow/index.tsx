import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { Row, SimpleRow, Filler, Cell } from '#src/components/TableRefactor/style';
import { useTableContext } from '#src/components/TableRefactor/TableContext';

import { RegularRow } from './RegularRow';

type RowId = string | number;
type RowData = Record<RowId, React.ReactNode>;

export interface TableRowProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  row: RowData;
  id: RowId;
  className?: string;
  /** Строка в состоянии selected */
  selected?: boolean;
  /** Строка в состоянии disabled  */
  disabled?: boolean;
  /** Чекбокс строки в состоянии disabled */
  checkboxDisabled?: boolean;
  /** Строка в состоянии error */
  error?: boolean;
  /** Строка в состоянии success */
  success?: boolean;
  /** Окраска строки по Hover. Данная окраска должна применяться, если строка кликабельна и ведет к каким-либо действиям */
  hover?: boolean;
  /** Колбек на выбор/снятие выбора со строки (на нажатие по чекбоксу строки).*/
  onRowSelectionChange?: (id: RowId, selected: boolean) => void;
}

export const TableRow = ({
  row,
  id,
  className,
  selected,
  disabled,
  checkboxDisabled,
  error,
  success,
  hover,
  onRowSelectionChange,
  ...props
}: TableRowProps) => {
  const { dimension, displayRowSelectionColumn, columns, hiddenHeaderRef } = useTableContext();

  return (
    <Row {...props} underline disabled={!!disabled} dimension={dimension} className={`tr ${className || ''}`}>
      <SimpleRow
        className="tr-simple"
        selected={!!selected}
        disabled={!!disabled}
        error={!!error}
        success={!!success}
        hover={!!hover}
      >
        {/* {columns.map((col) => renderBodyCell(row, col))} */}
        <RegularRow
          id={id}
          rowData={row}
          selected={selected}
          disabled={disabled}
          checkboxDisabled={checkboxDisabled}
          onRowSelectionChange={onRowSelectionChange}
        />
        <Filler />
      </SimpleRow>
    </Row>
  );
};
