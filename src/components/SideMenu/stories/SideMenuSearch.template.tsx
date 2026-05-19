import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { IconButton, SideMenu, Sider, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Wrapper = styled.div`
  border: 1px solid ${(p) => p.theme.color['Neutral/Neutral 20']};
  border-radius: 4px;
  overflow: hidden;
`;

const Header = styled.header`
  height: 40px;
  width: 100%;
  background-color: ${(p) => p.theme.color['Opacity/Neutral 8']};
`;

const Layout = styled.div`
  display: flex;
  height: 300px;
`;

const Main = styled.main`
  min-height: 100%;
  min-width: calc(100% - 240px);
  flex: 1 1 auto;
  background-color: ${(p) => p.theme.color['Success/Success 10']};
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

export const SideMenuSearchTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T as="div" font="Body/Body 1 Long" style={{ marginBottom: '20px' }}>
        При большом количестве пунктов можно включать опцию search для отображения поискового инпута. Поиск выводит
        совпадающие пункты с сохранением вложенности, то есть отображаются так же и старшие пункты к которым принадлежат
        найденные пункты. <br />
        Результаты поиска разделяются дивайдерами. Совпадающие буквы подсвечиваются цветом. <br />
        После клика на нужный пункт меню происходит переход в выбранный раздел, меню принимает обычный вид. Но введенный
        в поле поиска запрос не исчезает, и если опять нажать на поле поиска, то появятся результаты поиска в
        соответствии с ранее введенным запросом.
        <br />
        Если пользователь хочет кастомизировать функцию фильтрации пунктов, то он может сделать это с помощью параметра
        onFilterItem. Также пользователь может передать свои настройки в поисковый инпут с помощью inputPropsConfig
        параметра.
      </T>
      <Wrapper>
        <Header>
          <IconButton dimension="m" onClick={handleToggle}>
            <MenuOutline />
          </IconButton>
        </Header>
        <Layout>
          <Sider isOpen={open}>
            <SideMenu
              {...props}
              items={items}
              search
              inputPropsConfig={(props) => ({ ...props, placeholder: 'Search ...' })}
            />
          </Sider>
          <Main />
        </Layout>
      </Wrapper>
    </ThemeProvider>
  );
};
