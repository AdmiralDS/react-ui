import * as React from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { ThemeContext } from 'styled-components';
import { ReactComponent as SearchOutlineSVG } from '@admiral-ds/icons/build/system/SearchOutline.svg';
import { LIGHT_THEME } from '#src/components/themes';
import { keyboardKey } from '#src/components/common/keyboardKey';
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

const SuggestDropdownContainer = styled(StyledDropdownContainer)`
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 100%;
`;

export interface SuggestItem {
  searchText: string;
}

export interface SuggestInputProps extends Omit<TextInputProps, 'value'> {
  value?: string;

  /** Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода) */
  onOptionSelect?: (value: string) => void;

  /** Список вариантов для отображения в опциях */
  options?: string[];

  /** Референс на контейнер для правильного позиционирования выпадающего списка */
  portalTargetRef?: React.RefObject<HTMLElement>;

  /** Обработчик клика по кнопке поиска */
  onSearchButtonClick?: React.MouseEventHandler<SVGSVGElement>;

  /**
   * Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
   * Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)
   */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Задает максимальную высоту контейнера с опциями */
  dropMaxHeight?: string | number;

  /** Компонент для отображения альтернативной иконки */
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  /** Статус поля */
  status?: InputStatus;

  /** Формат подсветки, 'word' или 'wholly' */
  highlightFormat?: HighlightFormat;

  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Текст сообщения при отсутствии вариантов для подстановки */
    emptyMessage?: React.ReactNode;
  };

  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const SuggestInput = React.forwardRef<HTMLInputElement, SuggestInputProps>(
  (
    {
      isLoading,
      onOptionSelect,
      alignDropdown = 'stretch',
      dropMaxHeight,
      dropContainerCssMixin,
      onSearchButtonClick = () => undefined,
      icons,
      icon = SearchOutlineSVG,
      skeleton = false,
      status,
      highlightFormat,
      locale,
      dimension = TextInput.defaultProps?.dimension || 'xl',
      ...props
    },
    ref,
  ) => {
    const theme = React.useContext(ThemeContext) || LIGHT_THEME;
    const isControlledComponentValue = undefined !== props.value;
    const { options, portalTargetRef } = props;

    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [isSuggestPanelOpen, setIsSuggestPanelOpen] = React.useState<boolean>(false);
    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    const [activeOption, setActiveOption] = React.useState<string | undefined>('');

    const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

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

    React.useEffect(() => {
      if (options) {
        setIsSuggestPanelOpen(isFocused);
      }
    }, [isFocused, options]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(e);

      // prevent submit form on Enter press when selection is available
      if (code === keyboardKey.Enter && isSuggestPanelOpen) {
        e.preventDefault();
      }

      // prevent selecting option on Space press when Menu is opened
      if (code === keyboardKey[' '] && isSuggestPanelOpen) {
        e.stopPropagation();
      }
    };

    const [blurTrigger, triggerDelayedBlur] = React.useState<undefined | unknown>();

    React.useEffect(() => {
      if (blurTrigger) {
        const timeoutID = setTimeout(() => setIsFocused(false), 200);
        return () => clearTimeout(timeoutID);
      }
    }, [blurTrigger, setIsFocused]);

    React.useEffect(() => {
      function onInputChange(this: HTMLInputElement) {
        if (!props.onInput) forceUpdate();
      }

      if (inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', onInputChange);
        return () => {
          node.removeEventListener('input', onInputChange);
        };
      }
    }, [props.onInput]);

    const iconArray = React.Children.toArray(icons);

    if (!props.readOnly) {
      iconArray.push(<InputIconButton icon={icon} onClick={onSearchButtonClick} aria-hidden />);
    }

    const emptyAtLoading: boolean = (options || []).length === 0 && !!isLoading;

    const model = React.useMemo(() => {
      if (options) {
        return options.map((text, index) => ({
          id: text,
          render: (options: RenderOptionProps) => (
            <SuggestPanel
              key={index}
              text={text}
              searchText={props.value || inputRef.current?.value || ''}
              highlightFormat={highlightFormat}
              dimension={menuDimension}
              {...options}
            />
          ),
        }));
      } else {
        return [];
      }
    }, [options, dimension, props.value, inputRef.current?.value]);

    React.useEffect(() => {
      if (isSuggestPanelOpen) {
        setActiveOption(options ? options[0] : '');
      }
    }, [options, isSuggestPanelOpen]);

    return (
      <TextInput
        {...props}
        ref={refSetter(ref, inputRef)}
        icons={iconArray}
        status={status}
        skeleton={skeleton}
        isLoading={isLoading}
        dimension={dimension}
        showTooltip={!isSuggestPanelOpen && !skeleton}
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
      >
        {options && isSuggestPanelOpen && !skeleton && !emptyAtLoading && (
          <SuggestDropdownContainer
            targetRef={portalTargetRef || inputRef}
            alignSelf={alignDropdown}
            data-dimension={dimension}
            dropContainerCssMixin={dropContainerCssMixin}
          >
            {options.length === 0 && !isLoading ? (
              <MessagePanel>
                {locale?.emptyMessage || theme.locales[theme.currentLocale].suggestInput.emptyMessage}
              </MessagePanel>
            ) : (
              <Menu
                model={model}
                dimension={menuDimension}
                maxHeight={dropMaxHeight}
                active={activeOption}
                onActivateItem={setActiveOption}
                onSelectItem={handleOptionSelect}
              />
            )}
          </SuggestDropdownContainer>
        )}
      </TextInput>
    );
  },
);

SuggestInput.displayName = 'SuggestInput';
