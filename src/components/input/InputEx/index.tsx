import {
  Children,
  Fragment,
  cloneElement,
  forwardRef,
  isValidElement,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';
import type { ReactNode, ChangeEvent, MouseEvent, RefObject, ReactElement } from 'react';
import styled, { css, type DataAttributes } from 'styled-components';

import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import type { ComponentDimension, ExtraProps, InputStatus } from '#src/components/input/types';
import { containerHeights, skeletonMixin } from '#src/components/input/Container';
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
import type { TextInputProps } from '#src/components/input/TextInput';
import { BorderedDivStyles, InputBorderedDiv } from '#src/components/input/TextInput';
import type { DropMenuComponentProps, DropMenuStyleProps } from '#src/components/DropMenu';

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

  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});

  &&&:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  &&&:user-invalid + ${InputBorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  &&&:user-invalid:hover:not(:disabled) + ${InputBorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error70, ${(p) => p.theme.color['Error/Error 70']});
  }

  &&&:user-invalid:focus:not(:disabled) + ${InputBorderedDiv} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  ${ieFixes}

  &&&:disabled {
    cursor: not-allowed;
  }
`;

const prefixsuffixMixin = css<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])};
  color: ${({ disabled, theme }) =>
    disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`};
  white-space: nowrap;

  [data-disable-copying] & {
    cursor: default;
  }

  [data-read-only] & {
    pointer-events: none;
    user-select: none;
  }
`;

const PrefixContainer = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  align-self: center;
  border-right: solid 1px var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  padding-right: 8px;
  margin-right: 8px;
  ${prefixsuffixMixin}
`;

const SuffixContainer = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  align-self: center;
  border-left: solid 1px var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  padding-left: 8px;
  margin-left: 8px;
  ${prefixsuffixMixin}
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
      outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
    }
  }
`;
const IconPanelBefore = styled(IconPanel)`
  margin-right: 8px;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;
const IconPanelAfter = styled(IconPanel)`
  margin-left: 8px;
  & > *:not(:first-child) {
    margin-left: 8px;
  }
`;

const preventDefault = (e: MouseEvent) => e.preventDefault();

// Разворачиваем вложенные массивы и React.Fragment, чтобы корректно посчитать количество иконок.
// Дополнительно гарантируем наличие уникальных key у элементов без собственного key.
function flattenChildren(children: ReactNode): ReactElement[] {
  const result: ReactElement[] = [];

  const traverse = (nodes: ReactNode) => {
    Children.forEach(nodes, (child, index) => {
      if (!child) return;

      if (Array.isArray(child)) {
        traverse(child);
        return;
      }

      if (isValidElement(child) && child.type === Fragment) {
        if (child.props && child.props.children) {
          traverse(child.props.children);
        }
        return;
      }

      if (isValidElement(child)) {
        result.push(child.key != null ? child : cloneElement(child, { key: `flattened-${index}` }));
      }
    });
  };

  traverse(children);
  return result;
}

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
  border-radius: ${(p) =>
    p.$skeleton ? 0 : `var(--admiral-border-radius-Medium, ${mediumGroupBorderRadius(p.theme.shape)})`};
  padding: 0 ${horizontalPaddingValue}px;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});

  &[data-read-only],
  &[data-disabled] {
    background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
  }

  ${containerHeights}
  ${({ $skeleton }) => $skeleton && skeletonMixin};
  ${BorderedDivStyles}
  ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : '')}
