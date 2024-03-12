import styled from 'styled-components';

import { Avatar, DefaultFontColorName } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Text = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color[DefaultFontColorName]});
`;

const Container = styled.div`
  position: relative;
  display: flex;
  & > * {
    margin-right: 20px;
  }
  margin-bottom: 40px;
`;

export const AvatarSingleTemplate = () => (
  <>
    <Text>Размеры компонента</Text>
    <Container>
      <Avatar dimension="xs" userName="Dimension xs" />
      <Avatar dimension="s" userName="Dimension s" />
      <Avatar dimension="m" userName="Dimension m" />
      <Avatar dimension="l" userName="Dimension l" />
      <Avatar userName="Dimension xl" />
    </Container>
    <Text>
      Внешний вид компонента (цвет фона, текста и иконки). Возможен выбор из четырех вариантов: light, white, grey, dark
      или самостоятельная настройка цвета фона, текста, иконки
    </Text>
    <Container style={{ background: '#F1F2F4' }}>
      <Avatar userName="Neutral 1 Appearance" appearance="neutral1" />
      <Avatar userName="Neutral 2 Appearance" />
      <Avatar userName="Neutral 3 Appearance" appearance="neutral3" />
      <Avatar userName="Neutral 4 Appearance" appearance="neutral4" />
      <Avatar userName="Custom Appearance" appearance={{ background: '#3F7DFE', text: '#001157' }} />
      <Avatar
        userName="Custom Appearance"
        icon={<PersonSolid />}
        appearance={{ background: '#8A3FFC', icon: '#FFFFFF' }}
      />
    </Container>
    <Text>Варианты контента (инициалы, иконка, фото)</Text>
    <Container>
      <Avatar userName="Name" userInitials="Na" />
      <Avatar userName="Name Surname" />
      <Avatar userName="Icon Avatar" icon={<PersonSolid />} />
      <Avatar userName="Image Avatar" href={imageURL} />
    </Container>
    <Text>Статусы компонента</Text>
    <Container>
      <Avatar dimension="xs" userName="Status Danger" icon={<PersonSolid />} status="danger" />
      <Avatar dimension="s" userName="Status Warning" icon={<PersonSolid />} status="warn" />
      <Avatar dimension="m" userName="Status Success" icon={<PersonSolid />} status="success" />
      <Avatar dimension="l" userName="Status Inactive" icon={<PersonSolid />} status="inactive" />
      <Avatar dimension="xl" userName="Custom Status" href={imageURL} status="#3F7DFE" />
    </Container>
  </>
);
