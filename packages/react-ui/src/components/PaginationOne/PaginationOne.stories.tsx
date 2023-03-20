import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import { PaginationOne } from '#src/components/PaginationOne';
import { withDesign } from 'storybook-addon-designs';
import { Field } from '#src/components/Field';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

const Separator = styled.div`
  width: 100%;
  height: 40px;
`;

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
      control: { type: 'number' },
    },
    pageSize: {
      control: { type: 'number' },
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
  },
} as ComponentMeta<typeof PaginationOne>;

const Template1: ComponentStory<typeof PaginationOne> = (args) => {
  const [pageSize, setPageSize] = React.useState(8);
  const [page, setPage] = React.useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = args.totalItems;

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <PaginationOne
        {...args}
        onChange={({ page, pageSize }) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        page={page}
        pageSize={pageSize}
        totalItems={totalElements}
        pageSizes={pageSizes}
        data-dropdown-container-id="pagination-with-dropdown"
        data-dropdown-container-test-id="pagination-test-id-with-dropdown"
        className="pagination-class-name"
      />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof PaginationOne> = () => {
  const [pageSize1, setPageSize1] = React.useState(8);
  const [page1, setPage1] = React.useState(1);
  const [pageSize2, setPageSize2] = React.useState(8);
  const [page2, setPage2] = React.useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = 100;
  return (
    <>
      <Field label="Pagination One Complex">
        <PaginationOne
          onChange={({ page, pageSize }) => {
            setPage1(page);
            setPageSize1(pageSize);
          }}
          page={page1}
          pageSize={pageSize1}
          totalItems={totalElements}
          pageSizes={pageSizes}
        />
      </Field>
      <Separator />
      <Field label="Pagination One Complex. Minimal size">
        <PaginationOne
          style={{ width: 'fit-content' }}
          onChange={({ page, pageSize }) => {
            setPage1(page);
            setPageSize1(pageSize);
          }}
          page={page1}
          pageSize={pageSize1}
          totalItems={totalElements}
          pageSizes={pageSizes}
        />
      </Field>
      <Separator />
      <Field label="Pagination One Simple">
        <PaginationOne
          onChange={({ page, pageSize }) => {
            setPage2(page);
            setPageSize2(pageSize);
          }}
          page={page2}
          pageSize={pageSize2}
          totalItems={totalElements}
          pageSizes={pageSizes}
          simple
        />
      </Field>
      <Separator />
      <Field label="Pagination One Simple. Minimal size">
        <PaginationOne
          style={{ width: 'fit-content' }}
          onChange={({ page, pageSize }) => {
            setPage2(page);
            setPageSize2(pageSize);
          }}
          page={page2}
          pageSize={pageSize2}
          totalItems={totalElements}
          pageSizes={pageSizes}
          simple
        />
      </Field>
    </>
  );
};

export const Playground = Template1.bind({});
Playground.args = { totalItems: 100 };

export const PaginationTypes = Template2.bind({});
PaginationTypes.args = {};
PaginationTypes.storyName = 'PaginationOne: Complex and Simple';
