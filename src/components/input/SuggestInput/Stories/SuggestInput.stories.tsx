import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import {
  SuggestInput,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';
import { ReactComponent as SearchSolidSVG } from '@admiral-ds/icons/build/system/SearchSolid.svg';

import {
  SuggestInputFilterTemplate,
  SuggestInputNoMatchTemplate,
  SuggestInputUncontrolledTemplate,
  SuggestInputPlaygroundTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import SuggestInputPlaygroundRaw from '!!raw-loader!./Templates/SuggestInputPlayground';
import SuggestInputUncontrolledRaw from '!!raw-loader!./Templates/SuggestInputUncontrolled';
import SuggestInputFilterRaw from '!!raw-loader!./Templates/SuggestInputFilter';
import SuggestInputNoMatchRaw from '!!raw-loader!./Templates/SuggestInputNoMatch';

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
const SuggestInputPlaygroundStory: StoryFn<typeof SuggestInput> = (props) => (
  <SuggestInputPlaygroundTemplate {...cleanUpProps(props)} />
);

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
  <SuggestInputPlaygroundTemplate {...cleanUpProps(props)} icon={SearchSolidSVG} />
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
  <SuggestInputUncontrolledTemplate {...cleanUpProps(props)} />
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
const SuggestInputNoMatchStory: StoryFn<typeof SuggestInput> = (props) => (
  <SuggestInputNoMatchTemplate {...cleanUpProps(props)} />
);

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
const SuggestInputFilterStory: StoryFn<typeof SuggestInput> = (props) => (
  <SuggestInputFilterTemplate {...cleanUpProps(props)} />
);

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
