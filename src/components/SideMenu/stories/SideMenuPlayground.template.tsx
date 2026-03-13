import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { IconButton, SideMenu } from '@admiral-ds/react-ui';
import type { BorderRadiusType, SideMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MenuOutline } from '@admiral-ds/icons/build/service/MenuOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const SideMenuPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SideMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const example = ['Text1', 'Text2', 'Text3', 'Text4', 'Text5', 'Text6', 'Text7', 'Text8', 'Text9'];

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <IconButton dimension="m" style={{ borderRadius: '50%' }} onClick={handleToggle}>
        <MenuOutline />
      </IconButton>
      <SideMenu {...props} isOpen={open}>
        {example}
      </SideMenu>
    </ThemeProvider>
  );
};
