import { AvatarActivity } from '@admiral-ds/react-ui';
import type { AvatarActivityProps } from '@admiral-ds/react-ui';

export const AvatarActivityPlaygroundTemplate = ({ userName, ...props }: AvatarActivityProps) => {
  return (
    <>
      <AvatarActivity userName={userName || 'Just Example'} showActivityRing {...props} />
    </>
  );
};
