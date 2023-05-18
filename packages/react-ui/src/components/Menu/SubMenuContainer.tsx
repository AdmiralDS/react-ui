import * as React from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import type { RefCallback, RefObject } from '#src/components/common/utils/handleRef';
import { handleRef } from '#src/components/common/utils/handleRef';
import { getScrollableParents } from '#src/components/common/utils/getScrollableParents';
import { uid } from '#src/components/common/uid';
import { keyboardKey } from '#src/components/common/keyboardKey';

// import { FakeTarget, Portal } from './style';
// import { getHintDirection } from './utils';
// import type { HintPositionType, InternalHintPositionType } from './utils';
import { HintContainer } from './HintContainer';
import { DropdownContext, useDropdown } from '#src/components/DropdownProvider';
import styled from 'styled-components';
import { PositionInPortal } from '#src/components/PositionInPortal';

export const AnchorWrapper = styled.div<{ anchorCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  display: inline-block;
  position: relative;
  cursor: pointer;
  ${(p) => (p.anchorCssMixin ? p.anchorCssMixin : '')}
`;
export const Portal = styled(PositionInPortal)<{ flexDirection?: any }>`
  display: flex;
  flex-wrap: nowrap;
  ${({ flexDirection }) => (flexDirection ? `flex-direction: ${flexDirection};` : 'flex-direction: column;')}
`;

export const FakeTarget = styled.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`;

export interface SubMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Видимость компонента */
  visible: boolean;
  /** Колбек на изменение видимости хинта
   *
   * Если visibilityTrigger = 'hover', при ховере/фокусе на target элементе колбек вызовется со значением visible=true,
   * при потере ховера/фокуса на target элементе колбек вызовется со значением visible=false.
   *
   * Если visibilityTrigger = 'click', при клике на target элемент или нажатии клавиш Space/Enter на
   * target элементе колбек вызовется со значением visible=true,
   * при клике на крестик внутри хинта/клике вне хинта и target элемента/нажатии клавиши Escape
   * колбек вызовется со значением visible=false.
   */
  onVisibilityChange?: (visible: boolean) => void;
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContent?: () => React.ReactNode;
  /** Расположение хинта */
  // hintPosition?: HintPositionType;
  /**
   * @deprecated Используйте rootRef пропсу на DropdownProvider
   * Контейнер, в котором будет отрисован тултип через React.createPortal.
   * По умолчанию тултип отрисовывается в document.body
   * */
  container?: never;
  /** Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит */
  target?: React.MutableRefObject<Element | null | undefined>;
  /** Ссылка на тултип */
  hintRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null;
  /** ClassName для внешнего контейнера (AnchorWrapper) */
  anchorClassName?: string;
  /** Id для внешнего контейнера (AnchorWrapper) */
  anchorId?: string;
  /** Позволяет добавлять миксин созданный с помощью styled css для внешнего контейнера (AnchorWrapper) */
  anchorCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Атрибут aria-label, описывающий назначение кнопки с крестиком, закрывающей хинт */
    closeButtonAriaLabel?: string;
  };
}

