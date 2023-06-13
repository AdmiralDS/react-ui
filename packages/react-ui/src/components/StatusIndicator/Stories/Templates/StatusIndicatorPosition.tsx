import * as React from 'react';
import styled, { css } from 'styled-components';

import { StatusIndicator, T } from '@admiral-ds/react-ui';
import { ReactComponent as InfoSolid } from '@admiral-ds/icons/build/service/InfoSolid.svg';
import { ReactComponent as ErrorSolid } from '@admiral-ds/icons/build/service/ErrorSolid.svg';

const StyledText = styled(T)`
  margin: 10px 0;
`;

const OrangeColor = css`
  color: ${(p) => p.theme.color['Warning/Warning 50 Main']};
  > div {
    svg {
      path {
        fill: ${(p) => p.theme.color['Warning/Warning 50 Main']};
      }
    }
  }
`;

export const StatusIndicatorPositionTemplate = () => {
  return (
    <>
      <StyledText font="Body/Body 1 Long" as="div">
        Кастомное цветовое отображение статуса
      </StyledText>
      <StatusIndicator cssMixin={OrangeColor} dimension="m" text="P 16px/24 book" icon={<InfoSolid />} />
      <StyledText font="Body/Body 1 Long" as="div">
        Позиционирование иконки индикатора справа
      </StyledText>
      <StatusIndicator dimension="m" text="P 16px/24 book" displayRight={false} icon={<ErrorSolid />} />
      <StyledText font="Body/Body 1 Long" as="div">
        Без иконки
      </StyledText>
      <StatusIndicator dimension="m" text="P 16px/24 book" />
    </>
  );
};
