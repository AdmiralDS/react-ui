import type { ForwardedRef, ReactNode, TextareaHTMLAttributes, MouseEvent } from 'react';
import { forwardRef, useRef, Children, useLayoutEffect, useState, useCallback, useMemo } from 'react';
import styled, { css, useTheme } from 'styled-components';
import type { DataAttributes } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import type { CustomInputHandler, InputData } from '#src/components/common/dom/changeInputData';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { ComponentDimension, ExtraProps, InputStatus } from '#src/components/input/types';
import { typography } from '#src/components/Typography';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { ReactComponent as CopyOutlineSvg } from '@admiral-ds/icons/build/documents/CopyOutline.svg';
import type { AnyIconProps } from '#src/components/InputIconButton';
import { InputIconButton } from '#src/components/InputIconButton';
import { Container } from '../Container';
import { hideNativeScrollbarsCss, Scrollbars } from '#src/components/Scrollbar';
import { TooltipHoc } from '#src/components/TooltipHOC';

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
const verticalPaddingValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
    case 'xl':
      return 14;
    case 'm':
      return 6;
    case 's':
      return 4;
    default:
      return 6;
  }
};
const horizontalPaddingValue = (props: { $dimension?: ComponentDimension }) => {
  switch (props.$dimension) {
    case 'xl':
    case 'm':
      return 14;
    case 's':
      return 10;
    default:
      return 14;
  }
};

const extraPadding = css<ExtraProps>`
  padding-right: ${(props) =>
    horizontalPaddingValue(props) + (props.$iconsAfterCount ? iconSizeValue(props) + 8 : 0)}px;
`;

const disabledColors = css`
  background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
  border-color: transparent;
`;

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
  border: 1px solid var(--admiral-color-Neutral_Neutral40, ${(p) => p.theme.color['Neutral/Neutral 40']});
  border-radius: inherit;

  [data-status='error'] &&& {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  [data-status='success'] &&& {
    border: 1px solid var(--admiral-color-Success_Success50Main, ${(p) => p.theme.color['Success/Success 50 Main']});
  }

  [data-read-only] &&& {
    border-color: transparent;
  }
`;

const colorsBorderAndBackground = css<{ disabled?: boolean }>`
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});

  &:focus + ${BorderedDiv} {
    border: 2px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  }

  &&&:disabled + ${BorderedDiv}, [data-read-only] &&& + ${BorderedDiv} {
    border-color: transparent;
  }

  &:hover:not(:focus) + ${BorderedDiv} {
    border-color: ${(p) =>
      p.disabled ? 'transparent' : `var(--admiral-color-Neutral_Neutral60, ${p.theme.color['Neutral/Neutral 60']})`};
  }

  &:user-invalid + ${BorderedDiv}, &:user-invalid:hover + ${BorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  [data-status='error']
    &&&:hover:not(:disabled)
    + ${BorderedDiv},
    &:user-invalid:hover:not(:disabled)
    + ${BorderedDiv} {
    border: 1px solid var(--admiral-color-Error_Error70, ${(p) => p.theme.color['Error/Error 70']});
  }

  [data-status='success'] &&&:hover:not(:disabled) + ${BorderedDiv} {
    border: 1px solid var(--admiral-color-Success_Success60, ${(p) => p.theme.color['Success/Success 60']});
  }

  [data-status='error']
    &&&:focus:not(:disabled)
    + ${BorderedDiv},
    &:user-invalid:focus:not(:disabled)
    + ${BorderedDiv} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }

  [data-status='success'] &&&:focus:not(:disabled) + ${BorderedDiv} {
    border: 2px solid var(--admiral-color-Success_Success50Main, ${(p) => p.theme.color['Success/Success 50 Main']});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${disabledColors}
  }

  [data-read-only] &&&:hover + ${BorderedDiv}, [data-read-only] &&&:focus + ${BorderedDiv} {
    border-color: transparent;
  }
`;

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

const textBlockStyleMixin = css<TextBlockProps>`
  outline: none;
  appearance: none;
  border-radius: inherit;
  border: none;
  box-sizing: border-box;
  padding: ${verticalPaddingValue}px ${horizontalPaddingValue}px;
  overflow-wrap: break-word;

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  ${colorsBorderAndBackground}
  ${extraPadding}
