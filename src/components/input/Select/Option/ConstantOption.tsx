import { useConstantSelectContext, useOptionGroupContext } from '#src/components/input/Select/useSelectContext';

import type { OptionProps } from '#src/components/input/Select/Option/types';
import { passDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import { useCallback, useEffect, useMemo } from 'react';

export const ConstantOptionWrapper = (props: OptionProps) => {
  const constantSelectContext = useConstantSelectContext();

  if (!constantSelectContext) return null;

  return <ConstantOption {...props} />;
};

const ConstantOption = ({
  disabled = false,
  id,
  value,
  children,
  renderOption,
  renderChip,
  ...restProps
}: OptionProps) => {
  const selectContext = useConstantSelectContext();
  const optionGroupContext = useOptionGroupContext();

  const optionIsDisabled = optionGroupContext?.disabled || disabled;

  const defaultRenderChip = useCallback(() => children, [children]);

  const resultRenderChip = renderChip || defaultRenderChip;

  const resultChildren = useMemo(
    () => (renderOption ? renderOption({ disabled }) : children),
    [renderOption, disabled, value, children],
  );

  const dataProps = {} as Record<string, any>;
  passDataAttributes(restProps, dataProps, 'data', false);

  const option = useMemo(
    () => ({
      id,
      value,
      disabled: optionIsDisabled,
      children: resultChildren,
      renderChip: resultRenderChip,
      ...dataProps,
    }),
    [id, value, optionIsDisabled, resultChildren, resultRenderChip],
  );

  useEffect(() => {
    selectContext?.onConstantOptionMount?.(option);
    return () => selectContext?.onConstantOptionUnMount?.(option);
  }, [selectContext?.onConstantOptionMount, selectContext?.onConstantOptionUnMount, option]);

  return null;
};
