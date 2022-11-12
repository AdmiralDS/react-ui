import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';
import { refSetter } from '#src/components/common/utils/refSetter';

const IconSizeM = 24;
const IconSizeS = 20;
const IconSizeXS = 16;

export type IconPlacementDimension = 'mBig' | 'm' | 'sBig' | 's' | 'xs';
export type ContainerRole = 'hover' | 'active' | 'focus';

function getIconSize(dimension?: IconPlacementDimension) {
  switch (dimension) {
    case 'm':
    case 'mBig':
      return IconSizeM;
    case 's':
    case 'sBig':
      return IconSizeS;
    case 'xs':
      return IconSizeXS;
    default:
      return IconSizeM;
  }
}

function getHoverOffset(dimension?: IconPlacementDimension) {
  switch (dimension) {
    case 'mBig':
    case 'sBig':
      return 6;
    case 'm':
    case 's':
    case 'xs':
      return 4;
    default:
      return 4;
  }
}

function getHoverSize(dimension?: IconPlacementDimension) {
  switch (dimension) {
    case 'mBig':
    case 'sBig':
      return getIconSize(dimension) + getHoverOffset(dimension) * 2;
    case 'm':
    case 's':
    case 'xs':
      return getIconSize(dimension) + getHoverOffset(dimension) * 2;
    default:
      return getIconSize(dimension) + getHoverOffset(dimension) * 2;
  }
}

export interface IconPlacementProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Размер кнопки */
  dimension?: IconPlacementDimension;
  /** Отключение кнопки */
  disabled?: boolean;
}

/*  &:focus:not(:disabled) {
    ${hoverStyle}
    &::before {
      background-color: ${({ theme }) => theme.color['Opacity/Focus']};
    }
  }

  &:hover:not(:disabled) {
    ${hoverStyle}
  }

  &:active:not(:disabled) {
    ${hoverStyle}
    &::before {
      background-color: ${({ theme }) => theme.color['Opacity/Press']};
    }
  }*/

const hoverStyle = css<{ dimension?: IconPlacementDimension }>`
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: ${(p) => getHoverSize(p.dimension)}px;
    height: ${(p) => getHoverSize(p.dimension)}px;
    background-color: ${({ theme }) => theme.color['Opacity/Hover']};
  }
`;
const StyledButton = styled.button<{ dimension?: IconPlacementDimension }>`
  position: relative;
  padding: 0;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  height: ${(p) => getIconSize(p.dimension)}px;
  width: ${(p) => getIconSize(p.dimension)}px;
  border-radius: ${(p) => smallGroupBorderRadius(p.theme.shape)};

  cursor: pointer;

  &:disabled {
    cursor: default;
    pointer-events: none;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
  }
`;

const IconPlacementContent = styled.div<{ dimension?: IconPlacementDimension }>`
  height: 100%;

  & *[fill^='#'] {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }

  & > svg {
    height: ${(p) => getIconSize(p.dimension)}px;
    width: ${(p) => getIconSize(p.dimension)}px;
  }
`;

const getContainerColor = (containerRole?: ContainerRole) => {
  switch (containerRole) {
    case 'hover':
      return 'Opacity/Hover';
    case 'active':
      return 'Opacity/Press';
    //return 'Error/Error 20';
    case 'focus':
      return 'Opacity/Focus';
    //return 'Primary/Primary 70';
    default:
      return 'Opacity/Hover';
  }
};

const Container = styled.div<{ dimension?: IconPlacementDimension; containerRole?: ContainerRole }>`
  width: ${(p) => getHoverSize(p.dimension)}px;
  height: ${(p) => getHoverSize(p.dimension)}px;
  border-radius: 50%;
  background-color: ${(p) => (p.containerRole ? p.theme.color[getContainerColor(p.containerRole)] : 'transparent')};
  pointer-events: none;
  top: -${(p) => getHoverOffset(p.dimension)}px;
  left: -${(p) => getHoverOffset(p.dimension)}px;
  position: absolute;
`;

const Wrapper = styled.div<{ dimension?: IconPlacementDimension }>`
  height: ${(p) => getIconSize(p.dimension)}px;
  width: ${(p) => getIconSize(p.dimension)}px;
  overflow: visible;
  position: relative;
`;

export const IconPlacement = React.forwardRef<HTMLButtonElement, IconPlacementProps>(
  ({ type = 'button', dimension = 'm', disabled = false, children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const [visible, setVisible] = React.useState<boolean>(false);
    const [containerRole, setContainerRole] = React.useState<ContainerRole | undefined>(undefined);

    React.useEffect(() => {
      const button = buttonRef.current;
      function hover() {
        if (containerRole === undefined) {
          setContainerRole('hover');
          setVisible(true);
        }
      }
      function blur() {
        if (containerRole === 'focus') {
          setContainerRole(undefined);
          setVisible(false);
        }
      }
      function hide() {
        if (containerRole === 'hover') {
          setContainerRole(undefined);
          setVisible(false);
        }
      }
      function active() {
        setContainerRole('active');
        setVisible(true);
      }
      function focus() {
        setContainerRole('focus');
        setVisible(true);
      }
      if (button) {
        /** Рекомендуется использовать именно addEventListener, так как React SyntheticEvent onMouseEnter
         * отрабатывает некорректно в случае, если мышь была наведена на задизейбленный элемент,
         * а затем была наведена на target элемент
         * https://github.com/facebook/react/issues/19419 */
        button.addEventListener('mouseenter', hover);
        button.addEventListener('mouseleave', hide);
        button.addEventListener('blur', blur);
        button.addEventListener('mousedown', active);
        button.addEventListener('mouseup', focus);
        //button.addEventListener('focus', focus);
        return () => {
          button.removeEventListener('mouseenter', hover);
          button.removeEventListener('mouseleave', hide);
          button.removeEventListener('blur', blur);
          button.removeEventListener('mousedown', active);
          button.removeEventListener('mouseup', focus);
          //button.removeEventListener('focus', focus);
        };
      }
    }, [buttonRef.current, visible, containerRole]);

    return (
      <Wrapper dimension={dimension}>
        {visible && <Container containerRole={containerRole} dimension={dimension} />}
        <StyledButton ref={refSetter(ref, buttonRef)} type={type} dimension={dimension} disabled={disabled} {...props}>
          <IconPlacementContent dimension={dimension}>{children}</IconPlacementContent>
        </StyledButton>
      </Wrapper>
    );
  },
);
