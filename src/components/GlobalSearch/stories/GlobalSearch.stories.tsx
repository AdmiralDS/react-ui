import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { GlobalSearch } from '@admiral-ds/react-ui';

import { BasicExampleTemplate } from './BasicExample.template';

// Imports of text sources
import BasicExampleRaw from './BasicExample.template?raw';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент глобального поиска используется для поиска релевантных значений по введенному запросу. Используется,
    например, для поиска по сайту. Как правило, располагается в верхней части страницы или шапке сайта, как один из
    главных элементов взаимодействия.
  </Desc>
);
export default {
  title: 'Admiral-2.1/GlobalSearch',
  decorators: undefined,
  component: GlobalSearch,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=158162-129541',
      },
    ],
  },
  args: {
    dimension: 'xl',
  },
  argTypes: {
    dimension: {
      options: ['xl', 'm', 's'],
      control: { type: 'radio' },
    },
    settingsButtonsDisabled: {
      control: 'boolean',
    },
    searchValue: {
      control: { type: 'text' },
    },
    dropContainerCssMixin: {
      control: false,
    },
    columnsButtonDropContainerStyle: {
      control: false,
    },
    settingsButtonDropContainerStyle: {
      control: false,
    },
    columns: {
      control: false,
    },
    settingsMenu: {
      control: false,
    },
    locale: {
      control: false,
    },
  },
} as Meta<typeof GlobalSearch>;

const queryClient = new QueryClient();
const PaneSimpleStory: StoryFn<typeof GlobalSearch> = (props) => (
  <QueryClientProvider client={queryClient}>
    <BasicExampleTemplate {...props} />
  </QueryClientProvider>
);

export const PaneSimpleExample = {
  render: PaneSimpleStory,

  parameters: {
    docs: {
      source: {
        code: BasicExampleRaw,
      },
      description: {
        story: 'Для того чтобы была ....',
      },
    },
  },

  name: 'Простой пример',
  args: {
    placeholder: 'Искать ...',
    submitButtonProps: {
      children: 'Найти',
      onClick() {
        console.log('Button cliked or Enter key was pressed. Run your function.');
      },
    },
    displayClearIcon: true,
  },
};
