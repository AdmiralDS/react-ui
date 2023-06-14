import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { ProgressHeader } from '@admiral-ds/react-ui';

import { ProgressHeaderAnimationTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ProgressHeaderAnimationRaw from '!!raw-loader!./Templates/ProgressHeaderAnimation';

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

const ProgressHeaderAnimationStory: ComponentStory<typeof ProgressHeader> = (props) => (
  <ProgressHeaderAnimationTemplate {...cleanUpProps(props)} />
);

//<editor-fold desc="Прогресс бар с анимацией">
export const ProgressHeaderAnimation = ProgressHeaderAnimationStory.bind({});
ProgressHeaderAnimation.parameters = {
  docs: {
    source: {
      code: ProgressHeaderAnimationRaw,
    },
  },
};
ProgressHeaderAnimation.storyName = 'Прогресс бар с анимацией';
//</editor-fold>
