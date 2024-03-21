import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { BadgeDot } from '@admiral-ds/react-ui';

import { ThemeBasicsTemplate } from './ThemeBasics.template';
import { ThemeActivatingTemplate } from './ThemeActivating.template';

// Imports of text sources
import ThemeBasicsRaw from './ThemeBasics.template?raw';
import ThemeActivatingRaw from './ThemeActivating.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
`;

const Description = () => (
  <Desc>
    Начиная с версии 7.14.0 в библиотеке добавлена дополнительная возможность темизации компонентов с помощью
    <b>css переменных</b> (необходимость прокидывать тему в компоненты библиотеки с помощью styled-components
    ThemeProvider пока сохраняется). <Separator /> Библиотека предоставляет светлую (LightThemeCssVars) и темную
    (DarkThemeCssVars) темы, где тема - это компонент, подключающий таблицу стилей, в которой согласно определенному API
    заданы css переменные, в дальнейшем применяемые для стилизации компонентов. Пользователь также может создать свою
    уникальную тему. Чтобы создать тему, необходимо понимание CSS, включая раздел&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">CSS Custom Properties</a>.
  </Desc>
);

export default {
  title: 'Admiral-2.1/CSS Custom Properties',
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
  },
} as Meta;

//<editor-fold desc="Theme Basics">
const ThemeBasicsStory: StoryFn = () => <ThemeBasicsTemplate />;

export const ThemeBasicsExample = {
  render: ThemeBasicsStory,

  parameters: {
    docs: {
      source: {
        code: ThemeBasicsRaw,
      },
    },
  },

  name: 'Theme Basics',
};

//</editor-fold>

//<editor-fold desc="Theme Activating">
const ThemeActivatingStory: StoryFn<typeof BadgeDot> = () => <ThemeActivatingTemplate />;

export const ThemeActivatingExample = {
  render: ThemeActivatingStory,

  parameters: {
    docs: {
      source: {
        code: ThemeActivatingRaw,
      },
    },
  },

  name: 'Theme Activating',
};

//</editor-fold>
