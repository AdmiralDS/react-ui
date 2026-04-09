import { useState, Fragment } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { IconButton, SideMenu, Sider } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Section = styled.div`
  border: 1px solid ${(p) => p.theme.color['Neutral/Neutral 20']};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 40px;
`;

const Header = styled.header`
  height: 40px;
  width: 100%;
  background-color: ${(p) => p.theme.color['Opacity/Neutral 8']};
`;

const Layout = styled.div`
  display: flex;
  height: 200px;
  overflow: auto;
`;

const Main = styled.main`
  min-height: 100%;
  min-width: calc(100% - 200px);
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  align-self: flex-start;
  background-color: ${(p) => p.theme.color['Success/Success 10']};
`;

const Content = styled.div`
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
  padding: 16px;
`;

const stickyMixin = css`
  position: sticky;
  left: 0;
  top: 0;
`;

const items: SideMenuProps['items'] = [
  { type: 'item', id: '1', label: 'Option1' },
  { type: 'item', id: '2', label: 'Option2' },
  { type: 'item', id: '3', label: 'Option3' },
];

export const SideMenuSiderTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [open, setOpened] = useState(true);
  const [open2, setOpened2] = useState(true);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Section>
        <Header>
          <IconButton dimension="m" onClick={() => setOpened((open) => !open)}>
            <MenuOutline />
          </IconButton>
        </Header>
        <Layout>
          <Sider isOpen={open} width={200} appearance="secondary">
            <SideMenu {...props} items={items} />
          </Sider>
          <Main />
        </Layout>
      </Section>
      <Section>
        <Header>
          <IconButton dimension="m" onClick={() => setOpened2((open) => !open)}>
            <MenuOutline />
          </IconButton>
        </Header>
        <Layout>
          <Sider isOpen={open2} width={200} withBorder cssMixin={stickyMixin}>
            <SideMenu {...props} items={items} />
          </Sider>
          <Main>
            <Content>
              <p>Long content</p>
              {Array.from({ length: 100 }, (_, index) => (
                <Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </Fragment>
              ))}
            </Content>
          </Main>
        </Layout>
      </Section>
    </ThemeProvider>
  );
};
