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
        Кнопки представлены в четырех размерностях XL, L, M и S. Для дополнительных акцентов и более прозрачных действий
        могут применяться кнопки с иконками и текстом. Иконка может быть как перед надписью, так и после
        (iconStart/iconEnd). В некоторых случаях могут использоваться кнопки только с иконками. Как правило, это иконки
        значениях которых общепонятны и не вызывают сомнений.
      </T>
      <ButtonContainer appearance={props.appearance}>
        <Button {...props} displayAsSquare={false}>
          Button 56
        </Button>

        <Button {...props} displayAsSquare={false} iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button {...props} displayAsSquare={false} iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button {...props} iconStart={<StarSolid />} displayAsSquare />
      </ButtonContainer>
    </ThemeProvider>
  );
};
