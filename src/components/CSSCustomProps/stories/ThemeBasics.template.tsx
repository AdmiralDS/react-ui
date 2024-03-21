import * as React from 'react';
import styled from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

const Text = styled.div`
  display: flex;
  ${typography['Body/Body 1 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

const Separator = styled.div`
  height: 20px;
`;

export const ThemeBasicsTemplate = () => {
  return (
    <Text>
      Каждая тема, использующая css переменные, должна быть привязана к элементам с определенным className. Данный
      className определяется как строка 'admiral-theme-[themeName]', где [themeName] - это значение в нижнем регистре,
      разделенное дефисом, представляющее имя темы. Предоставляемые библиотекой light и dark темы используют
      'admiral-theme-light' и 'admiral-theme-dark' className соответственно. А кастомная тема с названием "Purple
      Power", например, использовала бы className 'admiral-theme-purple-power'.
      <Separator /> В сторибуке можно поиграться с переменными с помощью кнопки в верхней панели инструментов.
    </Text>
  );
};
