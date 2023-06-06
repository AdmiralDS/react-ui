import * as React from 'react';
import styled from 'styled-components';

import { AvatarGroup, DefaultFontColorName } from '@admiral-ds/react-ui';
import type { AvatarGroupProps } from '@admiral-ds/react-ui';
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

const items2: AvatarGroupProps['items'] = [
  { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1' },
  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },
  { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3' },
  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4' },
  { userName: 'Rita', appearance: 'dark', id: '5' },
  { userName: 'Drune', icon: <PersonSolid />, href: imageURL, id: '6' },
  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },
  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },
  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },
  { userName: 'Tom Hidlton', appearance: 'dark', id: '10' },
];

const items3: AvatarGroupProps['items'] = [
  {
    userName: 'Lena Ivanova',
    icon: <PersonSolid />,
    id: '1',
    appearance: { background: '#3F7DFE', icon: '#001157' },
  },
  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },
  { userName: 'Agata Petrova', id: '3', appearance: { background: '#D92020', text: '#FFFFFF' } },
  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4' },
  { userName: 'Rita', appearance: 'light', id: '5' },
  { userName: 'Drune', icon: <PersonSolid />, href: imageURL, id: '6' },
  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },
  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },
  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },
  { userName: 'Tom Hidlton', appearance: 'light', id: '10' },
];

export const AvatarGroupWidthTemplate = (props: AvatarGroupProps) => {
  return (
    <>
      <Text>Пример AvatarGroup с единым для всех аватаров внешним видом (appearance)</Text>
      <AvatarGroup
        {...props}
        style={{ width: '300px' }}
        items={items2}
        onAvatarSelect={onSelectAvatar}
        dropContainerClassName="dropContainerClass"
      />
      <div style={{ height: '40px' }} />
      <Text>Пример AvatarGroup с различными по внешнему виду (appearance) аватарами</Text>
      <AvatarGroup
        {...props}
        style={{ width: '300px' }}
        items={items3}
        onAvatarSelect={onSelectAvatar}
        appearance="dark"
        dropContainerClassName="dropContainerClass"
        dropContainerStyle={{ width: '250px' }}
      />
    </>
  );
};
