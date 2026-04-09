import { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { IconButton, SideMenu, Sider, T, typography } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as EmailSolid } from '@admiral-ds/icons/build/system/EmailSolid.svg';

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
  min-width: calc(100% - 300px);
  min-height: 200px;
  flex: 1 1 auto;
  background-color: ${(p) => p.theme.color['Success/Success 10']};
`;

const tooltipCssMixin = css`
  ${typography['Body/Body 1 Long']}
  color: var(--admiral-color-Success_Success40, ${(p) => p.theme.color['Success/Success 40']});
`;

const items: SideMenuProps['items'] = [
  {
    type: 'item',
    id: '1',
    label: 'Option1',
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    typeLabel: 'header',
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
    label: 'Option4 more more more label',
    icon: <EmailSolid />,
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    badge: { children: '4' },
    typeLabel: 'header',
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
    label: 'Option6 more more more label',
    icon: <EmailSolid />,
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    badge: { children: '4' },
  },
];

export const SideMenuWithTooltipTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleToggle2 = () => setOpen2(!open2);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T as="div" style={{ marginBottom: '20px' }} font="Body/Body 1 Long">
        По умолчанию при переполнения пунктов меню, таких как item или group, появляется Tooltip с подписью названия
        пункта. Опционально это можно отключить с помощью параметра showTooltip={'{false}'}
      </T>
      <Header>
        <IconButton dimension="m" onClick={handleToggle}>
          <MenuOutline />
        </IconButton>
      </Header>
      <Layout>
        <Sider isOpen={open} width={300}>
          <SideMenu {...props} items={items} />
        </Sider>
        <Main />
      </Layout>

      <T as="div" font="Body/Body 1 Long" style={{ marginTop: '40px', marginBottom: '20px' }}>
        При использовании миксина для кастомизации пунктов меню, кастом применяется для всех Tooltip.
      </T>
      <Header>
        <IconButton dimension="m" onClick={handleToggle2}>
          <MenuOutline />
        </IconButton>
      </Header>
      <Layout>
        <Sider isOpen={open2} width={300}>
          <SideMenu {...props} items={items} tooltipCssMixin={tooltipCssMixin} />
        </Sider>
        <Main />
      </Layout>
    </ThemeProvider>
  );
};
