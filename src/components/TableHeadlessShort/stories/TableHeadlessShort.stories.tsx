import type { Meta, StoryFn } from '@storybook/react';
import { Table } from '@admiral-ds/react-ui';

import { BasicTemplate } from './Basic.template';
import { ExpansionTemplate } from './Expansion.template';

// Imports of text sources
import BasicTemplateRaw from './Basic.template?raw';
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

//<editor-fold desc="Playground">
const BasicStory: StoryFn = () => <BasicTemplate />;

export const BasicExample = {
  render: BasicStory,

  parameters: {
    docs: {
      source: {
        code: BasicTemplateRaw,
      },
    },
  },

  name: 'Basic',
};

//</editor-fold>

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
