import { ComponentDimension } from '#src/components/input';
import type { InputStatus } from '#src/components/input';
import { StatusIcon } from '#src/components/input/StatusIcon';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import type { HTMLAttributes, KeyboardEvent, ReactElement, ReactNode } from 'react';
import * as React from 'react';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Dropdown } from '#src/components/Dropdown';
import { TYPOGRAPHY } from '#src/components/Typography';

export const SELECT_DIMENSIONS = ['xl', 'm', 's'] as const;
export type SelectDimension = typeof SELECT_DIMENSIONS[number];

const heights = css<{ dimension: SelectDimension }>`
  height: ${({ dimension }) => {
    switch (dimension) {
      case 'xl':
        return '56px';
      case 'm':
        return '40px';
      case 's':
        return '32px';
      default:
        return '56px';
    }
  }};
`;

const styleText = css<{ dimension: SelectDimension }>`
  font-size: ${({ dimension }) => (dimension === 's' ? 14 : 16)}px;
  line-height: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
  font-family: ${TYPOGRAPHY.fontFamily};
`;

const SelectComponent = styled.div<{ dimension: SelectDimension; disabled?: boolean }>`
  position: relative;
  padding: 0 ${({ dimension }) => (dimension === 's' ? 12 : 16)}px;
  color: ${({ theme, disabled }) => (disabled ? theme.color.text.tertiary : theme.color.text.primary)};
  display: flex;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 0;
  align-items: center;
  justify-content: space-between;
  ${styleText};
  box-sizing: border-box;
  border-radius: 4px;
  height: 100%;

  [data-status='error'] & {
    border-color: ${(props) => props.theme.color.status.danger};
  }

  [data-read-only] & {
    user-select: none;
    background-color: ${(props) => props.theme.color.background.tertiary};
    border-color: ${(props) => props.theme.color.background.tertiary};
  }
`;

const Placeholder = styled.div<{ dimension: SelectDimension; focused: boolean; disabled?: boolean }>`
  color: ${({ theme, focused, disabled }) => {
    if (focused) return theme.color.basic.disable;
    if (disabled) return theme.color.text.tertiary;
    return theme.color.text.secondary;
  }};
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${styleText}
`;