`;

export interface RenderProps {
  value?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface InputExProps
  extends Omit<TextInputProps, 'isLoading' | 'handleInput' | 'prefix' | 'containerPropsConfig'>,
    Pick<DropMenuComponentProps, 'targetElement'> {
  /**
   * @deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
   * Взамен используйте параметры prefixDropContainerStyle.menuWidth и
   * suffixDropContainerStyle.menuWidth.
   *
   * Ширина меню */
  menuWidth?: string;

  /**
   * @deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
   * Взамен используйте параметр targetElement.
   *
   * Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,
   * если не указан, выравнивание произойдет относительно контейнера компонента
   **/
  alignDropRef?: RefObject<HTMLElement>;

  /** Значение префикса */
  prefixValue?: ReactNode;

  /** Список значений префикса */
  prefixValueList?: ReactNode[];

  /** Срабатывает при выборе нового значения префикса*/
  onPrefixValueChange?: (value: ReactNode) => void;

  /** Специальный метод для рендера компонента по значению префикса */
  renderPrefixValue?: (props: RenderProps) => ReactNode;

  /** Специальный метод для рендера опции списка префикса по значению */
  renderPrefixOption?: (props: RenderPropsType<ReactNode> & MenuItemProps) => ReactNode;

  /** Значение суффикса */
  suffixValue?: ReactNode;

  /** Список значений суффикса */
  suffixValueList?: ReactNode[];

  /** Срабатывает при выборе нового значения суффикса */
  onSuffixValueChange?: (value: ReactNode) => void;

  /** Специальный метод для рендера компонента по значению суффикса*/
  renderSuffixValue?: (props: RenderProps) => ReactNode;

  /** Специальный метод для рендера опции списка суффикса по значению */
  renderSuffixOption?: (props: RenderPropsType<ReactNode> & MenuItemProps) => ReactNode;

  /**
   * @deprecated Помечено как deprecated в версии 4.8.0, будет удалено в 9.x.x версии.
   * Взамен используйте columnsButtonDropContainerStyle.dropContainerCssMixin
   *
   * Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css
   **/
  dropContainerCssMixin?: ReturnType<typeof css>;
  /** Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок  */
  prefixDropContainerStyle?: Omit<DropMenuStyleProps, 'alignSelf'>;
  /** Позволяет добавлять стили и className для выпадающего меню кнопки настроек  */
  suffixDropContainerStyle?: Omit<DropMenuStyleProps, 'alignSelf'>;

  /** Конфиг функция пропсов для кнопки очистки поля. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  clearInputIconButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton>> & DataAttributes;

  /** Конфиг функция пропсов для контейнера в котором находится input. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  containerPropsConfig?: (
    props: React.ComponentProps<typeof Container>,
  ) => Partial<React.ComponentProps<typeof Container>> & DataAttributes;
}

export const InputEx = forwardRef<HTMLInputElement, InputExProps>(
  (
    {
      dimension = 'm',
      menuWidth,
      displayClearIcon,
      status,
      containerRef = () => null,
      alignDropRef,
      targetElement,
      icons,
      iconsBefore,
      iconsAfter,
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
      clearInputIconButtonPropsConfig = () => {},
      containerPropsConfig = () => {},
      ...props
    },
    ref,
  ) => {
    const innerContainerRef = useRef<HTMLDivElement | null>(null);
    const targetNode = targetElement || alignDropRef?.current || innerContainerRef.current;
    const menuDimension = dimension === 'xl' ? 'l' : dimension;
    const renderPrefix = prefixValueList
      ? (props: RenderProps) => (
          <SuffixSelect
            alignSelf="flex-start"
            dimension={menuDimension}
            menuWidth={menuWidth || prefixDropContainerStyle?.menuWidth}
            menuMaxHeight={prefixDropContainerStyle?.menuMaxHeight}
            targetElement={targetNode}
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
            alignSelf="flex-end"
            dimension={menuDimension}
            menuWidth={menuWidth || suffixDropContainerStyle?.menuWidth}
            menuMaxHeight={suffixDropContainerStyle?.menuMaxHeight}
            targetElement={targetNode}
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInnerValueState(e.currentTarget.value);
      props.onChange?.(e);
    };

    const iconAfterArray = flattenChildren(iconsAfter || icons);
    const iconBeforeArray = flattenChildren(iconsBefore);

    if (!props.readOnly && displayClearIcon && !!innerValue) {
      const clearInputIconButtonProps = {
        key: 'clear-icon',
        icon: CloseOutlineSvg,
        onClick: () => {
          if (inputRef.current) {
            changeInputData(inputRef.current, { value: '' });
          }
        },
        'aria-hidden': true,
      };

      iconAfterArray.unshift(
        <InputIconButton
          {...clearInputIconButtonProps}
          {...clearInputIconButtonPropsConfig(clearInputIconButtonProps)}
        />,
      );
    }

    const iconsAfterCount = iconAfterArray.length;
    const iconsBeforeCount = iconBeforeArray.length;

    const containerProps = {
      className,
      style,
      'data-disabled': props.disabled ? true : undefined,
      $dimension: dimension,
      ref: refSetter(innerContainerRef, containerRef),
      'data-read-only': props.readOnly ? true : undefined,
      'data-status': status,
      'data-disable-copying': props.disableCopying ? true : undefined,
      onMouseDown: props.disableCopying ? preventDefault : undefined,
      $skeleton: skeleton,
      $status: status,
      disabled: props.disabled,
      readOnly: props.readOnly,
    };

    return (
      <>
        <Container {...containerProps} {...containerPropsConfig(containerProps)}>
          {!!prefix && (
            <PrefixContainer $dimension={dimension} disabled={props.disabled}>
              {prefix}
            </PrefixContainer>
          )}
          {iconsBeforeCount > 0 && (
            <IconPanelBefore disabled={props.disabled} $dimension={dimension}>
              {iconBeforeArray}
            </IconPanelBefore>
          )}
          <Input
            ref={refSetter(ref, inputRef)}
            {...props}
            onChange={handleChange}
            placeholder={placeholder}
            $iconsAfterCount={iconsAfterCount}
            $iconsBeforeCount={iconsBeforeCount}
            $dimension={dimension}
          />
          <InputBorderedDiv $status={status} disabled={props.disabled || props.readOnly} />
          {iconsAfterCount > 0 && (
            <IconPanelAfter disabled={props.disabled} $dimension={dimension}>
              {iconAfterArray}
            </IconPanelAfter>
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

InputEx.displayName = 'InputEx';
