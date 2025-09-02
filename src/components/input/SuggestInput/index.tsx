import type { FunctionComponent, MouseEventHandler, KeyboardEvent, ReactNode, RefObject, SVGProps } from 'react';
import { forwardRef, useEffect, useReducer, useRef, useState, useMemo, Children } from 'react';
import styled, { useTheme, type DataAttributes } from 'styled-components';

import { ReactComponent as SearchOutlineSVG } from '@admiral-ds/icons/build/system/SearchOutline.svg';
import { LIGHT_THEME } from '#src/components/themes';
import { keyboardKey } from '../../common/keyboardKey';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';
import { InputIconButton } from '#src/components/InputIconButton';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { Menu } from '#src/components/Menu';
import type { MenuDimensions } from '#src/components/Menu';
import type { HighlightFormat } from '#src/components/common/utils/getTextHighlightMeta';
import type { InputStatus } from '#src/components/input/types';
import type { TextInputProps } from '#src/components/input/TextInput';
import { TextInput } from '#src/components/input/TextInput';
import { MessagePanel } from '#src/components/input/SuggestInput/MessagePanel';
import { SuggestPanel } from '#src/components/input/SuggestInput/SuggestPanel';
import type { DropMenuComponentProps, DropMenuStyleProps } from '#src/components/DropMenu';

const SuggestDropdownContainer = styled(StyledDropdownContainer)`
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 100%;
  padding: 8px 0;
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
`;

export interface SuggestItem {
  searchText: string;
}

