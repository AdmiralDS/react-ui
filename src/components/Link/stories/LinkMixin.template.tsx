import * as React from 'react';
import { LinkComponentCssMixin, T } from '@admiral-ds/react-ui';
import type { LinkComponentProps } from '@admiral-ds/react-ui';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

const StyledRouterLink = styled(RouterLink)<LinkComponentProps>`
  ${LinkComponentCssMixin}
`;

export const LinkMixinTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Помимо компонента Link библиотека предоставляет LinkComponentCssMixin - миксин, включающий в себя все стили
        компонента Link согласно дизайну Admiral 2.1. Данный миксин целесообразно применять, если пользователь хочет
        использовать свой собственный компонент, стилизованный согласно дизайну Admiral 2.1.
      </T>
      <Router>
        <StyledRouterLink to="">Styled RouterLink - dimension m</StyledRouterLink>
        <Divider />
        <StyledRouterLink to="" $dimension="s">
          Styled RouterLink - dimension s
        </StyledRouterLink>
        <Divider />
        <StyledRouterLink to="" $appearance="secondary">
          Styled RouterLink - appearance secondary
        </StyledRouterLink>
      </Router>
    </>
  );
};
