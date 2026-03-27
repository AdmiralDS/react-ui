import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconButton, SideMenu, typography } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as EmailSolid } from '@admiral-ds/icons/build/system/EmailSolid.svg';

// TODO: подумать над использованием MenuActionsPanel или созданием подобного компонента
const PanelContainer = styled.div<{ $dimension: SideMenuProps['dimension'] }>`
  ${({ $dimension }) =>
    $dimension === 'l'
      ? `padding: 12px 16px; height: 48px; ${typography['Body/Body 1 Long']}`
      : `padding: 10px 12px; height: 40px; ${typography['Body/Body 2 Long']}`};

  box-sizing: border-box;
`;

const Content = styled.div`
  width: 100px;
  height: 100%;
  background-color: #c3f4d3;
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
    { type: 'item', id: '3', label: 'Option3', icon: <EmailSolid /> },
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
    <PanelContainer $dimension={props.dimension}>
      <Content />
    </PanelContainer>
  );

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <IconButton dimension="m" style={{ borderRadius: '50%' }} onClick={handleToggle}>
        <MenuOutline />
      </IconButton>
      <SideMenu
        {...props}
        isOpen={open}
        items={items}
        renderTopPanel={renderPanelContent}
        renderBottomPanel={renderPanelContent}
      />
    </ThemeProvider>
  );
};
