import { useState, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { SideMenu, Sider, SideMenuActionsPanel, IconButton, typography, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps, SideMenuPanelProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { ReactComponent as ChevronLeftOutline } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { version } from '../../../../package.json';

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
const TopPanel = styled.span<{ $dimension: SideMenuProps['dimension'] }>`
  ${(p) => (p.$dimension === 'l' ? typography['Subtitle/Subtitle 2'] : typography['Subtitle/Subtitle 3'])}
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
`;
const Action = styled(IconButton)<{ dimension: SideMenuProps['dimension'] }>`
  && {
    width: 100%;
    svg {
      height: ${(p) => (p.dimension === 'l' ? 24 : 20)}px;
      width: ${(p) => (p.dimension === 'l' ? 24 : 20)}px;
    }
  }
  background-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
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

export const SideMenuTopBottomPanelTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const renderFixedPanel = useCallback(
    ({ dimension }: SideMenuPanelProps) => (
      <SideMenuActionsPanel dimension={dimension}>
        <Content $dimension={dimension} />
      </SideMenuActionsPanel>
    ),
    [],
  );

  const renderTopPanel = useCallback(
    ({ dimension }: SideMenuPanelProps) => (
      <SideMenuActionsPanel dimension={dimension}>
        <TopPanel $dimension={dimension}>Admiral v{version}</TopPanel>
      </SideMenuActionsPanel>
    ),
    [],
  );

  const renderBottomPanel = useCallback(
    ({ dimension }: SideMenuPanelProps) => (
      <Action dimension={dimension} onClick={() => setOpen2(false)}>
        <ChevronLeftOutline />
      </Action>
    ),
    [],
  );

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T as="div" font="Body/Body 1 Long" style={{ marginBottom: '20px' }}>
        В компонент SideMenu можно добавлять свой кастомный контент сверху или снизу меню с помощью колбеков
        renderTopPanel и renderBottomPanel. Размер кастомного контента не регламентирован. Обращайте внимание на
        отступы: по краям кастомной области следует делать такие же отступы, как и у обычных пунктов. Для этого вы
        можете использовать вспомогательный компонент SideMenuActionsPanel, в стилях которого уже прописаны необходимые
        значения.
      </T>
      <Section>
        <Header>
          <IconButton dimension="m" onClick={() => setOpen((open) => !open)}>
            <MenuOutline />
          </IconButton>
        </Header>
        <Layout>
          <Sider isOpen={open}>
            <SideMenu {...props} items={items} renderTopPanel={renderFixedPanel} renderBottomPanel={renderFixedPanel} />
          </Sider>
          <Main />
        </Layout>
      </Section>
      <T as="div" font="Body/Body 1 Long" style={{ marginBottom: '20px' }}>
        В примере ниже реализован кейс, когда кнопка закрытия SideMenu находится внутри самого компонента в его нижней
        кастомной области.
      </T>
      <Section>
        <Layout>
          <Sider isOpen={open2} appearance="secondary">
            <SideMenu {...props} items={items} renderTopPanel={renderTopPanel} renderBottomPanel={renderBottomPanel} />
          </Sider>
          <Main>
            {!open2 && (
              <IconButton dimension="m" onClick={() => setOpen2(true)}>
                <MenuOutline />
              </IconButton>
            )}
          </Main>
        </Layout>
      </Section>
    </ThemeProvider>
  );
};
