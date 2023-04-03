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

  React.useEffect(() => {
    function isSelected(row: { selected?: boolean }) {
      return row.selected;
    }
    // When invoked on an empty array, every() always returns true. So we need to check rowList.length.
    const allRowsChecked = rows.length > 0 && rows.every(isSelected);
    const someRowsChecked = rows.some(isSelected);

    setHeaderChecked(allRowsChecked || someRowsChecked);
    setHeaderIndeterminate(someRowsChecked && !allRowsChecked);
  }, [rows]);

  const handleHeaderSelectionChange = (selectAll: boolean): void => {
    const updRows = rows.map((row) => ({ ...row, selected: selectAll }));
    setRows(updRows);
  };

  const handleRowSelection = (id: string | number, selected: boolean) => {
    const updRows = rows.map((row) => (row.id === id ? { ...row, selected } : row));
    setRows(updRows);
  };

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  const renderRow = (index: number) => {
    const rowData = rows[index];
    const { id, className, selected, disabled, error, checkboxDisabled, success, hover, ...data } = rowData;
    return (
      <TableRow
        renderCell={(colName: string) => data[colName]}
        id={id}
        className={className}
        selected={selected}
        error={error}
        disabled={disabled}
        checkboxDisabled={checkboxDisabled}
        success={success}
        hover={hover}
        key={`row_${rowData.id}`}
        onRowSelectionChange={handleRowSelection}
      />
    );
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
