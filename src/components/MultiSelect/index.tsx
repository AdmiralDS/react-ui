import { ComponentDimension } from '#src/components/input';
import type { HTMLAttributes, KeyboardEvent, MouseEvent, ReactElement, ReactNode } from 'react';
import * as React from 'react';
import { Children, cloneElement, Fragment, isValidElement, useEffect, useRef, useState } from 'react';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { TYPOGRAPHY } from '#src/components/Typography';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { Dropdown } from '#src/components/Dropdown';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Chips } from '../Chips';

export type MultiSelectDimension = 'xl' | 'm' | 's';

const heights = css<{ dimension: MultiSelectDimension }>`
  height: ${({ dimension }) => {
    switch (dimension) {
      case 'xl':
        return '54px';
      case 'm':
        return '38px';
      case 's':
        return '30px';
      default:
        return '54px';
    }
  }};
`;

const styleText = css<{ dimension: MultiSelectDimension; disabled?: boolean }>`
  font-family: ${TYPOGRAPHY.fontFamily};
`;

const SelectComponent = styled.div<{ dimension: MultiSelectDimension; disabled?: boolean; focused: boolean }>`
  white-space: nowrap;
  position: relative;
  color: ${({ theme, disabled }) => (disabled ? theme.color.text.tertiary : theme.color.text.primary)};
  display: flex;
  user-select: none;
  flex-flow: nowrap;
  border: 0;
  pointer-events: none;
  align-items: center;
  padding: 0 ${({ dimension }) => (dimension === 's' ? 12 : 16)}px;
  justify-content: space-between;
  ${styleText};
  box-sizing: border-box;
  border-radius: 4px;
  height: inherit;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

const Placeholder = styled.div<{ dimension: MultiSelectDimension; focused: boolean; disabled?: boolean }>`
  color: ${({ theme, focused, disabled }) => {
    if (focused) return theme.color.basic.disable;
    if (disabled) return theme.color.text.tertiary;
    return theme.color.text.secondary;
  }};
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledDropDown = styled(Dropdown)<{
  cssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  disabled: boolean;
  dropMaxHeight: string | number;
}>`
  padding: 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 100%;
  max-height: ${(p) => p.dropMaxHeight};

  // checkbox svgs should stay white colored.
  &:not(input[type='checkbox']) & *[fill^='#'] {
    fill: ${({ theme, disabled }) => {
      if (disabled) return theme.color.text.tertiary;
      return theme.color.basic.tertiary;
    }};
  }
  ${(p) => p.cssMixin || ''};
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
  focused: boolean;
  dimension: MultiSelectDimension;
}>`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background: ${({ theme, disabled }) => (disabled ? theme.color.background.tertiary : theme.color.background.primary)};
  position: relative;
  border-radius: 4px;
  ${heights};
  border-color: ${({ theme, disabled, focused }) => {
    if (focused) return theme.color.basic.press;
    if (disabled) return 'transparent';
    return theme.color.basic.tertiary;
  }};
  border-width: 1px;
  border-style: solid;

  [data-focus-within] &,
  &:focus {
    border-color: ${(p) => p.theme.color.basic.press};
  }

  &:hover {
    border-color: ${({ theme, disabled }) => (disabled ? 'transparent' : theme.color.basic.hover)};
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
  [data-status='success'] & {
    border-color: ${(props) => props.theme.color.status.success};
  }
  [data-status='error'] & {
    border-color: ${(props) => props.theme.color.status.danger};
  }
`;

const WrapperChip = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  height: 32px;
  padding-right: 46px;
  pointer-events: none;
`;

const CounterChip = styled((props) => <Chips {...props} />)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin: ${(props) => (props.dimension === 's' ? `4px 8px 4px 0` : `2px 8px 4px 0`)};
  margin-right: ${(props) => (props.dimension === 's' ? -34 : -45)}px;
`;

const ChipItemWrapper = styled.div<{ dimension: MultiSelectDimension }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-right: 4px;
`;

export interface MultiSelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Отключение селекта */
  disabled?: boolean;
  /** Размер Меню */
  dimension?: MultiSelectDimension;
  /** Значение селекта */
  value: string[];
  /** Функция, которая возвращает реакт-компонент с контентом для отображения в cелекте*/
  renderInputValue?: () => ReactNode;
  /** Обработчик для изменения состояния селекта */
  onChange: (value: string[]) => void;
  /** Ссылка на Дропдаун */
  dropDownRef?: React.RefObject<HTMLElement>;
  /** Колбек на открытие селекта */
  onOpen?: () => void;
  /** Колбек на закрытие селекта */
  onClose?: () => void;
  /**
   * Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
   * Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)
   */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Задает максимальную высоту контейнера с опциями */
  dropMaxHeight?: string | number;
  /** Позволяет добавлять миксин на дроп контейнер созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      children,
      renderInputValue,
      className,
      disabled = false,
      dimension = 'm',
      value,
      onChange,
      dropDownRef,
      onOpen,
      onClose,
      alignDropdown,
      dropMaxHeight = '300px',
      dropContainerCssMixin,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = React.useState('');

    const refWrapper = useRef<HTMLDivElement>(null);

    const detectedDuplicate = (targetValue: string, array: string[]) => {
      return array.indexOf(targetValue) === array.lastIndexOf(targetValue)
        ? array
        : array.filter((item: string) => item !== targetValue);
    };

    const handleKeyDownItem = (e: KeyboardEvent) => {
      const code = keyboardKey.getCode(e);
      const targetValue = (e?.currentTarget as HTMLElement).getAttribute('value') ?? '';
      e.preventDefault();
      switch (code) {
        case keyboardKey[' ']:
        case keyboardKey.Enter: {
          targetValue && onChange && onChange(detectedDuplicate(hovered, [...value, hovered]));
          setHovered('');
          break;
        }
        case keyboardKey.Escape:
        case keyboardKey.Tab: {
          onClose?.();
          setOpen(false);
          (refWrapper.current as HTMLElement).focus();
          break;
        }
        case keyboardKey.ArrowUp: {
          setHovered(targetValue);
          break;
        }
        case keyboardKey.ArrowDown: {
          setHovered(targetValue);
          break;
        }
      }
    };

    const handleClickItem = (e: MouseEvent, disabled: boolean) => {
      const targetValue = (e?.currentTarget as HTMLElement).getAttribute?.('value') ?? '';
      targetValue && !disabled && onChange && onChange(detectedDuplicate(targetValue, [...value, targetValue]));
    };

    let detectedSubGroup = false;

    const renderChildrenDropDown = () => {
      return Children.map(children, (child: React.ReactNode) => {
        if (!isValidElement(child)) {
          return null;
        }

        detectedSubGroup = child.props.children?.some?.((element: ReactElement) => Array.isArray(element));
        if (detectedSubGroup) {
          return child.props.children.flat().map((child: ReactElement) => {
            return cloneElement(child, {
              disabled: disabled || child?.props?.disabled,
              onMouseDown: (e: MouseEvent) => handleClickItem(e, child.props.disabled),
              onKeyDown: handleKeyDownItem,
              hovered: hovered === child.props.value,
              dimension: dimension === 'xl' ? 'l' : dimension,
              selected: value.length === 0 ? false : value.includes(child?.props?.value?.toString?.()),
              ...child.props,
            });
          });
        }

        return cloneElement(child, {
          disabled: disabled || child.props.disabled,
          onMouseDown: (e: MouseEvent) => handleClickItem(e, child.props.disabled),
          onKeyDown: handleKeyDownItem,
          hovered: hovered === child.props.value,
          dimension: dimension === 'xl' ? 'l' : dimension,
          selected: value.length === 0 ? false : value.includes(child?.props?.value?.toString?.()),
          ...child.props,
        });
      });
    };

    const outsideClick = () => {
      setOpen(false);
      setFocused(false);
      open && onClose?.();
    };

    useEffect(() => {
      const listener = (event: any) => {
        if (refWrapper?.current?.contains(event.target)) {
          return;
        }
        outsideClick();
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [refWrapper?.current, outsideClick]);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      const code = keyboardKey.getCode(e);
      if (code === keyboardKey[' '] && !disabled && (e.target as HTMLElement) === e.currentTarget) {
        setOpen(!open);
        setFocused(true);
        e.preventDefault();
        !open ? onOpen?.() : onClose?.();
      } else if (code === keyboardKey.Escape) {
        setOpen(false);
      } else if (code === keyboardKey.Tab) {
        if (!open) {
          setFocused(false);
        }
      }
      props.onKeyDown?.(e);
    };

    const onClick = (e: MouseEvent<HTMLDivElement>) => {
      if (e.currentTarget === e.target) {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) {
          !open ? onOpen?.() : onClose?.();
          setOpen(!open);
          setFocused(true);
        }
        props.onClick?.(e);
      }
    };

    const defaultRender = () => {
      const setCounterChip = (index: number) => ' + ' + index;
      const iconClick = (id: number) => {
        onChange(value.filter((d, index) => index !== id));
      };
      return (
        <WrapperChip>
          {value.map((d, index) => (
            <Fragment key={index}>
              <CounterChip tabIndex={-1} disabled={disabled} dimension="s" appearance="filled">
                {setCounterChip(value.length - index)}
              </CounterChip>
              <ChipItemWrapper dimension={dimension}>
                <Chips
                  tabIndex={-1}
                  disabled={disabled}
                  dimension="s"
                  appearance="filled"
                  onClose={iconClick.bind(null, index)}
                >
                  {d}
                </Chips>
              </ChipItemWrapper>
            </Fragment>
          ))}
        </WrapperChip>
      );
    };

    const renderSelectValue = () =>
      props.placeholder && value.length === 0 ? (
        <Placeholder disabled={disabled} focused={open} dimension={dimension}>
          {props.placeholder}
        </Placeholder>
      ) : (
        renderInputValue?.() ?? defaultRender()
      );

    return (
      <SelectWrapper
        ref={refSetter(ref, refWrapper)}
        className={className}
        disabled={disabled}
        dimension={dimension}
        focused={focused}
        {...props}
        onKeyDown={handleKeyDown}
        onClick={onClick}
        tabIndex={disabled ? -1 : 0}
      >
        <SelectComponent focused={focused} dimension={dimension} disabled={disabled}>
          {renderSelectValue()}
          <IconPanel disabled={disabled} dimension={dimension}>
            <OpenStatusButton
              key="open-status-icon"
              $isOpen={open}
              data-disabled={disabled ? true : undefined}
              aria-hidden
            />
          </IconPanel>
        </SelectComponent>
        {open && (
          <StyledDropDown
            targetRef={dropDownRef || refWrapper}
            data-dimension={dimension === 'xl' ? 'l' : dimension}
            alignSelf={alignDropdown}
            cssMixin={dropContainerCssMixin}
            dropMaxHeight={dropMaxHeight}
            disabled={disabled}
            role="listbox"
          >
            {renderChildrenDropDown()}
          </StyledDropDown>
        )}
      </SelectWrapper>
    );
  },
);

MultiSelect.displayName = 'MultiSelect';
