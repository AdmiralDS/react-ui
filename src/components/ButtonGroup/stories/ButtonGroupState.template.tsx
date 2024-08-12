import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, ButtonGroup, T } from '@admiral-ds/react-ui';
import type { ButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div`
  height: 40px;
`;
const GroupWrapper = styled.div`
  margin-top: 20px;
`;

const appearanceMap: Array<ButtonGroupProps['appearance']> = ['primary', 'secondary', 'tertiary'];

export const ButtonGroupStateTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Disable (вторая внопка)</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'disable_' + index}>
        <ButtonGroup {...props} appearance={appearance}>
          <Button>Button 56</Button>
          <Button disabled>Button 56</Button>
          <Button>Button 56</Button>
        </ButtonGroup>
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">Loading (третья кнопка)</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'loading' + index}>
        <ButtonGroup {...props} appearance={appearance}>
          <Button>Button 56</Button>
          <Button>Button 56</Button>
          <Button loading>Button 56</Button>
        </ButtonGroup>
      </GroupWrapper>
    ))}
  </ThemeProvider>
);
