import { useState } from 'react';
import styled, { useTheme } from 'styled-components';

import {
  IMAGE_VIEWER_CONTROL_BUTTON_SIZE,
  IMAGE_VIEWER_CONTROL_ICON_SIZE,
  IMAGE_VIEWER_CONTROLS_BORDER_RADIUS,
  IMAGE_VIEWER_CONTROLS_HEIGHT,
  IMAGE_VIEWER_CONTROLS_PADDING,
} from '#src/components/ImageViewer/constants';
import type { ImageViewerControlsProps } from '#src/components/ImageViewer/types';
import { ImageCounter } from '#src/components/ImageViewer/ImageCounter';

import { LIGHT_THEME } from '#src/components/themes';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { uid } from '#src/components/common/uid';

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
const TooltipedControlButton = TooltipHoc(ControlButton);

interface ImageViewerControlButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Отображение тултипа, по умолчанию true */
  showTooltip?: boolean;
  /** Текст для tooltip */
  text?: string;
  /** Иконка для отображения */
  icon: React.ReactNode;
}

const ImageViewerControlutton = ({ showTooltip = true, text = '', icon, ...props }: ImageViewerControlButtonProps) => {
  return showTooltip ? (
    <TooltipedControlButton {...props} renderContent={() => text}>
      {icon}
    </TooltipedControlButton>
  ) : (
    <ControlButton {...props}>{icon}</ControlButton>
  );
};

const ButtonsWrapper = styled.div`
  box-sizing: border-box;
  border-radius: ${IMAGE_VIEWER_CONTROLS_BORDER_RADIUS}px;
  height: ${IMAGE_VIEWER_CONTROLS_HEIGHT}px;
  padding: ${IMAGE_VIEWER_CONTROLS_PADDING};
  background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});

  display: flex;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const getPrev = (current: number, total: number) => {
  const newIndex = current - 1;
  return newIndex > 0 ? newIndex : 0;
};
const getNext = (current: number, total: number) => {
  const newIndex = current + 1;
  return newIndex < total ? newIndex : total - 1;
};

export const ImageViewerControls = ({
  showTooltip = true,
  showCounter,
  showNavigation = true,
  onActiveImgChange,
  activeImg,
  totalImg,
  locale,
  ...props
}: ImageViewerControlsProps) => {
  const theme = useTheme() || LIGHT_THEME;
  const {
    flipHorizontallyText: theme_flipHorizontallyText,
    flipVerticallyText: theme_flipVerticallyText,
    rotateLeftText: theme_rotateLeftText,
    rotateRightText: theme_rotateRightText,
    zoomOutText: theme_zoomOutText,
    zoomInText: theme_zoomInText,
    backwardText: theme_backwardText,
    forwardText: theme_forwardText,
  } = theme.locales[theme.currentLocale].imageViewer;

  const flipHorizontallyText = locale?.flipHorizontallyText || theme_flipHorizontallyText;
  const flipVerticallyText = locale?.flipVerticallyText || theme_flipVerticallyText;
  const rotateLeftText = locale?.rotateLeftText || theme_rotateLeftText;
  const rotateRightText = locale?.rotateRightText || theme_rotateRightText;
  const zoomOutText = locale?.zoomOutText || theme_zoomOutText;
  const zoomInText = locale?.zoomInText || theme_zoomInText;
  const backwardText = locale?.backwardText || theme_backwardText;
  const forwardText = locale?.forwardText || theme_forwardText;

  const emptyHandler = () => {
    return;
  };

  const handleActiveImgChange = (newIndex: number) => {
    onActiveImgChange(newIndex);
  };

  const prevDisabled = activeImg <= 0;
  const nextDisabled = activeImg >= totalImg - 1;

  const buttons = [
    { icon: <ArrowsHorizontalOutline />, text: flipHorizontallyText, handleClick: emptyHandler, disabled: false },
    { icon: <ArrowsVerticalOutline />, text: flipVerticallyText, handleClick: emptyHandler, disabled: false },
    { icon: <RotateLeftOutline />, text: rotateLeftText, handleClick: emptyHandler, disabled: false },
    { icon: <RotateRightOutline />, text: rotateRightText, handleClick: emptyHandler, disabled: false },
    { icon: <ZoomOutOutline />, text: zoomOutText, handleClick: emptyHandler, disabled: false },
    { icon: <ZoomInOutline />, text: zoomInText, handleClick: emptyHandler, disabled: false },
    {
      icon: <ArrowLeftOutline />,
      text: backwardText,
      handleClick: () => handleActiveImgChange(getPrev(activeImg, totalImg)),
      disabled: prevDisabled,
    },
    {
      icon: <ArrowRightOutline />,
      text: forwardText,
      handleClick: () => handleActiveImgChange(getNext(activeImg, totalImg)),
      disabled: nextDisabled,
    },
  ];

  const items = buttons.map(({ icon, text, handleClick, disabled }, index) => {
    return (
      <>
        {showNavigation && index === 6 ? <Divider /> : null}
        {(showNavigation || (!showNavigation && index < 6)) && (
          <ImageViewerControlutton
            key={uid()}
            showTooltip={showTooltip}
            icon={icon}
            text={text}
            onClick={handleClick}
            disabled={disabled}
          />
        )}
      </>
    );
  });
  const counterIsVisible = !!showCounter && totalImg > 1;

  return (
    <Wrapper {...props}>
      {counterIsVisible && <ImageCounter activeImg={activeImg} totalImg={totalImg} />}
      <ButtonsWrapper>{items}</ButtonsWrapper>
    </Wrapper>
  );
};
