import * as React from 'react';
import { FloatingButton } from '@admiral-ds/react-ui';
import type { FloatingButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const MobileWrapper = styled.div`
  width: 320px;
  padding: 20px 8px 80px;
  box-sizing: border-box;
  border: ${(p) => `8px solid ${p.theme.color['Neutral/Neutral 50']}`};
  border-top-style: none;
  background-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  transform: scale(1);
`;

export const FloatingButtonMobileTemplate = ({
  themeBorderKind,
  ...props
}: FloatingButtonProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <MobileWrapper>
        <FloatingButton mobile {...props}>
          <EmailOutline />
        </FloatingButton>
      </MobileWrapper>
    </ThemeProvider>
  );
};
