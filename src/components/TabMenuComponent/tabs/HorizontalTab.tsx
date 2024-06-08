import { forwardRef } from 'react';

import type { HorizontalTabProps } from '#src/components/TabMenuComponent/types';
import { BaseTab } from '#src/components/TabMenuComponent/tabs/BaseTab';

export const HorizontalTab = forwardRef<HTMLButtonElement, HorizontalTabProps>(
  ({ dimension = 'l', children, disabled, selected, ...props }: HorizontalTabProps, ref) => {
    return (
      <BaseTab
        {...props}
        ref={ref}
        disabled={disabled}
        $dimension={dimension}
        $selected={selected}
        $width="fit-content"
      >
        {children}
      </BaseTab>
    );
  },
);
