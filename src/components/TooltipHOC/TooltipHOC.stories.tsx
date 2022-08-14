import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';

import { Tooltip } from '#src/components/Tooltip';
import { TooltipHOC } from '.';
import { TextInput } from '#src/components/input/TextInput';
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
  </Desc>
);

export default {
  title: 'Admiral-2.1/TooltipHOC',
  decorators: [withDesign],
  component: TooltipHOC as unknown,
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
} as any;

const Template1: ComponentStory<typeof Tooltip> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const Input = ({ innerRef, ...props }: any) => {
    return <TextInput ref={innerRef} {...props} />;
  };

  const TooltipedInput: any = TooltipHOC(Input, () => 'use FC component in TooltipHoc');
  return (
    <ThemeProvider theme={swapBorder}>
      <TooltipedInput />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof Tooltip> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  class Input extends React.Component<any> {
    render() {
      return <TextInput ref={this.props.innerRef} {...this.props} />;
    }
  }

  const TooltipedInput: any = TooltipHOC(Input, () => 'use class component in TooltipHoc');
  return (
    <ThemeProvider theme={swapBorder}>
      <TooltipedInput />
    </ThemeProvider>
  );
};

const Template3: ComponentStory<typeof Tooltip> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const Input = ({ innerRef, ...props }: any) => {
    return <TextInput ref={innerRef} {...props} />;
  };

  const TooltipedInput: any = TooltipHOC(Input, () => 'set ref on TooltipHoc result');
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <ThemeProvider theme={swapBorder}>
      <TooltipedInput ref={inputRef} />
    </ThemeProvider>
  );
};

const Template4: ComponentStory<typeof Tooltip> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const Input = ({ innerRef, ...props }: any) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.style.border = '4px solid red';
      }
    }, []);

    return <TextInput ref={refSetter(innerRef, inputRef)} {...props} />;
  };

  class Input2 extends React.Component<any> {
    private inputField: React.RefObject<HTMLInputElement>;
    constructor(props: any) {
      super(props);
      this.inputField = React.createRef();
    }
    componentDidMount() {
      this.inputField.current?.focus();
      if (this.inputField.current) {
        this.inputField.current.style.border = '4px solid blue';
      }
    }

    render() {
      return <TextInput ref={refSetter(this.props.innerRef, this.inputField)} {...this.props} />;
    }
  }

  const TooltipedInput: any = TooltipHOC(Input, () => 'merge refs in FC component');
  const TooltipedInput2: any = TooltipHOC(Input2, () => 'merge refs in class component');
  return (
    <ThemeProvider theme={swapBorder}>
      <TooltipedInput />
      <TooltipedInput2 />
    </ThemeProvider>
  );
};

export const TooltipFC = Template1.bind({});
TooltipFC.args = {};
TooltipFC.storyName = 'TooltipHoc. Вызов с функциональным компонентом.';

export const TooltipClass = Template2.bind({});
TooltipClass.args = {};
TooltipClass.storyName = 'TooltipHoc. Вызов с классовым компонентом.';

export const TooltipRef = Template3.bind({});
TooltipRef.args = {};
TooltipRef.storyName = 'TooltipHoc. Прокидывание ref на результат вызова TooltipHoc.';

export const TooltipRefSetter = Template4.bind({});
TooltipRefSetter.args = {};
TooltipRefSetter.storyName = 'TooltipHoc. Merge inputRef с ref6 созданным внутри компонента.';
