import * as React from 'react';
import { changeInputData } from '#/components/common/dom/changeInputData';
import { keyboardKey } from '#/components/common/keyboardKey';
import { refSetter } from '#/components/common/utils/refSetter';
import { typography } from '#/components/Typography';
import { ReactComponent as SearchOutlineSVG } from '@admiral-ds/icons/build/system/SearchOutline.svg';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { TextInput, TextInputProps } from '../TextInput';
import { Dropdown as DropComponent } from '#/components/Dropdown';
import { MessagePanel } from './MessagePanel';
import { SuggestPanel } from './SuggestPanel';
import { Spinner } from '#/components/Spinner';

const Dropdown = styled(DropComponent)`
  padding: 8px 0;
`;

const SearchIcon = styled(SearchOutlineSVG)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.tertiary};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.hover};
  }
`;

const SearchingPanelContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  ${typography['Additional/L']};

  [data-dimension='xl'] & {
    height: 48px;
    line-height: 48px;
  }

  [data-dimension='s'] & {
    height: 32px;
    ${typography['Additional/S']}
    line-height: 32px;
  }

  color: ${(p) => p.theme.color.text.secondary};
`;

const SearchTextContainer = styled.div`
  margin-left: 8px;
`;

const StyledDropDown = styled(Dropdown)<{ alignDropdown?: string; dropMaxHeight: string | number }>`
  padding: 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  ${(p) => (p.alignDropdown ? `align-self: ${p.alignDropdown}` : '')};
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

  /** Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода) */
  onOptionSelect?: (value: string) => void;

  /** Список вариантов для отображения в опциях */
  options?: string[];

  /** Референс на контейнер для правильного позиционирования выпадающего списка */
  portalTargetRef?: React.RefObject<HTMLElement>;

  /**
   * Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
   * Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)
   */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Задает максимальную высоту контейнера с опциями */
  dropMaxHeight?: string | number;
}

export const SuggestInput = React.forwardRef<HTMLInputElement, SuggestInputProps>(
  ({ isLoading, onOptionSelect, alignDropdown, dropMaxHeight = '300px', ...props }, ref) => {
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

    const loadingMessage = isLoading ? <SearchingPanel>Поиск совпадений</SearchingPanel> : 'Нет совпадений';

    const delayBlurEffect = React.useCallback(() => window.setTimeout(() => setIsFocused(false), 200), [setIsFocused]);

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

    return (
      <TextInput
        {...props}
        ref={refSetter(ref, inputRef)}
        icons={<SearchIcon />}
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
          delayBlurEffect();
        }}
      >
        {options && isSuggestPanelOpen && (
          <StyledDropDown
            targetRef={portalTargetRef || inputRef}
            alignDropdown={alignDropdown}
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
                  onClick={handleOptionClick}
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