export const SubMenuContainer = ({
  visible,
  onVisibilityChange,
  renderContent,
  // hintPosition,
  target,
  // visibilityTrigger = 'hover',
  hintRef,
  children,
  anchorClassName,
  anchorId: anchorIdProp,
  anchorCssMixin,
  locale,
  ...props
}: SubMenuProps) => {
  const { rootRef } = React.useContext(DropdownContext);
  const anchorElementRef = React.useRef<HTMLDivElement | null>(null);
  const hintElementRef = React.useRef<HTMLDivElement | null>(null);
  const content = renderContent?.();
  const anchorId = anchorIdProp || uid();

  const targetRef: any = target || anchorElementRef;
  const targetElement: any = target?.current || anchorElementRef.current;

  const [recalculation, startRecalculation] = React.useState<any>(null);
  const [portalFlexDirection, setPortalFlexDirection] = React.useState('row');
  const [portalFullWidth, setPortalFullWidth] = React.useState(false);

  const showHint = () => onVisibilityChange?.(true);
  const hideHint = () => onVisibilityChange?.(false);

  React.useLayoutEffect(() => {
    const hint = hintElementRef.current;

    if (visible && targetElement && hint) {
      const anchorElementRect = targetElement.getBoundingClientRect();
      const hintElementRect = hint.getBoundingClientRect();
      // const direction: InternalHintPositionType = getHintDirection(targetElement, hint, hintPosition);
      const direction = 'right';
      switch (direction) {
        case 'topPageCenter':
          setPortalFlexDirection('column-reverse');
          setPortalFullWidth(true);
          hint.style.alignSelf = 'center';
          hint.style.margin = '0';
          break;
        case 'bottomPageCenter':
          setPortalFlexDirection('column');
          setPortalFullWidth(true);
          hint.style.alignSelf = 'center';
          hint.style.margin = '0';
          break;
        case 'right':
          setPortalFlexDirection('row');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'flex-start';
          hint.style.margin = '0';
          break;
        case 'left':
          setPortalFlexDirection('row-reverse');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'center';
          hint.style.margin = '0';
          break;
        case 'top':
          setPortalFlexDirection('column-reverse');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'center';
          hint.style.margin = '0';
          break;
        case 'bottom':
          setPortalFlexDirection('column');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'center';
          hint.style.margin = '0';
          break;
        case 'rightTop':
          setPortalFlexDirection('row');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'flex-end';
          hint.style.margin = '0 0 -8px 0';
          break;
        case 'rightBottom':
          setPortalFlexDirection('row');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'flex-start';
          hint.style.margin = '-8px 0 0 0';
          break;
        case 'leftTop':
          setPortalFlexDirection('row-reverse');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'flex-end';
          hint.style.margin = '0 0 -8px 0';
          break;
        case 'leftBottom':
          setPortalFlexDirection('row-reverse');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'flex-start';
          hint.style.margin = '-8px 0 0 0';
          break;
        case 'topLeft':
          setPortalFlexDirection('column-reverse');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'flex-end';
          hint.style.margin = '0 -8px 0 0';
          break;
        case 'topRight':
          setPortalFlexDirection('column-reverse');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'flex-start';
          hint.style.margin = '0 0 0 -8px';
          break;
        case 'bottomLeft':
          setPortalFlexDirection('column');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'flex-end';
          hint.style.margin = '0 -8px 0 0';
          break;
        case 'bottomRight':
        default:
          setPortalFlexDirection('column');
          setPortalFullWidth(false);
          hint.style.alignSelf = 'flex-start';
          hint.style.margin = '0 0 0 -8px';
      }
    }
  }, [target, visible, recalculation, content]);

  const attachRef = (node: HTMLDivElement) => handleRef(node, hintRef, hintElementRef);
  const scrollableParents = React.useMemo(
    () => getScrollableParents(anchorElementRef.current) ?? [],
    [anchorElementRef.current],
  );

  const handleKeyDown = (event: any) => {
    const code = keyboardKey.getCode(event);
    if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
      event.preventDefault();
      showHint();
    }
  };

  // First hint render always happens downward and transparent,
  // after size and position settled transparency returns to normal
  React.useEffect(() => {
    if (visible && hintElementRef.current) {
      hintElementRef.current.style.opacity = '1';
    }
  }, [visible]);

  return (
    <AnchorWrapper ref={anchorElementRef} className={anchorClassName} id={anchorId} anchorCssMixin={anchorCssMixin}>
      <Portal
        targetRef={targetRef}
        rootRef={rootRef}
        flexDirection={portalFlexDirection}
        fullContainerWidth={portalFullWidth}
      >
        <FakeTarget />
        <HintContainer
          dimension={'l'}
          ref={attachRef}
          scrollableParents={scrollableParents}
          startRecalculation={startRecalculation}
          anchorElementRef={anchorElementRef}
          anchorId={anchorId}
          hideHint={hideHint}
          {...props}
        >
          {children}
        </HintContainer>
      </Portal>
    </AnchorWrapper>
  );
};

SubMenuContainer.displayName = 'SubMenu';
