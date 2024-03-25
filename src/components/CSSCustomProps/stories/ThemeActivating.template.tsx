import * as React from 'react';
import styled from 'styled-components';
import { typography, DarkThemeCssVars } from '@admiral-ds/react-ui';

const Content = styled.div`
  ${typography['Body/Body 1 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

const Text = styled.span`
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
`;

const Separator = styled.div`
  height: 20px;
`;

const InfoBlock = styled.div`
  position: relative;
  background-color: var(--admiral-color-Primary_Primary10, ${(p) => p.theme.color['Primary/Primary 10']});
  border-left: solid 4px var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  border-radius: 4px;
  padding: 24px 24px 24px 32px;

  &::before {
    content: 'i';
    ${typography['Subtitle/Subtitle 3']}
    background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
    color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
    position: absolute;
    top: calc(50% - 12px);
    left: calc(-12px - 2px);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: circle(50% at 50% 50%);
  }
`;

const Example = styled.div`
  background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  border-radius: 4px;
  padding: 24px;
`;

export const ThemeActivatingTemplate = () => {
  return (
    <>
      <DarkThemeCssVars />
      <Content>
        Чтобы подключить тему, необходимо импортировать соответствующий компонент{' '}
        <Text>(LightThemeCssVars / DarkThemeCssVars)</Text> из библиотеки и назначить className темы{' '}
        <Text>("admiral-theme-light" / "admiral-theme-dark")</Text> тому элементу, dom-дерево внутри которого
        предполагается темизировать с помощью css переменных.
        <Separator />
        <Example className="admiral-theme-dark">
          Данный абзац является простейшим примером элемента, к которому подключена темная тема с css переменными.
          Пример кода можно увидеть, нажав кнопку "Show code".
        </Example>
        <Separator />
        <InfoBlock>
          Исключение: для подключения светлой темы не обязательно использовать className "admiral-theme-light". При
          импорте компонента LightThemeCssVars светлая тема по умолчанию подключается к элементу :root.
        </InfoBlock>
      </Content>
    </>
  );
};
