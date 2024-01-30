import * as React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div`
  margin-top: 10px;
`;

export const LinkPrimaryTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Dimension - M
      </T>
      <Link appearance="primary" href="" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
        Link
      </Link>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - S
      </T>
      <Link
        appearance="primary"
        dimension="s"
        href=""
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
      >
        Link
      </Link>
    </>
  );
};
