import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { IconButton, SideMenu, Sider, T } from '@admiral-ds/react-ui';
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
`;

const Main = styled.main`
  min-height: 100%;
  min-width: calc(100% - 300px);
  flex: 1 1 auto;
  background-color: ${(p) => p.theme.color['Success/Success 10']};
`;

const items: SideMenuProps['items'] = [
  {
    type: 'item',
    id: '1',
    label: 'Option1',
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },

    labelType: 'header',
  },
  { type: 'divider' },
  { type: 'item', id: '2', label: 'Option2', badge: { children: '4' } },
  {
    type: 'item',
    id: '3',
    label: 'Option3',
    icon: <EmailSolid />,
  },
  { type: 'divider', label: 'Menu group' },
  {
    type: 'group',
    id: '4',
    label: 'Option4',
    icon: <EmailSolid />,
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    badge: { children: '4' },
    labelType: 'header',
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
  {
    type: 'item',
    id: '5',
    label: 'Option5',
    icon: <EmailSolid />,
  },
  {
    type: 'item',
    id: '6',
    label: 'Option6',
    icon: <EmailSolid />,
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    badge: { children: '4' },
  },
];

export const SideMenuControlledUncontrolledTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selectedItem, setsSelectedItem] = useState<string>('2');
  const [listOpenGroups, setListOpenGroups] = useState<string[]>(['4']);

  const handleToggle = () => setOpen(!open);
  const handleToggle2 = () => setOpen2(!open2);

  const onSelectItem = (id: string) => {
    //eslint-disable-next-line no-console
    console.log('selectedItem:', id);
    setsSelectedItem(id);
  };

  const onOpenGroupsChange = (openGroups: string[]) => {
    //eslint-disable-next-line no-console
    console.log('openGroups:', openGroups);
    setListOpenGroups(openGroups);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T as="div" font="Body/Body 1 Long" style={{ marginBottom: '20px' }}>
        Контролируемое состояние.
      </T>
      <Wrapper>
        <Header>
          <IconButton dimension="m" onClick={handleToggle2}>
            <MenuOutline />
          </IconButton>
        </Header>
        <Layout>
          <Sider isOpen={open2} width={300}>
            <SideMenu
              {...props}
              selectedItem={selectedItem}
              onSelectItem={onSelectItem}
              openGroups={listOpenGroups}
              onOpenGroupsChange={onOpenGroupsChange}
              items={items}
            />
          </Sider>
          <Main />
        </Layout>
      </Wrapper>
      <T as="div" font="Body/Body 1 Long" style={{ margin: '40px 0 20px 0' }}>
        Неконтролируемое состояние.
      </T>
      <Wrapper>
        <Header>
          <IconButton dimension="m" onClick={handleToggle}>
            <MenuOutline />
          </IconButton>
        </Header>
        <Layout>
          <Sider isOpen={open} width={300}>
            <SideMenu {...props} defaultSelectedItem="4.1" defaultOpenGroups={['4.3']} items={items} />
          </Sider>
          <Main />
        </Layout>
      </Wrapper>
    </ThemeProvider>
  );
};
