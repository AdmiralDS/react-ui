import { forwardRef, useEffect, useMemo } from 'react';
import { IconButton } from '../IconButton';
import { useMediaQuery } from '../common/hooks/useMediaQuery';
import { BottomPanelContent, SideMenuItem, StyledDrawer, StyledScrollContainer, TopPanelContent } from './style';

export type SideMenuAppearance = 'primary' | 'secondary';
export type SideMenuDimension = 'm' | 'l';

export interface SideMenuProps {
  /** Состояние компонента: открыт/закрыт */
  isOpen: boolean;
  /** Состояние видимости border-right */
  visibleBorder?: boolean;
  /** Внешний вид компонента */
  appearance?: SideMenuAppearance;
  //todo добавить описание потом
  /**  */
  children?: React.ReactNode;
  /** Параметр максимального размера окна при достижении которого будет вызвана функция onToggle */
  closeMediaQuery?: string;
  /** Функция которая будет выполняться при достижении closeMediaQuery */
  onToggle?: () => void;
  /** Наличие затемненного фона, блокирующего контент страницы */
  backdrop?: boolean;
  /** Размер компонента */
  dimension?: SideMenuDimension;
  //todo добавить описание потом
  /**  */
  bottomPanelContent?: string[];
  //todo добавить описание потом
  /**  */
  topPanelContent?: string[];
  /** Рассотояние между пунктами контента */
  gap?: number;
}

export const SideMenu = forwardRef<HTMLDivElement, SideMenuProps>(
  (
    {
      visibleBorder = false,
      onToggle,
      isOpen,
      appearance = 'primary',
      backdrop = false,
      children,
      dimension = 'm',
      closeMediaQuery,
      bottomPanelContent,
      topPanelContent,
      gap = 4,
      ...props
    },
    ref,
  ) => {
    const isTopPanelContent = !!topPanelContent;
    const isBottomPanelContent = !!bottomPanelContent;

    const maxWidth = closeMediaQuery ? useMediaQuery(`(max-width: ${closeMediaQuery})`) : null;

    useEffect(() => {
      if (!maxWidth || !isOpen || !closeMediaQuery || !onToggle) return;

      onToggle();
    }, [maxWidth]);

    return (
      <StyledDrawer
        ref={ref}
        $visibleBorder={visibleBorder}
        position="left"
        isOpen={isOpen}
        backdrop={backdrop}
        displayCloseIcon={false}
        $appearance={appearance}
        {...props}
      >
        {isTopPanelContent && (
          <TopPanelContent $gap={gap} $dimension={dimension}>
            {topPanelContent.map((item, id) => (
              <SideMenuItem key={id} $dimension={dimension}>
                {item}
              </SideMenuItem>
            ))}
          </TopPanelContent>
        )}
        <StyledScrollContainer
          $isTopPanelContent={isTopPanelContent}
          $isBottomPanelContent={isBottomPanelContent}
          $dimension={dimension}
          $gap={gap}
        >
          {children &&
            (children as string[]).map((item, id) => (
              <SideMenuItem key={id} $dimension={dimension}>
                {item}
              </SideMenuItem>
            ))}
        </StyledScrollContainer>
        {isBottomPanelContent && (
          <BottomPanelContent $gap={gap} $dimension={dimension}>
            {bottomPanelContent.map((item, id) => (
              <SideMenuItem key={id} $dimension={dimension}>
                {item}
              </SideMenuItem>
            ))}
          </BottomPanelContent>
        )}
      </StyledDrawer>
    );
  },
);