const StyledDropDown = styled(Dropdown)<{
  alignDropdown?: string;
  dropMaxHeight: string | number;
  cssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  padding: 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  ${(p) => (p.alignDropdown ? `align-self: ${p.alignDropdown}` : '')};
  max-height: ${(p) => p.dropMaxHeight};
  min-width: 100%;
  ${(p) => p.cssMixin || ''}
`;

const IconPanel = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  flex: 0 0 auto;

  display: flex;
  align-items: center;

  margin-left: 10px;

  & > * {
    display: block;
    width: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
    height: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
  }

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`;

const SelectWrapper = styled.div<{
  disabled?: boolean;
  dimension: SelectDimension;
  focused: boolean;
}>`
  box-sizing: border-box;

  cursor: pointer;

  &&[disabled],
  &&[data-read-only] {
    cursor: default;
  }

  background: ${({ theme, disabled }) => (disabled ? theme.color.background.tertiary : theme.color.background.primary)};
  position: relative;
  border-radius: 4px;
  ${heights};

  border-color: ${({ theme, disabled, focused }) => {
    if (disabled) return 'transparent';
    if (focused) return theme.color.basic.press;
    return theme.color.basic.tertiary;
  }};

  [data-focus-within] &,
  &:focus {
    border-color: ${(p) => p.theme.color.basic.press};
  }

  border-width: 1px;
  border-style: solid;

  &:hover {
    border-color: ${({ theme, disabled }) => (disabled ? 'transparent' : theme.color.basic.hover)};
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }

  &[data-status='error'] {
    border-color: ${(p) => p.theme.color.status.danger};
  }

  &[data-status='success'] {
    border-color: ${(props) => props.theme.color.status.success};
  }
`;

const WrapperChild = styled.div`
  flex: 1 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Отключение селекта */
  disabled?: boolean;
  /** Размер Меню */
  dimension?: SelectDimension;
  /** Значение селекта */
  value: number | string | null;
  /** Функция, которая возвращает реакт-компонент с контентом для отображения в cелекте */
  renderInputValue?: (value: number | string | null) => ReactNode;
  /** Обработчик для изменения состояния селекта */
  onChange: (value: number | string | null) => void;
  /** Колбек на открытие селекта */
  onOpen?: () => void;
  /** Колбек на закрытие селекта */
  onClose?: () => void;
  /** Референс на контейнер для правильного позиционирования выпадающего списка */
  portalTargetRef?: React.RefObject<HTMLElement>;

  /**
   * Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
   * Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)
   */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /**
   *  Задает максимальную высоту контейнера с опциями
   */
  dropMaxHeight?: string | number;

  /** Установка статуса поля */
  status?: InputStatus;

  /** Отображать иконку статуса */
  displayStatusIcon?: boolean;

  /** Иконки для отображения в правом углу поля */
  icons?: React.ReactNode;

  /** Отображает значение без возможности изменения */
  readOnly?: boolean | undefined;

  /** Позволяет добавлять миксин на дроп контейнер созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      portalTargetRef,
      children,
      renderInputValue = (value) => value,
      className,
      disabled,
      dimension = 'm',
      value,
      onChange,
      onOpen,
      onClose,
      alignDropdown,
      dropMaxHeight = '300px',
      icons,
      status,
      displayStatusIcon,
      readOnly,
      dropContainerCssMixin,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [hovered, setHovered] = React.useState('');
    const refWrapper = React.useRef<HTMLInputElement>(null);
    const childrenArray = React.Children.toArray(children);
    const findOptionValue = (option: (React.ReactChild | React.ReactFragment | React.ReactPortal)[]) => {
      if (React.isValidElement(option[0]) && 'props' in option[0]) {
        return option[0].props.value;
      }
    };

    const hoverIndex = React.useMemo(
      () =>
        childrenArray?.findIndex((child) => {
          if (React.isValidElement(child) && 'props' in child) {
            return child.props.value === +hovered;
          }
          return -1;
        }),
      [childrenArray, hovered],
    );

    const findNextHoverValue = React.useCallback(() => {
      const nextAbledOptionValue = findOptionValue(childrenArray.slice(hoverIndex + 1));
      if (nextAbledOptionValue) return nextAbledOptionValue;
      return findOptionValue(childrenArray);
    }, [hoverIndex, childrenArray]);

    const findPrevHoverValue = React.useCallback(() => {
      const sliceInd = hoverIndex === -1 ? undefined : hoverIndex;
      const prevAbledOptionValue = findOptionValue(childrenArray.slice(0, sliceInd).reverse());
      if (prevAbledOptionValue) return prevAbledOptionValue;
      return findOptionValue(childrenArray.slice().reverse());
    }, [hoverIndex, childrenArray]);

    const handleKeyDownItem = (e: KeyboardEvent) => {
      const code = keyboardKey.getCode(e);
      e.preventDefault();
      switch (code) {
        case keyboardKey[' ']:
        case keyboardKey.Enter: {
          setOpen(false);
          onClose?.();
          onChange && onChange(hovered);
          setHovered(hovered);
          (refWrapper.current as HTMLElement).focus();
          break;
        }
        case keyboardKey.ArrowUp: {
          const prevValue = findPrevHoverValue();
          if (!prevValue) break;
          setHovered(prevValue);
          break;
        }
        case keyboardKey.ArrowDown: {
          const nextValue = findNextHoverValue();
          if (!nextValue) break;
          setHovered(nextValue);
          break;
        }
        case keyboardKey.Tab:
        case keyboardKey.Escape: {
          onClose?.();
          setOpen(false);
          (refWrapper.current as HTMLElement).focus();
          break;
        }
      }
    };

    const handleClickItem = (e: React.MouseEvent<HTMLElement>, disabled: boolean) => {
      const value = e?.currentTarget.getAttribute('value') ?? '';
      !disabled && onChange && onChange(value);
      refWrapper.current?.focus();
    };

    const renderChildrenDropDown = () => {
      return React.Children.map(children, (child: React.ReactNode) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        const detectedSubGroup = child.props.children?.some?.((element: ReactElement) => Array.isArray(element));

        if (detectedSubGroup) {
          return child.props.children.flat().map((child: ReactElement) => {
            return React.cloneElement(child, {
              disabled: disabled || child?.props?.disabled,
              onClick: (e: React.MouseEvent<HTMLElement>) => handleClickItem(e, child.props.disabled),
              onKeyDown: handleKeyDownItem,
              dimension: dimension === 'xl' ? 'l' : dimension,
              selected: value?.toString() === child.props.value?.toString(),
              hovered: hovered === child.props.value,
              ...child.props,
            });
          });
        }

        return React.cloneElement(child, {
          disabled: disabled || child.props.disabled,
          onClick: (e: React.MouseEvent<HTMLElement>) => handleClickItem(e, child.props.disabled),
          onKeyDown: handleKeyDownItem,
          dimension: dimension === 'xl' ? 'l' : dimension,
          selected: value?.toString() === child.props.value?.toString(),
          hovered: hovered === child.props.value,
          ...child.props,
        });
      });
    };

    const clickOutside = (e: Event) => {
      if (e.target && refWrapper.current?.contains(e.target as Node)) {
        return;
      }
      setOpen(false);
      open && onClose?.();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      const code = keyboardKey.getCode(e);
      if (code === keyboardKey[' '] && !disabled && !open) {
        setOpen(true);
        e.preventDefault();
        !open ? onOpen?.() : onClose?.();
      }
      props.onKeyDown?.(e);
    };

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled) {
        setOpen((open) => !open);
        !open ? onOpen?.() : onClose?.();
      }
      props.onClick?.(e);
    };

    const renderSelectValue = () =>
      props.placeholder && !value ? (
        <Placeholder disabled={disabled} focused={open} dimension={dimension}>
          {props.placeholder}
        </Placeholder>
      ) : (
        <WrapperChild>{renderInputValue(value)}</WrapperChild>
      );

    const iconArray = React.Children.toArray(icons);

    if (displayStatusIcon) {
      iconArray.push(<StatusIcon key="status-icon" status={status} aria-hidden />);
    }

    if (!readOnly) {
      iconArray.push(
        <OpenStatusButton
          key="open-status-icon"
          $isOpen={open}
          data-disabled={disabled ? true : undefined}
          aria-hidden
        />,
      );
    }

    return (
      <SelectWrapper
        ref={refSetter(ref, refWrapper)}
        className={className}
        disabled={disabled}
        data-disabled={disabled ? true : undefined}
        dimension={dimension}
        role={readOnly ? undefined : 'button'}
        {...props}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? undefined : 0}
        onClick={readOnly ? () => null : onClick}
        data-status={status}
        data-read-only={readOnly ? true : undefined}
        aria-readonly={readOnly ? true : undefined}
        focused={open}
      >
        <SelectComponent dimension={dimension} disabled={disabled}>
          {renderSelectValue()}
          <IconPanel disabled={disabled} dimension={dimension}>
            {iconArray}
          </IconPanel>
        </SelectComponent>
        {open && (
          <StyledDropDown
            targetRef={portalTargetRef || refWrapper}
            data-dimension={dimension === 'xl' ? 'l' : dimension}
            onClickOutside={clickOutside}
            alignDropdown={alignDropdown}
            dropMaxHeight={dropMaxHeight}
            cssMixin={dropContainerCssMixin}
          >
            {renderChildrenDropDown()}
          </StyledDropDown>
        )}
      </SelectWrapper>
    );
  },
);

Select.displayName = 'Select';
