import * as React from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';

import { moveFocus, nextItem, previousItem } from './utils';
import { AccordionWrapper } from './style';

type Dimension = 'l' | 'm';

export * from './AccordionItem';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Расположение иконки шеврона в заголовке. По умолчанию иконка выравнивается по правому краю. */
  iconPosition?: 'right' | 'left';
  /** Скрыть верхний разделитель аккордиона (верхнюю серую полоску).
   * Параметр hideTopDivider скрывает верхнюю серую полоску только у первого AccordionItem, заданного внутри Accordion
   */
  hideTopDivider?: boolean;
  /** Скрыть нижний разделитель аккордиона (нижнюю серую полоску)
   * Параметр hideBottomDivider скрывает нижнюю серую полоску только у последнего AccordionItem, заданного внутри Accordion
   */
  hideBottomDivider?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  dimension = 'l',
  iconPosition = 'right',
  hideTopDivider = false,
  hideBottomDivider = false,
  onKeyDown,
  ...props
}) => {
  const accordionRef = React.useRef<HTMLDivElement | null>(null);
  const handleKeyDown = React.useCallback(
    (e) => {
      let focusedOption: any = ((accordionRef.current && accordionRef.current.ownerDocument) || document).activeElement;
      // если фокус находится на AccordionItem Title, то можно переключаться между accordion items с помощью ArrowDown, ArrowUp, Home, End
      if (focusedOption.id.indexOf('accordion_title') > -1 && focusedOption.tagName.toLowerCase() === 'button') {
        do {
          focusedOption = focusedOption?.parentNode;
        } while (focusedOption.parentNode !== accordionRef.current);

        const code = keyboardKey.getCode(e);

        if (code === keyboardKey.ArrowDown) {
          moveFocus(accordionRef.current, focusedOption, nextItem);
          e.preventDefault();
        } else if (code === keyboardKey.ArrowUp) {
          moveFocus(accordionRef.current, focusedOption, previousItem);
          e.preventDefault();
        } else if (code === keyboardKey.Home) {
          e.preventDefault();
          moveFocus(accordionRef.current, null, nextItem);
        } else if (code === keyboardKey.End) {
          e.preventDefault();
          moveFocus(accordionRef.current, null, previousItem);
        }
      }
      onKeyDown?.(e);
    },
    [accordionRef.current],
  );
  return (
    <AccordionWrapper
      ref={accordionRef}
      data-dimension={dimension}
      data-icon={iconPosition}
      hideTopDivider={hideTopDivider}
      hideBottomDivider={hideBottomDivider}
      dimension={dimension}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </AccordionWrapper>
  );
};

Accordion.displayName = 'Accordion';
