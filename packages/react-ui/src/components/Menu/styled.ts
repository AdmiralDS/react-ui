import styled from 'styled-components';
import { SmallArrowRightOutline } from '#src/icons/IconComponents-system';

export const Chevron = styled(SmallArrowRightOutline)`
  transition: all 0.3s;
  //transform: rotate(-90deg);
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  [data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
  [data-dimension='m'] & {
    width: 20px;
    height: 20px;
  }
`;
