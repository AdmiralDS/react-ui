import * as React from 'react';
import { keyboardKey } from '../common/keyboardKey';
import { useClickOutside } from '#src/components/common/hooks/useClickOutside';
import { getKeyboardFocusableElements } from '#src/components/common/utils/getKeyboardFocusableElements';
import { throttle } from '#src/components/common/utils/throttle';
import { useDropdown, useDropdownsClickOutside } from '#src/components/DropdownProvider';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import { CloseButton, HintContent, HintDialog, HintWrapper } from './style';

export interface HintContainerPropsType extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  visibilityTrigger: 'click' | 'hover';
  isMobile: boolean;
  dimension: 's' | 'm' | 'l';
  content: React.ReactNode;
  scrollableParents: Array<Element>;
  anchorElementRef: React.RefObject<HTMLElement | null>;
  anchorId: string;
  hideHint: () => void;
  startRecalculation: React.Dispatch<React.SetStateAction<number>>;
  locale?: {
    closeButtonAriaLabel?: string;
  };
  preventFocusSteal?: boolean;
}

export type RefType = HTMLDivElement | null;

export const HintContainer = React.forwardRef<RefType, HintContainerPropsType>(
  (
    {
      dimension,
      isMobile,
      content,
      visibilityTrigger,
      scrollableParents,
      anchorElementRef,
      anchorId,
      hideHint,
      startRecalculation,
      locale,
      preventFocusSteal,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme() || LIGHT_THEME;
    const closeBtnAriaLabel =
      locale?.closeButtonAriaLabel || theme.locales[theme.currentLocale].hint.closeButtonAriaLabel;
    const hideOnScrollResize = visibilityTrigger === 'hover';

    const hintRef = React.useRef<HTMLDivElement | null>(null);
    const previousFocusedElement = React.useRef<HTMLElement | null>(null);
    const [firstFocusableChild, setFirstFocusableChild] = React.useState<Element | null>(null);
    const [lastFocusableChild, setLastFocusableChild] = React.useState<Element | null>(null);

    const { addDropdown, removeDropdown, dropdowns } = useDropdown(hintRef);
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (useDropdownsClickOutside(e, dropdowns)) hideHint();
    };
    if (visibilityTrigger === 'click') {
      useClickOutside([hintRef, anchorElementRef], handleClickOutside);
    }

    React.useLayoutEffect(() => {
      addDropdown?.(hintRef);
      previousFocusedElement.current = document.activeElement;
      return () => {
        removeDropdown?.(hintRef);
      };
    }, []);

    // trap focus
    React.useLayoutEffect(() => {
      if (!preventFocusSteal && hintRef.current && visibilityTrigger === 'click') {
        const focusableEls = getKeyboardFocusableElements(hintRef.current);
        setFirstFocusableChild(focusableEls[0] ?? null);
        setLastFocusableChild(focusableEls[focusableEls.length - 1] ?? null);
        focusableEls[0]?.focus();
      }
    }, [visibilityTrigger, content, preventFocusSteal]);

    React.useImperativeHandle(ref, () => hintRef.current);

    React.useLayoutEffect(() => {
      const [listener, freeResources] = hideOnScrollResize
        ? [hideHint, () => undefined]
        : throttle(() => {
            startRecalculation((value) => value + 1);
          }, 150);
      addEventListener('resize', listener);
      addEventListener('scroll', listener);

      /**  если у anchorElement есть родительский элемент, который имеет собственный скролл,
       * необходимо повесить на этого родителя обработчик скролла */
      scrollableParents.forEach((el) => el.addEventListener('scroll', listener));

      return () => {
        removeEventListener('resize', listener);
        removeEventListener('scroll', listener);
        scrollableParents.forEach((el) => el.removeEventListener('scroll', listener));
        freeResources();
      };
    });

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      event.stopPropagation();
      const code = keyboardKey.getCode(event);
      if (code === keyboardKey.Escape) {
        event.preventDefault();
        previousFocusedElement.current?.focus();
        hideHint();
      } else if (code === keyboardKey.Tab && visibilityTrigger === 'click') {
        // focus trap
        if (code === keyboardKey.Shift) {
          /* shift + tab */
          if (firstFocusableChild && lastFocusableChild && document.activeElement === firstFocusableChild) {
            lastFocusableChild.focus();
            event.preventDefault();
          }
        } /* tab */ else {
          if (firstFocusableChild && lastFocusableChild && document.activeElement === lastFocusableChild) {
            firstFocusableChild.focus();
            event.preventDefault();
          }
        }
      }
    };
    return (
      <HintWrapper role="tooltip" ref={hintRef} onKeyDown={handleKeyDown}>
        <HintDialog
          {...props}
          role="dialog"
          aria-labelledby={anchorId}
          $dimension={dimension}
          $isMobile={isMobile}
          data-trigger={visibilityTrigger}
        >
          <HintContent>{content}</HintContent>
          {visibilityTrigger === 'click' && (
            <CloseButton
              dimension="mSmall"
              highlightFocus={false}
              aria-label={closeBtnAriaLabel}
              onClick={(event?: React.MouseEvent<HTMLButtonElement>) => {
                event?.stopPropagation();
                previousFocusedElement.current?.focus();
                hideHint();
              }}
            />
          )}
        </HintDialog>
      </HintWrapper>
    );
  },
);
