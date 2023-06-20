import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, T } from '@admiral-ds/react-ui';
import type { ButtonProps, ButtonAppearance, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const ButtonContainer = styled.div<{ appearance?: ButtonAppearance }>`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  ${(p) => p.appearance === 'white' && 'background-color: #2B313B;'};
`;

export const ButtonPlaygroundTemplate = (props: ButtonProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <T font="Body/Body 1 Long" as="div">
        В связи с корректировкой внутренних отступов при наличии иконок рекомендуется их передавать через props "icon" и
        "iconPlace" = "left" | "right".
      </T>
      <ButtonContainer appearance={props.appearance}>
        <Button {...props} displayAsSquare={false}>
          Button 56
        </Button>

        <Button {...props} displayAsSquare={false} icon={<StarSolid />}>
          Button 56
        </Button>

        <Button {...props} displayAsSquare={false} icon={<StarSolid />} iconPlace="right">
          Button 56
        </Button>

        <Button {...props} icon={<StarSolid />} displayAsSquare />
      </ButtonContainer>
    </ThemeProvider>
  );
};
