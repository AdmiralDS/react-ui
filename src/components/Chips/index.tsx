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
import type { BadgeAppearance } from '#src/components/Badge';

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
            <IconAfterWrapperStyled dimension={dimension} withCloseIcon={withCloseIcon}>
              <IconWrapperStyled dimension={dimension} withCloseIcon={withCloseIcon}>
                <CloseIconWrapperStyled
                  appearance={appearance}
                  disabled={disabled}
                  selected={selected}
                  onClick={disabled ? void 0 : handleClickCloseIcon}
                />
              </IconWrapperStyled>
            </IconAfterWrapperStyled>
          )}
        </ChipContentWrapperStyled>
      </ChipComponentStyled>
      {tooltipVisible && overflow && <Tooltip targetRef={chipRef} renderContent={renderContentTooltip} />}
    </>
  );
};

Chips.displayName = 'Chips';
