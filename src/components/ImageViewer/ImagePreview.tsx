import React, { forwardRef, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

import type { ImagePreviewProps, ImageProps } from './types';
import { ImageViewerCloseButton } from '#src/components/ImageViewer/ImageViewerCloseButton';
import { ImageViewerToolbar } from '#src/components/ImageViewer/ImageViewerToolbar';
import { getClientSize, getNext, getPrev, updatePosition } from '#src/components/ImageViewer/utils';
import { BASE_SCALE_RATIO, IMAGE_SCALE_PRECISION, WHEEL_MAX_SCALE_RATIO } from '#src/components/ImageViewer/constants';

import { keyboardKey } from '../common/keyboardKey';
import type { TouchPointInfoType } from '#src/components/common/utils/touchUtils';
import { getCenter, getDistance, getSwipeType } from '#src/components/common/utils/touchUtils';

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});
  transition: opacity 0.3s ease 0s;
  z-index: var(--admiral-z-index-modal, ${({ theme }) => theme.zIndex.modal});
  outline: none;
`;

const CloseButton = styled(ImageViewerCloseButton)`
  position: absolute;
  right: 22px;
  top: 18px;
`;
const Toolbar = styled(ImageViewerToolbar)`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translate(-50%);
`;

const StyledImage = styled.img<{ $transitionEnabled: boolean; $isVisible?: boolean }>`
  outline: none;
  max-width: 100%;
  max-height: 70%;
  transition: ${({ $transitionEnabled }) => ($transitionEnabled ? 'all 0.3s ease' : 'none')};
  cursor: grab;
  display: ${(p) => (p.$isVisible ? 'block' : 'none')};

  &:active {
    cursor: grabbing;
  }
