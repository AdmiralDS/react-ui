import type { ButtonProps } from '#src/components/Button';
import { Button } from '#src/components/Button';
import styled from 'styled-components';

interface SegmentedControlItemProps extends ButtonProps {
  selected?: boolean;
}

// Segment vs SegmentedControlItem ?
export const SegmentedControlItemv1 = ({
  selected = false,
  className = '',
  children,
  ...props
}: SegmentedControlItemProps) => {
  return (
    <Button className={selected ? 'selected' : '' + className} {...props}>
      {children}
    </Button>
  );
};
