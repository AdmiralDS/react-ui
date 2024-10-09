import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { OrderedList } from '@admiral-ds/react-ui';

import { OrderedListVariantsTemplate } from './OrderedListVariants.template';
import { OrderedListPlaygroundTemplate } from './OrderedListPlayground.template';

// Imports of text sources
import OrderedListVariantsRaw from './OrderedListVariants.template?raw';
import OrderedListPlaygroundRaw from './OrderedListPlayground.template?raw';

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    OrderedList – компонент для вертикальной группировки связанных по смыслу текстовых пунктов. OrderedList следует
    использовать, если вам необходим упорядоченный, пронумерованный список.
    <Separator />
    Компонент представлен в двух видах (Numbers и Letters) и двух размерах (S и M). В списках Letters можно использовать
    как прописные (lower-letters), так и заглавные буквы (upper-letters).
  </Desc>
);

export default {
  title: 'Admiral-2.1/List/OrderedList',
  decorators: undefined,
  component: OrderedList,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    gap: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof OrderedList>;

//<editor-fold desc="Playground. Order">
const OrderedPlaygroundStory: StoryFn<typeof OrderedList> = (props) => <OrderedListPlaygroundTemplate {...props} />;

export const OrderedPlaygroundExample = {
  render: OrderedPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: OrderedListPlaygroundRaw,
      },
    },
  },

  name: 'Playground.',
};

//</editor-fold>

//<editor-fold desc="Order">
const OrderedListVariantsStory: StoryFn<typeof OrderedList> = (props) => <OrderedListVariantsTemplate {...props} />;

export const OrderedListVariantsExample = {
  render: OrderedListVariantsStory,

  parameters: {
    docs: {
      source: {
        code: OrderedListVariantsRaw,
      },
    },
  },

  name: 'OrderedList. Виды и размеры.',
};

//</editor-fold>
