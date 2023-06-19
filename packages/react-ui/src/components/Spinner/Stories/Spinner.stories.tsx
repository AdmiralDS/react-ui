import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Spinner } from '@admiral-ds/react-ui';

import { SpinnerBaseTemplate, SpinnerDarkTemplate, SpinnerLightTemplate, SpinnerOthersTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import SpinnerBaseRaw from '!!raw-loader!./Templates/SpinnerBase';
import SpinnerLightRaw from '!!raw-loader!./Templates/SpinnerLight';
import SpinnerDarkRaw from '!!raw-loader!./Templates/SpinnerDark';
import SpinnerOthersRaw from '!!raw-loader!./Templates/SpinnerOthers';

const Separator = styled.div`
  height: 20px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
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
      options: ['xl', 'l', 'm', 'ms', 's'],
      control: { type: 'radio' },
    },
    inverse: {
      control: { type: 'boolean' },
    },
    svgMixin: {
      control: false,
    },
  },
} as ComponentMeta<typeof Spinner>;

//<editor-fold desc="Spinner. Базовый пример.">
const SpinnerBaseStory: ComponentStory<typeof Spinner> = (props) => <SpinnerBaseTemplate {...cleanUpProps(props)} />;

export const SpinnerBase = SpinnerBaseStory.bind({});
SpinnerBase.parameters = {
  docs: {
    source: {
      code: SpinnerBaseRaw,
    },
  },
};
SpinnerBase.storyName = 'Spinner. Базовый пример.';
//</editor-fold>

//<editor-fold desc="Spinner. Светлый фон.">
const SpinnerLightStory: ComponentStory<typeof Spinner> = (props) => <SpinnerLightTemplate {...cleanUpProps(props)} />;

export const SpinnerLight = SpinnerLightStory.bind({});
SpinnerLight.parameters = {
  docs: {
    source: {
      code: SpinnerLightRaw,
    },
  },
};
SpinnerLight.storyName = 'Spinner. Светлый фон.';
//</editor-fold>

//<editor-fold desc="Spinner. Темный фон.">
const SpinnerDarkStory: ComponentStory<typeof Spinner> = (props) => <SpinnerDarkTemplate {...cleanUpProps(props)} />;
export const SpinnerDark = SpinnerDarkStory.bind({});
SpinnerDark.parameters = {
  docs: {
    source: {
      code: SpinnerDarkRaw,
    },
    description: {
      story: `На темных поверхностях применяется белый спинер`,
    },
  },
};
SpinnerDark.storyName = 'Spinner. Темный фон.';
//</editor-fold>

//<editor-fold desc="Spinner. В составе других компонентов.">
const SpinnerOthersStory: ComponentStory<typeof Spinner> = () => <SpinnerOthersTemplate />;

export const SpinnerOthers = SpinnerOthersStory.bind({});
SpinnerOthers.parameters = {
  docs: {
    source: {
      code: SpinnerOthersRaw,
    },
  },
};
SpinnerOthers.storyName = 'Spinner. В составе других компонентов.';
//</editor-fold>
