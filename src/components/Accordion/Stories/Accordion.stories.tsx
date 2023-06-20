import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Accordion, AccordionItem } from '@admiral-ds/react-ui';

import {
  AccordionDimensionTemplate,
  AccordionDividerTemplate,
  AccordionIconTemplate,
  AccordionModesTemplate,
  AccordionPlaygroundTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import AccordionDividerRaw from '!!raw-loader!./Templates/AccordionDivider';
import AccordionIconRaw from '!!raw-loader!./Templates/AccordionIcon';
import AccordionModesRaw from '!!raw-loader!./Templates/AccordionModes';
import AccordionDimensionRaw from '!!raw-loader!./Templates/AccordionDimension';
import AccordionPlaygroundRaw from '!!raw-loader!./Templates/AccordionPlayground';

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
    под ак аккордеоном сдвигается вниз на высоту текста открытой вкладки.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
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
} as ComponentMeta<typeof Accordion>;

//<editor-fold desc="Размеры">
const AccordionPlaygroundStory: ComponentStory<typeof Accordion> = (props) => (
  <AccordionPlaygroundTemplate {...cleanUpProps(props)} />
);

export const AccordionPlayground = AccordionPlaygroundStory.bind({});
AccordionPlayground.parameters = {
  docs: {
    source: {
      code: AccordionPlaygroundRaw,
    },
  },
};
AccordionPlayground.storyName = 'Accordion. Playground.';
//</editor-fold>

//<editor-fold desc="Размеры">
const AccordionDimensionStory: ComponentStory<typeof Accordion> = () => <AccordionDimensionTemplate />;

export const AccordionDimension = AccordionDimensionStory.bind({});
AccordionDimension.parameters = {
  docs: {
    source: {
      code: AccordionDimensionRaw,
    },
    description: {
      story: `Существует в двух размерах - L и M.`,
    },
  },
};
AccordionDimension.storyName = 'Accordion. Размеры.';
//</editor-fold>

//<editor-fold desc="Режимы использования">
const AccordionModesStory: ComponentStory<typeof Accordion> = (props) => (
  <AccordionModesTemplate {...cleanUpProps(props)} />
);

export const AccordionModes = AccordionModesStory.bind({});
AccordionModes.parameters = {
  docs: {
    source: {
      code: AccordionModesRaw,
    },
    description: {
      story: `Компонент AccordionItem может работать в контролируемом и неконтролируемом режимах.
      Параметр expanded задает состояние компонента в контролируемом режиме:\n\n - если true,
      разворачивает тело аккордеона;\n\n- если false, сворачивает тело аккордеона.\n\nЕсли свойство
      expanded передано - автоматическое сворачивание/разворачивание блокируется. В неконтролируемом режиме дефолтное
      состояние аккордеона можно задать с помощью свойства defaultExpanded.`,
    },
  },
};
AccordionModes.storyName = 'Accordion. Режимы использования.';
//</editor-fold>

//<editor-fold desc="Расположение шеврона слева">
const AccordionIconStory: ComponentStory<typeof Accordion> = () => <AccordionIconTemplate />;

export const AccordionIcon = AccordionIconStory.bind({});
AccordionIcon.storyName = 'Accordion. Расположение шеврона слева.';
AccordionIcon.parameters = {
  docs: {
    source: {
      code: AccordionIconRaw,
    },
    description: {
      story: `Альтернативным вариантом является расположение шеврона слева от заголовка. Текст заголовка и иконка 
      шеврона просто меняются местами с сохранением всех расстояний и размеров. При этом компоновка остальных 
      элементов компонента никак не меняются.\n\nИспользуйте параметр iconPosition, чтобы управлять расположением шеврона.`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Скрытие разделителей">
const AccordionDividerStory: ComponentStory<typeof Accordion> = () => <AccordionDividerTemplate />;

export const AccordionDivider = AccordionDividerStory.bind({});
AccordionDivider.parameters = {
  docs: {
    source: {
      code: AccordionDividerRaw,
    },
    description: {
      story: `В зависимости от контекста можно включать-выключать разделители блоков компонента 
      (верхнюю и нижнюю полоски). Например при использовании на подложке. Высота компонента при 
      этом не меняется.\n\nДля отключения верхнего разделителя используйте параметр hideTopDivider, данный параметр 
      скрывает верхний разделитель у первого AccordionItem, заданного внутри Accordion. Для отключения
      нижнего разделителя используйте параметр hideBottomDivider, данный параметр скрывает нижний 
      разделитель у последнего AccordionItem, заданного внутри Accordion.`,
    },
  },
};
AccordionDivider.storyName = 'Accordion. Скрытие разделителей.';
//</editor-fold>