`;

interface ImageViewProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  item: string | ImageProps;
  scale: number;
  flipX: boolean;
  flipY: boolean;
  rotate: number;
  x: number;
  y: number;
  transitionEnabled: boolean;
  isVisible?: boolean;
}
const ImageView = forwardRef<HTMLImageElement, ImageViewProps>(
  ({ item, scale, flipX, flipY, rotate, x, y, transitionEnabled, isVisible = true, ...props }, ref) => {
    const itemSrc = typeof item === 'string' ? item : item.src;
    const itemProps = typeof item === 'string' ? undefined : item;

    return (
      <StyledImage
        {...itemProps}
        {...props}
        src={itemSrc}
        tabIndex={-1}
        ref={ref}
        $transitionEnabled={transitionEnabled}
        $isVisible={isVisible}
        style={{
          transform: `translate(${x}px, ${y}px) scale(${
            flipX ? '-' : ''
          }${scale}, ${flipY ? '-' : ''}${scale}) rotate(${rotate}deg)`,
        }}
      />
    );
  },
);

export const ImagePreview = ({
  item,
  container,
  minScale = 1,
  maxScale = 10,
  errorMiniature,
  scaleStep = 0.5,
  showTooltip,
  showCounter,
  showNavigation,
  locale,
  activeImg = 0,
  totalImg,
  onVisibleChange,
  onActiveChange,
  onTransform,
}: ImagePreviewProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  // Стейт для отложенного запуска пересчета координат после поворота или изменения масштаба, чтобы ImageView успел перерендериться
  const [needUpdateCoordinates, setNeedUpdateCoordinates] = useState(false);
  const handleNeedUpdateCoordinatesChange = (newState: boolean) => {
    setTimeout(() => setNeedUpdateCoordinates(newState), 250);
  };

  //<editor-fold desc="Получение данных о загрузке изображения">
  const [imgNaturalHeight, setImgNaturalHeight] = useState(0);
  const [errorOnLoadImg, setErrorOnLoadImg] = useState(false);

  const handleImgLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const imgNode = e.target as HTMLImageElement;
    setImgNaturalHeight(imgNode.naturalHeight);
    overlayRef.current?.focus();
  };
  const handleImgError = () => {
    setErrorOnLoadImg(true);
    overlayRef.current?.focus();
  };
  //</editor-fold>

  //<editor-fold desc="Отслеживание начальных (отрендеренных) размеров изображения">
  const [imgRenderedWidth, setImgRenderedWidth] = useState(0);
  const [imgRenderedHeight, setImgRenderedHeight] = useState(0);
  useLayoutEffect(() => {
    function setRenderedImgSize(width: number, height: number) {
      setImgRenderedWidth(width);
      setImgRenderedHeight(height);
    }
    if (imgRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => setRenderedImgSize(entry.contentRect.width || 0, entry.contentRect.height || 0));
      });
      resizeObserver.observe(imgRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);
  //</editor-fold>

  //<editor-fold desc="Обработчики действий для закрытия режима просмотра">
  const handleClose = () => {
    onVisibleChange?.(false);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.target === overlayRef.current && handleClose();
  };

  const handleCloseBtnClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleClose();
  };
  //</editor-fold>

  //<editor-fold desc="Остлеживание текущего масштаба">
  const [scale, setScale] = useState(1);
  const handleScaleChange = (newScale: number) => {
    setScale(newScale);
    onTransform?.({ transform: { ...transform, scale: newScale }, action: 'zoomChange' });
  };
  const handleZoomIn = () => {
    handleZoomChange(BASE_SCALE_RATIO + scaleStep);
  };
  const handleZoomOut = () => {
    handleZoomChange(BASE_SCALE_RATIO / (BASE_SCALE_RATIO + scaleStep));
  };
  //</editor-fold>

  //<editor-fold desc="Определение значений масштаба 1:1 и "на весь экран"">
  const minScaleInner = minScale ?? 1;
  // Масштаб для увеличения изображения в изначальный размер (intrinsic size of an image)
  const [realScaleState, setRealScaleState] = useState(1.0);
  // Масштаб для увеличения изображения на весь экран (100% ширины или высоты)
  const [fullScaleState, setFullScaleState] = useState(1.0);
  // Устанавливает масштаб до размера 1:1 и обратно в 1
  const handleDoubleClick: React.MouseEventHandler<HTMLImageElement> = (event) => {
    handleZoomChange(
      scale === realScaleState ? BASE_SCALE_RATIO / realScaleState : realScaleState / scale,
      event.clientX,
      event.clientY,
    );
  };
  const handleEnterKeyDown = () => {
    handleZoomChange(scale === realScaleState ? BASE_SCALE_RATIO / realScaleState : realScaleState / scale);
  };
  // Устанавливает масштаб на весь экран и обратно в 1
  const handleFkeyDown = () => {
    handleZoomChange(scale === fullScaleState ? BASE_SCALE_RATIO / fullScaleState : fullScaleState / scale);
  };

  const getFullScale = () => {
    if (overlayRef.current) {
      const { width: overlayWidth, height: overlayHeight } = overlayRef.current.getBoundingClientRect();

      return Math.min(
        +(overlayWidth / imgRenderedWidth).toFixed(IMAGE_SCALE_PRECISION),
        +(overlayHeight / imgRenderedHeight).toFixed(IMAGE_SCALE_PRECISION),
      );
    }
    return 1;
  };
  useEffect(() => {
    setRealScaleState(+(imgNaturalHeight / imgRenderedHeight).toFixed(IMAGE_SCALE_PRECISION));
    setFullScaleState(getFullScale());
  }, [imgRenderedWidth, imgRenderedHeight, imgNaturalHeight]);
  //</editor-fold>

  //<editor-fold desc="Стейты для отражения изображения по горизонтали и вертикали">
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);
  const handleFlipXChange = () => {
    onTransform?.({ transform: { ...transform, flipX: !flipX }, action: 'flipX' });
    setFlipX((prevState) => !prevState);
  };
  const handleFlipYChange = () => {
    onTransform?.({ transform: { ...transform, flipY: !flipY }, action: 'flipY' });
    setFlipY((prevState) => !prevState);
  };
  //</editor-fold>

  //<editor-fold desc="Обработка поворота изображения">
  const [rotate, setRotate] = useState(0);
  const handleRotateLeft = () => {
    onTransform?.({ transform: { ...transform, rotate: rotate - 90 }, action: 'rotateLeft' });
    setRotate((prevState) => prevState - 90);
    handleNeedUpdateCoordinatesChange(true);
  };
  const handleRotateRight = () => {
    setRotate((prevState) => prevState + 90);
    onTransform?.({ transform: { ...transform, rotate: rotate + 90 }, action: 'rotateRight' });
    handleNeedUpdateCoordinatesChange(true);
  };
  //</editor-fold>

  //<editor-fold desc="Обработка перемещения изображения внутри зоны просмотра">
  // Показывает, что изображение находится в процессе перемещения, ЛКМ зажата
  const [isMoving, setMoving] = useState(false);
  // Координаты для сдвига изображения
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  // Информация о произошедшем сдвиге
  const startPositionInfo = useRef({
    diffX: 0,
    diffY: 0,
    transformX: 0,
    transformY: 0,
  });
  // Очистка всех состояний трансформации изображения
  const clearImgTransformStates = () => {
    setCoordinates({ x: 0, y: 0 });
    setScale(1);
    setFlipX(false);
    setFlipY(false);
    setRotate(0);
    onTransform?.({ transform: { x: 0, y: 0, scale: 1, rotate: 0, flipX: false, flipY: false }, action: 'reset' });
  };
  // Обработчик смены изображения внутри режима просмотра
  const handleActiveChange = (index: number) => {
    clearImgTransformStates();
    onActiveChange?.(index);
    setErrorOnLoadImg(false);
  };
  // Обработка клавиатурных команд для перелистывания изображений и изменения масштаба
  const handleKeyDown = (event: KeyboardEvent) => {
    const code = keyboardKey.getCode(event);
    event.preventDefault();
    if (code === keyboardKey.Escape) {
      // prevent browser-specific escape key behavior (Safari exits fullscreen)
      // prevent other overlays from closing
      event.stopPropagation();
      handleClose();
    } else if (code === keyboardKey.ArrowLeft) {
      if (activeImg > 0) {
        handleActiveChange(getPrev(activeImg, totalImg));
      }
    } else if (code === keyboardKey.ArrowRight || code === keyboardKey[' ']) {
      if (activeImg < totalImg - 1) {
        handleActiveChange(getNext(activeImg, totalImg));
      }
    } else if (code === keyboardKey.ArrowUp) {
      handleZoomIn();
    } else if (code === keyboardKey.ArrowDown) {
      handleZoomOut();
    } else if (code === keyboardKey.Enter) {
      handleEnterKeyDown();
    } else if (code === keyboardKey.F) {
      event.stopPropagation();
      handleFkeyDown();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImg, scale, fullScaleState, realScaleState]);
  // Начало перетаскивания изображения
  const handleImgMouseDown: React.MouseEventHandler<HTMLImageElement> = (event) => {
    // Only allow main button
    if (event.button !== 0 || !imgRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    startPositionInfo.current = {
      diffX: event.pageX - coordinates.x,
      diffY: event.pageY - coordinates.y,
      transformX: coordinates.x,
      transformY: coordinates.y,
    };
    setMoving(true);
  };
  // Движение изображаения при зажатой ЛКМ
  const handleImgMouseMove = (event: MouseEvent) => {
    if (isMoving && imgRef.current) {
      const newX = event.pageX - startPositionInfo.current.diffX;
      const newY = event.pageY - startPositionInfo.current.diffY;
      // При перемещении установка новых координат идет напрямую через анимацию css
      setCoordinates({ x: newX, y: newY });
      onTransform?.({ transform: { ...transform, x: newX, y: newY }, action: 'move' });
    }
  };
  // Окончательное позиционирование изображения
  const handleImgMouseUp = () => {
    if (isMoving && imgRef.current) {
      setMoving(false);

      /** No need to restore the position when the picture is not moved, So as not to interfere with the click */
      const { transformX, transformY } = startPositionInfo.current;
      const hasChangedPosition = coordinates.x !== transformX && coordinates.y !== transformY;
      if (!hasChangedPosition) return;

      const width = imgRef.current.offsetWidth * scale;
      const height = imgRef.current.offsetHeight * scale;
      const { left, top } = imgRef.current.getBoundingClientRect();

      const updated = updatePosition(width, height, left, top, rotate, coordinates);
      // При заверешении перемещения анимации css отключается и происходит через requestAnimationFrame
      // Одновременно использовать и анимацию css и requestAnimationFrame нельзя, они начинают конфликтовать между собой
      if (updated.x !== coordinates.x || updated.y !== coordinates.y) {
        requestAnimationFrame(() => {
          setCoordinates(updated);
        });
        onTransform?.({ transform: { ...transform, x: updated.x, y: updated.y }, action: 'move' });
      }
    }
  };
  // Расчет изменения масштаба с учетом установки определенного центра изображения, относительно которого необходимо рассчитать конечное положение
  /** Scale according to the position of centerX and centerY */
  const handleZoomChange = (ratio: number, centerX?: number, centerY?: number) => {
    if (imgRef.current) {
      const { width, height, offsetWidth, offsetHeight, offsetLeft, offsetTop } = imgRef.current;

      let newRatio = ratio;
      let newScale = scale * ratio;
      if (newScale > maxScale) {
        newScale = maxScale;
        newRatio = maxScale / scale;
      } else if (newScale < minScale) {
        newScale = minScale;
        newRatio = newScale / scale;
      }

      /** Default center point scaling */
      const mergedCenterX = centerX ?? innerWidth / 2;
      const mergedCenterY = centerY ?? innerHeight / 2;

      const diffRatio = newRatio - 1;
      /** Deviation calculated from image size */
      const diffImgX = diffRatio * width * 0.5;
      const diffImgY = diffRatio * height * 0.5;
      /** The difference between the click position and the edge of the document */
      const diffOffsetLeft = diffRatio * (mergedCenterX - coordinates.x - offsetLeft);
      const diffOffsetTop = diffRatio * (mergedCenterY - coordinates.y - offsetTop);
      /** Final positioning */
      let newX = coordinates.x - (diffOffsetLeft - diffImgX);
      let newY = coordinates.y - (diffOffsetTop - diffImgY);

      /**
       * When zooming the image
       * When the image size is smaller than the width and height of the window, the position is initialized
       */
      if (ratio < 1 && newScale === 1) {
        const mergedWidth = offsetWidth * newScale;
        const mergedHeight = offsetHeight * newScale;
        const { width: clientWidth, height: clientHeight } = getClientSize();
        if (mergedWidth <= clientWidth && mergedHeight <= clientHeight) {
          newX = 0;
          newY = 0;
        }
      }

      handleScaleChange(newScale);
      setCoordinates({ x: newX, y: newY });
      if (coordinates.x !== newX || coordinates.y !== newY) {
        onTransform?.({ transform: { ...transform, x: newX, y: newY }, action: 'move' });
      }
      handleNeedUpdateCoordinatesChange(true);
    }
  };
  // Обработка изменения масштаба по колесику мыши
  const onWheel = (event: React.WheelEvent<HTMLImageElement>) => {
    if (event.deltaY == 0) return;

    event.preventDefault();
    event.stopPropagation();

    // Scale ratio depends on the deltaY size
    const scaleRatio = Math.abs(event.deltaY / 100);
    // Limit the maximum scale ratio
    const mergedScaleRatio = Math.min(scaleRatio, WHEEL_MAX_SCALE_RATIO);
    // Scale the ratio each time
    let ratio = BASE_SCALE_RATIO + mergedScaleRatio * scaleStep;
    if (event.deltaY > 0) {
      ratio = BASE_SCALE_RATIO / ratio;
    }
    handleZoomChange(ratio, event.clientX, event.clientY);
  };
  // Listeners mousemove и mouseup добавлены на document, иначе при выходе за рамки изображения они перестанут работать
  useEffect(() => {
    document.addEventListener('mousemove', handleImgMouseMove);
    document.addEventListener('mouseup', handleImgMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleImgMouseMove);
      document.removeEventListener('mouseup', handleImgMouseUp);
    };
  }, [isMoving, coordinates, rotate]);
  // Отложенная корректировка координат для позиционирования изображения (центрирование при размерах меньше или "прилипание к краям")
  useEffect(() => {
    if (needUpdateCoordinates && !isMoving && imgRef.current) {
      const width = imgRef.current.offsetWidth * scale;
      const height = imgRef.current.offsetHeight * scale;
      const imgRect = imgRef.current.getBoundingClientRect();

      const updated = updatePosition(width, height, imgRect.left, imgRect.top, rotate, coordinates);
      if (updated.x !== coordinates.x || updated.y !== coordinates.y) {
        setCoordinates(updated);
        onTransform?.({ transform: { ...transform, x: updated.x, y: updated.y }, action: 'move' });
      }
      setNeedUpdateCoordinates(false);
    }
  }, [needUpdateCoordinates]);
  //</editor-fold>

  //<editor-fold desc="Обработчики touch событий">
  const [isTouching, setIsTouching] = useState(false);
  const touchPointInfo = useRef<TouchPointInfoType>({
    point1: { x: 0, y: 0 },
    point2: { x: 0, y: 0 },
    eventType: 'none',
    startEl: undefined,
    timeDown: undefined,
    xDown: undefined,
    yDown: undefined,
    xDiff: undefined,
    yDiff: undefined,
    touchCount: undefined,
  });

  const updateTouchPointInfo = (values: Partial<TouchPointInfoType>) => {
    touchPointInfo.current = {
      ...touchPointInfo.current,
      ...values,
    };
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLImageElement>) => {
    event.stopPropagation();
    setIsTouching(true);

    const { touches = [] } = event;
    updateTouchPointInfo({
      startEl: event.target,
      timeDown: Date.now(),
      touchCount: touches.length,
    });
    if (touches.length > 1) {
      // touch zoom
      updateTouchPointInfo({
        point1: { x: touches[0].clientX, y: touches[0].clientY },
        point2: { x: touches[1].clientX, y: touches[1].clientY },
        eventType: 'touchZoom',
      });
    } else {
      // touch move
      updateTouchPointInfo({
        point1: {
          x: touches[0].clientX - coordinates.x,
          y: touches[0].clientY - coordinates.y,
        },
        eventType: 'move',
        xDown: touches[0].clientX,
        yDown: touches[0].clientY,
        xDiff: 0,
        yDiff: 0,
      });
    }
  };
  const handleTouchMove = (event: React.TouchEvent<HTMLImageElement>) => {
    const { touches = [] } = event;
    const { point1, point2, eventType, xDown, yDown } = touchPointInfo.current;

    if (touches.length > 1 && eventType === 'touchZoom') {
      // touch zoom
      const newPoint1 = {
        x: touches[0].clientX,
        y: touches[0].clientY,
      };
      const newPoint2 = {
        x: touches[1].clientX,
        y: touches[1].clientY,
      };
      const [centerX, centerY] = getCenter(point1, point2, newPoint1, newPoint2);
      const ratio = getDistance(newPoint1, newPoint2) / getDistance(point1, point2);

      handleZoomChange(ratio, centerX, centerY);
      updateTouchPointInfo({
        point1: newPoint1,
        point2: newPoint2,
        eventType: 'touchZoom',
      });
    } else if (eventType === 'move') {
      updateTouchPointInfo({ eventType: 'move' });
      const newX = touches[0].clientX - point1.x;
      const newY = touches[0].clientY - point1.y;
      // touch move
      setCoordinates({ x: newX, y: newY });
      onTransform?.({ transform: { ...transform, x: newX, y: newY }, action: 'move' });
      if (xDown && yDown) {
        updateTouchPointInfo({
          xDiff: xDown - touches[0].clientX,
          yDiff: yDown - touches[0].clientY,
        });
      }
    }
  };
  const handleTouchEnd = (event: React.TouchEvent<HTMLImageElement>) => {
    if (isTouching && imgRef.current) {
      setIsTouching(false);

      const { eventType, startEl, timeDown, xDiff, yDiff, xDown, yDown } = touchPointInfo.current;

      if (eventType === 'move') {
        const timeUp = Date.now();
        const type = getSwipeType(startEl, event.target, timeDown, timeUp, xDown, yDown, xDiff, yDiff);

        if (type === 'swiped-left' && activeImg < totalImg - 1) {
          handleActiveChange(getNext(activeImg, totalImg));
        } else if (type === 'swiped-right' && activeImg > 0) {
          handleActiveChange(getPrev(activeImg, totalImg));
        } else {
          const width = imgRef.current.offsetWidth * scale;
          const height = imgRef.current.offsetHeight * scale;
          const { left, top } = imgRef.current.getBoundingClientRect();

          const updated = updatePosition(width, height, left, top, rotate, coordinates);
          // При заверешении перемещения анимации css отключается и происходит через requestAnimationFrame
          // Одновременно использовать и анимацию css и requestAnimationFrame нельзя, они начинают конфликтовать между собой
          if (updated.x !== coordinates.x || updated.y !== coordinates.y) {
            requestAnimationFrame(() => {
              setCoordinates(updated);
            });
            onTransform?.({ transform, action: 'move' });
          }
        }
      }

      updateTouchPointInfo({
        eventType: 'none',
        startEl: undefined,
        timeDown: undefined,
        xDown: undefined,
        yDown: undefined,
        xDiff: undefined,
        yDiff: undefined,
        touchCount: undefined,
      });
    }
  };
  //</editor-fold>
  const transform = useMemo(() => {
    return { x: coordinates.x, y: coordinates.y, rotate, scale, flipX, flipY };
  }, [coordinates, rotate, scale, flipX, flipY]);

  return createPortal(
    <Overlay ref={overlayRef} tabIndex={-1} onMouseDown={handleMouseDown}>
      {errorOnLoadImg && errorMiniature}
      <ImageView
        item={item}
        ref={imgRef}
        scale={scale}
        flipX={flipX}
        flipY={flipY}
        rotate={rotate}
        x={coordinates.x}
        y={coordinates.y}
        onDoubleClick={handleDoubleClick}
        onMouseDown={handleImgMouseDown}
        transitionEnabled={!isMoving}
        isVisible={!errorOnLoadImg}
        onWheel={onWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onLoad={handleImgLoad}
        onError={handleImgError}
      />
      <CloseButton onClick={handleCloseBtnClick} />
      <Toolbar
        activeImg={activeImg}
        totalImg={totalImg}
        showTooltip={showTooltip}
        showCounter={showCounter}
        showNavigation={showNavigation}
        actions={{
          onActiveImgChange: handleActiveChange,
          onFlipX: handleFlipXChange,
          onFlipY: handleFlipYChange,
          onRotateLeft: handleRotateLeft,
          onRotateRight: handleRotateRight,
          onZoomOut: handleZoomOut,
          onZoomIn: handleZoomIn,
          onClose: handleClose,
        }}
        actionsDisabled={errorOnLoadImg}
        minScale={minScaleInner}
        maxScale={maxScale}
        transform={transform}
        locale={locale}
      />
    </Overlay>,
    container || document.body,
  );
};
