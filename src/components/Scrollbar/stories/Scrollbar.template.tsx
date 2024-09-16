import styled from 'styled-components';

import type { ScrollbarProps } from '@admiral-ds/react-ui';
import { NotificationItem, NotificationItemContent, NotificationItemTitle, Scrollbar } from '@admiral-ds/react-ui';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ScrollbarTemplate = (props: ScrollbarProps) => {
  return (
    <Wrapper>
      <NotificationItem displayStatusIcon style={{ paddingRight: 0 }}>
        <NotificationItemTitle>Scrollbar</NotificationItemTitle>
        <NotificationItemContent style={{ position: 'relative', overflow: 'hidden', paddingRight: 12 }}>
          <Scrollbar style={{ maxHeight: 400 }}>
            Scrollbar – компонент для отображения скролбаров, одинаково выглядящих на всех платформах.
            <Separator height={8} />
            Автоматически появляется при переполнении контейнера. Для этого необходимо что-бы на компонент тем или иным
            образом был огрничен в размерах
            <Separator height={8} />
            Scrollbar – компонент для отображения скролбаров, одинаково выглядящих на всех платформах.
            <Separator height={8} />
            Автоматически появляется при переполнении контейнера. Для этого необходимо что-бы на компонент тем или иным
            образом был огрничен в размерах
            <Separator height={8} />
            Scrollbar – компонент для отображения скролбаров, одинаково выглядящих на всех платформах.
            <Separator height={8} />
            Автоматически появляется при переполнении контейнера. Для этого необходимо что-бы на компонент тем или иным
            образом был огрничен в размерах
            <Separator height={8} />
            Scrollbar – компонент для отображения скролбаров, одинаково выглядящих на всех платформах.
            <Separator height={8} />
            Автоматически появляется при переполнении контейнера. Для этого необходимо что-бы на компонент тем или иным
            образом был огрничен в размерах
            <Separator height={8} />
            Scrollbar – компонент для отображения скролбаров, одинаково выглядящих на всех платформах.
            <Separator height={8} />
            Автоматически появляется при переполнении контейнера. Для этого необходимо что-бы на компонент тем или иным
            образом был огрничен в размерах
            <Separator height={8} />
          </Scrollbar>
        </NotificationItemContent>
      </NotificationItem>
    </Wrapper>
  );
};
