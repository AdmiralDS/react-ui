import styled from 'styled-components';
import type { css } from 'styled-components';

const transitionTimingFunc = 'cubic-bezier(0, 0, 0.2, 1)';
const transitionDuration = '0.3s';
const transitionMixin = `
  ${transitionDuration} ${transitionTimingFunc} 0ms
`;

const ChildrenWrapper = styled.div<{ $width: number | string }>`
  display: flex;
  height: 100%;
  width: ${(p) => (typeof p.$width === 'number' ? `${p.$width}px` : p.$width)};
  overflow: hidden;
  box-sizing: border-box;

  transform: translateX(-100%);
  opacity: 0;
  transition:
    opacity ${transitionMixin},
    transform ${transitionMixin};
`;

const Aside = styled.aside<{
  $width: number | string;
  $appearance: SiderAppearance;
  $border: boolean;
  $cssMixin?: ReturnType<typeof css>;
}>`
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
  box-sizing: border-box;
  overflow: hidden;

  background-color: ${(p) =>
    p.$appearance === 'primary'
      ? `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})`
      : `var(--admiral-color-Neutral_Neutral05, ${p.theme.color['Neutral/Neutral 05']})`};
  ${({ theme, $border }) =>
    $border &&
    `box-shadow: inset -1px 0 0 0 var(--admiral-color-Neutral_Neutral20, ${theme.color['Neutral/Neutral 20']})`};
  ${(p) => p.$cssMixin};

  &[data-open] {
    width: ${(p) => (typeof p.$width === 'number' ? `${p.$width}px` : p.$width)};
    min-width: ${(p) => (typeof p.$width === 'number' ? `${p.$width}px` : p.$width)};
    max-width: ${(p) => (typeof p.$width === 'number' ? `${p.$width}px` : p.$width)};
    flex: 0 0 ${(p) => (typeof p.$width === 'number' ? `${p.$width}px` : p.$width)};
    ${ChildrenWrapper} {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

export type SiderAppearance = 'primary' | 'secondary';
export interface SiderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Состояние компонента: открыт/закрыт */
  isOpen?: boolean;
  /** Ширина, дискретное значение для корректной анимации */
  width?: number | string;
  /** Отображение border по правой стороне компонента */
  withBorder?: boolean;
  /** Внешний вид компонента */
  appearance?: SiderAppearance;
  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: ReturnType<typeof css>;
}

export const Sider = ({
  children,
  isOpen = false,
  width = 240,
  withBorder = false,
  appearance = 'primary',
  cssMixin,
  ...props
}: SiderProps) => {
  return (
    <Aside
      data-open={isOpen ? '' : undefined}
      $width={width}
      $appearance={appearance}
      $border={withBorder}
      $cssMixin={cssMixin}
      {...props}
    >
      <ChildrenWrapper $width={width}>{children}</ChildrenWrapper>
    </Aside>
  );
};
