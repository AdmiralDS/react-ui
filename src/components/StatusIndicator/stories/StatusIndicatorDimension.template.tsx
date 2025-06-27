import * as React from 'react';
import styled from 'styled-components';

import { StatusIndicator, T } from '@admiral-ds/react-ui';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';
import { ReactComponent as InfoSolid } from '@admiral-ds/icons/build/service/InfoSolid.svg';

const StyledText = styled(T)`
  margin: 24px 0 10px 0;
`;

export const StatusIndicatorDimensionTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Компонент регулируется только по высоте и представлен в размерах M (24px) и S (20px), ширина подстраивается под
        контент.
      </T>
      <StyledText font="Body/Body 2 Long" forwardedAs="div">
        Dimension - M
      </StyledText>
      <StatusIndicator dimension="m" text="P 16px/24 book" icon={<CheckOutline />} />
      <StyledText font="Body/Body 2 Long" forwardedAs="div">
        Dimension - S
      </StyledText>
      <StatusIndicator dimension="s" text="P 14px/20 book" icon={<InfoSolid />} />
    </>
  );
};
