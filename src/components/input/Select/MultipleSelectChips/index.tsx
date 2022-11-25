import * as React from 'react';
import styled from 'styled-components';
import type { IConstantOption } from '../types';
import { CounterChip } from './CounterChip';
import { ShadowCounterChip } from './styled';
import { InfoChip } from './InfoChip';

export const ChipBox = styled.div`
  display: flex;
`;

interface MultipleChipsProps {
  wrapperRef: React.RefObject<HTMLDivElement>;
  options: IConstantOption[];
  shouldShowCount: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onChipRemove: (value: string) => void;
  onChipClick?: (evt: React.MouseEvent) => void;
}

const map = new Map();

export const MultipleSelectChips = ({
  options,
  shouldShowCount,
  disabled,
  readOnly,
  onChipClick,
  onChipRemove,
  wrapperRef,
}: MultipleChipsProps) => {
  React.useLayoutEffect(() => {
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach((item, index, array) => {
        console.log(map.has(item.target));

        map.set(item.target, item.isIntersecting);

        //   const isLast = index === array.length - 1;
        //   if (item.isIntersecting) {
        //     if (!isLast) {
        //       const isLastVisible = !array[index + 1].isIntersecting;
        //       if (isLastVisible) {
        //         item.target.setAttribute('data-visible-counter', 'true');
        //       } else {
        //         item.target.removeAttribute('data-visible-counter');
        //         return;
        //       }
        //     }
        //
        //     item.target.removeAttribute('data-visible-counter');
        //     return;
        //   }
        //   item.target.setAttribute('data-visible-counter', 'true');
      });
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: wrapperRef.current,
      threshold: [0, 1.0],
    });

    if (wrapperRef.current) {
      Array.from(wrapperRef.current.children).forEach((item) => {
        const elem = item.querySelector('.counter');
        if (elem) observer.observe(elem);
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleChipMount = (ref: HTMLDivElement) => {
    map.set(ref, undefined);
  };

  return (
    <>
      {options.map((option, optionInd) => (
        <ChipBox key={option.value} id={option.value} onMouseDown={(e) => e.preventDefault()}>
          <InfoChip
            className="chip"
            option={option}
            disabled={disabled}
            readOnly={readOnly}
            onClick={onChipClick}
            onChipRemove={onChipRemove}
          />
          {shouldShowCount && (
            <CounterChip
              onMount={handleChipMount}
              onClick={onChipClick}
              count={options.length - optionInd - 1}
              disabled={disabled}
            >
              {options.slice(optionInd + 1).map((innerOption) => (
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
        </ChipBox>
      ))}
    </>
  );
};
