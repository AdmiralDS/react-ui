import * as React from 'react';
import { FloatingButton } from '@admiral-ds/react-ui';
import type { FloatingButtonProps } from '@admiral-ds/react-ui';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';

export const FloatingButtonPositionTemplate = (props: FloatingButtonProps) => {
  return (
    <>
      <FloatingButton {...props}>
        <EmailOutline />
      </FloatingButton>
      <FloatingButton style={{ insetBlockEnd: '88px' }} {...props}>
        <EmailOutline />
      </FloatingButton>
    </>
  );
};
