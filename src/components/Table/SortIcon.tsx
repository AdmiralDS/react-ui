import { useRef, useEffect } from 'react';
import type { Column } from '#src/components/Table';
import { SortIconWrapper, SortIcon as Icon, SortOrder } from './style';

type SortProps = {
  sort: Column['sort'];
  sortOrder: Column['sortOrder'];
  multipleSort?: boolean;
  iconSize: number;
};

export const SortIcon = ({ sort, sortOrder, multipleSort, iconSize }: SortProps) => {
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sortIcon = sortRef.current;
    function handleMove(e: MouseEvent | TouchEvent) {
      // block column drag when mouse moves above sort icon
      e.stopPropagation();
    }

    if (sortIcon) {
      // use native event listeners instead of react handlers due to event delegation work in react 16
      sortIcon.addEventListener('mousemove', handleMove);
      sortIcon.addEventListener('touchmove', handleMove);

      return () => {
        sortIcon.removeEventListener('mousemove', handleMove);
        sortIcon.removeEventListener('touchmove', handleMove);
      };
    }
  }, []);

  return (
    <SortIconWrapper ref={sortRef}>
      <Icon $sort={sort || 'initial'} width={iconSize} height={iconSize} />
      {multipleSort && sort && sortOrder && <SortOrder>{sortOrder}</SortOrder>}
    </SortIconWrapper>
  );
};
