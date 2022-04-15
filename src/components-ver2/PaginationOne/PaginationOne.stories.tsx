import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { PaginationOne } from '#src/components-ver2/PaginationOne';
import { withDesign } from 'storybook-addon-designs';
import { Field } from '#src/components-ver2/Field';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

const Separator = styled.div`
  width: 100%;
  height: 40px;
`;

export default {
  title: 'Admiral-2.1/PaginationOne',
  decorators: [withDesign],
  component: PaginationOne,
  parameters: {
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
    itemsPerPageText: {
      control: { type: 'string' },
    },
    backwardText: {
      control: { type: 'string' },
    },
    forwardText: {
      control: { type: 'string' },
    },
  },
} as ComponentMeta<typeof PaginationOne>;

const Template1: ComponentStory<typeof PaginationOne> = (args) => {
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = 100;
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
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
      />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof PaginationOne> = () => {
  const [pageSize1, setPageSize1] = useState(8);
  const [page1, setPage1] = useState(1);
  const [pageSize2, setPageSize2] = useState(8);
  const [page2, setPage2] = useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = 100;
  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
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
    </ThemeProvider>
  );
};

export const Playground = Template1.bind({});
Playground.args = {};

export const PaginationTypes = Template2.bind({});
PaginationTypes.args = {};
PaginationTypes.storyName = 'PaginationOne: Complex and Simple';
