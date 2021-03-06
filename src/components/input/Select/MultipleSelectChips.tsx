import * as React from 'react';
import styled, { css } from 'styled-components';
import { Chips } from '#src/components/Chips';
import { Hint } from '#src/components/Hint';
import type { IChipProps, IConstantOption } from './types';
import { COUNTER_WIDTH } from './constants';
import { preventDefault } from './utils';

export const ChipBox = styled.div`
  display: flex;
`;

const CounterChipWrap = styled.div`
  display: flex;
  width: ${COUNTER_WIDTH}px;
  > * {
    width: ${COUNTER_WIDTH}px;
    border-radius: 16px;
    // Убирает действие inline-block
    display: flex;
  }
`;

const ShadowCounterChip = styled.div`
  width: ${COUNTER_WIDTH}px;
  height: 24px;
`;

const ChipsHintWrap = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: flex-start;
`;

// К сожалению, пришлось переопределить стили disabled чипса, так как при pointer-events: none
// чипс с числом оставшихся опций "заезжает" на disabled чип
const disabledChipStyle = css`
  pointer-events: auto;
  :hover {
    color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    background-color: ${({ theme }) => theme.color['Neutral/Neutral 10']};
    border: 1px solid ${({ theme }) => theme.color['Neutral/Neutral 10']};
  }
  & > * {
    pointer-events: none;
  }
`;

const StyledChip = styled(Chips)`
  margin-right: 4px;
  // Убирает пробел от inline-flex
  display: flex;
  ${({ disabled }) => (disabled ? disabledChipStyle : '')};

  min-width: ${COUNTER_WIDTH}px;
  @media (max-width: 768px) {
    max-width: 140px;
  }
`;

const StyledCounterChip = styled(Chips)`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 4px 0;
`;

const ContentTooltop = styled.div`
  max-width: 488px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

interface IMultipleChipsProps {
  options: IConstantOption[];
  shouldShowCount: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onChipRemove: (value: string) => void;
  onChipClick?: (evt: React.MouseEvent) => void;
}

interface ICounterChipsProps {
  count: number;
  disabled?: boolean;
  onClick?: (evt: React.MouseEvent) => void;
}

const CounterChip = ({ children, count, disabled, onClick }: React.PropsWithChildren<ICounterChipsProps>) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visibleHint, setVisibleHint] = React.useState(false);

  const handleHintVisibilityChange = (visible: boolean) => setVisibleHint(visible);
  const renderContent = React.useCallback(() => <ChipsHintWrap>{children}</ChipsHintWrap>, [children]);

  if (!count) return <ShadowCounterChip />;

  return (
    <CounterChipWrap onClick={onClick} ref={ref}>
      <Hint
        visible={visibleHint}
        onVisibilityChange={handleHintVisibilityChange}
        renderContent={renderContent}
        target={ref}
        dimension="s"
      >
        <StyledCounterChip tabIndex={-1} dimension="s" appearance="filled" disabled={disabled}>
          +{count}
        </StyledCounterChip>
      </Hint>
    </CounterChipWrap>
  );
};

interface IChipWrapperProps {
  option: IConstantOption;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChipRemove: (value: string) => void;
  onClick?: (evt: React.MouseEvent) => void;
}

const Chip = ({ className, option, disabled, readOnly, onClick, onChipRemove }: IChipWrapperProps) => {
  const renderContentTooltip = React.useCallback(
    (children: React.ReactNode) => () => <ContentTooltop>{children}</ContentTooltop>,
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

const chipIsChipMeta = (chip: IChipProps | React.ReactNode): chip is IChipProps =>
  typeof chip === 'object' && chip !== null && !React.isValidElement(chip);

const getChipMeta = ({ value, disabled, renderChip }: IConstantOption, onChipRemove: (value: string) => void) => {
  const chip = renderChip();
  return chipIsChipMeta(chip)
    ? { ...chip, onClose: () => chip.onClose?.({ value, disabled }) }
    : { disabled, onClose: () => onChipRemove(value), children: chip };
};

export const MultipleSelectChips = ({
  options,
  shouldShowCount,
  disabled,
  readOnly,
  onChipClick,
  onChipRemove,
}: IMultipleChipsProps) => (
  <>
    {options.map((option, optionInd) => (
      <ChipBox key={option.value} onMouseDown={preventDefault}>
        <Chip
          className="chip"
          option={option}
          disabled={disabled}
          readOnly={readOnly}
          onClick={onChipClick}
          onChipRemove={onChipRemove}
        />
        {shouldShowCount && (
          <CounterChip onClick={onChipClick} count={options.length - optionInd - 1} disabled={disabled}>
            {options.slice(optionInd + 1).map((innerOption) => (
              <Chip
                key={innerOption.value}
                option={innerOption}
                disabled={disabled}
                readOnly={readOnly}
                onClick={onChipClick}
                onChipRemove={onChipRemove}
              />
            ))}
          </CounterChip>
        )}
        {!shouldShowCount && <ShadowCounterChip />}
      </ChipBox>
    ))}
  </>
);
