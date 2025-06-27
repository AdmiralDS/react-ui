/** prop 'as' controls the render element of the Polymorphic component */
type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

/** ComponentPropsWithoutRef<C> adds other props based on what the type of 'as' is.
 *
 * Omit takes in two generics. The first is an object type,
 * and the second a union of types you’d like to “omit” from the object type.
 *
 * PolymorphicComponentProps represents the utility type,
 * which accepts two generic types (C - the render element, Props - component props)
 *  and returns the union of component props, prop 'as' and props generated based on 'as' type.
 */

type PolymorphicComponentProps<C extends React.ElementType, Props = Record<string, unknown>> = React.PropsWithChildren<
  Props & AsProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = Record<string, unknown>,
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };
