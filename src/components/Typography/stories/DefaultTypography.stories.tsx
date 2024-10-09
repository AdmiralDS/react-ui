import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';

import { UsingDefaultTypographyGloballyTemplate } from './UsingDefaultTypographyGlobally.template';
import { UsingDefaultTypographyLocallyTemplate } from './UsingDefaultTypographyLocally.template';

// Imports of text sources
import UsingDefaultTypographyLocallyRaw from './UsingDefaultTypographyLocally.template?raw';
import UsingDefaultTypographyGloballyRaw from './UsingDefaultTypographyGlobally.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Для сохранения единообразия в проекте рекомендуется использовать единые стили текста для стандартных HTML тэгов.
  </Desc>
);

export default {
  title: 'Experimental API/DefaultTypography',
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

//<editor-fold desc="Theme Activating">
const UsingDefaultTypographyLocallyStory: StoryFn = () => <UsingDefaultTypographyLocallyTemplate />;

export const ThemeActivatingExample = {
  render: UsingDefaultTypographyLocallyStory,

  parameters: {
    docs: {
      source: {
        code: UsingDefaultTypographyLocallyRaw,
      },
    },
  },

  name: 'Локальное использование',
};

//</editor-fold>

//<editor-fold desc="Theme Basics">
const UsingDefaultTypographyGloballyStory: StoryFn = () => <UsingDefaultTypographyGloballyTemplate />;

export const ThemeBasicsExample = {
  render: UsingDefaultTypographyGloballyStory,

  parameters: {
    docs: {
      source: {
        code: UsingDefaultTypographyGloballyRaw,
      },
    },
  },

  name: 'Глобальное использование',
};

//</editor-fold>
