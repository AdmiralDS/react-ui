import type { OverflowMenuProps } from '#src/components/OverflowMenu';
import type { TabDimension } from '#src/components/TabMenuComponent/types';

export interface TabOverflowMenuProps extends Omit<OverflowMenuProps, 'dimension'> {
  dimension?: TabDimension;
  isHidden?: boolean;
}
