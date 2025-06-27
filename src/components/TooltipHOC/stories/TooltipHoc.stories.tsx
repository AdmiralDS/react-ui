import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';
import { InputField, TooltipHoc, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { TooltipHocProps } from '@admiral-ds/react-ui';

const TooltipedInput = TooltipHoc(InputField);

// Компонент для генерации таблицы с TooltipHocProps. К сожалению storybook пока не умеет корректно работать напрямую с HOC
// В компонент обязательно должны передаваться TooltipHocProps для правильной генерации таблицы с пропсами в storybook
const TooltipHocStory: React.FC<TooltipHocProps> = (props) => <TooltipedInput {...props} />;

import { TooltipHocBaseTemplate } from './TooltipHocBase.template';
import { TooltipHocClassTemplate } from './TooltipHocClass.template';
import { TooltipHocFCTemplate } from './TooltipHocFC.template';
import { TooltipHocRefSetterTemplate } from './TooltipHocRefSetter.template';
import { TooltipHocRefTemplate } from './TooltipHocRef.template';

// Imports of text sources
import TooltipHocBaseRaw from './TooltipHocBase.template?raw';
import TooltipHocClassRaw from './TooltipHocClass.template?raw';
import TooltipHocFCRaw from './TooltipHocFC.template?raw';
import TooltipHocRefSetterRaw from './TooltipHocRefSetter.template?raw';
import TooltipHocRefRaw from './TooltipHocRef.template?raw';

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
    Тултип — компонент, отвечающий за подсказки, детализацию информации или пояснения. Появляется при наведении на
    элемент, к которому он привязан, сразу, либо с задержкой в 1.5 секунды (опционально). Позиционируется по центру
    объекта, сверху, снизу, слева или справа с отступом 8px.
    <Separator />
    Рекомендуется максимальная ширина 488px. При большем объеме используйте компонент Hint.
    <Separator />
    Приоритетным является расположение тултипа снизу объекта. Далее по приоритетности идут расположения сверху, слева и
    справа.
    <Separator />
    Задать для компонента тултип можно двумя способами:
    <Separator />
    1) Использовать компонент высшего порядка TooltipHoc. Компонент TooltipHoc в качестве агрумента принимает
    функциональный или классовый компонент и возвращает его вместе с позиционируемым относительно него тултипом.
    TooltipHoc реализует функционал появления тултипа (тултип отображается при mouseenter/focus событии на target
    элементе, скрывается - при moseleave/blur событии на target элементе). Как следствие TooltipHoc стоит использовать в
    том случае, если пользователю нужен неконтролируемый тултип (тултип с внутренним state и механизмом
    отображения/скрытия). Компонент TooltipHoc передает в оборачиваемый компонент атрибут ref, поэтому компонент,
    который будет передан в TooltipHoc должен уметь резолвить ref и назначать его на свой корневой элемент (как правило
    это достигается с помощью React.forwardRef).
    <Separator />
    2) Использовать компонент Tooltip. Данный компонент является полностью контролируемым пользователем, то есть
    пользователь определяет в какой момент и при каких событиях отображать тултип, отображать его с задержкой в
    появлении или нет. Подробное описание и примеры использования данного компонента можно найти в соответствующем
    разделе документации.
    <Separator />
    Далее приведены примеры использования компонента TooltipHoc.
  </Desc>
);

export default {
  title: 'Admiral-2.1/TooltipHoc',
  decorators: undefined,
  component: TooltipHocStory,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31354',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31490',
      },
    ],
    componentSubtitle: <Description />,
    layout: 'centered',
  },
  argTypes: {
    tooltipPosition: {
      options: ['bottom', 'top', 'left', 'right'],
      control: { type: 'radio' },
    },
    tooltipRef: {
      control: false,
    },
    container: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof TooltipHocStory>;

//<editor-fold desc="TooltipHoc. Базовый пример.">
const TooltipHocBaseStory: StoryFn<typeof TooltipHocStory> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TooltipHocBaseTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TooltipHocBaseExample = {
  render: TooltipHocBaseStory,

  parameters: {
    docs: {
      source: {
        code: TooltipHocBaseRaw,
      },
    },
  },

  name: 'TooltipHoc. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="TooltipHoc. Пример использования с классовым компонентом.">
const TooltipHocClassStory: StoryFn<typeof TooltipHocStory> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TooltipHocClassTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TooltipHocClassExample = {
  render: TooltipHocClassStory,

  parameters: {
    docs: {
      source: {
        code: TooltipHocClassRaw,
      },
    },
  },

  name: 'TooltipHoc. Пример использования с классовым компонентом.',
};

//</editor-fold>

//<editor-fold desc="TooltipHoc. Пример использования с функциональным компонентом.">
const TooltipHocFCStory: StoryFn<typeof TooltipHocStory> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TooltipHocFCTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TooltipHocFCExample = {
  render: TooltipHocFCStory,

  parameters: {
    docs: {
      source: {
        code: TooltipHocFCRaw,
      },
    },
  },

  name: 'TooltipHoc. Пример использования с функциональным компонентом.',
};

//</editor-fold>

//<editor-fold desc="TooltipHoc. Утилита refSetter для мерджа рефов.">
const TooltipHocRefSetterStory: StoryFn<typeof TooltipHocStory> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TooltipHocRefSetterTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TooltipHocRefSetterExample = {
  render: TooltipHocRefSetterStory,

  parameters: {
    docs: {
      source: {
        code: TooltipHocRefSetterRaw,
      },
    },
  },

  name: 'TooltipHoc. Утилита refSetter для мерджа рефов.',
};

//</editor-fold>

//<editor-fold desc="TooltipHoc. Прокидывание ref на результат вызова TooltipHoc.">
const TooltipHocRefStory: StoryFn<typeof TooltipHocStory> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TooltipHocRefTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TooltipHocRefExample = {
  render: TooltipHocRefStory,

  parameters: {
    docs: {
      source: {
        code: TooltipHocRefRaw,
      },
    },
  },

  name: 'TooltipHoc. Прокидывание ref на результат вызова TooltipHoc.',
};
