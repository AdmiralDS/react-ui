import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, ButtonBadge, ButtonGroup, T } from '@admiral-ds/react-ui';
import type { ButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const Separator = styled.div`
  height: 40px;
`;
const GroupWrapper = styled.div`
  margin-top: 20px;
`;

const appearanceMap: Array<ButtonGroupProps['appearance']> = ['primary', 'secondary', 'tertiary'];

export const ButtonGroupVariantsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">С включенной иконкой слева</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconStart_' + index}>
        <ButtonGroup {...props} appearance={appearance}>
          <Button iconStart={<StarSolid />}>Button 48</Button>
          <Button iconStart={<StarSolid />}>Button 48</Button>
          <Button iconStart={<StarSolid />}>Button 48</Button>
        </ButtonGroup>
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">С включенной иконкой справа</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconEnd_' + index}>
        <ButtonGroup {...props} appearance={appearance}>
          <Button iconEnd={<StarSolid />}>Button 48</Button>
          <Button iconEnd={<StarSolid />}>Button 48</Button>
          <Button iconEnd={<StarSolid />}>Button 48</Button>
        </ButtonGroup>
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">С бейджами</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'badge_' + index}>
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
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">Icon Only</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconOnly_' + index}>
        <ButtonGroup {...props} appearance={appearance}>
          <Button iconStart={<StarSolid />} displayAsSquare />
          <Button iconStart={<StarSolid />} displayAsSquare />
          <Button iconStart={<StarSolid />} displayAsSquare />
        </ButtonGroup>
      </GroupWrapper>
    ))}
  </ThemeProvider>
);
