import { IconPlacement } from '#src/components/IconPlacement';
import { forwardRef } from 'react';

type Dimension = 'xl' | 'l' | 'm' | 's';

export interface RowActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dimension?: Dimension;
}

export const RowAction = forwardRef<HTMLButtonElement, RowActionProps>(({ dimension = 'm', ...props }, ref) => {
  return (
    <IconPlacement
      ref={ref}
      dimension={dimension === 's' || dimension === 'm' ? 'mBig' : 'lBig'}
      highlightFocus={false}
      {...props}
    >
      {props.children}
    </IconPlacement>
  );
});
