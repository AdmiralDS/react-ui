import * as React from 'react';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';

import { Tooltip } from '#src/components/TooltipRefactor';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { TooltipHocStory } from '#src/components/TooltipHOC/story';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Button } from '#src/components/Button';
import { InputField } from '#src/components/form';
import type { InputFieldProps } from '#src/components/form';
import { Theme } from '#src/components/themes';

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
    1) Использовать компонент Tooltip. Данный компонент является контролируемым, поэтому для него обязательно нужно
    задавать параметры visible и onVisibilityChange. Кроме того компоненту Tooltip требуются обязательные параметры:
    targetRef - для указания элемента, относительно которого тултип будет позиционироваться, renderContent -
    рендер-функция для рендеринга содержимого тултипа.
    <Separator />
    2) Использовать компонент высшего порядка TooltipHoc. Компонент TooltipHoc в качестве агрумента принимает
    функциональный или классовый компонент и возвращает его вместе с позиционируемым относительно него тултипом.
    Компонент TooltipHoc передает в оборачиваемый компонент атрибут ref, поэтому компонент, который будет передан в
    TooltipHoc должен уметь резолвить ref и назначать его на свой корневой элемент (как правило это достигается с
    помощью React.forwardRef).
    <Separator />
    Далее приведены таблицы с описанием пропсов как для Tooltip, так и для TooltipHoc, а также примеры использования
    данных компонентов.
  </Desc>
);

export default {
  title: 'Admiral-2.1/TooltipRefactor',
  decorators: [withDesign],
  component: Tooltip,
  subcomponents: {
    TooltipHoc: TooltipHocStory,
  },
  parameters: {
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
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    withDelay: {
      control: { type: 'boolean' },
    },
    tooltipPosition: {
      options: ['bottom', 'top', 'left', 'right', 'bottomPageCenter', 'topPageCenter'],
      control: { type: 'radio' },
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template1: ComponentStory<typeof Tooltip> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  return (
    <ThemeProvider theme={swapBorder}>
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test1">
        <DeleteOutline aria-hidden />
      </Button>
      <Tooltip
        targetRef={btnRef}
        visible={visible}
        onVisibilityChange={(visible: boolean) => setVisible(visible)}
        renderContent={() =>
          `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum'`
        }
        style={{ minWidth: '200px', maxWidth: '300px' }}
        withDelay={args.withDelay}
        tooltipPosition={args.tooltipPosition}
        id="test1"
      />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof Tooltip> = () => {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test2">
        <DeleteOutline height={24} width={24} />
      </Button>
      <Tooltip
        targetRef={btnRef}
        visible={visible}
        onVisibilityChange={(visible: boolean) => setVisible(visible)}
        renderContent={() => 'Delete file'}
        withDelay
        id="test2"
      />
    </>
  );
};

const Template3: ComponentStory<typeof Tooltip> = () => {
  const tooltipRef = React.useRef(null);
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test3">
        <DeleteOutline height={24} width={24} />
      </Button>
      <Tooltip
        targetRef={btnRef}
        visible={visible}
        onVisibilityChange={(visible: boolean) => setVisible(visible)}
        renderContent={() => 'Delete file'}
        tooltipRef={tooltipRef}
        id="test3"
      />
    </>
  );
};

const Template4: ComponentStory<typeof Tooltip> = () => {
  // TooltipedInput задан вне InputFieldComponent, чтобы TooltipedInput не зависил от обновления state в InputFieldComponent
  const TooltipedInput = TooltipHoc(InputField);

  const InputFieldComponent = (props: InputFieldProps) => {
    const [visible, setVisible] = React.useState(false);
    return (
      <TooltipedInput
        visible={visible}
        handleVisibilityChange={(visible: boolean) => setVisible(visible)}
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        {...props}
      />
    );
  };
  return <InputFieldComponent label={'TooltipHoc. Базовый пример.'} />;
};

const Template5: ComponentStory<typeof Tooltip> = () => {
  type TestType = {
    innerRef: React.ForwardedRef<HTMLHeadingElement>;
    label: string;
  };
  class Test extends React.Component<TestType> {
    render() {
      const { innerRef, label } = this.props;
      return <h2 ref={innerRef}>{label}</h2>;
    }
  }
  const TestForwardingRef = React.forwardRef<HTMLHeadingElement, Omit<TestType, 'innerRef'>>((props, ref) => (
    <Test innerRef={ref} {...props} />
  ));
  const TooltipedTest = TooltipHoc(TestForwardingRef);

  const Example = (props: Omit<TestType, 'innerRef'>) => {
    const [visible, setVisible] = React.useState(false);
    return (
      <TooltipedTest
        visible={visible}
        handleVisibilityChange={(visible: boolean) => setVisible(visible)}
        renderContent={() => `Пример использования TooltipHoc с классовым компонентом.`}
        {...props}
      />
    );
  };
  return <Example label={'Наведи на меня мышью и увидишь тултип'} />;
};

const Template6: ComponentStory<typeof Tooltip> = () => {
  const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
    return (
      <h2 ref={ref} {...props}>
        Наведи на меня мышью и увидишь тултип
      </h2>
    );
  });
  const TooltipedHeading = TooltipHoc(H2);

  const Example = () => {
    const [visible, setVisible] = React.useState(false);
    return (
      <TooltipedHeading
        visible={visible}
        handleVisibilityChange={(visible: boolean) => setVisible(visible)}
        renderContent={() => `Пример использования TooltipHoc с функциональным компонентом.`}
      />
    );
  };
  return <Example />;
};

