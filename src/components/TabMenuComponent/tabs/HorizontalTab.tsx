import { forwardRef, useState } from 'react';
import type { MouseEventHandler } from 'react';

import { uid } from '#src/components/common/uid';

import type { HorizontalTabProps } from '#src/components/TabMenuComponent/types';
import { BaseTab } from '#src/components/TabMenuComponent/tabs/BaseTab';
import styled from 'styled-components';

const HorizontalTabStyled = styled(BaseTab)<{ $adaptive: boolean }>((p) =>
  p.$adaptive
    ? `
  display: flex;
  justify-content: center;
  width: 100%
`
    : `width: fit-content`,
);

export const HorizontalTab = forwardRef<HTMLButtonElement, HorizontalTabProps>(
  (
    { dimension = 'l', adaptive, children, disabled, selected, onSelectTab, tabId, id, ...props }: HorizontalTabProps,
    ref,
  ) => {
    const [defaultId] = useState(uid());
    const idForTab = onSelectTab && id ? id : defaultId;

    const handleTabClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      const tabId = e.currentTarget.dataset.tabid || '';
      e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      onSelectTab?.(tabId);
    };

    return (
      <HorizontalTabStyled
        {...props}
        $adaptive={adaptive === 'fill'}
        role="tab"
        type="button"
        id={idForTab}
        ref={ref}
        data-tabid={tabId}
        disabled={disabled}
        $dimension={dimension}
        $selected={selected}
        onClick={handleTabClick}
      >
        {children}
      </HorizontalTabStyled>
    );
  },
);
HorizontalTab.displayName = 'HorizontalTab';
