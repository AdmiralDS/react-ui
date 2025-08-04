import type { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { css } from 'styled-components';
import styled from 'styled-components';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';
import { PositionInPortal } from '#src/components/PositionInPortal';
import { useInterval } from '#src/components/common/hooks/useInterval';
import { refSetter } from '#src/components/common/utils/refSetter';
import { DropdownContext } from '#src/components/DropdownProvider';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { setVerticalPosition, setHorizontalPosition } from './utils';

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
   * Отключает автоматическую установку фокуса на компонент при его монтировании.
   * Если `true`, компонент не будет автоматически фокусироваться при монтировании.
   * @default false
   */
  disableAutoFocus?: boolean;
  /**
   *  Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer
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
const doNothing = () => null;
export const DropdownContainer = forwardRef<HTMLDivElement, PropsWithChildren<DropdownContainerProps>>(
  (
    {
      targetElement,
      onClickOutside = doNothing,
      className = '',
      alignSelf,
      dropContainerCssMixin,
      disableAutoFocus,
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [displayUpward, setDisplayUpward] = useState(false);

    const { rootRef } = useContext(DropdownContext);

    useLayoutEffect(() => {
      if (containerRef.current !== document.activeElement && !disableAutoFocus) {
        containerRef?.current?.focus();
      }
    }, []);

    const checkDropdownPosition = useCallback(() => {
      const node = containerRef.current;
      if (node && targetElement) {
        const rect = node.getBoundingClientRect();
        const targetRect = targetElement.getBoundingClientRect();
        const viewportHeight = globalThis.innerHeight;
        const viewportWidth = globalThis.innerWidth;

        const { upward, translateY } = setVerticalPosition(rect, targetRect, viewportHeight);
        if (displayUpward !== upward) setDisplayUpward(upward);

        if (alignSelf && alignSelf !== 'auto') {
          node.style.transform = `translateY(${translateY})`;
        } else {
          const { align, translateX } = setHorizontalPosition(rect, targetRect, viewportWidth);
          node.style.transform = `translate(${translateX}, ${translateY})`;
          node.style.alignSelf = align;
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

    const [shouldTriggerClickOutside, setShouldTriggerClickOutside] = useState(false);

    useEffect(() => {
      function listener() {
        setShouldTriggerClickOutside(true);
      }

      document.addEventListener('mousedown', listener, true);
      document.addEventListener('touchstart', listener, true);

      return () => {
        document.removeEventListener('mousedown', listener, true);
        document.removeEventListener('touchstart', listener, true);
      };
    }, []);

    useEffect(() => {
      function listener(e: MouseEvent | TouchEvent) {
        onClickOutside(e);
      }
      if (shouldTriggerClickOutside) {
        document.addEventListener('mouseup', listener);
        document.addEventListener('touchend', listener);

        return () => {
          document.removeEventListener('mouseup', listener);
          document.removeEventListener('touchend', listener);
        };
      }
    }, [shouldTriggerClickOutside]);
    const onMouseDownHandler = () => setShouldTriggerClickOutside(false);

    return (
      <>
        <Portal
          targetElement={targetElement}
          $reverse={displayUpward}
          rootRef={rootRef}
          onMouseDown={onMouseDownHandler}
        >
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
  background: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
`;

StyledDropdownContainer.displayName = 'StyledDropdownContainer';
