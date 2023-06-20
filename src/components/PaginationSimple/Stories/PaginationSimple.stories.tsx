import * as React from 'react';
import styled from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { PaginationSimple } from '@admiral-ds/react-ui';

import { PaginationPlaygroundTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PaginationPlaygroundRaw from '!!raw-loader!./Templates/PaginationPlayground';

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
    Простой вариант компонента, например для “перелистывания” банеров или карточек.
    <Separator />
    Перелистывание происходит по заданному вручную таймингу, либо по клику на нужную секцию.
  </Desc>
);

export default {
  title: 'Admiral-2.1/PaginationSimple',
  decorators: [withDesign],
  component: PaginationSimple,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A41560',
    },
  },
  argTypes: {
    totalItems: {
      control: false,
    },
    currentItem: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof PaginationSimple>;

//<editor-fold desc="Playground">
const PaginationPlaygroundStory: ComponentStory<typeof PaginationSimple> = ({ currentItem, onChange, ...props }) => (
  <PaginationPlaygroundTemplate currentItem={currentItem} onChange={onChange} {...cleanUpProps(props)} />
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
