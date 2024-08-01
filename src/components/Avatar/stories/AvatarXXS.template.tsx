import styled from 'styled-components';

import { Avatar, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import type { AvatarProps } from '@admiral-ds/react-ui';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const AvatarXXSTemplate = ({ userName, href, ...props }: AvatarProps) => {
  return (
    <Wrapper>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>Размер XXS 20px</NotificationItemTitle>
        <NotificationItemContent>
          Размер XXS не используется самостоятельно, как отдельно стоящий и в группах. Применяется в составе других
          компонентов с размерным рядом элементов 20px.
          <Separator height={8} />
          Имеет только два типа: с инициалами или с фото.
        </NotificationItemContent>
      </NotificationItem>
      <Separator height={40} />
      <Container>
        <Avatar userName={userName || 'Just Example'} {...props} dimension="xxs" />
        <Avatar userName={userName || 'Just Example'} {...props} href={href || imageURL} dimension="xxs" />
      </Container>
    </Wrapper>
  );
};
