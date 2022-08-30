import * as React from 'react';
import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import type { RefCallback, RefObject } from '#src/components/common/utils/handleRef';
import { handleRef } from '#src/components/common/utils/handleRef';
import { getScrollableParents } from '#src/components/common/utils/getScrollableParents';
import { uid } from '#src/components/common/uid';
import { keyboardKey } from '#src/components/common/keyboardKey';

import type { Dimension } from './style';
import { AnchorWrapper, FakeTarget, Portal } from './style';
import { getHintDirection } from './utils';
import { HintContainer } from './HintContainer';

type Trigger = 'click' | 'hover';

export interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
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
  renderContent: () => React.ReactNode;
  /** Контейнер, в котором будет отрисован тултип через React.createPortal. По умолчанию тултип отрисовывается в document.body */
  container?: Element | null;
  /** Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит */
  target?: React.MutableRefObject<Element | null | undefined>;
  /** Триггер появления компонента (событие, которое вызывает появление хинта) */
  visibilityTrigger?: Trigger;
  /** Размер компонента */
  dimension?: Dimension;
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

export const Hint: React.FC<HintProps> = ({
  visible,
  onVisibilityChange,
  renderContent,
  container: userContainer,
  target,
  visibilityTrigger = 'hover',
  dimension = 'l',
  hintRef,
  children,
  anchorClassName,
  anchorId: anchorIdProp,
  anchorCssMixin,
  locale,
  ...props
}) => {
  const anchorElementRef = React.useRef<HTMLDivElement | null>(null);
  const hintElementRef = React.useRef<HTMLDivElement | null>(null);
  const container: Element = userContainer || document.body;
  const content = renderContent();
  const anchorId = anchorIdProp || uid();

  const targetRef: any = target || anchorElementRef;
  const targetElement: any = target?.current || anchorElementRef.current;

  const [recalculation, startRecalculation] = React.useState<any>(null);
  const [portalFlexDirection, setPortalFlexDirection] = React.useState('');
  const [portalFullWidth, setPortalFullWidth] = React.useState(false);
  const [isMobile, setMobile] = React.useState(window.innerWidth < 640);
  const [trapFocus, setTrapFocus] = React.useState(false);

  const showHint = () => onVisibilityChange?.(true);
  const hideHint = () => onVisibilityChange?.(false);

  // если ширина экрана меньше 640 пикселей, хинт переходит в состояние mobile (адаптируется по ширине к экрану)
  React.useLayoutEffect(() => {
    const listener = () => {
      if (window.innerWidth < 640) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  });

  React.useLayoutEffect(() => {
    const hint = hintElementRef.current;

    if (visible && targetElement && hint) {
      const anchorElementRect = targetElement.getBoundingClientRect();
      const hintElementRect = hint.getBoundingClientRect();
      if (isMobile) {
        if (window.innerHeight - anchorElementRect.bottom > hintElementRect.height) {
          setPortalFlexDirection('column');
        } else {
          setPortalFlexDirection('column-reverse');
        }
        setPortalFullWidth(true);
        hint.style.alignSelf = 'center';
        hint.style.margin = '0';
      } else {
        const direction = getHintDirection(targetElement, hint);
        switch (direction) {
          case 'top-pageCenter':
            setPortalFlexDirection('column-reverse');
            setPortalFullWidth(true);
            hint.style.alignSelf = 'center';
            hint.style.margin = '0';
            break;
          case 'bottom-pageCenter':
            setPortalFlexDirection('column');
            setPortalFullWidth(true);
            hint.style.alignSelf = 'center';
            hint.style.margin = '0';
            break;
          case 'top-right':
            setPortalFlexDirection('column-reverse');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-start';
            hint.style.margin = '0 0 0 -8px';
            break;
          case 'bottom-right':
            setPortalFlexDirection('column');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-start';
            hint.style.margin = '0 0 0 -8px';
            break;
          case 'top-left':
            setPortalFlexDirection('column-reverse');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-end';
            hint.style.margin = '0 -8px 0 0';
            break;
          case 'bottom-left':
          default:
            setPortalFlexDirection('column');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-end';
            hint.style.margin = '0 -8px 0 0';
        }
      }
    }
  }, [
    target?.current,
    anchorElementRef.current,
    hintElementRef.current,
    visible,
    recalculation,
    dimension,
    content,
    isMobile,
  ]);

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

  // First container render always happens downward and transparent,
  // after size and position settled transparency returns to normal
  React.useEffect(() => {
    if (hintElementRef.current) {
      hintElementRef.current.style.opacity = '1';
      setTrapFocus(true);
    }
  }, [hintElementRef.current, visible]);

  return (
    <AnchorWrapper
      onMouseEnter={visibilityTrigger === 'click' ? undefined : showHint}
      onMouseLeave={visibilityTrigger === 'click' ? undefined : hideHint}
      onFocus={visibilityTrigger === 'click' ? undefined : showHint}
      onBlur={visibilityTrigger === 'click' ? undefined : hideHint}
      onClick={visibilityTrigger === 'click' ? showHint : undefined}
      onKeyDown={visibilityTrigger === 'click' ? handleKeyDown : undefined}
      ref={anchorElementRef}
      className={anchorClassName}
      id={anchorId}
      anchorCssMixin={anchorCssMixin}
    >
      {children}
      {visible && (
        <Portal
          targetRef={targetRef}
          container={container}
          flexDirection={portalFlexDirection}
          fullContainerWidth={portalFullWidth}
        >
          <FakeTarget />
          <HintContainer
            ref={attachRef}
            dimension={dimension}
            isMobile={isMobile}
            content={content}
            visibilityTrigger={visibilityTrigger}
            scrollableParents={scrollableParents}
            startRecalculation={startRecalculation}
            anchorElementRef={anchorElementRef}
            anchorId={anchorId}
            trapFocus={trapFocus}
            hideHint={hideHint}
            locale={locale}
            {...props}
          />
        </Portal>
      )}
    </AnchorWrapper>
  );
};

Hint.displayName = 'Hint';
