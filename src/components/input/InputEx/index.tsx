import { Children, forwardRef, useRef, useState, useEffect, useLayoutEffect } from 'react';
import type { ForwardedRef, InputHTMLAttributes, ReactNode } from 'react';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import type { ComponentDimension, ExtraProps, InputStatus } from '#src/components/input/types';
import { containerHeights, skeletonMixin } from '#src/components/input/Container';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { InputIconButton } from '#src/components/InputIconButton';
import { refSetter } from '#src/components/common/utils/refSetter';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import type { RenderPropsType } from '#src/components/input/InputEx/SuffixSelect';
import { SuffixSelect } from '#src/components/input/InputEx/SuffixSelect';
import type { MenuItemProps } from '#src/components/Menu/MenuItem';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import type { DropContainerStyles } from '#src/components/DropdownContainer';
import { BorderedDivStyles, InputBorderedDiv } from '#src/components/input/TextInput';

export type { RenderPropsType } from '#src/components/input/InputEx/SuffixSelect';

const iconSizeValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};
const horizontalPaddingValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
    case 'xl':
      return 16;
    case 's':
      return 12;
    default:
      return 16;
  }
};

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

const Input = styled.input<ExtraProps>`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: ${(props) => props.theme.color['Neutral/Neutral 90']};

  &&&:disabled {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:disabled::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  &&&:invalid + ${InputBorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  &&&:invalid:hover:not(:disabled) + ${InputBorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 70']};
  }

  &&&:invalid:focus:not(:disabled) + ${InputBorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  ${ieFixes}
`;

const PrefixContainer = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  align-self: center;
  border-right: solid 1px ${(props) => props.theme.color['Neutral/Neutral 20']};
  padding-right: 8px;
  margin-right: 8px;
  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])};
  color: ${(props) =>
    props.disabled ? props.theme.color['Neutral/Neutral 30'] : props.theme.color['Neutral/Neutral 50']};
  white-space: nowrap;
`;

const SuffixContainer = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  align-self: center;
  border-left: solid 1px ${(props) => props.theme.color['Neutral/Neutral 20']};
  padding-left: 8px;
  margin-left: 8px;
  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])};
  color: ${(props) =>
    props.disabled ? props.theme.color['Neutral/Neutral 30'] : props.theme.color['Neutral/Neutral 50']};
  white-space: nowrap;
`;

const IconPanel = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  position: relative;
  display: flex;
  align-items: center;

  & > svg {
    border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
    display: block;
    width: ${iconSizeValue}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
    }
  }

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`;

const preventDefault = (e: React.MouseEvent) => e.preventDefault();

const Container = styled.div<{
  disabled?: boolean;
  $dimension?: ComponentDimension;
  $skeleton?: boolean;
  $status?: InputStatus;
  readOnly?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border: none;
  border-radius: ${(p) => (p.$skeleton ? 0 : mediumGroupBorderRadius(p.theme.shape))};
  padding: 0 ${horizontalPaddingValue}px;
  background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};

  &[data-read-only],
  &[data-disabled] {
    background-color: ${(props) => props.theme.color['Neutral/Neutral 10']};
  }

  ${containerHeights}
  ${({ $skeleton }) => $skeleton && skeletonMixin};
  ${BorderedDivStyles}
`;

export interface RenderProps {
  value?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
}
export interface InputExProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /**  Ширина меню */
  menuWidth?: string;

  /** Иконки для отображения в правом углу поля */
  icons?: React.ReactNode;

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Статус поля */
  status?: InputStatus;

  /** Ref контейнера компонента */
  containerRef?: ForwardedRef<HTMLDivElement>;

  // TODO: провести рефактор параметра в рамках задачи https://github.com/AdmiralDS/react-ui/issues/1083
  /** Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,
   * если не указан, выравнивание произойдет относительно контейнера компонента
   */
  alignDropRef?: React.RefObject<HTMLElement>;

  /**  Наличие этого атрибута отключает возможность выделения и копирования значения поля */
  disableCopying?: boolean;

  /** Значение префикса */
  prefixValue?: ReactNode;

  /** Список значений префикса */
  prefixValueList?: ReactNode[];

  /** Срабатывает при выборе нового значения префикса*/
  onPrefixValueChange?: (value: ReactNode) => void;

  /** Специальный метод для рендера компонента по значению префикса */
  renderPrefixValue?: (props: RenderProps) => React.ReactNode;

  /** Специальный метод для рендера опции списка префикса по значению */
  renderPrefixOption?: (props: RenderPropsType<ReactNode> & MenuItemProps) => React.ReactNode;

  /** Значение суффикса */
  suffixValue?: ReactNode;

  /** Список значений суффикса */
  suffixValueList?: ReactNode[];

  /** Срабатывает при выборе нового значения суффикса */
  onSuffixValueChange?: (value: ReactNode) => void;

  /** Специальный метод для рендера компонента по значению суффикса*/
  renderSuffixValue?: (props: RenderProps) => React.ReactNode;

  /** Специальный метод для рендера опции списка суффикса по значению */
  renderSuffixOption?: (props: RenderPropsType<ReactNode> & MenuItemProps) => React.ReactNode;

  /** Состояние skeleton */
  skeleton?: boolean;

  /** @deprecated use columnsButtonDropContainerStyle.dropContainerCssMixin instead
   * Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: ReturnType<typeof css>;
  /** Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок  */
  prefixDropContainerStyle?: DropContainerStyles;
  /** Позволяет добавлять стили и className для выпадающего меню кнопки настроек  */
  suffixDropContainerStyle?: DropContainerStyles;

  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
}

