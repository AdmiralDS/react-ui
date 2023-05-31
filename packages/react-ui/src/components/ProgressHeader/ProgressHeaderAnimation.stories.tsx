import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { ProgressHeader } from '@admiral-ds/react-ui';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Показывает визуальный прогресс загрузки страницы. Компонент отображается наверху страницы, непосредственно под
    шапкой браузера на самом верху рабочей области сайта. Ширина равняется ширине окна браузера.
  </Desc>
);

export default {
  title: 'Admiral-2.1/ProgressHeader/Animation',
  decorators: [withDesign],
  component: ProgressHeader,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A24985',
    },
  },
  argTypes: {
    appearance: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
    },
    percent: {
      control: false,
    },
  },
} as ComponentMeta<typeof ProgressHeader>;

const StyledProgressHeader = styled(ProgressHeader)`
  bottom: 90%;
`;

const Template2: ComponentStory<typeof ProgressHeader> = ({ ...args }) => {
  const [tik, setTick] = React.useState(0);

  React.useEffect(() => {
    const counter = () => setTick((prev) => prev + 1);
    const timerId = setTimeout(counter, 1000);
    if (tik >= 20) {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);

  return (
    <>
      <StyledProgressHeader {...args} percent={args.percent || tik} role="alert" aria-live="assertive" />
    </>
  );
};

export const ProgressAnimation = Template2.bind({});
ProgressAnimation.storyName = 'Прогресс бар с анимацией';
ProgressAnimation.args = {
  appearance: 'primary',
};
