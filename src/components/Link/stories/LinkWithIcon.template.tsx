import * as React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;
const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

export const LinkWithIconTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Link with icon. Dimension - m
      </T>
      <Separator />
      <Link appearance="primary" href="" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
        <ArrowLeftOutline width={24} />
        <Divider />
        Link
      </Link>
      <Separator $height={24} />
      <T font="Body/Body 1 Long" as="div">
        Link with icon. Dimension - s
      </T>
      <Separator />
      <Link
        appearance="secondary"
        dimension="s"
        href=""
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
      >
        Link
        <Divider />
        <ArrowRightOutline width={20} />
      </Link>
    </>
  );
};
