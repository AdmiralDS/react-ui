import { useState, useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { IconButton, SideMenu, Drawer, Sider, useMediaQuery } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { ReactComponent as EmailSolid } from '@admiral-ds/icons/build/system/EmailSolid.svg';

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
  /** Добавляю transform и overflow для того, чтобы Drawer 
  позиционировался относительно Layout и не был виден за его пределами */
  transform: translate3d(0, 0, 0);
  overflow: hidden;
`;

const Main = styled.main`
  min-height: 100%;
  min-width: calc(100% - 200px);
  flex: 1 1 auto;
  background-color: ${(p) => p.theme.color['Success/Success 10']};
`;

const items: SideMenuProps['items'] = [
  { type: 'item', id: '1', label: 'Option1' },
  { type: 'item', id: '2', label: 'Option2', icon: <EmailSolid /> },
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

export const SideMenuDrawerTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const isMobile = useMediaQuery('(max-width: 700px)');
  const layoutRef = useRef<HTMLDivElement>(null);

  const [openSider, setOpenSider] = useState(!isMobile);
  const [openDrawer, setOpenDrawer] = useState(false);

  /** Использую controlled state, чтобы синхронизировать меню в Sider и в Drawer */
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
  const [openMenus, setOpenMenus] = useState<Array<string>>([]);

  const handleToggle = () => {
    setOpenSider((open) => !open);
    setOpenDrawer((open) => !open);
  };

  useEffect(() => {
    if (isMobile) {
      setOpenSider(false);
    }
    if (!isMobile) {
      setOpenSider(true);
      setOpenDrawer(false);
    }
  }, [isMobile]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <Header>
          <IconButton dimension="m" onClick={handleToggle}>
            <MenuOutline />
          </IconButton>
        </Header>
        <Layout ref={layoutRef}>
          <Drawer
            isOpen={openDrawer && isMobile}
            onClose={() => setOpenDrawer(false)}
            position="left"
            displayCloseIcon={false}
            closeOnBackdropClick
            closeOnEscapeKeyDown
            container={layoutRef?.current as HTMLElement}
            /** Ширину нужно определить, чтобы при открытии групп
             * в меню не было скачков в размерах компонента */
            style={{ width: '200px' }}
          >
            <SideMenu
              {...props}
              items={items}
              selectedItem={selectedItem}
              onSelectItem={(id: string) => setSelectedItem(id)}
              openMenus={openMenus}
              onOpenMenusChange={(menus: Array<string>) => setOpenMenus(menus)}
            />
          </Drawer>
          <Sider isOpen={openSider && !isMobile} width={200}>
            <SideMenu
              {...props}
              items={items}
              selectedItem={selectedItem}
              onSelectItem={(id: string) => setSelectedItem(id)}
              openMenus={openMenus}
              onOpenMenusChange={(menus: Array<string>) => setOpenMenus(menus)}
            />
          </Sider>
          <Main />
        </Layout>
      </Wrapper>
    </ThemeProvider>
  );
};
