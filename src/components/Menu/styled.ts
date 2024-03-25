import styled from 'styled-components';
import { ReactComponent as SmallArrowRightOutline } from '@admiral-ds/icons/build/system/SmallArrowRightOutline.svg';

export const Chevron = styled(SmallArrowRightOutline)`
  transition: all 0.3s;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  [data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
  [data-dimension='s'] & {
    width: 20px;
    height: 20px;
  }
`;
