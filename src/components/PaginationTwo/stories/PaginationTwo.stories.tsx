import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';

import { PaginationTwo } from '@admiral-ds/react-ui';

import { PaginationTwoPlaygroundTemplate } from './PaginationTwoPlayground.template';
import { PaginationTwoVariantsTemplate } from './PaginationTwoVariants.template';
import { PaginationTwoSettingsTemplate } from './PaginationTwoSettings.template';
import { PaginationTwoMobileTemplate } from './PaginationTwoMobile.template';

// Imports of text sources
import PaginationTwoPlaygroundRaw from './PaginationTwoPlayground.template?raw';
import PaginationTwoVariantsRaw from './PaginationTwoVariants.template?raw';
import PaginationTwoSettingsRaw from './PaginationTwoSettings.template?raw';
import PaginationTwoMobileRaw from './PaginationTwoMobile.template?raw';

const Separator = styled.div`
  height: 20px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент используется для навигации по длинным спискам, где информация разбивается на страницы.
    <Separator />
    Старайтесь подбирать размер страницы таким образом, чтобы она была не больше 3-4 экранов пользователя. За базовый
    экран принимается экран с разрешением 1280×720px.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Data Table/PaginationTwo',
  decorators: undefined,
  component: PaginationTwo,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A41441',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A41584',
      },
    ],
  },
  argTypes: {
    count: {
      control: { type: 'number' },
    },
    page: {
      control: { type: 'number' },
    },
    pageSize: {
      control: { type: 'number' },
    },
    totalItems: {
      control: { type: 'number' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
    showNextBtnMobile: {
      control: { type: 'boolean' },
    },
    showInput: {
      control: { type: 'boolean' },
    },
    disabledPages: {
      control: false,
    },
    locale: {
      control: false,
    },
  },
} as Meta<typeof PaginationTwo>;

//<editor-fold desc="Playground">
const PaginationPlaygroundStory: StoryFn<typeof PaginationTwo> = ({ page, onChange, ...props }) => (
  <PaginationTwoPlaygroundTemplate page={page} onChange={onChange} {...props} />
);

export const Playground = {
  render: PaginationPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: PaginationTwoPlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Примеры">
const PaginationVariantsStory: StoryFn<typeof PaginationTwo> = ({ page, onChange, ...props }) => (
  <PaginationTwoVariantsTemplate page={page} onChange={onChange} {...props} />
);

export const PaginationVariantsExample = {
  render: PaginationVariantsStory,

  parameters: {
    docs: {
      source: {
        code: PaginationTwoVariantsRaw,
      },
    },
  },

  name: 'Примеры.',
};

//</editor-fold>

//<editor-fold desc="Настройка количества видимых страниц">
const PaginationSettingsStory: StoryFn<typeof PaginationTwo> = ({ page, onChange, ...props }) => (
  <PaginationTwoSettingsTemplate page={page} onChange={onChange} {...props} />
);

export const PaginationSettingsExample = {
  render: PaginationSettingsStory,

  parameters: {
    docs: {
      source: {
        code: PaginationTwoSettingsRaw,
      },
    },
  },

  name: 'Настройка количества видимых страниц.',
};

//</editor-fold>

//<editor-fold desc="Мобильная версия">
const PaginationMobileStory: StoryFn<typeof PaginationTwo> = ({ page, onChange, ...props }) => (
  <PaginationTwoMobileTemplate page={page} onChange={onChange} {...props} />
);

export const PaginationMobileExample = {
  render: PaginationMobileStory,

  parameters: {
    docs: {
      source: {
        code: PaginationTwoMobileRaw,
      },
    },
  },

  name: 'Мобильная версия.',
};
