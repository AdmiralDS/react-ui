import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { FloatingButton, FloatingButtonMenu, Toggle } from '@admiral-ds/react-ui';
import type { FloatingButtonMenuProps } from '@admiral-ds/react-ui';

import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';

export const FloatingButtonMenuControlledTemplate = (props: FloatingButtonMenuProps) => {
  const [open, setOpen] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOpen(event.currentTarget.checked);
  };

  return (
    <>
      <FloatingButtonMenu
        icon={<EmailOutline />}
        dimension="xl"
        isOpen={open}
        onOpenChange={(isOpen) => console.log(isOpen ? 'open' : 'close')}
        {...props}
      >
        <FloatingButton>
          <DeleteOutline />
        </FloatingButton>
        <FloatingButton>
          <PrintOutline />
        </FloatingButton>
      </FloatingButtonMenu>
      <Toggle onChange={onChange}>Toggle menu</Toggle>
    </>
  );
};
