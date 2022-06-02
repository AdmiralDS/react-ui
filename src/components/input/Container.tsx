import { ComponentDimension } from '#src/components/input/types';
import styled, { css } from 'styled-components';
import { Shape } from '#src/components/themes/common';

function inputBorderRadius(shape: Shape): string {
  switch (shape.borderRadiusKind) {
    case 'Border radius 0':
      return 'none';
    case 'Border radius 2':
      return '2px';
    case 'Border radius 4':
      return '4px';
    case 'Border radius 8':
      return '8px';
    default:
      return '4px';
  }
}

export const containerHeights = css<{ dimension?: ComponentDimension }>`
  height: ${({ dimension }) => {
    switch (dimension) {
      case 'xl':
        return '56px';
      case 's':
        return '32px';
      default:
        return '40px';
    }
  }};
`;

export const Container = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${(p) => inputBorderRadius(p.theme.shape)};

  ${containerHeights}
`;
