import * as React from 'react';
import { FloatingButton, T } from '@admiral-ds/react-ui';
import type { FloatingButtonProps } from '@admiral-ds/react-ui';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import styled from 'styled-components';

const Container = styled.div<{ $reduceMargin?: boolean }>`
  position: relative;
  height: 120px;
  margin-bottom: ${(p) => (p.$reduceMargin ? 0 : 20)}px;
  transform: scale(1);
`;

export const FloatingButtonStyleTemplate = (props: FloatingButtonProps) => {
  return (
    <>
      <div>Компонент имеет два размера – M (40 px) и XL (56 px). Два типа – Primary и Secondary.</div>
      <Container>
        <FloatingButton dimension="xl" style={{ insetInline: '0px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton style={{ insetInline: '84px' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton dimension="xl" appearance="secondary" style={{ insetInline: '184px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton appearance="secondary" style={{ insetInline: '268px auto' }}>
          <EmailOutline />
        </FloatingButton>
      </Container>
      <div>Можно использовать с бэйджами – Badge (выключка справа) и Badge Dot</div>
      <Container $reduceMargin>
        <FloatingButton dimension="xl" badgeDot status="warning" style={{ insetInline: '0px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton badgeDot status="warning" style={{ insetInline: '84px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton
          dimension="xl"
          appearance="secondary"
          badgeDot
          status="warning"
          style={{ insetInline: '184px auto' }}
        >
          <EmailOutline />
        </FloatingButton>
        <FloatingButton appearance="secondary" badgeDot status="warning" style={{ insetInline: '268px auto' }}>
          <EmailOutline />
        </FloatingButton>
      </Container>
      <Container>
        <FloatingButton dimension="xl" badge={5} status="warning" style={{ insetInline: '0px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton badge={5} status="warning" style={{ insetInline: '84px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton
          dimension="xl"
          appearance="secondary"
          badge={25}
          status="warning"
          style={{ insetInline: '184px auto' }}
        >
          <EmailOutline />
        </FloatingButton>
        <FloatingButton appearance="secondary" badge={25} status="warning" style={{ insetInline: '268px auto' }}>
          <EmailOutline />
        </FloatingButton>
      </Container>
      <div>
        Бейджи могут иметь следующие статусы: Info, Error, Success, Warning. Все бейджи имеют одно-пиксельную внутреннюю
        обводку цвета «Neutral 00».
      </div>
      <Container $reduceMargin>
        <FloatingButton dimension="xl" badgeDot style={{ insetInline: '0px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton dimension="xl" badgeDot status="error" style={{ insetInline: '84px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton dimension="xl" badgeDot status="success" style={{ insetInline: '184px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton dimension="xl" badgeDot status="warning" style={{ insetInline: '268px auto' }}>
          <EmailOutline />
        </FloatingButton>
      </Container>
      <Container>
        <FloatingButton dimension="xl" badge={5} style={{ insetInline: '0px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton dimension="xl" badge={5} status="error" style={{ insetInline: '84px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton dimension="xl" badge={5} status="success" style={{ insetInline: '184px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton dimension="xl" badge={5} status="warning" style={{ insetInline: '268px auto' }}>
          <EmailOutline />
        </FloatingButton>
      </Container>
    </>
  );
};
