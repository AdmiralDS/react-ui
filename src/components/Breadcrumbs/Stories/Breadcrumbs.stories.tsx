import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Breadcrumbs } from '@admiral-ds/react-ui';

import {
  BreadcrumbsPlaygroundTemplate,
  BreadcrumbsSizesTemplate,
  BreadcrumbsMobileTemplate,
  BreadcrumbsLinkTemplate,
  BreadcrumbsActiveCrumbTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from '!!raw-loader!./Templates/BreadcrumbsPlayground';
import SizesRaw from '!!raw-loader!./Templates/BreadcrumbsSizes';
import MobileRaw from '!!raw-loader!./Templates/BreadcrumbsMobile';
import LinkRaw from '!!raw-loader!./Templates/BreadcrumbsLink';
import ActiveCrumbRaw from '!!raw-loader!./Templates/BreadcrumbsActiveCrumb';

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
    Хлебные крошки — это вторичный элемент навигации, который позволяет пользователю понять на каком уровне сайта он
    находится и вернуться на один из предыдущих уровней.
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
  decorators: [withDesign],
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
} as ComponentMeta<typeof Breadcrumbs>;

//<editor-fold desc="Playground">
const PlaygroundStory: ComponentStory<typeof Breadcrumbs> = (props) => (
  <BreadcrumbsPlaygroundTemplate items={[]} {...cleanUpProps(props)} />
);
export const Playground = PlaygroundStory.bind({});
Playground.parameters = {
  docs: {
    source: {
      code: PlaygroundRaw,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Sizes">
const SizesStory: ComponentStory<typeof Breadcrumbs> = () => <BreadcrumbsSizesTemplate />;
export const SizesExample = SizesStory.bind({});
SizesExample.parameters = {
  docs: {
    source: {
      code: SizesRaw,
    },
  },
};
SizesExample.storyName = 'Breadcrumbs. Размеры.';
//</editor-fold>

//<editor-fold desc="Mobile">
const MobileStory: ComponentStory<typeof Breadcrumbs> = () => <BreadcrumbsMobileTemplate />;
export const MobileExample = MobileStory.bind({});
MobileExample.parameters = {
  docs: {
    source: {
      code: MobileRaw,
    },
    description: {
      story: `На мобильных устройствах предполагается использовать компонент в режиме адаптива (mobile). 
      Компонент настроен таким образом, что если закладки не помещаются в ширину экрана, 
      то они “выходят” за область экрана и их можно прокручивать свайпом, при этом текущая вкладка 
      видна по дефолту, а вкладки, которые не помещаются, “уходят” за левую часть экрана (как на примере).`,
    },
  },
};
MobileExample.storyName = 'Breadcrumbs. Mobile.';
//</editor-fold>

//<editor-fold desc="Link">
const LinkStory: ComponentStory<typeof Breadcrumbs> = () => <BreadcrumbsLinkTemplate />;
export const LinkExample = LinkStory.bind({});
LinkExample.parameters = {
  docs: {
    source: {
      code: LinkRaw,
    },
    description: {
      story: `С помощью параметров linkAs и linkProps (входят в состав BreadcrumbProps) 
      можно вместо обычного anchor отрендерить внутри хлебной крошки любой другой компонент. 
      Этот компонент можно задать с помощью свойства  linkAs и передать в него необходимые параметры через linkProps.`,
    },
  },
};
LinkExample.storyName = 'Breadcrumbs. Пример с react-router.';
//</editor-fold>

//<editor-fold desc="Active crumb">
const ActiveCrumbStory: ComponentStory<typeof Breadcrumbs> = () => <BreadcrumbsActiveCrumbTemplate />;
export const ActiveCrumbExample = ActiveCrumbStory.bind({});
ActiveCrumbExample.parameters = {
  docs: {
    source: {
      code: ActiveCrumbRaw,
    },
    description: {
      story: `Последняя вкладка в компоненте может быть либо неактивной (по умолчанию), в таком случае она отображает 
      текущее местоположение. Либо последняя вкладка активна и отображает предыдущий уровень сайта. Управляет 
      поведением последней вкладки параметр lastBreadcrumbActive.`,
    },
  },
};
ActiveCrumbExample.storyName = 'Breadcrumbs. Пример с активной/неактивной последней вкладкой.';
//</editor-fold>
