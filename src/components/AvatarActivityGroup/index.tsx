import type { FC } from 'react';

import type { AvatarActivityProps } from '#src/components/AvatarActivity';
import type { AvatarBaseProps } from '#src/components/AvatarBase';
import type { AvatarBaseGroupProps } from '#src/components/AvatarBaseGroup';
import { AvatarBaseGroup } from '#src/components/AvatarBaseGroup';

export interface AvatarActivityGroupProps extends Omit<AvatarBaseGroupProps, 'withActivityRing' | 'items'> {
  items: Array<AvatarActivityProps>;
}

export const AvatarActivityGroup: FC<AvatarActivityGroupProps> = ({ items, ...props }) => {
  const itemsBase: Array<AvatarBaseProps> = items.map((item) => ({
    ...item,
    withActivityRing: true,
  }));
  return <AvatarBaseGroup {...props} items={itemsBase} withActivityRing={true} />;
};

AvatarActivityGroup.displayName = 'AvatarActivityGroup';
