import * as React from 'react';
import type { ComponentStory } from '@storybook/react';
import { Table } from '#src/components/TableRefactor';
import type { Column } from '#src/components/TableRefactor';
import { rowList } from '#src/components/TableRefactor/data';
import { TableRow } from '#src/components/TableRow';

export const Template_Checkbox: ComponentStory<typeof Table> = ({ columnList, ...args }) => {
  const [rows, setRows] = React.useState([...rowList]);
  const [cols, setCols] = React.useState([...columnList]);
  const [headerChecked, setHeaderChecked] = React.useState(false);
  const [headerIndeterminate, setHeaderIndeterminate] = React.useState(false);

  const handleHeaderSelectionChange = (selectAll: boolean): void => {
    const updRows = rows.map((row) => ({ ...row, selected: selectAll }));
    setRows(updRows);
  };

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  const renderRow = (index: number) => {
    const rowData = rows[index];
    return <TableRow row={rowData} key={`row_${rowData.id}`} />;
  };

  return (
    <>
      <Table
        {...args}
        rowCount={rows.length}
        renderRow={renderRow}
        columnList={cols}
        headerCheckboxChecked={headerChecked}
        headerCheckboxIndeterminate={headerIndeterminate}
        onHeaderSelectionChange={handleHeaderSelectionChange}
        onColumnResize={handleResize}
      />
    </>
  );
};
