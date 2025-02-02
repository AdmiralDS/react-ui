import { forwardRef, useState } from 'react';
import type { MouseEventHandler } from 'react';

import { uid } from '#src/components/common/uid';

import type { VerticalTabProps } from '#src/components/TabMenuComponent/types';
import { BaseTab } from '#src/components/TabMenuComponent/tabs/BaseTab';

export const VerticalTab = forwardRef<HTMLButtonElement, VerticalTabProps>(
  (
    {
      dimension = 'l',
      children,
      disabled,
      selected,
      onSelectTab,
      tabId,
      width = '260px',
      id,
      ...props
    }: VerticalTabProps,
    ref,
  ) => {
    const [defaultId] = useState(uid());
    const idForTab = id ?? defaultId;
    const handleTabClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      const tabId = e.currentTarget.dataset.tabid || '';
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
        $width={width}
        onClick={handleTabClick}
      >
        {children}
      </BaseTab>
    );
  },
);
VerticalTab.displayName = 'VerticalTab';
