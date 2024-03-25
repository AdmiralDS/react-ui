import * as React from 'react';
import styled from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

const Content = styled.div`
  ${typography['Body/Body 1 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

const Separator = styled.div`
  height: 20px;
`;

const Term = styled.span`
  font-weight: 500;
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

export const ThemeBasicsTemplate = () => {
  return (
    <Content>
      Библиотека предоставляет компоненты для подключения светлой (компонент <Term>LightThemeCssVars</Term>) и темной
      (компонент <Term>DarkThemeCssVars</Term>) тем, где тема - это таблица стилей, в которой согласно определенному API
      заданы css переменные, в дальнейшем применяемые для стилизации компонентов. Пользователь также может создать свою
      уникальную тему. Чтобы создать тему, необходимо понимание CSS, включая раздел{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">CSS Custom Properties</a>.<Separator />
      Все темы, использующие css переменные, применяются в рамках определенных classNames, заданных согласно шаблону{' '}
      <Term>"admiral-theme-[themeName]"</Term>, где <Term>[themeName]</Term> - это значение в нижнем регистре,
      разделенное дефисом, представляющее имя темы.
      <Separator />
      Предоставляемые библиотекой светлая и темная темы используют <Term>"admiral-theme-light"</Term> и{' '}
      <Term>"admiral-theme-dark"</Term> classNames соответственно. Кастомная тема с названием "Purple Power", например,
      использовала бы className "admiral-theme-purple-power".
      <Separator />
      <InfoBlock>
        В storybook в верхней панели добавлена кнопка "CSS Custom Props", которая позволяет управлять подключением
        таблиц стилей с css переменными в примерах storybookа. По умолчанию css переменные отключены. При подключении
        css переменные применяются к элементу body внутри каждого примера в storybook, при этом элементу body
        присваивается определенный className. В этом легко убедиться с помощью DevTools браузера.
      </InfoBlock>
    </Content>
  );
};
