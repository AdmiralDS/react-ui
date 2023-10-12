import styled, { ThemeProvider } from 'styled-components';

import { Button, T } from '@admiral-ds/react-ui';
import type { ButtonProps, ButtonAppearance, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ButtonContainer = styled.div<{ appearance?: ButtonAppearance }>`
  padding: 24px;
  position: relative;
  display: inline-grid;

  > * {
    margin: 8px 16px 0 0;
  }

  ${(p) => p.appearance === 'white' && 'background-color: #2B313B;'};
`;

const Ellipsis = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ButtonPlaygroundTemplate = ({
  themeBorderKind,
  ...props
}: ButtonProps & { themeBorderKind?: BorderRadiusType }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <T font="Body/Body 1 Long" as="div">
        Кнопки представлены в четырех размерностях XL, L, M и S. Для дополнительных акцентов и более прозрачных действий
        могут применяться кнопки с иконками и текстом. Иконка может быть как перед надписью, так и после
        (iconStart/iconEnd). В некоторых случаях могут использоваться кнопки только с иконками. Как правило, это иконки,
        значения которых общепонятны и не вызывают сомнений.
      </T>
      <ButtonContainer appearance={props.appearance}>
        <Button {...props}>Button 56</Button>

        <Button {...props} iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button {...props} iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button {...props} iconStart={<StarSolid />} displayAsSquare />

        <Button {...props} style={{ width: '200px' }}>
          Button 56656547654 78578485 fbfbbfhb bcvbfbfbvbfyuf vfbrvfb
        </Button>

        <Button {...props} style={{ width: '200px' }}>
          <Ellipsis>Button 56656547654 78578485 fbfbbfhb bcvbfbfbvbfyuf vfbrvfb</Ellipsis>
        </Button>

        <Button {...props} style={{ width: '200px' }} iconStart={<StarSolid />}>
          Button 56656547654 78578485 fbfbbfhb bcvbfbfbvbfyuf vfbrvfb
        </Button>

        <Button {...props} style={{ width: '200px' }} iconStart={<StarSolid />}>
          <Ellipsis>Button 56656547654 78578485 fbfbbfhb bcvbfbfbvbfyuf vfbrvfb</Ellipsis>
        </Button>

        <Button {...props} style={{ width: '200px' }} iconEnd={<StarSolid />}>
          Button 56656547654 78578485 fbfbbfhb bcvbfbfbvbfyuf vfbrvfb
        </Button>

        <Button {...props} style={{ width: '200px' }} iconEnd={<StarSolid />}>
          <Ellipsis>Button 56656547654 78578485 fbfbbfhb bcvbfbfbvbfyuf vfbrvfb</Ellipsis>
        </Button>
      </ButtonContainer>
    </ThemeProvider>
  );
};
