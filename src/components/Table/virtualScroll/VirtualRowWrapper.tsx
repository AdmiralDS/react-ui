import { memo, useState, useLayoutEffect } from 'react';
import type { ReactNode, MutableRefObject, FC } from 'react';

import type { RowId } from '../types';

type VirtualRowWrapperProps = {
  id: RowId | number;
  children: ReactNode;
  cacheRef: MutableRefObject<Cache>;
  setCache: any;
};

type Cache = {
  [key: RowId | string]: number;
};

export const VirtualRowWrapper: FC<VirtualRowWrapperProps> = memo(({ children, cacheRef, id, setCache }) => {
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  const measurementCache = cacheRef.current;

  useLayoutEffect(() => {
    if (node) {
      const resizeObserver = new ResizeObserver(() => {
        const height = node.getBoundingClientRect().height || 0;

        if (measurementCache[id] === height) {
          return;
        }
        setCache((cache: Cache) => ({ ...cache, [id]: height }));
      });
      resizeObserver.observe(node);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [node]);

  return <div ref={(node) => setNode(node)}>{children}</div>;
});
