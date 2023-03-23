import type React from 'react';

export type RefCallback<T> = (node: T | null) => void;
export type RefObject<T> = React.MutableRefObject<T | null | undefined> | React.RefObject<T | null | undefined>;

function isRefObject<T>(ref: RefCallback<T> | RefObject<T>): ref is React.MutableRefObject<T> {
  return typeof ref !== 'function';
}

function isRefCallback<T>(ref: RefCallback<T> | RefObject<T>): ref is RefCallback<T> {
  return typeof ref === 'function';
}

/**
 * Creates a ref handler which assigns the ref returned by React for a mounted component to a targetRef object.
 * If provided, it will also update the given `propRef` with the value of the ref
 * @param {T} node - donNode
 * @param {RefCallback<T> | RefObject<T> | null | undefined} propRef - ref handler prop
 * @param {React.MutableRefObject<T | null> | React.RefObject<T | null>} targetRef - ref object in property "current" of which ref will be saved
 */

export function handleRef<T>(
  node: T,
  propRef: RefCallback<T> | RefObject<T> | null | undefined,
  targetRef: React.MutableRefObject<T | null> | React.RefObject<T | null>,
) {
  (targetRef as React.MutableRefObject<T>).current = node;

  if (!propRef) {
    return;
  }

  if (isRefObject(propRef)) {
    propRef.current = node;
  } else if (isRefCallback(propRef)) {
    propRef(node);
  }
}
