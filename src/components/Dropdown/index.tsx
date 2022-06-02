import * as React from 'react';
import styled from 'styled-components';
import { useClickOutside } from '#src/components/common/hooks/useClickOutside';
import { PositionInPortal } from '#src/components/PositionInPortal';
import { useInterval } from '#src/components/common/hooks/useInterval';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { moveFocus, nextItem, previousItem } from '#src/components/Dropdown/utils';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Shape } from '#src/components/themes/common';

function dropdownBorderRadius(shape: Shape): string {
  switch (shape.borderRadiusKind) {
    case 'Border radius 0':
      return 'none';
    case 'Border radius 2':
      return '2px';
    case 'Border radius 4':
      return '4px';
    case 'Border radius 8':
      return '8px';
    default:
      return '4px';
  }
}

const Container = styled.div<{ alignSelf?: string }>`
  pointer-events: initial;
  margin: 8px 0;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => dropdownBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
  flex: 0 0 auto;
  ${(p) => (p.alignSelf ? `align-self: ${p.alignSelf};` : '')};
  max-width: calc(100vw - 32px);
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
`;

const FakeTarget = styled.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`;

const Portal = styled(PositionInPortal)<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${(p) => (p.reverse ? 'column-reverse' : 'column')};
  flex-wrap: nowrap;
`;

export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onKeyDown'> {
  targetRef: React.RefObject<HTMLElement>;

  /**
   *  Позволяет обработать событие при клике вне компонента
   */
  onClickOutside?: (e: Event) => void;

  /**
   *  Позволяет обработать событие при нажатии клавиши
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;

  /**
   *  Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
   *  https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  onMenuReachTop?: () => void;
  onMenuReachBottom?: () => void;

  menuFocus?: 'firstOption' | 'lastOption' | 'activeOption';

  setMenuFocus?: React.Dispatch<React.SetStateAction<'firstOption' | 'lastOption' | 'activeOption'>>;
}

export const Dropdown = React.forwardRef<HTMLDivElement, React.PropsWithChildren<DropdownProps>>(
  (
    {
      targetRef,
      onClickOutside = () => null,
      onKeyDown,
      className = '',
      onMenuReachBottom,
      onMenuReachTop,
      setMenuFocus,
      menuFocus,
      ...props
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const [displayUpward, setDisplayUpward] = React.useState(false);
    useClickOutside([containerRef], onClickOutside);

    const handleKeyDown = React.useCallback(
      (e) => {
        const focusedOption = ((containerRef.current && containerRef.current.ownerDocument) || document).activeElement;
        const code = keyboardKey.getCode(e);
        if (menuFocus) {
          if (code === keyboardKey.ArrowRight) {
            moveFocus(containerRef.current, focusedOption, nextItem, true, true, onMenuReachTop, onMenuReachBottom);
            e.preventDefault();
          } else if (code === keyboardKey.ArrowLeft) {
            moveFocus(containerRef.current, focusedOption, previousItem, true, true, onMenuReachTop, onMenuReachBottom);
            e.preventDefault();
          }
        } else {
          if (code === keyboardKey.ArrowDown) {
            moveFocus(containerRef.current, focusedOption, nextItem);
            e.preventDefault();
          } else if (code === keyboardKey.ArrowUp) {
            moveFocus(containerRef.current, focusedOption, previousItem);
            e.preventDefault();
          }
        }
        if (e.keyCode === 32) {
          e.preventDefault();
        } else if (code === keyboardKey.Home) {
          e.preventDefault();
          moveFocus(containerRef.current, null, nextItem);
        } else if (code === keyboardKey.End) {
          e.preventDefault();
          moveFocus(containerRef.current, null, previousItem);
        }
        onKeyDown?.(e);
      },
      [containerRef.current, menuFocus, previousItem, nextItem],
    );

    const getMenuFirstOption = () => {
      let option = containerRef.current?.firstElementChild;
      while (option?.hasAttribute('disabled')) {
        option = option.nextElementSibling;
      }
      return option;
    };

    const getMenuLastOption = () => {
      let option = containerRef.current?.lastElementChild;
      while (option?.hasAttribute('disabled')) {
        option = option.previousElementSibling;
      }
      return option;
    };

    React.useLayoutEffect(() => {
      if (containerRef.current !== document.activeElement) {
        containerRef?.current?.focus();
      }

      if (menuFocus) {
        const activeOption = containerRef.current?.querySelector('[aria-selected="true"]');
        const selectedItem =
          menuFocus === 'firstOption'
            ? getMenuFirstOption()
            : menuFocus === 'lastOption'
            ? getMenuLastOption()
            : activeOption || getMenuFirstOption();
        (selectedItem as HTMLElement)?.focus();
      } else {
        const focusedOption = ((containerRef.current && containerRef.current.ownerDocument) || document).activeElement;
        moveFocus(containerRef.current, focusedOption, nextItem);
      }
    }, [containerRef, menuFocus, nextItem, moveFocus]);

    React.useEffect(() => {
      containerRef.current?.addEventListener('keydown', handleKeyDown);
      return () => {
        containerRef.current?.removeEventListener('keydown', handleKeyDown);
      };
    }, [containerRef.current]);

    const checkDropdownPosition = () => {
      const node = containerRef.current;
      const targetNode = targetRef.current;
      if (node && targetNode) {
        const rect = node.getBoundingClientRect();
        const targetRect = targetNode.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        if (viewportHeight - rect.bottom < 0 && targetRect.top > viewportHeight - targetRect.bottom) {
          setDisplayUpward(true);
        } else if (
          targetRect.bottom + (targetRect.top - rect.top) < viewportHeight - 8 ||
          targetRect.top < viewportHeight - targetRect.bottom
        ) {
          setDisplayUpward(false);
        }

        const rectWidth = rect.right - rect.left;

        if (targetRect.right < rectWidth && viewportWidth - targetRect.left < rectWidth) {
          node.style.alignSelf = 'center';
        } else if (targetRect.right - 16 >= rectWidth && viewportWidth - targetRect.left >= rectWidth) {
          node.style.alignSelf = '';
        } else if (targetRect.right - 16 < rectWidth) {
          node.style.alignSelf = 'flex-start';
        } else if (viewportWidth - targetRect.left < rectWidth) {
          node.style.alignSelf = 'flex-end';
        }
      }
    };

    useInterval(checkDropdownPosition, 100);

    // First container render always happens downward and transparent,
    // after size and position settled transparency returns to normal
    React.useEffect(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
      }
    }, [containerRef.current]);

    return (
      <Portal targetRef={targetRef} reverse={displayUpward}>
        <FakeTarget />
        <Container ref={refSetter(ref, containerRef)} {...props} className={className + ' dropdown-container'} />
      </Portal>
    );
  },
);

Dropdown.displayName = 'Dropdown';
