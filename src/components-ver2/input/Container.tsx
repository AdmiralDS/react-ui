import { ComponentDimension } from '#src/components-ver2/input/types';
import styled, { css } from 'styled-components';

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
  border-radius: 4px;

  ${containerHeights}
`;
