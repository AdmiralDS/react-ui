import type { IChipProps, IConstantOption } from '#src/components/input/Select/types';

import { ContentTooltip, StyledChip } from './styled';
import { passDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import { isValidElement, useCallback } from 'react';

const chipIsChipMeta = (chip: IChipProps | React.ReactNode): chip is IChipProps =>
  typeof chip === 'object' && chip !== null && !isValidElement(chip);

const getChipMeta = (
  { value, disabled, renderChip, ...restProps }: IConstantOption,
  onChipRemove: (value: string) => void,
) => {
  const chip = renderChip();
  const dataProps = {};
  passDataAttributes(restProps, dataProps, 'data', false);

  return chipIsChipMeta(chip)
    ? { ...chip, onClose: () => chip.onClose?.({ value, disabled, ...dataProps }) }
    : { disabled, onClose: () => onChipRemove(value), children: chip };
};

interface InfoChipProps {
  option: IConstantOption;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChipRemove: (value: string) => void;
  onClick?: (evt: React.MouseEvent) => void;
}

export const InfoChip = ({ className, option, disabled, readOnly, onClick, onChipRemove }: InfoChipProps) => {
  const renderContentTooltip = useCallback(
    (children: React.ReactNode) => () => <ContentTooltip>{children}</ContentTooltip>,
    [],
  );

  return (
    <StyledChip
      className={className}
      tabIndex={-1}
      dimension="s"
      appearance="filled"
      onClick={onClick}
      onClose={readOnly ? undefined : getChipMeta(option, onChipRemove).onClose}
      disabled={getChipMeta(option, onChipRemove).disabled || disabled}
      renderContentTooltip={renderContentTooltip(getChipMeta(option, onChipRemove).children)}
    >
      {getChipMeta(option, onChipRemove).children}
    </StyledChip>
  );
};
