import styled from 'styled-components';

import {
  IMAGE_VIEWER_CONTROL_BUTTON_SIZE,
  IMAGE_VIEWER_CONTROL_ICON_SIZE,
} from '#src/components/ImageViewer/constants';

import { TooltipHoc } from '#src/components/TooltipHOC';

export interface ImageViewerControlButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
  /** Текст для tooltip */
  text?: string;
  /** Иконка для отображения */
  icon: React.ReactNode;
}

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
const TooltipedControlButton = TooltipHoc(ControlButton);

export const ImageViewerControlButton = ({
  showTooltip = true,
  text = '',
  icon,
  ...props
}: ImageViewerControlButtonProps) => {
  return showTooltip ? (
    <TooltipedControlButton {...props} renderContent={() => text}>
      {icon}
    </TooltipedControlButton>
  ) : (
    <ControlButton {...props}>{icon}</ControlButton>
  );
};
