import styled from 'styled-components';

const transitionTimingFunc = 'cubic-bezier(0, 0, 0.2, 1)';
const transitionDuration = '0.3s';
const transitionMixin = `
  ${transitionDuration} ${transitionTimingFunc} 0ms
`;

const Aside = styled.aside<{ $width: number | string }>`
  position: relative;
  width: 0;
  min-width: 0;
  max-width: 0;
  flex: 0 0 0;
  transition:
    width ${transitionMixin},
    min-width ${transitionMixin},
    max-width ${transitionMixin},
    flex-basis ${transitionMixin};
  overflow: hidden;

  &[data-visible] {
    width: ${(p) => (typeof p.$width === 'number' ? `${p.$width}px` : p.$width)};
    min-width: ${(p) => (typeof p.$width === 'number' ? `${p.$width}px` : p.$width)};
    max-width: ${(p) => (typeof p.$width === 'number' ? `${p.$width}px` : p.$width)};
    flex: 0 0 ${(p) => (typeof p.$width === 'number' ? `${p.$width}px` : p.$width)};
    > div {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

const ChildrenWrapper = styled.div<{ $width: number | string }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${(p) => (typeof p.$width === 'number' ? `${p.$width}px` : p.$width)};
  height: 100%;
  transform: translateX(-100%);
  opacity: 0;
  transition:
    opacity ${transitionMixin},
    transform ${transitionMixin};
  overflow: hidden;
`;

interface SiderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Состояние компонента: открыт/закрыт */
  isOpen?: boolean;
  /** Ширина, дискретное значение для корректной анимации */
  width?: number | string;
}

export const Sider = ({ children, isOpen = false, width = 240, ...props }: SiderProps) => {
  return (
    <Aside $width={width} data-visible={isOpen ? '' : undefined} {...props}>
      <ChildrenWrapper $width={width}>{children}</ChildrenWrapper>
    </Aside>
  );
};
