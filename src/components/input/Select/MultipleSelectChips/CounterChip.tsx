import { useRef } from 'react';
import { CounterChipWrap, ShadowCounterChip, StyledCounterChip } from './styled';

export interface CounterChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
  disabled?: boolean;
}

export const CounterChip = ({ count, disabled, ...restProps }: React.PropsWithChildren<CounterChipsProps>) => {
  const ref = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  if (!count) return <ShadowCounterChip />;

  return (
    <CounterChipWrap {...restProps} ref={ref} className={'counter'}>
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
