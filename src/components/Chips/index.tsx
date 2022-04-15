import * as React from 'react';
import type { FC, HTMLAttributes, MouseEvent, MutableRefObject, ReactNode } from 'react';

import { Tooltip } from '../Tooltip';

import {
  ChipChildrenWrapperStyled,
  ChipComponentStyled,
  ChipContentWrapperStyled,
  CloseIconWrapperStyled,
  IconAfterWrapperStyled,
  IconBeforeWrapperStyled,
  IconWrapperStyled,
} from './style';

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
  ...props
}) => {
  const defaultChip = selected !== undefined;
  const [withTooltip, setTooltip] = React.useState(false);

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

  const Chip = (
    <ChipComponentStyled
      dimension={dimension}
      disabled={disabled}
      appearance={appearance}
      selected={selected}
      defaultChip={defaultChip}
      {...props}
      tabIndex={props.tabIndex ?? 0}
    >
      <ChipContentWrapperStyled dimension={dimension} disabled={disabled} appearance={appearance} selected={selected}>
        {iconBefore && (
          <IconBeforeWrapperStyled>
            <IconWrapperStyled dimension={dimension}>{iconBefore}</IconWrapperStyled>
          </IconBeforeWrapperStyled>
        )}
        <ChipChildrenWrapperStyled ref={refItems}>{children}</ChipChildrenWrapperStyled>
        {!onClose && iconAfter && (
          <IconAfterWrapperStyled>
            <IconWrapperStyled dimension={dimension}>{iconAfter}</IconWrapperStyled>
          </IconAfterWrapperStyled>
        )}
        {onClose && (
          <IconAfterWrapperStyled>
            <IconWrapperStyled dimension={dimension}>
              <CloseIconWrapperStyled
                disabled={disabled}
                onClick={disabled ? void 0 : handleClickCloseIcon}
                selected={selected}
              />
            </IconWrapperStyled>
          </IconAfterWrapperStyled>
        )}
      </ChipContentWrapperStyled>
    </ChipComponentStyled>
  );

  return withTooltip ? <Tooltip renderContent={renderContentTooltip}>{Chip}</Tooltip> : Chip;
};

Chips.displayName = 'Chips';
