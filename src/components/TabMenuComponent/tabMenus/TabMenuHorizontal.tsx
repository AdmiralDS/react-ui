import type { TabMenuHorizontalProps } from '../types';
import { TabMenuHorizontalAdaptiveFill } from './TabMenuHorizontalAdaptiveFill';
import { TabMenuHorizontalWithOverflowMenu } from './TabMenuHorizontalWithOverflowMenu';

export const TabMenuHorizontal = ({
  adaptive,
  renderDropMenuItem,
  alignSelf,
  menuWidth,
  menuMaxHeight,
  dropContainerCssMixin,
  dropContainerClassName,
  dropContainerStyle,
  isVisible,
  onVisibilityChange,
  active,
  onActivateItem,
  disableSelectedOptionHighlight,
  renderTopPanel,
  renderBottomPanel,
  onForwardCycleApprove,
  onBackwardCycleApprove,
  onClickOutside,
  dimension,
  ...props
}: TabMenuHorizontalProps) => {
  const tabMenuWithOverflowMenuProps = {
    dimension,
    renderDropMenuItem,
    alignSelf,
    menuWidth,
    menuMaxHeight,
    dropContainerCssMixin,
    dropContainerClassName,
    dropContainerStyle,
    isVisible,
    onVisibilityChange,
    active,
    onActivateItem,
    disableSelectedOptionHighlight,
    renderTopPanel,
    renderBottomPanel,
    onForwardCycleApprove,
    onBackwardCycleApprove,
    onClickOutside,
  };
  return adaptive === 'fill' ? (
    <TabMenuHorizontalAdaptiveFill showActiveTabSelector {...props} />
  ) : (
    <TabMenuHorizontalWithOverflowMenu showActiveTabSelector {...tabMenuWithOverflowMenuProps} {...props} />
  );
};

TabMenuHorizontal.displayName = 'TabMenuHorizontal';
