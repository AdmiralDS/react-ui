import { useRef } from 'react';
import { CounterChipWrap, ShadowCounterChip, StyledCounterChip } from './styled';

export interface CounterChipsProps {
  count: number;
  disabled?: boolean;
  onClick?: (evt: React.MouseEvent) => void;
}

export const CounterChip = ({ count, disabled, onClick }: React.PropsWithChildren<CounterChipsProps>) => {
  const ref = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  if (!count) return <ShadowCounterChip />;

  return (
    <CounterChipWrap onClick={onClick} ref={ref} className={'counter'}>
      <StyledCounterChip
        ref={counterRef}
        data-visible={true}
        tabIndex={-1}
        dimension="s"
        appearance="filled"
        disabled={disabled}
      >
        +{count}
      </StyledCounterChip>
    </CounterChipWrap>
  );
};
