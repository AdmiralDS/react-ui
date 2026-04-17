import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconButton, SideMenu, Group, Sider, T, typography, Item } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuNodeRenderProps, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { ReactComponent as EmailSolid } from '@admiral-ds/icons/build/system/EmailSolid.svg';
import { ReactComponent as CloudSolid } from '@admiral-ds/icons/build/system/CloudSolid.svg';
import { ReactComponent as PersonAddSolid } from '@admiral-ds/icons/build/system/PersonAddSolid.svg';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

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

const Wrapper = styled.a<{ $dimension: SideMenuProps['dimension']; $indentLevel: number; $selected?: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;
  gap: 8px;
  cursor: pointer;

  padding: ${({ $dimension, $indentLevel }) => {
    return $dimension === 'l'
      ? `12px 16px 12px ${16 + $indentLevel * 20}px`
      : `10px 12px 10px ${12 + $indentLevel * 20}px`;
  }};

  &:hover {
    ${({ theme, $selected }) =>
      !$selected && `background-color: var(--admiral-color-Opacity_Hover, ${theme.color['Opacity/Hover']})`};
  }

  ${({ theme, $selected }) =>
    $selected &&
    `
      background-color: var(--admiral-color-Success_Success20, ${theme.color['Success/Success 20']});
      [fill^='#'] {
        fill: var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']});
      }
  `};
`;

const WrapperIcon = styled.span<{ $dimension: SideMenuProps['dimension'] }>`
  ${({ $dimension }) => ($dimension === 'l' ? 'width: 24px; height: 24px' : 'width: 20px; height: 20px')};
  flex-shrink: 0;
`;

export const Chevron = styled(WrapperIcon)<{ $open?: boolean }>`
  transform: rotate(${({ $open }) => ($open ? 90 : 0)}deg);
  transition: transform 0.3s ease;
`;

const LeftCluster = styled.span`
  display: flex;
  min-width: 0;
  flex-grow: 1;
  gap: 12px;
`;

const Label = styled.span<{ $dimension: SideMenuProps['dimension']; $header: boolean; $selected?: boolean }>`
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ $dimension, $header }) =>
    $dimension === 'l'
      ? $header
        ? typography['Subtitle/Subtitle 2']
        : typography['Body/Body 1 Long']
      : $header
        ? typography['Subtitle/Subtitle 3']
        : typography['Body/Body 2 Long']};

  color: ${({ theme, $selected }) =>
    $selected
      ? `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']});`
      : `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']});`};
