import { forwardRef } from 'react';
import styled from 'styled-components';

import type { TabDimension, TabProps } from '#src/components/TabMenuComponent/types';
import {
  HORIZONTAL_TAB_HEIGHT_L,
  HORIZONTAL_TAB_HEIGHT_M,
  HORIZONTAL_TAB_ICON_SIZE_L,
  HORIZONTAL_TAB_ICON_SIZE_M,
  HORIZONTAL_TAB_PADDING_L,
  HORIZONTAL_TAB_PADDING_M,
} from '#src/components/TabMenuComponent/constants';
import type { BadgeAppearance, BadgeProps } from '@admiral-ds/react-ui';
import { Badge, typography } from '@admiral-ds/react-ui';

export const TabIcon = styled.div<{ $dimension: TabDimension; $disabled?: boolean }>`
  padding: 0;
  margin: 0;
  width: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_ICON_SIZE_M : HORIZONTAL_TAB_ICON_SIZE_L)}px;
  height: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_ICON_SIZE_M : HORIZONTAL_TAB_ICON_SIZE_L)}px;
  & svg {
    display: inline-block;
    flex: 1 0 auto;
    & *[fill^='#'] {
      fill: ${(p) => (p.$disabled ? p.theme.color['Neutral/Neutral 30'] : p.theme.color['Neutral/Neutral 50'])};
    }
    width: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_ICON_SIZE_M : HORIZONTAL_TAB_ICON_SIZE_L)}px;
    height: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_ICON_SIZE_M : HORIZONTAL_TAB_ICON_SIZE_L)}px;
  }
`;

export interface TabBadgeProps extends Omit<BadgeProps, 'dimension'> {
  disabled?: boolean;
  selected?: boolean;
}
const getBadgeAppearance = (selected?: boolean, disabled?: boolean): BadgeAppearance => {
  if (disabled) return 'lightDisable';
  if (selected) return 'info';
  return 'lightInactive';
};
export const TabBadge = ({ disabled = false, selected = false, ...props }: TabBadgeProps) => {
  const appearance = getBadgeAppearance(selected, disabled);
  return <Badge {...props} dimension="s" appearance={appearance} />;
};

export interface HorizontalTabProps extends TabProps {
  dimension?: TabDimension;
}

const Tab = styled.button<{ $selected?: boolean; $dimension: TabDimension }>`
  box-sizing: border-box;
  appearance: none;
  border: none;
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  width: fit-content;
  height: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_HEIGHT_M : HORIZONTAL_TAB_HEIGHT_L)}px;
  padding: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_PADDING_M : HORIZONTAL_TAB_PADDING_L)};
  background: transparent;
  color: ${(p) =>
    p.$selected
      ? `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
  ${({ $dimension }) => ($dimension === 'm' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover:not(:disabled) {
    background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }
  &:active:not(:disabled) {
    background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
  }
  &:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    cursor: not-allowed;
  }
`;

export const HorizontalTab = forwardRef<HTMLButtonElement, HorizontalTabProps>(
  ({ dimension = 'l', children, disabled, selected, ...props }: HorizontalTabProps, ref) => {
    return (
      <Tab ref={ref} disabled={disabled} $dimension={dimension} $selected={selected} {...props}>
        {children}
      </Tab>
    );
  },
);
