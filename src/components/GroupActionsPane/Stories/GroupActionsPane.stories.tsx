import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { GroupActionsPane } from '@admiral-ds/react-ui';

import { PaneSimpleTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PaneSimpleRaw from '!!raw-loader!./Templates/PaneSimple';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Опциональная надстройка над таблицей. Размерность : xl - 56px, l - 48px, m - 40px, s - 32px
    <br />
    Для того чтобы была видна кнопка поиска("лупа") необходимо определить свойства searchValue и onChangeSearchValue,
    для кнопки настройки видимости колонок("плюс") - columns и onColumnsChange, для кнопки настроек("шестерёнка") -
    settingsMenu
  </Desc>
);
export default {
  title: 'Admiral-2.1/Data Table/GroupActionsPane',
  decorators: undefined,
  component: GroupActionsPane,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A91211',
      },
    ],
  },
  args: {
    dimension: 'xl',
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
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
} as Meta<typeof GroupActionsPane>;

//<editor-fold desc="Simple">
const PaneSimpleStory: StoryFn<typeof GroupActionsPane> = (props) => <PaneSimpleTemplate {...cleanUpProps(props)} />;

export const PaneSimpleExample = {
  render: PaneSimpleStory,

  parameters: {
    docs: {
      source: {
        code: PaneSimpleRaw,
      },
      description: {
        story:
          'Для того чтобы была видна кнопка поиска("лупа") необходимо определить свойства searchValue и onChangeSearchValue, ' +
          'для кнопки настройки видимости колонок("плюс") - columns и onColumnsChange, для кнопки настроек("шестерёнка") - ' +
          'settingsMenu',
      },
    },
  },

  name: 'Простой пример',
};
