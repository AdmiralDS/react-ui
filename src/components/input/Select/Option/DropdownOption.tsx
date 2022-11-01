import * as React from 'react';
import {
  OptionProvider,
  useDropDownSelectContext,
  useOptionGroupContext,
} from '#src/components/input/Select/useSelectContext';
import { getTextHighlightMeta } from '#src/components/input/Select/utils';
import { Highlight } from '#src/components/input';
import { OptionProps } from '#src/components/input/Select/Option/types';
import { CustomOption, StyledCheckbox } from './styled';

export const DropDownOptionWrapper = (props: OptionProps) => {
  const [textsToHighlight, setTextsToHighlight] = React.useState<string[] | null>(null);
  const dropDownSelectContext = useDropDownSelectContext();

  const highlighted = textsToHighlight?.some(
    (text) =>
      getTextHighlightMeta(text, dropDownSelectContext?.searchValue, dropDownSelectContext?.highlightFormat)
        .shouldHighlight,
  );

  const onAddTextToHighlight = React.useCallback(
    (text) => setTextsToHighlight((prev) => Array.from(new Set([...(prev || []), text]))),
    [],
  );

  const shouldRender = textsToHighlight === null || highlighted;

  return (
    <OptionProvider onAddTextToHighlight={onAddTextToHighlight}>
      {dropDownSelectContext && shouldRender && <DropDownOption {...props} />}
    </OptionProvider>
  );
};

const DropDownOption = ({ disabled = false, value, children, renderOption, ...htmlProps }: OptionProps) => {
  const selectContext = useDropDownSelectContext();
  const optionGroupContext = useOptionGroupContext();

  const optionIsDisabled = optionGroupContext?.disabled || disabled;

  const childrenOrHighlightedChildren = React.useMemo(
    () =>
      typeof children === 'string' && selectContext?.defaultHighlighted ? <Highlight>{children}</Highlight> : children,
    [selectContext?.defaultHighlighted, children],
  );

  const defaultMultipleOption = React.useMemo(
    () => (
      <>
        {selectContext?.showCheckbox && (
          <StyledCheckbox
            checked={selectContext?.selectValue?.includes(value)}
            dimension={selectContext?.dimension === 's' ? 's' : 'm'}
            disabled={disabled}
            readOnly
          />
        )}
        {childrenOrHighlightedChildren}
      </>
    ),
    [
      selectContext?.selectValue,
      selectContext?.dimension,
      selectContext?.showCheckbox,
      childrenOrHighlightedChildren,
      value,
    ],
  );

  const ref = React.useRef<HTMLDivElement>(null);

  const renderDefaultOption = React.useCallback(
    () => (selectContext?.multiple ? defaultMultipleOption : childrenOrHighlightedChildren),
    [selectContext?.multiple, defaultMultipleOption, childrenOrHighlightedChildren],
  );

  const onClick = React.useCallback(() => selectContext?.onOptionClick?.(value), [selectContext?.onOptionClick, value]);
  const onHover = React.useCallback(() => selectContext?.onMouseEnter?.(value), [selectContext?.onMouseEnter, value]);

  const option = React.useMemo(
    () => ({
      value,
      disabled: optionIsDisabled,
      ref,
    }),
    [value, optionIsDisabled],
  );

  const resultChildren = React.useMemo(
    () =>
      renderOption
        ? renderOption({
            disabled,
            searchValue: selectContext?.searchValue,
            isHovered: selectContext?.hoverValue === value,
          })
        : renderDefaultOption(),
    [renderOption, renderDefaultOption, disabled, value, selectContext?.searchValue, selectContext?.hoverValue],
  );

  React.useEffect(() => {
    selectContext?.onDropDownOptionMount?.(option);
    return () => selectContext?.onDropDownOptionUnMount?.(option);
  }, [selectContext?.onDropDownOptionMount, selectContext?.onDropDownOptionUnMount, option]);

  return (
    <CustomOption
      ref={ref}
      disabled={optionIsDisabled}
      selected={selectContext?.selectValue === value}
      active={selectContext?.hoverValue === value}
      dimension={selectContext?.dimension}
      onMouseDown={onClick}
      onMouseEnter={onHover}
      {...htmlProps}
    >
      {resultChildren}
    </CustomOption>
  );
};
