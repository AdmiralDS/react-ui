import { typography } from '#src/components/Typography';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ error?: boolean; transparent?: boolean }>`
  white-space: nowrap;
  ${typography['Body/Body 2 Long']}
  color: ${(p) =>
    p.error
      ? `var(--admiral-color-Error_Error60Main, ${p.theme.color['Error/Error 60 Main']})`
      : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
  transition:
    all 0.5s,
    color 0.5s;
  opacity: ${(p) => (p.transparent && !p.error ? 0 : 1)};
  max-width: ${(p) => (p.transparent && !p.error ? 0 : 'none')};
  overflow: hidden;
`;

export interface CharacterCounterProps {
  maxLength: number;
  inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
}

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  maxLength,
  inputRef,
  ...props
}: CharacterCounterProps) => {
  const [currentCount, setCurrentCount] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      const node = inputRef.current;
      if (node) {
        setCurrentCount(node.value.length);
      }
    }, 250);
    return () => clearInterval(timer);
  }, [inputRef]);
  return currentCount > maxLength * 0.8 ? (
    <Container {...props} error={currentCount >= maxLength} transparent={currentCount < maxLength * 0.8}>
      {currentCount}
      {' / '}
      {maxLength}
    </Container>
  ) : null;
};
