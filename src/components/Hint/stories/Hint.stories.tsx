import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { Hint, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { HintBaseTemplate } from './HintBase.template';
import { HintClassNameTemplate } from './HintClassName.template';
import { HintClickTemplate } from './HintClick.template';
import { HintPositionTemplate } from './HintPosition.template';
import { HintTextButtonTemplate } from './HintTextButton.template';
import { HintTargetTemplate } from './HintTarget.template';
import { HintAnchorCssTemplate } from './HintAnchorCss.template';
import { HintWithHeaderTemplate } from './HintWithHeader.template';
import { HintDimensionTemplate } from './HintDimension.template';

// Imports of text sources
import HintBaseRaw from './HintBase.template?raw';
import HintClassNameRaw from './HintClassName.template?raw';
import HintClickRaw from './HintClick.template?raw';
import HintPositionRaw from './HintPosition.template?raw';
import HintTextButtonRaw from './HintTextButton.template?raw';
import HintTargetRaw from './HintTarget.template?raw';
import HintAnchorCssRaw from './HintAnchorCss.template?raw';
import HintWithHeaderRaw from './HintWithHeader.template?raw';
import HintDimensionRaw from './HintDimension.template?raw';

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
    мы уводим курсор с объекта, к которому он привязан, или с самого Hint.
    <Separator />
    По умолчанию Hint появляется по ховеру.
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
const HintBaseStory: StoryFn<typeof Hint> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <HintBaseTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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

//<editor-fold desc="Размеры">
const HintDimensionStory: StoryFn<typeof Hint> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <HintDimensionTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HintDimensionExample = {
  render: HintDimensionStory,

  parameters: {
    docs: {
      source: {
        code: HintDimensionRaw,
      },
    },
  },

  name: 'Hint. Размеры.',
};

//</editor-fold>

//<editor-fold desc="Позиционирование">
const HintPositionStory: StoryFn<typeof Hint> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <HintPositionTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HintPositionExample = {
  render: HintPositionStory,

  parameters: {
    docs: {
      source: {
        code: HintPositionRaw,
      },
    },
  },

  name: 'Hint. Позиционирование.',
};

//</editor-fold>

//<editor-fold desc="Появление по клику">
const HintClickStory: StoryFn<typeof Hint> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <HintClickTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const HintTextButtonStory: StoryFn<typeof Hint> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <HintTextButtonTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HintTextButtonExample = {
  render: HintTextButtonStory,

  parameters: {
    docs: {
      source: {
        code: HintTextButtonRaw,
      },
    },
  },

  name: 'Hint. Пример с кнопкой.',
};

//</editor-fold>

//<editor-fold desc="Позиционирование относительно targetElement">
const HintTargetStory: StoryFn<typeof Hint> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <HintTargetTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HintTargetExample = {
  render: HintTargetStory,

  parameters: {
    docs: {
      source: {
        code: HintTargetRaw,
      },
    },
  },

  name: 'Hint. Позиционирование относительно targetElement.',
};

//</editor-fold>

//<editor-fold desc="ClassName">
const HintClassNameStory: StoryFn<typeof Hint> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <HintClassNameTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HintClassNameExample = {
  render: HintClassNameStory,

  parameters: {
    docs: {
      source: {
        code: HintClassNameRaw,
      },
    },
  },

  name: 'Hint. ClassName.',
};

//</editor-fold>

//<editor-fold desc="Стилизация внешнего контейнера">
const HintAnchorCssStory: StoryFn<typeof Hint> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <HintAnchorCssTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const HintWithHeaderStory: StoryFn<typeof Hint> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <HintWithHeaderTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HintWithHeaderExample = {
  render: HintWithHeaderStory,

  parameters: {
    docs: {
      source: {
        code: HintWithHeaderRaw,
      },
    },
  },

  name: 'Hint с заголовком.',
};

//</editor-fold>
