import styled from 'styled-components';

import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';

import {
  SLIDE_ARROW_ICON_SIZE,
  SLIDE_ARROW_BUTTON_SIZE,
  SLIDE_ARROW_BUTTON_PADDING,
} from '#src/components/TabMenuComponent/constants';

export const SlideArrowButton = styled.button`
  appearance: none;
  border: none;
  border-radius: 50%;
  width: ${SLIDE_ARROW_BUTTON_SIZE}px;
  height: ${SLIDE_ARROW_BUTTON_SIZE}px;
  background: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${(p) => parseShadow(p.theme.shadow['Shadow 04'])});
  cursor: pointer;

  padding: ${SLIDE_ARROW_BUTTON_PADDING}px;

  & svg {
    display: inline-block;
    flex: 1 0 auto;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    }
    width: ${SLIDE_ARROW_ICON_SIZE}px;
    height: ${SLIDE_ARROW_ICON_SIZE}px;
    margin: 0;
  }

  &:hover:not(:disabled) {
    background: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
  }
`;
SlideArrowButton.displayName = 'SlideArrowButton';
