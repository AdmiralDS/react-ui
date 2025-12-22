import * as React from 'react';
import { Breadcrumbs } from '@admiral-ds/react-ui';

const items = [
  { url: '#', text: 'page 1' },
  { url: '#', text: 'page 2222222222222222222222222222222222222222', disabled: true },
  { url: '#', text: 'page 3' },
  { url: '#', text: 'page 4', disabled: true },
  { text: 'current page' },
];

export const BreadcrumbsDisabledTemplate = () => {
  return <Breadcrumbs items={items} />;
};
