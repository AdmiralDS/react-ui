import styled from 'styled-components';

import type { BadgeAppearance, BadgeProps } from '#src/components/Badge';
import { Badge } from '#src/components/Badge';
import type { TabAppearance } from '../types';

type Variant = 'tabPrimary' | 'tabSecondary' | 'cardTab' | 'filterTab';

export interface TabBadgeProps extends Omit<BadgeProps, 'dimension'> {
  disabled?: boolean;
  selected?: boolean;
}

export interface TabBadgeAppearanceProps extends TabBadgeProps {
  tabAppearance?: TabAppearance;
}

const getBadgeAppearance = (variant: Variant, selected?: boolean, disabled?: boolean): BadgeAppearance => {
  if (disabled) return 'lightDisable';
  if (selected) {
    switch (variant) {
      case 'tabPrimary':
        return 'info';
      case 'tabSecondary':
        return 'grey';
      case 'cardTab':
        return 'grey';
      case 'filterTab':
        return 'white';
      default:
        return 'info';
    }
  }
  return 'lightInactive';
};

export const TabBadge = ({
  disabled = false,
  selected = false,
  tabAppearance = 'primary',
  ...props
}: TabBadgeAppearanceProps) => {
  const appearance = getBadgeAppearance(
    tabAppearance === 'secondary' ? 'tabSecondary' : 'tabPrimary',
    selected,
    disabled,
  );
  return <Badge {...props} dimension="s" appearance={appearance} />;
};

export const CardTabBadge = ({ disabled = false, selected = false, ...props }: TabBadgeProps) => {
  const appearance = getBadgeAppearance('cardTab', selected, disabled);
  return <Badge {...props} dimension="s" appearance={appearance} />;
};

export const VerticalTabBadge = styled(TabBadge)`
  margin-left: auto;
`;
TabBadge.displayName = 'TabBadge';

export const FilterTabBadge = ({ disabled = false, selected = false, ...props }: TabBadgeProps) => {
  const appearance = getBadgeAppearance('filterTab', selected, disabled);
  return <Badge {...props} dimension="s" appearance={appearance} />;
};
