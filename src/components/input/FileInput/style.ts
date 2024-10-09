import { css } from 'styled-components';

export const FILE_INPUT_ICON_SIZE_XL = '40px';
export const FILE_INPUT_ICON_SIZE_M = '24px';
export const FILE_INPUT_ICON_MARGIN = '16px';
export const FILE_INPUT_MIN_WIDTH_M = '288px';
export const FILE_INPUT_MIN_WIDTH_XL = '320px';
const FILE_INPUT_WRAPPER_PADDING_XL = '24px';
const FILE_INPUT_WRAPPER_PADDING_M = '8px 20px';

export const FILE_ITEM_WRAPPER_HEIGHT_XL = '56px';
export const FILE_ITEM_WRAPPER_HEIGHT_M = '40px';
export const FILE_ITEM_WRAPPER_PADDING_XL = '8px';
export const FILE_ITEM_WRAPPER_PADDING_M = '10px 16px';

export const FILE_ITEM_FUNCTIONAL_ICON_SIZE_XL = '24px';
export const FILE_ITEM_FUNCTIONAL_ICON_SIZE_M = '20px';
export const FILE_ITEM_PREVIEW_ICON_SIZE_XL = '40px';

export const ERROR_BLOCK_HEIGHT_XL = '16px';
export const ERROR_BLOCK_HEIGHT_M = '20px';

export const disabledStyles = css`
  border: 1px dashed var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  cursor: not-allowed;
  & > * {
    pointer-events: none;
  }

  & svg {
    > * {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;

export const hoverStyles = css`
  &[data-isdragover='true'],
  &:hover {
    cursor: pointer;
    background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }
  &:active {
    background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
  }
`;

export const dimensionMStyles = css`
  flex-direction: row;
  padding: ${FILE_INPUT_WRAPPER_PADDING_M};
  justify-content: center;
`;

export const dimensionXLStyles = css`
  flex-direction: column;
  padding: ${FILE_INPUT_WRAPPER_PADDING_XL};
`;

export const fullWidthPositionMixin = css`
  flex: 1 1 100%;
`;

export const halfWidthPositionMixin = css`
  flex: 1 1 auto;
  max-width: calc(50% - 8px);
`;

export const titleXL = css`
  max-width: 100%;
  text-align: center;
  margin: 0 24px;
`;
