import * as React from 'react';
import type { CSSProperties, ForwardedRef, InputHTMLAttributes } from 'react';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import type { ComponentDimension, ExtraProps, InputStatus } from '#src/components/input/types';
import { containerHeights, skeletonMixin } from '#src/components/input/Container';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { InputIconButton } from '#src/components/InputIconButton';
import { refSetter } from '#src/components/common/utils/refSetter';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import type { ValueType } from '#src/components/input/InputEx/ValueType';
import type { RenderPropsType } from '#src/components/input/InputEx/SuffixSelect';
import { SuffixSelect } from '#src/components/input/InputEx/SuffixSelect';
import type { MenuItemProps } from '#src/components/Menu/MenuItem';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

const iconSizeValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};
const horizontalPaddingValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 16;
    case 's':
      return 12;
    default:
      return 16;
  }
};

const BorderedDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid ${(props) => props.theme.color['Neutral/Neutral 40']};
  border-radius: inherit;

  [data-status='error'] & {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] & {
    border: 1px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  [data-read-only] & {
    border-color: transparent;
  }
`;

const colorsBorderAndBackground = css<{ disabled?: boolean }>`
  &:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Primary/Primary 60 Main']};
  }

  &:disabled + ${BorderedDiv} {
    border-color: transparent;
  }

  &:hover:not(:focus) + ${BorderedDiv} {
    border-color: ${(props) => (props.disabled ? 'transparent' : props.theme.color['Neutral/Neutral 60'])};
  }

  &:invalid + ${BorderedDiv}, &:invalid:hover + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='error'] &:hover + ${BorderedDiv}, [data-status='error'] &:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] &:hover + ${BorderedDiv}, [data-status='success'] &:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  &:disabled {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-read-only] &:hover + ${BorderedDiv}, [data-read-only] &:focus + ${BorderedDiv} {
    border-color: transparent;
  }
`;

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

  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
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

  ${colorsBorderAndBackground}
  ${ieFixes}
`;

const PrefixContainer = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  align-self: center;
  border-right: solid 1px ${(props) => props.theme.color['Neutral/Neutral 20']};
  padding-right: 8px;
  margin-right: 8px;
  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])};
  color: ${(props) =>
    props.disabled ? props.theme.color['Neutral/Neutral 30'] : props.theme.color['Neutral/Neutral 50']};
  white-space: nowrap;
`;

const SuffixContainer = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  align-self: center;
  border-left: solid 1px ${(props) => props.theme.color['Neutral/Neutral 20']};
  padding-left: 8px;
  margin-left: 8px;
  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])};
  color: ${(props) =>
    props.disabled ? props.theme.color['Neutral/Neutral 30'] : props.theme.color['Neutral/Neutral 50']};
  white-space: nowrap;
`;

const IconPanel = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  position: relative;
  display: flex;
  align-items: center;

  & > svg {
    border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
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

const Container = styled.div<{ disabled?: boolean; dimension?: ComponentDimension; skeleton?: boolean }>`
  position: relative;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border: none;
  border-radius: ${(p) => (p.skeleton ? 0 : mediumGroupBorderRadius(p.theme.shape))};
  padding: 0 ${horizontalPaddingValue}px;
  background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};

  &[data-read-only],
  &[data-disabled] {
    background-color: ${(props) => props.theme.color['Neutral/Neutral 10']};
  }

  ${containerHeights}
  ${({ skeleton }) => skeleton && skeletonMixin}};
`;

export interface RenderProps {
  value?: ValueType;
  disabled?: boolean;
  readOnly?: boolean;
}
export interface InputExProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Иконки для отображения в правом углу поля */
  icons?: React.ReactNode;

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Статус поля */
  status?: InputStatus;

  /** Ref контейнера компонента */
  containerRef?: ForwardedRef<HTMLDivElement>;

  /** Ref контейнера относительно которого нужно выравнивать дроп контейнеры,
   * если не указан выравнивание произойдет относительно контейнера компонента
   */
  alignDropRef?: React.RefObject<HTMLElement>;

  /**  Наличие этого атрибута отключает возможность выделения и копирования значения поля */
  disableCopying?: boolean;

  /** Значение префикса */
  prefixValue?: ValueType;

  /** Список значений префикса */
  prefixValueList?: ValueType[];

  /** Срабатывает при выборе нового значения префикса*/
  onPrefixValueChange?: (value: ValueType) => void;

  /** Специальный метод для рендера компонента по значению префикса */
  renderPrefixValue?: (props: RenderProps) => React.ReactNode;

  /** Специальный метод для рендера опции списка префикса по значению */
  renderPrefixOption?: (props: RenderPropsType<ValueType> & MenuItemProps) => React.ReactNode;

  /** Значение суффикса */
  suffixValue?: ValueType;

  /** Список значений суффикса */
  suffixValueList?: ValueType[];

  /** Срабатывает при выборе нового значения суффикса */
  onSuffixValueChange?: (value: ValueType) => void;

  /** Специальный метод для рендера компонента по значению суффикса*/
  renderSuffixValue?: (props: RenderProps) => React.ReactNode;

  /** Специальный метод для рендера опции списка суффикса по значению */
  renderSuffixOption?: (props: RenderPropsType<ValueType> & MenuItemProps) => React.ReactNode;

  /** Состояние skeleton */
  skeleton?: boolean;

  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;

  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
}

