import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Badge, IconButton, SideMenu, T, Tag } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

import { ReactComponent as EmailSolid } from '@admiral-ds/icons/build/system/EmailSolid.svg';

const items: SideMenuProps['items'] = [
  {
    type: 'item',
    id: '1',
    label: 'Option1',
    tag: (
      <Tag as="span" statusViaBackground kind="success">
        New
      </Tag>
    ),
    header: true,
  },
  { type: 'item', id: '2', label: 'Option2', badge: <Badge>4</Badge> },
  {
    type: 'item',
    id: '3',
    label: 'Option3',
    icon: <EmailSolid />,
  },
  { type: 'divider' },
  {
    type: 'group',
    id: '4',
    title: 'Option4',
    children: [
      { type: 'item', id: '4.1', label: 'Option4.1' },
      { type: 'item', id: '4.2', label: 'Option4.2' },
      {
        type: 'group',
        id: '4.3',
        title: 'Option4.3',
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
    icon: (
      <div>
        <EmailSolid />
      </div>
    ),
  },
  {
    type: 'item',
    id: '6',
    label: 'Option6',
    icon: (
      <div>
        <EmailSolid />
      </div>
    ),
    tag: (
      <Tag as="span" statusViaBackground kind="success">
        New
      </Tag>
    ),
    badge: <Badge>4</Badge>,
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
      <T as="div" font="Body/Body 1 Long">
        Иконки и параметр header могут быть только на первом уровне вложенности. Такое поведение можно кастомизировать с
        помощью функции renderItem.
      </T>
      <IconButton dimension="m" style={{ borderRadius: '50%' }} onClick={handleToggle}>
        <MenuOutline />
      </IconButton>
      <SideMenu style={{ width: '300px' }} {...props} isOpen={open} items={items} />
    </ThemeProvider>
  );
};
