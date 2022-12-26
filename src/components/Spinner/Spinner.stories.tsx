import { Button } from '#src/components/Button';
import { Spinner } from '#src/components/Spinner';
import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DefaultBackgroundColorName, MainPrimaryColorName } from '#src/components/themes';

const Separator = styled.div`
  height: 20px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const StyledButton = styled(Button)`
  padding: 0 8px;
`;

const Layout = styled.div<{
  inverse?: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  background: ${({ theme, inverse }) =>
    inverse ? theme.color[MainPrimaryColorName] : theme.color[DefaultBackgroundColorName]};

  > * {
    flex: 0 0 auto;
    margin: 24px;
  }
`;

const Description = () => (
  <Desc>
    Компонент служит для демонстрации процесса загрузки, ожидания. Существует в четырех размерах - 16, 24, 48 и 64 px.
    Может применяется как самостоятельный элемент, так и в составе других компонентов, например кнопок.
    <Separator />
    Вращение происходит по часовой стрелке, делая полный оборот за 1 секунду.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Spinner',
  decorators: [withDesign],
  component: Spinner,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A24955',
    },
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    inverse: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template1: ComponentStory<typeof Spinner> = (args) => {
  return (
    <>
      <Layout inverse={args.inverse}>
        <Spinner {...args} />
      </Layout>
    </>
  );
};

const Template2: ComponentStory<typeof Spinner> = (args) => {
  return (
    <>
      <Layout inverse={args.inverse}>
        <Spinner dimension="xl" inverse={args.inverse} />
        <Spinner dimension="l" inverse={args.inverse} />
        <Spinner dimension="m" inverse={args.inverse} />
        <Spinner dimension="s" inverse={args.inverse} />
      </Layout>
    </>
  );
};

const Template3: ComponentStory<typeof Spinner> = () => {
  return (
    <>
      <Layout>
        <StyledButton dimension="m" appearance="secondary">
          <Spinner dimension="m" />
        </StyledButton>
        <StyledButton dimension="m" appearance="primary">
          <Spinner dimension="m" inverse />
        </StyledButton>
      </Layout>
    </>
  );
};

export const SpinnerBase = Template1.bind({});
SpinnerBase.args = {};
SpinnerBase.storyName = 'Spinner. Базовый пример.';

export const SpinnerLight = Template2.bind({});
SpinnerLight.args = {};
SpinnerLight.storyName = 'Spinner. Светлый фон.';

export const SpinnerDark = Template2.bind({});
SpinnerDark.args = { inverse: true };
SpinnerDark.storyName = 'Spinner. Темный фон.';
SpinnerDark.parameters = {
  docs: {
    description: {
      story: `На темных поверхностях применяется белый спинер`,
    },
  },
};

export const SpinnerOthers = Template3.bind({});
SpinnerOthers.args = {};
SpinnerOthers.storyName = 'Spinner. В составе других компонентов.';
