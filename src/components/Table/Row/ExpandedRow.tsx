import * as React from 'react';

import { Transition } from '../Transition';
import { ExpandedRow, ExpandedRowContent } from '#src/components/Table/style';

export const ExpandedRowComp = ({ row, rowRef }: any) => {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  const expandedContentRef = React.useRef<HTMLDivElement>(null);

  const handleExpandedMouseEnter = () => {
    rowRef.current?.classList.remove('hoverable');
  };
  const handleExpandedMouseLeave = () => {
    rowRef.current?.classList.add('hoverable');
  };

  return (
    <Transition
      in={!!row.expanded}
      timeout={250}
      onEnter={() => {
        console.log('enter');
        // if (nodeRef.current) nodeRef.current.style.height = '0px';
      }}
      onEntered={() => {
        console.log('entered');
        // if (nodeRef.current) nodeRef.current.style.height = 'auto';
      }}
      onEntering={() => {
        console.log('entering');
        const height = (expandedContentRef.current?.clientHeight || 0) + 'px';
        // if (nodeRef.current) nodeRef.current.style.height = height;
      }}
      onExit={() => {
        console.log('exit');
        const height = (expandedContentRef.current?.clientHeight || 0) + 'px';
        // if (nodeRef.current) nodeRef.current.style.height = height;
      }}
      onExited={() => {
        console.log('exited');
      }}
      onExiting={() => {
        console.log('exiting');
        // if (nodeRef.current) nodeRef.current.style.height = '0px';
      }}
    >
      <ExpandedRow
        ref={nodeRef}
        opened={row.expanded}
        // contentMaxHeight="90vh"
        // contentMaxHeight={row.expanded ? expandedContentHeight : 0}
        className="tr-expanded"
        onMouseEnter={handleExpandedMouseEnter}
        onMouseLeave={handleExpandedMouseLeave}
      >
        <ExpandedRowContent ref={expandedContentRef}>{row.expandedRowRender(row)}</ExpandedRowContent>
      </ExpandedRow>
    </Transition>
  );
};
