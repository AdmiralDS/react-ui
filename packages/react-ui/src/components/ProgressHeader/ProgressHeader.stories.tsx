import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { ProgressHeader } from '#src/components/ProgressHeader/index';

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
  title: 'Admiral-2.1/ProgressHeader/Base',
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
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof ProgressHeader>;

const StyledProgressHeader = styled(ProgressHeader)`
  bottom: 90%;
`;

const Template1: ComponentStory<typeof ProgressHeader> = ({ ...args }) => {
  return (
    <>
      <StyledProgressHeader {...args} percent={args.percent} role="alert" aria-live="assertive" />
    </>
  );
};

export const Progress = Template1.bind({});
Progress.storyName = 'Базовый пример';
Progress.args = {
  appearance: 'primary',
  percent: 50,
};
