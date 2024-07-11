import styled from 'styled-components';
import * as React from 'react';
import observeRect from '#src/components/common/observeRect';
import { createPortal } from 'react-dom';

export const PositionedPortalContainer = styled.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({ theme }) => theme.zIndex.dropdown});
`;

export interface PositionInPortalProps {
  // TODO: Удалить targetRef в 8.x.x версии, сделать targetElement обязательным параметром
  /**
   * @deprecated Помечено как deprecated в версии 6.1.0, будет удалено в 8.x.x версии.
   * Взамен используйте параметр targetElement.
   *
   * Ref на элемент, относительно которого позиционируется портал
   **/
  targetRef?: React.RefObject<HTMLElement>;

  /** Элемент, относительно которого позиционируется портал
   * В 8.x.x версии данный параметр станет обязательным, заменив собой targetRef
   */
  targetElement?: Element | null;

  /** Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body */
  rootRef?: React.RefObject<HTMLElement>;

  /** Отрисовка портала на всю ширину контейнера */
  fullContainerWidth?: boolean;
}

/**
 * При фиксированном позиционировании (как у PositionedPortalContainer) элемент позиционируется
 * всегда относительно исходного содержащего блока (окна браузера).
 * Исключение, когда один из его предков имеет свойство transform, perspective, или filter,
 * установленное на что-то иное, кроме none, в этом случае этот предок ведет
 * себя как содержащий блок. Тогда top, right, bottom и left элемента рассчитываются относительно этого содержащего блока.
 * Если у такого предка кроме transform задано свойство overflow: hidden, то элемент будет обрезаться по его краям.
 *
 * В связи с вышеописанным в качестве контейнера для портала рекомендуется выбирать элемент, у предков которого нет свойств
 * transform, perspective, или filter отличных от none. Также рекомендуется размещать контейнер портала в самом низу dom-дерева,
 * чтобы избежать возможных конфликтов стилей.
 */
export const PositionInPortal = ({
  targetRef,
  targetElement,
  rootRef,
  fullContainerWidth,
  ...props
}: React.PropsWithChildren<PositionInPortalProps>) => {
  const positionedPortalContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = positionedPortalContainerRef.current;
    const targetNode = targetElement ?? targetRef?.current;
    if (node && targetNode) {
      const observer = observeRect(targetNode, (rect) => {
        if (rect) {
          const { x, y, height, width } = rect;
          const { style } = node;
          style.top = `${y}px`;
          style.left = fullContainerWidth ? '0px' : `${x}px`;
          style.height = `${height}px`;
          style.width = fullContainerWidth ? '100%' : `${width}px`;
        }
      });
      observer.observe();
      return () => {
        observer.unobserve();
      };
    }
  }, [targetRef, targetElement, fullContainerWidth]);

  return createPortal(
    <PositionedPortalContainer ref={positionedPortalContainerRef} {...props} />,
    rootRef?.current || document.body,
  );
};
