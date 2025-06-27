import * as React from 'react';
import { FloatingButton, T } from '@admiral-ds/react-ui';
import type { FloatingButtonProps } from '@admiral-ds/react-ui';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import styled from 'styled-components';

const MobileWrapper = styled.div`
  width: 320px;
  padding: 20px 8px 80px;
  box-sizing: border-box;
  border: 8px solid var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  border-top-style: none;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  transform: scale(1);
`;

export const FloatingButtonMobileTemplate = (props: FloatingButtonProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        На мобильных устройствах отступ по умолчанию равен 16px от краев экрана (вместо стандартных 28px).
      </T>
      <MobileWrapper>
        <FloatingButton {...props} mobile>
          <EmailOutline />
        </FloatingButton>
      </MobileWrapper>
    </>
  );
};
