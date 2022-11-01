import { forwardRef } from 'react';
import type { ComponentDimension } from '#src/components/input';
import { preventDefault, stopPropagation } from '#src/components/input/Select/utils';
import { DropDownSelectProvider } from '#src/components/input/Select/useSelectContext';
import { DropdownContainer, DropdownContainerProps } from '#src/components/DropdownContainer';
import * as React from 'react';
import type { DropdownOptionProps } from '#src/components/input/Select/Dropdown/types';
import { HighlightFormat } from '#src/components/input/Select/types';
import { Menu } from '#src/components/Menu';
import type { ItemProps } from '#src/components/MenuItem';

interface SelectDropdownProps extends DropdownContainerProps {
  /** Активная секция Menu */
  active?: string;
  /** выбранная секция Menu */
  selected?: string;

  localValue?: string | string[];
  searchValue: string;
  dimension: ComponentDimension;
  nativeOptions: Array<HTMLOptionElement>;
  /** Добавить селекту возможность множественного выбора */
  multiple: boolean;
  /** По умолчанию опции подсвечиваются отдельно по каждой разделенной пробелом части в поисковой строке. Данная опция
   * позволяет искать по строке целиком */
  highlightFormat: HighlightFormat;
  defaultHighlighted: boolean;
  showCheckbox: boolean;
  emptyMessage: React.ReactNode;

  onSelectOption: () => void;
  onClose: () => void;
  model: Array<ItemProps>;
}

export const SelectDropdown = forwardRef<HTMLDivElement, SelectDropdownProps>(
  (
    {
      active,
      targetRef,
      dimension,
      nativeOptions,
      multiple,
      highlightFormat,
      onClose,
      onSelectOption,
      localValue,
      searchValue,
      defaultHighlighted,
      showCheckbox,
      emptyMessage,
      children,
      model,
      ...props
    }: SelectDropdownProps,
    ref,
  ) => {
    const [dropDownOptions, setDropDownOptions] = React.useState<DropdownOptionProps[]>([]);
    const [hoverValue, setHoverValue] = React.useState('');

    const onDropDownOptionMount = React.useCallback(
      (option: DropdownOptionProps) =>
        setDropDownOptions((prev) => {
          return [...prev, option];
        }),
      [],
    );

    const onDropDownOptionUnMount = React.useCallback(
      (option: DropdownOptionProps) =>
        setDropDownOptions((prev) => {
          console.log('UNMOUNT', prev, option);
          return prev.filter((prevOption) => prevOption.value !== option.value);
        }),
      [],
    );

    const handleOptionSelect = React.useCallback(
      (optionValue: string) => {
        if (!nativeOptions.length) return;

        const targetOptionElem = nativeOptions.find((option) => option.value === optionValue);

        if (!targetOptionElem) return;

        if (!multiple) nativeOptions.forEach((option) => (option.selected = false));

        targetOptionElem.selected = multiple ? !targetOptionElem.selected : true;
        onSelectOption();
        // selectElem.dispatchEvent(new Event('change', { bubbles: true }));

        if (!multiple) onClose();
      },
      [onClose, multiple, nativeOptions],
    );

    // const dropDownChildren = React.useMemo(() => {
    //   return (
    //     <>
    //       {!dropDownOptions.length && emptyMessage}
    //       {children}
    //     </>
    //   );
    // }, [children, dropDownOptions]);

    return (
      <DropdownContainer
        targetRef={targetRef}
        data-dimension={dimension}
        // Запретит перенос фокуса с инпута при клике по всему, что внутри Dropdown
        // onMouseDown={preventDefault}
        // onClick={stopPropagation}
        ref={ref}
        {...props}
        // alignSelf={alignDropdown}
        // disableAutoAlign
      >
        {/*<DropDownSelectProvider*/}
        {/*  onOptionClick={handleOptionSelect}*/}
        {/*  onMouseEnter={setHoverValue}*/}
        {/*  onDropDownOptionMount={onDropDownOptionMount}*/}
        {/*  onDropDownOptionUnMount={onDropDownOptionUnMount}*/}
        {/*  highlightFormat={highlightFormat}*/}
        {/*  selectValue={localValue}*/}
        {/*  searchValue={searchValue}*/}
        {/*  hoverValue={hoverValue}*/}
        {/*  dimension={dimension}*/}
        {/*  multiple={multiple}*/}
        {/*  defaultHighlighted={defaultHighlighted}*/}
        {/*  showCheckbox={showCheckbox}*/}
        {/*>*/}
        {/*{dropDownChildren}*/}
        <Menu active={active} model={model} />
        {/*</DropDownSelectProvider>*/}
      </DropdownContainer>
    );
  },
);
