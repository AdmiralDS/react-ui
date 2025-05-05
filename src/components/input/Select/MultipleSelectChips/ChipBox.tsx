import { InfoChip } from './InfoChip';
import { CounterChip } from './CounterChip';
import { ShadowCounterChip } from './styled';

import type { IConstantOption } from '#src/components/input/Select/types';
import styled from 'styled-components';
import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';

export interface CommonChipProps {
  containerRef: React.RefObject<HTMLDivElement>;
  shouldShowCount: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onChipRemove: (value: string) => void;
  onChipClick?: (evt: React.MouseEvent) => void;
}

interface ChipBoxProps extends CommonChipProps, React.HTMLAttributes<HTMLDivElement> {
  option: IConstantOption;
  childrenOptions: Array<IConstantOption>;
}

export const Wrapper = styled.div`
  display: flex;
`;

export const ChipBox = forwardRef<HTMLDivElement, ChipBoxProps>(
  (
    {
      option,
      childrenOptions,
      containerRef,
      shouldShowCount,
      disabled,
      readOnly,
      onChipClick,
      onChipRemove,
    }: ChipBoxProps,
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
      <Wrapper ref={refSetter(ref, wrapperRef)} key={option.value} onMouseDown={(e) => e.preventDefault()}>
        <InfoChip
          className="chip"
          option={option}
          disabled={disabled}
          readOnly={readOnly}
          onClick={onChipClick}
          onChipRemove={onChipRemove}
        />
        {shouldShowCount && childrenOptions.length > 0 && (
          <CounterChip count={childrenOptions.length} disabled={disabled}>
            {childrenOptions.map((innerOption) => (
              <InfoChip
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
      </Wrapper>
    );
  },
);
