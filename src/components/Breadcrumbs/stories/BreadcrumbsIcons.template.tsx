import * as React from 'react';
import { Breadcrumbs } from '@admiral-ds/react-ui';
import type { BreadcrumbsProps } from '@admiral-ds/react-ui';
import { ReactComponent as HomeOutline } from '@admiral-ds/icons/build/system/HomeOutline.svg';
import { ReactComponent as IconsOutline } from '@admiral-ds/icons/build/category/IconsOutline.svg';

const items = [
  { url: '#', text: 'page 1', iconStart: <HomeOutline /> },
  { url: '#', text: 'page 2222222222222222222222222222222222222222' },
  { url: '#', text: 'page 3', iconStart: <IconsOutline /> },
  { url: '#', text: 'page 4', iconStart: <IconsOutline /> },
  { url: '#', text: 'page 5', iconStart: <IconsOutline /> },
  { url: '#', text: 'page 6', iconStart: <IconsOutline /> },
  { url: '#', text: 'page 7', iconStart: <IconsOutline /> },
  { url: '#', text: 'page 8', iconStart: <IconsOutline /> },
  { url: '#', text: 'page 9', iconStart: <IconsOutline /> },
  { url: '#', text: 'page 10', iconStart: <IconsOutline /> },
  { url: '#', text: 'page 11', iconStart: <IconsOutline /> },
  { text: 'current page' },
];

export const BreadcrumbsIconsTemplate = () => {
  return (
    <>
      <Breadcrumbs items={items} dropContainerClassName="dropContainerClass" />
    </>
  );
};
