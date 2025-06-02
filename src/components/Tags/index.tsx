import type { FC, KeyboardEvent, MouseEvent, ReactNode, HTMLAttributes } from 'react';
import { Children, cloneElement, isValidElement } from 'react';
import styled from 'styled-components';
import type { TagDimension, TagKind } from '#src/components/Tag';

const TagsWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 8px;
`;

type Kind = TagKind;
type Dimension = TagDimension;

export interface TagsProps extends HTMLAttributes<HTMLDivElement> {
  /** Ширина тэгов */
  width?: number | string;
  /** Высота тэгов */
  dimension?: Dimension;
  /** Тип тэгов */
  kind?: Kind;
  /** Отображение статуса через цвет обводки и фона. По умолчанию, при statusViaBackground = false, отображение статуса
   * происходит через цветную статусную метку (цветной кружок рядом с текстом)
   */
  statusViaBackground?: boolean;
  /** Скрыть обводку тэга (при условии, что статус отображается через цвет обводки и фона) */
  isBorderHidden?: boolean;
  /** Обработчик клика по тэгам */
  onClick?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
}

export const Tags: FC<TagsProps> = ({
  children,
  width,
  dimension,
  kind,
  isBorderHidden,
  statusViaBackground,
  onClick,
  ...props
}) => {
  return (
    <TagsWrapper {...props}>
      {Children.map(children, (child: ReactNode) => {
        if (!isValidElement(child)) {
          return null;
        }
        return cloneElement(child, {
          onClick: child.props.onClick || onClick,
          width: child.props.width || width,
          kind: child.props.kind || kind,
          statusViaBackground: child.props.statusViaBackground || statusViaBackground,
          isBorderHidden: child.props.isBorderHidden || isBorderHidden,
          ...child.props,
          dimension: dimension,
        });
      })}
    </TagsWrapper>
  );
};

Tags.displayName = 'Tags';
