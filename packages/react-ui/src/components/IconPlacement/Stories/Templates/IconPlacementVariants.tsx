import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { CloseIconPlacementButton, T } from '@admiral-ds/react-ui';
import type { IconPlacementProps, Theme } from '@admiral-ds/react-ui';

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const IconPlacementVariantsTemplate = (props: IconPlacementProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    console.log(`Current border ${theme.shape.borderRadiusKind}`);
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
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