export const InputEx = forwardRef<HTMLInputElement, InputExProps>(
  (
    {
      dimension,
      menuWidth,
      displayClearIcon,
      status,
      containerRef = () => null,
      alignDropRef,
      icons,
      children,
      className,
      style,
      placeholder,

      prefixValue,
      renderPrefixValue = ({ value }) => (!value ? value : String(value)),
      prefixValueList,
      onPrefixValueChange,
      renderPrefixOption,

      suffixValue,
      renderSuffixValue = ({ value }) => (!value ? value : String(value)),
      suffixValueList,
      onSuffixValueChange,
      renderSuffixOption,

      skeleton = false,
      dropContainerCssMixin,
      prefixDropContainerStyle,
      suffixDropContainerStyle,
      showTooltip = true,
      ...props
    },
    ref,
  ) => {
    const innerContainerRef = useRef<HTMLDivElement | null>(null);
    const alignRef = alignDropRef || innerContainerRef;
    const menuDimension = dimension === 'xl' ? 'l' : dimension;
    const renderPrefix = prefixValueList
      ? (props: RenderProps) => (
          <SuffixSelect
            dropAlign="flex-start"
            dimension={menuDimension}
            menuWidth={menuWidth}
            alignRef={alignRef}
            value={props.value || ''}
            onChange={(value) => onPrefixValueChange?.(value)}
            options={prefixValueList}
            disabled={props.disabled}
            readOnly={props.readOnly}
            dropContainerCssMixin={prefixDropContainerStyle?.dropContainerCssMixin || dropContainerCssMixin}
            dropContainerClassName={prefixDropContainerStyle?.dropContainerClassName}
            dropContainerStyle={prefixDropContainerStyle?.dropContainerStyle}
            renderValue={renderPrefixValue}
            renderOption={renderPrefixOption}
          />
        )
      : renderPrefixValue;

    const prefix = renderPrefix({ value: prefixValue, disabled: props.disabled, readOnly: props.readOnly });

    const renderSuffix = suffixValueList
      ? (props: RenderProps) => (
          <SuffixSelect
            dropAlign="flex-end"
            dimension={menuDimension}
            menuWidth={menuWidth}
            alignRef={alignRef}
            value={props.value || ''}
            onChange={(value) => onSuffixValueChange?.(value)}
            options={suffixValueList}
            disabled={props.disabled}
            readOnly={props.readOnly}
            dropContainerCssMixin={suffixDropContainerStyle?.dropContainerCssMixin || dropContainerCssMixin}
            dropContainerClassName={suffixDropContainerStyle?.dropContainerClassName}
            dropContainerStyle={suffixDropContainerStyle?.dropContainerStyle}
            renderValue={renderSuffixValue}
            renderOption={renderSuffixOption}
          />
        )
      : renderSuffixValue;

    const suffix = renderSuffix({ value: suffixValue, disabled: props.disabled, readOnly: props.readOnly });

    const inputRef = useRef<HTMLInputElement>(null);
    const [overflowActive, setOverflowActive] = useState<boolean>(false);
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [innerValueState, setInnerValueState] = useState(props.defaultValue ?? undefined);
    const innerValue = props.value ?? innerValueState;

    useEffect(() => {
      if (checkOverflow(inputRef.current)) {
        setOverflowActive(true);
        return;
      }
      setOverflowActive(false);
    }, [tooltipVisible, setOverflowActive]);

    useLayoutEffect(() => {
      function show() {
        if (document.activeElement !== inputRef.current) setTooltipVisible(true);
      }
      function hide() {
        setTooltipVisible(false);
      }
      const wrapper = innerContainerRef.current;
      if (wrapper) {
        wrapper.addEventListener('mouseenter', show);
        wrapper.addEventListener('mouseleave', hide);
        wrapper.addEventListener('mousedown', hide);
        return () => {
          wrapper.removeEventListener('mouseenter', show);
          wrapper.removeEventListener('mouseleave', hide);
          wrapper.removeEventListener('mousedown', hide);
        };
      }
    }, [setTooltipVisible]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInnerValueState(e.currentTarget.value);
      props.onChange?.(e);
    };

    const iconArray = Children.toArray(icons);

    if (!props.readOnly && displayClearIcon && !!innerValue) {
      iconArray.unshift(
        <InputIconButton
          icon={CloseOutlineSvg}
          key="clear-icon"
          onClick={() => {
            if (inputRef.current) {
              changeInputData(inputRef.current, { value: '' });
            }
          }}
          aria-hidden
        />,
      );
    }

    const iconCount = iconArray.length;

    return (
      <>
        <Container
          className={className}
          style={style}
          data-disabled={props.disabled ? true : undefined}
          $dimension={dimension}
          ref={refSetter(innerContainerRef, containerRef)}
          data-read-only={props.readOnly ? true : undefined}
          data-status={status}
          data-disable-copying={props.disableCopying ? true : undefined}
          onMouseDown={props.disableCopying ? preventDefault : undefined}
          $skeleton={skeleton}
          $status={status}
          disabled={props.disabled}
          readOnly={props.readOnly}
        >
          {!!prefix && (
            <PrefixContainer $dimension={dimension} disabled={props.disabled}>
              {prefix}
            </PrefixContainer>
          )}
          <Input
            ref={refSetter(ref, inputRef)}
            {...props}
            onChange={handleChange}
            placeholder={placeholder}
            $iconCount={iconCount}
            $dimension={dimension}
          />
          <InputBorderedDiv $status={status} disabled={props.disabled || props.readOnly} />
          {iconCount > 0 && (
            <IconPanel disabled={props.disabled} $dimension={dimension}>
              {iconArray}
            </IconPanel>
          )}
          {!!suffix && (
            <SuffixContainer $dimension={dimension} disabled={props.disabled}>
              {suffix}
            </SuffixContainer>
          )}

          {children}
        </Container>
        {showTooltip && tooltipVisible && overflowActive && (
          <Tooltip renderContent={() => inputRef?.current?.value || ''} targetElement={innerContainerRef.current} />
        )}
      </>
    );
  },
);

InputEx.defaultProps = {
  dimension: 'm',
} as const;

InputEx.displayName = 'InputEx';
