import { forwardRef } from 'react';

import type { VerticalTabProps } from '#src/components/TabMenuComponent/types';
import { BaseTab } from '#src/components/TabMenuComponent/tabs/BaseTab';

export const VerticalTab = forwardRef<HTMLButtonElement, VerticalTabProps>(
  ({ dimension = 'l', children, disabled, selected, tabId, width = '260px', ...props }: VerticalTabProps, ref) => {
    return (
      <BaseTab
        {...props}
        ref={ref}
        data-tabid={tabId}
        disabled={disabled}
        $dimension={dimension}
        $selected={selected}
        $width={width}
      >
        {children}
      </BaseTab>
    );
  },
);
