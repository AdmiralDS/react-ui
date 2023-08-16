import * as React from 'react';

import type { AvatarActivityProps } from '#src/components/AvatarActivity';
import type { AvatarBaseGroupProps } from '#src/components/AvatarBaseGroup';
import type { AvatarBaseProps } from '#src/components/AvatarBase';
import { AvatarBaseGroup } from '#src/components/AvatarBaseGroup';

export interface AvatarActivityGroupProps extends Omit<AvatarBaseGroupProps, 'withActivityRing' | 'items'> {
  items: Array<AvatarActivityProps>;
}

export const AvatarActivityGroup: React.FC<AvatarActivityGroupProps> = ({ items, ...props }) => {
  const itemsBase: Array<AvatarBaseProps> = items.map((item) => ({
    ...item,
    withActivityRing: true,
  }));
  return <AvatarBaseGroup items={itemsBase} withActivityRing {...props} />;
};

AvatarActivityGroup.displayName = 'AvatarGroup';
