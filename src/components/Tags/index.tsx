import type { FC, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import React, { Children, cloneElement, HTMLAttributes, isValidElement } from 'react';
import styled from 'styled-components';

const TAG_MARGIN = '8px';
const TagsWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  & > * {
    margin-right: ${TAG_MARGIN};
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

type Dimension = 'm' | 's';
type Kind = 'neutral' | 'green' | 'blue' | 'red' | 'orange';

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

export const Tags: FC<TagsProps> = ({ children, width, dimension, kind, onClick }) => {
  return (
    <TagsWrapper>
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
