import { typography } from '#src/components/Typography';
import type { FC, RefObject } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ $error?: boolean; $transparent?: boolean }>`
  white-space: nowrap;
  ${typography['Body/Body 2 Long']}
  color: ${(p) =>
    p.$error
      ? `var(--admiral-color-Error_Error60Main, ${p.theme.color['Error/Error 60 Main']})`
      : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
  transition:
    all 0.5s,
    color 0.5s;
  opacity: ${(p) => (p.$transparent && !p.$error ? 0 : 1)};
  max-width: ${(p) => (p.$transparent && !p.$error ? 0 : 'none')};
  overflow: hidden;
`;

export interface CharacterCounterProps {
  maxLength: number;
  /** Коэффициент появления счетчика:
   *  0 - всегда видим
   *  1 - всегда невидим
   *  по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества */
  visibilityThreshold?: number;
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>;
}

export const CharacterCounter: FC<CharacterCounterProps> = ({
  maxLength,
  visibilityThreshold = 0.8,
  inputRef,
  ...props
}: CharacterCounterProps) => {
  const [currentCount, setCurrentCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      const node = inputRef.current;
      if (node) {
        setCurrentCount(node.value.length);
      }
    }, 250);
    return () => clearInterval(timer);
  }, [inputRef]);
  return currentCount >= maxLength * visibilityThreshold ? (
    <Container
      {...props}
      $error={currentCount >= maxLength}
      $transparent={currentCount < maxLength * visibilityThreshold}
    >
      {currentCount}
      {' / '}
      {maxLength}
    </Container>
  ) : null;
};
