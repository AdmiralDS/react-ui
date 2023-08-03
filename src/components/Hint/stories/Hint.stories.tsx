import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { Hint, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { HintBaseTemplate } from './HintBase.template';
import { HintClassNameTemplate } from './HintClassName.template';
import { HintClickTemplate } from './HintClick.template';
import { HintPositionTemplate } from './HintPosition.template';
import { HintTextButtonTemplate } from './HintTextButton.template';
import { HintTargetTemplate } from './HintTarget.template';
import { HintAnchorCssTemplate } from './HintAnchorCss.template';
import { HintWithHeaderTemplate } from './HintWithHeader.template';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import HintBaseRaw from './HintBase.template?raw';
import HintClassNameRaw from './HintClassName.template?raw';
import HintClickRaw from './HintClick.template?raw';
import HintPositionRaw from './HintPosition.template?raw';
import HintTextButtonRaw from './HintTextButton.template?raw';
import HintTargetRaw from './HintTarget.template?raw';
import HintAnchorCssRaw from './HintAnchorCss.template?raw';
import HintWithHeaderRaw from './HintWithHeader.template?raw';

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Всплывающая подсказка используется для ситуаций, когда требуется пояснить или раскрыть информацию более детально.
    Вызывается либо по клику, например на иконку Question, либо по ховеру на любом элементе, когда недостаточно
    Tooltip-а.
    <Separator />В случае, когда Hint вызывается по клику, у нас есть возможность его закрыть кликом вне Hint-а, либо
    нажатием на крестик.
    <Separator />В сценарии, когда Hint вызывается по ховеру, иконки закрытия на компоненте нет и он скрывается, когда
    мы уводим курсор с объекта, к которому он привязан.
    <Separator />
    Hint имеет три фиксированных по ширине размера: 280px, 384px и 488px, которые используются в зависимости от
    предполагаемого объема текста. На экранах мобильных устройств, меньше 640px, компонент адаптируется по ширине к
    рабочей области устройства. Высота компонента настраивается автоматически при задании контента. Максимальная высота
    компонента – 320px, после чего у контента появляется вертикальный скролл.
    <Separator />
    По умолчанию Hint-у присваивается самый большой размер, Hint появляется по ховеру.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Hint',
  decorators: undefined,
  component: Hint,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31273',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31388',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31455',
      },
    ],
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    visibilityTrigger: {
      options: ['hover', 'click'],
      control: { type: 'radio' },
    },
    hintPosition: {
      options: ['bottom', 'top', 'left', 'right'],
      control: { type: 'radio' },
    },
    container: {
      control: false,
    },
    target: {
      control: false,
    },
    locale: {
      control: false,
    },
    hintRef: {
      control: false,
    },
    anchorClassName: {
      control: false,
    },
    anchorId: {
      control: false,
    },
    anchorCssMixin: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Hint>;

//<editor-fold desc="Базовый пример">
const HintBaseStory: StoryFn<typeof Hint> = (props) => (
  <HintBaseTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);

