import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';

export interface ImageViewerCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconPlacementContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  }

  & > svg {
    height: 24px;
    width: 24px;
  }
`;

const ActivityHighlighter = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const eventsMixin = css`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
  }

  &:hover {
    > ${ActivityHighlighter} {
      background-color: var(
        --admiral-color-Opacity_DarkStaticHover,
        ${(p) => p.theme.color['Opacity/Dark Static Hover']}
      );
    }
  }
  &:active {
    > ${ActivityHighlighter} {
      background-color: var(
        --admiral-color-Opacity_DarkStaticPress,
        ${(p) => p.theme.color['Opacity/Dark Static Press']}
      );
    }
  }
  &:focus-visible {
    > ${ActivityHighlighter} {
      background-color: transparent;
    }
  }
`;

const IconPlacementButton = styled.button`
  position: relative;
  padding: 0;
  margin: 6px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: 24px;
  width: 24px;
  border-radius: var(--admiral-border-radius-Small, ${(p) => smallGroupBorderRadius(p.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:not(:disabled) {
    ${eventsMixin}
  }
`;

export const ImageViewerCloseButton = forwardRef<HTMLButtonElement, ImageViewerCloseButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <IconPlacementButton ref={ref} type="button" {...props}>
        <ActivityHighlighter aria-hidden />
        <IconPlacementContent aria-hidden>
          <CloseOutline aria-hidden />
        </IconPlacementContent>
      </IconPlacementButton>
    );
  },
);
