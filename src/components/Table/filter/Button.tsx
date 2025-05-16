import styled, { css } from 'styled-components';
import { ReactComponent as MoreHorizontalOutline } from '@admiral-ds/icons/build/system/MoreHorizontalOutline.svg';
import { refSetter } from '#src/components/common/utils/refSetter';
import { forwardRef, useEffect, useRef } from 'react';

const activeFilter = css`
  & *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  }
`;

const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  border: 0;
  outline: none;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  padding: 0;
  margin: 2px 0;
`;

export const ButtonContent = styled.span<{ $isFilterActive?: boolean; $iconSize: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;

  & svg {
    flex-shrink: 0;
    width: ${({ $iconSize }) => $iconSize};
    height: ${({ $iconSize }) => $iconSize};
  }

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  &:hover {
    *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
    }
  }

  ${({ $isFilterActive }) => $isFilterActive && activeFilter}
`;

type Dimension = 'xl' | 'l' | 'm' | 's';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  dimension?: Dimension;
  renderFilterIcon?: () => React.ReactNode;
  isFilterActive?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ dimension, renderFilterIcon, isFilterActive, ...props }, ref) => {
    const iconSize = dimension === 's' || dimension === 'm' ? '16px' : '20px';
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      const button = btnRef.current;
      function handleMove(e: any) {
        // block column drag when mouse moves above filter icon
        e.stopPropagation();
      }

      if (button) {
        // use native event listeners instead of react handlers due to event delegation work in react 16
        button.addEventListener('mousemove', handleMove);
        button.addEventListener('touchmove', handleMove);

        return () => {
          button.removeEventListener('mousemove', handleMove);
          button.removeEventListener('touchmove', handleMove);
        };
      }
    }, []);

    return (
      <ButtonComponent ref={refSetter(ref, btnRef)} type="button" {...props}>
        <ButtonContent $isFilterActive={isFilterActive} $iconSize={iconSize}>
          {renderFilterIcon ? renderFilterIcon() : <MoreHorizontalOutline aria-hidden />}
        </ButtonContent>
      </ButtonComponent>
    );
  },
);
