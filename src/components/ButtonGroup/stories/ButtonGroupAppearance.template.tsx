import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, ButtonGroup, T } from '@admiral-ds/react-ui';
import type { ButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>`
  height: ${(p) => p.height || 20}px;
`;

export const ButtonGroupAppearanceTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Primary</T>
    <Separator />
    <ButtonGroup {...props}>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
    </ButtonGroup>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Secondary</T>
    <Separator />
    <ButtonGroup {...props} appearance="secondary">
      <Button>Button 56</Button>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
    </ButtonGroup>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Tertiary</T>
    <Separator />
    <ButtonGroup {...props} appearance="tertiary">
      <Button>Button 56</Button>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
    </ButtonGroup>
  </ThemeProvider>
);
