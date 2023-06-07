import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { PaginationOne, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { PaginationPlaygroundTemplate, PaginationTypesTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PaginationPlaygroundRaw from '!!raw-loader!./Templates/PaginationPlayground';
import PaginationTypesRaw from '!!raw-loader!./Templates/PaginationTypes';

export default {
  title: 'Admiral-2.1/Data Table/PaginationOne',
  decorators: [withDesign],
  component: PaginationOne,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A41329',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A41617',
      },
    ],
  },
  argTypes: {
    page: {
      control: false,
    },
    pageSize: {
      control: false,
    },
    pageSizes: {
      control: false,
    },
    totalItems: {
      control: { type: 'number' },
    },
    simple: {
      control: { type: 'boolean' },
    },
    pageSelectDisabled: {
      control: { type: 'boolean' },
    },
    pageSizeSelectDisabled: {
      control: { type: 'boolean' },
    },
    menuWidth: {
      control: { type: 'text' },
    },
    dropMaxHeight: {
      control: { type: 'text' },
    },
    showPageNumberInput: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    dropContainerCssMixin: {
      control: false,
    },
    pageSizeDropContainerStyle: {
      control: false,
    },
    pageNumberDropContainerStyle: {
      control: false,
    },
  },
} as ComponentMeta<typeof PaginationOne>;

//<editor-fold desc="Playground">
const PaginationPlaygroundStory: ComponentStory<typeof PaginationOne> = (props) => (
  <PaginationPlaygroundTemplate {...cleanUpProps(props)} />
);
export const Playground = PaginationPlaygroundStory.bind({});
Playground.parameters = {
  docs: {
    source: {
      code: PaginationPlaygroundRaw,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Complex and Simple">
const PaginationTypesStory: ComponentStory<typeof PaginationOne> = (props) => (
  <PaginationTypesTemplate {...cleanUpProps(props)} />
);
export const PaginationTypesExample = PaginationTypesStory.bind({});
PaginationTypesExample.parameters = {
  docs: {
    source: {
      code: PaginationTypesRaw,
    },
  },
};
PaginationTypesExample.storyName = 'PaginationOne: Complex and Simple';
//</editor-fold>
