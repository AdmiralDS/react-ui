import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconButton, SideMenu, typography } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const PanelContainer = styled.div<{ $dimension: React.ComponentProps<typeof SideMenu>['dimension'] }>`
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
  const example = [
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
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
      <SideMenu {...props} isOpen={open} renderTopPanel={renderPanelContent} renderBottomPanel={renderPanelContent}>
        {example}
      </SideMenu>
    </ThemeProvider>
  );
};
