import { Avatar } from '@admiral-ds/react-ui';
import type { AvatarProps } from '@admiral-ds/react-ui';

export const AvatarPlaygroundTemplate = ({ userName, ...props }: AvatarProps) => {
  return (
    <>
      <Avatar userName={userName || 'Just Example'} {...props} />
    </>
  );
};
