import styled from 'styled-components';

import type { BadgeAppearance, BadgeProps } from '#src/components/Badge';
import { Badge } from '#src/components/Badge';

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

const getCardBadgeAppearance = (selected?: boolean, disabled?: boolean): BadgeAppearance => {
  if (disabled) return 'lightDisable';
  if (selected) return 'grey';
  return 'lightInactive';
};

export const CardTabBadge = ({ disabled = false, selected = false, ...props }: TabBadgeProps) => {
  const appearance = getCardBadgeAppearance(selected, disabled);
  return <Badge {...props} dimension="s" appearance={appearance} />;
};

export const VerticalTabBadge = styled(TabBadge)`
  margin-left: auto;
`;
TabBadge.displayName = 'TabBadge';

const getFilterBadgeAppearance = (selected?: boolean, disabled?: boolean): BadgeAppearance => {
  if (disabled) return 'lightDisable';
  if (selected) return 'white';
  return 'lightInactive';
};

export const FilterTabBadge = ({ disabled = false, selected = false, ...props }: TabBadgeProps) => {
  const appearance = getFilterBadgeAppearance(selected, disabled);
  return <Badge {...props} dimension="s" appearance={appearance} />;
};
