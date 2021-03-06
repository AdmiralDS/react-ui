import React, { useRef } from 'react';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';

import { Tooltip } from '#src/components/Tooltip';
import { Button } from '#src/components/Button';
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
  title: 'Admiral-2.1/Tooltip',
  decorators: [withDesign],
  component: Tooltip,
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

  return (
    <ThemeProvider theme={swapBorder}>
      <Tooltip
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
      >
        <Button
          dimension="m"
          displayAsSquare
          aria-label="Delete"
          aria-describedby="test1"
          title={'Это title на кнопке'}
        >
          <DeleteOutline aria-hidden />
        </Button>
      </Tooltip>
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof Tooltip> = () => {
  return (
    <>
      <Tooltip renderContent={() => 'Delete file'} withDelay id="test2">
        <Button dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test2">
          <DeleteOutline height={24} width={24} />
        </Button>
      </Tooltip>
    </>
  );
};

const Template3: ComponentStory<typeof Tooltip> = () => {
  const tooltipRef = useRef(null);
  return (
    <>
      <Tooltip renderContent={() => 'Delete file'} tooltipRef={tooltipRef} id="test3">
        <Button dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test3">
          <DeleteOutline height={24} width={24} />
        </Button>
      </Tooltip>
    </>
  );
};

const Template4: ComponentStory<typeof Tooltip> = ({ className }) => {
  return (
    <>
      <Tooltip
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        className={className}
      >
        <Button dimension="m" displayAsSquare aria-label="Delete" title={'Это title на кнопке'}>
          <DeleteOutline aria-hidden />
        </Button>
      </Tooltip>
    </>
  );
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
