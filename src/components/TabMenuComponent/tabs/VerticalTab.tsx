import { forwardRef } from 'react';
import type { MouseEventHandler } from 'react';

import type { VerticalTabProps } from '#src/components/TabMenuComponent/types';
import { BaseTab } from '#src/components/TabMenuComponent/tabs/BaseTab';
import { uid } from '#src/components/common/uid';

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
    const idForTab = onSelectTab ? id : uid();
    const handleTabClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      const tabId = e.currentTarget.dataset.tabid || '';
      onSelectTab?.(tabId);
    };

    return (
      <BaseTab
        {...props}
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
