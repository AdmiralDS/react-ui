import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';
import { refSetter } from '#src/components/common/utils/refSetter';
import { PositionInPortal } from '#src/components/PositionInPortal';

const IconSizeL = 24;
const IconSizeM = 20;
const IconSizeS = 16;

export type IconPlacementDimension = 'lBig' | 'lSmall' | 'mBig' | 'mSmall' | 's';
export type ContainerRole = 'hover' | 'active' | 'focus';

function getIconSize(dimension?: IconPlacementDimension) {
  switch (dimension) {
    case 'lSmall':
    case 'lBig':
      return IconSizeL;
    case 'mSmall':
    case 'mBig':
      return IconSizeM;
    case 's':
      return IconSizeS;
    default:
      return IconSizeL;
  }
}

function getHoverOffset(dimension?: IconPlacementDimension) {
  switch (dimension) {
    case 'lBig':
    case 'mBig':
      return 6;
    case 'lSmall':
    case 'mSmall':
    case 's':
      return 4;
    default:
      return 4;
  }
}

function getHoverSize(dimension?: IconPlacementDimension) {
  switch (dimension) {
    case 'lBig':
    case 'mBig':
      return getIconSize(dimension) + getHoverOffset(dimension) * 2;
    case 'lSmall':
    case 'mSmall':
    case 's':
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

const StyledButton = styled.button<{ dimension?: IconPlacementDimension }>`
  position: relative;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  height: ${(p) => getIconSize(p.dimension)}px;
  width: ${(p) => getIconSize(p.dimension)}px;
  border-radius: ${(p) => smallGroupBorderRadius(p.theme.shape)};
  overflow: visible;

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
    case 'focus':
      return 'Opacity/Focus';
    default:
      return 'Opacity/Hover';
  }
};

const ActivityHighlighter = styled.div<{ dimension?: IconPlacementDimension; containerRole?: ContainerRole }>`
  width: ${(p) => getHoverSize(p.dimension)}px;
  height: ${(p) => getHoverSize(p.dimension)}px;
  border-radius: 50%;
  background-color: ${(p) => (p.containerRole ? p.theme.color[getContainerColor(p.containerRole)] : 'transparent')};
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

//<editor-fold desc="With Portal">
const Wrapper = styled.div<{ dimension?: IconPlacementDimension }>`
  height: ${(p) => getIconSize(p.dimension)}px;
  width: ${(p) => getIconSize(p.dimension)}px;
  overflow: visible;
  position: relative;
  display: inline-block;
`;

export const IconPlacement = React.forwardRef<HTMLButtonElement, IconPlacementProps>(
  ({ type = 'button', className, dimension = 'lBig', disabled = false, children, ...props }, ref) => {
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
      <Wrapper dimension={dimension} className={className}>
        {visible && (
          <PositionInPortal targetRef={buttonRef}>
            {visible && <ActivityHighlighter containerRole={containerRole} dimension={dimension} />}
            <IconPlacementContent dimension={dimension}>{children}</IconPlacementContent>
          </PositionInPortal>
        )}
        <StyledButton ref={refSetter(ref, buttonRef)} type={type} dimension={dimension} disabled={disabled} {...props}>
          <IconPlacementContent dimension={dimension}>{children}</IconPlacementContent>
        </StyledButton>
      </Wrapper>
    );
  },
);
//</editor-fold>

//<editor-fold desc="With ::before">
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

const statusStylesCss = css`
  &:focus:not(:disabled) {
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
  }

  &:focus-visible:not(:disabled) {
    &::before {
      background-color: transparent;
    }
  }
`;

const ButtonStyledWithBefore = styled(StyledButton)`
  ${statusStylesCss}
`;

export const IconPlacementBefore = React.forwardRef<HTMLButtonElement, IconPlacementProps>(
  ({ type = 'button', dimension = 'lBig', disabled = false, children, ...props }, ref) => {
    return (
      <ButtonStyledWithBefore ref={ref} type={type} dimension={dimension} disabled={disabled} {...props}>
        <IconPlacementContent dimension={dimension}>{children}</IconPlacementContent>
      </ButtonStyledWithBefore>
    );
  },
);
//</editor-fold>

const ButtonStyledWithPseudoClasses = styled(StyledButton)`
  &:focus {
    > ${ActivityHighlighter} {
      display: inline-block;
      background-color: ${({ theme }) => theme.color['Opacity/Focus']};
    }
  }
  &:hover {
    > ${ActivityHighlighter} {
      display: inline-block;
      background-color: ${({ theme }) => theme.color['Opacity/Hover']};
    }
  }
  &:active {
    > ${ActivityHighlighter} {
      display: inline-block;
      background-color: ${({ theme }) => theme.color['Opacity/Press']};
    }
  }
  &:focus-visible {
    > ${ActivityHighlighter} {
      //display: none;
      //background-color: transparent;
    }
  }
`;

export const IconPlacementContainerCss = React.forwardRef<HTMLButtonElement, IconPlacementProps>(
  ({ type = 'button', dimension = 'lBig', disabled = false, children, ...props }, ref) => {
    return (
      <ButtonStyledWithPseudoClasses ref={ref} type={type} dimension={dimension} disabled={disabled} {...props}>
        <ActivityHighlighter dimension={dimension} />
        <IconPlacementContent dimension={dimension}>{children}</IconPlacementContent>
      </ButtonStyledWithPseudoClasses>
    );
  },
);
