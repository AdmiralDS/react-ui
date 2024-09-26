import styled from 'styled-components';

import {
  IMAGE_VIEWER_CONTROL_BUTTON_SIZE,
  IMAGE_VIEWER_CONTROL_ICON_SIZE,
  IMAGE_VIEWER_CONTROLS_BORDER_RADIUS,
  IMAGE_VIEWER_CONTROLS_HEIGHT,
  IMAGE_VIEWER_CONTROLS_PADDING,
} from '#src/components/ImageViewer/constants';
import type { ImageViewerControlsProps } from '#src/components/ImageViewer/types';

import { ReactComponent as RotateLeftOutline } from '@admiral-ds/icons/build/documents/RotateLeftOutline.svg';
import { ReactComponent as RotateRightOutline } from '@admiral-ds/icons/build/documents/RotateRightOutline.svg';
import { ReactComponent as ArrowsHorizontalOutline } from '@admiral-ds/icons/build/system/ArrowsHorizontalOutline.svg';
import { ReactComponent as ArrowsVerticalOutline } from '@admiral-ds/icons/build/system/ArrowsVerticalOutline.svg';
import { ReactComponent as ZoomOutOutline } from '@admiral-ds/icons/build/system/ZoomOutOutline.svg';
import { ReactComponent as ZoomInOutline } from '@admiral-ds/icons/build/system/ZoomInOutline.svg';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';

const Divider = styled.div`
  box-sizing: border-box;
  height: 16px;
  width: 1px;
  margin: 12px 8px 12px 7px;
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral50,
    ${(p) => p.theme.color['Special/Dark Static Neutral 50']}
  );
`;

const ControlButton = styled.button`
  all: unset;
  appearance: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  box-sizing: border-box;
  width: ${IMAGE_VIEWER_CONTROL_BUTTON_SIZE}px;
  height: ${IMAGE_VIEWER_CONTROL_BUTTON_SIZE}px;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: ${IMAGE_VIEWER_CONTROL_ICON_SIZE}px;
    height: ${IMAGE_VIEWER_CONTROL_ICON_SIZE}px;
    & *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral70, ${(p) => p.theme.color['Special/Dark Static Neutral 70']});
    }
  }

  &:hover {
    & *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral80, ${(p) => p.theme.color['Special/Dark Static Neutral 80']});
    }
  }

  &:active {
    & *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral90, ${(p) => p.theme.color['Special/Dark Static Neutral 90']});
    }
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral50, ${(p) => p.theme.color['Special/Dark Static Neutral 50']});
    }
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  border-radius: ${IMAGE_VIEWER_CONTROLS_BORDER_RADIUS}px;
  height: ${IMAGE_VIEWER_CONTROLS_HEIGHT}px;
  padding: ${IMAGE_VIEWER_CONTROLS_PADDING};
  background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});

  display: flex;
`;

export const ImageViewerControls = ({ renderPanel, ...props }: ImageViewerControlsProps) => {
  return (
    <Wrapper {...props}>
      <ControlButton>
        <ArrowsHorizontalOutline />
      </ControlButton>
      <ControlButton>
        <ArrowsVerticalOutline />
      </ControlButton>
      <ControlButton>
        <RotateLeftOutline />
      </ControlButton>
      <ControlButton>
        <RotateRightOutline />
      </ControlButton>
      <ControlButton>
        <ZoomOutOutline />
      </ControlButton>
      <ControlButton>
        <ZoomInOutline />
      </ControlButton>
      <Divider />
      <ControlButton disabled>
        <ArrowLeftOutline />
      </ControlButton>
      <ControlButton>
        <ArrowRightOutline />
      </ControlButton>
    </Wrapper>
  );
};
