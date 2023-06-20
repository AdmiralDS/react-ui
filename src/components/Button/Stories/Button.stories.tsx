import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Button, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  ButtonLoaderTemplate,
  ButtonPlaygroundTemplate,
  ButtonStylesTemplate,
  ButtonWithIconTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ButtonLoaderRaw from '!!raw-loader!./Templates/ButtonLoader';
import ButtonWithIconRaw from '!!raw-loader!./Templates/ButtonWithIcon';
import ButtonStylesRaw from '!!raw-loader!./Templates/ButtonStyles';
import ButtonPlaygroundRaw from '!!raw-loader!./Templates/ButtonPlayground';

export default {
  title: 'Admiral-2.1/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19734',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A16209',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    skeleton: {
      control: 'boolean',
    },
    appearance: {
      options: ['primary', 'secondary', 'danger', 'success', 'ghost', 'white'],
      control: { type: 'select' },
    },
    onClick: { action: 'clicked' },

    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },

    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },

    disabled: {
      control: { type: 'boolean' },
    },

    displayAsSquare: {
      control: { type: 'boolean' },
    },

    displayAsDisabled: {
      control: { type: 'boolean' },
    },

    loading: {
      control: { type: 'boolean' },
    },

    icon: {
      control: false,
    },

    buttonCssMixin: {
      control: false,
    },
  },
} as ComponentMeta<typeof Button>;

//<editor-fold desc="Button. Playground">
const ButtonPlaygroundStory: ComponentStory<typeof Button> = (props) => {
  return <ButtonPlaygroundTemplate {...cleanUpProps(props)} />;
};

export const ButtonPlayground = ButtonPlaygroundStory.bind({});
ButtonPlayground.parameters = {
  docs: {
    source: {
      code: ButtonPlaygroundRaw,
    },
  },
};
ButtonPlayground.storyName = 'Button. Playground';
//</editor-fold>

//<editor-fold desc="Button. Стили">
const ButtonStylesStory: ComponentStory<typeof Button> = (props) => {
  return <ButtonStylesTemplate {...cleanUpProps(props)} />;
};

export const ButtonStyles = ButtonStylesStory.bind({});
ButtonStyles.parameters = {
  docs: {
    source: {
      code: ButtonStylesRaw,
    },
  },
};
ButtonStyles.storyName = 'Button. Стили';
//</editor-fold>

//<editor-fold desc="Button с иконкой">
const ButtonWithIconStory: ComponentStory<typeof Button> = (props) => {
  return <ButtonWithIconTemplate {...cleanUpProps(props)} />;
};
export const ButtonWithIcon = ButtonWithIconStory.bind({});
ButtonWithIcon.parameters = {
  docs: {
    source: {
      code: ButtonWithIconRaw,
    },
  },
};
ButtonWithIcon.storyName = 'Button с иконкой';
//</editor-fold>

//<editor-fold desc="Button. Загрузка">
const ButtonLoaderStory: ComponentStory<typeof Button> = (props) => {
  return <ButtonLoaderTemplate {...cleanUpProps(props)} />;
};

export const ButtonLoader = ButtonLoaderStory.bind({});
ButtonLoader.parameters = {
  docs: {
    source: {
      code: ButtonLoaderRaw,
    },
  },
};
ButtonLoader.storyName = 'Button. Загрузка';
//</editor-fold>
