import * as React from 'react';
import { FloatingButton } from '@admiral-ds/react-ui';
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
        <FloatingButton dimension="xl" badge={{ dot: true, appearance: 'warning' }} style={{ insetInline: '0px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton badge={{ dot: true, appearance: 'warning' }} style={{ insetInline: '84px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton
          dimension="xl"
          appearance="secondary"
          badge={{ dot: true, appearance: 'warning' }}
          style={{ insetInline: '184px auto' }}
        >
          <EmailOutline />
        </FloatingButton>
        <FloatingButton
          appearance="secondary"
          badge={{ dot: true, appearance: 'warning' }}
          style={{ insetInline: '268px auto' }}
        >
          <EmailOutline />
        </FloatingButton>
      </Container>
      <Container>
        <FloatingButton dimension="xl" badge={{ count: 5, appearance: 'warning' }} style={{ insetInline: '0px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton badge={{ count: 5, appearance: 'warning' }} style={{ insetInline: '84px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton
          dimension="xl"
          appearance="secondary"
          badge={{ count: 5, appearance: 'warning' }}
          style={{ insetInline: '184px auto' }}
        >
          <EmailOutline />
        </FloatingButton>
        <FloatingButton
          appearance="secondary"
          badge={{ count: 5, appearance: 'warning' }}
          style={{ insetInline: '268px auto' }}
        >
          <EmailOutline />
        </FloatingButton>
      </Container>
      <div>
        Бейджи могут иметь следующие статусы: Info, Error, Success, Warning. Все бейджи имеют одно-пиксельную внутреннюю
        обводку цвета «Neutral 00».
      </div>
      <Container $reduceMargin>
        <FloatingButton dimension="xl" badge={{ dot: true }} style={{ insetInline: '0px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton dimension="xl" badge={{ dot: true, appearance: 'error' }} style={{ insetInline: '84px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton
          dimension="xl"
          badge={{ dot: true, appearance: 'success' }}
          style={{ insetInline: '184px auto' }}
        >
          <EmailOutline />
        </FloatingButton>
        <FloatingButton
          dimension="xl"
          badge={{ dot: true, appearance: 'warning' }}
          style={{ insetInline: '268px auto' }}
        >
          <EmailOutline />
        </FloatingButton>
      </Container>
      <Container>
        <FloatingButton dimension="xl" badge={{ count: 5 }} style={{ insetInline: '0px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton dimension="xl" badge={{ count: 5, appearance: 'error' }} style={{ insetInline: '84px auto' }}>
          <EmailOutline />
        </FloatingButton>
        <FloatingButton
          dimension="xl"
          badge={{ count: 5, appearance: 'success' }}
          style={{ insetInline: '184px auto' }}
        >
          <EmailOutline />
        </FloatingButton>
        <FloatingButton
          dimension="xl"
          badge={{ count: 5, appearance: 'warning' }}
          style={{ insetInline: '268px auto' }}
        >
          <EmailOutline />
        </FloatingButton>
      </Container>
    </>
  );
};
