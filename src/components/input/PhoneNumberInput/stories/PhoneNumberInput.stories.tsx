import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';

import { INPUT_STATUS_VALUES, PhoneNumberInput, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { PhoneNumberInputXLTemplate } from './PhoneNumberInputXL.template';
import { PhoneNumberInputMTemplate } from './PhoneNumberInputM.template';
import { PhoneNumberInputSTemplate } from './PhoneNumberInputS.template';
import { PhoneNumberInputWithPlaceholderTemplate } from './PhoneNumberInputWithPlaceholder.template';

// Imports of text sources
import PhoneNumberInputXLRaw from './PhoneNumberInputXL.template?raw';
import PhoneNumberInputMRaw from './PhoneNumberInputM.template?raw';
import PhoneNumberInputSRaw from './PhoneNumberInputS.template?raw';
import PhoneNumberInputWithPlaceholderRaw from './PhoneNumberInputWithPlaceholder.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
`;

const Description = () => (
  <Desc>
    Компонент для ввода номера телефона с выбором кода-страны.
    <Separator />
    По дефолту стоят флаг России и маска для российского телефона, но задать можно любой другой.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Input/PhoneNumberInput',
  component: PhoneNumberInput,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61244',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61271',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61297',
      },
    ],
  },
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    value: {
      control: { type: 'text' },
    },
    defaultCountry: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
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
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
    onlyCountries: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof PhoneNumberInput>;

//<editor-fold desc="Phone Number Input. Размер XL">
const PhoneNumberInputXLStory: StoryFn<typeof PhoneNumberInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <PhoneNumberInputXLTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const PhoneNumberInputXL = {
  render: PhoneNumberInputXLStory,

  parameters: {
    docs: {
      source: {
        code: PhoneNumberInputXLRaw,
      },
    },
  },

  name: 'Phone Number Input. Размер XL',
};

//</editor-fold>

//<editor-fold desc="Phone Number Input. Размер M c фильтрацией списка">
const PhoneNumberInputMStory: StoryFn<typeof PhoneNumberInput> = (props) => <PhoneNumberInputMTemplate {...props} />;

export const PhoneNumberInputM = {
  render: PhoneNumberInputMStory,

  parameters: {
    docs: {
      source: {
        code: PhoneNumberInputMRaw,
      },
    },
  },

  name: 'Phone Number Input. Размер M c фильтрацией списка',
};

//</editor-fold>

//<editor-fold desc="Phone Number Input. Размер S с заданной страной по умолчанию">
const PhoneNumberInputSStory: StoryFn<typeof PhoneNumberInput> = (props) => <PhoneNumberInputSTemplate {...props} />;

export const PhoneNumberInputS = {
  render: PhoneNumberInputSStory,

  parameters: {
    docs: {
      source: {
        code: PhoneNumberInputSRaw,
      },
    },
  },

  name: 'Phone Number Input. Размер S с заданной страной по умолчанию',
};

const PhoneNumberInputWithPlaceholderStory: StoryFn<typeof PhoneNumberInput> = (props) => (
  <PhoneNumberInputWithPlaceholderTemplate {...props} />
);

export const PhoneNumberInputWithPlaceholder = {
  render: PhoneNumberInputWithPlaceholderStory,

  parameters: {
    docs: {
      source: {
        code: PhoneNumberInputWithPlaceholderRaw,
      },
    },
  },

  name: 'Phone Number Input. С placeholder',
};
