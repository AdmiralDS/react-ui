import * as React from 'react';
import type { CSSProperties } from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';
import { useClickOutside } from '#src/components/common/hooks/useClickOutside';
import { PositionInPortal } from '#src/components/PositionInPortal';
import { useInterval } from '#src/components/common/hooks/useInterval';
import { refSetter } from '#src/components/common/utils/refSetter';
import { DropdownContext, useDropdown, useDropdownsClickOutside } from '#src/components/DropdownProvider';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

const Container = styled.div<{
  $alignSelf?: string;
  $dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
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
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;
}

export interface DropdownContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  // TODO: Удалить targetRef в 8.x.x версии, сделать targetElement обязательным параметром
  /**
   * @deprecated Будет удалено в 8.x.x версии.
   * Взамен используйте параметр targetElement.
   *
   * Ref на элемент, относительно которого позиционируется выпадающее меню
   **/
  targetRef?: React.RefObject<HTMLElement>;
  /** Элемент, относительно которого позиционируется выпадающее меню
   * В 8.x.x версии данный параметр станет обязательным, заменив собой targetRef
   */
  targetElement?: Element | null;

  /**
   *  Позволяет обработать событие при клике вне компонента
   */
  onClickOutside?: (e: Event) => void;

  /**
   *  Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
   *  https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const DropdownContainer = React.forwardRef<HTMLDivElement, React.PropsWithChildren<DropdownContainerProps>>(
  (
    {
      targetRef,
      targetElement,
      onClickOutside = () => null,
      className = '',
      alignSelf,
      dropContainerCssMixin,
      ...props
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const [displayUpward, setDisplayUpward] = React.useState(false);

    const targetNode = targetElement ?? targetRef?.current;

    const { addDropdown, removeDropdown, dropdowns } = useDropdown(containerRef);
    const { rootRef } = React.useContext(DropdownContext);

    const handleClickOutside = (e: Event) => {
      if (useDropdownsClickOutside(e, dropdowns)) onClickOutside(e);
    };
    useClickOutside([containerRef], handleClickOutside);

    React.useLayoutEffect(() => {
      if (containerRef.current !== document.activeElement) {
        containerRef?.current?.focus();
      }
    }, []);

    const checkDropdownPosition = React.useCallback(() => {
      const node = containerRef.current;
      if (node && targetNode) {
        const rect = node.getBoundingClientRect();
        const targetRect = targetNode.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        if (viewportHeight - rect.bottom < 0 && targetRect.top > viewportHeight - targetRect.bottom) {
          if (!displayUpward) setDisplayUpward(true);
        } else if (
          targetRect.bottom + (targetRect.top - rect.top) < viewportHeight - 8 ||
          targetRect.top < viewportHeight - targetRect.bottom
        ) {
          if (displayUpward) setDisplayUpward(false);
        }

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
    }, [displayUpward, targetRef, targetElement]);

    useInterval(checkDropdownPosition, 100);

    // First container render always happens downward and transparent,
    // after size and position settled transparency returns to normal
    React.useEffect(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
      }
    }, []);

    React.useLayoutEffect(() => {
      addDropdown?.(containerRef);
      return () => {
        removeDropdown?.(containerRef);
      };
    }, []);

    return (
      <>
        <Portal targetElement={targetNode} $reverse={displayUpward} rootRef={rootRef}>
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
  ${(p) => p.theme.shadow['Shadow 08']}
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  overflow: hidden;
  width: max-content;
`;

StyledDropdownContainer.displayName = 'StyledDropdownContainer';
