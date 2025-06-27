import type { HTMLAttributes, KeyboardEvent, ReactNode } from 'react';
import { useRef } from 'react';
import type { Adaptive, Dimension } from '#src/components/ContentSwitcher/ContentSwitcherComponent';
import { ContentSwitcherComponent } from '#src/components/ContentSwitcher/ContentSwitcherComponent';
import { moveFocus, nextItem, previousItem } from '#src/components/ContentSwitcher/utils';
import { keyboardKey } from '../common/keyboardKey';

export interface ContentSwitcherProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Элементы содержимого */
  children?: ReactNode;
  /** Стиль отображения компонента */
  appearance?: 'primary' | 'secondary';
  adaptive?: Adaptive;
}

export const ContentSwitcher = ({
  dimension = 'l',
  tabIndex = -1,
  appearance = 'secondary',
  adaptive,
  ...props
}: ContentSwitcherProps) => {
  const localRef = useRef<HTMLDivElement>(null);

  const getFocusedOption = () => {
    return ((localRef.current && localRef.current.ownerDocument) || document).activeElement;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const focusedOption = getFocusedOption();
    const code = keyboardKey.getCode(e);
    if (code === keyboardKey.ArrowRight) {
      moveFocus(localRef.current, focusedOption, nextItem);
    } else if (code === keyboardKey.ArrowLeft) {
      moveFocus(localRef.current, focusedOption, previousItem);
    }
    props?.onKeyDown?.(e);
  };

  return (
    <ContentSwitcherComponent
      ref={localRef}
      onKeyDown={handleKeyDown}
      $dimension={dimension}
      tabIndex={tabIndex}
      data-appearance={appearance}
      $adaptive={adaptive}
      {...props}
    />
  );
};

ContentSwitcher.displayName = 'ContentSwitcher';
