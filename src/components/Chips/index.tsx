import { forwardRef, useState, useMemo, useRef, useEffect, useLayoutEffect } from 'react';

import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

import {
  ChipChildrenWrapperStyled,
  ChipComponentStyled,
  ChipContentWrapperStyled,
  CloseIconButton,
  IconEndWrapperStyled,
  IconStartWrapperStyled,
  IconWrapperStyled,
  StyledBadge,
} from './style';
import type { BadgeAppearance } from '#src/components/Badge';
import { keyboardKey } from '../common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';

export type ChipDimension = 's' | 'm';
export type ChipAppearance = 'filled' | 'outlined';

export interface ChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ChipDimension;
  /** Отключение чипса */
  disabled?: boolean;
  /** Вид чипсов */
  appearance?: ChipAppearance;
  /** Выбранная чипса */
  selected?: boolean;
  /** Добавляет иконку для удаления чипсов */
  onClose?: (id?: HTMLElement['id']) => void;
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContentTooltip?: () => React.ReactNode;
  /** Иконка перед текстом Chips'a */
  iconStart?: React.ReactNode;
  /** Иконка после текста Chips'a.
   * Отображается, если не прокинут метод onClose, иначе отображется иконка закрытия (крест) */
  iconEnd?: React.ReactNode;
  /**
   * @deprecated Помечено как deprecated в версии 7.9.0, будет удалено в 9.x.x версии.
   * Взамен используйте iconStart или iconEnd
   *
   * Иконка перед текстом Chips'a
   */
  iconBefore?: React.ReactNode;
  /**
   * @deprecated Помечено как deprecated в версии 7.9.0, будет удалено в 9.x.x версии.
   * Взамен используйте iconStart или iconEnd
   *
   * Иконка после текста Chips'a.
   * Отображается, если не прокинут метод onClose, иначе отображется иконка закрытия (крест)
   */
  iconAfter?: React.ReactNode;
  /** Число, которое будет отображено в компоненте Badge справа от content */
  badge?: number;

  /** Только для чтения */
  readOnly?: boolean;

  /**
   * Отключение Tooltip.
   * При true:
   * - не навешиваются hover/focus-слушатели для показа/скрытия Tooltip,
   * - не выполняются проверки переполнения (overflow) контента для тултипа.
   * При false:
   * - если передан renderContentTooltip, будет показан кастомный контент тултипа,
   * - иначе при примитивных children (string | number) будет показано их значение,
   */
  disabledTooltip?: boolean;
}

export const Chips = forwardRef<HTMLDivElement, ChipsProps>(
  (
    {
      dimension = 'm',
      disabled,
      appearance = 'outlined',
      selected,
      onClose,
      children,
      renderContentTooltip,
      iconBefore,
      iconAfter,
      iconStart,
      iconEnd,
      badge,
      readOnly,
      disabledTooltip,
      ...props
    },
    ref,
  ) => {
    const defaultChip = selected !== undefined;
    const [overflow, setOverflow] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const withCloseIcon = !!onClose;
    const withBadge = !!badge;
    const childrenIsPrimitive = typeof children === 'string' || typeof children === 'number';

    const badgeAppearance: BadgeAppearance = useMemo(() => {
      if (selected && !disabled) return 'whiteBlue';
      if (disabled) {
        if (selected || appearance === 'filled') return 'whiteDisable';
        return 'lightDisable';
      }
      if (appearance === 'filled') return 'white';
      return 'info';
    }, [appearance, selected, disabled]);

    const chipRef = useRef<HTMLDivElement | null>(null);
    const refItems = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (disabledTooltip) return;

      if (refItems.current && checkOverflow(refItems.current) !== overflow) {
        setOverflow(checkOverflow(refItems.current));
      }
    }, [tooltipVisible, overflow, setOverflow, disabledTooltip]);

    useLayoutEffect(() => {
      if (disabledTooltip) return;

      function show() {
        setTooltipVisible(true);
      }
      function hide() {
        setTooltipVisible(false);
      }
      const chip = chipRef.current;
      if (chip) {
        chip.addEventListener('mouseenter', show);
        chip.addEventListener('mouseleave', hide);
        chip.addEventListener('focus', show);
        chip.addEventListener('blur', hide);
        return () => {
          chip.removeEventListener('mouseenter', show);
          chip.removeEventListener('mouseleave', hide);
          chip.removeEventListener('focus', show);
          chip.removeEventListener('blur', hide);
        };
      }
    }, [setTooltipVisible, disabledTooltip]);

    const handleClickCloseIcon = (e: React.MouseEvent) => {
      e.preventDefault();
      onClose?.(props.id);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!disabled) {
        const code = keyboardKey.getCode(e);
        if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
          if (withCloseIcon) {
            onClose?.();
          } else {
            props.onClick?.(e as any);
          }
        }
        props.onKeyDown?.(e);
      }
    };

    const hasTooltipContent = renderContentTooltip || (childrenIsPrimitive && children);

    const shouldRenderTooltip = !disabledTooltip && tooltipVisible && overflow && hasTooltipContent;

    const tooltipRenderContent = renderContentTooltip || (() => children);

    return (
      <>
        <ChipComponentStyled
          {...props}
          ref={refSetter(ref, chipRef)}
          $dimension={dimension}
          $disabled={disabled}
          $appearance={appearance}
          $selected={selected}
          $defaultChip={defaultChip}
          $withCloseIcon={withCloseIcon}
          $readOnly={readOnly}
          $withTooltip={overflow}
          $withBadge={withBadge}
          onKeyDown={handleKeyDown}
          tabIndex={props.tabIndex ?? (disabled ? -1 : 0)}
          $clickable={!!props.onClick}
        >
          <ChipContentWrapperStyled
            $dimension={dimension}
            $disabled={disabled}
            $appearance={appearance}
            $selected={selected}
            $withCloseIcon={readOnly || withCloseIcon}
          >
            {(iconStart || iconBefore) && (
              <IconStartWrapperStyled>
                <IconWrapperStyled $dimension={dimension} $withCloseIcon={!readOnly && withCloseIcon}>
                  {iconStart ? iconStart : iconBefore}
                </IconWrapperStyled>
              </IconStartWrapperStyled>
            )}
            <ChipChildrenWrapperStyled ref={refItems}>{children}</ChipChildrenWrapperStyled>
            {typeof badge !== 'undefined' && (
              <StyledBadge data-badge dimension={dimension} appearance={badgeAppearance}>
                {badge}
              </StyledBadge>
            )}
            {!withCloseIcon && (iconEnd || iconAfter) && (
              <IconEndWrapperStyled $dimension={dimension}>
                <IconWrapperStyled $dimension={dimension} $withCloseIcon={!readOnly && withCloseIcon}>
                  {iconEnd ? iconEnd : iconAfter}
                </IconWrapperStyled>
              </IconEndWrapperStyled>
            )}
            {!readOnly && withCloseIcon && (
              <CloseIconButton
                dimension={dimension === 'm' ? 'mBig' : 's'}
                highlightFocus={false}
                onMouseDown={handleClickCloseIcon}
                disabled={disabled}
                tabIndex={-1}
                appearance={appearance === 'outlined' ? 'primary' : 'secondary'}
              />
            )}
          </ChipContentWrapperStyled>
        </ChipComponentStyled>
        {shouldRenderTooltip && <Tooltip targetElement={chipRef.current} renderContent={tooltipRenderContent} />}
      </>
    );
  },
);

Chips.displayName = 'Chips';
