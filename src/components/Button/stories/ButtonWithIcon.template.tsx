import styled, { ThemeProvider } from 'styled-components';

import { Button, T } from '@admiral-ds/react-ui';
import type { ButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

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
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    ${(p) => p.theme.color['Special/Dark Static Neutral 00']}
  );
  padding: 2px;
`;

export const ButtonWithIconTemplate = (
  props: ButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean },
) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(props.themeBorderKind, props.CSSCustomProps)}>
      <WrapperButton>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - xl
          </T>
          <Button dimension="xl" appearance="primary" iconEnd={<StarSolid />}>
            Button 56
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - l
          </T>
          <Button dimension="l" appearance="secondary" iconStart={<StarSolid />}>
            Button 48
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - m
          </T>
          <Button dimension="m" appearance="danger" iconEnd={<StarSolid />}>
            Button 40
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Ghost - xl
          </T>
          <Button dimension="xl" appearance="ghost" iconEnd={<StarSolid />}>
            Button 56
          </Button>
        </div>
        <>
          <DarkDiv>
            <T font="Body/Body 1 Long" as="div" style={{ color: 'white' }}>
              White - l
            </T>
            <Button dimension="l" appearance="white" iconEnd={<StarSolid />}>
              Button 48
            </Button>
          </DarkDiv>
        </>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - s
          </T>
          <Button dimension="s" appearance="success" iconStart={<StarSolid />}>
            Button 32
          </Button>
        </div>
      </WrapperButton>
      <Separator />
      <div>
        <T font="Body/Body 1 Long" as="div">
          Button with icon stretch
        </T>
        <Button dimension="l" appearance="tertiary" style={{ width: '100%' }} iconStart={<StarSolid />}>
          Button
        </Button>
      </div>
    </ThemeProvider>
  );
};
