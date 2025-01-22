import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';
import { NumberInput, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { NumberInputPlaygroundTemplate } from './NumberInputPlayground.template';
import { NumberInputDisabledTemplate } from './NumberInputDisabled.template';
import { NumberInputMinMaxTemplate } from './NumberInputMinMax.template';
import { NumberInputCustomisedTemplate } from './NumberInputCustomised.template';
import { NumberInputControlledTemplate } from './NumberInputControlled.template';
import { NumberInputSpacesTemplate } from './NumberInputSpaces.template';

// Imports of text sources
import NumberInputPlaygroundRaw from './NumberInputPlayground.template?raw';
import NumberInputDisabledRaw from './NumberInputDisabled.template?raw';
import NumberInputMinMaxRaw from './NumberInputMinMax.template?raw';
import NumberInputCustomisedRaw from './NumberInputCustomised.template?raw';
import NumberInputControlledRaw from './NumberInputControlled.template?raw';
import NumberInputSpacesRaw from './NumberInputSpaces.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => <Desc>Поле ввода с возможностью ввода числовых значений через нажатие с заданным шагом</Desc>;

export default {
  title: 'Admiral-2.1/Input/NumberInput',
  component: NumberInput,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60588',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60694',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60723',
      },
    ],
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    thousand: {
      control: { type: 'text' },
    },
    prefix: {
      control: { type: 'text' },
    },
    suffix: {
      control: { type: 'text' },
    },
    decimal: {
      control: { type: 'text' },
    },
    precision: {
      type: 'number',
    },
    minValue: {
      type: 'number',
    },
    maxValue: {
      type: 'number',
    },
    step: {
      type: 'number',
    },
    displayPlusMinusIcons: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
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
    showTooltip: {
      control: { type: 'boolean' },
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
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof NumberInput>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof NumberInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <NumberInputPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};
export const Playground = {
  render: PlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: NumberInputPlaygroundRaw,
      },
    },
  },
};
//</editor-fold>

//<editor-fold desc="NumberInput. Задизейбленный.">
const DisabledStory: StoryFn<typeof NumberInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <NumberInputDisabledTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};
export const DisabledExample = {
  render: DisabledStory,
  parameters: {
    docs: {
      source: {
        code: NumberInputDisabledRaw,
      },
    },
  },
  name: 'NumberInput. Задизейбленный.',
};
//</editor-fold>

//<editor-fold desc="NumberInput. Пример с minValue, maxValue.">
const MinMaxStory: StoryFn<typeof NumberInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <NumberInputMinMaxTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};
export const MinMaxExample = {
  render: MinMaxStory,
  parameters: {
    docs: {
      source: {
        code: NumberInputMinMaxRaw,
      },
    },
  },
  name: 'NumberInput. Пример с minValue, maxValue.',
};
//</editor-fold>

//<editor-fold desc="NumberInput. Пример изменения настроек (suffix, precision, thousand).">
const CustomStory: StoryFn<typeof NumberInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <NumberInputCustomisedTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};
export const CustomExample = {
  render: CustomStory,
  parameters: {
    docs: {
      source: {
        code: NumberInputCustomisedRaw,
      },
    },
  },
  name: 'NumberInput. Пример изменения настроек (suffix, precision, thousand).',
};
//</editor-fold>

//<editor-fold desc="NumberInput. Пример скрытия пробелов.">
const SpacesStory: StoryFn<typeof NumberInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <NumberInputSpacesTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};
export const SpacesExample = {
  render: SpacesStory,
  parameters: {
    docs: {
      source: {
        code: NumberInputSpacesRaw,
      },
    },
  },
  name: 'NumberInput. Пример скрытия пробелов.',
};
//</editor-fold>

//<editor-fold desc="NumberInput. Примеры контролируемого инпута.">
const ControlledStory: StoryFn<typeof NumberInput> = () => <NumberInputControlledTemplate />;
export const ControlledExample = {
  render: ControlledStory,
  parameters: {
    docs: {
      source: {
        code: NumberInputControlledRaw,
      },
    },
  },
  name: 'NumberInput. Примеры контролируемого инпута.',
};
//</editor-fold>
