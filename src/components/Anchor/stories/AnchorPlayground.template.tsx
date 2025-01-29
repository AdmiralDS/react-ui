import { useRef } from 'react';
import styled from 'styled-components';

import { Anchor, T } from '@admiral-ds/react-ui';
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

const Separator = styled.div`
  height: 24px;
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

export const AnchorPlaygroundTemplate = (props: AnchorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Компонент служит для упрощения навигации по длинным страницам и состоит из якорных гиперссылок, которые, при
        клике на них, направляют пользователя на соответствующую часть страницы.
        <Separator />
        Имеет одинаковую компоновку при использовании как справа, так и слева относительно контента страницы.
        <Separator />
        Ширина компонента задается пользователем. Высота формируется контентом.
        <Separator />
        Компонент не используется на мобильных устройствах
      </T>
      <Separator />
      <Wrapper>
        <Content ref={containerRef}>
          <ContentItem id="part-1" style={{ background: 'rgb(255,220,220)' }} />
          <ContentItem id="part-2" style={{ background: 'rgb(220,255,220)' }} />
          <ContentItem id="part-3" style={{ background: 'rgb(220,220,255)' }} />
        </Content>

        <StyledAnchor {...props} getAnchorContainer={() => containerRef.current || window} items={AnchorItems} />
      </Wrapper>
    </>
  );
};
