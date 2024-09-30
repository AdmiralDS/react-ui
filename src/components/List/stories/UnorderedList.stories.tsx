import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { UnorderedList } from '@admiral-ds/react-ui';

import { UnorderedListVariantsTemplate } from './UnorderedListVariants.template';
import { UnorderedListPlaygroundTemplate } from './UnorderedListPlayground.template';

// Imports of text source
import UnorderedListVariantsRaw from './UnorderedListVariants.template?raw';
import UnorderedListPlaygroundRaw from './UnorderedListPlayground.template?raw';

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
    UnorderedList – компонент для вертикальной группировки связанных по смыслу текстовых пунктов. UnorderedList следует
    использовать, если вам необходим неупорядоченный список, когда смысл списка не меняется в зависимости от порядка
    элементов.
    <Separator />
    Компонент представлен в трех видах (Bullet, Virgule, Icon) и двух размерах (S и M).
  </Desc>
);

export default {
  title: 'Admiral-2.1/List/UnorderedList',
  decorators: undefined,
  component: UnorderedList,
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
} as Meta<typeof UnorderedList>;

//<editor-fold desc="Playground. Unorder">
const UnorderedPlaygroundStory: StoryFn<typeof UnorderedList> = (props) => (
  <UnorderedListPlaygroundTemplate {...props} />
);

export const UnorderedPlaygroundExample = {
  render: UnorderedPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: UnorderedListPlaygroundRaw,
      },
    },
  },

  name: 'Playground.',
};

//</editor-fold>

//<editor-fold desc="Unorder">
const UnorderedListVariantsStory: StoryFn<typeof UnorderedList> = (props) => (
  <UnorderedListVariantsTemplate {...props} />
);

export const UnorderedListVariantsExample = {
  render: UnorderedListVariantsStory,

  parameters: {
    docs: {
      source: {
        code: UnorderedListVariantsRaw,
      },
    },
  },

  name: 'UnorderedList. Виды и размеры.',
};

//</editor-fold>
