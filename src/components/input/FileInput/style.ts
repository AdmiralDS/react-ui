import { css } from 'styled-components';

export const FILE_INPUT_ICON_SIZE_XL = '40px';
export const FILE_INPUT_ICON_SIZE_M = '24px';
export const FILE_INPUT_ICON_MARGIN = '14px';
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
  border: ${(p) => `1px dashed ${p.theme.color['Neutral/Neutral 30']}`};
  color: ${(p) => p.theme.color['Neutral/Neutral 30']};
  pointer-events: none;

  & svg {
    > * {
      fill: ${(p) => p.theme.color['Neutral/Neutral 30']};
    }
  }
`;

export const hoverStyles = css`
  &:hover {
    cursor: pointer;
    background: ${(p) => p.theme.color['Opacity/Hover']};
  }
  &:active {
    cursor: pointer;
    background: ${(p) => p.theme.color['Opacity/Press']};
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
  flex: 1 1 36%;

  &:nth-of-type(even) {
    margin-left: 16px;
  }
`;
