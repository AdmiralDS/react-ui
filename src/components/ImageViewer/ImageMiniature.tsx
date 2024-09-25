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

import { CategoryGalleryOutline, ServiceEyeOutline } from '@admiral-ds/icons';
import { useEffect, useRef, useState } from 'react';

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

const StyledCategoryGalleryOutline = styled(CategoryGalleryOutline)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;
const StyledServiceEyeOutline = styled(ServiceEyeOutline)`
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
const ErrorOnLoadBlock = styled.div<{ $isVisible: boolean }>`
  ${blockPositionCss};
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
  background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
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
  cursor: ${(p) => (p.$errorOnLoadImg ? 'not-allowed' : 'pointer')};
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: ${(p) => getImageMiniatureIconSize(p.$dimension)}px;
    height: ${(p) => getImageMiniatureIconSize(p.$dimension)}px;
  }

  ${(p) => !p.$errorOnLoadImg && hoverStyle}
`;
const StyledImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const ImageMiniature = ({ src, alt, dimension = 'm', onError, ...props }: ImageMiniatureProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [errorOnLoadImg, setErrorOnLoadImg] = useState(false);
  useEffect(() => {
    function errorEventListener(e: Event) {
      setErrorOnLoadImg(true);
      onError?.(e);
    }
    const imgNode = imgRef.current;
    if (imgNode) {
      imgNode.addEventListener('error', errorEventListener);
      return () => imgNode.removeEventListener('error', errorEventListener);
    }
  }, []);

  return (
    <Wrapper {...props} $dimension={dimension} $errorOnLoadImg={errorOnLoadImg}>
      <StyledImg ref={imgRef} src={src} alt={alt} />
      {errorOnLoadImg ? (
        <ErrorOnLoadBlock $isVisible={errorOnLoadImg}>
          <StyledCategoryGalleryOutline />
        </ErrorOnLoadBlock>
      ) : (
        <HoverEffectBlock>
          <StyledServiceEyeOutline />
        </HoverEffectBlock>
      )}
    </Wrapper>
  );
};
