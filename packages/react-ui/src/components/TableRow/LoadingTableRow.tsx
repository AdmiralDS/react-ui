import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { Row, SimpleRow, Filler, Cell } from '#src/components/TableRefactor/style';
import { useTableContext } from '#src/components/TableRefactor/TableContext';
import { PseudoText } from '../skeleton/PseudoText';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  id: string | number;
}

export const LoadingTableRow = React.forwardRef<HTMLDivElement, Props>(({ className, id, ...props }, ref) => {
  const { dimension, columns, hiddenHeaderRef } = useTableContext();

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
      >
        <PseudoText dimension="m" appearance="secondary" />
      </Cell>
    );
  };

  return (
    <Row {...props} ref={ref} underline dimension={dimension} className={`tr ${className || ''}`}>
      <SimpleRow className="tr-simple">
        {columns.map((col) => renderBodyCell(col))}
        <Filler />
      </SimpleRow>
    </Row>
  );
});
