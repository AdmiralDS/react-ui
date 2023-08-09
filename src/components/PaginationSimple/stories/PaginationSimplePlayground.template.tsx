import * as React from 'react';
import { PaginationSimple, PaginationSimpleItem } from '@admiral-ds/react-ui';
import type { PaginationSimpleProps } from '@admiral-ds/react-ui';

export const PaginationSimplePlaygroundTemplate = ({ currentItem = 1, ...args }: PaginationSimpleProps) => {
  const [current, setCurrent] = React.useState(currentItem);

  React.useEffect(() => {
    setCurrent(currentItem);
  }, [currentItem]);

  return (
    <>
      <PaginationSimple {...args} currentItem={current} onChange={(_, item) => setCurrent(item)}>
        {[...Array(5).keys()].map((item) => {
          return <PaginationSimpleItem aria-label={`Item ${item}`} key={item} />;
        })}
      </PaginationSimple>
    </>
  );
};
