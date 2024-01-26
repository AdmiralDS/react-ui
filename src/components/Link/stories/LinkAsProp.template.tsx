import * as React from 'react';
import { Link } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

export const LinkAsPropTemplate = () => {
  return (
    <>
      <Link as="button" type="button">
        Render button instead of anchor
      </Link>
      <Divider />
      <Link as="div" dimension="s">
        Render div instead of anchor
      </Link>
      <Divider />
      <Router>
        <Link as={RouterLink} to="">
          Render RouterLink instead of anchor
        </Link>
      </Router>
    </>
  );
};
