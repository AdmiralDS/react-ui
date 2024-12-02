import type { Meta, StoryFn } from '@storybook/react';
import { Table } from '@admiral-ds/react-ui';

import { DetailsTemplate } from './Details.template';
import { ExpansionTemplate } from './Expansion.template';

// Imports of text sources
import DetailsTemplateRaw from './Details.template?raw';
import ExpansionTemplateRaw from './Expansion.template?raw';

export default {
  title: 'Admiral-2.1/TableHeadlessShort',
  decorators: undefined,
  component: Table,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {},
} as Meta<typeof Table>;

//<editor-fold desc="Expansion">
const ExpansionStory: StoryFn = () => <ExpansionTemplate />;

export const ExpansionExample = {
  render: ExpansionStory,

  parameters: {
    docs: {
      source: {
        code: ExpansionTemplateRaw,
      },
    },
  },

  name: 'Expansion',
};

//</editor-fold>

//<editor-fold desc="Details">
const DetailsStory: StoryFn = () => <DetailsTemplate />;

export const DetailsExample = {
  render: DetailsStory,

  parameters: {
    docs: {
      source: {
        code: DetailsTemplateRaw,
      },
    },
  },

  name: 'Details',
};

//</editor-fold>
