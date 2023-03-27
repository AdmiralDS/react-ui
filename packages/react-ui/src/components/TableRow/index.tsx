import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { Row, SimpleRow, Filler, Cell, CellTextContent } from '#src/components/TableRefactor/style';
import { useTableContext } from '#src/components/TableRefactor/TableContext';

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
  onRowSelectionChange?: (selected: boolean) => void;
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
  const context = useTableContext();

  const renderBodyCell = (row: RowData, col: any) => {
    const headerCellWidth = context.hiddenHeaderRef.current
      ?.querySelector<HTMLElement>(`[data-th-column="${col.name}"]`)
      ?.getBoundingClientRect().width;
    return (
      <Cell
        key={`${id}_${col.name}`}
        dimension={context.dimension}
        style={{ width: headerCellWidth || '100px' }}
        className="td"
        data-column={col.name}
        data-row={id}
      >
        {<CellTextContent cellAlign={col.cellAlign}>{row[col.name]}</CellTextContent>}
      </Cell>
    );
  };

  return (
    <Row {...props} underline disabled={!!disabled} dimension={context.dimension} className={`tr ${className || ''}`}>
      <SimpleRow
        className="tr-simple"
        selected={!!selected}
        disabled={!!disabled}
        error={!!error}
        success={!!success}
        hover={!!hover}
      >
        {context.columns.map((col) => (col.sticky ? null : renderBodyCell(row, col)))}
        <Filler />
      </SimpleRow>
    </Row>
  );
};
