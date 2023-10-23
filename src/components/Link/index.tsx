import * as React from 'react';
import type { AppearanceLink, Dimension } from './LinkComponent';
import { LinkComponent } from './LinkComponent';
import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../common/polymorphicProps';

export interface LinkProps {
  /** Текст ссылки */
  children: React.ReactNode;
  /** Вид ссылки */
  appearance?: AppearanceLink;
  /** Отключение ссылки */
  disabled?: boolean;
  /** Размер ссылки */
  dimension?: Dimension;
}

export type LinkPolymorphicProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, LinkProps>;

// type LinkComp = <C extends React.ElementType = 'a'>(props: LinkPolymorphicProps<C>) => React.ReactElement | null;

export const Link = React.forwardRef(
  <C extends React.ElementType = 'a'>(
    { disabled = false, appearance = 'primary', dimension = 'm', ...props }: LinkPolymorphicProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    return (
      <LinkComponent
        $dimension={dimension}
        ref={ref}
        tabIndex={disabled ? -1 : props.tabIndex}
        disabled={disabled}
        $appearance={appearance}
        {...props}
      />
    );
  },
);

Link.displayName = 'Link';

export { LinkComponentCssMixin } from './LinkComponent';
export type { LinkComponent } from './LinkComponent';
