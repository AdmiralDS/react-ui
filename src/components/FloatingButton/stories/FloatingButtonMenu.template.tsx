import * as React from 'react';
import { FloatingButton, FloatingButtonMenu } from '@admiral-ds/react-ui';
import type { FloatingButtonMenuProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';

const Layout = styled.div`
  width: 100%;
  height: 100px;
`;

export const FloatingButtonMenuTemplate = ({ icon, ...props }: FloatingButtonMenuProps) => {
  return (
    <Layout>
      <FloatingButtonMenu
        icon={icon ?? <EmailOutline />}
        // eslint-disable-next-line no-console
        onOpenChange={(isOpen) => console.log(isOpen ? 'Open menu' : 'Close menu')}
        {...props}
      >
        <FloatingButton appearance="secondary">
          <DeleteOutline />
        </FloatingButton>
        <FloatingButton appearance="secondary">
          <PrintOutline />
        </FloatingButton>
      </FloatingButtonMenu>
    </Layout>
  );
};
