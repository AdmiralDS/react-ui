import * as React from 'react';
import styled from 'styled-components';
import { makeData, Person } from './makeData';
import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Table,
  useReactTable,
  getExpandedRowModel,
  ExpandedState,
} from '../react-table';

const StyledTable = styled.table`
  font-family: sans-serif;
  font-size: 14px;
  border: 1px solid lightgray;

  tbody {
    border-bottom: 1px solid lightgray;
  }

  th {
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    padding: 2px 4px;
  }

  tfoot {
    color: gray;
  }

  tfoot th {
    font-weight: normal;
  }
`;

export const ExpansionTemplate = () => {
  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: ({ table }) => (
          <>
            <IndeterminateCheckbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
              }}
            />{' '}
            <button
              {...{
                onClick: table.getToggleAllRowsExpandedHandler(),
              }}
            >
              {table.getIsAllRowsExpanded() ? '👇' : '👉'}
            </button>{' '}
            First Name
          </>
        ),
        cell: ({ row, getValue }) => (
          <div
            style={{
              // Since rows are flattened by default,
              // we can use the row.depth property
              // and paddingLeft to visually indicate the depth
              // of the row
              paddingLeft: `${row.depth * 2}rem`,
            }}
          >
            <div>
              {row.getCanExpand() ? (
                <button
                  {...{
                    onClick: row.getToggleExpandedHandler(),
                    style: { cursor: 'pointer' },
                  }}
                >
                  {row.getIsExpanded() ? '👇' : '👉'}
                </button>
              ) : (
                '🔵'
              )}{' '}
              {getValue<boolean>()}
            </div>
          </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'visits',
        header: () => <span>Visits</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'progress',
        header: 'Profile Progress',
        footer: (props) => props.column.id,
      },
    ],
    [],
  );

  const [data, setData] = React.useState(() => makeData(10, 5, 3));
  const refreshData = () => setData(() => makeData(10, 5, 3));

  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    // filterFromLeafRows: true,
    // maxLeafRowFilterDepth: 0,
    debugTable: true,
  });

  console.log(table.getRowModel());

  return (
    <div className="p-2">
      <div className="h-2" />
      <StyledTable>
        {/* <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead> */}
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getAllCells().map((cell) => {
                  return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
};

function IndeterminateCheckbox({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & React.HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return <input type="checkbox" ref={ref} className={className + ' cursor-pointer'} {...rest} />;
}
