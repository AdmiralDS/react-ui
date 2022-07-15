import * as React from 'react';
import { HTMLAttributes } from 'react';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { typography } from '#src/components/Typography';
import { ReactComponent as SearchOutlineSVG } from '@admiral-ds/icons/build/system/SearchOutline.svg';
import styled from 'styled-components';
import { TextInput, TextInputProps } from '../TextInput';
import { Dropdown as DropComponent } from '#src/components/Dropdown';
import { MessagePanel } from './MessagePanel';
import { SuggestPanel } from './SuggestPanel';
import { Spinner } from '#src/components/Spinner';
import { InputIconButton } from '#src/components/InputIconButton';

const Dropdown = styled(DropComponent)`
  padding: 8px 0;
`;

const SearchingPanelContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  ${typography['Body/Body 1 Long']};

  [data-dimension='xl'] & {
    height: 48px;
    line-height: 48px;
  }

  [data-dimension='s'] & {
    height: 32px;
    ${typography['Body/Body 2 Long']}
    line-height: 32px;
  }

  color: ${(p) => p.theme.color['Neutral/Neutral 50']};
`;

const SearchTextContainer = styled.div`
  margin-left: 8px;
`;

const StyledDropDown = styled(Dropdown)<{ dropMaxHeight: string | number }>`
  padding: 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: ${(p) => p.dropMaxHeight};
  min-width: 100%;
`;

export const SearchingPanel: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <SearchingPanelContainer {...props}>
      <Spinner dimension="m" />
      <SearchTextContainer>{children}</SearchTextContainer>
    </SearchingPanelContainer>
  );
};

export interface SuggestItem {
  searchText: string;
}

export interface SuggestInputProps extends Omit<TextInputProps, 'value'> {
  value?: string;

  /** Отображать статус загрузки данных */
  isLoading?: boolean;

  /** Текст сообщения при загрузке вариантов для подстановки */
  isLoadingMessage?: string;

  /** Текст сообщения при отсутствии вариантов для подстановки */
  isEmptyMessage?: string;

  /** Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода) */
  onOptionSelect?: (value: string) => void;

  /** Список вариантов для отображения в опциях */
  options?: string[];

  /** Референс на контейнер для правильного позиционирования выпадающего списка */
  portalTargetRef?: React.RefObject<HTMLElement>;

  onSearchButtonClick?: React.MouseEventHandler<SVGSVGElement>;

  /**
   * Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
   * Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)
   */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Задает максимальную высоту контейнера с опциями */
  dropMaxHeight?: string | number;

  /**
   * Компонент для отображения альтернативной иконки
   */
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const SuggestInput = React.forwardRef<HTMLInputElement, SuggestInputProps>(
  (
    {
      isLoading,
      onOptionSelect,
      alignDropdown = 'stretch',
      dropMaxHeight = '300px',
      onSearchButtonClick = () => undefined,
      icons,
      icon = SearchOutlineSVG,
      isLoadingMessage = 'Поиск совпадений',
      isEmptyMessage = 'Нет совпадений',
      ...props
    },
    ref,
  ) => {
    const isControlledComponentValue = undefined !== props.value;
    const { options, portalTargetRef } = props;

    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isSuggestPanelOpen, setIsSuggestPanelOpen] = React.useState<boolean>(false);
    const [isFocused, setIsFocused] = React.useState<boolean>(false);

    const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

    const handleOptionSelect = () => {
      const value = options?.[activeIndex] || '';

      onOptionSelect?.(value);

      if (!isControlledComponentValue && inputRef.current) {
        const cursorPosition = value.length;
        changeInputData(inputRef.current, { value, selectionStart: cursorPosition, selectionEnd: cursorPosition });
      }

      setIsSuggestPanelOpen(false);
    };

    const handleOptionClick = (e: React.MouseEvent) => {
      e.preventDefault();
      handleOptionSelect();
    };

    React.useEffect(() => {
      if (options) {
        setIsSuggestPanelOpen(isFocused);
      }
    }, [isFocused, options]);

    const handleKeyUp = (e: React.KeyboardEvent) => {
      if (!options) return;
      switch (e.key) {
        case 'Enter':
          handleOptionSelect();
          break;
        case 'ArrowUp':
          if (activeIndex <= 0) {
            setActiveIndex(options.length - 1);
          } else {
            setActiveIndex(activeIndex - 1);
          }
          break;
        case 'ArrowDown':
          if (activeIndex >= options.length - 1) {
            setActiveIndex(0);
          } else {
            setActiveIndex(activeIndex + 1);
          }
          break;
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(e);

      // prevent submit form on Enter press when selection is available
      if (code === keyboardKey.Enter && isSuggestPanelOpen) {
        e.preventDefault();
      }
    };

    const loadingMessage = isLoading ? <SearchingPanel>{isLoadingMessage}</SearchingPanel> : isEmptyMessage;
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
    iconArray.push(<InputIconButton icon={icon} onClick={onSearchButtonClick} aria-hidden />);

    return (
      <TextInput
        {...props}
        ref={refSetter(ref, inputRef)}
        icons={!props.readOnly ? iconArray : undefined}
        onKeyUp={(...p) => {
          props.onKeyUp?.(...p);
          handleKeyUp(...p);
        }}
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
        {options && isSuggestPanelOpen && (
          <StyledDropDown
            targetRef={portalTargetRef || inputRef}
            alignSelf={alignDropdown}
            dropMaxHeight={dropMaxHeight}
            data-dimension={props.dimension || TextInput.defaultProps?.dimension}
          >
            {options.length === 0 ? (
              <MessagePanel>{loadingMessage}</MessagePanel>
            ) : (
              options.map((text, index) => (
                <SuggestPanel
                  key={index}
                  text={text}
                  active={index === activeIndex}
                  searchText={props.value || inputRef.current?.value || ''}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={handleOptionClick}
                  onKeyUp={handleKeyUp}
                />
              ))
            )}
          </StyledDropDown>
        )}
      </TextInput>
    );
  },
);

SuggestInput.displayName = 'SuggestInput';
