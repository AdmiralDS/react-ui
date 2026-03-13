import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { IconButton, SideMenu } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

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

  const topPanelContent = ['TextTop'];
  const bottomPanelContent = ['TextBottom'];

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <IconButton dimension="m" style={{ borderRadius: '50%' }} onClick={handleToggle}>
        <MenuOutline />
      </IconButton>
      <SideMenu {...props} isOpen={open} topPanelContent={topPanelContent} bottomPanelContent={bottomPanelContent}>
        {example}
      </SideMenu>
    </ThemeProvider>
  );
};
