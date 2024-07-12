import type { HTMLAttributes, MouseEvent, KeyboardEvent, ReactNode } from 'react';
import * as React from 'react';

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

const defaultRenderContent = () => '';

export interface ChipsProps extends HTMLAttributes<HTMLDivElement> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ChipDimension;
  /** Отключение чипса */
  disabled?: boolean;
  /** Вид чипсов */
  appearance?: ChipAppearance;
  /** Выбранная чипса */
  selected?: boolean;
  /** Добавляет иконку для удаления чипсов */
  onClose?: () => void;
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContentTooltip?: () => ReactNode;
  /** Иконка перед текстом Chips'a */
  iconStart?: ReactNode;
  /** Иконка после текста Chips'a.
   * Отображается, если не прокинут метод onClose, иначе отображется иконка закрытия (крест) */
  iconEnd?: ReactNode;
  /**
   * @deprecated Помечено как deprecated в версии 7.9.0, будет удалено в 9.x.x версии.
   * Взамен используйте iconStart или iconEnd
   *
   * Иконка перед текстом Chips'a
   */
  iconBefore?: ReactNode;
  /**
   * @deprecated Помечено как deprecated в версии 7.9.0, будет удалено в 9.x.x версии.
   * Взамен используйте iconStart или iconEnd
   *
   * Иконка после текста Chips'a.
   * Отображается, если не прокинут метод onClose, иначе отображется иконка закрытия (крест)
   */
  iconAfter?: ReactNode;
  /** Число, которое будет отображено в компоненте Badge справа от content */
  badge?: number;
}

export const Chips = React.forwardRef<HTMLDivElement, ChipsProps>(
  (
    {
      dimension = 'm',
      disabled,
      appearance = 'outlined',
      selected,
      onClose,
      children,
      renderContentTooltip = defaultRenderContent,
      iconBefore,
      iconAfter,
      iconStart,
      iconEnd,
      badge,
      ...props
    },
    ref,
  ) => {
    const defaultChip = selected !== undefined;
    const [overflow, setOverflow] = React.useState(false);
    const [tooltipVisible, setTooltipVisible] = React.useState(false);
    const withCloseIcon = !!onClose;
    const withBadge = !!badge;
    const badgeAppearance: BadgeAppearance = React.useMemo(() => {
      if (selected && !disabled) return 'whiteBlue';
      if (disabled) {
        if (selected || appearance === 'filled') return 'whiteDisable';
        return 'lightDisable';
      }
      if (appearance === 'filled') return 'white';
      return 'info';
    }, [appearance, selected, disabled]);

    const chipRef = React.useRef<HTMLDivElement | null>(null);
    const refItems = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
      if (refItems.current && checkOverflow(refItems.current) !== overflow) {
        setOverflow(checkOverflow(refItems.current));
      }
    }, [tooltipVisible, setOverflow]);

    React.useLayoutEffect(() => {
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
    }, [setTooltipVisible]);

    const handleClickCloseIcon = (e: MouseEvent) => {
      e.stopPropagation();
      onClose?.();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
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
            $withCloseIcon={withCloseIcon}
          >
            {(iconStart || iconBefore) && (
              <IconStartWrapperStyled>
                <IconWrapperStyled $dimension={dimension} $withCloseIcon={withCloseIcon}>
                  {iconStart ? iconStart : iconBefore}
                </IconWrapperStyled>
              </IconStartWrapperStyled>
            )}
            <ChipChildrenWrapperStyled ref={refItems}>{children}</ChipChildrenWrapperStyled>
            {!onClose && (iconEnd || iconAfter) && (
              <IconEndWrapperStyled $dimension={dimension}>
                <IconWrapperStyled $dimension={dimension} $withCloseIcon={withCloseIcon}>
                  {iconEnd ? iconEnd : iconAfter}
                </IconWrapperStyled>
              </IconEndWrapperStyled>
            )}
            {!onClose && typeof badge !== 'undefined' && (
              <StyledBadge data-badge dimension={dimension} appearance={badgeAppearance}>
                {badge}
              </StyledBadge>
            )}
            {onClose && (
              <CloseIconButton
                dimension={dimension === 'm' ? 'mBig' : 's'}
                highlightFocus={false}
                onClick={handleClickCloseIcon}
                disabled={disabled}
                tabIndex={-1}
                appearance={appearance === 'outlined' ? 'primary' : 'secondary'}
              />
            )}
          </ChipContentWrapperStyled>
        </ChipComponentStyled>
        {tooltipVisible && overflow && <Tooltip targetElement={chipRef.current} renderContent={renderContentTooltip} />}
      </>
    );
  },
);

Chips.displayName = 'Chips';
