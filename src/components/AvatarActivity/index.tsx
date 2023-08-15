import * as React from 'react';

import type { AvatarBaseInternalProps, AvatarBaseProps } from '#src/components/AvatarBase';
import { AvatarBase } from '#src/components/AvatarBase';

export interface AvatarActivityProps extends Omit<AvatarBaseProps, 'withActivityRing'> {}

export const AvatarActivity = React.forwardRef<HTMLButtonElement, AvatarActivityProps & AvatarBaseInternalProps>(
  ({ userName, showActivityRing = false, ...props }: AvatarActivityProps & AvatarBaseInternalProps, ref) => {
    return (
      <AvatarBase
        ref={ref}
        {...props}
        userName={userName}
        withActivityRing={true}
        showActivityRing={showActivityRing}
      />
    );
  },
);

AvatarActivity.displayName = 'AvatarActivity';
