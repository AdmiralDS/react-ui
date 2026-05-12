import { useState, Fragment } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { IconButton, SideMenu, Sider, T } from '@admiral-ds/react-ui';
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
  height: 300px;
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
  { type: 'divider' },
  {
    type: 'group',
    id: '4',
    label: 'Option4',
    children: [
      { type: 'item', id: '4.1', label: 'Option4.1' },
      { type: 'item', id: '4.2', label: 'Option4.2' },
      {
        type: 'group',
        id: '4.3',
        label: 'Option4.3',
        children: [
          { type: 'item', id: '4.3.1', label: 'Option4.3.1' },
          { type: 'item', id: '4.3.2', label: 'Option4.3.2' },
        ],
      },
    ],
  },
];

export const SideMenuSiderTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T as="div" font="Body/Body 1 Long" style={{ marginBottom: '20px' }}>
        Существует несколько сценариев использования компонента SideMenu. Один из вариантов, когда в развернутом
        состоянии боковое меню занимает часть экрана, но может сворачиваться-разворачиваться при нажатии на заданную
        кнопку. Такой сценарий может использоваться, когда нужно больше места на странице, например, нужно место для
        отображения больших таблиц, и таблицы занимают освободившееся место, отображая больше информации.
        <br />
        Для отображения бокового меню с левой стороны от рабочей области и реализации его плавного открытия/закрытия
        следует использовать вспомогательный компонент Sider. Данный компонент отображается по левой стороне рабочей
        области и при смене параметра isOpen плавно изменяет свою ширину от заданного значения width (по умолчанию
        240px) до 0. С помощью параметров appearance, withBorder и cssMixin пользователь может настраивать внешний вид
        компонента Sider.
      </T>
      <Section>
        <Header>
          <IconButton dimension="m" onClick={() => setOpen((open) => !open)}>
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
      <T as="div" font="Body/Body 1 Long" style={{ marginBottom: '20px' }}>
        Важно отметить, что компонент Sider не имеет четко заданных высоты и позиционирования. Пользователь может сам
        настроить необходимые стили или поместить компонент Sider в подготовленный родительский контейнер с нужными
        размером и позиционированием. Так, в примере выше компонент Sider подстраивается под родительский контейнер, а в
        примере ниже показано, как сделать компонент Sider фиксированным по левой стороне родительского контейнера.
      </T>
      <Section>
        <Header>
          <IconButton dimension="m" onClick={() => setOpen2((open) => !open)}>
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
