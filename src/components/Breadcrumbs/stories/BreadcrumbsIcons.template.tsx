import * as React from 'react';
import { Breadcrumbs } from '@admiral-ds/react-ui';
import { ReactComponent as HomeOutline } from '@admiral-ds/icons/build/system/HomeOutline.svg';
import { ReactComponent as JpgOutline } from '@admiral-ds/icons/build/documents/JpgOutline.svg';

const items = [
  { url: '#', text: 'page 1', iconStart: <HomeOutline /> },
  { url: '#', text: 'page 2222222222222222222222222222222222222222', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 3', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 4', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 5', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 6', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 7', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 8', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 9', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 10', iconStart: <JpgOutline /> },
  { url: '#', text: 'page 11', iconStart: <JpgOutline /> },
  { text: 'current page' },
];

export const BreadcrumbsIconsTemplate = () => {
  return <Breadcrumbs items={items} dropContainerClassName="dropContainerClass" />;
};
