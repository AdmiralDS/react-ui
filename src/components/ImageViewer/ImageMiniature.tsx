import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import {
  IMAGE_MINIATURE_ICON_SIZE_L_XL,
  IMAGE_MINIATURE_ICON_SIZE_S_M,
  IMAGE_MINIATURE_ICON_SIZE_XXS_XS,
  IMAGE_MINIATURE_SIZE_L,
  IMAGE_MINIATURE_SIZE_M,
  IMAGE_MINIATURE_SIZE_S,
  IMAGE_MINIATURE_SIZE_XL,
  IMAGE_MINIATURE_SIZE_XS,
  IMAGE_MINIATURE_SIZE_XXS,
} from '#src/components/ImageViewer/constants';
import type { ImageMiniatureDimension, ImageMiniatureProps } from '#src/components/ImageViewer/types';

import { ReactComponent as GalleryOutline } from '@admiral-ds/icons/build/category/GalleryOutline.svg';
import { ReactComponent as EyeOutline } from '@admiral-ds/icons/build/service/EyeOutline.svg';

function getImageMiniatureSize(dimension: ImageMiniatureDimension) {
  switch (dimension) {
    case 'xxs':
      return IMAGE_MINIATURE_SIZE_XXS;
    case 'xs':
      return IMAGE_MINIATURE_SIZE_XS;
    case 's':
      return IMAGE_MINIATURE_SIZE_S;
    case 'm':
      return IMAGE_MINIATURE_SIZE_M;
    case 'l':
      return IMAGE_MINIATURE_SIZE_L;
    case 'xl':
      return IMAGE_MINIATURE_SIZE_XL;
  }
}
function getImageMiniatureIconSize(dimension: ImageMiniatureDimension) {
  switch (dimension) {
    case 'xxs':
    case 'xs':
      return IMAGE_MINIATURE_ICON_SIZE_XXS_XS;
    case 's':
    case 'm':
      return IMAGE_MINIATURE_ICON_SIZE_S_M;
    case 'l':
    case 'xl':
      return IMAGE_MINIATURE_ICON_SIZE_L_XL;
  }
}

const StyledCategoryGalleryOutline = styled(GalleryOutline)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;
const StyledServiceEyeOutline = styled(EyeOutline)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  }
`;
const blockPositionCss = css`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ErrorOnLoadBlock = styled.div<{ $dimension: ImageMiniatureDimension }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(p) => getImageMiniatureSize(p.$dimension)}px;
  height: ${(p) => getImageMiniatureSize(p.$dimension)}px;
  border-radius: 4px;

  background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});

  & svg {
    width: ${(p) => getImageMiniatureIconSize(p.$dimension)}px;
    height: ${(p) => getImageMiniatureIconSize(p.$dimension)}px;
  }
`;
interface ErrorMiniatureProps extends React.HTMLAttributes<HTMLDivElement> {
  dimension?: ImageMiniatureDimension;
}
export const EmptyMiniature = ({ dimension = 'm', ...props }: ErrorMiniatureProps) => {
  return (
    <ErrorOnLoadBlock {...props} $dimension={dimension}>
      <StyledCategoryGalleryOutline />
    </ErrorOnLoadBlock>
  );
};
const StyledEmptyMiniature = styled(EmptyMiniature)`
  ${blockPositionCss};
`;
const HoverEffectBlock = styled.div`
  ${blockPositionCss};
  visibility: hidden;
  background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});
`;

const hoverStyle = css`
  &:hover {
    & ${HoverEffectBlock} {
      visibility: visible;
    }
  }
`;

const Wrapper = styled.div<{ $dimension: ImageMiniatureDimension; $errorOnLoadImg: boolean }>`
  width: ${(p) => getImageMiniatureSize(p.$dimension)}px;
  height: ${(p) => getImageMiniatureSize(p.$dimension)}px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: ${(p) => getImageMiniatureIconSize(p.$dimension)}px;
    height: ${(p) => getImageMiniatureIconSize(p.$dimension)}px;
  }

  ${hoverStyle}
`;
const StyledImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const ImageMiniature = ({ item, dimension = 'm', onError, onMouseDown, ...props }: ImageMiniatureProps) => {
  const itemSrc = typeof item === 'string' ? item : item.src;
  const itemProps = typeof item === 'string' ? undefined : item;
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [errorOnLoadImg, setErrorOnLoadImg] = useState(false);

  const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setErrorOnLoadImg(true);
    onError?.(e);
  };

  return (
    <Wrapper {...props} $dimension={dimension} $errorOnLoadImg={errorOnLoadImg} onMouseDown={onMouseDown}>
      <StyledImg {...itemProps} ref={imgRef} src={itemSrc} onError={handleImgError} />
      {errorOnLoadImg ? (
        <StyledEmptyMiniature dimension={dimension} />
      ) : (
        <HoverEffectBlock>
          <StyledServiceEyeOutline />
        </HoverEffectBlock>
      )}
    </Wrapper>
  );
};
