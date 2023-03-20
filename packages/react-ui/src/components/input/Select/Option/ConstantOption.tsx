import { useConstantSelectContext, useOptionGroupContext } from '#src/components/input/Select/useSelectContext';
import * as React from 'react';
import type { OptionProps } from '#src/components/input/Select/Option/types';

export const ConstantOptionWrapper = (props: OptionProps) => {
  const constantSelectContext = useConstantSelectContext();

  if (!constantSelectContext) return null;

  return <ConstantOption {...props} />;
};

const ConstantOption = ({ disabled = false, value, children, renderOption, renderChip }: OptionProps) => {
  const selectContext = useConstantSelectContext();
  const optionGroupContext = useOptionGroupContext();

  const optionIsDisabled = optionGroupContext?.disabled || disabled;

  const defaultRenderChip = React.useCallback(() => children, [children]);

  const resultRenderChip = renderChip || defaultRenderChip;

  const resultChildren = React.useMemo(
    () => (renderOption ? renderOption({ disabled }) : children),
    [renderOption, disabled, value, children],
  );

  const option = React.useMemo(
    () => ({
      value,
      disabled: optionIsDisabled,
      children: resultChildren,
      renderChip: resultRenderChip,
    }),
    [value, optionIsDisabled, resultChildren, resultRenderChip],
  );

  React.useEffect(() => {
    selectContext?.onConstantOptionMount?.(option);
    return () => selectContext?.onConstantOptionUnMount?.(option);
  }, [selectContext?.onConstantOptionMount, selectContext?.onConstantOptionUnMount, option]);

  return null;
};
