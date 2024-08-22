import { forwardRef } from 'react';

import type { AvatarBaseInternalProps, AvatarBaseProps } from '#src/components/AvatarBase';
import { AvatarBase } from '#src/components/AvatarBase';

export interface AvatarProps extends Omit<AvatarBaseProps, 'withActivityRing' | 'showActivityRing'> {}

export const Avatar = forwardRef<HTMLButtonElement, AvatarProps & AvatarBaseInternalProps>(
  ({ dimension, ...props }: AvatarProps & AvatarBaseInternalProps, ref) => {
    return (
      <AvatarBase
        ref={ref}
        {...props}
        dimension={props.status && dimension === 'xxs' ? 'xs' : dimension}
        withActivityRing={false}
        showActivityRing={false}
      />
    );
  },
);

Avatar.displayName = 'Avatar';
