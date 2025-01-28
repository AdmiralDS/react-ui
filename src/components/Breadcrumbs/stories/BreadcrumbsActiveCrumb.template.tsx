import * as React from 'react';
import { Breadcrumbs, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: 24px;
`;

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
      <T font="Body/Body 1 Long" as="div">
        Последняя вкладка в компоненте может быть либо неактивной (по умолчанию), в таком случае она отображает текущее
        местоположение. Либо последняя вкладка активна и отображает предыдущий уровень сайта. Управляет поведением
        последней вкладки параметр lastBreadcrumbActive.
      </T>
      <Separator />
      <Breadcrumbs items={items1} />
      <Breadcrumbs items={items2} lastBreadcrumbActive />
    </>
  );
};
