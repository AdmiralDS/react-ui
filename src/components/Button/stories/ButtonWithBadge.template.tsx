import styled, { ThemeProvider } from 'styled-components';

import { Button, ButtonBadge, T } from '@admiral-ds/react-ui';
import type { ButtonProps, ButtonAppearance, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ButtonContainer = styled.div<{ $appearance?: ButtonAppearance }>`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  ${(p) => p.$appearance === 'white' && 'background-color: #2B313B;'};
`;

export const ButtonWithBadgeTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div">
        В кнопки Primary, Secondary и Ghost можно добавлять компонент Badge
      </T>
      <ButtonContainer $appearance={props.appearance}>
        <Button {...props} appearance="primary" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="primary" disabled={props.disabled || props.displayAsDisabled}>
            5
          </ButtonBadge>
        </Button>

        <Button {...props} appearance="secondary" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="secondary" disabled={props.disabled || props.displayAsDisabled}>
            5
          </ButtonBadge>
        </Button>

        <Button {...props} appearance="tertiary" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="tertiary" disabled={props.disabled || props.displayAsDisabled}>
            5
          </ButtonBadge>
        </Button>

        <Button {...props} appearance="ghost" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="ghost" disabled={props.disabled || props.displayAsDisabled}>
            5
          </ButtonBadge>
        </Button>
      </ButtonContainer>
    </ThemeProvider>
  );
};
