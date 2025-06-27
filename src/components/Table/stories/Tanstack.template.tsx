import * as React from 'react';
import styled, { css } from 'styled-components';
import { typography } from '@admiral-ds/react-ui';
import type { TableProps } from '@admiral-ds/react-ui';

const TableWrapper = styled.div`
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  // фиксированный заголовок
  overflow: auto;
  width: 100%;
  display: block;
  margin: 0 auto;

  thead {
    position: sticky;
    top: 0;
  }

  // стили
  white-space: nowrap;
  border-spacing: 1px;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};

  thead {
    top: 1px;
  }

  th {
    ${(p) => p.theme.typography['Subtitle/Subtitle 3']}
    padding: 10px 12px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
  }

  th,
  td {
    box-shadow: 0 0 0 1px ${(p) => p.theme.color['Neutral/Neutral 20']};
  }

  // последняя колонка растягивается в ширину при необходимости
  th:last-child {
    width: 100%;
  }
`;

// Прорабатывается возможность перехода с разметкой с использованием div на табличные теги
// Для табличных тегов существуют сложности с оперделением конкретной ширины в стилях

export const Cell = styled.td<{ $dimension: TableProps['dimension']; $resizer?: boolean }>`
  box-sizing: border-box;
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '6px 12px 5px 12px';
      case 'l':
        return '12px 16px 11px 16px';
      case 'xl':
        return '16px 16px 15px 16px';
      case 'm':
      default:
        return '10px 12px 9px 12px';
    }
  }};
  overflow: hidden;
  border-right: 1px solid transparent;
`;

const disabledRow = css`
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  cursor: not-allowed;
  & > * {
    pointer-events: none;
  }
`;

const underlineRow = css`
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

export const Row = styled.tr<{
  $dimension: TableProps['dimension'];
  $underline: boolean;
  disabled?: boolean;
}>`
  position: relative;
  min-width: fit-content;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${({ $dimension }) =>
    $dimension === 'l' || $dimension === 'xl' ? typography['Body/Body 1 Short'] : typography['Body/Body 2 Short']}
  ${({ disabled }) => disabled && disabledRow}
  ${({ $underline }) => $underline && underlineRow}
  transition: opacity 0.3s ease;
`;

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
  }),
];

export const TanstackTemplate = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <TableWrapper>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <Row $dimension="m" $underline key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Cell $dimension="m" key={cell.id} style={{ width: '100px' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Cell>
              ))}
            </Row>
          ))}
        </tbody>
      </TableWrapper>
      <div className="h-4" />
      {/* <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button> */}
    </div>
  );
};
