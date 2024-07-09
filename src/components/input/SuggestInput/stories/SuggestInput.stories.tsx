import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import {
  SuggestInput,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';
import { ReactComponent as SearchSolidSVG } from '@admiral-ds/icons/build/system/SearchSolid.svg';

import { SuggestInputPlaygroundTemplate } from './SuggestInputPlayground.template';
import { SuggestInputUncontrolledTemplate } from './SuggestInputUncontrolled.template';
import { SuggestInputFilterTemplate } from './SuggestInputFilter.template';
import { SuggestInputNoMatchTemplate } from './SuggestInputNoMatch.template';

// Imports of text sources
import SuggestInputPlaygroundRaw from './SuggestInputPlayground.template?raw';
import SuggestInputUncontrolledRaw from './SuggestInputUncontrolled.template?raw';
import SuggestInputFilterRaw from './SuggestInputFilter.template?raw';
import SuggestInputNoMatchRaw from './SuggestInputNoMatch.template?raw';

export default {
  title: 'Admiral-2.1/Input/SuggestInput',
  component: SuggestInput,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60520',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60826',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60855',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    status: {
      options: INPUT_STATUS_VALUES,
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    alignDropdown: {
      options: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      control: { type: 'radio' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
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
    options: {
      control: false,
    },
    portalTargetRef: {
      control: false,
    },
    targetElement: {
      control: false,
    },
    onSearchButtonClick: {
      control: false,
    },
    dropMaxHeight: {
      control: false,
    },
    icon: {
      control: false,
    },
    icons: {
      control: false,
    },
    locale: {
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
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
  },
} as Meta<typeof SuggestInput>;

//<editor-fold desc="Suggest Input компонент">
const SuggestInputPlaygroundStory: StoryFn<typeof SuggestInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SuggestInputPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SuggestInputPlayground = {
  render: SuggestInputPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: SuggestInputPlaygroundRaw,
      },
    },
  },

  name: 'Suggest Input компонент',
};

//</editor-fold>

//<editor-fold desc="Suggest Input альтернативная иконка">
const SuggestInputCustomIconStory: StoryFn<typeof SuggestInput> = (props) => (
  <SuggestInputPlaygroundTemplate {...props} icon={SearchSolidSVG} />
);

export const SuggestInputCustomIcon = {
  render: SuggestInputCustomIconStory,

  parameters: {
    docs: {
      source: {
        code: SuggestInputPlaygroundRaw,
      },
    },
  },

  name: 'Suggest Input альтернативная иконка',
};

//</editor-fold>

//<editor-fold desc="Suggest Input неконтроллируемый">
const SuggestInputUncontrolledStory: StoryFn<typeof SuggestInput> = (props) => (
  <SuggestInputUncontrolledTemplate {...props} />
);

export const SuggestInputUncontrolled = {
  render: SuggestInputUncontrolledStory,

  parameters: {
    docs: {
      source: {
        code: SuggestInputUncontrolledRaw,
      },
    },
  },

  name: 'Suggest Input неконтроллируемый',
};

//</editor-fold>

//<editor-fold desc="Suggest Input "Нет совпадений"">
const SuggestInputNoMatchStory: StoryFn<typeof SuggestInput> = (props) => <SuggestInputNoMatchTemplate {...props} />;

export const SuggestInputNoMatch = {
  render: SuggestInputNoMatchStory,

  parameters: {
    docs: {
      source: {
        code: SuggestInputNoMatchRaw,
      },
    },
  },

  name: 'Suggest Input "Нет совпадений"',
};

//</editor-fold>

//<editor-fold desc="Suggest Input с фильтрацией">
const SuggestInputFilterStory: StoryFn<typeof SuggestInput> = (props) => <SuggestInputFilterTemplate {...props} />;

export const SuggestInputFilter = {
  render: SuggestInputFilterStory,

  parameters: {
    docs: {
      source: {
        code: SuggestInputFilterRaw,
      },
    },
  },

  name: 'Suggest Input с фильтрацией',
};
