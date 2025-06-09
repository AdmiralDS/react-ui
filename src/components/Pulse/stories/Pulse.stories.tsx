import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { Pulse } from '@admiral-ds/react-ui';

import { PulsePlaygroundTemplate } from './PulsePlayground.template';
import { PulseDimensionTemplate } from './PulseDimension.template';
import { PulseStatusTemplate } from './PulseStatus.template';

// Imports of text sources
import PulsePlaygroundRaw from './PulsePlayground.template?raw';
import PulseDimensionRaw from './PulseDimension.template?raw';
import PulseStatusRaw from './PulseStatus.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const Description = () => (
  <Desc>
    Компонент Pulse — анимированный компонент, используется для привлечения дополнительного внимания к определенному
    месту или элементу интерфейса. Компонент имеет зацикленную анимацию в виде расходящейся от основания концентрической
    исчезающей волны.
    <Separator />
    Не рекомендуется использовать больше одного компонента Pulse на странице во избежании визуального шума.
    <Separator />
    Учитывайте размер анимации. Она в два с небольшим раза больше размера компонента. Не ставьте компонент вплотную к
    границам фреймов, что бы не обрезалась анимированная волна.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Pulse',
  decorators: undefined,
  component: Pulse,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    layout: 'centered',
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    status: {
      options: ['info', 'danger', 'success', 'warning'],
      control: { type: 'radio' },
    },
    cssMixin: {
      control: false,
    },
  },
} as Meta<typeof Pulse>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof Pulse> = (props) => <PulsePlaygroundTemplate {...props} />;

export const PlaygroundExample = {
  render: PlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: PulsePlaygroundRaw,
      },
    },
  },
  name: 'Pulse. Playground',
};

//</editor-fold>

//<editor-fold desc="Dimension">
const DimensionStory: StoryFn<typeof Pulse> = (props) => <PulseDimensionTemplate {...props} />;

export const DimensionExample = {
  render: DimensionStory,
  parameters: {
    docs: {
      source: {
        code: PulseDimensionRaw,
      },
    },
  },
  name: 'Pulse. Размеры',
};

//</editor-fold>

//<editor-fold desc="Status">
const StatusStory: StoryFn<typeof Pulse> = (props) => <PulseStatusTemplate {...props} />;

export const StatusExample = {
  render: StatusStory,
  parameters: {
    docs: {
      source: {
        code: PulseStatusRaw,
      },
    },
  },
  name: 'Pulse. Статусы',
};

//</editor-fold>
