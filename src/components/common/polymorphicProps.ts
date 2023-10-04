import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, PropsWithChildren } from 'react';

/** prop 'as' controls the render element of the Polymorphic component */
type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

/** ComponentPropsWithoutRef<C> adds other props based on what the type of 'as' is.
 *
 * Omit takes in two generics. The first is an object type,
 * and the second a union of types you’d like to “omit” from the object type.
 *
 * PolymorphicComponentProps represents the utility type,
 * which accepts two generic types (C - the render element, Props - component props)
 *  and returns the union of component props, prop 'as' and props generated based on 'as' type.
 */

type PolymorphicComponentProps<C extends ElementType, Props = Record<string, unknown>> = PropsWithChildren<
  Props & AsProp<C>
> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentPropsWithRef<
  C extends ElementType,
  Props = Record<string, unknown>,
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };
