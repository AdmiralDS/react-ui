import { css } from 'styled-components';

import { MainPrimaryColorName, T } from '@admiral-ds/react-ui';
import type { TProps } from '@admiral-ds/react-ui';

const BlueText = css`
  color: ${(p) => p.theme.color[MainPrimaryColorName]};
`;

const CustomParagraph = css`
  color: ${(p) => p.theme.color['Neutral/Neutral 70']};
`;

const OrangeColor = css`
  color: ${(p) => p.theme.color['Warning/Warning 50 Main']};
`;

export const TTextStatusTemplate = ({ ...props }: TProps) => {
  return (
    <>
      <T font={'Body/Body 1 Short'} as={'a'} href={'https://'} cssMixin={BlueText}>
        Это ссылка со стилем Body/Body 1 Short, цветом шрифта Primary.
      </T>
      <br />
      <T font="Body/Body 1 Long" as="h3" cssMixin={OrangeColor}>
        Это заголовок третьего уровня и стилем Body/Body 1 Long.
      </T>
      <T font="Body/Body 2 Long" as="h3" color="Purple/Purple 60 Main">
        Это заголовок третьего уровня и стилем Body/Body 2 Long цвета Purple/Purple 60 Main.
      </T>
      <T font="Body/Body 2 Long" as="h2" skeleton={props.skeleton}>
        Это заголовок второго уровня. Для активации состояния skeleton необходимо сменить состяние.
      </T>
      <T font="Body/Body 2 Long" as="h2" skeleton={props.skeleton}>
        Для отображения в состоянии skeleton должен быть указан текст.
      </T>
      <T font="Header/H5" as="p" cssMixin={CustomParagraph}>
        Это параграф со стилем Header/H5 и цветом шрифта Tertiary.
      </T>

      <T font="Header/H3" as="h3">
        Выбор конфигурации
      </T>
    </>
  );
};
