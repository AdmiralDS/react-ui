import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { Toggle } from '@admiral-ds/react-ui';

import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import {
  ToggleDimensionTemplate,
  ToggleHintTemplate,
  ToggleLabelTemplate,
  ToggleMobileTemplate,
  TogglePlaygroundTemplate,
  ToggleStateTemplate,
} from './Templates';

// Imports of text sources
import ToggleHintRaw from '!!raw-loader!./Templates/ToggleHint';
import ToggleDimensionRaw from '!!raw-loader!./Templates/ToggleDimension';
import ToggleMobileRaw from '!!raw-loader!./Templates/ToggleMobile';
import TogglePlaygroundRaw from '!!raw-loader!./Templates/TogglePlayground';
import ToggleLabelRaw from '!!raw-loader!./Templates/ToggleLabel';
import ToggleStateRaw from '!!raw-loader!./Templates/ToggleState';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Переключатель используется в ситуации, когда нужно переключиться между двумя равнозначными состояними интерфейса.
    <Separator />
    Размер вариации компонента с текстом слева изменяется вручную, может применяться как адаптив на мобильных
    устройствах.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Toggle',
  decorators: [withDesign],
  component: Toggle,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21193',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21376',
      },
    ],
    componentSubtitle: <Description />,
    actions: {
      argTypesRegex: 'onChange',
    },
    layout: 'centered',
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    labelPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    width: {
      control: { type: 'text' },
    },
    extraText: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Toggle>;

//<editor-fold desc="Toggle. Playground">
const TogglePlaygroundStory: ComponentStory<typeof Toggle> = (props) => (
  <TogglePlaygroundTemplate {...cleanUpProps(props)} />
);

export const TogglePlayground = TogglePlaygroundStory.bind({});
TogglePlayground.parameters = {
  docs: {
    source: {
      code: TogglePlaygroundRaw,
    },
  },
};
TogglePlayground.storyName = 'Toggle. Playground';
//</editor-fold>

//<editor-fold desc="Toggle. Размеры">
const ToggleDimensionStory: ComponentStory<typeof Toggle> = () => <ToggleDimensionTemplate />;

export const ToggleDimension = ToggleDimensionStory.bind({});
ToggleDimension.parameters = {
  docs: {
    source: {
      code: ToggleDimensionRaw,
    },
  },
};
ToggleDimension.storyName = 'Toggle. Размеры';
//</editor-fold>

//<editor-fold desc="Toggle. Состояния">
const ToggleStateStory: ComponentStory<typeof Toggle> = () => <ToggleStateTemplate />;

export const ToggleState = ToggleStateStory.bind({});
ToggleState.parameters = {
  docs: {
    source: {
      code: ToggleStateRaw,
    },
  },
};
ToggleState.storyName = 'Toggle. Состояния';
//</editor-fold>

//<editor-fold desc="Toggle. Расположение подписи">
const ToggleLabelStory: ComponentStory<typeof Toggle> = () => <ToggleLabelTemplate />;

export const ToggleLabel = ToggleLabelStory.bind({});
ToggleLabel.storyName = 'Toggle. Расположение подписи';
ToggleLabel.parameters = {
  docs: {
    source: {
      code: ToggleLabelRaw,
    },
    description: {
      story: `Варианты компонента без подписи, с подписью слева и справа.`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Toggle. Дополнительный текст">
const ToggleHintStory: ComponentStory<typeof Toggle> = () => <ToggleHintTemplate />;

export const ToggleHint = ToggleHintStory.bind({});
ToggleHint.storyName = 'Toggle. Дополнительный текст';
ToggleHint.parameters = {
  docs: {
    source: {
      code: ToggleHintRaw,
    },
    description: {
      story: `Варианты компонента с дополнительным текстом.`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Toggle. Адаптив">
const ToggleMobileStory: ComponentStory<typeof Toggle> = () => <ToggleMobileTemplate />;

export const ToggleMobile = ToggleMobileStory.bind({});
ToggleMobile.storyName = 'Toggle. Адаптив';
ToggleMobile.parameters = {
  docs: {
    source: {
      code: ToggleMobileRaw,
    },
    description: {
      story: `При создании отдельных макетов для мобильных устройств, рекомендуется использовать вариацию комопнента размера M с текстом слева, который можно
      вытянуть на всю ширину экрана.`,
    },
  },
};
//</editor-fold>
