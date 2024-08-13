import type { OverflowMenuProps } from '#src/components/OverflowMenu';
import type { TabDimension } from '#src/components/TabMenuComponent/types';
import type { IconPlacementProps } from '#src/components/IconPlacement';

interface ElementProps {
  dimension?: TabDimension;
  isHidden?: boolean;
}

export interface TabOverflowMenuProps extends Omit<OverflowMenuProps, 'dimension'>, ElementProps {}

export interface AddTabButtonProps extends Omit<IconPlacementProps, 'dimension'>, Omit<ElementProps, 'isHidden'> {}
