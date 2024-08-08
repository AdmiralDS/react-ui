import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, ButtonGroup } from '@admiral-ds/react-ui';
import type { ButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const Separator = styled.div<{ height?: number }>`
  height: ${(p) => p.height || 20}px;
`;

export const ButtonGroupAppearanceTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <ButtonGroup {...props}>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
      <Button>Button 56</Button>
    </ButtonGroup>
    <Separator />
    <ButtonGroup {...props} appearance="secondary">
      <Button>Button 56</Button>
      <Button iconEnd={<StarSolid />}>Button 56</Button>
      <Button>Button 56</Button>
    </ButtonGroup>
    <Separator />
    <ButtonGroup {...props} appearance="tertiary">
      <Button>Button 56</Button>
      <Button iconEnd={<StarSolid />}>Button 56</Button>
      <Button>Button 56</Button>
    </ButtonGroup>
  </ThemeProvider>
);
