import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, ButtonGroup, T } from '@admiral-ds/react-ui';
import type { ButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>`
  height: ${(p) => p.height || 20}px;
`;

export const ButtonGroupDimensionTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Dimension XL</T>
    <Separator />
    <ButtonGroup {...props}>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
    </ButtonGroup>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension L</T>
    <Separator />
    <ButtonGroup {...props} dimension="l">
      <Button>Button 48</Button>
      <Button>Button 48</Button>
      <Button>Button 48</Button>
    </ButtonGroup>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension M</T>
    <Separator />
    <ButtonGroup {...props} dimension="m">
      <Button>Button 40</Button>
      <Button>Button 40</Button>
      <Button>Button 40</Button>
    </ButtonGroup>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension S</T>
    <Separator />
    <ButtonGroup {...props} dimension="s">
      <Button>Button 32</Button>
      <Button>Button 32</Button>
      <Button>Button 32</Button>
    </ButtonGroup>
  </ThemeProvider>
);
