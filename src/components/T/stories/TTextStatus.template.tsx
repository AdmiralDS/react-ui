import styled, { css } from 'styled-components';

import { MainPrimaryColorName, T } from '@admiral-ds/react-ui';
import type { TOwnProps } from '@admiral-ds/react-ui';

const BlueText = styled(T)`
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color[MainPrimaryColorName]});
`;

const CustomParagraph = styled(T)`
  color: var(--admiral-color-Neutral_Neutral70, ${(p) => p.theme.color['Neutral/Neutral 70']});
`;

const OrangeColor = css`
  color: var(--admiral-color-Warning_Warning50Main, ${(p) => p.theme.color['Warning/Warning 50 Main']});
`;

const Separator = styled.div`
  height: 8px;
`;

export const TTextStatusTemplate = ({ ...props }: TOwnProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Text — компонент для работы с Typography. Компонент отображает текст в соответствии с заданными HTML-тегом (
        <a href="https://styled-components.com/docs/api#as-polymorphic-prop">
          https://styled-components.com/docs/api#as-polymorphic-prop
        </a>
        ) и стилем шрифта.
        <Separator />
        Важно: при использовании компонента T без стилизации необходимо использовать prop "as". Если необходимо
        кастомизировать компонент (с помощью styled(T)), следует использовать prop forwardedAs.
      </T>
      <BlueText font={'Body/Body 1 Short'} forwardedAs="a" href={'https://'}>
        Это ссылка (forwardedAs="a") со стилем Body/Body 1 Short, цветом шрифта Primary.
      </BlueText>
      <br />
      <T font="Body/Body 1 Long" as="h3" cssMixin={OrangeColor}>
        Это заголовок третьего уровня (as="h3") и стилем Body/Body 1 Long.
      </T>
      <T font="Body/Body 2 Long" as="h3" color="Purple/Purple 60 Main">
        Это заголовок третьего уровня (as="h3") и стилем Body/Body 2 Long цвета Purple/Purple 60 Main.
      </T>
      <T font="Body/Body 2 Long" as="h2" skeleton={props.skeleton}>
        Это заголовок второго уровня (as="h2"). Для активации состояния skeleton необходимо сменить состяние.
      </T>
      <T font="Body/Body 2 Long" as="h2" skeleton={props.skeleton}>
        Для отображения в состоянии skeleton должен быть указан текст (as="h2").
      </T>
      <CustomParagraph font="Header/H5" forwardedAs="p">
        Это параграф (forwardedAs="p") со стилем Header/H5 и цветом шрифта Tertiary.
      </CustomParagraph>
      <T font="Header/H3" as="h3">
        Выбор конфигурации (as="h3")
      </T>
    </>
  );
};
