import * as React from 'react';
import styled, { css } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as InfoSolid } from '@admiral-ds/icons/build/service/InfoSolid.svg';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';
import { ReactComponent as ErrorSolid } from '@admiral-ds/icons/build/service/ErrorSolid.svg';
import { StatusIndicator } from '#src/components/StatusIndicator';
import { T } from '#src/components/T';

const Desc = styled.div`
  font-family: 'VTB Group UI', serif;
  font-size: 16px;
  line-height: 24px;
`;

const StyledText = styled(T)`
  margin: 10px 0;
`;

const OrangeColor = css`
  color: ${(p) => p.theme.color['Warning/Warning 50 Main']};
  > div {
    svg {
      path {
        fill: ${(p) => p.theme.color['Warning/Warning 50 Main']};
      }
    }
  }
`;

const Description = () => (
  <Desc>Компонент Status Indicator используется для отображения состояния объекта или действия.</Desc>
);

export default {
  title: 'Admiral-2.1/StatusIndicator',
  decorators: [withDesign],
  component: StatusIndicator,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A18744',
    },
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    text: {
      control: { type: 'text' },
    },
    displayRight: {
      control: { type: 'boolean' },
    },
    cssMixin: {
      control: false,
    },
  },
} as ComponentMeta<typeof StatusIndicator>;

const StatusIndicatorDemoPlayground: ComponentStory<typeof StatusIndicator> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);
  return (
      <StatusIndicator text="P 16px/24 book" icon={<CheckOutline />} {...cleanProps} />
  );
};
export const Playground = StatusIndicatorDemoPlayground.bind({});
Playground.args = {};

const StatusIndicatorDemoDimensionStory: ComponentStory<typeof StatusIndicator> = () => {
  return (
    <>
      <StyledText font="Body/Body 1 Long" as="div">
        Dimension - M
      </StyledText>
      <StatusIndicator dimension="m" text="P 16px/24 book" icon={<CheckOutline />} />
      <StyledText font="Body/Body 1 Long" as="div">
        Dimension - S
      </StyledText>
      <StatusIndicator dimension="s" text="P 14px/20 book" icon={<InfoSolid />} />
    </>
  );
};

export const StatusIndicatorDemoDimension = StatusIndicatorDemoDimensionStory.bind({});
StatusIndicatorDemoDimension.args = {};
StatusIndicatorDemoDimension.storyName = 'Status Indicator. Размеры компонента';
StatusIndicatorDemoDimension.parameters = {
  docs: {
    description: {
      story: `Компонент регулируется только по высоте и представлен в размерах M (24px) и S (20px), ширина подстраивается под контент.`,
    },
  },
};

const StatusIndicatorDemoStoryPosition: ComponentStory<typeof StatusIndicator> = () => {
  return (
    <>
      <StyledText font="Body/Body 1 Long" as="div">
        Кастомное цветовое отображение статуса
      </StyledText>
      <StatusIndicator cssMixin={OrangeColor} dimension="m" text="P 16px/24 book" icon={<InfoSolid />} />
      <StyledText font="Body/Body 1 Long" as="div">
        Позиционирование иконки индикатора справа
      </StyledText>
      <StatusIndicator dimension="m" text="P 16px/24 book" displayRight={false} icon={<ErrorSolid />} />
      <StyledText font="Body/Body 1 Long" as="div">
        Без иконки
      </StyledText>
      <StatusIndicator dimension="m" text="P 16px/24 book" />
    </>
  );
};

export const StatusIndicatorDemoPosition = StatusIndicatorDemoStoryPosition.bind({});
StatusIndicatorDemoPosition.args = {};
StatusIndicatorDemoPosition.storyName = 'Status Indicator. Альтернативные варианты отображения';
StatusIndicatorDemoPosition.parameters = {
  docs: {
    description: {
      story: `Через параметр cssMixin можно изменять цветовое отображение статуса. Также с помощью 
      параметра displayRight можно управлять позиционированием иконки.`,
    },
  },
};
