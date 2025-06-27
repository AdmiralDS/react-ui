import styled from 'styled-components';
import observeRect from '#src/components/common/observeRect';
import { createPortal } from 'react-dom';
import type { PropsWithChildren, ReactPortal } from 'react';
import { useEffect, useRef } from 'react';

export const PositionedPortalContainer = styled.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({ theme }) => theme.zIndex.dropdown});
`;

export interface PositionInPortalProps extends React.ComponentProps<'div'> {
  /** Элемент, относительно которого позиционируется портал */
  targetElement: Element | null;

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
  targetElement,
  rootRef,
  fullContainerWidth,
  ...props
}: PropsWithChildren<PositionInPortalProps>): ReactPortal => {
  const positionedPortalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = positionedPortalContainerRef.current;
    const targetNode = targetElement;
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
  }, [targetElement, fullContainerWidth]);

  return createPortal(
    <PositionedPortalContainer ref={positionedPortalContainerRef} {...props} />,
    rootRef?.current || document.body,
  );
};
