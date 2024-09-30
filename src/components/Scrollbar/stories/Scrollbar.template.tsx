import styled from 'styled-components';
import { NotificationItem, NotificationItemTitle, hideNativeScrollbars, Scrollbars } from '@admiral-ds/react-ui';
import { useState } from 'react';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const NotificationItemContent = styled.div`
  ${hideNativeScrollbars}
  position: relative;
  max-height: 300px;
  max-width: 300px;
  flex: 1 1 auto;
  padding-right: 12px;
  padding-bottom: 12px;
  ${(p) => p.theme.typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const ScrollbarTemplate = () => {
  const [contentNode, setContentNode] = useState<HTMLDivElement | null>(null);
  return (
    <Wrapper>
      <NotificationItem displayStatusIcon style={{ paddingRight: 0 }}>
        <NotificationItemTitle>Scrollbar</NotificationItemTitle>
        <NotificationItemContent ref={setContentNode}>
          <div style={{ width: 400, height: 1 }} title="Блок для переполнения ширины"></div>
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
          <Scrollbars contentNode={contentNode} />
        </NotificationItemContent>
      </NotificationItem>
    </Wrapper>
  );
};
