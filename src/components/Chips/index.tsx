import type { FC, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import * as React from 'react';

import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

import {
  ChipChildrenWrapperStyled,
  ChipComponentStyled,
  ChipContentWrapperStyled,
  CloseIconWrapperStyled,
  IconAfterWrapperStyled,
  IconBeforeWrapperStyled,
  IconWrapperStyled,
  StyledBadge,
} from './style';
import { BadgeAppearance } from '#src/components/Badge';
import { CloseIconPlacementButton } from '#src/components/IconPlacement';
import { keyboardKey } from '#src/components/common/keyboardKey';

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
  /** Иконка перед текстом Chips'a **/
  iconBefore?: ReactNode;
  /** Иконка после текста Chips'a. Отображается, если не прокинут метод onClose, иначе отображется иконка закрытия (крест) **/
  iconAfter?: ReactNode;
  /** Число, которое будет отображено в компоненте Badge справа от content */
  badge?: number;
}

export const Chips: FC<ChipsProps> = ({
  dimension = 'm',
  disabled,
  appearance = 'outlined',
  selected,
  onClose,
  children,
  renderContentTooltip = defaultRenderContent,
  iconBefore,
  iconAfter,
  badge,
  ...props
}) => {
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
  }, [refItems.current, tooltipVisible, setOverflow]);

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
  }, [setTooltipVisible, chipRef.current]);

  const handleClickCloseIcon = React.useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();

      if (!disabled) {
        onClose?.();
      }
    },
    [onClose],
  );

  const handleKeyDown = React.useCallback(
    (e) => {
      e.stopPropagation();
      if (!disabled) {
        const code = keyboardKey.getCode(e);
        if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
          if (withCloseIcon) {
            onClose?.();
          } else {
            props.onClick?.(e);
          }
        }
      }
    },
    [props.onClick],
  );

  return (
    <>
      <ChipComponentStyled
        ref={chipRef}
        dimension={dimension}
        disabled={disabled}
        appearance={appearance}
        selected={selected}
        defaultChip={defaultChip}
        withCloseIcon={withCloseIcon}
        withTooltip={overflow}
        withBadge={withBadge}
        onKeyDown={handleKeyDown}
        {...props}
        tabIndex={props.tabIndex ?? 0}
      >
        <ChipContentWrapperStyled
          dimension={dimension}
          disabled={disabled}
          appearance={appearance}
          selected={selected}
          withCloseIcon={withCloseIcon}
        >
          {iconBefore && (
            <IconBeforeWrapperStyled>
              <IconWrapperStyled dimension={dimension} withCloseIcon={withCloseIcon}>
                {iconBefore}
              </IconWrapperStyled>
            </IconBeforeWrapperStyled>
          )}
          <ChipChildrenWrapperStyled ref={refItems}>{children}</ChipChildrenWrapperStyled>
          {!onClose && iconAfter && (
            <IconAfterWrapperStyled dimension={dimension}>
              <IconWrapperStyled dimension={dimension} withCloseIcon={withCloseIcon}>
                {iconAfter}
              </IconWrapperStyled>
            </IconAfterWrapperStyled>
          )}
          {!onClose && typeof badge !== 'undefined' && (
            <StyledBadge data-badge dimension={dimension} appearance={badgeAppearance}>
              {badge}
            </StyledBadge>
          )}
          {onClose && (
            <CloseIconPlacementButton
              dimension={dimension === 'm' ? 'mBig' : 's'}
              highlightFocus={false}
              onClick={disabled ? void 0 : handleClickCloseIcon}
              disabled={disabled}
              tabIndex={-1}
              appearance={appearance === 'outlined' ? 'primary' : 'secondary'}
            />
          )}
        </ChipContentWrapperStyled>
      </ChipComponentStyled>
      {tooltipVisible && overflow && <Tooltip targetRef={chipRef} renderContent={renderContentTooltip} />}
    </>
  );
};

Chips.displayName = 'Chips';
