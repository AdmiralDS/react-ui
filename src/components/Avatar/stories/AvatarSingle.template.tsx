import styled from 'styled-components';

import type { AvatarProps } from '@admiral-ds/react-ui';
import {
  Avatar,
  DefaultFontColorName,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
  typography,
} from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Text = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color[DefaultFontColorName]});
  ${typography['Body/Body 2 Long']}
`;

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
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
`;
const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;
const StyledNotificationItem = styled(NotificationItem)`
  width: 100%;
`;

export const AvatarSingleTemplate = ({ showTooltip }: AvatarProps) => (
  <Wrapper>
    <StyledNotificationItem displayStatusIcon>
      <NotificationItemTitle>Размеры и типы</NotificationItemTitle>
      <NotificationItemContent>Опционально Tooltip можно отключать.</NotificationItemContent>
    </StyledNotificationItem>
    <Container>
      <Avatar showTooltip={showTooltip} dimension="xs" userName="Dimension xs" />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Dimension s" />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Dimension m" />
      <Avatar showTooltip={showTooltip} dimension="l" userName="Dimension l" />
      <Avatar showTooltip={showTooltip} userName="Dimension xl" />
    </Container>
    <Container>
      <Avatar showTooltip={showTooltip} dimension="xs" userName="Dimension xs" icon={<PersonSolid />} />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Dimension s" icon={<PersonSolid />} />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Dimension m" icon={<PersonSolid />} />
      <Avatar showTooltip={showTooltip} dimension="l" userName="Dimension l" icon={<PersonSolid />} />
      <Avatar showTooltip={showTooltip} userName="Dimension xl" icon={<PersonSolid />} />
    </Container>
    <Container>
      <Avatar showTooltip={showTooltip} dimension="xs" userName="Dimension xs" href={imageURL} />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Dimension s" href={imageURL} />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Dimension m" href={imageURL} />
      <Avatar showTooltip={showTooltip} dimension="l" userName="Dimension l" href={imageURL} />
      <Avatar showTooltip={showTooltip} userName="Dimension xl" href={imageURL} />
    </Container>

    <StyledNotificationItem displayStatusIcon>
      <NotificationItemTitle>Avatar с опцией «Status»</NotificationItemTitle>
      <NotificationItemContent>
        Статусы: «В сети», «Не беспокоить», «Отошел», «Не в сети». Также возможно задать кастомный цвет для статуса.
      </NotificationItemContent>
    </StyledNotificationItem>
    <Container>
      <Avatar showTooltip={showTooltip} dimension="xs" userName="Status Success" status="success" />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Status Danger" status="danger" />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Status Warn" status="warn" />
      <Avatar showTooltip={showTooltip} dimension="l" userName="Status Inactive" status="inactive" />
      <Avatar showTooltip={showTooltip} userName="Custom Status" status="#3F7DFE" />
    </Container>
    <Container>
      <Avatar
        showTooltip={showTooltip}
        dimension="xs"
        userName="Status Success"
        icon={<PersonSolid />}
        status="success"
      />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Status Danger" icon={<PersonSolid />} status="danger" />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Status Warn" icon={<PersonSolid />} status="warn" />
      <Avatar
        showTooltip={showTooltip}
        dimension="l"
        userName="Status Inactive"
        icon={<PersonSolid />}
        status="inactive"
      />
      <Avatar showTooltip={showTooltip} userName="Custom Status" icon={<PersonSolid />} status="#3F7DFE" />
    </Container>
    <Container>
      <Avatar showTooltip={showTooltip} dimension="xs" userName="Status Success" href={imageURL} status="success" />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Status Danger" href={imageURL} status="danger" />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Status Warn" href={imageURL} status="warn" />
      <Avatar showTooltip={showTooltip} dimension="l" userName="Status Inactive" href={imageURL} status="inactive" />
      <Avatar showTooltip={showTooltip} userName="Custom Status" href={imageURL} status="#3F7DFE" />
    </Container>

    <StyledNotificationItem displayStatusIcon>
      <NotificationItemTitle>Цвета Аватаров</NotificationItemTitle>
      <NotificationItemContent>
        Для окраски фона компонента, букв (иконок) используйте стандартную палитру дизайн-системы, следите за
        контрастностью и читаемостью. Рекомендуемые цвета:
      </NotificationItemContent>
    </StyledNotificationItem>
    <GridContainer>
      <AvatarContainer style={{ background: '#F1F2F4' }}>
        <Text>Neutral 00</Text>
        <Avatar showTooltip={showTooltip} userName="Neutral 1 Appearance" appearance="neutral1" dimension="m" />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Neutral 10</Text>
        <Avatar showTooltip={showTooltip} userName="Neutral 2 Appearance" dimension="m" />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Neutral 50</Text>
        <Avatar showTooltip={showTooltip} userName="Neutral 3 Appearance" appearance="neutral3" dimension="m" />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Neutral 80</Text>
        <Avatar showTooltip={showTooltip} userName="Neutral 4 Appearance" appearance="neutral4" dimension="m" />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Primary 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Primary 60 Main"
          appearance={{ background: '#0062FF', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Error 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Error 60 Main"
          appearance={{ background: '#D92020', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Success 50 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Success 50 Main"
          appearance={{ background: '#1BA049', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Warning 50 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Warning 50 Main"
          appearance={{ background: '#FF5C22', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Attention 50 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Attention 50 Main"
          appearance={{ background: '#FFC400', text: '#121316' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Purple 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Purple 60 Main"
          appearance={{ background: '#8A3FFC', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Magenta 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Magenta 60 Main"
          appearance={{ background: '#D02670', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Cian 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Cian 60 Main"
          appearance={{ background: '#0072C3', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Teal 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Teal 60 Main"
          appearance={{ background: '#007D79', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
    </GridContainer>
  </Wrapper>
);
