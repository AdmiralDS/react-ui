import { forwardRef, useState } from 'react';
import type { MouseEventHandler } from 'react';

import { uid } from '#src/components/common/uid';

import type { FilterTabDimension, FilterTabProps } from '#src/components/TabMenuComponent/types';
import { BaseTab } from '#src/components/TabMenuComponent/tabs/BaseTab';
import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import { FILTER_TAB_SIZE_M, FILTER_TAB_SIZE_S, FILTER_TAB_PADDING_M, FILTER_TAB_PADDING_S } from '../constants';
import { mediumGroupBorderRadius } from '#src/components/themes';

const StyledBaseTab = styled(BaseTab)<{ $dimension: FilterTabDimension }>`
  background-color: ${(p) =>
    p.$selected ? `var(--admiral-color-Opacity_Neutral8, ${p.theme.color['Opacity/Neutral 8']})` : `transparent`};
  border-radius: 4px;
  ${({ $dimension }) => ($dimension === 'm' ? typography['Body/Body 1 Long'] : typography['Body/Body 2 Long'])}
  height: ${({ $dimension }) => ($dimension === 'm' ? FILTER_TAB_SIZE_M : FILTER_TAB_SIZE_S)}px;
  padding: ${({ $dimension }) => ($dimension === 'm' ? FILTER_TAB_PADDING_M : FILTER_TAB_PADDING_S)};

  border-radius: ${(p) => `var(--admiral-border-radius-Medium, ${mediumGroupBorderRadius(p.theme.shape)})`};

  &:focus-visible {
    border-radius: 4px;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
    outline-offset: 2px;
  }
`;

export const FilterTab = forwardRef<HTMLButtonElement, FilterTabProps>(
  ({ dimension = 'm', children, disabled, selected, onSelectTab, tabId, id, ...props }: FilterTabProps, ref) => {
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
      </StyledBaseTab>
    );
  },
);
FilterTab.displayName = 'FilterTab';
