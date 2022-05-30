import React, { FC } from 'react';
import { Dimension } from './TreeNode';

export interface TreeProps {
  /** Размер компонента */
  dimension?: Dimension;
}

export const Tree: FC<TreeProps> = () => {
  return <div>Hello</div>;
};
