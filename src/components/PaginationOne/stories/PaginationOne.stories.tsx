import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { PaginationOne, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { PaginationOnePlaygroundTemplate } from './PaginationOnePlayground.template';
import { PaginationOneTypesTemplate } from './PaginationOneTypes.template';

// Imports of text sources
import PaginationOnePlaygroundRaw from './PaginationOnePlayground.template?raw';
import PaginationOneTypesRaw from './PaginationOneTypes.template?raw';

export default {
  title: 'Admiral-2.1/Data Table/PaginationOne',
  decorators: undefined,
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
    dimension: {
      options: ['m', 's'],
      defaultValue: 'm',
      control: { type: 'radio' },
    },
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
    locale: {
      control: false,
    },
  },
} as Meta<typeof PaginationOne>;

//<editor-fold desc="Playground">
const PaginationPlaygroundStory: StoryFn<typeof PaginationOne> = ({
  page,
  pageSize,
  pageSizes,
  totalItems,
  onChange,
  ...props
}) => {
  const [{ CSSCustomProps }] = useGlobals();
  return (
    <PaginationOnePlaygroundTemplate
      page={page}
      pageSize={pageSize}
      pageSizes={pageSizes}
      totalItems={totalItems}
      onChange={onChange}
      CSSCustomProps={CSSCustomProps}
      {...props}
    />
  );
};

export const Playground = {
  render: PaginationPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: PaginationOnePlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Complex and Simple">
const PaginationTypesStory: StoryFn<typeof PaginationOne> = ({
  page,
  pageSize,
  pageSizes,
  totalItems,
  onChange,
  ...props
}) => {
  const [{ CSSCustomProps }] = useGlobals();
  return (
    <PaginationOneTypesTemplate
      page={page}
      pageSize={pageSize}
      pageSizes={pageSizes}
      totalItems={totalItems}
      onChange={onChange}
      CSSCustomProps={CSSCustomProps}
      {...props}
    />
  );
};

export const PaginationTypesExample = {
  render: PaginationTypesStory,

  parameters: {
    docs: {
      source: {
        code: PaginationOneTypesRaw,
      },
    },
  },

  name: 'PaginationOne: Complex and Simple',
};
