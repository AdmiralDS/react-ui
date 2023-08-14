import * as React from 'react';
import styled from 'styled-components';

import { DefaultFontColorName } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';
import { AvatarBase } from '#src/components/AvatarBase';

const imageURL = 'https://github.com/DrUNE.png?size=100';

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

export const AvatarActivityTemplate = () => (
  <>
    <Text>Размеры компонента</Text>
    <Container>
      <AvatarBase withActivityRing showActivityRing dimension="xs" userName="Dimension xs" />
      <AvatarBase withActivityRing showActivityRing dimension="s" userName="Dimension s" />
      <AvatarBase withActivityRing showActivityRing dimension="m" userName="Dimension m" />
      <AvatarBase withActivityRing showActivityRing dimension="l" userName="Dimension l" />
      <AvatarBase withActivityRing showActivityRing userName="Dimension xl" />
    </Container>
    <Text>
      Внешний вид компонента (цвет фона, текста и иконки). Возможен выбор из четырех вариантов: light, white, grey, dark
      или самостоятельная настройка цвета фона, текста, иконки
    </Text>
    <Container style={{ background: '#F1F2F4' }}>
      <AvatarBase withActivityRing showActivityRing userName="Neutral 1 Appearance" appearance="neutral1" />
      <AvatarBase withActivityRing showActivityRing userName="Neutral 2 Appearance" />
      <AvatarBase withActivityRing showActivityRing userName="Neutral 3 Appearance" appearance="neutral3" />
      <AvatarBase withActivityRing showActivityRing userName="Neutral 4 Appearance" appearance="neutral4" />
      <AvatarBase
        withActivityRing
        showActivityRing
        userName="Custom Appearance"
        appearance={{ background: '#3F7DFE', text: '#001157' }}
      />
      <AvatarBase
        withActivityRing
        showActivityRing
        userName="Custom Appearance"
        icon={<PersonSolid />}
        appearance={{ background: '#8A3FFC', icon: '#FFFFFF' }}
      />
    </Container>
    <Text>Варианты контента (инициалы, иконка, фото)</Text>
    <Container>
      <AvatarBase withActivityRing showActivityRing userName="Name" userInitials="Na" />
      <AvatarBase withActivityRing showActivityRing userName="Name Surname" />
      <AvatarBase withActivityRing showActivityRing userName="Icon Avatar" icon={<PersonSolid />} />
      <AvatarBase withActivityRing showActivityRing userName="Image Avatar" href={imageURL} />
    </Container>
    <Text>Статусы компонента</Text>
    <Container>
      <AvatarBase
        withActivityRing
        showActivityRing
        dimension="xs"
        userName="Status Danger"
        icon={<PersonSolid />}
        status="danger"
      />
      <AvatarBase
        withActivityRing
        showActivityRing
        dimension="s"
        userName="Status Warning"
        icon={<PersonSolid />}
        status="warn"
      />
      <AvatarBase
        withActivityRing
        showActivityRing
        dimension="m"
        userName="Status Success"
        icon={<PersonSolid />}
        status="success"
      />
      <AvatarBase
        withActivityRing
        showActivityRing
        dimension="l"
        userName="Status Inactive"
        icon={<PersonSolid />}
        status="inactive"
      />
      <AvatarBase
        withActivityRing
        showActivityRing
        dimension="xl"
        userName="Example Name"
        href={imageURL}
        status="#3F7DFE"
      />
    </Container>
  </>
);