`;

const Text = styled.textarea<ExtraProps & { $resizable?: boolean; $minHeight?: number; $maxHeight?: number }>`
  ${hideNativeScrollbarsCss}
  // Этот margin обеспечивает отступ в режиме resizable, предотвращая перекрытие drag handle border'ом,
  // который создается с помощью BorderedDiv. Значение margin вычитается из padding.
  margin: 2px;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 4px); /* минус margin*2 */
  height: calc(100% - 4px);

  /* ограничиваем размеры для ручного ресайза и autoheight */
  ${(p) => (p.$minHeight ? `min-height: ${p.$minHeight}px;` : '')}
  ${(p) => (p.$maxHeight && p.$maxHeight !== Infinity ? `max-height: ${p.$maxHeight}px;` : '')}

  resize: ${(p) => (p.$resizable && !p.$autoHeight ? 'vertical' : 'none')};

  flex: 1 1 auto;
  min-width: 10px;
  background: transparent;

  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  &:disabled::placeholder,
  &:disabled {
    cursor: not-allowed;
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  ${textBlockStyleMixin}
  ${ieFixes}
`;

const IconPanel = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: ${horizontalPaddingValue}px;
  padding-top: ${verticalPaddingValue}px;

  & > * {
    display: block;
    width: ${iconSizeValue}px;
    height: ${iconSizeValue}px;
  }
`;

function defaultHandleInput(newInputData: InputData): InputData {
  return newInputData;
}

const stopEvent = (e: MouseEvent) => e.preventDefault();

interface TextBlockProps extends ExtraProps {
  disabled?: boolean;
}

const textAreaHeight = (rows: number | typeof Infinity, $dimension?: ComponentDimension) => {
  if (rows === 0 || rows === Infinity) return rows;
  const textAreaLineHeight = $dimension === 's' ? 20 : 24;
  return rows * textAreaLineHeight + 2 * verticalPaddingValue({ $dimension });
};

const StyledContainer = styled(Container)<{
  $autoHeight: boolean;
  $resizable: boolean;
  $rows: number;
  $minHeight?: number;
  $maxHeight?: number;
  $dimension: ComponentDimension;
  disabled?: boolean;
}>`
  min-height: ${(p) => textAreaHeight(p.$rows, p.$dimension) + 4}px;
  ${(p) => (p.$minHeight ? `min-height: ${p.$minHeight + 4}px;` : '')}
  ${(p) => (p.$maxHeight && p.$maxHeight !== Infinity ? `max-height: ${p.$maxHeight + 4}px;` : '')}
  ${(p) => (p.$autoHeight || p.$resizable ? '' : `height: ${textAreaHeight(p.$rows, p.$dimension) + 4}px;`)}
  ${(p) => (p.disabled ? 'cursor: not-allowed;' : '')}
`;

const CopyIconButton = forwardRef<HTMLDivElement, AnyIconProps>((props, ref) => {
  return (
    <div ref={ref}>
      <InputIconButton {...props} />
    </div>
  );
});
const TooltipedInputIconButton = TooltipHoc(CopyIconButton);

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Максимальное количество символов для ввода */
  maxLength?: number;

  /** Высота компонента в количествах строк */
  rows?: number;

  /**
   * @deprecated Помечено как deprecated в версии 8.56.0, будет удалено в 10.x.x версии.
   * Взамен используйте autoHeight.maxRows
   *
   * Максимальная высота компонента в количествах строк
   **/
  maxRows?: number;

  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /**
   * @deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
   * Взамен используйте iconsAfter
   *
   * Иконки для отображения в правом углу поля
   **/
  icons?: ReactNode;

  /** Иконки для отображения в конце поля */
  iconsAfter?: ReactNode;

  /** Отображать иконку очистки поля */
  displayClearIcon?: boolean;

  /** Отображать иконку копирования содержимого поля */
  displayCopyIcon?: boolean;

  /** Статус поля */
  status?: InputStatus;

  /** Ref контейнера компонента */
  containerRef?: ForwardedRef<HTMLDivElement>;

  /**
   * Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
   * Используется для создания масок ввода
   */
  handleInput?: CustomInputHandler;

  /**  Наличие этого атрибута отключает возможность выделения и копирования значения поля */
  disableCopying?: boolean;

  /**  Включает автоматическое изменение высоты компонента в зависимости от количества текста */
  autoHeight?: boolean | { minRows?: number; maxRows?: number };

  /** Включает возможность ручного изменения высоты textarea */
  resizable?: boolean;

  /** Состояние skeleton */
  skeleton?: boolean;

  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Надпись (тултип) для иконки копирования текста */
    copyTextMessage?: string;
    /** Надпись (тултип) для иконки копирования текста в течение 2 секунд после копирования */
    copiedMessage?: string;
  };
  /** Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  clearIconPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton> & DataAttributes>;
  /** Конфиг функция пропсов для кнопки копирования текста. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  copyIconPropsConfig?: (
    props: React.ComponentProps<typeof TooltipedInputIconButton>,
  ) => Partial<React.ComponentProps<typeof TooltipedInputIconButton> & DataAttributes>;
}

const nothing = () => {};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      rows = 3,
      maxRows,
      value,
      defaultValue,
      displayClearIcon,
      displayCopyIcon,
      status,
      handleInput = defaultHandleInput,
      containerRef,
      icons,
      iconsAfter,
      children,
      className,
      autoHeight,
      resizable = false,
      skeleton = false,
      dimension = 'm',
      disableCopying,
      locale,
      clearIconPropsConfig = nothing,
      copyIconPropsConfig = nothing,
      onChange,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme() || LIGHT_THEME;
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const localContainerRef = useRef<HTMLDivElement>(null);
    const [contentNode, setContentNode] = useState<HTMLTextAreaElement | null>(null);
    const copyText = locale?.copyTextMessage || theme.locales[theme.currentLocale]?.textArea?.copyTextMessage;
    const copiedText = locale?.copiedMessage || theme.locales[theme.currentLocale]?.textArea?.copiedMessage;
    const [tooltipText, setTooltipText] = useState(copyText);

    // Состояние для внутреннего значения в неконтроллируемом режиме
    const [internalValue, setInternalValue] = useState(defaultValue !== undefined ? String(defaultValue) : '');

    // Определяем, работает ли компонент в контроллируемом режиме
    const isControlled = value !== undefined;
    const currentValue = isControlled ? String(value) : internalValue;

    const handleClearIconClick = () => {
      if (inputRef.current) {
        changeInputData(inputRef.current, { value: '' });
        if (!isControlled) {
          setInternalValue('');
        }
      }
    };

    const handleCopyIconClick = () => {
      if (!document.hasFocus()) {
        window.focus();
      }
      if (inputRef.current) {
        navigator.clipboard.writeText(inputRef.current.value);
        setTooltipText(copiedText);
        setTimeout(() => setTooltipText(copyText), 2000);
      }
    };

    const handleIconMouseDown: React.MouseEventHandler<SVGSVGElement> = (e) => {
      e.preventDefault();
    };

    const clearIconProps = {
      icon: CloseOutlineSvg,
      onMouseDown: handleIconMouseDown,
      onClick: handleClearIconClick,
      'aria-hidden': true,
    } satisfies React.ComponentProps<typeof InputIconButton>;

    const copyIconProps = {
      tooltipDimension: 's',
      renderContent: () => tooltipText,
      icon: CopyOutlineSvg,
      onMouseDown: handleIconMouseDown,
      onClick: handleCopyIconClick,
      'aria-hidden': true,
    } satisfies React.ComponentProps<typeof TooltipedInputIconButton>;

    // Обработчик изменения значения
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!isControlled) {
          setInternalValue(event.target.value);
        }

        if (onChange) {
          onChange(event);
        }
      },
      [isControlled, onChange],
    );

    // Создаем массив иконок
    const iconArray = useMemo(() => {
      const array = Children.toArray(iconsAfter || icons);
      const hasValue = currentValue.length > 0;

      if (!props.readOnly && hasValue) {
        if (displayClearIcon) {
          array.unshift(
            <InputIconButton {...clearIconProps} {...clearIconPropsConfig(clearIconProps)} key="clear-icon" />,
          );
        } else if (displayCopyIcon) {
          array.unshift(
            <TooltipedInputIconButton {...copyIconProps} {...copyIconPropsConfig(copyIconProps)} key="copy-icon" />,
          );
        }
      }

      return array;
    }, [iconsAfter, icons, props.readOnly, currentValue, displayClearIcon, displayCopyIcon]);

    const iconCount = iconArray.length;

    // Обрабатываем inputData
    const inputData = useMemo(() => {
      return handleInput({ value: currentValue });
    }, [currentValue, handleInput]);

    useLayoutEffect(() => {
      function oninput(this: HTMLTextAreaElement) {
        const { value, selectionStart, selectionEnd } = this;
        const currentInputData = { value, selectionStart, selectionEnd };

        const inputData = handleInput(currentInputData);
        changeInputData(this, inputData);

        // Обновляем внутреннее состояние в неконтроллируемом режиме
        if (!isControlled) {
          setInternalValue(inputData.value || '');
        }
      }

      if (inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', oninput);

        const { value, selectionStart, selectionEnd } = node;
        const currentInputData = { value, selectionStart, selectionEnd };
        const inputData = handleInput(currentInputData);
        changeInputData(node, inputData);

        return () => {
          node.removeEventListener('input', oninput);
        };
      }
    }, [handleInput, isControlled]);

    // AutoHeight логика

    const [minRowsAutoheight, maxRowsAutoheight] = useMemo(() => {
      let min = 1;
      let max = Infinity;
      if (autoHeight) {
        if (typeof autoHeight === 'object') {
          if (autoHeight.minRows) {
            min = autoHeight.minRows;
          } else {
            min = 2;
          }
          if (autoHeight.maxRows) {
            max = autoHeight.maxRows;
          } else if (maxRows) {
            max = maxRows;
          }
        }
      } else if (!resizable && rows) {
        min = rows;
        max = rows;
      }

      return [textAreaHeight(min, dimension), textAreaHeight(max, dimension)];
    }, [autoHeight, resizable, maxRows, rows]);

    useLayoutEffect(() => {
      if (!inputRef.current || !localContainerRef.current) return;

      const node = inputRef.current;
      const container = localContainerRef.current;

      const recalcHeight = () => {
        if (autoHeight) {
          node.style.height = '0px';
          const natural = node.scrollHeight + 4;
          const cappedByMin = Math.max(natural, minRowsAutoheight);
          const finalHeight = Math.min(cappedByMin, maxRowsAutoheight);

          container.style.height = `${finalHeight}px`;
          if (natural > maxRowsAutoheight) {
            node.style.overflowY = '';
          } else {
            node.style.overflowY = 'hidden';
          }
          node.style.height = '';
        } else {
          container.style.height = `${node.offsetHeight + 4}px`;
        }
      };

      recalcHeight();

      const onInput = () => recalcHeight();
      node.addEventListener('input', onInput);

      const resizeObserver = new ResizeObserver(() => recalcHeight());
      resizeObserver.observe(container);
      resizeObserver.observe(node);

      return () => {
        node.removeEventListener('input', onInput);
        resizeObserver.disconnect();
      };
    }, [autoHeight, resizable, dimension, currentValue, minRowsAutoheight, maxRowsAutoheight]);

    return (
      <StyledContainer
        data-testid="textAreaWrapper"
        className={className}
        ref={refSetter(containerRef, localContainerRef)}
        data-read-only={props.readOnly ? true : undefined}
        data-status={status}
        $skeleton={skeleton}
        disabled={props.disabled}
        data-disable-copying={disableCopying ? true : undefined}
        $autoHeight={!!autoHeight}
        $resizable={resizable}
        $rows={rows}
        $minHeight={minRowsAutoheight}
        $maxHeight={maxRowsAutoheight}
        $dimension={dimension}
        {...(disableCopying && {
          onMouseDown: stopEvent,
        })}
      >
        <Text
          ref={refSetter(ref, inputRef, (node) => setContentNode(node))}
          {...props}
          $dimension={dimension}
          $iconsAfterCount={iconCount}
          $autoHeight={!!autoHeight}
          $resizable={resizable}
          $minHeight={minRowsAutoheight}
          $maxHeight={maxRowsAutoheight}
          value={inputData.value}
          onChange={handleChange}
        />
        <BorderedDiv />
        <Scrollbars contentNode={contentNode} />
        {iconCount > 0 && (
          <IconPanel disabled={props.disabled} $dimension={dimension}>
            {iconArray}
          </IconPanel>
        )}
        {children}
      </StyledContainer>
    );
  },
);

TextArea.displayName = 'TextArea';
