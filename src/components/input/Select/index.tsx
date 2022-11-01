import * as React from 'react';
import styled, { DefaultTheme, FlattenInterpolation, ThemeContext, ThemeProps } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { InputIconButton } from '#src/components/InputIconButton';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { TextInput } from '../TextInput';
import type { ComponentDimension, InputStatus } from '#src/components/input/types';
import { ConstantSelectProvider, DropDownSelectProvider } from './useSelectContext';
import type { HighlightFormat, IConstantOption, IDropdownOption } from './types';
import { MultipleSelectChips } from './MultipleSelectChips';
import {
  BorderedDiv,
  Dropdown,
  Hidden,
  IconPanel,
  Input,
  NativeSelect,
  OptionWrapper,
  SelectWrapper,
  SpinnerMixin,
  ValueWrapper,
  MenuWrapper,
  StyledMenu,
  EmptyMessageWrapper,
} from './styled';
import { preventDefault, scrollToNotVisibleELem } from './utils';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { useClickOutside } from '#src/components/common/hooks/useClickOutside';
import { Spinner } from '#src/components/Spinner';
import { DisplayValue } from './DisplayValue';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { Menu, RenderPanelProps } from '#src/components/Menu';
import { NativeControl } from '#src/components/input/Select/NativeControl';
import { SelectDropdown } from '#src/components/input/Select/Dropdown';
import { DropDownProvider } from '#src/components/input/Select/Dropdown/Context';
import type { ItemProps } from '#src/components/Menu/MenuItem';
import { HighlightWrapper } from '#src/components/input/Select/Highlight/HighlightWrapper';

/**
 * Осталось сделать:
 * Активное состояние у крестика на чипсах по стрелкам
 * Проверить Перфоманс
 * Тултип и длинного текста в selectValue
 * Возможность, если используется renderValue, задать значение, которое будет появляться при вводе поиска и для опций
 * Разбить компонент на хуки для большей читаемости и императивности (useHeight, useInput, ...)
 * Разбить тесты по пропсам и функционалу. Например, тесты проверящие placeholder И т.д.
 */

export const DropDownText = styled(OptionWrapper)`
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
`;

type PartialOption = { value: string; disabled: boolean } & Record<string, any>;
const findAbledOptionValue = (options: PartialOption[]) => options.find(({ disabled }) => !disabled)?.value;

const stopPropagation = (evt: React.BaseSyntheticEvent) => evt.stopPropagation();

export interface SelectProps extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'onFocus' | 'onBlur'> {
  value?: string | string[];

  /** Позволяет использовать Select как select */
  mode?: 'select' | 'searchSelect';

  /** Отображать статус загрузки данных */
  isLoading?: boolean;

  /** Добавить селекту возможность множественного выбора */
  multiple?: boolean;

  /** По умолчанию, если в компоннет Option передан текст и только текст, то в зависимости от набранного в Input значения,
   * опции будут подсвечиваться. Описываемый флаг отключает это поведение. */
  defaultHighlighted?: boolean;

  /** По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его */
  showCheckbox?: boolean;

  /** Значение по умолчанию для некотролируемого селекта */
  defaultValue?: string | string[];

  displayClearIcon?: boolean;

  /** Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений */
  onClearIconClick?: () => void;

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

  /**  Значение введенное пользователем для поиска */
  inputValue?: string;

  /** первоначальное значение в строке поиска без переведения строки в контролируемый компонент */
  defaultInputValue?: string;

  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;

  onFocus?: (evt: React.FocusEvent<HTMLDivElement>) => void;

  onBlur?: (evt: React.FocusEvent<HTMLDivElement>) => void;

  /** Принудительно выравнивает контейнер с опциями относительно компонента, значение по умолчанию 'stretch' */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;

