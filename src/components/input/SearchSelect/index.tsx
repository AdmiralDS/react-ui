import * as React from 'react';
import { OpenStatusButton } from '#/components/OpenStatusButton';
import { keyboardKey } from '#/components/common/keyboardKey';
import { refSetter } from '#/components/common/utils/refSetter';
import { TextInput } from '../TextInput';
import type { InputStatus, ComponentDimension } from '#/components/input/types';
import { DropDownSearchSelectProvider, ConstantSearchSelectProvider } from './useSearchSelectContext';
import { renderValueDefault } from './Option';
import type { IConstantOption, IDropdownOption, HighlightFormat } from './types';
import { MultipleSelectChips } from './MultipleSelectChips';
import {
  Dropdown,
  NativeSelect,
  ValueWrapper,
  Input,
  SelectWrapper,
  IconPanel,
  Hidden,
  ClearIcon,
  DropDownText,
  Placeholder,
} from './styled';
import { useClickOutside } from '#/components/common/hooks/useClickOutside';
import { StatusIcon } from '../StatusIcon';
import { scrollToNotVisibleELem, preventDefault } from './utils';
import { changeInputData } from '#/components/common/dom/changeInputData';

/**
 * Осталось сделать:
 * Активное состояние у крестика на чипсах по стрелкам
 * Проверить Перфоманс
 * Мобилка (isMobile)
 */

const DEFAULT_LOADING_TEXT = 'Поиск совпадений';

type PartialOption = { value: string; disabled: boolean } & Record<string, any>;
const findAbledOptionValue = (options: PartialOption[]) => options.find(({ disabled }) => !disabled)?.value;

const stopPropagation = (evt: React.BaseSyntheticEvent) => evt.stopPropagation();

export interface SearchSelectProps extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'onFocus' | 'onBlur'> {
  value?: string | string[];

  /** Отображать статус загрузки данных */
  isLoading?: boolean;

  /** Сообщение, отображаемое при наличии флага isLoading */
  loadingMessage?: string;

  /** Добавить селекту возможность множественного выбора */
  multiple?: boolean;

  /** По умолчанию, если в компоннет Option передан текст и только текст, то в зависимости от набранного в Input значения,
   * опции будут подсвечиваться. Описываемый флаг отключает это поведение. */
  defaultHighlighted?: boolean;

  /** По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его */
  showCheckbox?: boolean;

  /** Значение по умолчанию для некотролируемого селекта */
  defaultValue?: string | string[];

  displayStatusIcon?: boolean;

  displayClearIcon?: boolean;

  idleHeight?: 'full' | 'fixed';

  /** По умолчанию опции подсвечиваются отдельно по каждой разделенной пробелом части в поисковой строке. Данная опция
   * позволяет искать по строке целиком */
  highlightFormat?: HighlightFormat;

  /** Референс на контейнер для правильного позиционирования выпадающего списка */
  portalTargetRef?: React.RefObject<HTMLElement>;

  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Иконки для отображения в правом углу поля */
  icons?: React.ReactNode;

  /** Статус поля */
  status?: InputStatus;

  renderSelectValue?: (value: string | string[] | undefined, searchText: string) => React.ReactNode;

  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;

  onFocus?: (evt: React.FocusEvent<HTMLDivElement>) => void;

  onBlur?: (evt: React.FocusEvent<HTMLDivElement>) => void;
}

