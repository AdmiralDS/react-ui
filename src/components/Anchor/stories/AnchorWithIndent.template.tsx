import { useRef } from 'react';
import styled from 'styled-components';

import { Anchor } from '@admiral-ds/react-ui';
import type { AnchorProps } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  height: 400px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 80%;
  overflow: scroll;
  scroll-behavior: smooth;
`;

const ContentItem = styled.div`
  flex: 1 0 500px;
`;

const StyledAnchor = styled(Anchor)`
  flex: 0 1 20%;
`;

const AnchorItems = [
  {
    key: 'part-1',
    href: '#part-1',
    title: 'Part 1',
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

export const AnchorWithIndentTemplate = (props: AnchorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <Content ref={containerRef}>
        <ContentItem id="part-1" style={{ background: 'rgb(255,220,220)' }} />
        <ContentItem id="part-2" style={{ background: 'rgb(220,255,220)' }} />
        <ContentItem id="part-3" style={{ background: 'rgb(220,220,255)' }} />
      </Content>

      <StyledAnchor
        {...props}
        getAnchorContainer={() => containerRef.current || window}
        items={AnchorItems}
        indentItems={8}
      />
    </Wrapper>
  );
};
