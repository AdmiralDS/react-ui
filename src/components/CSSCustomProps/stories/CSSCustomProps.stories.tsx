import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';

import { ThemeBasicsTemplate } from './ThemeBasics.template';
import { ThemeActivatingTemplate } from './ThemeActivating.template';
import { ThemeContentTemplate } from './ThemeContent.template';

// Imports of text sources
import ThemeActivatingRaw from './ThemeActivating.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Term = styled.span`
  font-weight: 500;
`;

const Description = () => (
  <Desc>
    В библиотеке добавлена дополнительная возможность темизации компонентов с помощью <Term>css переменных</Term> (css
    custom props / css variables). Необходимость прокидывать тему в компоненты библиотеки с помощью styled-components
    ThemeProvider сохраняется.
  </Desc>
);

export default {
  title: 'Experimental API/CSS Custom Properties',
  component: Desc,
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
  name: 'Базовые понятия',
};

//</editor-fold>

//<editor-fold desc="Theme Activating">
const ThemeActivatingStory: StoryFn = () => <ThemeActivatingTemplate />;

export const ThemeActivatingExample = {
  render: ThemeActivatingStory,

  parameters: {
    docs: {
      source: {
        code: ThemeActivatingRaw,
      },
    },
  },

  name: 'Подключение темы',
};

//</editor-fold>

//<editor-fold desc="Theme Content">
const ThemeContentStory: StoryFn = () => <ThemeContentTemplate />;

export const ThemeContentExample = {
  render: ThemeContentStory,
  name: 'Состав темы',
};

//</editor-fold>
