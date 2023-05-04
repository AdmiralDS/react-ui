import * as React from 'react';
import { refSetter } from '../common/utils/refSetter';
import { checkOverflow } from '../common/utils/checkOverflow';
import { Tooltip } from '#src/components/Tooltip';

import { Wrapper, TagCircle, Icon, Text, StatusIcon } from './style';

export type TagDimension = 'm' | 's';

/**
 * @depricated Use alternative values 'neutral' | 'success' | 'primary' | 'danger' | 'warning'
 */
export type DepricatedTagKind = 'green' | 'blue' | 'red' | 'orange';

export type TagKind = 'neutral' | 'success' | 'primary' | 'danger' | 'warning' | DepricatedTagKind;

export interface TagVisualProps {
  /** Тип тэга. Можно выбрать из предложенных вариантов, либо задать свои цвета для тэга.
   * В случае когда статус задается через статусную метку (кружок), свойство background отвечает за цвет статусной метки.
   * В случае когда статус задается через цвет фона и обводки, свойство background отвечает за цвет фона,
   * свойство border отвечает за цвет обводки, свойство backgroundHover отвечает за цвет фона при ховере в случае активного тэга.
   */
  kind?: TagKind | { background: string; border?: string; backgroundHover?: string };
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
    const backgroundHover: TagKind | string =
      typeof kind === 'object'
        ? kind.backgroundHover
          ? kind.backgroundHover
          : kind.background
          ? kind.background
          : 'neutral'
        : (kind as TagKind);

    React.useLayoutEffect(() => {
      const element = textRef.current;
      if (element && checkOverflow(element) !== overflow) {
        setOverflow(checkOverflow(element));
      }
    }, [tooltipVisible, setOverflow]);

    React.useLayoutEffect(() => {
      function show() {
        setTooltipVisible(true);
      }
      function hide() {
        setTooltipVisible(false);
      }
      const wrapper = wrapperRef.current;
      if (wrapper) {
        wrapper.addEventListener('mouseenter', show);
        wrapper.addEventListener('mouseleave', hide);
        wrapper.addEventListener('focus', show);
        wrapper.addEventListener('blur', hide);
        return () => {
          wrapper.removeEventListener('mouseenter', show);
          wrapper.removeEventListener('mouseleave', hide);
          wrapper.removeEventListener('focus', show);
          wrapper.removeEventListener('blur', hide);
        };
      }
    }, [setTooltipVisible]);

    return (
      <>
        <Wrapper
          ref={refSetter(ref, wrapperRef)}
          width={width}
          onClick={onClick}
          clickable={!!onClick}
          statusViaBackground={statusViaBackground}
          border={border}
          background={background}
          backgroundHover={backgroundHover}
          dimension={dimension}
          type="button"
          {...props}
        >
          {background !== 'neutral' && !statusViaBackground && <TagCircle background={background} />}
          {statusViaBackground && icon && <Icon>{icon}</Icon>}
          {children && <Text ref={textRef}>{children}</Text>}
          {statusIcon && <StatusIcon>{statusIcon}</StatusIcon>}
        </Wrapper>
        {tooltipVisible && overflow && <Tooltip targetRef={wrapperRef} renderContent={() => children} />}
      </>
    );
  },
);

Tag.displayName = 'Tag';

export { TagCircle } from './style';
