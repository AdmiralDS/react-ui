import * as React from 'react';
import styled, { css } from 'styled-components';
import { refSetter } from '../common/utils/refSetter';
import { Tooltip } from '#src/components/Tooltip';
import { typography } from '#src/components/Typography';
import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';

export type TagDimension = 'm' | 's';

const TAG_HEIGHT_S = 20;
const TAG_HEIGHT_M = 24;
const TAG_PADDING_TOP_S = 1;
const TAG_PADDING_TOP_M = 3;
const TAG_PADDING_LEFT_S = 5;
const TAG_PADDING_LEFT_M = 7;

const circleBackground = css<{ background: TagKind | string }>`
  background: ${({ background, theme }) => {
    switch (background) {
      case 'green':
        return theme.color['Success/Success 50 Main'];
      case 'blue':
        return theme.color['Primary/Primary 60 Main'];
      case 'red':
        return theme.color['Error/Error 60 Main'];
      case 'orange':
        return theme.color['Warning/Warning 50 Main'];
      default:
        return background;
    }
  }};
`;

const wrapperBackground = css<{ background: TagKind | string }>`
  background: ${({ background, theme }) => {
    switch (background) {
      case 'green':
        return theme.color['Success/Success 10'];
      case 'blue':
        return theme.color['Primary/Primary 10'];
      case 'red':
        return theme.color['Error/Error 10'];
      case 'orange':
        return theme.color['Warning/Warning 10'];
      case 'neutral':
        return theme.color['Neutral/Neutral 10'];
      default:
        return background || theme.color['Neutral/Neutral 10'];
    }
  }};
`;

const wrapperBorder = css<{ border: TagKind | string }>`
  border: 1px solid
    ${({ border, theme }) => {
      switch (border) {
        case 'green':
          return theme.color['Success/Success 40'];
        case 'blue':
          return theme.color['Primary/Primary 50'];
        case 'red':
          return theme.color['Error/Error 50'];
        case 'orange':
          return theme.color['Warning/Warning 40'];
        case 'neutral':
          return theme.color['Neutral/Neutral 40'];
        default:
          return border || theme.color['Neutral/Neutral 40'];
      }
    }};
`;

const wrapperHover = css<{ background: TagKind | string }>`
  background: ${({ background, theme }) => {
    switch (background) {
      case 'green':
        return theme.color['Success/Success 20'];
      case 'blue':
        return theme.color['Primary/Primary 20'];
      case 'red':
        return theme.color['Error/Error 20'];
      case 'orange':
        return theme.color['Warning/Warning 20'];
      case 'neutral':
        return theme.color['Neutral/Neutral 20'];
      default:
        return background || theme.color['Neutral/Neutral 20'];
    }
  }};
`;

const Wrapper = styled.button<{
  dimension?: TagDimension;
  width?: number | string;
  clickable: boolean;
  as?: React.ElementType;
  statusViaBackground?: boolean;
  border: TagKind | string;
  background: TagKind | string;
}>`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;

  ${({ dimension }) => `
    height: ${dimension === 's' ? TAG_HEIGHT_S : TAG_HEIGHT_M}px;
    padding: ${dimension === 's' ? TAG_PADDING_TOP_S : TAG_PADDING_TOP_M}px ${
    dimension === 's' ? TAG_PADDING_LEFT_S : TAG_PADDING_LEFT_M
  }px;
  `}

  ${({ width }) => width && `width: ${typeof width === 'number' ? `${width}px` : width};`}
  margin-top: 8px;
  border-radius: ${(p) => smallGroupBorderRadius(p.theme.shape)};
  ${({ statusViaBackground, theme }) =>
    statusViaBackground ? wrapperBackground : `background: ${theme.color['Neutral/Neutral 10']};`}
  ${({ statusViaBackground, theme }) =>
    statusViaBackground ? wrapperBorder : `border: 1px solid ${theme.color['Neutral/Neutral 10']};`}

  display: inline-flex;
  align-items: center;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};

  &:hover,
  &:active {
    ${({ statusViaBackground, theme }) =>
      statusViaBackground ? wrapperHover : `background: ${theme.color['Neutral/Neutral 20']};`}
  }

  &:focus-visible {
    outline: none;

    &:before {
      content: '';
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: ${(p) => smallGroupBorderRadius(p.theme.shape)};
      border: 2px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    }
  }
`;

