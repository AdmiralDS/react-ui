import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, ButtonBadge, ButtonGroup, T } from '@admiral-ds/react-ui';
import type { ButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const Separator = styled.div<{ height?: number }>`
  height: ${(p) => p.height || 20}px;
`;

const appearanceMap: Array<ButtonGroupProps['appearance']> = ['primary', 'secondary', 'tertiary'];

export const ButtonGroupVariantsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">С включенной иконкой слева</T>
    {appearanceMap.map((appearance) => (
      <>
        <Separator />
        <ButtonGroup {...props} appearance={appearance}>
          <Button iconStart={<StarSolid />}>Button 48</Button>
          <Button iconStart={<StarSolid />}>Button 48</Button>
          <Button iconStart={<StarSolid />}>Button 48</Button>
        </ButtonGroup>
      </>
    ))}
    <Separator height={40} />
    <T font="Body/Body 1 Long">С включенной иконкой справа</T>
    {appearanceMap.map((appearance) => (
      <>
        <Separator />
        <ButtonGroup {...props} appearance={appearance}>
          <Button iconEnd={<StarSolid />}>Button 48</Button>
          <Button iconEnd={<StarSolid />}>Button 48</Button>
          <Button iconEnd={<StarSolid />}>Button 48</Button>
        </ButtonGroup>
      </>
    ))}
    <Separator height={40} />
    <T font="Body/Body 1 Long">С бейджами</T>
    {appearanceMap.map((appearance) => (
      <>
        <Separator />
        <ButtonGroup {...props} appearance={appearance}>
          <Button displayAsSquare={false}>
            Button
            <ButtonBadge appearance={appearance}>5</ButtonBadge>
          </Button>
          <Button displayAsSquare={false}>
            Button
            <ButtonBadge appearance={appearance}>5</ButtonBadge>
          </Button>
          <Button displayAsSquare={false}>
            Button
            <ButtonBadge appearance={appearance}>5</ButtonBadge>
          </Button>
        </ButtonGroup>
      </>
    ))}
    <Separator height={40} />
    <T font="Body/Body 1 Long">Icon Only</T>
    {appearanceMap.map((appearance) => (
      <>
        <Separator />
        <ButtonGroup {...props} appearance={appearance}>
          <Button iconStart={<StarSolid />} displayAsSquare />
          <Button iconStart={<StarSolid />} displayAsSquare />
          <Button iconStart={<StarSolid />} displayAsSquare />
        </ButtonGroup>
      </>
    ))}
  </ThemeProvider>
);
