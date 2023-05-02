import * as React from 'react';
import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

const Title = styled.h5<{ mobile: boolean; displayCloseIcon: boolean }>`
  ${({ mobile }) => (mobile ? typography['Header/H6'] : typography['Header/H5'])};
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  margin: 0;
  padding: ${({ mobile, displayCloseIcon }) => {
    if (mobile) {
      return displayCloseIcon ? '0 48px 10px 16px' : '0 16px 10px';
    }
    return displayCloseIcon ? '0 56px 10px 24px' : '0 24px 10px';
  }};
`;

const Content = styled.div<{ scrollbar: number; mobile: boolean }>`
  overflow-y: auto;
  outline: none;
  padding: ${({ scrollbar, mobile }) => `8px ${(mobile ? 16 : 24) - scrollbar}px 8px ${mobile ? 16 : 24}px`};
`;

const ButtonPanel = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column-reverse' : 'row-reverse')};
  padding: ${({ mobile }) => (mobile ? '18px 16px 0' : '18px 24px 0')};

  & > button {
    margin: ${({ mobile }) => (mobile ? '0 0 16px 0' : '0 16px 0 0')};
    ${({ mobile }) => mobile && 'width: 100%;'}
  }

  & > button:first-child {
    margin: 0;
  }
`;

export const DrawerContext = React.createContext({ mobile: false, displayCloseIcon: true } as {
  mobile: boolean;
  displayCloseIcon: boolean;
});

export const DrawerTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  const { mobile, displayCloseIcon } = React.useContext(DrawerContext);
  const asProp = mobile ? 'h6' : 'h5';
  return (
    <Title mobile={mobile} displayCloseIcon={displayCloseIcon} as={asProp} {...props}>
      {children}
    </Title>
  );
};

export const DrawerContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [overflow, setOverflow] = React.useState(false);
  const [scrollbarSize, setScrollbarSize] = React.useState(0);
  const mobile = React.useContext(DrawerContext).mobile;

  React.useLayoutEffect(() => {
    if (contentRef.current && checkOverflow(contentRef.current) !== overflow) {
      setScrollbarSize(contentRef.current.offsetWidth - contentRef.current.clientWidth);
      setOverflow(checkOverflow(contentRef.current));
    }
  }, [children, overflow, setOverflow]);

  React.useLayoutEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (contentRef.current && checkOverflow(contentRef.current) !== overflow) {
          setScrollbarSize(contentRef.current.offsetWidth - contentRef.current.clientWidth);
          setOverflow(checkOverflow(contentRef.current));
        }
      });
      resizeObserver.observe(contentRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [overflow, setOverflow]);

  return (
    <Content tabIndex={-1} ref={contentRef} scrollbar={overflow ? scrollbarSize : 0} mobile={mobile} {...props}>
      {children}
    </Content>
  );
};

export const DrawerButtonPanel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const mobile = React.useContext(DrawerContext).mobile;
  return (
    <ButtonPanel mobile={mobile} {...props}>
      {children}
    </ButtonPanel>
  );
};
