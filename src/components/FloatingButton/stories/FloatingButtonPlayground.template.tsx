import * as React from 'react';
import { FloatingButton } from '@admiral-ds/react-ui';
import type { FloatingButtonProps } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

export const FloatingButtonPlaygroundTemplate = (props: FloatingButtonProps) => {
  return (
    <FloatingButton {...props}>
      <PersonSolid />
    </FloatingButton>
  );
};
