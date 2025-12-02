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
  anchorElementRef: React.RefObject<HTMLDivElement>;
  anchorId: string;
  hideHint: () => void;
  startRecalculation: React.Dispatch<React.SetStateAction<Record<string, never> | null>>;
  locale?: {
    closeButtonAriaLabel?: string;
  };
  preventFocusSteal?: boolean;
  visible?: boolean;
  onHintInteraction?: () => void;
}

export type RefType = HTMLDivElement | null;

export const HintContainer = React.forwardRef<HTMLDivElement, HintContainerPropsType>(
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
      visible,
      onHintInteraction,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme() || LIGHT_THEME;
    const closeBtnAriaLabel =
      locale?.closeButtonAriaLabel || theme.locales[theme.currentLocale].hint.closeButtonAriaLabel;
    const hideOnScrollResize = visibilityTrigger === 'hover';

    const hintRef = React.useRef<HTMLDivElement>(null);
    const previousFocusedElement = React.useRef<Element | null>(null);
    const [firstFocusableChild, setFirstFocusableChild] = React.useState<Element | undefined>(undefined);
    const [lastFocusableChild, setLastFocusableChild] = React.useState<Element | undefined>(undefined);

    const { addDropdown, removeDropdown, dropdowns } = useDropdown(hintRef as React.RefObject<HTMLElement>);

    // Игнорируем первый клик вне после открытия
    const justOpened = React.useRef(false);
    React.useEffect(() => {
      if (visible) {
        justOpened.current = true;
        // нужна задержка для отработки анимации
        setTimeout(() => {
          justOpened.current = false;
        }, 0);
      }
    }, [visible]);

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (justOpened.current) {
        justOpened.current = false;
        return;
      }
      // Проверяем, есть ли выделение текста внутри Hint
      const selection = window.getSelection?.();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        if (hintRef.current && hintRef.current.contains(range.commonAncestorContainer)) {
          return;
        }
      }

      if (useDropdownsClickOutside(e, dropdowns)) hideHint();
    };
    if (visibilityTrigger === 'click') {
      useClickOutside(
        [hintRef as React.RefObject<HTMLElement>, anchorElementRef as React.RefObject<HTMLElement>],
        handleClickOutside,
      );
    }

    React.useLayoutEffect(() => {
      addDropdown?.(hintRef as React.RefObject<HTMLElement>);
      previousFocusedElement.current = document.activeElement;
      return () => {
        removeDropdown?.(hintRef as React.RefObject<HTMLElement>);
      };
    }, []);

    // trap focus
    React.useLayoutEffect(() => {
      if (!preventFocusSteal && hintRef.current && visibilityTrigger === 'click') {
        const focusableEls = getKeyboardFocusableElements(hintRef.current);
        setFirstFocusableChild(focusableEls[0]);
        setLastFocusableChild(focusableEls[focusableEls.length - 1]);
        (focusableEls[0] as HTMLElement)?.focus();
      }
    }, [visibilityTrigger, content, preventFocusSteal]);

    React.useImperativeHandle(ref, () => hintRef.current as unknown as HTMLDivElement);

    React.useLayoutEffect(() => {
      const [listener, freeResources] = hideOnScrollResize
        ? [hideHint, () => undefined]
        : throttle(() => {
            startRecalculation({});
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
        if (previousFocusedElement.current && 'focus' in previousFocusedElement.current) {
          (previousFocusedElement.current as HTMLElement).focus();
        }
        hideHint();
      } else if (code === keyboardKey.Tab && visibilityTrigger === 'click') {
        // focus trap
        if (code === keyboardKey.Shift) {
          /* shift + tab */
          if (document.activeElement === firstFocusableChild && lastFocusableChild) {
            (lastFocusableChild as HTMLElement).focus();
            event.preventDefault();
          }
        } /* tab */ else {
          if (document.activeElement === lastFocusableChild && firstFocusableChild) {
            (firstFocusableChild as HTMLElement).focus();
            event.preventDefault();
          }
        }
      }
    };

    // В режиме hover: предотвращаем закрытие Hint при наведении/взаимодействии с ним
    const handleHintMouseEnter =
      visibilityTrigger === 'hover'
        ? () => {
            onHintInteraction?.();
          }
        : undefined;
    const handleHintMouseLeave =
      visibilityTrigger === 'hover'
        ? (e: React.MouseEvent) => {
            const relatedTarget = e.relatedTarget as Node;
            // Если мышь всё ещё над Hint — ничего не делаем
            if (hintRef.current && relatedTarget && hintRef.current.contains(relatedTarget)) return;
            // Если мышь ушла на anchor — не закрываем
            if (anchorElementRef?.current && relatedTarget && anchorElementRef.current.contains(relatedTarget)) return;
            // Иначе курсор ушёл с области Hint и anchor — закрываем
            hideHint();
          }
        : undefined;

    // В режиме hover: предотвращаем закрытие Hint при клике внутри него
    const handleHintClick =
      visibilityTrigger === 'hover'
        ? (e: React.MouseEvent) => {
            e.stopPropagation();
            onHintInteraction?.();
          }
        : undefined;

    const handleHintMouseDown =
      visibilityTrigger === 'hover'
        ? (e: React.MouseEvent) => {
            e.stopPropagation();
            onHintInteraction?.();
          }
        : undefined;

    return (
      <HintWrapper
        role="tooltip"
        ref={hintRef}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleHintMouseEnter}
        onMouseLeave={handleHintMouseLeave}
        onClick={handleHintClick}
        onMouseDown={handleHintMouseDown}
      >
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
                if (previousFocusedElement.current && 'focus' in previousFocusedElement.current) {
                  (previousFocusedElement.current as HTMLElement).focus();
                }
                hideHint();
              }}
            />
          )}
        </HintDialog>
      </HintWrapper>
    );
  },
);
