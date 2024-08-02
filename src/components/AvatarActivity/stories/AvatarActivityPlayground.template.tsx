import styled from 'styled-components';

import { AvatarActivity, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import type { AvatarActivityProps } from '@admiral-ds/react-ui';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const AvatarActivityPlaygroundTemplate = ({
  userName,
  showActivityRing = true,
  ...props
}: AvatarActivityProps) => {
  return (
    <Wrapper>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>Avatar Activity</NotificationItemTitle>
        <NotificationItemContent>
          Условно компонент можно разделить на два вида – обычный Avatar и тот, который используется с Activity Ring. Во
          втором варианте появляется пустое пространство вокруг компонента под круг фокусировки, что бы он (круг) при
          включении входил в общий размер компонента и не обрезался во фреймах.
          <Separator height={8} />
          Таким образом, включение опции «Activity Avatar» добавляет по 4 px с каждой стороны компонента.
          <Separator height={8} />
          Используйте только один тип Аватаров одновременно.
        </NotificationItemContent>
      </NotificationItem>
      <Separator height={40} />
      <AvatarActivity {...props} userName={userName || 'Just Example'} showActivityRing={showActivityRing} />
    </Wrapper>
  );
};
