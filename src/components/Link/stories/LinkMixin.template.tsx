import * as React from 'react';
import { LinkComponentCssMixin } from '@admiral-ds/react-ui';
import type { LinkComponent } from '@admiral-ds/react-ui';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

const StyledRouterLink = styled(RouterLink)<LinkComponent>`
  ${LinkComponentCssMixin}
`;

export const LinkMixinTemplate = () => {
  return (
    <>
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
