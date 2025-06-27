import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { EditModeArea, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { EditModeAreaPlaygroundTemplate } from './EditModeAreaPlayground.template';
import { EditModeAreaDimensionTemplate } from './EditModeAreaDimension.template';
import { EditModeAreaDisabledTemplate } from './EditModeAreaDisabled.template';
import { EditModeAreaCssMixinTemplate } from './EditModeAreaCssMixin.template';

// Imports of text sources
import EditModeAreaPlaygroundRaw from './EditModeAreaPlayground.template?raw';
import EditModeAreaDimensionRaw from './EditModeAreaDimension.template?raw';
import EditModeAreaDisabledRaw from './EditModeAreaDisabled.template?raw';
import EditModeAreaCssMixinRaw from './EditModeAreaCssMixin.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => <Desc>Компонент для редактирования текста. Может быть с лэйблом или без него.</Desc>;

export default {
  title: 'Admiral-2.1/Input/EditModeArea',
  component: EditModeArea,
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
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof EditModeArea>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof EditModeArea> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <EditModeAreaPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: EditModeAreaPlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Варианты размеров и начертания компонента">
const DimensionStory: StoryFn<typeof EditModeArea> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <EditModeAreaDimensionTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DimensionExample = {
  render: DimensionStory,

  parameters: {
    docs: {
      source: {
        code: EditModeAreaDimensionRaw,
      },
    },
  },

  name: 'Варианты размеров и начертания компонента',
};

//</editor-fold>

//<editor-fold desc="Компонент в состоянии disabled">
const DisabledStory: StoryFn<typeof EditModeArea> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <EditModeAreaDisabledTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DisabledExample = {
  render: DisabledStory,

  parameters: {
    docs: {
      source: {
        code: EditModeAreaDisabledRaw,
      },
    },
  },

  name: 'Компонент в состоянии disabled',
};

//</editor-fold>

//<editor-fold desc="Стилизация компонента">
const CssMixinStory: StoryFn<typeof EditModeArea> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <EditModeAreaCssMixinTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const CssMixinExample = {
  render: CssMixinStory,

  parameters: {
    docs: {
      source: {
        code: EditModeAreaCssMixinRaw,
      },
    },
  },

  name: 'Стилизация компонента',
};

//</editor-fold>
