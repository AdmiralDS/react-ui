import { useRef } from 'react';
import styled from 'styled-components';

import { Anchor } from '@admiral-ds/react-ui';
import type { AnchorLinkItemProps, AnchorProps } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  height: 400px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 80%;
  overflow: scroll;
`;

const ContentItem = styled.div`
  flex: 1 0 500px;
  //height: 500px;
`;

const StyledAnchor = styled(Anchor)`
  flex: 0 1 20%;
`;

const AnchorItems: Array<AnchorLinkItemProps> = [
  {
    key: 'part-1',
    href: '#part-1',
    title: 'Part 1',
    children: [
      {
        key: 'part-1-1',
        href: '#part-1-1',
        title: 'Part 1.1',
        children: [
          {
            key: 'part-1-1-1',
            href: '#part-1-1-1',
            title: 'Part 1.1-1',
          },
          {
            key: 'part-1-1-2',
            href: '#part-1-1-2',
            title: 'Part 1.1-2',
          },
        ],
      },
      {
        key: 'part-1-2',
        href: '#part-1-2',
        title: 'Part 1.2',
        children: [
          {
            key: 'part-1-2-1',
            href: '#part-1-2-1',
            title: 'Part 1.2-1',
          },
          {
            key: 'part-1-2-2',
            href: '#part-1-2-2',
            title: 'Part 1.2-2',
          },
        ],
      },
    ],
  },
  {
    key: 'part-2',
    href: '#part-2',
    title: 'Part 2',
  },
  {
    key: 'part-3',
    href: '#part-3',
    title: 'Part 3',
  },
];

export const AnchorTreeTemplate = (props: AnchorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <Content ref={containerRef}>
        <ContentItem id="part-1" style={{ background: 'rgb(235, 74, 74)' }} />
        <ContentItem id="part-1-1" style={{ background: 'rgb(172, 109, 109)' }} />
        <ContentItem id="part-1-1-1" style={{ background: 'rgb(212, 105, 34)' }} />
        <ContentItem id="part-1-1-2" style={{ background: 'rgb(205, 147, 32)' }} />
        <ContentItem id="part-1-2" style={{ background: 'rgb(227, 62, 202)' }} />
        <ContentItem id="part-1-2-1" style={{ background: 'rgb(132, 16, 110)' }} />
        <ContentItem id="part-1-2-2" style={{ background: 'rgb(194, 110, 177)' }} />
        <ContentItem id="part-2" style={{ background: 'rgb(65, 220, 65)' }} />
        <ContentItem id="part-3" style={{ background: 'rgb(97, 97, 243)' }} />
      </Content>

      <StyledAnchor {...props} getAnchorContainer={() => containerRef.current || window} items={AnchorItems} />
    </Wrapper>
  );
};