const Text = styled.span`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${typography['Caption/Caption 1']}
`;

const Circle = styled.div<{ background: TagKind | string }>`
  display: flex;
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  ${circleBackground}
`;

const Icon = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;

  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
`;

const StatusIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-left: 4px;

  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }

  &:hover {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    }
  }
`;

export type TagKind = 'neutral' | 'green' | 'blue' | 'red' | 'orange';

export interface TagVisualProps {
  /** Тип тэга. Можно выбрать из предложенных вариантов, либо задать свои цвета для тэга.
   * В случае когда статус задается через статусную метку (кружок), свойство background отвечает за цвет статусной метки.
   * В случае когда статус задается через цвет фона и обводки, свойство background отвечает за цвет фона,
   * свойство border отвечает за цвет обводки.
   */
  kind?: TagKind | { background: string; border?: string };
  /** Отображение статуса через цвет обводки и фона. По умолчанию, при statusViaBackground = false, отображение статуса
   * происходит через цветную статусную метку (цветной кружок рядом с текстом)
   */
  statusViaBackground?: boolean;
  /** Отображение иконки. Иконка отображается только по левому краю и при условии, что статус отображается через цвет обводки и фона */
  icon?: React.ReactNode;
}

export interface TagSizeProps {
  /** Высота тэга */
  dimension?: TagDimension;
  /** Ширина тэга */
  width?: number | string;
  /**
   * Позволяет рендерить компонент, используя другой тег HTML (https://styled-components.com/docs/api#as-polymorphic-prop).
   * В storybook в качестве примера приведены несколько возможных вариантов этого параметра (кроме них можно использовать любой другой HTML тег).
   */
  as?: React.ElementType;
}

export interface TagProps extends React.HTMLAttributes<HTMLButtonElement>, TagVisualProps, TagSizeProps {}

export interface TagInternalProps {
  /** Для внутреннего использования! Отображение иконки отрытия выпадающего меню */
  statusIcon?: React.ReactNode;
}

export const Tag = React.forwardRef<HTMLElement, TagProps & TagInternalProps>(
  (
    {
      children,
      kind = 'neutral',
      dimension = 'm',
      width,
      statusViaBackground = false,
      icon,
      statusIcon,
      onClick,
      ...props
    },
    ref,
  ) => {
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const textRef = React.useRef<HTMLElement>(null);
    const [overflow, setOverflow] = React.useState(false);
    const [tooltipVisible, setTooltipVisible] = React.useState(false);
    const background: TagKind | string =
      typeof kind === 'object' ? (kind.background ? kind.background : 'neutral') : (kind as TagKind);
    const border: TagKind | string =
      typeof kind === 'object' ? (!!kind.background && !!kind.border ? kind.border : 'neutral') : (kind as TagKind);

    const detectOverflow = (element: HTMLElement) => element.offsetWidth < element.scrollWidth;

    React.useLayoutEffect(() => {
      const element = textRef.current;
      if (element && detectOverflow(element) !== overflow) {
        setOverflow(detectOverflow(element));
      }
    }, [tooltipVisible]);

    return (
      <>
        <Wrapper
          ref={refSetter(ref, wrapperRef)}
          width={width}
          onClick={onClick}
          clickable={!!onClick || overflow}
          statusViaBackground={statusViaBackground}
          border={border}
          background={background}
          dimension={dimension}
          {...props}
        >
          {background !== 'neutral' && !statusViaBackground && <Circle background={background} />}
          {statusViaBackground && icon && <Icon>{icon}</Icon>}
          {children && <Text ref={textRef}>{children}</Text>}
          {statusIcon && <StatusIcon>{statusIcon}</StatusIcon>}
        </Wrapper>
        <Tooltip
          targetRef={wrapperRef}
          visible={tooltipVisible && overflow}
          onVisibilityChange={setTooltipVisible}
          renderContent={() => children}
        />
      </>
    );
  },
);

Tag.displayName = 'Tag';
