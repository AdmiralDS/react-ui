import React, { useRef } from 'react';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';

import { Tooltip } from '#src/components/TooltipRefactor';
import { TooltipHoc, TooltipHocProps } from '#src/components/TooltipHOC';
import { refSetter } from '../common/utils/refSetter';
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
    <br />
    1) Использовать компонент Tooltip. Данный компонент является контролируемым, поэтому для него обязательно нужно
    задавать параметры visible и onVisibilityChange. Кроме того компоненту Tooltip требуются обязательные параметры:
    targetRef - для указания элемента, относительно которого тултип будет позиционироваться, renderContent -
    рендер-функция для рендеринга содержимого тултипа.
    <br />
    2) Использовать компонент высшего порядка TooltipHoc. Компонент TooltipHoc в качестве агрумента принимает
    функциональный или классовый компонент и возвращает его вместе с позиционируемым относительно него тултипом.
  </Desc>
);

//
export const Test = (props: TooltipHocProps) => <div />;

export default {
  title: 'Admiral-2.1/TooltipRefactor',
  decorators: [withDesign],
  component: Tooltip,
  subcomponents: { TooltipHoc: Test },
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
    'Test/label': {
      control: 'input',
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
      <Button
        ref={btnRef}
        dimension="m"
        displayAsSquare
        aria-label="Delete"
        aria-describedby="test1"
        title={'Это title на кнопке'}
      >
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
  const tooltipRef = useRef(null);
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

const Template4: ComponentStory<typeof Tooltip> = ({ className }) => {
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
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        className={className}
      />
    </>
  );
};

const Template5: ComponentStory<typeof Tooltip> = () => {
  const TooltipedInput = TooltipHoc(InputField);

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
  return <Example label={'use FC component in TooltipHoc'} />;
};

const Template6: ComponentStory<typeof Tooltip> = () => {
  class Car extends React.Component<any> {
    render() {
      const { innerRef, ...props } = this.props;
      return (
        <h2 ref={innerRef} {...props}>
          Hi, I am a Car!
        </h2>
      );
    }
  }
  const CarForwardingRef = React.forwardRef((props, ref) => <Car innerRef={ref} {...props} />);
  const TooltipedInput = TooltipHoc(CarForwardingRef);

  const Example = (props: any) => {
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
  return <Example label={'use FC component in TooltipHoc'} />;
};

const Template7: ComponentStory<typeof Tooltip> = () => {
  const Input = React.forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const handleBtnClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    return (
      <>
        <InputField ref={refSetter(ref, inputRef)} {...props} />
        <Button onClick={handleBtnClick}>Focus input</Button>
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
      if (inputRef.current) {
        inputRef.current.focus();
      }
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
        <Button onClick={handleBtnClick}>Focus Input</Button>
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

export const TooltipWithClassName = Template4.bind({});
TooltipWithClassName.args = {
  className: 'custom-tooltip-class',
};
TooltipWithClassName.storyName = 'Tooltip. ClassName.';

export const TooltipHocBase = Template5.bind({});
TooltipHocBase.args = {};
TooltipHocBase.storyName = 'TooltipHoc. Базовый пример.';

export const TooltipHocClass = Template6.bind({});
TooltipHocClass.args = {};
TooltipHocClass.storyName = 'TooltipHoc. Class.';

export const TooltipHocRefSetter = Template7.bind({});
TooltipHocRefSetter.args = {};
TooltipHocRefSetter.storyName = 'TooltipHoc. RefSetter.';

export const TooltipHocRef = Template8.bind({});
TooltipHocRef.args = {};
TooltipHocRef.storyName = 'TooltipHoc. Ref.';
