import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';

import { TooltipHoc } from '.';
import { TextInput, TextInputProps } from '#src/components/input/TextInput';
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
  title: 'Admiral-2.1/TooltipHoc',
  decorators: [withDesign],
  component: TooltipHoc as unknown,
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

const Input = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  React.useEffect(() => {
    console.log('input rerender');
  });
  return <TextInput ref={ref} {...props} />;
});

const Template1: ComponentStory<any> = (args) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const TooltipedInput = TooltipHoc(Input);

  const Example = () => {
    const [visible, setVisible] = React.useState(false);
    // const TooltipedInput = TooltipHOC(Input);
    return (
      <TooltipedInput
        visible={visible}
        handleVisibilityChange={(visible: boolean) => {
          setVisible(visible);
        }}
        renderContent={() => 'use FC component in TooltipHoc'}
      />
    );
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <Example />
    </ThemeProvider>
  );
};

// const Template3: ComponentStory<any> = (args) => {
//   function swapBorder(theme: Theme): Theme {
//     theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
//     return theme;
//   }

//   const Input = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
//     return <TextInput ref={ref} {...props} />;
//   });

//   const TooltipedInput = TooltipHOC(Input);
//   const inputRef = React.useRef<HTMLInputElement | null>(null);
//   React.useEffect(() => {
//     console.log(inputRef.current);
//   }, []);

//   return (
//     <ThemeProvider theme={swapBorder}>
//       <TooltipedInput ref={inputRef} renderContent={() => 'set ref on TooltipHoc result'} />
//     </ThemeProvider>
//   );
// };

// const Template4: ComponentStory<any> = (args) => {
//   function swapBorder(theme: Theme): Theme {
//     theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
//     return theme;
//   }

//   const Input = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
//     const inputRef = React.useRef<HTMLInputElement | null>(null);
//     React.useEffect(() => {
//       if (inputRef.current) {
//         inputRef.current.style.border = '4px solid red';
//       }
//     }, []);
//     return <TextInput ref={refSetter(ref, inputRef)} {...props} />;
//   });

//   const TooltipedInput = TooltipHOC(Input);
//   return (
//     <ThemeProvider theme={swapBorder}>
//       <TooltipedInput renderContent={() => 'merge refs in FC component'} />
//     </ThemeProvider>
//   );
// };

export const TooltipFC = Template1.bind({});
TooltipFC.args = {};
TooltipFC.storyName = 'TooltipHoc. Вызов с функциональным компонентом.';

// export const TooltipRef = Template3.bind({});
// TooltipRef.args = {};
// TooltipRef.storyName = 'TooltipHoc. Прокидывание ref на результат вызова TooltipHoc.';

// export const TooltipRefSetter = Template4.bind({});
// TooltipRefSetter.args = {};
// TooltipRefSetter.storyName = 'TooltipHoc. Merge inputRef с ref6 созданным внутри компонента.';
