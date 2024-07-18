import { forwardRef } from 'react';
import type { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';

import { uid } from '#src/components/common/uid';

import type { HorizontalTabProps } from '#src/components/TabMenuComponent/types';
import { BaseTab } from '#src/components/TabMenuComponent/tabs/BaseTab';

const selectedTabBorderMixin = css`
  border-color: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  border-bottom-color: transparent;
`;
const selectedTabBorderMixin2 = css`
  box-shadow:
    inset -1px 0 0 0 var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']}),
    inset 1px 0 0 0 var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']}),
    inset 0 1px 0 0 var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});

  &:hover:not(:disabled) {
    background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  }
`;
const StyledBaseTab = styled(BaseTab)`
  background-color: ${(p) =>
    p.$selected ? `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})` : `transparent`};
  border-radius: 4px 4px 0 0;
  ${(p) => p.$selected && selectedTabBorderMixin2}
`;

export const CardTab = forwardRef<HTMLButtonElement, HorizontalTabProps>(
  ({ dimension = 'l', children, disabled, selected, onSelectTab, tabId, id, ...props }: HorizontalTabProps, ref) => {
    const idForTab = onSelectTab ? id : uid();
    const handleTabClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      const tabId = e.currentTarget.dataset.tabid || '';
      onSelectTab?.(tabId);
    };

    return (
      <StyledBaseTab
        {...props}
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
      </StyledBaseTab>
    );
  },
);
CardTab.displayName = 'CardTab';
