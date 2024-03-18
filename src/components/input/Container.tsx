import type { ComponentDimension } from '#src/components/input/types';
import styled, { css } from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

export const containerHeights = css<{ $dimension?: ComponentDimension }>`
  height: ${({ $dimension }) => {
    switch ($dimension) {
      case 'xl':
        return '56px';
      case 's':
        return '32px';
      default:
        return '40px';
    }
  }};
`;

export const skeletonMixin = css`
  ${skeletonAnimationMixin}
  & > * {
    visibility: hidden;
  }
`;

export const Container = styled.div<{ $skeleton?: boolean }>`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${(p) =>
    p.$skeleton ? 0 : `var(--admiral-border-radius-Medium, ${mediumGroupBorderRadius(p.theme.shape)})`};

  pointer-events: ${(p) => (p.$skeleton ? 'none' : 'all')};
  ${({ $skeleton }) => $skeleton && skeletonMixin};
`;

export const HeightLimitedContainer = styled(Container)<{ $dimension?: ComponentDimension }>`
  ${containerHeights};
`;
