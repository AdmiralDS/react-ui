import { useState } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { IconButton, SideMenu, SideMenuItem, Sider, T, typography } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuItemRenderProps, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { ReactComponent as EmailSolid } from '@admiral-ds/icons/build/system/EmailSolid.svg';
import { ReactComponent as CloudSolid } from '@admiral-ds/icons/build/system/CloudSolid.svg';
import { ReactComponent as PersonAddSolid } from '@admiral-ds/icons/build/system/PersonAddSolid.svg';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import { Link, MemoryRouter } from 'react-router-dom';

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
`;

const Main = styled.main`
  min-height: 100%;
  min-width: calc(100% - 300px);
  flex: 1 1 auto;
  background-color: ${(p) => p.theme.color['Success/Success 10']};
`;

const ItemWrapper = styled.div<{ $dimension: SideMenuProps['dimension']; $indentLevel: number; $selected?: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
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
      ${LeftCluster} *[fill^='#'] {
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

const Divider = styled.div<{ $dimension: SideMenuProps['dimension'] }>`
  display: flex;
  border: 1px dashed var(--admiral-color-Neutral_Neutral50, ${({ theme }) => theme.color['Neutral/Neutral 50']});
  margin: ${({ $dimension }) => ($dimension === 'l' ? '8px 16px 7px 16px' : '6px 12px 5px 12px')};
`;

const renderCustomItem = ({
  label,
  labelType,
  dimension,
  icon,
  level,
  selected,
  expanded,
  type,
}: SideMenuItemRenderProps) => {
  return (
    <ItemWrapper $dimension={dimension} $indentLevel={level} $selected={selected}>
      <LeftCluster>
        <WrapperIcon $dimension={dimension}>{icon}</WrapperIcon>
        <Label $dimension={dimension} $selected={selected} $header={labelType === 'header'}>
          {label}
        </Label>
      </LeftCluster>
      {type === 'group' && (
        <Chevron $dimension={dimension} $open={expanded}>
          <ChevronRightOutline />
        </Chevron>
      )}
    </ItemWrapper>
  );
};

const items: SideMenuProps['items'] = [
  { type: 'item', id: '1', label: 'Option1', labelType: 'header', render: renderCustomItem },
  { type: 'divider' },
  { type: 'item', id: '2', label: 'Option2', render: renderCustomItem },
  { type: 'item', id: '3', label: 'Option3', icon: <EmailSolid />, labelType: 'header', render: renderCustomItem },
  { type: 'divider' },
  {
    type: 'group',
    id: '4',
    label: 'Option4',
    icon: <CloudSolid />,
    labelType: 'header',
    render: renderCustomItem,
    children: [
      { type: 'item', id: '4.1', label: 'Option4.1', labelType: 'header', render: renderCustomItem },
      { type: 'item', id: '4.2', label: 'Option4.2', icon: <PersonAddSolid />, render: renderCustomItem },
      {
        type: 'group',
        id: '4.3',
        label: 'Option4.3',
        icon: <StarSolid />,
        render: renderCustomItem,
        children: [
          { type: 'item', id: '4.3.1', label: 'Option4.3.1', render: renderCustomItem, labelType: 'header' },
          { type: 'item', id: '4.3.2', label: 'Option4.3.2', render: renderCustomItem, icon: <EmailSolid /> },
        ],
      },
    ],
  },
  { type: 'item', id: '5', label: 'Option5', icon: <EmailSolid />, render: renderCustomItem },
  { type: 'item', id: '6', label: 'Option6', icon: <EmailSolid />, render: renderCustomItem },
];

const anchorItemMixin = css<{ $selected?: boolean }>`
  text-decoration: none;
  ${(p) =>
    p.$selected &&
    `background-color: var(--admiral-color-Purple_Purple20, ${p.theme.color['Purple/Purple 20']});     
     && *[fill^='#'] {
        fill: var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']});
      }
    `};
`;
const renderAnchorItem = ({ id, ...props }: SideMenuItemRenderProps) => {
  return <SideMenuItem as={Link} to={`/page${id}`} itemCssMixin={anchorItemMixin} {...props} />;
};

const items2: SideMenuProps['items'] = [
  { type: 'item', id: '12', label: 'Option1', labelType: 'header', render: renderAnchorItem },
  { type: 'divider' },
  { type: 'item', id: '22', label: 'Option2', badge: { children: '4' }, render: renderAnchorItem },
  { type: 'item', id: '32', label: 'Option3', icon: <EmailSolid />, labelType: 'header', render: renderAnchorItem },
  { type: 'divider', label: 'Menu group' },
  {
    type: 'group',
    id: '42',
    label: 'Option4 more more more label',
    icon: <CloudSolid />,
    labelType: 'header',
    render: renderAnchorItem,
    children: [
      { type: 'item', id: '4.12', label: 'Option4.1', render: renderAnchorItem, labelType: 'header' },
      { type: 'item', id: '4.22', label: 'Option4.2', icon: <PersonAddSolid />, render: renderAnchorItem },
      {
        type: 'group',
        id: '4.32',
        label: 'Option4.3',
        render: renderAnchorItem,
        icon: <StarSolid />,
        children: [
          { type: 'item', id: '4.3.12', label: 'Option4.3.1', render: renderAnchorItem, labelType: 'header' },
          { type: 'item', id: '4.3.22', label: 'Option4.3.2', render: renderAnchorItem, icon: <EmailSolid /> },
        ],
      },
    ],
  },
  { type: 'item', id: '52', label: 'Option5', icon: <EmailSolid />, render: renderAnchorItem },
  { type: 'item', id: '62', label: 'Option6 more more more label', icon: <EmailSolid />, render: renderAnchorItem },
];

export const SideMenuRenderItemTemplate = ({
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
        При определении массива пунктов меню, для каждого их них можно задать функцию render - специальный колбек для
        кастомизации пункта меню. Например, с помощью этой функции можно снять ограничение на использование icon и
        labelType="header" только на первом уровне вложенности, как в примере ниже.
      </T>
      <Section>
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
      </Section>
      <T as="div" style={{ marginBottom: '20px' }} font="Body/Body 1 Long">
        Если пользователю необходимо внести минимальные корректировки в стили пунктов, то целесообразно будет
        использовать готовый компонент SideMenuItem, предоставляемый нашей библиотекой и по умолчанию используемый в
        составе SideMenu. Данный компонент является полиморфным, а значит пользователь может менять его тип. Например,
        ниже продемонстрировано, как в качестве пункта меню использовать компонент Link из react-router-dom. Также
        SideMenuItem предоставляет миксин itemCssMixin для простоты кастомизации стилей.
      </T>
      <Section>
        <Header>
          <IconButton dimension="m" onClick={handleToggle2}>
            <MenuOutline />
          </IconButton>
        </Header>
        <Layout>
          <Sider isOpen={open2} width={300}>
            <MemoryRouter>
              <SideMenu {...props} items={items2} />
            </MemoryRouter>
          </Sider>
          <Main />
        </Layout>
      </Section>
    </ThemeProvider>
  );
};
