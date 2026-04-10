import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { IconButton, SideMenu, Sider, MenuActionsPanel, typography } from '@admiral-ds/react-ui';
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

const Content = styled.div<{ $dimension: SideMenuProps['dimension'] }>`
  width: 100%;
  height: ${(p) => (p.$dimension === 'l' ? 24 : 20)}px;
  ${(p) => (p.$dimension === 'l' ? typography['Body/Body 1 Long'] : typography['Body/Body 2 Long'])}
  background-color: ${(p) => p.theme.color['Success/Success 20']};
`;

export const SideMenuTopBottomPanelTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

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
    { type: 'item', id: '5', label: 'Option5' },
    { type: 'item', id: '6', label: 'Option6' },
    { type: 'item', id: '7', label: 'Option7' },
    { type: 'item', id: '8', label: 'Option8' },
    { type: 'item', id: '9', label: 'Option9' },
    { type: 'item', id: '10', label: 'Option10' },
    { type: 'item', id: '11', label: 'Option11' },
    { type: 'item', id: '12', label: 'Option12' },
    { type: 'item', id: '13', label: 'Option13' },
    { type: 'item', id: '14', label: 'Option14' },
    { type: 'item', id: '15', label: 'Option15' },
    { type: 'item', id: '16', label: 'Option16' },
    { type: 'item', id: '17', label: 'Option17' },
    { type: 'item', id: '18', label: 'Option18' },
    { type: 'item', id: '19', label: 'Option19' },
    { type: 'item', id: '20', label: 'Option20' },
    { type: 'item', id: '21', label: 'Option21' },
    { type: 'item', id: '22', label: 'Option22' },
  ];

  const renderPanelContent = () => (
    <MenuActionsPanel dimension={props.dimension == 'l' ? 'm' : 's'}>
      <Content $dimension={props.dimension} />
    </MenuActionsPanel>
  );

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
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
              renderTopPanel={renderPanelContent}
              renderBottomPanel={renderPanelContent}
            />
          </Sider>
          <Main />
        </Layout>
      </Wrapper>
    </ThemeProvider>
  );
};
