import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const FloatingButtonWrapper = styled.button<{ $dimension?: Dimension; $appearance?: Appearance }>`
  position: relative;
  box-sizing: border-box;
  border: none;
  appearance: none;
  flex: 0 0 auto;
  margin: 0;
  padding: ${(p) => (p.$dimension == 'm' ? 8 : 16)}px;
  height: ${(p) => (p.$dimension == 'm' ? 40 : 56)}px;
  width: ${(p) => (p.$dimension == 'm' ? 40 : 56)}px;
  background-color: ${(p) =>
    p.$appearance == 'primary' ? p.theme.color['Primary/Primary 60 Main'] : p.theme.color['Special/Elevated BG']};
  ${(p) => p.theme.shadow['Shadow 08']}
`;

const IconColor = css<{ $appearance?: Appearance }>`
  & *[fill^='#'] {
    fill: ${(p) =>
      p.$appearance == 'primary' ? p.theme.color['Special/Static White'] : p.theme.color['Primary/Primary 60 Main']};
  }
`;

const FloatingButtonContent = styled.div<{
  $dimension?: Dimension;
  $appearance?: Appearance;
}>`
  ${IconColor}

  & > svg {
    height: 24px;
    width: 24px;
  }
`;

type Appearance = 'primary' | 'secondary';
type Dimension = 'm' | 'xl';

export interface FloatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Состояние загрузки */
  loading?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
}

// type = 'button' важно указывать, так как иначе по умолчанию будет submit

export const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>(
  ({ type = 'button', appearance = 'primary', dimension = 'm', children, ...props }, ref) => {
    return (
      <FloatingButtonWrapper ref={ref} type={type}>
        <FloatingButtonContent>{children}</FloatingButtonContent>
      </FloatingButtonWrapper>
    );
  },
);
