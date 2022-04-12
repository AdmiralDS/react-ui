import * as React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { keyboardKey } from '#/components/common/keyboardKey';
import { useClickOutside } from '#/components/common/hooks/useClickOutside';
import { getKeyboardFocusableElements } from '#/components/common/utils/getKeyboardFocusableElements';
import { throttle } from '#/components/common/utils/throttle';

import { CloseButton, HintDialog, HintWrapper } from './styled';
import type { ActionsType } from './reducer';

type PropsType = {
  visibilityTrigger: 'click' | 'hover';
  isMobile: boolean;
  dimension: 's' | 'm' | 'l';
  content: React.ReactNode;
  portal: Element;
  dispatch: React.Dispatch<ActionsType>;
  scrollableParents: Array<Element>;
  anchorElementRef: any;
  anchorId: string;
};

type RefType = HTMLDivElement | null;

export const HintContainer = React.forwardRef<RefType, PropsType & React.HTMLAttributes<HTMLDivElement>>(
  (
    {
      dimension,
      isMobile,
      content,
      visibilityTrigger,
      portal,
      scrollableParents,
      anchorElementRef,
      anchorId,
      dispatch,
      ...props
    },
    ref,
  ) => {
    const hideHint = () => dispatch({ type: 'setInvisible' });
    const hideOnScrollResize = visibilityTrigger === 'hover';

    const hintRef: any = React.useRef(null);
    const previousFocusedElement: any = React.useRef(null);
    const [firstFocusableChild, setFirstFocusableChild] = React.useState<any>();
    const [lastFocusableChild, setLastFocusableChild] = React.useState<any>();

    if (visibilityTrigger === 'click') {
      useClickOutside([hintRef, anchorElementRef], hideHint);
    }

    React.useEffect(() => {
      previousFocusedElement.current = document.activeElement;
    }, []);

    React.useLayoutEffect(() => {
      if (hintRef.current && visibilityTrigger === 'click') {
        const focusableEls = getKeyboardFocusableElements(hintRef.current);
        setFirstFocusableChild(focusableEls[0]);
        setLastFocusableChild(focusableEls[focusableEls.length - 1]);
        firstFocusableChild?.focus();
      }
    }, [hintRef.current, visibilityTrigger, content]);

    React.useImperativeHandle(ref, () => hintRef.current);

    React.useLayoutEffect(() => {
      const [listener, freeResources] = hideOnScrollResize
        ? [hideHint, () => undefined]
        : throttle(() => {
            dispatch({ type: 'triggerRecalculation' });
          }, 150);
      window.addEventListener('resize', listener);
      window.addEventListener('scroll', listener);

      /**  если у anchorElement есть родительский элемент, который имеет собственный скролл,
       * необходимо повесить на этого родителя обработчик скролла */
      scrollableParents.forEach((el) => el.addEventListener('scroll', listener));

      return () => {
        window.removeEventListener('resize', listener);
        window.removeEventListener('scroll', listener);
        scrollableParents.forEach((el) => el.removeEventListener('scroll', listener));
        freeResources();
      };
    });

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      event.stopPropagation();
      const code = keyboardKey.getCode(event);
      if (code === keyboardKey.Escape) {
        event.preventDefault();
        previousFocusedElement.current.focus();
        hideHint();
      } else if (code === keyboardKey.Tab && visibilityTrigger === 'click') {
        // focus trap
        if (code === keyboardKey.Shift) {
          /* shift + tab */
          if (document.activeElement === firstFocusableChild) {
            lastFocusableChild.focus();
            event.preventDefault();
          }
        } /* tab */ else {
          if (document.activeElement === lastFocusableChild) {
            firstFocusableChild.focus();
            event.preventDefault();
          }
        }
      }
    };

    return ReactDOM.createPortal(
      <HintWrapper {...props} role="tooltip" ref={hintRef} onKeyDown={handleKeyDown}>
        <HintDialog role="dialog" aria-labelledby={anchorId} dimension={dimension} isMobile={isMobile}>
          {content}
          {visibilityTrigger === 'click' && (
            <CloseButton
              aria-label="Закрыть подсказку"
              onClick={(event?: React.MouseEvent<HTMLButtonElement>) => {
                event?.stopPropagation();
                previousFocusedElement.current.focus();
                hideHint();
              }}
            >
              <CloseOutline width={20} height={20} aria-hidden />
            </CloseButton>
          )}
        </HintDialog>
      </HintWrapper>,
      portal,
    );
  },
);
