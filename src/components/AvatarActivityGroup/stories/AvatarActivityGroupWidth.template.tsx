import * as React from 'react';
import styled from 'styled-components';

import { AvatarActivityGroup, DefaultFontColorName } from '@admiral-ds/react-ui';
import type { AvatarActivityGroupProps } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://github.com/DrUNE.png?size=100';

const Text = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color[DefaultFontColorName]};
`;

const onSelectAvatar = (id: string) => {
  // eslint-disable-next-line no-console
  console.log('Select item with id: ', id);
};

const items2: AvatarActivityGroupProps['items'] = [
  { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1', showActivityRing: true },
  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2', showActivityRing: true },
  { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3', showActivityRing: true },
  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4', showActivityRing: true },
  { userName: 'Rita', appearance: 'neutral4', id: '5', showActivityRing: true },
  { userName: 'Drune', icon: <PersonSolid />, href: imageURL, id: '6', showActivityRing: true },
  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7', showActivityRing: true },
  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8', showActivityRing: true },
  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9', showActivityRing: true },
  { userName: 'Tom Hidlton', appearance: 'neutral4', id: '10', showActivityRing: true },
];

const items3: AvatarActivityGroupProps['items'] = [
  {
    userName: 'Lena Ivanova',
    icon: <PersonSolid />,
    id: '1',
    appearance: { background: '#3F7DFE', icon: '#001157' },
    showActivityRing: true,
  },
  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2', showActivityRing: true },
  {
    userName: 'Agata Petrova',
    id: '3',
    appearance: { background: '#D92020', text: '#FFFFFF' },
    showActivityRing: true,
  },
  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4', showActivityRing: true },
  { userName: 'Rita', appearance: 'neutral2', id: '5', showActivityRing: true },
  { userName: 'Drune', icon: <PersonSolid />, href: imageURL, id: '6', showActivityRing: true },
  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7', showActivityRing: true },
  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8', showActivityRing: true },
  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9', showActivityRing: true },
  { userName: 'Tom Hidlton', appearance: 'neutral2', id: '10', showActivityRing: true },
];

export const AvatarActivityGroupWidthTemplate = (props: AvatarActivityGroupProps) => {
  return (
    <>
      <Text>Пример AvatarGroup с единым для всех аватаров внешним видом (appearance)</Text>
      <AvatarActivityGroup
        {...props}
        style={{ width: '300px' }}
        items={items2}
        onAvatarSelect={onSelectAvatar}
        dropContainerClassName="dropContainerClass"
      />
      <div style={{ height: '40px' }} />
      <Text>Пример AvatarGroup с различными по внешнему виду (appearance) аватарами</Text>
      <AvatarActivityGroup
        {...props}
        style={{ width: '300px' }}
        items={items3}
        onAvatarSelect={onSelectAvatar}
        appearance="neutral4"
        dropContainerClassName="dropContainerClass"
        dropContainerStyle={{ width: '250px' }}
      />
    </>
  );
};