export const HintBaseExample = {
  render: HintBaseStory,

  parameters: {
    docs: {
      source: {
        code: HintBaseRaw,
      },
    },
  },

  name: 'Hint. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="Позиционирование">
const HintPositionStory: StoryFn<typeof Hint> = (props) => (
  <HintPositionTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);

export const HintPositionExample = {
  render: HintPositionStory,

  parameters: {
    docs: {
      source: {
        code: HintPositionRaw,
      },
      description: {
        story: `Компонент имеет 8 основных вариантов позиционирования: снизу справа, снизу слева, сверху справа, 
        сверху слева, слева внизу, слева вверху, справа внизу и справа вверху. Позиции перечислены в порядке приоритета.
        По умолчанию компонент сам рассчитывает свою позицию, исходя из приоритета позиций и свободного места на экране.
        Если хинт не помещается ни в один из перечисленных 8 вариантов позиционирования, то происходит проверка того, можно ли разместить хинт
        снизу/сверху/слева/справа относительно центра target-элемента или снизу/сверху по центру страницы.\n\nТакже 
        пользователь может сам с помощью параметра hintPosition задать, с какой стороны от target-элемента должен появляться Hint.
        Параметр hintPosition может принимать следующие значения - bottom|top|left|right. \n\n* При hintPosition='bottom' 
        хинт рендерится снизу от target-элемента с возможным сдвигом по горизонтальной оси, т.е. происходит выбор 
        из 4 вариантов позиционирования: снизу справа, снизу слева, снизу по центру target-элемента и 
        снизу по центру страницы (позиции расположены в порядке приоритета);\n\n* При hintPosition='top' хинт рендерится сверху от target-элемента 
        с возможным сдвигом по горизонтальной оси, т.е. происходит выбор из 4 вариантов позиционирования: сверху справа, сверху слева, сверху 
        по центру target-элемента и сверху по центру страницы (позиции расположены в порядке приоритета);\n\n* При hintPosition='left' 
        хинт рендерится слева от target-элемента с возможным сдвигом по вертикальной оси, т.е. происходит выбор из 3 вариантов позиционирования: 
        слева снизу, слева сверху и слева по центру target-элемента (позиции расположены в порядке приоритета);\n\n* При hintPosition='right' 
        хинт рендерится справа от target-элемента с возможным сдвигом по вертикальной оси, т.е. происходит выбор из 3 вариантов 
        позиционирования: справа снизу, справа сверху и справа по центру target-элемента (позиции расположены в порядке приоритета).\n\nНа 
        экранах мобильных устройств, меньше 640px, 
        компонент адаптируется по ширине к рабочей области устройства, то есть занимает всю ширину экрана 
        и позиционируется только снизу или сверху от target-элемента.\n\nНиже приведен пример с использованием параметра hintPosition.`,
      },
    },
  },

  name: 'Hint. Позиционирование.',
};

//</editor-fold>

//<editor-fold desc="Появление по клику">
const HintClickStory: StoryFn<typeof Hint> = (props) => (
  <HintClickTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);

export const HintClickExample = {
  render: HintClickStory,

  parameters: {
    docs: {
      source: {
        code: HintClickRaw,
      },
    },
  },

  name: 'Hint. Появление по клику.',
};

//</editor-fold>

//<editor-fold desc="С кнопкой">
const HintTextButtonStory: StoryFn<typeof Hint> = (props) => (
  <HintTextButtonTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);

export const HintTextButtonExample = {
  render: HintTextButtonStory,

  parameters: {
    docs: {
      source: {
        code: HintTextButtonRaw,
      },
      description: {
        story: `В качества контента хинта может выступать любой ReactNode, 
        например допускается использование TextButton внутри хинта. В случае если 
      хинт содержит в себе TextButton, триггером его появления должен быть click.`,
      },
    },
  },

  name: 'Hint. Пример с кнопкой.',
};

//</editor-fold>

//<editor-fold desc="Позиционирование относительно target">
const HintTargetStory: StoryFn<typeof Hint> = (props) => (
  <HintTargetTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);

export const HintTargetExample = {
  render: HintTargetStory,

  parameters: {
    docs: {
      source: {
        code: HintTargetRaw,
      },
    },
  },

  name: 'Hint. Позиционирование относительно target.',
};

//</editor-fold>

//<editor-fold desc="ClassName">
const HintClassNameStory: StoryFn<typeof Hint> = (props) => (
  <HintClassNameTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);

export const HintClassNameExample = {
  render: HintClassNameStory,

  parameters: {
    docs: {
      source: {
        code: HintClassNameRaw,
      },
      description: {
        story: `На Hint, созданный через портал, добавляется класс через пропс className.`,
      },
    },
  },

  name: 'Hint. ClassName.',
};

//</editor-fold>

//<editor-fold desc="Стилизация внешнего контейнера">
const HintAnchorCssStory: StoryFn<typeof Hint> = (props) => (
  <HintAnchorCssTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);

export const HintAnchorCssExample = {
  render: HintAnchorCssStory,

  parameters: {
    docs: {
      source: {
        code: HintAnchorCssRaw,
      },
    },
  },

  name: 'Hint. Стилизация внешнего контейнера (AnchorWrapper) с помощью anchorCssMixin.',
};

//</editor-fold>

//<editor-fold desc="Hint с заголовком">
const HintWithHeaderStory: StoryFn<typeof Hint> = (props) => (
  <HintWithHeaderTemplate visible renderContent={() => ''} {...cleanUpProps(props)} />
);

export const HintWithHeaderExample = {
  render: HintWithHeaderStory,

  parameters: {
    docs: {
      source: {
        code: HintWithHeaderRaw,
      },
      description: {
        story: `В качества контента хинта может выступать любой ReactNode, 
        можно добавить, например, заголовок.`,
      },
    },
  },

  name: 'Hint с заголовком.',
};

//</editor-fold>