const Template7: ComponentStory<typeof Tooltip> = () => {
  const Input = React.forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const handleBtnClick = () => {
      inputRef.current?.focus();
    };
    return (
      <>
        <InputField ref={refSetter(ref, inputRef)} {...props} />
        <Separator />
        <Button onClick={handleBtnClick}>Click me and focus input</Button>
      </>
    );
  });
  const TooltipedInput = TooltipHoc(Input);

  const Example = (props: InputFieldProps) => {
    const [visible, setVisible] = React.useState(false);
    return (
      <TooltipedInput
        visible={visible}
        handleVisibilityChange={(visible: boolean) => setVisible(visible)}
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        {...props}
      />
    );
  };
  return <Example label={'use refSetter'} />;
};

const Template8: ComponentStory<typeof Tooltip> = () => {
  const TooltipedInput = TooltipHoc(InputField);

  const Example = (props: InputFieldProps) => {
    const [visible, setVisible] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const handleBtnClick = () => {
      inputRef.current?.focus();
    };
    return (
      <>
        <TooltipedInput
          visible={visible}
          handleVisibilityChange={(visible: boolean) => setVisible(visible)}
          renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
          ref={inputRef}
          {...props}
        />
        <Separator />
        <Button onClick={handleBtnClick}>Click me and focus input</Button>
      </>
    );
  };
  return <Example label={'use FC component in TooltipHoc'} />;
};

export const TooltipBase = Template1.bind({});
TooltipBase.args = {};
TooltipBase.storyName = 'Tooltip. Базовый пример.';

export const TooltipDelay = Template2.bind({});
TooltipDelay.args = {};
TooltipDelay.storyName = 'Tooltip. Пример с задержкой в появлении.';

export const TooltipRef = Template3.bind({});
TooltipRef.args = {};
TooltipRef.storyName = 'Tooltip. Пример с получением ref тултипа.';

export const TooltipHocBase = Template4.bind({});
TooltipHocBase.args = {};
TooltipHocBase.storyName = 'TooltipHoc. Базовый пример.';

export const TooltipHocClass = Template5.bind({});
TooltipHocClass.args = {};
TooltipHocClass.storyName = 'TooltipHoc. Пример использования с классовым компонентом.';

export const TooltipHocFC = Template6.bind({});
TooltipHocFC.args = {};
TooltipHocFC.storyName = 'TooltipHoc. Пример использования с функциональным компонентом.';

export const TooltipHocRefSetter = Template7.bind({});
TooltipHocRefSetter.args = {};
TooltipHocRefSetter.storyName = 'TooltipHoc. Утилита refSetter для мерджа рефов.';
TooltipHocFC.parameters = {
  docs: {
    description: {
      story: `Если в ваш компонент извне передан параметр ref и у вас есть внутренний 
      ref в компоненте, для синхронной работы данных рефов и их мерджа вы можете воспользоваться утилитой refSetter.`,
    },
  },
};

export const TooltipHocRef = Template8.bind({});
TooltipHocRef.args = {};
TooltipHocRef.storyName = 'TooltipHoc. Прокидывание ref на результат вызова TooltipHoc.';
