import * as React from 'react';
import { Hint } from '#src/components/Hint';
import { ChipsHintWrap, CounterChipWrap, ShadowCounterChip, StyledCounterChip } from './styled';

export interface CounterChipsProps {
  count: number;
  disabled?: boolean;
  onClick?: (evt: React.MouseEvent) => void;
}

export const CounterChip = ({ children, count, disabled, onClick }: React.PropsWithChildren<CounterChipsProps>) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const counterRef = React.useRef<HTMLDivElement>(null);
  const [visibleHint, setVisibleHint] = React.useState(false);

  const handleHintVisibilityChange = (visible: boolean) => setVisibleHint(visible);
  const renderContent = React.useCallback(() => <ChipsHintWrap>{children}</ChipsHintWrap>, [children]);

  if (!count) return <ShadowCounterChip />;

  return (
    <CounterChipWrap onClick={onClick} ref={ref} className={'counter'}>
      <Hint
        visible={visibleHint}
        onVisibilityChange={handleHintVisibilityChange}
        renderContent={renderContent}
        targetElement={ref.current}
        dimension="s"
      >
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
      </Hint>
    </CounterChipWrap>
  );
};
