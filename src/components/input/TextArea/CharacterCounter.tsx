import { typography } from '#/components/Typography';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ error?: boolean; transparent?: boolean }>`
  white-space: nowrap;
  ${typography['Additional/S']}
  color: ${(p) => (p.error ? p.theme.color.status.danger : p.theme.color.text.secondary)};
  transition: all 0.5s, color 0.5s;
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
    function oninput(this: HTMLInputElement | HTMLTextAreaElement) {
      const { value } = this;
      setCurrentCount(value.length);
    }

    const node = inputRef.current;
    if (node) {
      node.addEventListener('input', oninput);
      oninput.call(node);
      return () => {
        node.removeEventListener('input', oninput);
      };
    }
  }, [inputRef.current]);
  return currentCount > maxLength * 0.8 ? (
    <Container {...props} error={currentCount >= maxLength} transparent={currentCount < maxLength * 0.8}>
      {currentCount}/{maxLength}
    </Container>
  ) : null;
};
