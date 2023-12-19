import type { FC, HTMLAttributes } from 'react';
import { createContext, useContext, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import { typography } from '#src/components/Typography';
import { throttleWrap } from '#src/components/common/utils/throttleWrap';

const Title = styled.h5<{ $mobile: boolean; $displayCloseIcon: boolean }>`
  ${({ $mobile }) => ($mobile ? typography['Header/H6'] : typography['Header/H5'])};
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  margin: 0;
  padding: ${({ $mobile, $displayCloseIcon }) => {
    if ($mobile) {
      return $displayCloseIcon ? '0 48px 8px 16px' : '0 16px 8px';
    }
    return $displayCloseIcon ? '0 56px 8px 24px' : '0 24px 8px';
  }};
`;

const Content = styled.div<{ $mobile: boolean }>`
  overflow-y: auto;
  outline: none;
  scrollbar-gutter: stable;
  padding-block: 8px;
  padding-inline: ${({ $mobile }) => `${$mobile ? 16 : 24}px`};
  height: 100%;
`;

const ButtonPanel = styled.div<{ $mobile: boolean }>`
  display: flex;
  flex-direction: ${({ $mobile }) => ($mobile ? 'column-reverse' : 'row-reverse')};
  padding: ${({ $mobile }) => ($mobile ? '16px 16px 0' : '16px 24px 0')};

  & > button {
    margin: ${({ $mobile }) => ($mobile ? '0 0 16px 0' : '0 16px 0 0')};
    ${({ $mobile }) => $mobile && 'width: 100%;'}
  }

  & > button:first-child {
    margin: 0;
  }
`;

export const DrawerContext = createContext({ mobile: false, displayCloseIcon: true } as {
  mobile: boolean;
  displayCloseIcon: boolean;
});

export const DrawerTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  const { mobile, displayCloseIcon } = useContext(DrawerContext);
  const asProp = mobile ? 'h6' : 'h5';
  return (
    <Title $mobile={mobile} $displayCloseIcon={displayCloseIcon} as={asProp} {...props}>
      {children}
    </Title>
  );
};

export const DrawerContent: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const mobile = useContext(DrawerContext).mobile;

  useLayoutEffect(() => {
    const node = contentRef.current;
    if (node) {
      const resizeObserver = new ResizeObserver(
        throttleWrap(() => {
          // Берем значение паддинга из начала блока для просчета симметричного отступа с обоих краев модалки
          const leftPadding = (node.computedStyleMap().get('padding-inline-start') as CSSUnitValue)?.value ?? 0;

          // Вычисляем ширину полоски скролла
          const paddingValue = leftPadding - (node.offsetWidth - node.clientWidth);

          // При уменьшении масштаба область скрола не менят свой размер и может становиться больше необходимого паддинга,
          // по этому имеет смысл держать минимально возможный паддинг от полосы скрола
          node.style.paddingRight = `${paddingValue > 4 ? paddingValue : 4}px`;
        }, 500),
      );
      resizeObserver.observe(node);
      return () => {
        resizeObserver.unobserve(node);
      };
    }
  }, []);

  return (
    <Content tabIndex={-1} ref={contentRef} $mobile={mobile} {...props}>
      {children}
    </Content>
  );
};

export const DrawerButtonPanel: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const mobile = useContext(DrawerContext).mobile;
  return (
    <ButtonPanel $mobile={mobile} {...props}>
      {children}
    </ButtonPanel>
  );
};
