import type { Meta, StoryFn } from '@storybook/react';

import { ScrollContainer } from '@admiral-ds/react-ui';

import { ScrollbarTemplate } from './Scrollbar.template';
import { ModalTextAreaScrollTemplate } from './ModalTextAreaScroll.template';
import { ListWithNestedScrollTemplate } from './ListWithNestedScroll.template';

import ScrollbarTemplateRaw from './Scrollbar.template?raw';
import ModalTextAreaScrollTemplateRaw from './ModalTextAreaScroll.template?raw';
import ListWithNestedScrollTemplateRaw from './ListWithNestedScroll.template?raw';

export default {
  title: 'Admiral-2.1/ScrollContainer',
  component: ScrollContainer,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    contentBlockProps: {
      control: false,
    },
    verticalScrollProps: {
      control: false,
    },
    horizontalScrollProps: {
      control: false,
    },
  },
} as Meta<typeof ScrollContainer>;

//#region"Базовый пример ScrollContainer">
const BaseScrollContainerStory: StoryFn<typeof ScrollContainer> = (props) => {
  return <ScrollbarTemplate {...props} />;
};

export const BaseScrollContainerExample = {
  render: BaseScrollContainerStory,

  parameters: {
    docs: {
      source: {
        code: ScrollbarTemplateRaw,
      },
    },
  },

  name: 'ScrollContainer',
};
//#endregion

//#region"ScrollContainer внутри модального окна">
const ModalTextAreaScrollStory: StoryFn<typeof ScrollContainer> = (props) => {
  return <ModalTextAreaScrollTemplate {...props} />;
};

export const ModalTextAreaScrollExample = {
  render: ModalTextAreaScrollStory,

  parameters: {
    docs: {
      source: {
        code: ModalTextAreaScrollTemplateRaw,
      },
    },
  },

  name: 'ScrollContainer внутри модального окна',
};
//#endregion

//#region"Scrollbar со свойством enableTransformSync">
const ListWithNestedScrollStory: StoryFn<typeof ScrollContainer> = (props) => {
  return <ListWithNestedScrollTemplate {...props} />;
};

export const ListWithNestedScrollExample = {
  render: ListWithNestedScrollStory,

  parameters: {
    docs: {
      source: {
        code: ListWithNestedScrollTemplateRaw,
      },
      description: {
        story: `
## Фича: \`enableTransformSync\`

Опциональное свойство компонента \`Scrollbars\`, позволяющее
синхронизировать положение контейнеров кастомных скроллбаров с прокруткой контента
через CSS \`transform\`.

### Когда использовать

Используйте эту опцию, когда скролл в вашем приложении происходит за счёт \`transform\`,
например:
- В виртуализированных списках, где позиция контента управляется через \`transform: translateY(...)\`
- В сложных анимациях прокрутки

### Ограничения

⚠️ **Используйте с осторожностью.** Включение опции создаёт новый stacking context
у контейнеров скроллбара, что может приводить к визуальным артефактам:
- Скроллбар вложенных элементов (\`TextArea\`, \`select\`, \`iframe\`)
  может визуально «вылезать» за свои границы
- Возможны проблемы с z-index в сложных layout'ах

### Как проверить

1. Включите тумблер \`enableTransformSync\` в стори.
2. Прокрутите список вниз до элементов с \`TextArea\` (каждый 4-й).
3. Попробуйте прокрутить содержимое \`TextArea\` вправо (горизонтальный скролл).
4. Обратите внимание на поведение нативного скроллбара \`TextArea\`.
        `,
      },
    },
  },

  name: 'ScrollContainer Transform Sync',
};
//#endregion
