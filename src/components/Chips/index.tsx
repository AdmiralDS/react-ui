import type { FC, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import * as React from 'react';

import { Tooltip } from '#src/components/Tooltip';

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

export type ChipDimension = 's' | 'm';
export type ChipAppearance = 'filled' | 'outlined';

/*
  MIN_MEASURABLE_DIFFERENCE - ie опять не может спокойно делать свою работу
  https://stackoverflow.com/questions/30900154/workaround-for-issue-with-ie-scrollwidth
 */
const MIN_MEASURABLE_DIFFERENCE = 2;
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
  const [withTooltip, setTooltip] = React.useState(false);
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
    if (refItems?.current && refItems.current?.offsetWidth <= refItems.current?.scrollWidth) {
      const difference = refItems.current.scrollWidth - refItems.current.offsetWidth;
      setTooltip(difference >= MIN_MEASURABLE_DIFFERENCE);
    }
  }, [setTooltip, refItems?.current]);

  const handleClickCloseIcon = React.useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();

      if (!disabled) {
        onClose?.();
      }
    },
    [onClose],
  );
  const handleTooltipVisibilityChange = (visible: boolean) => setTooltipVisible(visible);

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
        withTooltip={withTooltip}
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
      {withTooltip && (
        <Tooltip
          targetRef={chipRef}
          visible={tooltipVisible}
          onVisibilityChange={handleTooltipVisibilityChange}
          renderContent={renderContentTooltip}
        />
      )}
    </>
  );
};

Chips.displayName = 'Chips';
