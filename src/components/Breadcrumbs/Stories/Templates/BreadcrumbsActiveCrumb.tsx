import * as React from 'react';
import { Breadcrumbs } from '@admiral-ds/react-ui';

const items = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2' },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4' },
  { url: '#', text: 'current page' },
];

export const BreadcrumbsActiveCrumbTemplate = () => {
  return (
    <>
      <Breadcrumbs items={items} />
      <Breadcrumbs items={items} lastBreadcrumbActive />
    </>
  );
};
