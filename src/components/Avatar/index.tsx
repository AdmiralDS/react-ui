import * as React from 'react';

import type { AvatarBaseInternalProps, AvatarBaseProps } from '#src/components/AvatarBase';
import { AvatarBase } from '#src/components/AvatarBase';

export interface AvatarProps extends Omit<AvatarBaseProps, 'withActivityRing' | 'showActivityRing'> {}

export const Avatar = React.forwardRef<HTMLButtonElement, AvatarProps & AvatarBaseInternalProps>(
  ({ userName, ...props }: AvatarProps & AvatarBaseInternalProps, ref) => {
    return <AvatarBase ref={ref} {...props} userName={userName} withActivityRing={false} showActivityRing={false} />;
  },
);

Avatar.displayName = 'Avatar';
