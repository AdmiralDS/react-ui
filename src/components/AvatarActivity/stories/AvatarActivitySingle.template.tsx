import styled from 'styled-components';

import type { AvatarActivityProps } from '@admiral-ds/react-ui';
import { AvatarActivity, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const StyledNotificationItem = styled(NotificationItem)`
  width: 100%;
`;

export const AvatarActivitySingleTemplate = ({
  appearance,
  showTooltip,
  showActivityRing = true,
}: AvatarActivityProps) => (
  <Wrapper>
    <StyledNotificationItem displayStatusIcon>
      <NotificationItemTitle>Размеры и типы</NotificationItemTitle>
      <NotificationItemContent>Опционально Tooltip можно отключать.</NotificationItemContent>
    </StyledNotificationItem>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
      />
    </Container>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
        icon={<PersonSolid />}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
        icon={<PersonSolid />}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
        icon={<PersonSolid />}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
        icon={<PersonSolid />}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
        icon={<PersonSolid />}
      />
    </Container>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
        href={imageURL}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
        href={imageURL}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
        href={imageURL}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
        href={imageURL}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
        href={imageURL}
      />
    </Container>

    <StyledNotificationItem displayStatusIcon>
      <NotificationItemTitle>Avatar с опцией «Status»</NotificationItemTitle>
      <NotificationItemContent>Статусы: «В сети», «Не беспокоить», «Отошел», «Не в сети».</NotificationItemContent>
    </StyledNotificationItem>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
        status="success"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
        status="danger"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
        status="warn"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
        status="inactive"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
        status="success"
      />
    </Container>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
        icon={<PersonSolid />}
        status="success"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
        icon={<PersonSolid />}
        status="danger"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
        icon={<PersonSolid />}
        status="warn"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
        icon={<PersonSolid />}
        status="inactive"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
        icon={<PersonSolid />}
        status="success"
      />
    </Container>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
        href={imageURL}
        status="success"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
        href={imageURL}
        status="danger"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
        href={imageURL}
        status="warn"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
        href={imageURL}
        status="inactive"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
        href={imageURL}
        status="success"
      />
    </Container>
  </Wrapper>
);
