// https://www.totaltypescript.com/forwardref-with-generic-components

import type { ReactNode, RefAttributes, ForwardRefRenderFunction, PropsWithoutRef } from 'react';
import { forwardRef } from 'react';

/**
 * Implements React.forwardRef usable for generic component typining
 * @param render
 * @returns
 */
export function fixedForwardRef<T, P = object>(
  render: ForwardRefRenderFunction<T, PropsWithoutRef<P>>,
): (props: P & RefAttributes<T>) => ReactNode {
  return forwardRef(render) as (props: P & RefAttributes<T>) => ReactNode;
}
