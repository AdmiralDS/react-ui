import React, { HTMLAttributes, KeyboardEvent, ReactNode, useRef } from 'react';
import type { Dimension } from './ButtonGroupComponent';
import { ButtonGroupComponent } from './ButtonGroupComponent';
import { moveFocus, nextItem, previousItem } from './utils';
import { keyboardKey } from '#src/components/common/keyboardKey';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Элементы содержимого */
  children?: ReactNode;
  /** Стиль отображения компонента */
  appearance?: 'primary' | 'secondary';
}

export const ButtonGroup = ({
  dimension = 'l',
  tabIndex = -1,
  appearance = 'secondary',
  ...props
}: ButtonGroupProps) => {
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
    <ButtonGroupComponent
      ref={localRef}
      onKeyDown={handleKeyDown}
      dimension={dimension}
      tabIndex={tabIndex}
      data-appearance={appearance}
      {...props}
    />
  );
};

ButtonGroup.displayName = 'ButtonGroup';
