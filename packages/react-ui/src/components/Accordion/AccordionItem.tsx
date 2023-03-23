import React from 'react';
import { uid } from '#src/components/common/uid';

import { Collapse } from './Collapse';
import { ItemWrapper, ItemTitle, ItemTitleContent, ItemContent, TitleContent, Chevron } from './style';

export interface AccordionItemProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick' | 'title'> {
  /** Заголовок компонента */
  title: React.ReactNode;
  /** дефолтное (изначальное) состояние компонента (раскрыт/свернут) при неконтролируемом режиме работы */
  defaultExpanded?: boolean;
  /** состояние компонента (раскрыт/свернут) при контролируемом режиме работы */
  expanded?: boolean;
  /** Колбек на клик по компоненту */
  onClick?: (title: React.ReactNode, expanded: boolean, event: React.MouseEvent<HTMLButtonElement>) => void;
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
  disabled,
  ...props
}) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const collapseOpened = userExpanded === undefined ? expanded : userExpanded;

  const itemId = React.useMemo(() => id || uid(), [id]);
  const ITEM_TITLE_ID = `accordion_title_${itemId}`;
  const ITEM_CONTENT_ID = `accordion_content_${itemId}`;

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (userExpanded === undefined) {
        onClick?.(title, !expanded, event);
        setExpanded(!expanded);
      } else {
        onClick?.(title, !userExpanded, event);
      }
    },
    [expanded, userExpanded, onClick, title],
  );
  return (
    <ItemWrapper opened={collapseOpened} data-disabled={disabled} disabled={disabled}>
      <ItemTitle
        onClick={handleClick}
        role="button"
        type="button"
        aria-expanded={collapseOpened}
        aria-controls={ITEM_CONTENT_ID}
        id={ITEM_TITLE_ID}
        {...props}
      >
        <ItemTitleContent tabIndex={-1}>
          <TitleContent>{title}</TitleContent>
          <Chevron aria-hidden />
        </ItemTitleContent>
      </ItemTitle>
      <Collapse opened={collapseOpened} contentMaxHeight={contentMaxHeight}>
        <ItemContent
          contentMaxHeight={contentMaxHeight}
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
