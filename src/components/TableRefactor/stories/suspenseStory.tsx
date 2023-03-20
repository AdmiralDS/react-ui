import * as React from 'react';
import type { ComponentStory } from '@storybook/react';
import { Table } from '#src/components/TableRefactor';
import { rowListSort } from '#src/components/TableRefactor/data';
import { TableRow } from '#src/components/TableRow';

import { fetchData } from '../fakeApi';

export const Template_Suspense: ComponentStory<typeof Table> = ({ columnList, ...args }) => {
  const [cols, setCols] = React.useState([...columnList]);
  const resource = fetchData();

  const renderRow = (index: number) => {
    const rowData = resource.rows.read()[index];
    return <TableRow row={rowData} key={`row_${index}`} />;
  };

  return (
    <React.Suspense fallback={<h1>Loading table...</h1>}>
      <Table {...args} columnList={cols} rowCount={rowListSort.length} renderRow={renderRow} />
    </React.Suspense>
  );
};

export const Template_Suspense2: ComponentStory<typeof Table> = ({ columnList, ...args }) => {
  const [cols, setCols] = React.useState([...columnList]);
  const resource = fetchData();

  const renderRow = (index: number) => {
    return (
      <React.Suspense fallback={<h5>Loading row...</h5>}>
        <TableRow getRow={() => resource.rows.read()[index]} key={`row_${index}`} />
      </React.Suspense>
    );
  };

  return <Table {...args} columnList={cols} rowCount={rowListSort.length} renderRow={renderRow} />;
};
