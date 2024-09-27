import styled from 'styled-components';

import type { ImageCounterProps } from './types';
import { typography } from '#src/components/Typography';

const Wrapper = styled.div`
  color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  ${typography['Body/Body 2 Long']};
`;

export const ImageCounter = ({ total, current }: ImageCounterProps) => {
  const text = `${current + 1} / ${total}`;
  return <Wrapper>{text}</Wrapper>;
};
