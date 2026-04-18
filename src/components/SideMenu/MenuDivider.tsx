import { memo } from 'react';

import { useSideMenuContext } from './contexts';
import type { SideMenuDividerNode } from './types';
import { ItemWrapper } from './style';
import { SideMenuDivider } from './components';

export const MenuDivider = memo(({ label, render }: SideMenuDividerNode) => {
  const { dimension, visibleTooltip, tooltipCssMixin } = useSideMenuContext();

  return (
    <ItemWrapper role="separator">
      {render ? (
        render({ type: 'divider', label, dimension, visibleTooltip, tooltipCssMixin })
      ) : (
        <SideMenuDivider
          label={label}
          dimension={dimension}
          visibleTooltip={visibleTooltip}
          tooltipCssMixin={tooltipCssMixin}
        />
      )}
    </ItemWrapper>
  );
});