  /** Состояние skeleton */
  skeleton?: boolean;

  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Сообщение, отображаемое при пустом наборе опций */
    emptyMessage?: React.ReactNode;
  };

  /** Позволяет добавить панель внизу под выпадающим списком */
  renderOptionsBottomPanel?: (props: RenderPanelProps) => React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
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
      readOnly,
      placeholder,
      defaultValue,
      dimension = 'm',
      idleHeight = 'fixed',
      mode = 'select',
      highlightFormat = 'word',
      multiple = false,
      defaultHighlighted = true,
      showCheckbox = true,
      displayClearIcon = false,
      onClearIconClick,
      onInputChange,
      inputValue,
      defaultInputValue,
      renderSelectValue,
      onFocus: onFocusFromProps,
      onBlur: onBlurFromProps,
      children,
      alignDropdown = 'stretch',
      skeleton = false,
      locale,
      dropContainerCssMixin,
      renderOptionsBottomPanel,
      ...props
    },
    ref,
  ) => {
    const theme = React.useContext(ThemeContext) || LIGHT_THEME;
    const emptyMessage = locale?.emptyMessage || (
      <DropDownText>{theme.locales[theme.currentLocale].select.emptyMessage}</DropDownText>
    );
    const [localValue, setLocalValue] = React.useState(value ?? defaultValue);
    const [internalSearchValue, setSearchValue] = React.useState('');
    const searchValue = inputValue === undefined ? internalSearchValue : inputValue;
    const [hoverValue, setHoverValue] = React.useState('');
    const [shouldRenderSelectValue, setShouldRenderSelectValue] = React.useState(false);

    const [activeItem, setActiveItem] = React.useState<string>();

    const [constantOptions, setConstantOptions] = React.useState<IConstantOption[]>([]);
    const [dropDownOptions, setDropDownOptions] = React.useState<IDropdownOption[]>([]);
    const [dropDownItems, setDropItems] = React.useState<Array<ItemProps>>([]);

    const [isSearchPanelOpen, setIsSearchPanelOpen] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);

    const selectIsUncontrolled = value === undefined;
    const modeIsSelect = mode === 'select';

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
      return (
        <>
          {!dropDownOptions.length && emptyMessage}
          {children}
        </>
      );
    }, [isLoading, children, dropDownOptions]);

    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const selectRef = React.useRef<HTMLSelectElement | null>(null);
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const dropDownRef = React.useRef<HTMLDivElement | null>(null);
    const mutableState = React.useRef<{ shouldExtendInputValue: boolean }>({
      shouldExtendInputValue: false,
    });

    const onConstantOptionMount = React.useCallback(
      (option: IConstantOption) => setConstantOptions((prev) => [...prev, option]),
      [],
    );

    const onConstantOptionUnMount = React.useCallback(
      (option: IConstantOption) =>
        setConstantOptions((prev) => prev.filter((prevOption) => prevOption.value !== option.value)),
      [],
    );

    // const onDropDownOptionMount = React.useCallback(
    //   (option: IDropdownOption) =>
    //     setDropDownOptions((prev) => {
    //       return [...prev, option];
    //     }),
    //   [],
    // );
    //
    // const onDropDownOptionUnMount = React.useCallback(
    //   (option: IDropdownOption) =>
    //     setDropDownOptions((prev) => {
    //       console.log('UNMOUNT', prev, option);
    //       return prev.filter((prevOption) => prevOption.value !== option.value);
    //     }),
    //   [],
    // );

    const handleDropDownOptionMount = React.useCallback(
      (option: ItemProps) =>
        setDropItems((prev) => {
          // console.log('MOUNT NEW', prev, option);
          return [...prev, option];
        }),
      [],
    );

    const handleDropDownOptionUnMount = React.useCallback(
      (option: ItemProps) =>
        setDropItems((prev) => {
          // console.log('UNMOUNT', prev, option);
          return prev.filter((prevOption) => prevOption.id !== option.id);
        }),
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

      selectElem.selectedIndex = -1;
      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
    }, []);

    const handleOnClear = onClearIconClick || resetOptions;

    const shouldFixMultiSelectHeight = idleHeight === 'fixed' && !isSearchPanelOpen;

    const renderMultipleSelectValue = React.useCallback(
      () => (
        <MultipleSelectChips
          options={selectedOptions}
          shouldShowCount={shouldFixMultiSelectHeight}
          disabled={disabled}
          readOnly={readOnly}
          onChipRemove={handleOptionSelect}
          onChipClick={stopPropagation}
        />
      ),
      [selectedOptions, shouldFixMultiSelectHeight, disabled, readOnly, handleOptionSelect, stopPropagation],
    );

    const isEmptyValue = multiple ? !localValue?.length : !localValue;
    const isEmpty = isEmptyValue && !!placeholder && !searchValue;

    const renderedSelectValue = renderSelectValue?.(localValue, searchValue);

    const renderedSelectedOption = selectedOption?.children;
    const renderedDefaultSelectValue = multiple ? renderMultipleSelectValue() : renderedSelectedOption;
    const visibleValue = renderedSelectValue || renderedDefaultSelectValue || localValue || null;

    const visibleValueIsString = typeof visibleValue === 'string';

    const shouldFixSingleSelectHeight = idleHeight === 'fixed' && visibleValueIsString;
    const shouldFixHeight = multiple ? shouldFixMultiSelectHeight : shouldFixSingleSelectHeight;

    const wrappedVisibleValue = visibleValueIsString ? (
      <DisplayValue visibleValue={visibleValue} isSearchPanelOpen={isSearchPanelOpen} targetRef={containerRef} />
    ) : (
      visibleValue
    );

    const handleSearchPanelToggle = () => {
      setIsSearchPanelOpen((prev) => !prev);
    };

    const mutateAndExtendTargetInputValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (!mutableState.current.shouldExtendInputValue || !visibleValueIsString) return;
      evt.target.value = `${visibleValue}${evt.target.value}`;
      mutableState.current.shouldExtendInputValue = false;
    };

    const onSingleLocalInputChange = () => setShouldRenderSelectValue(false);

    const onLocalInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (!multiple) onSingleLocalInputChange();
      mutateAndExtendTargetInputValue(evt);
      if (inputValue === undefined) setSearchValue(evt.target.value);
      onInputChange?.(evt);
    };

    const onMultipleSelectBackSpace = () => {
      const lastAbledSelectedOptionValue = findAbledOptionValue(selectedOptions.reverse());
      if (!lastAbledSelectedOptionValue) return;
      handleOptionSelect(lastAbledSelectedOptionValue);
    };

    const deleteOrHideSelectValueOnBackspace = () => {
      if (searchValue || !localValue) return;
      if (!multiple) return setShouldRenderSelectValue(false);
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
      const scrollElem = dropDownRef.current;
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

    const extendSelectValueToInputValue = () => {
      if (!visibleValueIsString || searchValue || !shouldRenderSelectValue) return;

      mutableState.current.shouldExtendInputValue = true;
    };

    const narrowSelectValueToInputValue = (evt: React.KeyboardEvent) => {
      if (!visibleValueIsString || !inputRef.current || searchValue || !shouldRenderSelectValue || !localValue) return;

      // Предотвратить удаление выделенного с помощью selection символа
      evt.preventDefault();
      const newInputValue = visibleValue.slice(0, -1);
      changeInputData(inputRef.current, {
        value: newInputValue,
        selectionEnd: newInputValue.length,
        selectionStart: newInputValue.length,
      });
    };

    const onWrapperKeyDown = (evt: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(evt);

      if (code === keyboardKey.ArrowUp || code === keyboardKey.ArrowDown) evt.preventDefault();
      if (evt.key.length === 1) extendSelectValueToInputValue();
      if (code === keyboardKey.Backspace && !evt.repeat) deleteOrHideSelectValueOnBackspace();
      if (code === keyboardKey.Backspace) narrowSelectValueToInputValue(evt);
      if (code === keyboardKey.Enter && isSearchPanelOpen) evt.preventDefault();
    };

    const onFocus = (evt: React.FocusEvent<HTMLDivElement>) => {
      setIsFocused(true);
      onFocusFromProps?.(evt);
    };

    const onBlur = (evt: React.FocusEvent<HTMLDivElement>) => {
      // если фокус переходит не на инпут, содержащийся внутри компонента
      if (!evt.currentTarget.contains(evt.relatedTarget)) {
        setIsFocused(false);
        onBlurFromProps?.(evt);
        onCloseSelect();
      }
    };

    const handleNativeControlChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
      if (selectIsUncontrolled) {
        setLocalValue(
          multiple ? Array.from(evt.target.selectedOptions).map((option) => option.value) : evt.target.value,
        );
      }
      props.onChange?.(evt);
    };

    React.useEffect(() => {
      if (!Array.isArray(localValue)) setHoverValue(localValue || '');
    }, [localValue]);

    React.useEffect(() => {
      if ((!isFocused && !multiple) || multiple) setShouldRenderSelectValue(true);
    }, [multiple, isFocused]);

    React.useEffect(() => {
      if (isSearchPanelOpen) {
        modeIsSelect ? selectRef.current?.focus() : inputRef.current?.focus();
      }
    }, [isSearchPanelOpen, modeIsSelect]);

    React.useEffect(() => {
      if (!selectIsUncontrolled) setLocalValue(value);
    }, [value, selectIsUncontrolled]);

    useClickOutside([containerRef, dropDownRef], onCloseSelect);

    const nativeOptions = selectRef.current ? Array.from(selectRef.current.options) : [];

    const handleSelectOption = () => {
      selectRef.current?.dispatchEvent(new Event('change', { bubbles: true }));
    };

    const handleQueryOpenDropDown = () => {
      if (!isSearchPanelOpen) setIsSearchPanelOpen(true);
    };

    const handleWrapperClick = () => {
      const passClick = !modeIsSelect && isSearchPanelOpen;
      if (!passClick) handleSearchPanelToggle();
    };

    const handleClickOutside = (e: Event) => {
      if (e.target && containerRef.current?.contains(e.target as Node)) {
        return;
      }
      onCloseSelect();
    };

    return (
      <SelectWrapper
        className={className}
        style={style}
        focused={isFocused}
        multiple={multiple}
        disabled={disabled}
        data-disabled={disabled}
        readonly={readOnly}
        dimension={dimension}
        ref={containerRef}
        data-status={status}
        // onKeyUp={handleKeyUp}
        onKeyDown={onWrapperKeyDown}
        onClick={handleWrapperClick}
        // onMouseDown={preventDefault}
        // onBlur={onBlur}
        onFocus={onFocus}
        skeleton={skeleton}
      >
        <ConstantSelectProvider
          onConstantOptionMount={onConstantOptionMount}
          onConstantOptionUnMount={onConstantOptionUnMount}
          searchValue={searchValue}
        >
          {children}
        </ConstantSelectProvider>
        <DropDownProvider
          onOptionClick={handleOptionSelect}
          onActivateItem={setActiveItem}
          onDropDownOptionMount={handleDropDownOptionMount}
          onDropDownOptionUnMount={handleDropDownOptionUnMount}
          highlightFormat={highlightFormat}
          selectValue={localValue}
          searchValue={searchValue}
          activeItem={activeItem}
          dimension={dimension}
          multiple={multiple}
          defaultHighlighted={defaultHighlighted}
          showCheckbox={showCheckbox}
        >
          {children}
        </DropDownProvider>
        <NativeControl
          ref={refSetter(ref, selectRef)}
          value={localValue}
          multiple={multiple}
          disabled={disabled}
          options={constantOptions}
          onQueryOpenDropDown={handleQueryOpenDropDown}
          onChange={handleNativeControlChange}
        />
        <BorderedDiv />
        <ValueWrapper
          id="selectValueWrapper"
          dimension={dimension}
          multiple={multiple}
          fixHeight={shouldFixHeight}
          isEmpty={isEmpty}
          // onMouseDown={preventDefault}
        >
          {shouldRenderSelectValue && wrappedVisibleValue}
          {((placeholder && isEmpty) || !modeIsSelect) && (
            <Input
              placeholder={isEmpty ? placeholder : ''}
              tabIndex={-1}
              ref={inputRef}
              disabled={disabled}
              readOnly={readOnly || modeIsSelect}
              value={searchValue}
              defaultValue={defaultInputValue}
              isMultiple={multiple}
              dimension={dimension}
              onChange={onLocalInputChange}
            />
          )}
        </ValueWrapper>
        {isSearchPanelOpen && !skeleton && (
          <DropdownContainer
            targetRef={portalTargetRef || containerRef}
            data-dimension={dimension}
            onClickOutside={handleClickOutside}
            alignSelf={alignDropdown}
            dropContainerCssMixin={dropContainerCssMixin}
          >
            {dropDownItems.length ? (
              <HighlightWrapper searchValue={searchValue} highlightFormat={highlightFormat}>
                <StyledMenu
                  active={activeItem}
                  selected={localValue}
                  onActivateItem={setActiveItem}
                  onSelectItem={handleOptionSelect}
                  model={dropDownItems}
                  renderBottomPanel={renderOptionsBottomPanel}
                />
              </HighlightWrapper>
            ) : (
              <EmptyMessageWrapper>{emptyMessage}</EmptyMessageWrapper>
            )}
          </DropdownContainer>

          // <DropdownContainer
          //   targetRef={portalTargetRef || containerRef}
          //   data-dimension={dimension || TextInput.defaultProps?.dimension}
          //   // Запретит перенос фокуса с инпута при клике по всему, что внутри Dropdown
          //   onMouseDown={preventDefault}
          //   onClick={stopPropagation}
          //   ref={dropDownRef}
          //   alignSelf={alignDropdown}
          //   // disableAutoAlign
          // >
          //   <DropDownSelectProvider
          //     onOptionClick={handleOptionSelect}
          //     onMouseEnter={setHoverValue}
          //     onDropDownOptionMount={onDropDownOptionMount}
          //     onDropDownOptionUnMount={onDropDownOptionUnMount}
          //     highlightFormat={highlightFormat}
          //     selectValue={localValue}
          //     searchValue={searchValue}
          //     hoverValue={hoverValue}
          //     dimension={dimension}
          //     multiple={multiple}
          //     defaultHighlighted={defaultHighlighted}
          //     showCheckbox={showCheckbox}
          //   >
          //     {dropDownChildren}
          //     {/*<Menu model={[]} />*/}
          //   </DropDownSelectProvider>
          // </DropdownContainer>
        )}
        <IconPanel multiple={multiple} dimension={dimension} onClick={stopPropagation} onMouseDown={preventDefault}>
          {isLoading && <Spinner svgMixin={SpinnerMixin} dimension={dimension === 's' ? 's' : 'm'} />}
          {displayClearIcon && !readOnly && (
            <InputIconButton icon={CloseOutlineSvg} id="searchSelectClearIcon" onClick={handleOnClear} aria-hidden />
          )}
          {icons}
          {!readOnly && (
            <OpenStatusButton
              $isOpen={isSearchPanelOpen}
              data-disabled={disabled ? true : undefined}
              onClick={handleSearchPanelToggle}
              aria-hidden
            />
          )}
        </IconPanel>
      </SelectWrapper>
    );
  },
);

export { Option } from './Option';
export { Highlight } from './Highlight';
export { OptionGroup } from './OptionGroup';

Select.displayName = 'Select';
