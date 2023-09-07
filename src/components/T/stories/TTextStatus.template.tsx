import styled, { css } from 'styled-components';

import { MainPrimaryColorName, T } from '@admiral-ds/react-ui';
import type { TProps } from '@admiral-ds/react-ui';

const BlueText = styled(T)`
  color: ${(p) => p.theme.color[MainPrimaryColorName]};
`;

const CustomParagraph = styled(T)`
  color: ${(p) => p.theme.color['Neutral/Neutral 70']};
`;

const OrangeColor = css`
  color: ${(p) => p.theme.color['Warning/Warning 50 Main']};
`;

export const TTextStatusTemplate = ({ ...props }: TProps) => {
  return (
    <>
      <BlueText font={'Body/Body 1 Short'} forwardedAs="a" href={'https://'}>
        Это ссылка со стилем Body/Body 1 Short, цветом шрифта Primary.
      </BlueText>
      <br />
      <T font="Body/Body 1 Long" forwardedAs="h3" cssMixin={OrangeColor}>
        Это заголовок третьего уровня и стилем Body/Body 1 Long.
      </T>
      <T font="Body/Body 2 Long" forwardedAs="h3" color="Purple/Purple 60 Main">
        Это заголовок третьего уровня и стилем Body/Body 2 Long цвета Purple/Purple 60 Main.
      </T>
      <T font="Body/Body 2 Long" forwardedAs="h2" skeleton={props.skeleton}>
        Это заголовок второго уровня. Для активации состояния skeleton необходимо сменить состяние.
      </T>
      <T font="Body/Body 2 Long" forwardedAs="h2" skeleton={props.skeleton}>
        Для отображения в состоянии skeleton должен быть указан текст.
      </T>
      <CustomParagraph font="Header/H5" forwardedAs="p">
        Это параграф со стилем Header/H5 и цветом шрифта Tertiary.
      </CustomParagraph>
      <T font="Header/H3" forwardedAs="h3">
        Выбор конфигурации
      </T>
    </>
  );
};
