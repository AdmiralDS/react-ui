import * as React from 'react';
import styled from 'styled-components';
import { DropdownContext, useDropdown, useDropdownsClickOutside } from '#src/components/DropdownProvider';
import { PositionInPortal } from '#src/components/PositionInPortal';
import { useClickOutside } from '#src/components/common/hooks/useClickOutside';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { throttle } from '#src/components/common/utils/throttle';
import type { RenderDirection, SubMenuPosition } from './utils';
import { getPosition } from './utils';

export const AnchorWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;
export const Portal = styled(PositionInPortal)<{ $flexDirection?: any }>`
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
  target?: React.MutableRefObject<Element | null | undefined>;
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
  target,
  children,
  onClickOutside,
  defaultRenderDirection = 'right',
  ...props
}: SubMenuProps) => {
  const { rootRef } = React.useContext(DropdownContext);
  const anchorElementRef = React.useRef<HTMLDivElement | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const targetElement: any = target?.current || anchorElementRef.current;

  const [recalculation, startRecalculation] = React.useState<any>(null);
  const [portalFlexDirection, setPortalFlexDirection] = React.useState('row');

  React.useLayoutEffect(() => {
    const [listener, freeResources] = throttle(() => {
      startRecalculation({});
    }, 100);

    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
      freeResources();
    };
  });

  const { addDropdown, removeDropdown, dropdowns } = useDropdown(wrapperRef);

  React.useLayoutEffect(() => {
    addDropdown?.(wrapperRef);
    return () => {
      removeDropdown?.(wrapperRef);
    };
  }, []);

  const handleClickOutside = (e: Event) => {
    if (!targetElement.contains(e.target) && useDropdownsClickOutside(e, dropdowns)) onClickOutside?.(e);
  };
  useClickOutside([wrapperRef], handleClickOutside);

  React.useLayoutEffect(() => {
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
  }, [target, recalculation]);

  return (
    <AnchorWrapper ref={anchorElementRef}>
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
  );
};

SubMenuContainer.displayName = 'SubMenu';
