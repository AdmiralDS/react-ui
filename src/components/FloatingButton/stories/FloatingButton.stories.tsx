import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { FloatingButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { FloatingButtonPlaygroundTemplate } from './FloatingButtonPlayground.template';
import { FloatingButtonStyleTemplate } from './FloatingButtonStyle.template';
import { FloatingButtonTooltipTemplate } from './FloatingButtonTooltip.template';
import { FloatingButtonPositionTemplate } from './FloatingButtonPosition.template';
import { FloatingButtonMobileTemplate } from './FloatingButtonMobile.template';
import { FloatingButtonMenuTemplate } from './FloatingButtonMenu.template';
import { FloatingButtonMenuControlledTemplate } from './FloatingButtonMenuControlled.template';

// Imports of text sources
import FloatingButtonPlaygroundRaw from './FloatingButtonPlayground.template?raw';
import FloatingButtonStyleRaw from './FloatingButtonStyle.template?raw';
import FloatingButtonTooltipRaw from './FloatingButtonTooltip.template?raw';
import FloatingButtonPositionRaw from './FloatingButtonPosition.template?raw';
import FloatingButtonMobileRaw from './FloatingButtonMobile.template?raw';
import FloatingButtonMenuRaw from './FloatingButtonMenu.template?raw';
import FloatingButtonMenuControlledRaw from './FloatingButtonMenuControlled.template?raw';

export default {
  title: 'Admiral-2.1/FloatingButton',
  decorators: undefined,
  component: FloatingButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=190878-139566&mode=dev',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=191233-164632&mode=dev',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'm'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof FloatingButton>;

//<editor-fold desc="Playground">
const FloatingButtonPlaygroundStory: StoryFn<typeof FloatingButton> = (props) => (
  <FloatingButtonPlaygroundTemplate {...props} />
);

export const FloatingButtonPlaygroundExample = {
  render: FloatingButtonPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonPlaygroundRaw,
      },
      description: {
        story: ``,
      },
    },
  },

  name: 'Playground',
};

//</editor-fold>

//<editor-fold desc="Style">
const FloatingButtonStyleStory: StoryFn<typeof FloatingButton> = (props) => <FloatingButtonStyleTemplate {...props} />;

export const FloatingButtonStyleExample = {
  render: FloatingButtonStyleStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonStyleRaw,
      },
      description: {
        story: ``,
      },
    },
  },

  name: 'FloatingButton. Функции и размеры',
};

//</editor-fold>

//<editor-fold desc="Tooltip">
const FloatingButtonTooltipStory: StoryFn<typeof FloatingButton> = (props) => (
  <FloatingButtonTooltipTemplate {...props} />
);

export const FloatingButtonTooltipExample = {
  render: FloatingButtonTooltipStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonTooltipRaw,
      },
      description: {
        story: ``,
      },
    },
  },

  name: 'FloatingButton. Пример с Tooltip',
};

//</editor-fold>

//<editor-fold desc="Position">
const FloatingButtonPositionStory: StoryFn<typeof FloatingButton> = (props) => (
  <FloatingButtonPositionTemplate {...props} />
);

export const FloatingButtonPositionExample = {
  render: FloatingButtonPositionStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonPositionRaw,
      },
      description: {
        story: `По умолчанию кнопка располагается в правом нижнем углу экрана, на расстоянии 28 px от краев экрана. 
        Пользователь может задать свое расположение кнопки, переопределив её позиционирование через стили.`,
      },
    },
  },

  name: 'FloatingButton. Расположение',
};

//</editor-fold>

//<editor-fold desc="Mobile">
const FloatingButtonMobileStory: StoryFn<typeof FloatingButton> = (props) => (
  <FloatingButtonMobileTemplate {...props} />
);

export const FloatingButtonMobileExample = {
  render: FloatingButtonMobileStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonMobileRaw,
      },
      description: {
        story: `На мобильных устройствах отступ по умолчанию равен 16px от краев экрана.`,
      },
    },
  },

  name: 'FloatingButton. Mobile',
};

//</editor-fold>

//<editor-fold desc="Menu">
const FloatingButtonMenuStory: StoryFn<typeof FloatingButton> = (props) => <FloatingButtonMenuTemplate {...props} />;

export const FloatingButtonMenuExample = {
  render: FloatingButtonMenuStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonMenuRaw,
      },
      description: {
        story: ``,
      },
    },
  },

  name: 'FloatingButtonMenu',
};

//</editor-fold>

//<editor-fold desc="Menu controlled">
const FloatingButtonMenuControlledStory: StoryFn<typeof FloatingButton> = (props) => (
  <FloatingButtonMenuControlledTemplate {...props} />
);

export const FloatingButtonMenuControlledExample = {
  render: FloatingButtonMenuControlledStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonMenuControlledRaw,
      },
      description: {
        story: ``,
      },
    },
  },

  name: 'FloatingButtonMenu. Controlled mode',
};

//</editor-fold>