export const SearchSelect = React.forwardRef<HTMLSelectElement, SearchSelectProps>(
  (
    {
      value,
      isLoading,
      className,
      style,
      status,
      icons,
      portalTargetRef,
      disabled,
      placeholder,
      defaultValue,
      dimension = 'm',
      idleHeight = 'fixed',
      highlightFormat = 'word',
      multiple = false,
      defaultHighlighted = true,
      showCheckbox = true,
      displayStatusIcon = false,
      displayClearIcon = false,
      loadingMessage = DEFAULT_LOADING_TEXT,
      onInputChange,
      renderSelectValue,
      onFocus: onFocusFromProps,
      onBlur: onBlurFromProps,
      children,
      ...props
    },
    ref,
  ) => {
    const [localValue, setLocalValue] = React.useState(value ?? defaultValue);
    const [searchValue, setSearchValue] = React.useState('');
    const [hoverValue, setHoverValue] = React.useState('');
    const [shouldRenderSelectValue, setShouldRenderSelectValue] = React.useState(false);

    const [constantOptions, setConstantOptions] = React.useState<IConstantOption[]>([]);
    const [dropDownOptions, setDropDownOptions] = React.useState<IDropdownOption[]>([]);

    const [isSearchPanelOpen, setIsSearchPanelOpen] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);

    const selectIsUncontrolled = value === undefined;

    const selectedOption = React.useMemo(
      () => (multiple ? null : constantOptions.find((option) => option.value === localValue)),
      [multiple, constantOptions, localValue],
    );
    const selectedOptions = React.useMemo(
      () => (multiple ? constantOptions.filter((option) => localValue?.includes(option.value)) : []),
      [constantOptions, localValue, multiple],
    );

    const hoverOptionIndex = React.useMemo(
      () => dropDownOptions.findIndex((option) => option.value === hoverValue),
      [dropDownOptions, hoverValue],
    );

    const dropDownChildren = React.useMemo(() => {
      if (isLoading) return <DropDownText>{loadingMessage}</DropDownText>;
      return (
        <>
          {!dropDownOptions.length && <DropDownText>Нет совпадений</DropDownText>}
          {children}
        </>
      );
    }, [isLoading, loadingMessage, children, dropDownOptions]);

    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const selectRef = React.useRef<HTMLSelectElement | null>(null);
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const dropDownRef = React.useRef<HTMLDivElement | null>(null);

    const shouldFixHeight = idleHeight === 'fixed' && !isSearchPanelOpen && multiple;

    const renderSelectedOption = React.useCallback(() => selectedOption?.children, [selectedOption?.children]);

    const onConstantOptionMount = React.useCallback(
      (option: IConstantOption) => setConstantOptions((prev) => [...prev, option]),
      [],
    );

    const onConstantOptionUnMount = React.useCallback(
      (option: IConstantOption) =>
        setConstantOptions((prev) => prev.filter((prevOption) => prevOption.value !== option.value)),
      [],
    );

    const onDropDownOptionMount = React.useCallback(
      (option: IDropdownOption) => setDropDownOptions((prev) => [...prev, option]),
      [],
    );

    const onDropDownOptionUnMount = React.useCallback(
      (option: IDropdownOption) =>
        setDropDownOptions((prev) => prev.filter((prevOption) => prevOption.value !== option.value)),
      [],
    );

    const onCloseSelect = React.useCallback(() => {
      setIsSearchPanelOpen(false);
      setHoverValue(Array.isArray(localValue) ? localValue[0] : localValue || '');
      if (inputRef.current) changeInputData(inputRef.current, { value: '' });
      setShouldRenderSelectValue(true);
    }, [localValue]);

    const handleOptionSelect = React.useCallback(
      (optionValue: string) => {
        const selectElem = selectRef.current;

        if (!selectElem) return;

        const optionElems = Array.from(selectElem.options);
        const targetOptionElem = optionElems.find((option) => option.value === optionValue);

        if (!targetOptionElem) return;

        if (!multiple) optionElems.forEach((option) => (option.selected = false));

        targetOptionElem.selected = multiple ? !targetOptionElem.selected : true;
        selectElem.dispatchEvent(new Event('change', { bubbles: true }));

        if (!multiple) onCloseSelect();
      },
      [onCloseSelect, multiple],
    );

    const resetOptions = React.useCallback(() => {
      const selectElem = selectRef.current;

      if (!selectElem) return;

      selectElem.value = '';
      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
    }, []);

    const renderMultipleSelectValue = React.useCallback(
      () => (
        <MultipleSelectChips
          options={selectedOptions}
          shouldShowCount={shouldFixHeight}
          onChipRemove={handleOptionSelect}
          onChipClick={stopPropagation}
        />
      ),
      [selectedOptions, shouldFixHeight, handleOptionSelect, stopPropagation],
    );

    const renderPlaceholderDefault = React.useCallback(() => <Placeholder>{placeholder}</Placeholder>, [placeholder]);

    const handleSearchPanelToggle = () => {
      setIsSearchPanelOpen((prev) => !prev);
    };

    const onLocalInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (!multiple) setShouldRenderSelectValue(false);
      setSearchValue(evt.target.value);
      onInputChange?.(evt);
    };

    const onSingleSelectBackSpace = () => {
      setShouldRenderSelectValue(false);
    };

    const onMultipleSelectBackSpace = () => {
      const lastAbledSelectedOptionValue = findAbledOptionValue(selectedOptions.reverse());
      if (!lastAbledSelectedOptionValue) return;
      handleOptionSelect(lastAbledSelectedOptionValue);
    };

    const onBackspace = () => {
      if (searchValue || !localValue) return;
      if (!multiple) return onSingleSelectBackSpace();
      onMultipleSelectBackSpace();
    };

    const chooseOptionOnEnter = () => {
      const targetOption = dropDownOptions[hoverOptionIndex];
      if (!targetOption) return;
      handleOptionSelect(targetOption.value);

      if (multiple) return;
      onCloseSelect();
    };

    const onClosedSelectEnter = () => setIsSearchPanelOpen(true);

    const onOpenedSelectEnter = () => chooseOptionOnEnter();

    const onEnter = () => {
      if (isSearchPanelOpen) return onOpenedSelectEnter();
      onClosedSelectEnter();
    };

    const scrollToOption = (optionValue: string) => {
      const scrollElem = dropDownRef.current?.parentElement;
      const optionElem = dropDownOptions.find((option) => option.value === optionValue)?.ref?.current;
      if (!scrollElem || !optionElem) return;

      scrollToNotVisibleELem(optionElem, scrollElem);
    };

    const findNextHoverOptionValue = React.useCallback(() => {
      const nextAbledOptionValue = findAbledOptionValue(dropDownOptions.slice(hoverOptionIndex + 1));
      if (nextAbledOptionValue) return nextAbledOptionValue;
      return findAbledOptionValue(dropDownOptions);
    }, [hoverOptionIndex, dropDownOptions]);

    const findPrevHoverOptionValue = React.useCallback(() => {
      const sliceInd = hoverOptionIndex === -1 ? undefined : hoverOptionIndex;
      const prevAbledOptionValue = findAbledOptionValue(dropDownOptions.slice(0, sliceInd).reverse());
      if (prevAbledOptionValue) return prevAbledOptionValue;
      return findAbledOptionValue(dropDownOptions.slice().reverse());
    }, [hoverOptionIndex, dropDownOptions]);

    const handleKeyUp = (e: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(e);

      switch (code) {
        case keyboardKey.Enter: {
          onEnter();
          break;
        }
        case keyboardKey.Escape: {
          onCloseSelect();
          break;
        }
        case keyboardKey.ArrowUp: {
          const prevValue = findPrevHoverOptionValue();
          if (!prevValue) break;
          scrollToOption(prevValue);
          setHoverValue(prevValue);
          break;
        }
        case keyboardKey.ArrowDown: {
          const nextValue = findNextHoverOptionValue();
          if (!nextValue) break;
          scrollToOption(nextValue);
          setHoverValue(nextValue);
          break;
        }
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(e);

      switch (code) {
        case keyboardKey.Enter: {
          // prevent submit form on Enter press when selection is available
          if (isSearchPanelOpen) e.preventDefault();
          break;
        }
        case keyboardKey.Backspace: {
          onBackspace();
          break;
        }
      }
    };

    const onSelectKeyDown = (e: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(e);

      if (!code) return;

      const preventKeys = [keyboardKey.Enter, keyboardKey[' '], keyboardKey.ArrowDown, keyboardKey.ArrowUp];
      if (preventKeys.includes(code)) {
        // Prevent native select events
        e.preventDefault();
      }
    };

    const onWrapperClick = () => {
      setIsSearchPanelOpen(true);
    };

    const onInputKeyDown = (evt: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(evt);
      switch (code) {
        case keyboardKey.ArrowUp: {
          evt.preventDefault();
          break;
        }
        case keyboardKey.ArrowDown: {
          evt.preventDefault();
          break;
        }
      }
    };

    const onFocus = (evt: React.FocusEvent<HTMLDivElement>) => {
      setIsFocused(true);
      onFocusFromProps?.(evt);
    };

    const onBlur = (evt: React.FocusEvent<HTMLDivElement>) => {
      setIsFocused(false);

      if (!evt.currentTarget.contains(evt.relatedTarget)) {
        onBlurFromProps?.(evt);
        onCloseSelect();
      }
    };

    const onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
      if (selectIsUncontrolled) {
        setLocalValue(
          multiple ? Array.from(evt.target.selectedOptions).map((option) => option.value) : evt.target.value,
        );
      }
      props.onChange?.(evt);
    };

    useClickOutside([containerRef, dropDownRef], onCloseSelect);

    const renderPlaceholder = localValue ? undefined : renderPlaceholderDefault;
    const renderSelectValueDefault = multiple ? renderMultipleSelectValue : renderSelectedOption;
    const renderValue = renderPlaceholder || renderSelectValue || renderSelectValueDefault || renderValueDefault;

    React.useEffect(() => {
      if (!Array.isArray(localValue)) setHoverValue(localValue || '');
    }, [localValue]);

    React.useEffect(() => {
      if ((!isFocused && !multiple) || multiple) setShouldRenderSelectValue(true);
    }, [multiple, isFocused]);

    React.useEffect(() => {
      if (isSearchPanelOpen) inputRef.current?.focus();
      else inputRef.current?.blur();
    }, [isSearchPanelOpen]);

    React.useEffect(() => {
      if (!selectIsUncontrolled) setLocalValue(value);
    }, [value, selectIsUncontrolled]);

    const valueIsString = typeof selectedOption?.children === 'string';

    return (
      <SelectWrapper
        className={className}
        style={style}
        focused={isFocused}
        multiple={multiple}
        disabled={disabled}
        readonly={props.readOnly}
        dimension={dimension}
        ref={containerRef}
        data-status={status}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        onClick={onWrapperClick}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        <Hidden>
          <ConstantSearchSelectProvider
            onConstantOptionMount={onConstantOptionMount}
            onConstantOptionUnMount={onConstantOptionUnMount}
            searchValue={searchValue}
          >
            {children}
          </ConstantSearchSelectProvider>
        </Hidden>
        <NativeSelect
          ref={refSetter(ref, selectRef)}
          value={localValue}
          multiple={multiple}
          disabled={disabled}
          onKeyDown={onSelectKeyDown}
          {...props}
          onChange={onChange}
        >
          <option value="" />
          {constantOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </NativeSelect>
        <ValueWrapper
          id="selectValueWrapper"
          dimension={dimension}
          multiple={multiple}
          hideChips={shouldFixHeight}
          valueIsString={valueIsString}
        >
          {shouldRenderSelectValue && renderValue(localValue, searchValue)}
          <Input
            tabIndex={-1}
            ref={inputRef}
            isHidden={!isSearchPanelOpen}
            value={searchValue}
            isMultiple={multiple}
            onChange={onLocalInputChange}
            onKeyDown={onInputKeyDown}
          />
        </ValueWrapper>
        {isSearchPanelOpen && (
          <Dropdown
            id="selectDropdownContainer"
            targetRef={portalTargetRef || containerRef}
            data-dimension={dimension || TextInput.defaultProps?.dimension}
            // Запретит перенос фокуса с инпута при клике по всему, что внутри Dropdown
            onMouseDown={preventDefault}
          >
            <div ref={dropDownRef}>
              <DropDownSearchSelectProvider
                onOptionClick={handleOptionSelect}
                onMouseEnter={setHoverValue}
                onDropDownOptionMount={onDropDownOptionMount}
                onDropDownOptionUnMount={onDropDownOptionUnMount}
                highlightFormat={highlightFormat}
                selectValue={localValue}
                searchValue={searchValue}
                hoverValue={hoverValue}
                dimension={dimension}
                multiple={multiple}
                defaultHighlighted={defaultHighlighted}
                showCheckbox={showCheckbox}
              >
                {dropDownChildren}
              </DropDownSearchSelectProvider>
            </div>
          </Dropdown>
        )}
        <IconPanel disabled={disabled} dimension={dimension} onClick={stopPropagation} onMouseDown={preventDefault}>
          {displayClearIcon && <ClearIcon id="searchSelectClearIcon" onClick={resetOptions} aria-hidden />}
          {icons}
          {displayStatusIcon && <StatusIcon status={status} aria-hidden />}
          <OpenStatusButton
            $isOpen={isSearchPanelOpen}
            data-disabled={disabled ? true : undefined}
            onClick={handleSearchPanelToggle}
            aria-hidden
          />
        </IconPanel>
      </SelectWrapper>
    );
  },
);

export { Option } from './Option';
export { Highlight } from './Highlight';
export { OptionGroup } from './OptionGroup';

SearchSelect.displayName = 'SearchSelect';
