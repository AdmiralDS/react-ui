// https://www.totaltypescript.com/forwardref-with-generic-components

import type { ReactNode, RefAttributes, Ref } from 'react';
import { forwardRef } from 'react';

/**
 * Implements React.forwardRef usable for generic component typining
 * @param render
 * @returns
 */
export function fixedForwardRef<T, P = object>(
  render: (props: P, ref: Ref<T>) => ReactNode,
): (props: P & RefAttributes<T>) => ReactNode {
  return forwardRef(render) as any;
}
