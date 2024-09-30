import styled, { useTheme } from 'styled-components';

import {
  IMAGE_VIEWER_CONTROLS_BORDER_RADIUS,
  IMAGE_VIEWER_CONTROLS_HEIGHT,
  IMAGE_VIEWER_CONTROLS_PADDING,
} from '#src/components/ImageViewer/constants';
import type { ImageViewerToolbarProps } from '#src/components/ImageViewer/types';
import { ImageCounter } from '#src/components/ImageViewer/ImageCounter';
import { ImageViewerControlButton } from '#src/components/ImageViewer/ImageViewerControlButton';

import { LIGHT_THEME } from '#src/components/themes';
import { uid } from '#src/components/common/uid';

import { ReactComponent as RotateLeftOutline } from '@admiral-ds/icons/build/documents/RotateLeftOutline.svg';
import { ReactComponent as RotateRightOutline } from '@admiral-ds/icons/build/documents/RotateRightOutline.svg';
import { ReactComponent as ArrowsHorizontalOutline } from '@admiral-ds/icons/build/system/ArrowsHorizontalOutline.svg';
import { ReactComponent as ArrowsVerticalOutline } from '@admiral-ds/icons/build/system/ArrowsVerticalOutline.svg';
import { ReactComponent as ZoomOutOutline } from '@admiral-ds/icons/build/system/ZoomOutOutline.svg';
import { ReactComponent as ZoomInOutline } from '@admiral-ds/icons/build/system/ZoomInOutline.svg';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';
import { useMemo } from 'react';

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
  actions,
  transform,
  //scale,
  minScale,
  maxScale,
  activeImg,
  totalImg,
  locale,
  ...props
}: ImageViewerToolbarProps) => {
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
    actions.onActiveImgChange?.(newIndex);
  };

  const prevDisabled = activeImg <= 0;
  const nextDisabled = activeImg >= totalImg - 1;
  const zoomOutDisabled = transform.scale <= minScale;
  const zoomInDisabled = transform.scale >= maxScale;

  const buttons = [
    { icon: <ArrowsHorizontalOutline />, text: flipHorizontallyText, handleClick: emptyHandler, disabled: false },
    { icon: <ArrowsVerticalOutline />, text: flipVerticallyText, handleClick: emptyHandler, disabled: false },
    { icon: <RotateLeftOutline />, text: rotateLeftText, handleClick: emptyHandler, disabled: false },
    { icon: <RotateRightOutline />, text: rotateRightText, handleClick: emptyHandler, disabled: false },
    { icon: <ZoomOutOutline />, text: zoomOutText, handleClick: actions.onZoomOut, disabled: zoomOutDisabled },
    { icon: <ZoomInOutline />, text: zoomInText, handleClick: actions.onZoomIn, disabled: zoomInDisabled },
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
          <ImageViewerControlButton
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
