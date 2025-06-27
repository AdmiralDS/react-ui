import styled from 'styled-components';

import { Divider, T } from '@admiral-ds/react-ui';
import type { DividerProps } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Container = styled.div`
  box-sizing: border-box;
  padding: 20px 0;
  width: 80%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
`;

const HorizontalWrapper = styled(Container)`
  flex-direction: column;
`;

const VerticalWrapper = styled(Container)`
  height: 100px;
`;

const Separator = styled.div`
  height: 24px;
`;

export const DividerVariantsTemplate = (_props: DividerProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Основные настройки компонента
        <Separator />
        <li>Тип — горизонтальный или вертикальный</li>
        <li>Стиль — default, subtle, strong, primary, static white</li>
        <li>Толщина линии — 1 px ('s'), 2 px ('m')</li>
        <li>Тема — светлая или темная</li>
        <li>Вы можете назначать произвольные цвета компоненту, помимо заданных</li>
        <li>Размер компонента регулируется «вручную» пользователем</li>
      </T>
      <Separator />
      <Wrapper>
        <HorizontalWrapper>
          <Divider length="80%" dimension="s" />
          <Divider length="80%" />
          <Divider length="80%" dimension="s" appearance="subtle" />
          <Divider length="80%" appearance="subtle" />
          <Divider length="80%" dimension="s" appearance="strong" />
          <Divider length="80%" appearance="strong" />
          <Divider length="80%" dimension="s" appearance="primary" />
          <Divider length="80%" appearance="primary" />
          <Divider length="80%" dimension="s" appearance="staticWhite" />
          <Divider length="80%" appearance="staticWhite" />
          <Divider length="80%" dimension="s" appearance="#84106e" />
          <Divider length="80%" appearance="#84106e" />
        </HorizontalWrapper>
        <VerticalWrapper>
          <Divider orientation="vertical" />
          <Divider orientation="vertical" dimension="s" />
          <Divider orientation="vertical" dimension="s" appearance="subtle" />
          <Divider orientation="vertical" appearance="subtle" />
          <Divider orientation="vertical" dimension="s" appearance="strong" />
          <Divider orientation="vertical" appearance="strong" />
          <Divider orientation="vertical" dimension="s" appearance="primary" />
          <Divider orientation="vertical" appearance="primary" />
          <Divider orientation="vertical" dimension="s" appearance="staticWhite" />
          <Divider orientation="vertical" appearance="staticWhite" />
          <Divider orientation="vertical" dimension="s" appearance="#84106e" />
          <Divider orientation="vertical" appearance="#84106e" />
        </VerticalWrapper>
      </Wrapper>
    </>
  );
};
