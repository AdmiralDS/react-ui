import * as React from 'react';
import { Breadcrumbs, T } from '@admiral-ds/react-ui';
import { ReactComponent as HomeOutline } from '@admiral-ds/icons/build/system/HomeOutline.svg';
import { ReactComponent as JpgOutline } from '@admiral-ds/icons/build/documents/JpgOutline.svg';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: 24px;
`;

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
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        При необходимости в любой хлебной крошке можно отобразить иконку слева от текста, для этого у хлебной крошки
        должен быть задан параметр iconStart.
      </T>
      <Separator />
      <Breadcrumbs items={items} dropContainerClassName="dropContainerClass" />
    </>
  );
};
