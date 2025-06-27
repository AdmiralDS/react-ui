import type { CardTabMenuHorizontalProps } from '../types';
import { TabMenuHorizontalAdaptiveFill } from './TabMenuHorizontalAdaptiveFill';
import { TabMenuHorizontalWithOverflowMenu } from './TabMenuHorizontalWithOverflowMenu';

export const CardTabMenuHorizontal = ({
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
}: CardTabMenuHorizontalProps) => {
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
    <TabMenuHorizontalAdaptiveFill {...props} />
  ) : (
    <TabMenuHorizontalWithOverflowMenu {...tabMenuWithOverflowMenuProps} {...props} />
  );
};

CardTabMenuHorizontal.displayName = 'CardTabMenuHorizontal';
