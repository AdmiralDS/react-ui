import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';

import { Accordion } from '@admiral-ds/react-ui';

import { AccordionDividerTemplate } from './AccordionDivider.template';
import { AccordionIconTemplate } from './AccordionIcon.template';
import { AccordionModesTemplate } from './AccordionModes.template';
import { AccordionDimensionTemplate } from './AccordionDimension.template';
import { AccordionPlaygroundTemplate } from './AccordionPlayground.template';

// Imports of text sources
import AccordionDividerRaw from './AccordionDivider.template?raw';
import AccordionIconRaw from './AccordionIcon.template?raw';
import AccordionModesRaw from './AccordionModes.template?raw';
import AccordionDimensionRaw from './AccordionDimension.template?raw';
import AccordionPlaygroundRaw from './AccordionPlayground.template?raw';

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
    Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними. Два
    размера: 56 и 40 px.
    <Separator />
    Компонент настроен на автоподстройку высоты, при вводе текста под заголовком. Ширину можно менять вручную, так же
    происходит автоподстройка контента.
    <Separator />
    Если открыта одна закладка, то открытие другой не приводит к ее закрытию. При открытии вкладки весь контент страницы
    под аккордеоном сдвигается вниз на высоту текста открытой вкладки.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A9887',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A10059',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A10103',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['l', 'm'],
      control: { type: 'radio' },
    },
    iconPosition: {
      options: ['right', 'left'],
      control: { type: 'radio' },
    },
    hideTopDivider: {
      control: { type: 'boolean' },
    },
    hideBottomDivider: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Accordion>;

//<editor-fold desc="Размеры">
const AccordionPlaygroundStory: StoryFn<typeof Accordion> = (props) => <AccordionPlaygroundTemplate {...props} />;

export const AccordionPlayground = {
  render: AccordionPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: AccordionPlaygroundRaw,
      },
    },
  },

  name: 'Accordion. Playground.',
};

//</editor-fold>

//<editor-fold desc="Размеры">
const AccordionDimensionStory: StoryFn<typeof Accordion> = () => <AccordionDimensionTemplate />;

export const AccordionDimension = {
  render: AccordionDimensionStory,

  parameters: {
    docs: {
      source: {
        code: AccordionDimensionRaw,
      },
    },
  },

  name: 'Accordion. Размеры.',
};

//</editor-fold>

//<editor-fold desc="Режимы использования">
const AccordionModesStory: StoryFn<typeof Accordion> = (props) => <AccordionModesTemplate {...props} />;

export const AccordionModes = {
  render: AccordionModesStory,

  parameters: {
    docs: {
      source: {
        code: AccordionModesRaw,
      },
    },
  },

  name: 'Accordion. Режимы использования.',
};

//</editor-fold>

//<editor-fold desc="Расположение шеврона слева">
const AccordionIconStory: StoryFn<typeof Accordion> = () => <AccordionIconTemplate />;

export const AccordionIcon = {
  render: AccordionIconStory,
  name: 'Accordion. Расположение шеврона слева.',

  parameters: {
    docs: {
      source: {
        code: AccordionIconRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Скрытие разделителей">
const AccordionDividerStory: StoryFn<typeof Accordion> = () => <AccordionDividerTemplate />;

export const AccordionDivider = {
  render: AccordionDividerStory,

  parameters: {
    docs: {
      source: {
        code: AccordionDividerRaw,
      },
    },
  },

  name: 'Accordion. Скрытие разделителей.',
};
