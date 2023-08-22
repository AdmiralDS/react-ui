import type { FC } from 'react';

import type { AvatarProps } from '#src/components/Avatar';
import type { AvatarBaseGroupProps } from '#src/components/AvatarBaseGroup';
import type { AvatarBaseProps } from '#src/components/AvatarBase';
import { AvatarBaseGroup } from '#src/components/AvatarBaseGroup';

export interface AvatarGroupProps extends Omit<AvatarBaseGroupProps, 'withActivityRing' | 'items'> {
  items: Array<AvatarProps>;
}

export const AvatarGroup: FC<AvatarGroupProps> = ({ items, ...props }) => {
  const itemsBase: Array<AvatarBaseProps> = items.map((item) => ({
    ...item,
    withActivityRing: false,
    showActivityRing: false,
  }));
  return <AvatarBaseGroup {...props} items={itemsBase} withActivityRing={false} />;
};

AvatarGroup.displayName = 'AvatarGroup';
