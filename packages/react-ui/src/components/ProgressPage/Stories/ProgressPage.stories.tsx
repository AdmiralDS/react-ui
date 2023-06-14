import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { ProgressPage } from '@admiral-ds/react-ui';

import { ProgressPageAnimationTemplate, ProgressPageBaseTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ProgressPageBaseRaw from '!!raw-loader!./Templates/ProgressPageBase';
import ProgressPageAnimationRaw from '!!raw-loader!./Templates/ProgressPageAnimation';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент для отображения прогресса загрузки страницы, либо контента на странице. Компонент может изменяться по
    ширине, минимальный размер 140px. Компонент имеет два сценария применения: Первый, когда мы, например, загружаем
    тяжелую страницу (или контент на ней) и показываем прогресс ее загрузки, при этом блокируется содержимое страницы и
    прогресс отображается оверлеем. Второй сценарий, более редкий, когда компонент используется как часть интерфейсов на
    странице и отображает прогресс какого-либо процесса, например опроса.
  </Desc>
);

export default {
  title: 'Admiral-2.1/ProgressPage',
  decorators: [withDesign],
  component: ProgressPage,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A25008',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A25036',
      },
    ],
  },
  args: {
    appearance: 'primary',
  },
  argTypes: {
    appearance: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
    },
    label: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof ProgressPage>;

//<editor-fold desc="Базовый пример">
const ProgressPageBaseStory: ComponentStory<typeof ProgressPage> = (props) => (
  <ProgressPageBaseTemplate {...cleanUpProps(props)} />
);

export const ProgressPageBase = ProgressPageBaseStory.bind({});
ProgressPageBase.parameters = {
  docs: {
    source: {
      code: ProgressPageBaseRaw,
    },
  },
};
ProgressPageBase.storyName = 'Базовый пример';
//</editor-fold>

//<editor-fold desc="Прогресс бар с анимацией">
const ProgressPageAnimationStory: ComponentStory<typeof ProgressPage> = (props) => (
  <ProgressPageAnimationTemplate {...cleanUpProps(props)} />
);

export const ProgressPageAnimation = ProgressPageAnimationStory.bind({});
ProgressPageAnimation.parameters = {
  docs: {
    source: {
      code: ProgressPageAnimationRaw,
    },
  },
};
ProgressPageAnimation.storyName = 'Прогресс бар с анимацией';
//</editor-fold>
