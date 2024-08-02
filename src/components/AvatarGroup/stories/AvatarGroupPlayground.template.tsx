import styled from 'styled-components';

import { AvatarGroup, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import type { AvatarGroupProps } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const StyledNotificationItem = styled(NotificationItem)`
  width: 100%;
`;

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const onSelectAvatar = (id: string) => {
  // eslint-disable-next-line no-console
  console.log('Select item with id: ', id);
};

const items: AvatarGroupProps['items'] = [
  { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1' },
  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },
  { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3' },
  { userName: 'Arina Leskova', appearance: 'neutral3', id: '4' },
  { userName: 'Rita', appearance: 'neutral4', id: '5' },
  { userName: 'Важный Кот', icon: <PersonSolid />, href: imageURL, id: '6' },
  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },
  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },
  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },
  { userName: 'Tom Hidlton', appearance: { background: '#3F7DFE', text: '#001157' }, id: '10' },
];

export const AvatarGroupPlaygroundTemplate = ({ onAvatarSelect, ...props }: AvatarGroupProps) => {
  return (
    <Wrapper>
      <StyledNotificationItem displayStatusIcon>
        <NotificationItemTitle>Группировка. Компонент AvatarGroup.</NotificationItemTitle>
        <NotificationItemContent>
          Компоненты выстраиваются по горизонтали с отрицательным отступом -2px и внешней обводкой 2px в цвет фона
          страницы. При группировке статусы не отображаются.
        </NotificationItemContent>
      </StyledNotificationItem>
      <AvatarGroup
        {...props}
        items={items}
        onAvatarSelect={onAvatarSelect || onSelectAvatar}
        data-dropdown-container-id="avatar-group-with-dropdown"
        className="avatar-group-class"
      />
    </Wrapper>
  );
};
