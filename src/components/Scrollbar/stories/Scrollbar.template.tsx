import styled from 'styled-components';
import { NotificationItem, NotificationItemTitle, Scrollenabled } from '@admiral-ds/react-ui';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const NotificationItemContent = styled(Scrollenabled)`
  padding-right: 12px;
  padding-bottom: 12px;
  ${(p) => p.theme.typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const ScrollbarTemplate = () => {
  return (
    <NotificationItem
      displayStatusIcon
      style={{ paddingRight: 0, maxWidth: 500, maxHeight: 400, display: 'flex', flexDirection: 'column' }}
    >
      <NotificationItemTitle>Scrollbar</NotificationItemTitle>
      <NotificationItemContent>
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
      </NotificationItemContent>
    </NotificationItem>
  );
};
