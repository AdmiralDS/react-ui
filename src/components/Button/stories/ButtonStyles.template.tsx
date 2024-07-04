import styled, { ThemeProvider } from 'styled-components';

import { Button } from '@admiral-ds/react-ui';
import type { ButtonProps, ButtonAppearance, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
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

export const ButtonStylesTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <ButtonContainer>
        <Button dimension={props.dimension}>Button 56</Button>

        <Button dimension={props.dimension} iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="secondary">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="secondary" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="secondary" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="secondary" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="tertiary">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="tertiary" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="tertiary" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="tertiary" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="ghost">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="ghost" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="ghost" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="ghost" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="danger">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="danger" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="danger" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="danger" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="success">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="success" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="success" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="success" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer $appearance="white">
        <Button dimension={props.dimension} appearance="white">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="white" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="white" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="white" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
    </ThemeProvider>
  );
};
