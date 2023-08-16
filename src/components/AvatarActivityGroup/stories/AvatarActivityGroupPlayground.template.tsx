import * as React from 'react';

import { AvatarActivityGroup } from '@admiral-ds/react-ui';
import type { AvatarActivityGroupProps } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://github.com/DrUNE.png?size=100';

const onSelectAvatar = (id: string) => {
  // eslint-disable-next-line no-console
  console.log('Select item with id: ', id);
};

const items: AvatarActivityGroupProps['items'] = [
  { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1', showActivityRing: true },
  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2', showActivityRing: true },
  { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3', showActivityRing: true },
  { userName: 'Arina Leskova', appearance: 'neutral3', id: '4', showActivityRing: true },
  { userName: 'Rita', appearance: 'neutral4', id: '5', showActivityRing: true },
  { userName: 'Drune', icon: <PersonSolid />, href: imageURL, id: '6', showActivityRing: true },
  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7', showActivityRing: true },
  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8', showActivityRing: true },
  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9', showActivityRing: true },
  { userName: 'Tom Hidlton', appearance: { background: '#3F7DFE', text: '#001157' }, id: '10', showActivityRing: true },
];

export const AvatarActivityGroupPlaygroundTemplate = ({ onAvatarSelect, ...props }: AvatarActivityGroupProps) => {
  return (
    <AvatarActivityGroup
      {...props}
      items={items}
      onAvatarSelect={onAvatarSelect || onSelectAvatar}
      data-dropdown-container-id="avatar-group-with-dropdown"
      className="avatar-group-class"
    />
  );
};
