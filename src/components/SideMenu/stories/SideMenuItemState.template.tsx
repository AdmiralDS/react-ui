import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Badge, IconButton, SideMenu, Tag } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

import { ReactComponent as EmailSolid } from '@admiral-ds/icons/build/system/EmailSolid.svg';

const items: SideMenuProps['items'] = [
  {
    type: 'item',
    id: '1',
    label: 'Option1',
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
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
    label: 'Option6asdsadasdaasdasdasdas',
    icon: <EmailSolid />,
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    badge: { children: '4' },
  },
];

export const SideMenuItemStateTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <IconButton dimension="m" style={{ borderRadius: '50%' }} onClick={handleToggle}>
        <MenuOutline />
      </IconButton>
      <SideMenu style={{ maxWidth: '300px' }} {...props} isOpen={open} items={items} />
    </ThemeProvider>
  );
};
