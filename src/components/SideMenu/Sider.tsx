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

const ChildrenWrapper = styled.div<{ $width: number | string; $border: boolean; $appearance: SiderAppearance }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  width: ${(p) => (typeof p.$width === 'number' ? `${p.$width}px` : p.$width)};
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;

  ${({ theme, $border }) =>
    $border && `border-right: 1px solid var(--admiral-color-Neutral_Neutral20, ${theme.color['Neutral/Neutral 20']})`};

  ${({ theme, $appearance }) =>
    $appearance === 'secondary' &&
    `background-color: var(--admiral-color-Neutral_Neutral05, ${theme.color['Neutral/Neutral 05']})`};

  transform: translateX(-100%);
  opacity: 0;
  transition:
    opacity ${transitionMixin},
    transform ${transitionMixin};
`;

export type SiderAppearance = 'primary' | 'secondary';
export interface SiderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Состояние компонента: открыт/закрыт */
  isOpen?: boolean;
  /** Ширина, дискретное значение для корректной анимации */
  width?: number | string;
  /** Состояние видимости border-right */
  visibleBorder?: boolean;
  /** Внешний вид компонента */
  appearance?: SiderAppearance;
}

export const Sider = ({
  children,
  isOpen = false,
  width = 240,
  visibleBorder = true,
  appearance = 'primary',
  ...props
}: SiderProps) => {
  return (
    <Aside $width={width} data-visible={isOpen ? '' : undefined} {...props}>
      <ChildrenWrapper $width={width} $border={visibleBorder} $appearance={appearance}>
        {children}
      </ChildrenWrapper>
    </Aside>
  );
};
