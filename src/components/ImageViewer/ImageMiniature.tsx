import styled from 'styled-components';

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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;
const StyledServiceEyeOutline = styled(ServiceEyeOutline)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  }
`;
const ErrorOnLoadBlock = styled.div<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
`;
const HoverEffectBlock = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});
`;

const Wrapper = styled.div<{ $dimension: ImageMiniatureDimension }>`
  width: ${(p) => getImageMiniatureSize(p.$dimension)}px;
  height: ${(p) => getImageMiniatureSize(p.$dimension)}px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: ${(p) => getImageMiniatureIconSize(p.$dimension)}px;
    height: ${(p) => getImageMiniatureIconSize(p.$dimension)}px;
  }

  &:hover {
    & ${ErrorOnLoadBlock} {
      & svg {
        visibility: hidden;
      }
    }
    & ${HoverEffectBlock} {
      visibility: visible;
    }
  }
`;
const StyledImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const ImageMiniature = ({ src, alt, dimension = 'm', ...props }: ImageMiniatureProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [errorOnLoadImg, setErrorOnLoadImg] = useState(false);
  useEffect(() => {
    function errorEventListener() {
      setErrorOnLoadImg(true);
    }
    const imgNode = imgRef.current;
    if (imgNode) {
      imgNode.addEventListener('error', errorEventListener);
      return () => imgNode.removeEventListener('error', errorEventListener);
    }
  }, []);
  return (
    <Wrapper {...props} $dimension={dimension}>
      <StyledImg ref={imgRef} src={src} alt={alt} />
      {errorOnLoadImg && (
        <ErrorOnLoadBlock $isVisible={errorOnLoadImg}>
          <StyledCategoryGalleryOutline />
        </ErrorOnLoadBlock>
      )}
      <HoverEffectBlock>
        <StyledServiceEyeOutline />
      </HoverEffectBlock>
    </Wrapper>
  );
};
