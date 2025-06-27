import styled from 'styled-components';
import { DropdownContext, useDropdown, useDropdownsClickOutside } from '#src/components/DropdownProvider';
import { PositionInPortal } from '#src/components/PositionInPortal';
import { useClickOutside } from '#src/components/common/hooks/useClickOutside';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { throttle } from '#src/components/common/utils/throttle';
import type { RenderDirection, SubMenuPosition } from './utils';
import { getPosition } from './utils';
import { useContext, useLayoutEffect, useRef, useState } from 'react';

export const AnchorWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;
export const Portal = styled(PositionInPortal)<{ $flexDirection?: string }>`
  display: flex;
  flex-wrap: nowrap;
  ${({ $flexDirection }) => ($flexDirection ? `flex-direction: ${$flexDirection};` : 'flex-direction: column;')}
`;

export const FakeTarget = styled.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`;

const SubMenuWrapper = styled.div`
  position: relative;
  align-self: flex-start;
`;

const InnerContainer = styled.div`
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  box-sizing: border-box;
`;

export interface SubMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Пункт меню, относительно которого будет позиционироваться */
  targetElement: HTMLElement | null;
  /**
   *  Обработчик события при клике вне компонента
   */
  onClickOutside?: (e: Event) => void;
  /**
   * Сторона от родительского меню, в которой будет появляться дочернее меню при наличии места
   * */
  defaultRenderDirection?: RenderDirection;
}

export const SubMenuContainer = ({
  targetElement,
  children,
  onClickOutside,
  defaultRenderDirection = 'right',
  ...props
}: SubMenuProps) => {
  const { rootRef } = useContext(DropdownContext);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [recalculation, startRecalculation] = useState<any>(null);
  const [portalFlexDirection, setPortalFlexDirection] = useState('row');

  useLayoutEffect(() => {
    const [listener, freeResources] = throttle(() => {
      startRecalculation({});
    }, 100);

    addEventListener('resize', listener);
    addEventListener('scroll', listener);

    return () => {
      removeEventListener('resize', listener);
      removeEventListener('scroll', listener);
      freeResources();
    };
  });

  const { addDropdown, removeDropdown, dropdowns } = useDropdown(wrapperRef);

  useLayoutEffect(() => {
    addDropdown?.(wrapperRef);
    return () => {
      removeDropdown?.(wrapperRef);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    if (targetElement && !targetElement.contains(e.target as Node) && useDropdownsClickOutside(e, dropdowns))
      onClickOutside?.(e);
  };
  useClickOutside([wrapperRef], handleClickOutside);

  useLayoutEffect(() => {
    const wrapperElement = wrapperRef.current;

    if (targetElement && wrapperElement) {
      const { position, bottomOffset = 0 }: SubMenuPosition = getPosition(
        targetElement,
        wrapperElement,
        defaultRenderDirection,
      );
      switch (position) {
        case 'right':
          setPortalFlexDirection('row');
          wrapperElement.style.bottom = `${bottomOffset}px`;
          break;
        case 'left':
          setPortalFlexDirection('row-reverse');
          wrapperElement.style.bottom = `${bottomOffset}px`;
          break;
        case 'rightBottom':
          setPortalFlexDirection('row');
          wrapperElement.style.bottom = '8px';
          break;
        case 'leftBottom':
          setPortalFlexDirection('row-reverse');
          wrapperElement.style.bottom = '8px';
          break;
        default:
          setPortalFlexDirection('row');
          wrapperElement.style.bottom = '8px';
      }
    }
  }, [targetElement, recalculation]);

  return (
    targetElement && (
      <AnchorWrapper>
        <Portal
          targetElement={targetElement}
          rootRef={rootRef}
          $flexDirection={portalFlexDirection}
          fullContainerWidth={false}
        >
          <FakeTarget />
          <SubMenuWrapper ref={wrapperRef} {...props}>
            <InnerContainer>{children}</InnerContainer>
          </SubMenuWrapper>
        </Portal>
      </AnchorWrapper>
    )
  );
};

SubMenuContainer.displayName = 'SubMenu';
