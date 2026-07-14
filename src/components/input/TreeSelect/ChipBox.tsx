import { CounterChip } from '#src/components/input/Select/MultipleSelectChips/CounterChip';
import { ShadowCounterChip, StyledChip } from '#src/components/input/Select/MultipleSelectChips/styled';

import styled from 'styled-components';
import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import { ChipWrapper } from '#src/components/input/TreeSelect/styled';
import type { CheckboxGroupItemProps } from '#src/components/Menu/MenuItemWithCheckbox';

export interface CommonChipProps {
  containerRef: React.RefObject<HTMLDivElement>;
  shouldShowCount: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onChipRemove: (id?: string) => void;
  onChipClick?: (evt: React.MouseEvent) => void;
}

interface ChipBoxProps extends CommonChipProps, React.HTMLAttributes<HTMLDivElement> {
  option: CheckboxGroupItemProps;
  hiddenChipsCount: number;
}

export const Wrapper = styled.div`
  display: flex;
`;

export const ChipBox = forwardRef<HTMLDivElement, ChipBoxProps>(
  (
    { option, hiddenChipsCount, containerRef, shouldShowCount, disabled, readOnly, onChipRemove }: ChipBoxProps,
    ref,
  ) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useLayoutEffect(() => {
      function handleIntersection(entries: IntersectionObserverEntry[]) {
        if (entries[0].isIntersecting && !visible) {
          setVisible(true);

          entries[0].target.setAttribute('data-visible', 'true');
          const prev = entries[0].target.previousElementSibling;
          const next = entries[0].target.nextElementSibling;

          if (prev) prev.removeAttribute('data-show-count');
          if (next && !next.getAttribute('data-visible')) entries[0].target.setAttribute('data-show-count', '');
          return;
        }

        if (visible && !entries[0].isIntersecting) {
          setVisible(false);
          entries[0].target.removeAttribute('data-visible');
          entries[0].target.removeAttribute('data-show-count');

          const prev = entries[0].target.previousElementSibling;
          if (prev && prev.getAttribute('data-visible')) prev.setAttribute('data-show-count', 'true');
        }
      }

      const observer = new IntersectionObserver(handleIntersection, {
        root: containerRef.current,
        threshold: [0, 1.0],
      });

      if (containerRef.current && wrapperRef.current) {
        observer.observe(wrapperRef.current);
      }
      return () => observer.disconnect();
    }, [visible]);

    return (
      <ChipWrapper
        ref={refSetter(ref, wrapperRef)}
        key={option.id}
        onMouseDown={(e) => e.preventDefault()}
        className="wrapper"
      >
        <StyledChip
          id={option.id}
          key={option.id}
          onClick={(e) => e.stopPropagation()}
          onClose={onChipRemove}
          tabIndex={-1}
          dimension="s"
          appearance="filled"
          readOnly={readOnly}
          disabled={option.disabled || disabled}
        >
          {option.label}
        </StyledChip>
        <CounterChip count={hiddenChipsCount} disabled={disabled}></CounterChip>
        {!shouldShowCount && <ShadowCounterChip />}
      </ChipWrapper>
    );
  },
);
