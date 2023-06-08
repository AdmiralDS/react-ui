import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, T } from '@admiral-ds/react-ui';
import type { ButtonProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const WrapperButton = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 8px;
    flex-basis: 170px;
  }

  justify-content: space-between;
  align-items: center;
`;

const Separator = styled.div`
  height: 20px;
  width: 20px;
`;

const DarkDiv = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Dark Static Neutral 00']};
  padding: 2px;
`;

export const ButtonWithIconTemplate = (props: ButtonProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <WrapperButton>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - xl
          </T>
          <Button dimension="xl" appearance="primary" iconPlace="right" icon={<StarSolid />}>
            Button 56
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - l
          </T>
          <Button dimension="l" appearance="secondary" icon={<StarSolid />}>
            Button 48
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - m
          </T>
          <Button dimension="m" appearance="danger" iconPlace="right" icon={<StarSolid />}>
            Button 40
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Ghost - xl
          </T>
          <Button dimension="xl" appearance="ghost" iconPlace="right" icon={<StarSolid />}>
            Button 56
          </Button>
        </div>
        <>
          <DarkDiv>
            <T font="Body/Body 1 Long" as="div" style={{ color: 'white' }}>
              White - l
            </T>
            <Button dimension="l" appearance="white" iconPlace="right" icon={<StarSolid />}>
              Button 48
            </Button>
          </DarkDiv>
        </>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - s
          </T>
          <Button dimension="s" appearance="success" icon={<StarSolid />}>
            Button 32
          </Button>
        </div>
      </WrapperButton>
      <Separator />
      <div>
        <T font="Body/Body 1 Long" as="div">
          Button with icon stretch
        </T>
        <Button dimension="l" appearance="primary" style={{ width: '100%' }} icon={<StarSolid />}>
          Button
        </Button>
      </div>
    </ThemeProvider>
  );
};