export const InputEx = React.forwardRef<HTMLInputElement, InputExProps>(
  (
    {
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
      renderPrefixValue = ({ value }) => value,
      prefixValueList,
      onPrefixValueChange,
      renderPrefixOption,

      suffixValue,
      renderSuffixValue = ({ value }) => value,
      suffixValueList,
      onSuffixValueChange,
      renderSuffixOption,

      skeleton = false,
      dropContainerCssMixin,
      showTooltip = true,
      ...props
    },
    ref,
  ) => {
    const innerContainerRef = React.useRef<HTMLDivElement | null>(null);
    const alignRef = alignDropRef || innerContainerRef;
    const renderPrefix = prefixValueList
      ? (props: RenderProps) => (
          <SuffixSelect
            dropAlign="flex-start"
            alignRef={alignRef}
            value={props.value || ''}
            onChange={(value) => onPrefixValueChange?.(value)}
            options={prefixValueList}
            disabled={props.disabled}
            readOnly={props.readOnly}
            dropContainerCssMixin={dropContainerCssMixin}
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
            alignRef={alignRef}
            value={props.value || ''}
            onChange={(value) => onSuffixValueChange?.(value)}
            options={suffixValueList}
            disabled={props.disabled}
            readOnly={props.readOnly}
            dropContainerCssMixin={dropContainerCssMixin}
            renderValue={renderSuffixValue}
            renderOption={renderSuffixOption}
          />
        )
      : renderSuffixValue;

    const suffix = renderSuffix({ value: suffixValue, disabled: props.disabled, readOnly: props.readOnly });

    const inputRef = React.useRef<HTMLInputElement>(null);
    const [overflowActive, setOverflowActive] = React.useState<boolean>(false);
    const [tooltipVisible, setTooltipVisible] = React.useState<boolean>(false);

    React.useEffect(() => {
      if (checkOverflow(inputRef.current)) {
        setOverflowActive(true);
        return;
      }
      setOverflowActive(false);
    }, [tooltipVisible, inputRef.current, setOverflowActive]);

    React.useLayoutEffect(() => {
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
    }, [setTooltipVisible, innerContainerRef.current, inputRef.current]);

    const iconArray = React.Children.toArray(icons);

    if (!props.readOnly && displayClearIcon) {
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
          dimension={props.dimension}
          ref={refSetter(innerContainerRef, containerRef)}
          data-read-only={props.readOnly ? true : undefined}
          data-status={status}
          data-disable-copying={props.disableCopying ? true : undefined}
          onMouseDown={props.disableCopying ? preventDefault : undefined}
          skeleton={skeleton}
        >
          {!!prefix && (
            <PrefixContainer dimension={props.dimension} disabled={props.disabled}>
              {prefix}
            </PrefixContainer>
          )}
          <Input ref={refSetter(ref, inputRef)} {...props} placeholder={placeholder} iconCount={iconCount} />
          <BorderedDiv />
          {iconCount > 0 && (
            <IconPanel disabled={props.disabled} dimension={props.dimension}>
              {iconArray}
            </IconPanel>
          )}
          {!!suffix && (
            <SuffixContainer dimension={props.dimension} disabled={props.disabled}>
              {suffix}
            </SuffixContainer>
          )}

          {children}
        </Container>
        {showTooltip && tooltipVisible && overflowActive && (
          <Tooltip renderContent={() => inputRef?.current?.value || ''} targetRef={innerContainerRef} />
        )}
      </>
    );
  },
);

InputEx.defaultProps = {
  dimension: 'm',
} as const;

InputEx.displayName = 'InputEx';
