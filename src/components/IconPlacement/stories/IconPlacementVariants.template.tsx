import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { CloseIconPlacementButton, T } from '@admiral-ds/react-ui';
import type { IconPlacementProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const IconPlacementVariantsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconPlacementProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Примеры использования:
        </T>
        <T font="Body/Body 1 Long" as="div">
          иконка Close в компонентах Modal, Toast, Hint и др.
        </T>
        <CloseIconPlacementButton {...props} />
      </WrapperVertical>
    </ThemeProvider>
  );
};
