import { forwardRef, useState } from 'react';
import type { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';

import { uid } from '#src/components/common/uid';

import type { HorizontalTabProps } from '#src/components/TabMenuComponent/types';
import { BaseTab } from '#src/components/TabMenuComponent/tabs/BaseTab';

const selectedTabBorderMixin = css`
  &:hover:not(:disabled) {
    background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  }
`;

const showBorderTabMixin = css`
  box-shadow:
    inset -1px 0 0 0 var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']}),
    inset 1px 0 0 0 var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']}),
    inset 0 1px 0 0 var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

const adaptiveFillTabMixin = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledBaseTab = styled(BaseTab)<{ $hideBorder?: boolean; $adaptive?: boolean }>`
  background-color: ${(p) =>
    p.$selected ? `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})` : `transparent`};
  border-radius: 4px 4px 0 0;
  ${(p) => p.$selected && selectedTabBorderMixin}
  ${(p) => p.$selected && !p.$hideBorder && showBorderTabMixin}
  ${(p) => (p.$adaptive ? adaptiveFillTabMixin : 'width: fit-content')}
`;

export const CardTab = forwardRef<HTMLButtonElement, HorizontalTabProps>(
  (
    {
      dimension = 'l',
      adaptive,
      hideBorder,
      children,
      disabled,
      selected,
      onSelectTab,
      tabId,
      id,
      ...props
    }: HorizontalTabProps,
    ref,
  ) => {
    const [defaultId] = useState(uid());
    const idForTab = onSelectTab && id ? id : defaultId;

    const handleTabClick: MouseEventHandler<HTMLButtonElement> = (e) => {
      const tabId = e.currentTarget.dataset.tabid || '';
      onSelectTab?.(tabId);
    };

    return (
      <StyledBaseTab
        {...props}
        role="tab"
        $adaptive={adaptive === 'fill'}
        type="button"
        id={idForTab}
        ref={ref}
        data-tabid={tabId}
        disabled={disabled}
        $dimension={dimension}
        $selected={selected}
        $hideBorder={hideBorder}
        onClick={handleTabClick}
      >
        {children}
      </StyledBaseTab>
    );
  },
);
CardTab.displayName = 'CardTab';
