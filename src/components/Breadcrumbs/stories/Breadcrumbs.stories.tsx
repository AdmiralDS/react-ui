import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { Breadcrumbs } from '@admiral-ds/react-ui';

import { BreadcrumbsPlaygroundTemplate } from './BreadcrumbsPlayground.template';
import { BreadcrumbsSizesTemplate } from './BreadcrumbsSizes.template';
import { BreadcrumbsMobileTemplate } from './BreadcrumbsMobile.template';
import { BreadcrumbsLinkTemplate } from './BreadcrumbsLink.template';
import { BreadcrumbsActiveCrumbTemplate } from './BreadcrumbsActiveCrumb.template';
import { BreadcrumbsIconsTemplate } from './BreadcrumbsIcons.template';

// Imports of text sources
import BreadcrumbsPlaygroundRaw from './BreadcrumbsPlayground.template?raw';
import BreadcrumbsSizesRaw from './BreadcrumbsSizes.template?raw';
import BreadcrumbsMobileRaw from './BreadcrumbsMobile.template?raw';
import BreadcrumbsLinkRaw from './BreadcrumbsLink.template?raw';
import BreadcrumbsActiveCrumbRaw from './BreadcrumbsActiveCrumb.template?raw';
import BreadcrumbsIconsRaw from './BreadcrumbsIcons.template?raw';

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
    Хлебные крошки — это вторичный элемент навигации, который позволяет пользователю понять, на каком уровне сайта он
    находится, и вернуться на один из предыдущих уровней.
    <Separator />
    Если есть ограничение по ширине, то показываются первая и последние вкладки. Скрытые вкладки можно открыть через
    Overflow Menu. Максимальная ширина компонента 800px
    <Separator />
    Максимальное количество знаков в одной вкладке 40, после чего надпись уходит в многоточие. При ховере над такой
    вкладкой появляется подсказка.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Breadcrumbs',
  decorators: undefined,
  component: Breadcrumbs,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A6627',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A6677',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
    lastBreadcrumbActive: {
      control: { type: 'boolean' },
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
    items: {
      control: false,
    },
  },
} as Meta<typeof Breadcrumbs>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof Breadcrumbs> = (props) => <BreadcrumbsPlaygroundTemplate {...props} />;

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: BreadcrumbsPlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Sizes">
const SizesStory: StoryFn<typeof Breadcrumbs> = () => <BreadcrumbsSizesTemplate />;

export const SizesExample = {
  render: SizesStory,

  parameters: {
    docs: {
      source: {
        code: BreadcrumbsSizesRaw,
      },
    },
  },

  name: 'Breadcrumbs. Размеры.',
};

//</editor-fold>

//<editor-fold desc="Mobile">
const MobileStory: StoryFn<typeof Breadcrumbs> = () => <BreadcrumbsMobileTemplate />;

export const MobileExample = {
  render: MobileStory,

  parameters: {
    docs: {
      source: {
        code: BreadcrumbsMobileRaw,
      },
    },
  },

  name: 'Breadcrumbs. Mobile.',
};

//</editor-fold>

//<editor-fold desc="Link">
const LinkStory: StoryFn<typeof Breadcrumbs> = () => <BreadcrumbsLinkTemplate />;

export const LinkExample = {
  render: LinkStory,

  parameters: {
    docs: {
      source: {
        code: BreadcrumbsLinkRaw,
      },
    },
  },

  name: 'Breadcrumbs. Пример с react-router.',
};

//</editor-fold>

//<editor-fold desc="Active crumb">
const ActiveCrumbStory: StoryFn<typeof Breadcrumbs> = () => <BreadcrumbsActiveCrumbTemplate />;

export const ActiveCrumbExample = {
  render: ActiveCrumbStory,

  parameters: {
    docs: {
      source: {
        code: BreadcrumbsActiveCrumbRaw,
      },
    },
  },

  name: 'Breadcrumbs. Пример с активной/неактивной последней вкладкой.',
};

//<editor-fold desc="Crumb with icon">
const CrumbWithIconStory: StoryFn<typeof Breadcrumbs> = () => <BreadcrumbsIconsTemplate />;

export const CrumbWithIconExample = {
  render: CrumbWithIconStory,

  parameters: {
    docs: {
      source: {
        code: BreadcrumbsIconsRaw,
      },
    },
  },

  name: 'Breadcrumbs. Пример вкладок с иконками.',
};
