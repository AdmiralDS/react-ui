import styled from 'styled-components';

import {
  IMAGE_VIEWER_CONTROL_BUTTON_SIZE,
  IMAGE_VIEWER_CONTROL_ICON_SIZE,
  IMAGE_VIEWER_CONTROLS_BORDER_RADIUS,
  IMAGE_VIEWER_CONTROLS_HEIGHT,
  IMAGE_VIEWER_CONTROLS_PADDING,
} from '#src/components/ImageViewer/constants';

import {
  SystemArrowsHorizontalOutline,
  SystemArrowsVerticalOutline,
  DocumentsRotateLeftOutline,
  DocumentsRotateRightOutline,
  SystemZoomOutOutline,
  SystemZoomInOutline,
  SystemArrowLeftOutline,
  SystemArrowRightOutline,
} from '@admiral-ds/icons';

export interface ImageViewerControlsProps extends React.HTMLAttributes<HTMLDivElement> {
  renderPanel?: () => React.ReactNode;
}

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
        <SystemArrowsHorizontalOutline />
      </ControlButton>
      <ControlButton>
        <SystemArrowsVerticalOutline />
      </ControlButton>
      <ControlButton>
        <DocumentsRotateLeftOutline />
      </ControlButton>
      <ControlButton>
        <DocumentsRotateRightOutline />
      </ControlButton>
      <ControlButton>
        <SystemZoomOutOutline />
      </ControlButton>
      <ControlButton>
        <SystemZoomInOutline />
      </ControlButton>
      <Divider />
      <ControlButton disabled>
        <SystemArrowLeftOutline />
      </ControlButton>
      <ControlButton>
        <SystemArrowRightOutline />
      </ControlButton>
    </Wrapper>
  );
};