`;

const render = ({
  label,
  dimension,
  icon,
  badge,
  labelType,
  level,
  selected,
  onClick,
  tag,
  expanded,
  type,
  id,
}: SideMenuNodeRenderProps) => {
  return (
    <Wrapper
      as={type === 'group' ? 'div' : undefined}
      href={type === 'item' ? '#' : undefined}
      data-item={id}
      $dimension={dimension}
      $indentLevel={level}
      $selected={selected}
      onClick={onClick}
    >
      <LeftCluster>
        <WrapperIcon $dimension={dimension}>{icon}</WrapperIcon>
        <Label $dimension={dimension} $selected={selected} $header={labelType === 'header'}>
          {label}
        </Label>
      </LeftCluster>
      {badge}
      {tag}
      {type === 'group' && (
        <Chevron $dimension={dimension} $open={expanded}>
          <ChevronRightOutline />
        </Chevron>
      )}
    </Wrapper>
  );
};

const items: SideMenuProps['items'] = [
  {
    type: 'item',
    id: '1',
    label: 'Option1',
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    labelType: 'header',
    render,
  },
  { type: 'divider' },
  { type: 'item', id: '2', label: 'Option2', badge: { children: '4' }, render },
  {
    type: 'item',
    id: '3',
    label: 'Option3',
    icon: <EmailSolid />,
    badge: { children: '4' },
    render,
    labelType: 'header',
  },
  { type: 'divider', label: 'Menu group' },
  {
    type: 'group',
    id: '4',
    label: 'Option4 more more more label',
    icon: <CloudSolid />,
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    badge: { children: '4' },
    labelType: 'header',
    render,
    children: [
      { type: 'item', id: '4.1', label: 'Option4.1', render, labelType: 'header' },
      { type: 'item', id: '4.2', label: 'Option4.2', icon: <PersonAddSolid />, render },
      {
        type: 'group',
        id: '4.3',
        label: 'Option4.3',
        render,
        icon: <StarSolid />,
        children: [
          { type: 'item', id: '4.3.1', label: 'Option4.3.1', render, labelType: 'header' },
          { type: 'item', id: '4.3.2', label: 'Option4.3.2', render, icon: <EmailSolid /> },
        ],
      },
    ],
  },
  {
    type: 'item',
    id: '5',
    label: 'Option5',
    icon: <EmailSolid />,
    render,
  },
  {
    type: 'item',
    id: '6',
    label: 'Option6 more more more label',
    icon: <EmailSolid />,
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    badge: { children: '4' },
    render,
  },
];

//2 пример
const renderSimpleItem = ({
  label,
  icon,
  badge,
  labelType,
  level,
  selected,
  onClick,
  tag,
  expanded,
  type,
  id,
}: SideMenuNodeRenderProps) => {
  return type === 'item' ? (
    <Item
      label={label}
      id={id}
      onClick={onClick}
      level={level}
      selected={selected}
      badge={badge}
      tag={tag}
      icon={icon}
      labelType={labelType}
    />
  ) : (
    <Group
      label={label}
      id={id}
      onClick={onClick}
      level={level}
      selected={selected}
      badge={badge}
      tag={tag}
      icon={icon}
      expanded={expanded}
      labelType={labelType}
    />
  );
};

const items2: SideMenuProps['items'] = [
  {
    type: 'item',
    id: '12',
    label: 'Option1',
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    labelType: 'header',
    render: renderSimpleItem,
  },
  { type: 'divider' },
  { type: 'item', id: '22', label: 'Option2', badge: { children: '4' }, render: renderSimpleItem },
  {
    type: 'item',
    id: '32',
    label: 'Option3',
    icon: <EmailSolid />,
    badge: { children: '4' },
    render: renderSimpleItem,
    labelType: 'header',
  },
  { type: 'divider', label: 'Menu group' },
  {
    type: 'group',
    id: '42',
    label: 'Option4 more more more label',
    icon: <CloudSolid />,
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    badge: { children: '4' },
    labelType: 'header',
    render: renderSimpleItem,
    children: [
      { type: 'item', id: '4.12', label: 'Option4.1', render: renderSimpleItem, labelType: 'header' },
      { type: 'item', id: '4.22', label: 'Option4.2', icon: <PersonAddSolid />, render: renderSimpleItem },
      {
        type: 'group',
        id: '4.32',
        label: 'Option4.3',
        render: renderSimpleItem,
        icon: <StarSolid />,
        children: [
          { type: 'item', id: '4.3.12', label: 'Option4.3.1', render: renderSimpleItem, labelType: 'header' },
          { type: 'item', id: '4.3.22', label: 'Option4.3.2', render: renderSimpleItem, icon: <EmailSolid /> },
        ],
      },
    ],
  },
  {
    type: 'item',
    id: '52',
    label: 'Option5',
    icon: <EmailSolid />,
    render: renderSimpleItem,
  },
  {
    type: 'item',
    id: '62',
    label: 'Option6 more more more label',
    icon: <EmailSolid />,
    tag: { children: 'New', statusViaBackground: true, kind: 'success' },
    badge: { children: '4' },
    render: renderSimpleItem,
  },
];

export const SideMenuRenderItemTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleToggle2 = () => setOpen2(!open);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T as="div" style={{ marginBottom: '20px' }} font="Body/Body 1 Long">
        По умолчанию использовать icon и typeLabel="header" можно только на 1 уровне вложенности, с помощью функции
        render можно полностью кастомизировать item/group.
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
      <T as="div" style={{ marginBottom: '20px', marginTop: '40px' }} font="Body/Body 1 Long">
        Пример с использованием внутренних компонентов Item/Group.
      </T>
      <Header>
        <IconButton dimension="m" onClick={handleToggle2}>
          <MenuOutline />
        </IconButton>
      </Header>
      <Layout>
        <Sider isOpen={open2} width={300}>
          <SideMenu {...props} items={items2} />
        </Sider>
        <Main />
      </Layout>
    </ThemeProvider>
  );
};
