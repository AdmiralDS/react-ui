import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { EditMode, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { EditModePlaygroundTemplate } from './EditModePlayground.template';
import { EditModeDimensionTemplate } from './EditModeDimension.template';
import { EditModeDisabledTemplate } from './EditModeDisabled.template';
import { EditModeCssMixinTemplate } from './EditModeCssMixin.template';

// Imports of text sources
import EditModePlaygroundRaw from './EditModePlayground.template?raw';
import EditModeDimensionRaw from './EditModeDimension.template?raw';
import EditModeDisabledRaw from './EditModeDisabled.template?raw';
import EditModeCssMixinRaw from './EditModeCssMixin.template?raw';

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
    multilineView: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof EditMode>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof EditMode> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <EditModePlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: EditModePlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Варианты размеров и начертания компонента">
const DimensionStory: StoryFn<typeof EditMode> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <EditModeDimensionTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DimensionExample = {
  render: DimensionStory,

  parameters: {
    docs: {
      source: {
        code: EditModeDimensionRaw,
      },
    },
  },

  name: 'Варианты размеров и начертания компонента',
};

//</editor-fold>

//<editor-fold desc="Компонент в состоянии disabled">
const DisabledStory: StoryFn<typeof EditMode> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <EditModeDisabledTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DisabledExample = {
  render: DisabledStory,

  parameters: {
    docs: {
      source: {
        code: EditModeDisabledRaw,
      },
    },
  },

  name: 'Компонент в состоянии disabled',
};

//</editor-fold>

//<editor-fold desc="Стилизация компонента">
const CssMixinStory: StoryFn<typeof EditMode> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <EditModeCssMixinTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const CssMixinExample = {
  render: CssMixinStory,

  parameters: {
    docs: {
      source: {
        code: EditModeCssMixinRaw,
      },
    },
  },

  name: 'Стилизация компонента',
};

//</editor-fold>
