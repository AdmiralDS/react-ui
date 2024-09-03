import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { css } from 'styled-components';
import styled from 'styled-components';

import { useClickOutside } from '#src/components/common/hooks/useClickOutside';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';
import { PositionInPortal } from '#src/components/PositionInPortal';
import { useInterval } from '#src/components/common/hooks/useInterval';
import { refSetter } from '#src/components/common/utils/refSetter';
import { DropdownContext, useDropdown, useDropdownsClickOutside } from '#src/components/DropdownProvider';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

const Container = styled.div<{
  $alignSelf?: string;
  $dropContainerCssMixin?: ReturnType<typeof css>;
}>`
  pointer-events: initial;
  margin: 8px 0;
  flex: 0 0 auto;
  ${(p) => (p.$alignSelf ? `align-self: ${p.$alignSelf};` : '')};
  max-width: calc(100vw - 32px);
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;

  &:focus-visible {
    border: 2px solid blue;
  }

  ${(p) => p.$dropContainerCssMixin}
`;

const FakeTarget = styled.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`;

const Portal = styled(PositionInPortal)<{ $reverse: boolean }>`
  display: flex;
  flex-direction: ${(p) => (p.$reverse ? 'column-reverse' : 'column')};
  flex-wrap: nowrap;
`;

export interface DropContainerStyles {
  /**
   *  Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
   *  https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: ReturnType<typeof css>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;
}
export interface DropContainerProps {
  /**
   *  Позволяет обработать событие при клике вне компонента
   */
  onClickOutside?: (e: Event) => void;
}

export interface DropdownContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    DropContainerProps,
    Omit<DropContainerStyles, 'dropContainerClassName' | 'dropContainerStyle'> {
  /** Элемент, относительно которого позиционируется выпадающее меню */
  targetElement: Element | null;
}

export const DropdownContainer = forwardRef<HTMLDivElement, PropsWithChildren<DropdownContainerProps>>(
  ({ targetElement, onClickOutside = () => null, className = '', alignSelf, dropContainerCssMixin, ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [displayUpward, setDisplayUpward] = useState(false);

    const { addDropdown, removeDropdown, dropdowns } = useDropdown(containerRef);
    const { rootRef } = useContext(DropdownContext);

    const handleClickOutside = (e: Event) => {
      if (useDropdownsClickOutside(e, dropdowns)) onClickOutside(e);
    };
    useClickOutside([containerRef], handleClickOutside);

    useLayoutEffect(() => {
      if (containerRef.current !== document.activeElement) {
        containerRef?.current?.focus();
      }
    }, []);

    const checkDropdownPosition = useCallback(() => {
      const node = containerRef.current;
      if (node && targetElement) {
        const rect = node.getBoundingClientRect();
        const targetRect = targetElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        if (viewportHeight - rect.bottom < 0 && targetRect.top > viewportHeight - targetRect.bottom) {
          console.log('upward');
          if (!displayUpward) setDisplayUpward(true);
        } else if (
          targetRect.bottom + (targetRect.top - rect.top) < viewportHeight - 8 ||
          targetRect.top < viewportHeight - targetRect.bottom
        ) {
          console.log('downward');
          if (displayUpward) setDisplayUpward(false);
        }

        // const rectHeight = rect.height + 8;
        // const spaceAboveTarget = targetRect.top;
        // const spaceUnderTarget = viewportHeight - targetRect.bottom;
        // if (spaceUnderTarget >= rectHeight) {
        //   console.log('enough space under');
        // } else if (spaceAboveTarget >= rectHeight) {
        //   console.log('enough space above');
        // } else {
        //   console.log('fixed');
        // }

        if (alignSelf && alignSelf !== 'auto') return;

        const rectWidth = rect.right - rect.left;

        // впишется ли контейнер во viewport, начиная от левого края target
        const enoughWidthOnTheRight = viewportWidth - targetRect.left >= rectWidth;
        // впишется ли контейнер во viewport, если его правой границей будет правый край target
        const enoughWidthOnTheLeft = targetRect.right - 16 >= rectWidth;

        const containerWiderTarget = rectWidth > targetRect.width;

        if (!enoughWidthOnTheLeft && !enoughWidthOnTheRight) {
          node.style.alignSelf = 'center';
          // компенсация сдвига относительно target компонента (targetRect) таким образом, чтобы
          // контейнер выпадающего меню (rect) вписывался в границы экрана (viewport)
          const offset = (viewportWidth - rect.width) / 2 - (targetRect.left - (rectWidth - targetRect.width) / 2);
          node.style.transform = `translateX(${offset}px)`;
        } else {
          node.style.transform = 'translateX(0)';
          if (enoughWidthOnTheLeft && enoughWidthOnTheRight) {
            node.style.alignSelf = 'flex-end';
          } else if (containerWiderTarget && !enoughWidthOnTheLeft && enoughWidthOnTheRight) {
            node.style.alignSelf = 'flex-start';
          } else if (containerWiderTarget && !enoughWidthOnTheRight && enoughWidthOnTheLeft) {
            node.style.alignSelf = 'flex-end';
          }
        }
      }
    }, [displayUpward, targetElement]);

    useInterval(checkDropdownPosition, 100);

    // First container render always happens downward and transparent,
    // after size and position settled transparency returns to normal
    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
      }
    }, []);

    useLayoutEffect(() => {
      addDropdown?.(containerRef);
      return () => {
        removeDropdown?.(containerRef);
      };
    }, []);

    return (
      <>
        <Portal targetElement={targetElement} $reverse={displayUpward} rootRef={rootRef}>
          <FakeTarget />
          <Container
            ref={refSetter(ref, containerRef)}
            {...props}
            className={className + ' dropdown-container'}
            $alignSelf={alignSelf}
            $dropContainerCssMixin={dropContainerCssMixin}
          />
        </Portal>
      </>
    );
  },
);

DropdownContainer.displayName = 'DropdownContainer';

export const StyledDropdownContainer = styled(DropdownContainer)`
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  width: max-content;
`;

StyledDropdownContainer.displayName = 'StyledDropdownContainer';
