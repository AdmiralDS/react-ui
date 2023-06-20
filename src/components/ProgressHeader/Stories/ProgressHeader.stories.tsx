import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { ProgressHeader } from '@admiral-ds/react-ui';

import { ProgressHeaderBaseTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ProgressHeaderBaseRaw from '!!raw-loader!./Templates/ProgressHeaderBase';

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

const ProgressHeaderBaseStory: ComponentStory<typeof ProgressHeader> = (props) => (
  <ProgressHeaderBaseTemplate {...cleanUpProps(props)} />
);

//<editor-fold desc="Базовый пример">
export const ProgressHeaderBase = ProgressHeaderBaseStory.bind({});
ProgressHeaderBase.parameters = {
  docs: {
    source: {
      code: ProgressHeaderBaseRaw,
    },
  },
};
ProgressHeaderBase.storyName = 'Базовый пример';
//</editor-fold>
