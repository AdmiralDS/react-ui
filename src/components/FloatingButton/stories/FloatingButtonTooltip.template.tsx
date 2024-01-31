import * as React from 'react';
import { FloatingButton } from '@admiral-ds/react-ui';
import type { FloatingButtonProps } from '@admiral-ds/react-ui';
import { ReactComponent as ChatOutline } from '@admiral-ds/icons/build/category/ChatOutline.svg';

export const FloatingButtonTooltipTemplate = (props: FloatingButtonProps) => {
  return (
    <FloatingButton tooltip="Написать в чат" {...props}>
      <ChatOutline />
    </FloatingButton>
  );
};
