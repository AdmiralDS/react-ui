import styled from 'styled-components';

import { AvatarActivity, DefaultFontColorName } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Text = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color[DefaultFontColorName]};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  & > * {
    margin-right: 20px;
  }
  margin-bottom: 40px;
`;

export const AvatarActivitySingleTemplate = () => (
  <>
    <Text>Размеры компонента</Text>
    <Container>
      <AvatarActivity showActivityRing dimension="xs" userName="Dimension xs" />
      <AvatarActivity showActivityRing dimension="s" userName="Dimension s" />
      <AvatarActivity showActivityRing dimension="m" userName="Dimension m" />
      <AvatarActivity showActivityRing dimension="l" userName="Dimension l" />
      <AvatarActivity showActivityRing userName="Dimension xl" />
    </Container>
    <Text>
      Внешний вид компонента (цвет фона, текста и иконки). Возможен выбор из четырех вариантов: light, white, grey, dark
      или самостоятельная настройка цвета фона, текста, иконки
    </Text>
    <Container style={{ background: '#F1F2F4' }}>
      <AvatarActivity showActivityRing userName="Neutral 1 Appearance" appearance="neutral1" />
      <AvatarActivity showActivityRing userName="Neutral 2 Appearance" />
      <AvatarActivity showActivityRing userName="Neutral 3 Appearance" appearance="neutral3" />
      <AvatarActivity showActivityRing userName="Neutral 4 Appearance" appearance="neutral4" />
      <AvatarActivity
        showActivityRing
        userName="Custom Appearance"
        appearance={{ background: '#3F7DFE', text: '#001157' }}
      />
      <AvatarActivity
        showActivityRing
        userName="Custom Appearance"
        icon={<PersonSolid />}
        appearance={{ background: '#8A3FFC', icon: '#FFFFFF' }}
      />
    </Container>
    <Text>Варианты контента (инициалы, иконка, фото)</Text>
    <Container>
      <AvatarActivity showActivityRing userName="Name" userInitials="Na" />
      <AvatarActivity showActivityRing userName="Name Surname" />
      <AvatarActivity showActivityRing userName="Icon Avatar" icon={<PersonSolid />} />
      <AvatarActivity showActivityRing userName="Image Avatar" href={imageURL} />
    </Container>
    <Text>Статусы компонента</Text>
    <Container>
      <AvatarActivity showActivityRing dimension="xs" userName="Status Danger" icon={<PersonSolid />} status="danger" />
      <AvatarActivity showActivityRing dimension="s" userName="Status Warning" icon={<PersonSolid />} status="warn" />
      <AvatarActivity
        showActivityRing
        dimension="m"
        userName="Status Success"
        icon={<PersonSolid />}
        status="success"
      />
      <AvatarActivity
        showActivityRing
        dimension="l"
        userName="Status Inactive"
        icon={<PersonSolid />}
        status="inactive"
      />
      <AvatarActivity showActivityRing dimension="xl" userName="Custom Status" href={imageURL} status="#3F7DFE" />
    </Container>
  </>
);
