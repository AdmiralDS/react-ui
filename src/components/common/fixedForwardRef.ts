// https://www.totaltypescript.com/forwardref-with-generic-components

import * as React from 'react';

/**
 * Implements React.forwardRef usable for generic component typining
 * @param render
 * @returns
 */
export function fixedForwardRef<T, P = object>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
): (props: P & React.RefAttributes<T>) => React.ReactNode {
  return React.forwardRef(render) as any;
}
