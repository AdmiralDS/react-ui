import * as React from 'react';
import { FloatingButton, FloatingButtonMenu } from '@admiral-ds/react-ui';
import type { FloatingButtonMenuProps } from '@admiral-ds/react-ui';

import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';

export const FloatingButtonMenuTemplate = (props: FloatingButtonMenuProps) => {
  return (
    <FloatingButtonMenu icon={<EmailOutline />} dimension="xl" {...props}>
      <FloatingButton>
        <DeleteOutline />
      </FloatingButton>
      <FloatingButton>
        <PrintOutline />
      </FloatingButton>
    </FloatingButtonMenu>
  );
};
