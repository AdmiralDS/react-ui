import { forwardRef, useEffect } from 'react';
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
  onClose?: () => void;
  /** Наличие затемненного фона, блокирующего контент страницы */
  backdrop?: boolean;
  /** Размер компонента */
  dimension?: SideMenuDimension;
  /** Позволяет добавить панель внизу */
  renderBottomPanel?: () => React.ReactNode;
  /** Позволяет добавить панель вверху */
  renderTopPanel?: () => React.ReactNode;
  /** Рассотояние между пунктами контента */
  gap?: number;
}

export const SideMenu = forwardRef<HTMLDivElement, SideMenuProps>(
  (
    {
      visibleBorder = false,
      onClose,
      isOpen,
      appearance = 'primary',
      backdrop = false,
      children,
      dimension = 'm',
      closeMediaQuery,
      renderBottomPanel,
      renderTopPanel,
      gap = 4,
      ...props
    },
    ref,
  ) => {
    const isRenderTopPanel = !!renderTopPanel;
    const isRenderBottomPanel = !!renderBottomPanel;

    const maxWidth = closeMediaQuery ? useMediaQuery(`(max-width: ${closeMediaQuery})`) : null;

    useEffect(() => {
      if (maxWidth && isOpen && closeMediaQuery && onClose) {
        onClose();
      }
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
        {isRenderTopPanel && <TopPanelContent $dimension={dimension}>{renderTopPanel()}</TopPanelContent>}
        <StyledScrollContainer
          $isTopPanelContent={isRenderTopPanel}
          $isBottomPanelContent={isRenderBottomPanel}
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
        {isRenderBottomPanel && <BottomPanelContent $dimension={dimension}>{renderBottomPanel()}</BottomPanelContent>}
      </StyledDrawer>
    );
  },
);
