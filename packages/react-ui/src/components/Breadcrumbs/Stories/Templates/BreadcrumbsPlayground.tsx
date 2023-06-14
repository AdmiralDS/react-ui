import * as React from 'react';
import { Breadcrumbs } from '@admiral-ds/react-ui';
import type { BreadcrumbsProps } from '@admiral-ds/react-ui';

const items = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2222222222222222222222222222222222222222' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { url: '#', text: 'page 5' },
  { url: '#', text: 'page 6' },
  { url: '#', text: 'page 7' },
  { url: '#', text: 'page 8' },
  { url: '#', text: 'page 9' },
  { url: '#', text: 'page 10' },
  { url: '#', text: 'page 11' },
  { text: 'current page' },
];

export const BreadcrumbsPlaygroundTemplate = (args: BreadcrumbsProps) => {
  return (
    <>
      <Breadcrumbs {...args} items={items} dropContainerClassName="dropContainerClass" />
    </>
  );
};