export interface SuggestInputProps
  extends Omit<TextInputProps, 'value' | 'iconsBefore'>,
    Omit<DropMenuStyleProps, 'menuWidth'>,
    Pick<DropMenuComponentProps, 'targetElement'> {
  value?: string;

  /** Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода) */
  onOptionSelect?: (value: string) => void;

  /** Список вариантов для отображения в опциях */
  options?: string[];

  /**
   * @deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
   * Взамен используйте параметр targetElement.
   *
   * Референс на контейнер для правильного позиционирования выпадающего списка
   **/
  portalTargetRef?: RefObject<HTMLElement>;

  /** Обработчик клика по кнопке поиска */
  onSearchButtonClick?: MouseEventHandler<SVGSVGElement>;

  /**
   * @deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
   * Взамен используйте alignSelf
   *
   * Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
   * Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)
   **/
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /**
   * @deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
   * Взамен используйте menuMaxHeight.
   *
   * Задает максимальную высоту контейнера с опциями */
  dropMaxHeight?: string | number;

  /** Компонент для отображения альтернативной иконки */
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;

  /** Статус поля */
  status?: InputStatus;

  /** Формат подсветки, 'word' или 'wholly' */
  highlightFormat?: HighlightFormat;

  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Текст сообщения при отсутствии вариантов для подстановки */
    emptyMessage?: ReactNode;
  };

  /** Конфиг функция пропсов для кнопки "Поиск". На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  inputIconButtonPropsConfig?: (
    props: React.ComponentProps<typeof InputIconButton>,
  ) => Partial<React.ComponentProps<typeof InputIconButton>> & DataAttributes;
}

export const SuggestInput = forwardRef<HTMLInputElement, SuggestInputProps>(
  (
    {
      options,
      isLoading,
      onOptionSelect,
      alignDropdown,
      dropMaxHeight,
      alignSelf = 'stretch',
      menuMaxHeight,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      onSearchButtonClick = () => undefined,
      icons,
      iconsAfter,
      icon = SearchOutlineSVG,
      skeleton = false,
      showTooltip,
      highlightFormat,
      locale,
      dimension = 'm',
      portalTargetRef,
      targetElement,
      inputIconButtonPropsConfig = () => {},
      ...props
    },
    ref,
  ) => {
    const theme = useTheme() || LIGHT_THEME;
    const isControlledComponentValue = undefined !== props.value;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const targetNode = targetElement || portalTargetRef?.current || inputRef.current;
    const [isSuggestPanelOpen, setIsSuggestPanelOpen] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [activeOption, setActiveOption] = useState<string | undefined>('');
    const [searchText, setSearchText] = useState<string>(props.value || '');
    const currentSearchText = props.value ?? searchText;

    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    const menuDimension: MenuDimensions = dimension === 'xl' ? 'l' : dimension;

    const handleOptionSelect = (option: string) => {
      onOptionSelect?.(option);

      if (!isControlledComponentValue && inputRef.current) {
        const cursorPosition = option.length;
        changeInputData(inputRef.current, {
          value: option,
          selectionStart: cursorPosition,
          selectionEnd: cursorPosition,
        });
      }

      setIsSuggestPanelOpen(false);
    };

    useEffect(() => {
      if (options) {
        setIsSuggestPanelOpen(isFocused);
      }
    }, [isFocused, options]);

    const handleKeyDown = (e: KeyboardEvent) => {
      const code = keyboardKey.getCode(e);

      // prevent submit form on Enter press when selection is available
      if (code === keyboardKey.Enter && isSuggestPanelOpen) {
        e.preventDefault();
      }
    };

    const [blurTrigger, triggerDelayedBlur] = useState<undefined | unknown>();

    useEffect(() => {
      if (blurTrigger) {
        const timeoutID = setTimeout(() => setIsFocused(false), 200);
        return () => clearTimeout(timeoutID);
      }
    }, [blurTrigger, setIsFocused]);

    useEffect(() => {
      function onInputChange(this: HTMLInputElement) {
        if (!props.onInput && !props.onChange) forceUpdate();
      }

      if (inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', onInputChange);
        return () => {
          node.removeEventListener('input', onInputChange);
        };
      }
    }, [props.onInput, props.onChange]);

    const iconArray = Children.toArray(iconsAfter || icons);

    if (!props.readOnly) {
      const inputIconButtonProps = { icon: icon, onClick: onSearchButtonClick, 'aria-hidden': true };

      iconArray.push(
        <InputIconButton {...inputIconButtonProps} {...inputIconButtonPropsConfig(inputIconButtonProps)} />,
      );
    }

    const emptyAtLoading: boolean = (options || []).length === 0 && !!isLoading;

    const model = useMemo(() => {
      if (options) {
        return options.map((text, index) => ({
          id: text,
          render: (options: RenderOptionProps) => (
            <SuggestPanel
              key={index}
              text={text}
              searchText={currentSearchText}
              highlightFormat={highlightFormat}
              dimension={menuDimension}
              {...options}
            />
          ),
        }));
      } else {
        return [];
      }
    }, [options, dimension, currentSearchText]);

    useEffect(() => {
      if (isSuggestPanelOpen) {
        setActiveOption(options ? options[0] : '');
      }
    }, [options, isSuggestPanelOpen]);

    return (
      <TextInput
        {...props}
        ref={refSetter(ref, inputRef)}
        iconsAfter={iconArray}
        skeleton={skeleton}
        isLoading={isLoading}
        dimension={dimension}
        showTooltip={!isSuggestPanelOpen && !skeleton && showTooltip}
        onKeyDown={(...p) => {
          props.onKeyDown?.(...p);
          handleKeyDown(...p);
        }}
        onFocus={(...p) => {
          props.onFocus?.(...p);
          setIsFocused(true);
        }}
        onBlur={(...p) => {
          props.onBlur?.(...p);
          triggerDelayedBlur({});
        }}
        onChange={(e) => {
          props.onChange?.(e);
          setSearchText(e.currentTarget.value);
        }}
      >
        {options && isSuggestPanelOpen && !skeleton && !emptyAtLoading && !props.readOnly && (
          <SuggestDropdownContainer
            targetElement={targetNode}
            alignSelf={alignDropdown || alignSelf}
            data-dimension={dimension}
            dropContainerCssMixin={dropContainerCssMixin}
            className={dropContainerClassName}
            style={dropContainerStyle}
          >
            {options.length === 0 && !isLoading ? (
              <MessagePanel dimension={menuDimension}>
                {locale?.emptyMessage || theme.locales[theme.currentLocale].suggestInput.emptyMessage}
              </MessagePanel>
            ) : (
              <Menu
                model={model}
                dimension={menuDimension}
                maxHeight={dropMaxHeight || menuMaxHeight}
                active={activeOption}
                onActivateItem={setActiveOption}
                onSelectItem={handleOptionSelect}
                preventFocusSteal
                disableSelectionOnSpace
              />
            )}
          </SuggestDropdownContainer>
        )}
      </TextInput>
    );
  },
);

SuggestInput.displayName = 'SuggestInput';
