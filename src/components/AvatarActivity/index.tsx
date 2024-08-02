import { forwardRef } from 'react';

import type { AvatarBaseInternalProps, AvatarBaseProps, Dimension } from '#src/components/AvatarBase';
import { AvatarBase } from '#src/components/AvatarBase';

export interface AvatarActivityProps extends Omit<AvatarBaseProps, 'withActivityRing' | 'dimension'> {
  /** Размер компонента */
  dimension?: Dimension;
}

export const AvatarActivity = forwardRef<HTMLButtonElement, AvatarActivityProps & AvatarBaseInternalProps>(
  ({ showActivityRing = false, ...props }: AvatarActivityProps & AvatarBaseInternalProps, ref) => {
    return <AvatarBase ref={ref} {...props} withActivityRing={true} showActivityRing={showActivityRing} />;
  },
);

AvatarActivity.displayName = 'AvatarActivity';
