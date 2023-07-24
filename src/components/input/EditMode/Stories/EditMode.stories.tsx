import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { EditMode, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  EditModePlaygroundTemplate,
  EditModeDimensionTemplate,
  EditModeDisabledTemplate,
  EditModeCssMixinTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from './Templates/EditModePlayground?raw';
import DimensionRaw from './Templates/EditModeDimension?raw';
import DisabledRaw from './Templates/EditModeDisabled?raw';
import CssMixinRaw from './Templates/EditModeCssMixin?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => <Desc>Компонент для редактирования текста. Может быть с лэйблом или без него.</Desc>;

export default {
  title: 'Admiral-2.1/Input/EditMode',
  component: EditMode,
  decorators: undefined,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10602',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10901',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xxl', 'xl', 'm', 's'],
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    value: {
      control: { type: 'text' },
    },
    bold: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    onChange: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    containerCssMixin: {
      control: false,
    },
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    multilineView: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof EditMode>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof EditMode> = ({ value, onChange, ...props }) => (
  <EditModePlaygroundTemplate value={value} onChange={onChange} {...cleanUpProps(props)} />
);

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: PlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Варианты размеров и начертания компонента">
const DimensionStory: StoryFn<typeof EditMode> = ({ value, onChange, ...props }) => (
  <EditModeDimensionTemplate value={value} onChange={onChange} {...cleanUpProps(props)} />
);

export const DimensionExample = {
  render: DimensionStory,

  parameters: {
    docs: {
      source: {
        code: DimensionRaw,
      },
      description: {
        story: `Компонент разработан в 4 размерах: S, M (имеют написание Regular и Bold) и XL, XXL (только Bold). 
        Переключение между Regular и Bold не изменяет размеры компонента.\n\nПо умолчанию размер компонента M, 
        для смены размера используйте параметр dimension. Для переключения в написание Bold испольуйте одноименный параметр bold.`,
      },
    },
  },

  name: 'Варианты размеров и начертания компонента',
};

//</editor-fold>

//<editor-fold desc="Компонент в состоянии disabled">
const DisabledStory: StoryFn<typeof EditMode> = ({ value, onChange, ...props }) => (
  <EditModeDisabledTemplate value={value} onChange={onChange} {...cleanUpProps(props)} />
);

export const DisabledExample = {
  render: DisabledStory,

  parameters: {
    docs: {
      source: {
        code: DisabledRaw,
      },
    },
  },

  name: 'Компонент в состоянии disabled',
};

//</editor-fold>

//<editor-fold desc="Стилизация компонента">
const CssMixinStory: StoryFn<typeof EditMode> = ({ value, onChange, ...props }) => (
  <EditModeCssMixinTemplate value={value} onChange={onChange} {...cleanUpProps(props)} />
);

export const CssMixinExample = {
  render: CssMixinStory,

  parameters: {
    docs: {
      source: {
        code: CssMixinRaw,
      },
      description: {
        story: `Для изменения стилей компонента в контейнер компонента можно передать стили в виде containerCssMixin.`,
      },
    },
  },

  name: 'Стилизация компонента',
};
