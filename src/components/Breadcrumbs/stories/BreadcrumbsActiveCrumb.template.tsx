import * as React from 'react';
import { Breadcrumbs } from '@admiral-ds/react-ui';

const items1 = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { url: '#', text: 'current page' },
];

const items2 = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { url: '#', text: 'previous page' },
];

export const BreadcrumbsActiveCrumbTemplate = () => {
  return (
    <>
      <Breadcrumbs items={items1} />
      <Breadcrumbs items={items2} lastBreadcrumbActive />
    </>
  );
};
