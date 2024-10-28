import * as React from 'react';
import { PaginationTwo } from '@admiral-ds/react-ui';
import type { PaginationTwoProps } from '@admiral-ds/react-ui';

export const PaginationTwoPlaygroundTemplate = ({ page, count, ...args }: PaginationTwoProps) => {
  const [page1, setPage1] = React.useState(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (_: any, page: number) => setPage1(page);
  return (
    <>
      <PaginationTwo {...args} count={count || 7} page={page || page1} onChange={handleChange} />
    </>
  );
};
