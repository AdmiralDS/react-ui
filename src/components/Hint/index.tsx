import * as React from 'react';
import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import type { RefCallback, RefObject } from '#/components/common/utils/handleRef';
import { handleRef } from '#/components/common/utils/handleRef';
import { getScrollableParents } from '#/components/common/utils/getScrollableParents';
import { uid } from '#/components/common/uid';
import { keyboardKey } from '#/components/common/keyboardKey';

import type { Dimension } from './styled';
import { AnchorWrapper } from './styled';
import type { CalculationResult } from './utils';
import { calculateDirection } from './utils';
import { HintContainer } from './HintContainer';
import { initialState, reducer } from './reducer';

type Trigger = 'click' | 'hover';

export interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContent: () => React.ReactNode;
  /** Контейнер, в котором будет отрисован тултип через React.createPortal. По умолчанию тултип отрисовывается в document.body */
  container?: Element | null;
  /** Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит */
  target?: React.MutableRefObject<Element | null | undefined>;
  /** Триггер появления компонента (событие, которое вызывает появление хинта) */
  visibilityTrigger?: Trigger;
  /** Отображение компонента для мобильной версии (менее 640px), хинт адаптируется под ширину экрана */
  isMobile?: boolean;
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
}

export const Hint: React.FC<HintProps> = ({
  renderContent,
  container,
  target,
  visibilityTrigger = 'hover',
  isMobile = false,
  dimension = 'l',
  hintRef,
  children,
  anchorClassName,
  anchorId: anchorIdProp,
  anchorCssMixin,
  ...props
}) => {
  const targetRef = target;
  const anchorElementRef = React.useRef<HTMLDivElement | null>(null);
  const hintElementRef = React.useRef<HTMLDivElement | null>(null);
  const portal: Element = container || document.body;
  const content = renderContent();
  const anchorId = anchorIdProp || uid();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const hideHint = () => dispatch({ type: 'setInvisible' });

  React.useLayoutEffect(() => {
    const anchorElement = targetRef?.current || anchorElementRef.current;

    if (state.visible && anchorElement && hintElementRef.current) {
      const anchorElementRect = anchorElement.getBoundingClientRect();
      const hintElementRect = hintElementRef.current.getBoundingClientRect();

      if (isMobile) {
        // рассчитываем ширину хинта
        const hintWidth =
          anchorElementRect.right > window.innerWidth - anchorElementRect.left
            ? anchorElementRect.right
            : window.innerWidth - anchorElementRect.left;
        hintElementRef.current.style.maxWidth = `${hintWidth}px`;
        dispatch({ type: 'setHintWidth', payload: hintWidth });
      }

      const directionCalculationResult: CalculationResult = calculateDirection(
        anchorElement as HTMLElement,
        hintElementRef.current,
      );
      const calculatedStyles = directionCalculationResult.getStyles(anchorElementRect, hintElementRect);
      hintElementRef.current.style.transform = calculatedStyles;
    }
  }, [
    targetRef?.current,
    anchorElementRef.current,
    hintElementRef.current,
    state.visible,
    state.recalculation,
    state.hintWidth,
    dimension,
    content,
    isMobile,
  ]);

  const attachRef = (node: HTMLDivElement) => handleRef(node, hintRef, hintElementRef);
  const scrollableParents = React.useMemo(
    () => getScrollableParents(anchorElementRef.current) ?? [],
    [anchorElementRef.current],
  );
  const handleMouseEnter = () => {
    dispatch({ type: 'setVisible' });
  };

  const handleKeyDown = (event: any) => {
    const code = keyboardKey.getCode(event);
    if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
      event.preventDefault();
      dispatch({ type: 'setVisible' });
    }
  };

  return (
    <AnchorWrapper
      onMouseEnter={visibilityTrigger === 'click' ? undefined : handleMouseEnter}
      onMouseLeave={visibilityTrigger === 'click' ? undefined : hideHint}
      onFocus={visibilityTrigger === 'click' ? undefined : handleMouseEnter}
      onBlur={visibilityTrigger === 'click' ? undefined : hideHint}
      onClick={visibilityTrigger === 'click' ? handleMouseEnter : undefined}
      onKeyDown={visibilityTrigger === 'click' ? handleKeyDown : undefined}
      ref={anchorElementRef}
      className={anchorClassName}
      id={anchorId}
      anchorCssMixin={anchorCssMixin}
    >
      {children}
      {state.visible && (
        <HintContainer
          ref={attachRef}
          dimension={dimension}
          isMobile={isMobile}
          content={content}
          visibilityTrigger={visibilityTrigger}
          portal={portal}
          scrollableParents={scrollableParents}
          dispatch={dispatch}
          anchorElementRef={anchorElementRef}
          anchorId={anchorId}
          {...props}
        />
      )}
    </AnchorWrapper>
  );
};
