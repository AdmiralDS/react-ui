import { forwardRef, useState } from 'react';
import type { MouseEventHandler } from 'react';

import { uid } from '#src/components/common/uid';

import type { HorizontalTabProps } from '#src/components/TabMenuComponent/types';
import { BaseTab } from '#src/components/TabMenuComponent/tabs/BaseTab';

export const HorizontalTab = forwardRef<HTMLButtonElement, HorizontalTabProps>(
  ({ dimension = 'l', children, disabled, selected, onSelectTab, tabId, id, ...props }: HorizontalTabProps, ref) => {
    const [defaultId] = useState(uid());
    const idForTab = onSelectTab && id ? id : defaultId;

    const handleTabClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      const tabId = e.currentTarget.dataset.tabid || '';
      e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      onSelectTab?.(tabId);
    };

    return (
      <BaseTab
        {...props}
        role="tab"
        type="button"
        id={idForTab}
        ref={ref}
        data-tabid={tabId}
        disabled={disabled}
        $dimension={dimension}
        $selected={selected}
        $width="fit-content"
        onClick={handleTabClick}
      >
        {children}
      </BaseTab>
    );
  },
);
HorizontalTab.displayName = 'HorizontalTab';
