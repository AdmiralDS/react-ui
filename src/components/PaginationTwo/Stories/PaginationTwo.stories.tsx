import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { PaginationTwo } from '@admiral-ds/react-ui';

import { PaginationPlaygroundTemplate, PaginationVariantsTemplate, PaginationMobileTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PaginationPlaygroundRaw from '!!raw-loader!./Templates/PaginationPlayground';
import PaginationVariantsRaw from '!!raw-loader!./Templates/PaginationVariants';
import PaginationMobileRaw from '!!raw-loader!./Templates/PaginationMobile';

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
  decorators: [withDesign],
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
} as ComponentMeta<typeof PaginationTwo>;

//<editor-fold desc="Playground">
const PaginationPlaygroundStory: ComponentStory<typeof PaginationTwo> = ({ page, onChange, ...props }) => (
  <PaginationPlaygroundTemplate page={page} onChange={onChange} {...cleanUpProps(props)} />
);
export const Playground = PaginationPlaygroundStory.bind({});
Playground.parameters = {
  docs: {
    source: {
      code: PaginationPlaygroundRaw,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Примеры">
const PaginationVariantsStory: ComponentStory<typeof PaginationTwo> = ({ page, onChange, ...props }) => (
  <PaginationVariantsTemplate page={page} onChange={onChange} {...cleanUpProps(props)} />
);
export const PaginationVariantsExample = PaginationVariantsStory.bind({});
PaginationVariantsExample.parameters = {
  docs: {
    source: {
      code: PaginationVariantsRaw,
    },
  },
};
PaginationVariantsExample.storyName = 'Примеры.';
//</editor-fold>

//<editor-fold desc="Мобильная версия">
const PaginationMobileStory: ComponentStory<typeof PaginationTwo> = ({ page, onChange, ...props }) => (
  <PaginationMobileTemplate page={page} onChange={onChange} {...cleanUpProps(props)} />
);
export const PaginationMobileExample = PaginationMobileStory.bind({});
PaginationMobileExample.parameters = {
  docs: {
    source: {
      code: PaginationMobileRaw,
    },
  },
};
PaginationMobileExample.storyName = 'Мобильная версия.';
//</editor-fold>
