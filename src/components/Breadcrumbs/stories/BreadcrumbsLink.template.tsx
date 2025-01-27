import * as React from 'react';
import { Breadcrumbs, T } from '@admiral-ds/react-ui';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: 24px;
`;

const items = [
  { linkAs: RouterLink, text: 'page 1', linkProps: { to: '/page1' } },
  { linkAs: RouterLink, text: 'page 2222222222222222222222222222222222222222', linkProps: { to: '/page2' } },
  { linkAs: RouterLink, text: 'page 3', linkProps: { to: '/page3' } },
  { text: 'current page' },
];

export const BreadcrumbsLinkTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        С помощью параметров linkAs и linkProps (входят в состав BreadcrumbProps) можно вместо обычного anchor
        отрендерить внутри хлебной крошки любой другой компонент. Этот компонент можно задать с помощью свойства linkAs
        и передать в него необходимые параметры через linkProps.
      </T>
      <Separator />
      <Router>
        <Breadcrumbs items={items} />
      </Router>
    </>
  );
};
