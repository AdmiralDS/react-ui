import * as React from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { useClickOutside } from '#src/components/common/hooks/useClickOutside';
import { getKeyboardFocusableElements } from '#src/components/common/utils/getKeyboardFocusableElements';
import { throttle } from '#src/components/common/utils/throttle';
import { useDropdown, useDropdownsClickOutside } from '#src/components/DropdownProvider';
import styled, { css, ThemeContext } from 'styled-components';
import { LIGHT_THEME, mediumGroupBorderRadius } from '#src/components/themes';

// import { HintContent, HintDialog, HintWrapper } from './style';
import { typography } from '#src/components/Typography';

export type Dimension = 's' | 'm' | 'l';

const HINT_WIDTH_S = '280px';
const HINT_WIDTH_M = '384px';
const HINT_WIDTH_L = '488px';

const sizes = css<{ dimension: Dimension }>`
  width: ${({ dimension }) => {
    if (dimension === 's') return HINT_WIDTH_S;
    if (dimension === 'm') return HINT_WIDTH_M;
    return HINT_WIDTH_L;
  }};
`;

export const HintWrapper = styled.div`
  position: relative;
  top: -8px;
`;

export const HintDialog = styled.div<{
  dimension: Dimension;
}>`
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  ${({ theme }) => theme.shadow['Shadow 08']}
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  box-sizing: border-box;
`;

export const HintContent = styled.div``;

export interface HintContainerPropsType extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  dimension: 's' | 'm' | 'l';
  scrollableParents: Array<Element>;
  anchorElementRef: any;
  anchorId: string;
  hideHint: () => void;
  startRecalculation: React.Dispatch<React.SetStateAction<any>>;
}

export type RefType = HTMLDivElement | null;

export const HintContainer = React.forwardRef<RefType, HintContainerPropsType>(
  (
    { dimension, scrollableParents, anchorElementRef, anchorId, hideHint, startRecalculation, children, ...props },
    ref,
  ) => {
    const theme = React.useContext(ThemeContext) || LIGHT_THEME;

    const hintRef: any = React.useRef(null);
    const previousFocusedElement: any = React.useRef(null);
    const [firstFocusableChild, setFirstFocusableChild] = React.useState<any>();
    const [lastFocusableChild, setLastFocusableChild] = React.useState<any>();

    const { addDropdown, removeDropdown, dropdowns } = useDropdown(hintRef);
    const handleClickOutside = (e: any) => {
      if (useDropdownsClickOutside(e, dropdowns)) hideHint();
    };

    useClickOutside([hintRef, anchorElementRef], handleClickOutside);

    React.useLayoutEffect(() => {
      addDropdown?.(hintRef);
      previousFocusedElement.current = document.activeElement;
      return () => {
        removeDropdown?.(hintRef);
      };
    }, []);

    // trap focus
    // React.useLayoutEffect(() => {
    //   if (hintRef.current && visibilityTrigger === 'click') {
    //     const focusableEls = getKeyboardFocusableElements(hintRef.current);
    //     setFirstFocusableChild(focusableEls[0]);
    //     setLastFocusableChild(focusableEls[focusableEls.length - 1]);
    //     (focusableEls[0] as any)?.focus();
    //   }
    // }, [visibilityTrigger, content]);

    React.useImperativeHandle(ref, () => hintRef.current);

    // React.useLayoutEffect(() => {
    //   const [listener, freeResources] = hideOnScrollResize
    //     ? [hideHint, () => undefined]
    //     : throttle(() => {
    //         startRecalculation({});
    //       }, 150);
    //   window.addEventListener('resize', listener);
    //   window.addEventListener('scroll', listener);
    //
    //   /**  если у anchorElement есть родительский элемент, который имеет собственный скролл,
    //    * необходимо повесить на этого родителя обработчик скролла */
    //   scrollableParents.forEach((el) => el.addEventListener('scroll', listener));
    //
    //   return () => {
    //     window.removeEventListener('resize', listener);
    //     window.removeEventListener('scroll', listener);
    //     scrollableParents.forEach((el) => el.removeEventListener('scroll', listener));
    //     freeResources();
    //   };
    // });

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      event.stopPropagation();
      const code = keyboardKey.getCode(event);
      if (code === keyboardKey.Escape) {
        event.preventDefault();
        previousFocusedElement.current.focus();
        hideHint();
      }
      // else if (code === keyboardKey.Tab && visibilityTrigger === 'click') {
      //   // focus trap
      //   if (code === keyboardKey.Shift) {
      //     /* shift + tab */
      //     if (document.activeElement === firstFocusableChild) {
      //       lastFocusableChild.focus();
      //       event.preventDefault();
      //     }
      //   } /* tab */ else {
      //     if (document.activeElement === lastFocusableChild) {
      //       firstFocusableChild.focus();
      //       event.preventDefault();
      //     }
      //   }
      // }
    };
    return (
      <HintWrapper {...props} ref={hintRef} onKeyDown={handleKeyDown}>
        <HintDialog dimension={dimension}>
          <HintContent>{children}</HintContent>
        </HintDialog>
      </HintWrapper>
    );
  },
);
