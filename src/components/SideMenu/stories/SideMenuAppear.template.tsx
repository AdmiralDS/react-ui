import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconButton, SideMenu, Drawer, Sider } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as EmailSolid } from '@admiral-ds/icons/build/system/EmailSolid.svg';
import { useMediaQuery } from '#src/components/common/hooks/useMediaQuery';

const Header = styled.header`
  position: sticky;
  top: 0;
  height: 40px;
  width: 100%;
  background-color: ${(p) => p.theme.color['Opacity/Neutral 8']};
`;
const Layout = styled.div`
  display: flex;
`;

const Main = styled.main`
  min-width: calc(100% - 200px);
  min-height: 200px;
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

export const SideMenuAppearTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const isMobile = useMediaQuery('(max-width: 700px)');
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSider, setOpenSider] = useState(true);

  const handleToggle = () => {
    isMobile ? setOpenDrawer(!openDrawer) : setOpenSider(!openSider);
  };

  useEffect(() => {
    if (isMobile) setOpenSider(false);
    if (!isMobile) setOpenSider(true);
  }, [isMobile]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Header>
        <IconButton dimension="m" onClick={handleToggle}>
          <MenuOutline />
        </IconButton>
      </Header>
      <Layout>
        {isMobile && (
          <Drawer
            isOpen={openDrawer}
            onClose={() => setOpenDrawer(false)}
            position="left"
            displayCloseIcon={false}
            closeOnBackdropClick
            closeOnEscapeKeyDown
          >
            <SideMenu {...props} items={items} />
          </Drawer>
        )}
        <Sider isOpen={openSider} width={200}>
          <SideMenu {...props} items={items} />
        </Sider>

        <Main />
      </Layout>
    </ThemeProvider>
  );
};
