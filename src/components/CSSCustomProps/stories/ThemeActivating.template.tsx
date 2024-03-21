import * as React from 'react';
import styled from 'styled-components';
import { typography, DarkThemeCssVars } from '@admiral-ds/react-ui';

const Text = styled.div`
  display: flex;
  ${typography['Body/Body 1 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

export const ThemeActivatingTemplate = () => {
  return (
    <>
      <DarkThemeCssVars />
      <Text className="admiral-theme-dark">
        Чтобы активировать тему, необходимо импортировать соответствующий компонент из библиотеки, и назначить className
        из темы тому элемента, dom-дерево внтури которого предполагается темизировать согласно теме. В данном примере
        импортирутеся и встраивается темная тема с css переменными.
      </Text>
    </>
  );
};
