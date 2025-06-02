import { useState, useMemo, useCallback, useRef } from 'react';
import { uid } from '#src/components/common/uid';
import { keyboardKey } from '#src/components/common/keyboardKey';

import { Collapse } from './Collapse';
import { ItemWrapper, ItemTitle, ItemTitleContent, ItemContent, TitleContent, Chevron } from './style';

export interface AccordionItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'title'> {
  /** Заголовок компонента */
  title: React.ReactNode;
  /** дефолтное (изначальное) состояние компонента (раскрыт/свернут) при неконтролируемом режиме работы */
  defaultExpanded?: boolean;
  /** состояние компонента (раскрыт/свернут) при контролируемом режиме работы */
  expanded?: boolean;
  /** Колбек на клик по компоненту */
  onClick?: (title: React.ReactNode, expanded: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
  /**  Устанавливает максимальную высоту, на которую открывается контент до появления вертикального скрола */
  contentMaxHeight?: number | string;
  /** Отключение компонента */
  disabled?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  title,
  id,
  defaultExpanded,
  expanded: userExpanded,
  onClick,
  contentMaxHeight = '100vh',
  disabled = false,
  ...props
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const collapseOpened = userExpanded === undefined ? expanded : userExpanded;
  const titleRef = useRef<HTMLDivElement>(null);

  const itemId = useMemo(() => id || uid(), [id]);
  const ITEM_TITLE_ID = `accordion_title_${itemId}`;
  const ITEM_CONTENT_ID = `accordion_content_${itemId}`;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (userExpanded === undefined) {
        onClick?.(title, !expanded, event);
        setExpanded(!expanded);
      } else {
        onClick?.(title, !userExpanded, event);
      }
    },
    [expanded, userExpanded, onClick, title],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const code = keyboardKey.getCode(e);
    if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
      titleRef.current?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
    props.onKeyDown?.(e);
  };
  return (
    <ItemWrapper $opened={collapseOpened} data-disabled={disabled}>
      <ItemTitle
        ref={titleRef}
        onClick={disabled ? undefined : handleClick}
        onKeyDown={disabled ? undefined : handleKeyDown}
        role="button"
        aria-expanded={collapseOpened}
        aria-controls={ITEM_CONTENT_ID}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        id={ITEM_TITLE_ID}
        {...props}
      >
        <ItemTitleContent>
          <TitleContent>{title}</TitleContent>
          <Chevron aria-hidden />
        </ItemTitleContent>
      </ItemTitle>
      <Collapse $opened={collapseOpened} $contentMaxHeight={contentMaxHeight}>
        <ItemContent
          $contentMaxHeight={contentMaxHeight}
          role="region"
          aria-labelledby={ITEM_TITLE_ID}
          id={ITEM_CONTENT_ID}
        >
          {children}
        </ItemContent>
      </Collapse>
    </ItemWrapper>
  );
};
