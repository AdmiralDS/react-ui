import * as React from 'react';
import styled from 'styled-components';
import {
  ColumnDef,
  Table,
  flexRender,
  getCoreRowModel,
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

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  status: 'relationship' | 'complicated' | 'single';
  subRows?: Person[];
};

const tableData: Person[] = [
  {
    firstName: 'Ray',
    lastName: 'Tromp',
    age: 3,
    status: 'single',
    subRows: [
      {
        firstName: 'Uriah',
        lastName: 'Schulist',
        age: 10,
        status: 'relationship',
      },
      {
        firstName: 'Coty',
        lastName: 'Corwin',
        age: 8,
        status: 'complicated',
      },
    ],
  },
  {
    firstName: 'Waino',
    lastName: 'Langosh',
    age: 29,
    status: 'single',
  },
  {
    firstName: 'Winona',
    lastName: 'Runolfsson',
    age: 20,
    status: 'single',
    subRows: [
      {
        firstName: 'Shaun',
        lastName: 'Koepp',
        age: 34,
        status: 'single',
      },
    ],
  },
  {
    firstName: 'Marques',
    lastName: 'Borer',
    age: 2,
    status: 'complicated',
    subRows: [
      {
        firstName: 'Tony',
        lastName: 'Reichel',
        age: 11,
        status: 'complicated',
      },
      {
        firstName: 'Jarrod',
        lastName: 'Keebler',
        age: 22,
        status: 'complicated',
      },
    ],
  },
  {
    firstName: 'Harmony',
    lastName: 'DuBuque',
    age: 14,
    status: 'single',
    subRows: [
      {
        firstName: 'Sterling',
        lastName: 'Trantow',
        age: 22,
        status: 'relationship',
      },
    ],
  },
];

const tableColumns: Array<ColumnDef<Person>> = [
  {
    accessorKey: 'firstName',
    // Аналог нашего renderCell
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
          )}
          {getValue<boolean>()}
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'lastName',
  },
  {
    accessorKey: 'age',
  },
  {
    accessorKey: 'status',
  },
];

export const ExpansionTemplate = () => {
  const [columns, setColumns] = React.useState(tableColumns);
  const [data, setData] = React.useState(tableData);

  // Можно сделать controlled expansion state, но это необязательно
  // const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const table: Table<Person> = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // задавать список подстрок в объекте data можно разными способами главное задать функцию getSubRows
    getSubRows: (row) => row.subRows,
    getExpandedRowModel: getExpandedRowModel(),
    // state: {
    //   expanded,
    // },
    // onExpandedChange: setExpanded,
  });

  return (
    <StyledTable>
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
  );
};
