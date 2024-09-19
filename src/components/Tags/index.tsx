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
  /** Обработчик клика по тэгам */
  onClick?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
}

export const Tags: FC<TagsProps> = ({ children, width, dimension, kind, onClick, ...props }) => {
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
          ...child.props,
          dimension: dimension,
        });
      })}
    </TagsWrapper>
  );
};

Tags.displayName = 'Tags';
