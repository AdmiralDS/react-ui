import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ProgressHeader } from './index';

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
  title: 'Example/ ProgressHeader',
  decorators: [withDesign],
  component: ProgressHeader,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A24985',
    },
  },
  argTypes: {
    appearance: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
  },
} as ComponentMeta<typeof ProgressHeader>;

const Template1: ComponentStory<typeof ProgressHeader> = ({ ...args }) => {
  return <ProgressHeader {...args} percent={args.percent} role="alert" aria-live="assertive" />;
};

const Template2: ComponentStory<typeof ProgressHeader> = ({ ...args }) => {
  const [tik, setTick] = useState(0);

  useEffect(() => {
    const counter = () => setTick((prev) => prev + 1);
    const timerId = setTimeout(counter, 1000);
    if (tik >= 20) {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);

  return <ProgressHeader {...args} percent={args.percent || tik} role="alert" aria-live="assertive" />;
};

export const Progress = Template1.bind({});
export const ProgressAnimation = Template2.bind({});
Progress.storyName = 'Базовый пример';
ProgressAnimation.storyName = 'Прогресс бар с анимацией';
Progress.args = {
  percent: 50,
};
